const express = require('express');
const router = express.Router();
const path_ctr_auth = '../../../controllers/auth';
const mails = require('../../../controllers/mail/mails.js');


// Registration
router.post('/register', require(`${path_ctr_auth}/register`));

// change-password
router.put('/change-password', apiEnsureAuthenticated, require(`${path_ctr_auth}/change-password`));

// restore access by email
router.post('/restore-access-by-email-or-username', require(`${path_ctr_auth}/restore-access`));

// restore access by 'email' & by 'user name'
router.post('/restore-password', require(`${path_ctr_auth}/restore-password`));

router.post('/send-verification-mail', apiEnsureAuthenticated, (req, res) => {
    mails.send_mail_verification(req.user._id);
    res.json({ ok: true, msg: 'hz' });
})



///////////////////////////////////////////////////////
//                                                   //
//                   local strategy                  //
//                                                   //
///////////////////////////////////////////////////////

// Auth system
const lS = require('../../../controllers/local-strategy');
router.post('/login', lS.login);
router.get('/logout', lS.logout); // /api/auth/logout
router.post('/logout', lS.logout);


/* .................................................. off .......................................................... */

// Need for passport auth
/* off */ router.post('/get-for-iframe', require(`${path_ctr_auth}/off/get-for-iframe`));

// Authentication 
/* off */ router.post('/auth', require(`${path_ctr_auth}/off/auth`));

module.exports = router;
