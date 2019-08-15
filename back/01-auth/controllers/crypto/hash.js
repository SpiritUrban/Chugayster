const sha1 = require('sha1');

module.exports = (input) => sha1(sha1(input) + sha1(process.env.PSWD_SALT));
