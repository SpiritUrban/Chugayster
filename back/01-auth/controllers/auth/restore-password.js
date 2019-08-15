const path_models = '../../models';
const User = require(`${path_models}/user.js`);

module.exports = async (req, res, next) => {
    try {
        // var-s
        const _id = req.body.user;
        const token = req.body.token;
        const n_hp = hash(req.body.new_password);
        // logs
        log(` req.body: `.info, req.body)
        log('_id: ', _id, req.body.user)
        // get user
        let user = await User.findOne({ _id }).exec()
        // Check
        if (token !== user.email_token) return error('custom', req, res, 401, 'User token not correct!')
        // Change password
        await User.findOneAndUpdate({ _id }, { password: n_hp, email_token: '' })
        // send msg
        return send('ok', req, res, 'Password changed')
    } catch (e) {
        error(e, req, res, 500, 'Cannot change password! ')
    }
}