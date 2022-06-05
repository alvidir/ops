local _M = {
    b64 = require("ngx.base64"),
    jwt = require("resty.jwt"),
    redis = require("resty.redis")
}

function _M:look_up_token_id(jti)
    local red = self.redis:new()
    red:set_timeouts(1000, 1000, 1000)

    local ok, err = red:connect(self.redis_dsn, 6379)
    if not ok then
        return nil, err
    end

    local res, err = red:get(jti)
    if not res then
        return nil, err
    end

    if res == ngx.null then
        return nil, "not found"
    end

    local ok, err = red:set_keepalive(10000, 100)
    if not ok then
        ngx.log(ngx.ERR, "failed to keepalive redis connection: ", err)
    end

    return res, nil
end

function _M:verify_token(token)
    local jwt_token, err = self.b64.decode_base64url(token)
    if not jwt_token then
        return {
            status=400,
            error="could not decode token: "..err
        }
    end

    local public_key, err = self.b64.decode_base64url(self.public_key)
    if not public_key then
        return {
            status=500,
            error="could not decode public key: "..err
        }
    end

    local claims = self.jwt:verify(self.public_key, jwt_token)
    local verified = claims['verified']

    if not verified then
        return {
            status=498,
            error="unverified token: "..claims['reason']
        }
    end

    local payload = claims['payload']
    if payload == nil then 
        return {
            status=498,
            error="no payload found"
        }
    end

    local jti = payload['jti']
    if jti == nil then 
        return {
            status=498,
            error="no token id (jti) in payload"
        }
    end

    local redis_res, err = self.look_up_token_id(jti)
    if redis_res == nil then
        return {
            status=498,
            error="token is not valid: "..err
        }
    end

    local subject = payload['sub']
    if subject == nil then 
        return {
            status=498,
            error="no subject (sub) in payload"
        }
    end

    return {
        status=200,
        subject=subject,
    }

end

function _M:new(redis_dsn, public_key)
    local instance = {
        redis_dsn = redis_dsn,
        public_key = public_key,
    }
    
    setmetatable(instance, self)
    self.__index = self
    return instance
end

return _M