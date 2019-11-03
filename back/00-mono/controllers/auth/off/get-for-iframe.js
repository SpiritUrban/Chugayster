module.exports = async (req, res, next) => {
    try {
        // var-s
        let email = ''
        // 1
        if (req.user) if (req.user.email !== '') {
            email = req.user.email
            // get user
            let user = await User.findOne({ email })
            // update
            let result = await lib.updateLogin_GetResObj(user, req)
            // send data
            send(result, req, res)
            // 2        
        } else if (req.user.id) {
            let id = req.user.facebook.id
            // get user
            let user = await User.findOne({ 'facebook.id': id })
            // update
            let result = await lib.updateLogin_GetResObj(user, req)
            // send data
            log(result)
            send(result, req, res)
        }
    } catch (e) {
        error(e, req, res, 500, 'Cannot get-for-iframe ')
    }
}