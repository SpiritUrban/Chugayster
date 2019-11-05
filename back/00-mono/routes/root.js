const log = console.log
const fs = require('fs').promises
const User = require('../models/user.js')
const Chat = require('../models/chat.js')
const mailer = require('../controllers/mail/mailer')
const express = require('express')
const router = express.Router()
const passport = require('passport')


///////////////////////////////////////////////////////
//                                                   //
//                     XZ !!!                        //
//                                                   //
///////////////////////////////////////////////////////

router.get('/ping', (req, res, next) => {
    mailer.send(
        'Vitaliy <we.js.clan@gmail.com> ', // from
        'shadespiritenator@gmail.com', // to
        'Nodemailer test', // subject
        'Hello Gmail 2- ' + new Date(), // text
    )
    console.dir(req.headers)
    console.dir(req.rawHeaders)
    res.send({ m: 'Hello!' })
});


///////////////////////////////////////////////////////
//                                                   //
//                      Auth                         //
//                                                   //
///////////////////////////////////////////////////////

// google
//
const google_scope = [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read'
]
router.get('/api/auth/google', passport.authenticate('google', { scope: google_scope }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => res.redirect(process.env.AUTH_callback));

// facebook
// 
router.get('/api/auth/facebook', passport.authenticate('facebook'), (req, res) => { });
router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => res.redirect('/'));

// twitter
// 
router.get('/auth/twitter', passport.authenticate('twitter'), (req, res) => { });
router.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }), (req, res) => res.redirect('/account'));

// github
// 
router.get('/api/auth/github', passport.authenticate('github'), (req, res) => { });
router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }), (req, res) => res.redirect('/account'));

// instagram
// 
router.get('/auth/instagram', passport.authenticate('instagram'), (req, res) => { });
router.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/' }), (req, res) => res.redirect('/account'));




// All
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



///////////////////////////////////////////////////////
//                                                   //
//                   local strategy                  //
//                                                   //
///////////////////////////////////////////////////////

// Auth system
const lS = require('../controllers/local-strategy');
router.post('/l-login', lS.login);
router.get('/logout', lS.logout);


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
    { url: 'members', path: 'members/_members' }
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
    'lessons',
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