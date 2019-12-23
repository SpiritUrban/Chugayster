
var mongoose = require('mongoose')

// create a Vote model
var Vote = mongoose.model('Vote', {
    type: String,
    data: Object,
    date: { type: Date, default: Date.now }
})


module.exports = Vote