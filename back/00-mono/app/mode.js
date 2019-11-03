const log = console.log

//
// local or prod
//
const hostname = require("os").hostname();
if (hostname == 'VITALIY-Z') {
    log('************************************************************************************VITALIY-Z')
    // 44441111й
    process.env.FB_ID = '455174914848353'
    process.env.FB_KEY = '30a983716bd55cf5f36e1626fe3b20b8'
    process.env.FB_CLB = 'http://localhost/auth/facebook/callback'
    process.env.HOST = 'http://localhost'
    // process.env.HOST = `http://${process.env.DEV}`
    // process.env.AUTH_callback = `http://${process.env.DEV}/home`
} else {
    log('************************************************************************************ NOT VITALIY-Z')
    // process.env.HOST = `http://${process.env.PROD}`
    // process.env.AUTH_callback = `http://${process.env.PROD}/home`
}


//
// --dev ?
//
process.argv.forEach((val, index) => {
    if (val == '--dev') { } else { }
})