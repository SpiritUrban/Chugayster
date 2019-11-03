let log = console.log
let Chat = require('../../../models/chat.js')
var express = require('express')
var router = express.Router()

//
// create chat
//
async function createChat() {
    let chat = new Chat({
        name: 'chat-1', // unique
        creator: 'must be ID', // User ID,
        title: 'The Chat: Chat 1',
        text: 'The text for UP place in this chat. The text for UP place in this chat. ',
        posts: [
            {
                creator: 'must be ID', // User ID,
                text: 'The comment text. ... The comment text. ...',
                posts: [] //[Post] // Posts in post
            }
        ]
    })
    let chat_resuit = await chat.save()
}

//
// create-chat !!!
//
router.post('/chats', apiEnsureAuthenticated, async (req, res) => {
    try {

        // must be ADMIN CONTROL by ip !!!

        const name = req.body.name;
        const title = req.body.title;
        const text = req.body.text;

        log('\n The: chats \n')

        let chat = new Chat({
            name, // unique
            creator: 'must be ID', // User ID,
            title,
            text,
            posts: [
                // {
                //     creator: 'must be ID', // User ID,
                //     text: 'The root post. >>> chat.posts[0]',
                //     posts: [] //[Post] // Posts in post
                // }
            ]
        })
        let chat_resuit = await chat.save()

        // // send msg
        // return send('ok', req, res, 'The data is saved')
        return send('ok', req, res, chat_resuit)

    } catch (e) {
        error(e, req, res, 500, 'Cannot save profile data! ')
    }
})

//
// save-post
//
router.post('/save-post', apiEnsureAuthenticated, async (req, res) => {
    try {
        log('\n The: save-post \n')
        // add number
        const save_result = await Chat.findOneAndUpdate({ name: 'chat-1' }, {
            $push: {
                posts: {
                    author: 'Name',
                    text: 'The texst',
                    posts: [] //[Post] // Posts in post
                }
            }
        })
        // send msg
        return send('ok', req, res, save_result)
    } catch (e) {
        error(e, req, res, 500, 'Cannot save profile data! ')
    }
})

//
// /api/chats/reply-post
//
// router.post('/reply-post', apiEnsureAuthenticated, async (req, res) => {
router.post('/reply-post', apiEnsureAuthenticated, async (req, res) => {
    try {
        log('\n The: reply-post \n')
        // var-s
        let name = req.body.name;
        let target_arr = req.body.target_arr;
        let text = req.body.text;
        // logs
        setTimeout(() => {
            log('***')
            log(` req.body: `.info, req.body)
            if (!name) log('!!!!!!!!!!!!! I should set "name" on page')
        }, 3000)
        // add reply
        const chat = await Chat.findOne({ name });
        let posts = chat.posts;
        let post = {
            author: req.user.username,
            text,
            posts: [] //[Post] // Posts in post
        }
        switch (target_arr.length) {
            case 0:
                posts.push(post)
                break;
            case 1:
                posts[target_arr[0]]
                    .posts.push(post)
                break;
            case 2:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts.push(post)
                break;
            case 3:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts.push(post)
                break;
            case 4:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts[target_arr[3]]
                    .posts.push(post)
                break;
            case 5:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts[target_arr[3]]
                    .posts[target_arr[4]]
                    .posts.push(post)
                break;
            case 6:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts[target_arr[3]]
                    .posts[target_arr[4]]
                    .posts[target_arr[5]]
                    .posts.push(post)
                break;
            case 7:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts[target_arr[3]]
                    .posts[target_arr[4]]
                    .posts[target_arr[5]]
                    .posts[target_arr[6]]
                    .posts.push(post)
                break;
            case 8:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts[target_arr[3]]
                    .posts[target_arr[4]]
                    .posts[target_arr[5]]
                    .posts[target_arr[6]]
                    .posts[target_arr[7]]
                    .posts.push(post)
                break;
            case 9:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts[target_arr[3]]
                    .posts[target_arr[4]]
                    .posts[target_arr[5]]
                    .posts[target_arr[6]]
                    .posts[target_arr[7]]
                    .posts[target_arr[8]]
                    .posts.push(post)
                break;
            default:
                break;
        }

        const result = await Chat.findOneAndUpdate({ name }, {
            posts: posts
        })
        // send msg
        return send('ok', req, res, result)
    } catch (e) {
        error(e, req, res, 500, 'Cannot save profile data! ')
    }
})


router.post('/delete-post', apiEnsureAuthenticated, async (req, res) => {
    try {
        log('\n The: reply-post \n')
        // var-s
        let name = req.body.name;
        let target_arr = req.body.target_arr;
        let user = req.body.user;
        let text = req.body.text;
        // logs
        setTimeout(() => {
            log('***')
            log('***')
            log('***')
            log(` req.body: `.info, req.body)
        }, 3000)

        // add reply
        const chat = await Chat.findOne({ name });

        log('>>> ', chat)

        let posts = chat.posts;

        switch (target_arr.length) {
            // level 1 (root)
            case 1:
                posts
                    .splice(target_arr[0], 1)
                break;
            // level 2
            case 2:
                posts[target_arr[0]]
                    .posts
                    .splice(target_arr[1], 1)
                break;
            case 3:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts
                    .splice(target_arr[2], 1)
                break;
            case 4:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts
                    .splice(target_arr[3], 1)
                break;

            case 5:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts[target_arr[3]]
                    .posts
                    .splice(target_arr[4], 1)
                break;
            case 6:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts[target_arr[3]]
                    .posts[target_arr[4]]
                    .posts
                    .splice(target_arr[5], 1)
                break;
            case 7:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts[target_arr[3]]
                    .posts[target_arr[4]]
                    .posts[target_arr[5]]
                    .posts
                    .splice(target_arr[6], 1)
                break;
            case 8:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts[target_arr[3]]
                    .posts[target_arr[4]]
                    .posts[target_arr[5]]
                    .posts[target_arr[6]]
                    .posts
                    .splice(target_arr[7], 1)
                break;
            case 9:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts[target_arr[3]]
                    .posts[target_arr[4]]
                    .posts[target_arr[5]]
                    .posts[target_arr[6]]
                    .posts[target_arr[7]]
                    .posts
                    .splice(target_arr[8], 1)
                break;
            case 10:
                posts[target_arr[0]]
                    .posts[target_arr[1]]
                    .posts[target_arr[2]]
                    .posts[target_arr[3]]
                    .posts[target_arr[4]]
                    .posts[target_arr[5]]
                    .posts[target_arr[6]]
                    .posts[target_arr[7]]
                    .posts[target_arr[8]]
                    .posts
                    .splice(target_arr[9], 1)
                break;
            default:
                break;
        }
        const result = await Chat.findOneAndUpdate({ name }, {
            posts: posts
        })
        // send msg
        return send('ok', req, res, result)
    } catch (e) {
        error(e, req, res, 500, 'Cannot save profile data! ')
    }
})


module.exports = router;
