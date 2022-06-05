local _M = {
    http = require("resty.http")
}

function _M:verify_token(token)
    if token == nil then
        return {
            valid=false,
            error="token must be set"
        }
    end

    local res, err = self.http.new():request_uri(self.url, {
        method = "GET",
        headers = {
            [self.target_header] = token,
        },
    })

    if not res then
        return {
            valid=false,
            error="request failed: "..err
        }
    end

    if res.status ~= 200 then
        return {
            valid=false,
            error="status: "..res.status
        }
    end

    return {
        valid=true,
        data=res.body,
    }
end

function _M:new(url, target_header)
    local instance = {
        url = url,
        target_header = target_header,
    }
    
    setmetatable(instance, self)
    self.__index = self
    return instance
end

return _M