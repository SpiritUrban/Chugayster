
let log = console.log
let Chat = require('../models/chat.js')
let express = require('express')
let router = express.Router()

//
// localhost/chats
//
router.get('/', async (req, res, next) => {
    console.time("Time this");
    
    const chats = await Chat.find({})
    console.timeEnd("Time this");
    
    res.render('pages/chats-root', { chats });
})

//
// localhost/chats
//
router.get('/:one', async (req, res, next) => {
    console.time("----------Time this");

    const one = req.params.one;
    log('one: ',one)
    const chat = await Chat.findOne({ name: one })
    log('>>>chat: ', chat)
    console.timeEnd("----------Time this");

    console.time("----------Time this");
    res.render('pages/chats', { chat });
    console.timeEnd("----------Time this");
})


module.exports = router;



