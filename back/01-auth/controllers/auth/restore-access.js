const path_models = '../../models';
const User = require(`${path_models}/user.js`);
const mails = require('../mail/mails.js');
const _lib = require(`../lib/_.js`);

module.exports = async (req, res, next) => {
    try {
        // var-s
        const email = req.body.login_email
        const username = req.body.login_username
        // logs
        log(` req.body: `.info, req.body)
        // find by 'email' or 'username'
        let user = (email) ?
            await User.findOne({ email }).exec() :
            await User.findOne({ username }).exec();

        if (user == null) error('custom', req, res, 409, 'E-mail or user does not exist!')
        const email_token = _lib.rand_str_long();
        user = await User.findOneAndUpdate({ email }, { email_token })
        // send mail for restore password
        mails.send_mail_restore_password(email)
        // // send msg
        return send('ok', req, res, 'Your password has been sent to your mail.')
    } catch (e) {
        error(e, req, res, 500, 'Cannot change password! ')
    }
}