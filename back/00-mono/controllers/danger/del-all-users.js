const path_models = '../../models';
const User = require(`${path_models}/user.js`);

module.exports = async (req, res, next) => {
    try {
        
        User.remove({}, function (err) {
            if (err) console.log('Error: ', err)
            else console.log('All users were deleted');
        });

        log('The Danger !!! ');

        setTimeout(() => {
            log('The del-all-users !!! ');
        }, 1000);

        res.json({ m: 'The del-all-users!' });
        
    } catch (e) {
        error(e, req, res, 500, 'Cannot Delete All Users ');
    }
}