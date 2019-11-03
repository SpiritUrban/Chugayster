const log = console.log;
const mails = require('../mail/mails.js');

module.exports = async (req, res, next) => {
    try {
        log('\n The: re-send-mail \n')
        // send mail for verification
        mails.send_mail_verification(req.user._id)
        // send msg
        return send('ok', req, res, 'Sent')
    } catch (e) {
        error(e, req, res, 500, 'Cannot save profile data! ')
    }
}