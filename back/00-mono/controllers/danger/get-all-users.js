const path_models = '../../models';
const User = require(`${path_models}/user.js`);

module.exports = async (req, res, next) => {
    try {
        User.find({}, (err, result) => send(result, req, res));
    } catch (e) {
        error(e, req, res, 500, 'Cannot get List of All Users ');
    }
}