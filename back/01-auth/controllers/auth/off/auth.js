module.exports = async (req, res, next) => {
    try {
        //var-s
        let email = req.body.email
        let passw = req.body.password
        // Get User & Barriers
        let user = await getUserSAFE({ email: email }, req, res)
        // Compare hashes
        var hp = authc(passw)
        if (hp === user.password) {
            // Update & get User
            lib.updateLogin_GetResObj(user, req).then(
                result => send(result, req, res),
                err => error(err, req, res, 500, 'Error in "lib.updateLogin_GetResObj" ')
            )
        }
        else error('custom', req, res, 401, 'Password not correct')
    } catch (e) {
        error(e, req, res, 500, 'Cannot get * ')
    }
}