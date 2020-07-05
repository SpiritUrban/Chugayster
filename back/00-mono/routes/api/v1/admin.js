const express = require('express');
const router = express.Router();
const path_ctr_admin = '../../../controllers/admin';

// Admin Safe
const as = (req, res, next) => {
    if (req.user && (req.user.role == 'admin' || req.user.role == 'Admin')) next()
    else res.json({ok: false, msg: 'Not logged or not Admin'});
};

// get admin msgs
router.get('/admin-msgs', as, require(`${path_ctr_admin}/get-admin-msgs`));

// admin-msg
router.post('/admin-msg', as, require(`${path_ctr_admin}/post-admin-msg`));

// delete admin-msg
router.delete('/admin-msg/:_id', as, require(`${path_ctr_admin}/del-admin-msg`));

// app_status
router.get('/app-status', as, require(`${path_ctr_admin}/app-status`));

// get-all-users
router.post('/get-all-users', as, require(`${path_ctr_admin}/get-all-users`));

// del-user
router.post('/del-user/:idx', as, require(`${path_ctr_admin}/del-user`));

// APP SETTINGS
router.get('/app-settings-get', as, require(`${path_ctr_admin}/app-settings-get`));

// add fee
router.post('/app-settings-fee-add', as, require(`${path_ctr_admin}/app-settings-fee-add`));

// del fee
router.post('/app-settings-fee-del', as, require(`${path_ctr_admin}/app-settings-fee-del`));

// change fee
router.post('/app-settings-fee-change', as, require(`${path_ctr_admin}/app-settings-fee-change`));


///////////////////////////////////////////////////////
//                                                   //
//                  For DB-Editor                    //
//                                                   //
///////////////////////////////////////////////////////

// get-DB-info
router.post('/get-db-info', as, require(`${path_ctr_admin}/get-db-info`));

// chande-document
router.post('/chande-document', as, require(`${path_ctr_admin}/chande-document`));

// delete-document
router.post('/delete-document', as, require(`${path_ctr_admin}/delete-document`));

// get-all-user-files
router.post('/get-all-user-files', as, require(`${path_ctr_admin}/get-all-user-files`));

// del-user-file
router.post('/del-user-file', as, require(`${path_ctr_admin}/del-user-file`));

module.exports = router;
