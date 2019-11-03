const log = console.log;
let mailer = require('./mailer');
var User = require('../../models/user');


module.exports = {

    //
    // mail verification
    //
    send_mail_verification: async (user_id) => {

        let user = await User.findOne({ _id: user_id })

        mailer.send(
            'JS-CLAN <we.js.clan@gmail.com> ', // from
            user.email, // to
            'Mail Confirmation | Підтвердження пошти', // subject
            // html
            `<p>
                Для підтвердження пошти перейдіть за цим посиланням 
                | To verify your mail, go to this link. 
                <a href="${process.env.HOST}/pages/auth/mail-verify?user=${user._id}&token=${user.email_token}" target="_blank">link</a>
            </p>`
            + new Date(),
        )
    },


    //
    // mail restore
    //
    send_mail_restore_password: async (email) => {

        let user = await User.findOne({ email })

        mailer.send(
            'JS-CLAN <we.js.clan@gmail.com> ', // from
            user.email, // to
            'Restore of password | Відновлення паролю', // subject
            // html
            `<p>
                Для відновлення паролю перейдіть за цим посиланням 
                | To restore your password, go to this link. 
                <a href="${process.env.HOST}/pages/auth/restore-password?user=${user._id}&token=${user.email_token}" target="_blank">link</a>
            </p>`
            + new Date(),
        )        
    },


    //
    // mail test
    //
    test: async (email) => {

        mailer.send(
            'JS-CLAN <we.js.clan@gmail.com> ', // from
            email, // to
            'test ', // subject
            // html
            `<p>
                   TEST
            </p>`
            + new Date(),
        )        
    }    

}