const fs = require('fs');

module.exports = async (req, res, next) => {
    try {
        // var-s
        let user = req.body._user
        let user_folder = './uploads/' + user._id
        let path = user_folder + '/' + req.body.name
        // Remove file
        fs.unlink(path, function (error) {
            if (error) {
                res.json({
                    msg: 'error in "del-file" ',
                    error: error
                })
                throw error
            }
            log('Deleted file!!')
            res.json({ msg: 'success' })
        })
    } catch (e) {
        error(e, req, res, 500, 'Cannot delete file! ')
    }
}