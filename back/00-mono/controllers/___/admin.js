var User = require('../../models/user');
var app = {};

// 
// (user, req) -> resObject
//
app.settings = function () {
    return new Promise(function (resolve, reject) {
        User.findOneAndUpdate({ username: 'admin' }, 
            { 
                // $set: { last_login: new Date }
                wallets: {
                    USD: {
                        balance: 10
                    }
                }
        }).exec()     
        resolve('hello')
    })
}

module.exports = app;
