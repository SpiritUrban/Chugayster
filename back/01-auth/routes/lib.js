
const log = console.log
const User = require('../models/user.js')


error = (err, req, res, status, msg2) => {
    err = err.toString()
    log('error Universal'.error, err, status, msg2, '\n')
    res.json({
        status,
        err,
        success: false,
        msg: 'Error in ' + req.url,
        msg2: msg2 || '',
        from: 'error Universal'
    })
}

send = (result, req, res, msg2) => {
    res.json({
        code: '200',
        result,
        success: true,
        msg: 'ok',
        msg2: msg2 || '',
        from: 'send Universal'
    })
}

getUserDB = (by, req, res) => {
    log('getUserDB by '.info, by)
    return new Promise(resolve => {
        User.findOne(by, (err, result) => {
            if (err) {
                error(err, req, res, 204, 'User not find')
                resolve(false)
            } else {
                resolve(result)
            }
        })
    })
}

userExist = (user, req, res) => {
    log('userExist'.info)
    if (user == null) {
        error('custom', req, res, 204, 'User not exist!')
        return false
    }
    else return true
}

getUserSAFE = async (by, req, res) => {
    log('getUserSAFE by '.info, by)
    return new Promise(async resolve => {
        // Get user
        let _user = await getUserDB(by, req, res)
        // Barier
        userExist(_user, req, res)
        // ->
        resolve(_user)
    })
}

randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// test authentication
apiEnsureAuthenticated = async (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.json('not logged')
}
