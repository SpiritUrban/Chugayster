
let log = console.log
var express = require('express')
var router = express.Router()

async function ___getProcessedData(url) {
    let v;
    try {
        v = await downloadData(url);
    } catch (e) {
        v = await downloadFallbackData(url);
    }
    return processDataInWorker(v);
}

const ___asyncMiddleware = fn =>
    (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch(next);
    };


___userExist = (user, req, res) => {
    return new Promise(resolve => {
        if (user == null) {
            error('custom', req, res, 204, 'User not exist!')
            resolve(false)
        }
        else resolve(true)
    })
}

___isAdmin = (user, req, res) => {
    log('isAdmin'.info)
    return new Promise(resolve => {
        if (user.username != 'admin') {
            error('custom', req, res, 403, 'Is no Admin!')
            resolve(false)
        }
        else resolve(true)
    })
}

//
// Base
//
router.post('/base', async (req, res) => {
    try {

    } catch (e) {
        error(e, req, res, 500, 'Cannot get * ')
    }
})

module.exports = router;
