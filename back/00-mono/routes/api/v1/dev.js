const log = console.log
const fs = require('fs').promises
const User = require('../../../models/user.js')
const Chat = require('../../../models/chat.js')
const Vote = require('../../../models/vote.js')
const mailer = require('../../../controllers/mail/mailer')
const express = require('express')
const router = express.Router()


///////////////////////////////////////////////////////
//                                                   //
//                    DEV !!!                        //
//                                                   //
///////////////////////////////////////////////////////


router.get('/all-users', (req, res, next) => {
    User.find({}, function (err, users) {
        res.send(users);
    });
});


router.get('/user', (req, res, next) => {
    res.send(req.user);
});


router.get('/clean', (req, res, next) => {
    User.remove({}, () => { }); // !!!!!!!!!!!!!!!!!!!!!!
    res.send('clean');
});


router.get('/send-mail', (req, res, next) => {
    mailer.send(
        'Vitaliy <we.js.clan@gmail.com> ', // from
        'shadespiritenator@gmail.com', // to
        'Nodemailer test', // subject
        'Hello Gmail 2- ' + new Date(), // text
    )
    console.dir(req.headers)
    console.dir(req.rawHeaders)
    res.send({ m: 'Hello!' })
});


module.exports = router;
