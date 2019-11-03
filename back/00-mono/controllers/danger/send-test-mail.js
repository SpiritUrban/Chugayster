const mails = require('../mail/mails.js');
const lib = require('../lib/lib.js');
const send = lib.send;
module.exports = async (req, res, next) => {
    try {
        console.log(' TEST MAIL ::::::>>>>>');
        mails.test('shadespiritenator@gmail.com');
        let result = 'test';
        send(result, req, res);
    } catch (e) {
        error(e, req, res, 500, 'Cannot Send Mail ');
    }
}