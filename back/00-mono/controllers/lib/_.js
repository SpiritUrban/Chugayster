var User = require('../../models/user');
var moment = require('moment');
var jwt = require('jwt-simple');

var app = {};
var authToken
let log = console.log

// 
// (user, req) -> resObject
//
app.updateLogin_GetResObj = function (user, req) {
    return new Promise(function (resolve, reject) {
        // log('>>>>>>>>>>>>>>>>>>>> >', req.user.iss)
        User.findOneAndUpdate({ _id: user._id }, { $set: { last_login: new Date } }).exec();
        var expires = moment().add(60, 'days').valueOf()
        var token = jwt.encode(
            { iss: user._id, exp: expires },
            req.app.settings.jwtTokenSecret)
        // User.findOneAndUpdate({ _id: user._id }, { $set: { iss: req.user.iss } }).exec();
        var resObject = {
            success:  true,
            token:    token,
            expires:  new Date(expires),
            _id:      user._id,
            username: user.username,
            email:    user.email,
            facebook: user.facebook,
            google:   user.google
            // firstName: user.first_name,
            // lastName: user.last_name
            //  token: jwt.sign({ sub: user._id }, config.secret)                         
        }
        resolve(resObject)
    })
}


app.getAuthTok = function () {
    return 3003
}

// example
// compare token (heaer & app?)
app.getAuthTok = function (req) {

    let user_id = req.body.userData._id
    let username = req.body.userData.username

    let header_token = req.headers.authorization.split(' ')
    var sessiion_token = jwt.encode(
        { iss: req.user.iss, exp: req.user.exp },
        req.app.settings.jwtTokenSecret)
    let ACCESS = header_token[1] == sessiion_token  // true/false
    log('')
    log('ACCESS >> >>> ', ACCESS)
}

//
// Random string with 10 chars: 's5xoxqnit4'
//
app.rand_str = () => {
    return Math.random().toString(36).substr(2); // remove `0.`
};

//
// Random string with 40 chars: 's5xoxqnit4s5xoxqnit4s5xoxqnit4s5xoxqnit4'
//
app.rand_str_long = () => {
    return app.rand_str() + app.rand_str() + app.rand_str() + app.rand_str()
};


// randomIntFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

module.exports = app;
