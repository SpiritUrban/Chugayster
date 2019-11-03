const os = require("os");
const log = console.log

setInterval(() => {
  log('\n The root log')
  log('hostname::::::::: ', os.hostname())
  log('total memory::::: ', os.totalmem())
  log('free memory:::::: ', os.freemem())

  require('dns')
    .lookup(require('os')
      .hostname(), (err, add, fam) => log('addr:::::::::::::  ' + add))
}, 15000)