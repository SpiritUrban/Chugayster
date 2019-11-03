var request = require('request');

let log = console.log
let app = {}
let headers = {
    'User-Agent': 'Super Agent/0.0.1',
    'Content-Type': 'application/x-www-form-urlencoded'
}

app.login = function (x, req) {
    return new Promise(function (resolve, reject) {
        // Configure the request
        var options = {
            url: 'https://clients.primeairtime.com/api/auth',
            method: 'POST',
            headers: headers,
            form: {
                "username": "api@recharge4.com",
                "password": "L9#?WPaFHwhC6]W["
            }
        }
        try {
            // Start the request
            request(options, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    body = JSON.parse(body)
                    process.env.b2b_AUTH_token = body.token
                    process.env.b2b_AUTH_expires = body.expires
                    headers = {
                        'User-Agent': 'Super Agent/0.0.1',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer ' + process.env.b2b_AUTH_token
                    }
                    resolve(body)
                } else
                    reject('\n catch ')
                // reject('\n Error: "login()" in b2b-api.js. Status '.error + response.statusCode)
            })
        } catch (error) {
            reject('\n catch ')
        }

    })
}

app.user_status = function (x, req) {
    return new Promise(function (resolve, reject) {
        // Configure the request
        var options = {
            url: 'https://clients.primeairtime.com/api/status',
            method: 'GET',
            headers: headers
        }
        // Start the request
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                body = JSON.parse(body)
                log('\n', options.url.info, '\n', body)
                process.env.b2b_AUTH_token = body.token
                process.env.b2b_AUTH_expires = body.expires
                resolve(body)
            } else
                reject('\n Error: "user_status()" in b2b-api.js. Status '.error + (response.statusCode || 500))
        })
    })
}

app.sms = function (text, req) {
    return new Promise(function (resolve, reject) {
        // Configure the request     
        var options = {
            url: 'https://clients.primeairtime.com/api/sms/380967465486',
            method: 'POST',
            headers: headers,
            form: {
                "message": "This is a test message from API"
            }
        }
        // Start the request
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 201) {
                body = JSON.parse(body)
                log('\n', options.url.info, '\n', body)
                resolve(body)
            } else
                reject('\n Error: "sms()" in b2b-api.js. Status '.error + response.statusCode, error)
        })
    })
}

app.top_up_info = function (msisdn) {
    return new Promise(function (resolve, reject) {
        //log
        log(`The top-up-info!!!`.test)
        log('\n headers'.info)
        log(headers)

        // Configure the request
        var options = {
            url: 'https://clients.primeairtime.com/api/topup/info/' + msisdn,
            method: 'GET',
            headers: headers
        }

        var timeout = setTimeout(function (str1, str2) {
            console.log(str1 + " " + str2);
            reject('Number not correct')
        }, 6000, "Hello.", "How are you?");
        // clearTimeout(timeout)

        // Start the request
        request(options, function (error, response, body) {
            log('RAW BODY: ', body)
            try {
                body = JSON.parse(body)
            } catch (err) {
                log(body)
                log(err)
                reject({
                    info: 'Error: "top_up_info()" in b2b-api.js. Status '.error + response.statusCode,
                    msg: '1',
                    status: response.statusCode
                })
            }

            log('\n', options.url.info, '\n', body)
            if (!error && response.statusCode == 200) {
                // log('200', body)
                clearTimeout(timeout)
                resolve(body)
            } else
                reject({
                    info: 'Error: "top_up_info()" in b2b-api.js. Status '.error + response.statusCode,
                    msg: body.message,
                    status: response.statusCode
                })
        })
    })
}


app.top_up = function (msisdn, product_id, denomination) {
    return new Promise(function (resolve, reject) {
        //log
        log(`The top-up!!!`.test)
        // log(process.env.b2b_AUTH.token)
        // log(JSON.stringify(process.env.b2b_AUTH))
        log('\n headers'.info)
        log(headers)

        // Configure the request
        var options = {
            url: 'https://clients.primeairtime.com/api/topup/exec/' + msisdn,
            method: 'POST',
            headers: headers,
            form: {
                "product_id": product_id,
                "denomination": denomination,
                "send_sms": false,
                "sms_text": ""
            }
        }
        // Start the request
        request(options, function (error, response, body) {
            body = JSON.parse(body)
            log('\n', options.url.info, '\n', body)
            if (!error && response.statusCode == 201) {
                log('201', body)
                // 
                // success !!
                // >> next
                // minus from user money !!!
                resolve(body)
            } else
                reject({
                    info: 'Error: "top_up()" in b2b-api.js. Status '.error + response.statusCode,
                    msg: body.message,
                    status: response.statusCode
                })
        })
    })
}
// if not mantain naumber
//
//  { status: 500,
//   code: 'RECHARGE_FAILED',
//   message: 'Recharge Failed',
//   reference: null,
//   customer_reference: null } 


// /api/accounts/:id/wallets
// https://clients.primeairtime.com/api/accounts/5a0c1b2b978c677a00137d36/wallets/
// GET
app.walets = function (id, req) {
    return new Promise(function (resolve, reject) {
        // Configure the request     
        var options = {
            url: 'https://clients.primeairtime.com/api/accounts/' + id + '/wallets',
            // url: 'https://clients.primeairtime.com/api/accounts/5a0c1b2b978c677a00137d36/wallets/',
            method: 'GET',
            headers: headers
        }
        // Start the request
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                body = JSON.parse(body)
                log('\n', options.url.info, '\n', body)
                resolve(body)
            } else
                reject('\n Error: "walets()" in b2b-api.js. Status '.error + response.statusCode, error)
        })
    })
}

module.exports = app;


