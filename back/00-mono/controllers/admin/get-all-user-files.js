const lib = require('./_lib');
const path_models = '../../models';
const User = require(`${path_models}/user.js`);
const fs = require('fs');


module.exports = async (req, res, next) => {
    try {
        // var-s
        let user_id = req.body.currentUser._id
        // Get Admin & Barriers
        let Admin = await getAdminSAFE(user_id, req, res)
        // create General Folder ?
        if (!fs.existsSync('./uploads')) {
            fs.mkdirSync('./uploads')
        }
        // Get all users
        User.find({}, function (err, users) {
            // var-s
            let filtering_users = []
            let user_files = []
            // Generate list of users
            users.map((u) => {
                filtering_users.push({
                    _id: u._id,
                    username: u.username
                })
                if (err) error(err, req, res, 204, '')
            })
            // Generate Array of user-files
            filtering_users.map((u) => {
                // var-s
                let user_folder = './uploads/' + u._id
                let path = user_folder + '/' + u.username
                let dirpath = './uploads/' + u._id
                // create User Folder ?
                if (!fs.existsSync(user_folder)) {
                    fs.mkdirSync(user_folder)
                }
                // Get list of file names
                var files = fs.readdirSync(dirpath)
                let unique = [...new Set(files)];
                // Generate finished list
                user_files.push({
                    _id: u._id,
                    username: u.username,
                    files: unique,
                    dirpath
                })
            })
            // send
            send(user_files, req, res)
        })
    } catch (e) {
        error(e, req, res, 500, 'Cannot get List of All Users ')
    }
}