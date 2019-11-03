const lib = require('./_lib');
const path_models = '../../models';
const App = require(`${path_models}/app.js`);

module.exports = async (req, res, next) => {
    try {
        // var-s
        let user_id = req.body.currentUser._id
        let i = req.body.data.i
        let changed_fee = req.body.data.changed_fee
        // Get Admin & Barriers
        let Admin = await getAdminSAFE(user_id, req, res)
        // Get settings - mean: (list of fee)
        let state = await App.findOne({ name: 'settings' })
        // take a list
        let fee_list = state.fee
        // change one fee
        fee_list.splice(i, 1, changed_fee)
        // save settings - mean: (new list of fee)
        let result = await App.findOneAndUpdate({ name: 'settings' }, {
            fee: fee_list
        })
        // send 'ok'
        send('ok', req, res)
    } catch (e) {
        error(e, req, res, 500, 'Cannot Change Fee ')
    }
}