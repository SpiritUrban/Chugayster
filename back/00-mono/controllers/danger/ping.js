const mailer = require('../mail/mailer.js');

module.exports = async (req, res, next) => {
    try {
        token = '3285qcbgasuefilabkstug'

        mailer.send(
            'Vitaliy <we.js.clan@gmail.com> ', // from
            'shadespiritenator@gmail.com', // to
            'Підтвердження пошти | Mail Confirmation', // subject
            // html
            `
                Для підтвердження пошти перейдіть за цим посиланням 
                | To verify your mail, go to this link. 
                <a href="http://localhost/pages/auth/mail-verify?token=${token}" target="_blank">link</a>
            `
            + new Date(),
        )
        res.json({ m: 'The ping!' })
    } catch (e) {
        error(e, req, res, 500, 'Cannot Ping ');
    }
}