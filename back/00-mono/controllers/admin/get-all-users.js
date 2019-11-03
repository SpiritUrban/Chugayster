const lib = require('./_lib');
const path_models = '../../models';
const User = require(`${path_models}/user.js`);

module.exports = async (req, res, next) => {
    try {
        User.find({}, function (err, result) {
            let filtering_result = []
            result.map((el) => {
                filtering_result.push({
                    _id: el._id,
                    username: el.username,
                    email: el.email,
                    active: el.active,
                    email_verif: el.email_verif,
                    phone_verif: el.phone_verif,
                    last_appeal: el.last_appeal,
                    linked_users: el.linked_users,
                    wallets: el.wallets,
                    last_login: el.last_login,
                    saved_numbers: el.saved_numbers,
                    purchases_made: el.purchases_made,
                    facebook: el.facebook,
                    google: el.google
                })
                if (err) error(err, req, res, 204, '')
            })
            send(filtering_result, req, res)
        })
    } catch (e) {
        error(e, req, res, 500, 'Cannot get List of All Users ')
    }
}