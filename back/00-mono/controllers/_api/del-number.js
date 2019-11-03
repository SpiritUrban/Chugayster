const path_models = '../../models';
const User = require(`${path_models}/user.js`);

module.exports = async (req, res, next) => {
    try {
        // var-s
        let user_id = req.body._id
        let idx = req.params.idx
        // Get User & Barriers
        let u = await getUserSAFE({ _id: user_id }, req, res)
        // get list of numbers
        let new_numbers = u.saved_numbers.reverse()
        // prepare & add
        new_numbers.splice(idx, 1)
        new_numbers.reverse()
        // save new list of numbers
        await User.findOneAndUpdate({ _id: user_id }, {
            saved_numbers: new_numbers
        })
        // send 'ok'
        send('ok', req, res)
    } catch (e) {
        error(e, req, res, 500, 'Cannot delete a number ')
    }
}