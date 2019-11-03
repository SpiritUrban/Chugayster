const express = require('express');
const router = express.Router();
const path_ctr_admin = '../../../controllers/admin';

// app_status
router.get('/app-status', require(`${path_ctr_admin}/app-status`));

// get-all-users
router.post('/get-all-users', require(`${path_ctr_admin}/get-all-users`));

// del-user
router.post('/del-user/:idx', require(`${path_ctr_admin}/del-user`));

// APP SETTINGS
router.get('/app-settings-get', require(`${path_ctr_admin}/app-settings-get`));

// add fee
router.post('/app-settings-fee-add', require(`${path_ctr_admin}/app-settings-fee-add`));

// del fee
router.post('/app-settings-fee-del', require(`${path_ctr_admin}/app-settings-fee-del`));

// change fee
router.post('/app-settings-fee-change', require(`${path_ctr_admin}/app-settings-fee-change`));


///////////////////////////////////////////////////////
//                                                   //
//                  For DB-Editor                    //
//                                                   //
///////////////////////////////////////////////////////

// get-DB-info
router.post('/get-db-info', require(`${path_ctr_admin}/get-db-info`));

// chande-document
router.post('/chande-document', require(`${path_ctr_admin}/chande-document`));

// delete-document
router.post('/delete-document', require(`${path_ctr_admin}/delete-document`));

// get-all-user-files
router.post('/get-all-user-files', require(`${path_ctr_admin}/get-all-user-files`));

// del-user-file
router.post('/del-user-file', require(`${path_ctr_admin}/del-user-file`));

module.exports = router;
