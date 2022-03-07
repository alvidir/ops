local verify_token = function(self)
    local jwt_token = ngx.req.get_headers()[self.jwt_header]
    if jwt_token == nil then
        ngx.status = 404
        ngx.say('token not found')
        ngx.exit(ngx.OK)
        return
    end

    local jwt_token, err = self.b64.decode_base64url(self.jwt_token)
    if not jwt_token then
        ngx.status = 400
        ngx.say('could not decode token: ', err)
        ngx.exit(ngx.OK)
        return
    end

    local jwt_public, err = self.b64.decode_base64url(self.jwt_public)
    if not jwt_public then
        ngx.status = 400
        ngx.say('could not decode public key: ', err)
        ngx.exit(ngx.OK)
        return
    end

    local claims = self.jwt:verify(self.jwt_public, self.jwt_token)
    local verified = claims['verified']

    if not verified then
        local reason = claims['reason']
        ngx.status = 498
        ngx.say('unverified token: ', reason)
        ngx.exit(ngx.OK)
        return
    end

    local payload = claims['payload']
    if payload == nil then 
        ngx.status = 498
        ngx.say('no payload found')
        ngx.exit(ngx.OK)
        return
    end

    local jti = payload['jti']
    if jti == nil then 
        ngx.status = 498
        ngx.say('no token id (jti) in payload')
        ngx.exit(ngx.OK)
        return
    end

    ngx.var.subject = payload['sub']
    if ngx.var.subject == nil then 
        ngx.status = 498
        ngx.say('no subject (sub) in payload')
        ngx.exit(ngx.OK)
        return
    end

    local red = self.redis:new()
    red:set_timeouts(1000, 1000, 1000)

    local ok, err = red:connect(self.redis_dsn, 6379)
    if not ok then
        ngx.status = 500
        ngx.say('failed to connect to redis cluster: ', err)
        ngx.exit(ngx.OK)
        return
    end

    local res, err = red:get(jti)
    if not res then
        ngx.status = 498
        ngx.say('failed to get token with id ', jti, ': ', err)
        ngx.exit(ngx.OK)
        return
    end

    if res == ngx.null then
        ngx.status = 498
        ngx.say('failed to get token with id ', jti, ': not found')
        ngx.exit(ngx.OK)
        return
    end

    local ok, err = red:set_keepalive(10000, 100)
    if not ok then
        ngx.status = 200
        ngx.say('failed to set keepalive: ', err)
        ngx.exit(ngx.OK)
        return
    end

    ngx.status = 200
    ngx.exit(ngx.OK)
end

local methods = {
    verify_token = verify_token,
}

local new = function(redis_dsn, jwt_public, jwt_header)
    local instance = setmetatable({}, {__index = methods})
    instance.b64 = require("ngx.base64")
    instance.jwt = require("resty.jwt")
    instance.redis = require("resty.redis")
    instance.redis_dsn = redis_dsn
    instance.jwt_public = jwt_public
    if jwt_header == nil then
        instance.jwt_header  = "authorization"
    else
        instance.jwt_header = jwt_header
    end

    return instance
end

local from_environment = function()
    local redis_dsn = os.getenv("REDIS_DSN")
    local jwt_public = os.getenv("JWT_PUBLIC")
    local jwt_header = os.getenv("JWT_HEADER")
    return new(redis_dsn, jwt_public, jwt_header)
end

return {
    new = new,
    from_environment = from_environment,
}