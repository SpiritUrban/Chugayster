// Індус на ютубі мутить доступи - https://www.youtube.com/watch?v=JJ44WA_eV8E
// Хороший простий опис - https://codeburst.io/sending-an-email-using-nodemailer-gmail-7cfa0712a799
// Додатково - http://qaru.site/questions/495891/sending-email-via-nodejs-using-nodemailer-is-not-working

// Потрібно відкривати доступ тут, щоб працювало - https://myaccount.google.com/u/4/lesssecureapps?pageId=none
// ............................................... https://myaccount.google.com/lesssecureapps

const nodemailer = require('nodemailer');
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let transporter = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 465,
    // port: 25,
    // secure: true, // use SSL
    // secure: false, // use SSL
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    },
    connectionTimeout: 1 * 60 * 1000
})

module.exports = {

    send: (from, to, subject, html)=>{

        let mailOptions = { from, to, subject, html }
    
        transporter.sendMail( mailOptions, (err, res) => {
            if (err) console.log('Error: ', err)
            else console.log('Email Sent: ', res)
        })
    }

}