const fs = require('fs');

module.exports = async (req, res, next) => {
    try {
        // var-s
        let user = req.body._user
        let load_type = req.body.load_type
        let user_folder = './uploads/' + user._id
        let path = user_folder + '/' + req.body.name
        // create General Folder ?
        if (!fs.existsSync('./uploads')) {
            fs.mkdirSync('./uploads')
        }
        // create User Folder ?
        if (!fs.existsSync(user_folder)) {
            fs.mkdirSync(user_folder)
        }
        // Algorithm of uploading
        if (load_type == 'new') {
            // Write File
            fs.writeFile(path, req.body.data, 'binary', (err) => {
                if (err) {
                    res.json({
                        msg: 'error in "upload" - 1 ',
                        error: error
                    })
                    throw err
                }
                else res.json({ msg: 'success' })
            })
        }
        else if (load_type == 'append') {
            // Append part of file
            fs.appendFile(path, req.body.data, 'binary', (err) => {
                if (err) {
                    res.json({
                        msg: 'error in "upload" -2 ',
                        error: error
                    })
                    throw err
                }
                else res.json({ msg: 'success' })
            })
        }
    } catch (e) {
        error(e, req, res, 500, 'Cannot upload file or fragment! ')
    }
}