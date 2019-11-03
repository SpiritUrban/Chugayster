const express = require('express');
const router = express.Router();
const path_ctr_api = '../../../controllers/_api';

// Get User Data
router.post('/get-user-data', require(`${path_ctr_api}/get-user-data`));

/* .................................................. Work with numbers .......................................................... */
// add-number
router.post('/add-number/:number', require(`${path_ctr_api}/add-number`));

// del-number
router.post('/del-number/:idx', require(`${path_ctr_api}/del-number`));

/* .................................................. Work with top-up .......................................................... */
// Top-Up info
router.get('/top-ap-info/:number', require(`${path_ctr_api}/top-ap-info`));

// Top-UP /api/top-ap/
router.post('/top-ap/', require(`${path_ctr_api}/top-ap`));


/* ..................................................  .......................................................... */
// connect-accounts
router.post('/connect-accounts/', require(`${path_ctr_api}/connect-accounts`))

module.exports = router;
