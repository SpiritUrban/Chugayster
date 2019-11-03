const path_models = '../../models';
const User = require(`${path_models}/user.js`);

module.exports = async (req, res, next) => {
    try {
        // var-s
        let username = req.body.username
        let email = req.body.email
        let id = req.body._id
        // logs
        log(`
            username ${username}
            email    ${email}
            id       ${id}
        `)
        // Get user data
        var t = await User.findOne({ username })
        // Filter (Available data)
        let result = {
            _id: t._id,
            username: t.username,
            email: t.email,
            active: t.active,
            email_verif: t.email_verif,
            phone_verif: t.phone_verif,
            last_appeal: t.last_appeal,
            wallets: t.wallets,
            last_login: t.last_login,
            purchases_made: t.purchases_made,
            saved_numbers: t.saved_numbers
        }
        // Send data
        send(result, req, res)
    } catch (e) {
        error(e, req, res, 500, 'Cannot get user data')
    }
}