const lib = require('./_lib');
const fs = require('fs');

module.exports = async (req, res, next) => {
    try {
        // var-s
        let file = req.body.file
        // let user_id = req.body.user_id
        let dirpath = req.body.dirpath
        let path = dirpath + '/' +file.f_name
        // Remove file
        fs.unlink(path, function (error) {
            if (error) { 
                error(e, req, res, 500, 'Cannot delete file! ')
                throw error
            }
            send('ok', req, res)
        })
    } catch (e) {
        error(e, req, res, 500, 'Cannot delete file! ')
    }
}