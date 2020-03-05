const express = require('express')
const router = express.Router()
const lib = require('./lib')

module.exports = function (app) {
  app.use(router);

  // use routes
  [
    ['/',              './root'],
    ['/',              './api/v1/auth-strategies'],
    ['/api/auth',      './api/v1/auth'],


    ['/chats',         './chats_'],
    ['/api',           './api/v1/_api'],
    ['/api',           './api/v1/files'],
    ['/api',           './api/v1/examples'],
    ['/api',           './api/v1/pay-sys'],

    ['/api/admin',     './api/v1/admin'],

    ['/api/danger',    './api/v1/danger'],
    ['/api/trainings', './api/v1/trainings'],
    ['/api/personal',  './api/v1/personal'],
    ['/api/chats',     './api/v1/chats']
  ].map((path) => {
    app.use(path[0], require(path[1]))
  });

  // use routes
  [
    '/my',
    '/hot'
  ].map((path) => {
    app.use(path, require('.' + path))
  });

}

