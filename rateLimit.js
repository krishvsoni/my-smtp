const setRateLimit = require('express-rate-limit');
const rateLimitMiddleware = setRateLimit({
    windowMs: 60*1000,
    max:5,
    message: "<b> You have exceeded your 5 requests per minute limit. </b>",
    headers:true,

});

module.exports = rateLimitMiddleware;