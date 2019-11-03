const log = console.log
const express = require('express')
const router = express.Router()
let common = {}

// All
router.all('/*', async (req, res, next) => {
    let ep = req.url;
    log( req.url.info, '\n');

    common = {
        test: 'ok',
        chat: req.chat,
        user: req.user
    };
    if (ep == '/' && ep != '/icons/favicon.ico') ep = '/_hot';
    log('to render - '.info, 'hot' + ep);
    
    res.render('hot' + ep, common);
})

module.exports = router;
