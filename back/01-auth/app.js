var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
const session = require('express-session');


require('dotenv').config() //............ env
require('./app/mode'); //................ Mode: local/prod
require('./app/base'); //................ show info
require('./app/log/init.js')(app); //.... logs
require('./app/log/start.js')(app); //... logs
require('./app/passport.js'); //... passport
require('mongoose').connect('mongodb://localhost/' + process.env.DBNAME, { useCreateIndex: true, useNewUrlParser: true }); // connect to the database

var app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
var expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: {
    //secure: true,
    //httpOnly: true,
    //domain: 'example.com',
    //path: 'foo/bar',
    expires: expiryDate
  }
})
);

// routes  
require('./routes')(app)
// app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  console.log('\n\n app.js > ERROR: \n\n', err);
  res.status(err.status || 500);
  res.end(err.message)
});

module.exports = app;
