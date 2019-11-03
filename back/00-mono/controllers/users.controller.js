var express = require('express');
var router = express.Router({mergeParams: false});

router.get('/t', getAll);
router.get('/current', getCurrent);

module.exports = router;


function getAll(req, res) {
    res.send('users');
}


