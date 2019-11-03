isAdmin = (user, req, res) => {
    log('_isAdmin'.info)
    if (user.username != 'admin') {
        error('custom', req, res, 403, 'Is no Admin!')
        return false
    }
    else return true
}


getAdminDB = (user_id, req, res) => {
    log('getAdminDB'.info)
    return new Promise(resolve => {
        User.findOne({ _id: user_id }, (err, result) => {
            if (err) {
                error(err, req, res, 204, 'User not find')
                resolve(false)
            } else {
                resolve(result)
            }
        })
    })
}


getAdminSAFE = async (user_id, req, res) => {
    log('getAdminSAFE'.info)
    return new Promise(async resolve => {
        // Get user
        let _user = await getAdminDB(user_id, req, res)
        // Barier
        userExist(_user, req, res)
        // Barier
        isAdmin(_user, req, res)
        // ->
        resolve(_user)
    })
}
