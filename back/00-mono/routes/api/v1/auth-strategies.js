const log = console.log
const express = require('express')
const router = express.Router()
const passport = require('passport')



///////////////////////////////////////////////////////
//                                                   //
//                      Auth                         //
//                                                   //
///////////////////////////////////////////////////////

const successRedirect = '/main';
const failureRedirect = '/';
const redirects = { successRedirect, failureRedirect }

//
// google
//
router.get(
    '/api/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
);
router.get(
    '/auth/google/callback',
    passport.authenticate('google', redirects),
    (req, res) => { }
);

//
// facebook
// 
router.get(
    '/api/auth/facebook',
    passport.authenticate('facebook'),
    (req, res) => { }
);
router.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', redirects),
    (req, res) => { }
);

//
// twitter
// 
router.get('/auth/twitter',
    passport.authenticate('twitter'),
    (req, res) => { }
);
router.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter', redirects),
    (req, res) => { }
);

//
// github
// 
router.get(
    '/api/auth/github',
    passport.authenticate('github'),
    (req, res) => { }
);
router.get(
    '/auth/github/callback',
    passport.authenticate('github', redirects),
    (req, res) => { }
);

//
// instagram
// 
router.get(
    '/auth/instagram',
    passport.authenticate('instagram'),
    (req, res) => { }
);
router.get(
    '/auth/instagram/callback',
    passport.authenticate('instagram', redirects),
    (req, res) => { }
);



module.exports = router;
