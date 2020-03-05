
const log = console.log
const fs = require('fs').promises
const User = require('../../../models/user.js')
const Chat = require('../../../models/chat.js')
const Vote = require('../../../models/vote.js')
const express = require('express')
const router = express.Router()


///////////////////////////////////////////////////////
//                                                   //
//                    All !!!                        //
//                                                   //
///////////////////////////////////////////////////////

router.all('/*', async (req, res, next) => {
    log('\n ROUTER LOG ##################################################################################################'.help)
    log(req.url.info, '\n')

    const url = req._parsedUrl.pathname;
    let chatName = url.slice(1, url.length);
    if (chatName == '') chatName = 'root';

    const chat = await Chat.findOne({ name: chatName })
    req.chat = chat;

    let authenticated = req.isAuthenticated()
    // setTimeout(() => {
    //     log('root: ---chatName--- ', chatName)
    //     log('root: ---chat--- ', chat)
    //     log('root: ---Authenticated--- ', authenticated)
    //     log('root: ---req.user--- ', req.user)
    // }, 1000)

    let user = {}
    if (req.user) {
        user = req.user
        // res.set({
        //     'user_id': user._id,
        //     'username': user.username
        //   })
        // https://sailsjs.com/documentation/reference/response-res/res-cookie
        res.cookie('user_id', user._id + '', { maxAge: 30000, httpOnly: false })
        res.cookie('username', user.username, {
            maxAge: 30000,
            httpOnly: false,
            hostOnly: false
        })
    };
    next();
});


//
// redirect for favicon.ico
//
router.get('/*', (req, res, next) => {
    const end = url_end(req);
    if (end == 'favicon.ico') res.redirect('/favicon.ico')
    next();
});

//
// if POST without BODY --> 401
//
router.post('/*', (req, res, next) => {
    if (!req.body) res.json({ code: 401, msg: 'No Body' });
    next();
});


module.exports = router;
