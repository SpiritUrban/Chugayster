const lib = require('./_lib');
const path_models = '../../models';
const User = require(`${path_models}/user.js`);

module.exports = async (req, res, next) => {
    try {
        // var-s
        let user_id = req.body._id
        let del_user_id = req.params.idx
        // Get Admin & Barriers
        let Admin = await getAdminSAFE(user_id, req, res)
        // Remove slave user
        User.findOneAndRemove({ _id: del_user_id }, (err, offer) => {
            send('ok', req, res)
        })
    } catch (e) {
        error(e, req, res, 500, 'Cannot Dele User ')
    }
}