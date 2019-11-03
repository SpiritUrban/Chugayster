const path_models = '../../models';
const User = require(`${path_models}/user.js`);
var b2b_API = require(`../___/b2b-api.js`);

module.exports = async (req, res, next) => {
    try {
        // var-s
        let _id = req.body.userData._id
        let username = req.body.userData.username
        let number = req.body.number
        let price = req.body.price
        let product_id = req.body.product_id
        // Get User & Barriers
        let u = await getUserSAFE({ _id }, req, res)
        // top-up
        let result = await b2b_API.top_up(number, product_id, price)
        // var-s
        let balance = u.wallets.USD.balance
        let new_balance = balance - price
        let numbers = u.saved_numbers
        // check & update a 'saved_numbers'
        function exist(i_number) {
            return i_number == number
        }
        // miss
        if (numbers.some(exist)) log('Number already exist'.info)
        // add the namber
        else {
            log('add number'.info)
            await User.findOneAndUpdate({ _id }, {
                $push: {
                    saved_numbers: number
                }
            })
        }
        // update wallet
        let u2 = await User.findOneAndUpdate({ _id }, {
            wallets: {
                USD: {
                    balance: new_balance
                }
            }
        })
        // send result
        send(result, req, res)
    } catch (e) {
        error(e, req, res, 500, 'Cannot top-up ')
    }
}