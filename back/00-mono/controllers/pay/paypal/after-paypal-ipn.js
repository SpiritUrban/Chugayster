const log = console.log;
const path_models = '../../../models';
const User = require(`${path_models}/user.js`);

module.exports = async (req, res, next) => {
    // 1) Fing user in DB
    // 2) Add money 'payment_gross' to 'wallets.USD.balance'
    // 3) SUCCESS responce
    try {
        let user_id = req.body.item_name
        // let username = decodeURI(req.body.item_name)

        log('user_id > '.info, user_id)

        // Get User & Barriers
        let u = await getUserSAFE({ _id: user_id }, req, res)

        let balance = u.wallets.USD.balance

        if (u.wallets.USD.balance == undefined) balance = 0
        log("BALANCE >>>>".info, balance)

        let new_balance
        if (req.body.payment_gross !== undefined)
            new_balance = balance + parseFloat(req.body.payment_gross)
        else {
            log('ERROR!!! >', req.body.payment_gross)
            new_balance = balance + 0
        }
        log("NEW BALANCE >>>>".info, new_balance)

        // Step 2: POST IPN data back to PayPal to validate
        log("1) IPN Notification Event Received")
        log("IPN Notification Event received successfully.")
        res.status(200).end();

        let ipnTransactionMessage = req.body;

        //fix for SENDBOX
        // ipnTransactionMessage.payment_date = null
        // ipnTransactionMessage.charset = 'utf-8'

        let formUrlEncodedBody  //= querystring.stringify(ipnTransactionMessage);

        var str = "";
        for (var key in ipnTransactionMessage) {
            if (str != "") str += "&";
            if (key !== '__proto__') str += key + "=" + encodeURIComponent(ipnTransactionMessage[key]);
        }

        log(str)

        formUrlEncodedBody = str

        // Build the body of the verification post message by prefixing 'cmd=_notify-validate'.
        formUrlEncodedBody = formUrlEncodedBody.slice(0, -1)

        let verificationBody = `cmd=_notify-validate&${formUrlEncodedBody}`

        log(`Verifying IPN: ${verificationBody}`)

        let options = {
            method: "POST",
            // uri: "https://ipnpb.sandbox.paypal.com/cgi-bin/webscr", // Sandbox
            uri: "https://ipnpb.paypal.com/cgi-bin/webscr",
            body: verificationBody,
            headers: {
                'Connection': 'close'
            },
            rejectUnauthorized: false,
            requestCert: true,
            agent: false
        };

        // POST verification IPN data to paypal to validate.
        request(options, function callback(error, response, body) {

            log('response body')
            log(response.body.data)

            if (!error && response.statusCode == 200) {
                // Check the response body for validation results.
                if (body === "VERIFIED") {
                    log(`Verified IPN: IPN message for Transaction ID: ${ipnTransactionMessage.txn_id} is verified.`)

                    // TODO: Implement post verification logic on ipnTransactionMessage
                    update = async () => {
                        await User.findByIdAndUpdate({ _id: user_id }, {
                            $push: {
                                purchases_made: req.body
                            },
                            wallets: {
                                USD: {
                                    balance: new_balance
                                }
                            },
                            function(err, result) {
                                if (err) {
                                    log('Error: '.error)
                                    log(err)
                                } else {
                                    log('Result: ', result)
                                }
                            }
                        })
                    }
                    update()

                } else if (body === "INVALID") {
                    console.error(`Invalid IPN: IPN message for Transaction ID: ${ipnTransactionMessage.txn_id} is invalid.`)
                    log('msg')
                    log(ipnTransactionMessage)
                } else {
                    console.error("Unexpected reponse body.");
                }
            } else {
                // Error occured while posting to PayPal.
                console.error(error);
                log(body);
            }
        })
    } catch (e) {
        error(e, req, res, 500, 'Cannot do payment process ')
    }
}




// Admin ID: 5a1bb0c307168d040da5d4a7

/*  EXAMPLE OBJ:

    mc_gross = 37.50
    protection_eligibility = Ineligible
    payer_id = J86MHHMUDEHZU
    tax = 0.00
    payment_date = 07%3A04%3A48+Mar+30%2C+2015+PDT
    payment_status = Completed
    charset = windows-1252
    first_name = test
    mc_fee = 1.39
    ify_version = 3.8
    custom = %7B%22user_id%22%3A314%2C%22service_provider%22%3A%22twilio%22%2C%22service_name%22%3A%22textMessages%22%7D
    payer_status = verified
    business = antonshel-facilitator%40gmail.com
    quantity = 150
    verify_sign = AR-ITpb83c-ktcbmApqG4jM17OeQAx2RSvfYZo4XU8YFZrTSeF.iYsSx
    payer_email = antonshel-buyer%40gmail.com
    txn_id = 30R69966SH780054J
    payment_type = instant
    last_name = buyer
    receiver_email = antonshel-facilitator%40gmail.com
    payment_fee = 1.39
    receiver_id = VM2QHCE6FBR3N
    txn_type = web_accept
    item_name = GetScorecard+Text+Messages
    mc_currency = USD
    item_number =
    residence_country = US
    test_ipn = 1
    handling_amount = 0.00
    transaction_subject = %7B%22user_id%22%3A314%2C%22service_provider%22%3A%22twilio%22%2C%22service_name%22%3A%22textMessages%22%7D
    payment_gross = 37.50
    shipping = 0.00
    ipn_track_id = 6b01a2c76197


    { mc_gross:        '0.10',
      protection_eligibility: 'Ineligible',
      address_status:  'confirmed',
      payer_id:        'BGH2QNBNPKVM2',
      address_street:  'Galana\r\n13',
      payment_date:    '02:22:39 Nov 15, 2017 PST',
      payment_status:  'Pending',
      charset:         'windows-1252',
      address_zip:     '29000',
      first_name:      'Vitaliy',
      address_country_code: 'UA',
      address_name:    'Vitaliy Dyachuk',
      notify_version:  '3.8',
      custom:          '',
      payer_status:    'unverified',
      address_country: 'Ukraine',
      address_city:    'Khmelnitsky',
      quantity:        '1',
      verify_sign:     'A0ThhVxBRdmzk2nDOoyQXW.YQemWA0HrXj-5YDHBqxy-bB7BbJwwqOe-',
      payer_email:     'shadespiritenator@gmail.com',
      txn_id:          '5R83823192127550N',
      payment_type:    'instant',
      last_name:       'Dyachuk',
      address_state:   'Khmelnitsky',
      receiver_email:  'shadespiritenator-facilitator@gmail.com',
      pending_reason:  'unilateral',
      txn_type:        'web_accept',
      item_name:       'Replenishment of account in the service',
      mc_currency:     'USD',
      item_number:     'User123',
      residence_country:   'UA',
      transaction_subject: '',
      payment_gross:       '0.10',
      ipn_track_id:    'cc169d615b66b',
      __proto__: {} }  
    */