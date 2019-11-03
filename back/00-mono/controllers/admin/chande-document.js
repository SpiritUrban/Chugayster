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
        log('BODY '.info, body)
        log('doc'.info, doc)
        log('coll'.info, coll)
        log('doc_id '.info, doc_id)
        // replace successively
        for (let _field in doc) {
            if (coll == 'User') {
                await User.findByIdAndUpdate(doc_id, {
                    [_field]: doc[_field]
                })
            }
            if (coll == 'App') {
                await App.findByIdAndUpdate(doc_id, {
                    [_field]: doc[_field]
                })
            }
        }
        // send 
        send('ok', req, res)
    } catch (e) {
        error(e, req, res, 500, 'Cannot change document ')
    }
}