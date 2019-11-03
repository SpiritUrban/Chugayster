var b2b_API = require('../../controllers/___/b2b-api.js')

module.exports = async (req, res, next) => {
    try {
        let result = await b2b_API.top_up_info(req.params.number)
        send(result, req, res)
    } catch (e) {
        error(e, req, res, 500, 'Cannot get info about number ')
    }
}