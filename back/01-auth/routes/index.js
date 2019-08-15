var express = require('express');
var router = express.Router();
const lib = require('./lib')


// router.get('/', function(req, res, next) {
//   res.end('The AUTH API. Port: 49001. Endpoints: /reg, /log')
// });

// module.exports = router;

module.exports = function (app) {
  app.use(router);

  // use routes
  [
    ['/',              './root'],
    ['/api/auth',      './auth'],
  ]
  .map(path => app.use(path[0], require(path[1])));

}

