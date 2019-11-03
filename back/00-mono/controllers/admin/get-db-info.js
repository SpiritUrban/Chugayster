const lib = require('./_lib');
const path_models = '../../models';
const User = require(`${path_models}/user.js`);
const App = require(`${path_models}/app.js`);

module.exports = async (req, res, next) => {
    try {
        // var-s
        let user_id = req.body.currentUser._id
        // Get Admin & Barriers
        let Admin = await getAdminSAFE(user_id, req, res)
        // Get names of colections
        let modelNames = mongoose.modelNames()
        // Get collections
        let userModel = await User.find({})
        let appModel = await App.find({})
        // send 
        send({
            modelNames,
            models: {
                User: userModel,
                App: appModel
            }
        }, req, res)
    } catch (e) {
        error(e, req, res, 500, 'Cannot get BD information ')
    }
}