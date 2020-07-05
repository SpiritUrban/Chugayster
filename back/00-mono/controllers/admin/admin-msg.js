const lib = require('./_lib');
const path_models = '../../models';
const App = require(`${path_models}/app.js`);
const MentorMsg = require(`${path_models}/mentor-msg.js`);

module.exports = async (req, res, next) => {
    try {
        // var-s
        let msg = req.body.msg
        // add msg
        await new MentorMsg({
            creator: 'Mentor',
            title: 'XZ',
            text: msg,
            posts: [] // Posts
        }).save()
        // send 'ok'
        send('ok', req, res)
    } catch (e) {
        error(e, req, res, 500, 'Cannot Add Fee ')
    }
}