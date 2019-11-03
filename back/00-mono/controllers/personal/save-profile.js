const log = console.log;
const path_models = '../../models';
const User = require(`${path_models}/user.js`);

module.exports = async (req, res, next) => {
    try {
        log('\n The: save-profile \n')
        // var-s
        let _id = req.user._id
        // Change password
        await User.findOneAndUpdate({ _id }, {
            first_name: req.body.first_name,
            last_name: req.body.last_name
        })
        // send msg
        return send('ok', req, res, 'The data is saved')
    } catch (e) {
        error(e, req, res, 500, 'Cannot save profile data! ')
    }
}