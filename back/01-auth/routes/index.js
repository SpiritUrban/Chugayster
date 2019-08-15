var express = require('express');
var router = express.Router();
const lib = require('./lib')


module.exports = function (app) {
  app.use(router);

  // use routes
  [
    ['/',              './root'],
    ['/api/auth',      './auth'],
  ]
  .map(path => app.use(path[0], require(path[1])));

}

