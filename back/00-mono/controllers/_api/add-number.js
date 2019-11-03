const path_models = '../../models';
const User = require(`${path_models}/user.js`);

module.exports = async (req, res, next) => {
    try {
        // var-s
        let user_id = req.body._id
        // Get User & Barriers
        let u = await getUserSAFE({ _id: user_id }, req, res)
        // add number
        await User.findOneAndUpdate({ _id: user_id }, {
            $push: {
                saved_numbers: req.params.number
            }
        })
        // send 'ok'
        send('ok', req, res)
    } catch (e) {
        error(e, req, res, 500, 'Cannot add a number ')
    }
}