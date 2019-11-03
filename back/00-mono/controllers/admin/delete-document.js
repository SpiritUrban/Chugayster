const lib = require('./_lib');
const path_models = '../../models';
const User = require(`${path_models}/user.js`);

module.exports = async (req, res, next) => {
    try {
        // var-s
        let user_id = req.body.currentUser._id
        let body = req.body
        let coll = req.body.collection
        let doc = req.body.document
        let doc_id = doc._id
        // Get Admin & Barriers
        let Admin = await getAdminSAFE(user_id, req, res)
        // logs
        //
        log('BODY '.info, body)
        log('doc'.info, doc)
        log('coll'.info, coll)
        log('doc_id '.info, doc_id)
        // Delete
        if (coll == 'User') {
            await User.remove({ _id: doc_id })
        }
        if (coll == 'App') {
            await App.remove({ _id: doc_id })
        }
        // send 
        send('ok', req, res)
    } catch (e) {
        error(e, req, res, 500, 'Cannot delete document ')
    }
}