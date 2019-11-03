const path_models = '../../../models';
const User = require(`${path_models}/user.js`);

module.exports = async (req, res, next) => {
    try {
        console.log('**************************** SHOW USRS ************')
        User.find({}, (err, users) => res.render('danger/show-users', {users}));
    } catch (e) {
        error(e, req, res, 500, 'Cannot get List of All Users ');
    }
}