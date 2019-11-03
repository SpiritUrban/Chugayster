const express = require('express');
const router = express.Router();
const path_ctr_paypal = '../../../controllers/pay/paypal';

//
router.get('/after-paypal-msg', async (req, res) => log(req.body));

//
router.post('/after-paypal-msg', async (req, res) => log(req.body));

//
router.post('/after-paypal-ipn', require(`${path_ctr_paypal}/after-paypal-ipn`));

module.exports = router;
