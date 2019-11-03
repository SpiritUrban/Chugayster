const fs = require('fs');

module.exports = async (req, res, next) => {
    try {
        // var-s
        let user = req.body._user
        let user_folder = './uploads/' + user._id
        let path = user_folder + '/' + req.body.name
        let files = []
        // create General Folder ?
        if (!fs.existsSync('./uploads')) {
            fs.mkdirSync('./uploads')
        }
        // create User Folder ?
        if (!fs.existsSync(user_folder)) {
            fs.mkdirSync(user_folder)
        }
        // Get list of file names
        fs.readdir('./uploads/' + user._id, (err, files) => {
            files.forEach(file => {
                // log('x'.info)
                // log(file)
                files.push(file)
            })
            let unique = [...new Set(files)];
            res.json(unique)
        })
    } catch (e) {
        error(e, req, res, 500, 'Cannot get list of files! ')
    }
}