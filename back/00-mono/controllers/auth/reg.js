const log = console.log;
const path_models = '../../models';
const User = require(`${path_models}/user.js`);
const _lib = require(`../lib/_.js`);
const hash = require(`../crypto/hash.js`);
const mails = require('../mail/mails.js');
const uuid = require('uuid');

module.exports = async (req, res, next) => {
    try {
        // var-s
        let email = req.body.email
        let passw = req.body.password
        let username = req.body.username
        let first_name = req.body.first_name
        let last_name = req.body.last_name

        log('BODY : '.info, '\n', req.body, '\n')

        let userByEmail = await User.findOne({ email: email }).exec()
        if (userByEmail !== null) error('custom', req, res, 409, 'Email already exists!')

        let userByName = await User.findOne({ username: username }).exec()
        if (userByName !== null) error('custom', req, res, 409, 'User already exists!')

        log('userByName', userByName)
        log('\n', 'userByName : '.info, '\n', userByName, '\n')

        const email_token = _lib.rand_str_long();

        if (userByName == null) {
            let u = new User({
                username: username,
                email: email,
                email_token,
                password: hash(passw),
                name: first_name + ' ' + last_name,
                numeric_id: randomIntFromInterval(11111111, 99999999),
                phone_pin: randomIntFromInterval(111111, 999999),
                link_pin: randomIntFromInterval(111111, 999999),
                wallets: {
                    USD: {
                        balance: 0
                    }
                },
                facebook: {
                    id: '',
                    token: '',
                    email: '',
                    username: ''
                },
                google: {
                    id: '',
                    token: '',
                    email: '',
                    username: ''
                },
                active: false,
                email_verif: false,
                phone_verif: false,
                ever_cha: uuid.v1(),
                ever_sec: hash(uuid.v1())
            })
            log('\n', 'u'.info, '\n', u, '\n')
            let x = await u.save()
            // send mail for verification
            mails.send_mail_verification(u._id)

            // mailer.send(
            //     'Vitaliy <we.js.clan@gmail.com> ', // from
            //     email, // to
            //     'Підтвердження пошти | Mail Confirmation', // subject
            //     // html
            //     `<p>
            //         Для підтвердження пошти перейдіть за цим посиланням 
            //         | To verify your mail, go to this link. 
            //         <a href="${process.env.HOST}/pages/auth/mail-verify?token=${email_token}" target="_blank">link</a>
            //     </p>` 
            //     + new Date(), 
            // )
            send('ok', req, res)
        }
    } catch (e) {
        error(e, req, res, 500, 'Cannot register ')
    }
}