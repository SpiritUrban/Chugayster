
const mongoose = require('mongoose');
// const Post = require('./post.js')


// create a Chat model
var Chat = mongoose.model('Chat', {
    name: { type: String, index: true, required: true, unique: true },
    creator: String, // User ID,
    title: String,
    text: String,
    posts: [] // Posts
})


module.exports = Chat

///////////////////////////  Post
//     author: String,   //
//     text: String,     //
//     posts: String     //  Posts in post ?
///////////////////////////