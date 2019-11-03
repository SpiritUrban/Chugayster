const lib = require('./_lib');
const path_models = '../../models';
const App = require(`${path_models}/app.js`);

module.exports = async (req, res, next) => {
    try {
        // get document
        var doc = await App.findOne({ name: 'settings' })
        // not exist?
        if (doc == null) error('custom', req, res, 403, 'Document of settings not find')
        // send document
        send(doc, req, res)
    } catch (e) {
        error(e, req, res, 500, 'Cannot get Settings of App ')
    }
}