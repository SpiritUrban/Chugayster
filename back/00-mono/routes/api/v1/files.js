const express = require('express');
const router = express.Router();
const path_ctr_files = '../../../controllers/files';
 
// upload file
router.post('/upload', require(`${path_ctr_files}/upload`));

// get files
router.post('/get-files', require(`${path_ctr_files}/get-files`));

// del file
router.post('/del-file', require(`${path_ctr_files}/del-file`));

module.exports = router;
