const express = require('express');
const router = express.Router();
const path_ctr_danger = '../../../controllers/danger';


//
// test authentication
//
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next() }
    res.redirect('/login')
}


// del-all-users
router.post('/del-all-users', require(`${path_ctr_danger}/del-all-users`));

// get-all-users
router.post('/get-all-users', require(`${path_ctr_danger}/get-all-users`));

// get-all-users
router.post('/send-test-mail', require(`${path_ctr_danger}/send-test-mail`));

// ping
router.post('/ping', require(`${path_ctr_danger}/ping`));


// view

// show all users in table
router.get('/show-users', require(`${path_ctr_danger}/get/show-users`))

module.exports = router;
