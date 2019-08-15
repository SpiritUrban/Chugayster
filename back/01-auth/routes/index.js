var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end('The AUTH API. Port: 49001. Endpoints: /reg, /log')
});

module.exports = router;
