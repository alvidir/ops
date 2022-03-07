local verify_token = function(self)
    return ''
end

local methods = {
    verify_token = verify_token,
}

local new = function()
    local instance = setmetatable({}, {__index = methods})
    return instance
end

return {
    new = new,
}