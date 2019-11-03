const co = require('co')
let b2b_API = require('./modules/b2b-api.js')


// Auth to b2b API
co(function* () {
  let login = yield b2b_API.login()
  log(
    `        
          Authorization to b2b API:`.info,
    `
          token:   ${login.token},
          expires: ${login.expires}
      `.data
  )
  let status = yield b2b_API.user_status()
  log('\n main_account'.info, status.main_account)

  b2b_API.walets(status.main_account) // main_account


  //  EXIST
  //
  //b2b_API.sms()
  b2b_API.top_up_info(2347063317051)
  //b2b_API.top_up(2347063317051, 'MFIN-5-OR', 1)

})