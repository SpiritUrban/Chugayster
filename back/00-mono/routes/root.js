const log = console.log
const fs = require('fs').promises
const User = require('../models/user.js')
const Chat = require('../models/chat.js')
const Vote = require('../models/vote.js')
const express = require('express')
const router = express.Router()






///////////////////////////////////////////////////////
//                                                   //
//                  Front on Back                    //
//                                                   //
///////////////////////////////////////////////////////

// Page: mail-verify
router.get('/pages/auth/mail-verify', async (req, res) => {
    try {
        // var-s
        const _id = req.query.user;
        const token = req.query.token;
        let data = {};
        let user = null;
        let fit = false;
        // get user
        user = await User.findOne({ _id })
        // fit ?
        fit = (user.email_token == token) ? true : false;
        // approval ?
        (fit) ?
            await User.findOneAndUpdate({ _id }, { email_verif: true }) :
            null;
        // data for page
        data.success = (fit) ?
            true : false
        log(data)
        res.render('pages/auth/mail-verify', data);
    } catch (e) {
        error(e, req, res, 500, 'Can not verify')
    }
});


// MONO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
[
    'js-ijak',
    'pages/auth/forgot',
    'pages/common/bad-data'
].map((path) => {
    router.get(`/${path}`, (req, res) => res.render(path));
});

// MONO + commonInfo /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
[
    'dev',
    'stream',
    'community',
    // 'lessons/send-mail',
    'pages/auth/change-password',
].map((path) => {
    router.get(`/${path}`, (req, res) => res.render(path, commonInfo(req)));
});

// MONO + ensure + commonInfo ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
[
    'pages/auth/change-password', // Page: change-password
    'playlist', // Page: playlist
].map((path) => {
    router.get(`/${path}`, ensureAuthenticated, (req, res) => res.render(path, commonInfo(req)));
});

// DOUBLE + commonInfo ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
[
    { url: '/', path: 'index' },
    { url: 'home', path: 'index' },
    { url: 'login', path: 'pages/auth/login' }, // Page: login
    // { url: 'members', path: 'members/_members' }
].map((page) => {
    router.get(`/${page.url}`, (req, res) => res.render(page.path, commonInfo(req)));
});

// DOUBLE + ensure + commonInfo //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
[
    { url: 'account', path: 'pages/personal/account' },
].map((page) => {
    router.get(`/${page.url}`, ensureAuthenticated, (req, res) => res.render(page.path, commonInfo(req)));
});


// Page: restore-password
router.get('/pages/auth/restore-password', async (req, res) => {
    try {
        const _id = req.query.user;
        const token = req.query.token;
        const data = {};
        let user = null;
        let fit = false;
        // data for page
        data._id = _id
        // get user
        user = await User.findOne({ _id });
        // fit ?
        fit = (user.email_token == token) ? true : false;
        // approval ?
        (fit) ?
            res.render('pages/auth/restore-password', data) :
            res.render('pages/common/bad-data', data);
    } catch (e) {
        res.render('pages/common/bad-data', {});
    }
});


// router.all(['/lessons', '/lessons/*'], async (req, res) => {
//     let ep = req.url.substr(1);
//     const end = url_end(req);

//     if (ep == 'lessons') ep = 'lessons/_lessons'
//     else ep += '/' + end //---------------- for double path
//     res.render(ep, commonInfo(req))
// });


// categiry page + childrens (folder component + page
[
    // 'lessons',
    'materials'
].map(category => {
    router.all([`/${category}`, `/${category}/*`], async (req, res) => {
        let ep = req.url.substr(1); // ....................................... endpoint without '/'
        const end = url_end(req); // ......................................... rest of url
        if (ep == category) ep = `${category}/_${category}` //................ main page ?
        else ep += '/' + end //............................................... for double path
        log('\n\n ep: ', ep)
        res.render(ep, commonInfo(req))
    })
})

// lessons/course-JavaScript-2020/001-Intro/001-Intro
// original
// /lessons/course-JavaScript-2020/001-Intro

router.all(['/constructs', '/constructs/*'], async (req, res) => {
    let ep = req.url.substr(1);
    const end = url_end(req);

    if (ep == 'constructs') ep = 'constructs/_constructs'
    else ep += '/' + end //---------------- for double path
    res.render(ep, commonInfo(req))
})


router.all(['/draft', '/draft/*'], async (req, res) => {
    let ep = req.url.substr(1);
    if (ep == 'draft') ep = 'draft/draft'
    res.render(ep, commonInfo(req))
})


router.all(['/programs', '/programs/*'], async (req, res, next) => {
    let ep = req.url.substr(1);
    if (ep == 'programs') ep = 'programs/_programs'
    res.render(ep, commonInfo(req))
})


router.get('/vote-for-lessons', async (req, res) => {
    const v = new Vote({
        type: 'Want more lessons',
        data: {
            headers: req.headers,
            ip: req.ip
        }
    });
    v.save();
    res.json({ ok: true });
})






//redirect all get request to index.html. Must be the last!!!!!!!!!!!!!!!
router.get('/*', async (req, res, next) => {
    const html = await fs.readFile('../../front/dist/front/index.html');
    res.end(html);
    // res.redirect('/index.html');
});


module.exports = router;



// router.all('/pages/*', async (req, res, next) => {
//     let ep = req.url
//     log('\n pages + ::::::::::::::::::::::::::::::::::::::::::::::::'.help)
//     log(req.url.info, '\n')
//     log(req.url)
//     //
//     common = {
//         test: 'ok',
//         chat: req.chat,
//         user: req.user
//     }
//     if (ep == '/') ep = '/pages'
//     log('to render - '.info, 'pages' + ep)
//     res.render('pages' + ep, common)
//     next()
// })