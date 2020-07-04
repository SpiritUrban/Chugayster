const path_models = '../../models';
const User = require(`${path_models}/user.js`);
const hash = require(`../crypto/hash.js`);

module.exports = async (req, res, next) => {
    try {
        // var-s
        let user_id = req.user._id;
        var hp = hash(req.body.old_password + '');
        var n_hp = hash(req.body.new_password + '');
        // Check
        if (hp !== req.user.password) return error('custom', req, res, 401, 'User password not correct!');
        // Change password
        await User.findOneAndUpdate({ _id: user_id }, { password: n_hp });
        // send msg
        return send('ok', req, res, 'Password changed');
    } catch (e) {
        error(e, req, res, 500, 'Cannot change password! ');
    }
}