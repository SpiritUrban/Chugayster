
var mongoose = require('mongoose')

// create a APP model
var App = mongoose.model('App', {
    name: { type: String, index: true, required: true, unique: true },
    fee: [] // Processing fee
})


module.exports = App