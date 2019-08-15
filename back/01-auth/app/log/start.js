let log = console.log

module.exports = function (app) {

    log('\n')

    process.argv.forEach((val, index) => {
        log(`        arg ${index}:  ${val}`.data)
    })

    log(`
        AUTH_callback:  ${process.env.AUTH_callback}
        API version:    ${process.env.VERSION}
        Port:           ${process.env.PORT}

        DB name         ${process.env.DBNAME}
    `.data)

}