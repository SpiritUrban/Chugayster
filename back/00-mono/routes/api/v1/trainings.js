const log = console.log;
const express = require('express');
const router = express.Router();

// save-base
router.post('/save-base', async (req, res) => {
    try {
        log('save-base')
    } catch (e) {
        error(e, req, res, 500, 'Cannot get * ')
    }
})

module.exports = router;
