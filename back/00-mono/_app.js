const log = console.log;
// const fs = require('fs').promises
const lib = require('./routes/lib')

// dependencies
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const sassMiddleware = require('node-sass-middleware');
const methodOverride = require('method-override');

require('dotenv').config() //............ env
require('./app/mode'); //................ Mode: local/prod
require('./app/base'); //................ show info
require('./app/log/init.js')(app); //.... logs
require('./app/log/start.js')(app); //... logs
require('./app/passport.js'); //... passport
require('mongoose').connect('mongodb://localhost/' + process.env.DBNAME, { useCreateIndex: true, useNewUrlParser: true }); // connect to the database

app
  .set('views', __dirname + '/public/_pages')
  .set('view engine', 'pug')
  // .use(require('morgan'))
  // .use(logger('dev'))
  // .use(logger(':method :url :response-time'))
  // .use(logger(':method :url :status :res[content-length] - :response-time ms'))  
  .use(cookieParser())
  .use(bodyParser.urlencoded({ extended: true, limit: '11111111mb' }))
  .use(bodyParser.json({ limit: '11111111mb' }))
  .use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
  }))
  .use(session({
    secret: 'my_precious',
    name: 'cookie_name',
    //store: sessionStore, // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use( async (req, res, next) => { // home page
    console.log('info: url = ', req.url)
    req.url == '/' ? res.render('index', commonInfo(req)) : next()
  })
  // static
  .use(express.static(__dirname + '/public'))
  // .use(express.static(path.join(__dirname, '/SPA/dist/front')))
  .use(express.static(path.join(__dirname, '../../front/dist/front')))
  .use(express.static(__dirname + '/uploads'))
  .set('env', process.env.ENV)
  .use(cors())
  .use(cookieParser())
  .use(methodOverride())
  .use(function (req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next()
  })

// routes  
require('./routes')(app)


// // Multers disk storage settings
// const multer = require('multer')
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, './uploads/'),
//   filename: (req, file, cb) => cb(null, `${file.fieldname}-${Date.now()}.${file.originalname.split('.')[file.originalname.split('.').length - 1]}`)
// })
// // Multer settings
// const upload = multer({storage}).single('file');


// DB Ininializations and system infomation log
// const appSet = require('./controllers/___/app.js')
// appSet.init()

module.exports = app;
