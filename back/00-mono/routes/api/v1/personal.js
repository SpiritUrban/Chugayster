const express = require('express');
const router = express.Router();
const path_ctr_personal = '../../../controllers/personal';

// change-password
router.post('/save-profile', require(`${path_ctr_personal}/save-profile`));

// re-send-mail
router.post('/re-send-mail', require(`${path_ctr_personal}/re-send-mail`));

module.exports = router;
