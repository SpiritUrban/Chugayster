// DB Ininializations and system infomation log

var co  = require('co');
var App = require('../../models/app')
var app = {}


app.init = function () {
    return new Promise(function (resolve, reject) {
        co(function* () {
            var doc = yield App.findOne({ name: 'settings' }).exec()

            // create ?
            if (doc == null) {
                var set = new App({
                    name: 'settings',
                    fee: [{
                        country: 'default',
                        operator: 'default',
                        money: 0.25
                    }]
                })
                var x = yield set.save()
                console.log('\n', 'Created ??? settings: '.info, '\n', set, '\n')
                console.log('\n', 'Created settings: '.info,     '\n', x, '\n')
            }
            resolve('hello')
        })
    })

}



module.exports = app
