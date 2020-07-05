
const mongoose = require('mongoose');
// const Post = require('./post.js')


var MentorMsg = mongoose.model('MentorMsg', {
    creator: String, // User ID,
    title: String,
    text: String,
    posts: [] // Posts
})

module.exports = MentorMsg
