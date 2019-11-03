const lib = require('./_lib');
const b2b_API = require(`../___/b2b-api.js`);

module.exports = async (req, res, next) => {
    try {
        b2b_API.user_status().then(
            result => send(result, req, res),
            err => error(err, req, res, 500, '')
        )
    } catch (e) {
        error(e, req, res, 500, 'Cannot get App Status ')
    }
}