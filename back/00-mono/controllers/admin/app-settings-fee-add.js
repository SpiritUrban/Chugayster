const lib = require('./_lib');
const path_models = '../../models';
const App = require(`${path_models}/app.js`);

module.exports = async (req, res, next) => {
    try {
        // var-s
        let user_id = req.body.currentUser._id
        // Get Admin & Barriers
        let Admin = await getAdminSAFE(user_id, req, res)
        // Add fee
        let result = await App.findOneAndUpdate({ name: 'settings' }, {
            $push: {
                fee: req.body.fee
            }
        })
        // send 'ok'
        send('ok', req, res)
    } catch (e) {
        error(e, req, res, 500, 'Cannot Add Fee ')
    }
}