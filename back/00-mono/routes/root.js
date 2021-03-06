const log = console.log
const fs = require('fs').promises
const User = require('../models/user.js')
const Chat = require('../models/chat.js')
const Vote = require('../models/vote.js')
const Session = require('../models/session');
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');




// Update User info
router.put('/user', async (req, res)=>{
    log(req.body) // { key: 'full_name', newValue: 'sdsdg' }
    await User.findOneAndUpdate({
        email: req.user.email
    }, {
        [req.body.key]: req.body.newValue
    })
    res.json({ok: true})
})



///////////////////////////////////////////////////////
//                                                   //
//                     Session                       //
//                                                   //
///////////////////////////////////////////////////////

// finger print mechanism
router.post('/session', async (req, res) => {
    try {
        const systemInfo = req.body;
        const random = Math.random();
        const fingerPrint = await bcrypt.hash(systemInfo.appVersion + random, 10);
        const session = new Session({
            //userId: String,
            appVersion: systemInfo.appVersion,
            fingerPrint: fingerPrint,
            random: random,
            ip: req.ip
        })
        session.save();
        res.json({ session: fingerPrint });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/session-info', (req, res) => {
    res.json({ user: req.userSafe })
});

router.get(['/user', '/get-user-info-if-logged'], async (req, res) => {
    try {
        res.json(req.user);
        // res.json(fakeUser);
        // const testUser = await User.findOne({email: 'shadespiritenator@gmail.com'})
        // res.json(testUser);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

const fakeUser = JSON.parse(`{
    "wallets": {
      "USD": {
        "balance": 0
      }
    },
    "facebook": {
      "id": "",
      "token": "",
      "email": "",
      "username": ""
    },
    "google": {
      "id": "",
      "token": "",
      "email": "",
      "username": ""
    },
    "isLogged": true,
    "purchases_made": [],
    "saved_numbers": [],
    "linked_users": [],
    "_id": "5e72314405de434144dca5be",
    "username": "testUser",
    "email": "shadespiritenator@gmail.com",
    "email_token": "077q6b76v9vwqtaryepfjbseao0fdprrj7chg22dlhj",
    "password": "cd2a9a2e8d3572113b95e3b60bf626a77899ec6b",
    "phone_pin": 730901,
    "link_pin": 272749,
    "active": false,
    "email_verif": false,
    "phone_verif": false,
    "ever_cha": "7645e520-6925-11ea-977c-578729c8c9f9",
    "ever_sec": "4c04539621e9baec7e8651059293a71573409788",
    "last_login": "2020-03-18T14:33:40.735Z",
    "last_appeal": "2020-03-18T14:33:40.736Z",
    "__v": 0
  }`)








///////////////////////////////////////////////////////
//                                                   //
//                Front across Back                  //
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

// Page: restore-password
router.get('/pages/auth/restore-password', async (req, res) => {
    try {
        let user = null;
        let fit = false;
        const _id = req.query.user;
        const token = req.query.token;
        // data for page
        const data = { _id };
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