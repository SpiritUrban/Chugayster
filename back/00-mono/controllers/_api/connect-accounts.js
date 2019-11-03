const path_models = '../../models';
const User = require(`${path_models}/user.js`);

module.exports = async (req, res, next) => {
    try {
        // logs
        log(`req.body:`.info, req.body)
        log('req.body.aim >>>> '.info, req.body.aim)
        log('req.body.master >>>> '.info, req.body.master)
        log('req.body.slave >>>> '.info, req.body.slave)
        // var-s
        let aim = req.body.aim // 'fb' or 'google'
        let master_user_id = req.body.master._id
        let slave_user_id = req.body.slave._id
        // Get MASTER User & Barriers
        let u = await getUserSAFE({ _id: master_user_id }, req, res)
        // Get SLAVE User & Barriers
        let s = await getUserSAFE({ _id: slave_user_id }, req, res)
        // check for the same
        if (u._id == s._id) error('custom', req, res, 500, 'The Same User! ')
        // Merging of wallets
        let summ_balance = u.wallets.USD.balance + s.wallets.USD.balance
        // facebook ?
        if (aim == 'facebook') {
            log(' >> faceook PROCESS')
            User.findOneAndUpdate({ _id: master_user_id }, {
                facebook: s.facebook,
                wallets: {
                    USD: {
                        balance: summ_balance
                    }
                }
            }, function (err, doc) {
                if (err) log("Something wrong in faceook PROCESS!".error)
            })
        }
        // google ?
        if (aim == 'google') {
            log(' >> google PROCESS')
            User.findOneAndUpdate({ _id: master_user_id }, {
                google: s.google,
                wallets: {
                    USD: {
                        balance: summ_balance
                    }
                }
            }, function (err, doc) {
                if (err) log("Something wrong in google PROCESS!".error)
            })
        }
        // remove slave
        User.findOneAndRemove({ _id: slave_user_id }, function (err, offer) {
            // send 'ok'
            send('ok', req, res)
        })

    } catch (e) {
        error(e, req, res, 500, 'Cannot add a number ')
    }
}