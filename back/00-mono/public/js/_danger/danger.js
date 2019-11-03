var log = console.log;

// document.querySelector("#danger-tool").open = true;


function init() {
    // ping
    document.querySelector('#ping-btn').addEventListener('click', ping);
    // del-all-users-btn
    document.querySelector('#del-all-users-btn').addEventListener('click', del_all_users);
    // get-all-users-btn
    document.querySelector('#get-all-users-btn').addEventListener('click', get_all_users);
    // send-test-mail-btn
    document.querySelector('#send-test-mail-btn').addEventListener('click', send_test_mail);
}
init()


const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}


async function ping() {
    // const username = document.querySelector('#login_username').value;
    // const email = document.querySelector('#login_email').value;
    // const password = document.querySelector('#login_password').value;

    const rawResponse = await fetch('api/danger/ping', {
        method: 'POST',
        headers,
        // body: JSON.stringify({ email: username, password })
        body: JSON.stringify({})
    });
    const result = await rawResponse.json();

    log(result);



    // if (result == 'no') {
        // log(result);
        // open('(User not found or incorrect password.)', 'Користувач не знайдений або неправильний пароль.')
    // }
    // if (result == 'ok') window.location = '/account'
    init()
}  

async function del_all_users() {

    const rawResponse = await fetch('api/danger/del-all-users', {
        method: 'POST',
        headers,
        body: JSON.stringify({})
    });
    const result = await rawResponse.json();

    log(result);

    init()
}  


async function get_all_users() {

    const rawResponse = await fetch('api/danger/get-all-users', {
        method: 'POST',
        headers,
        body: JSON.stringify({})
    });
    const result = await rawResponse.json();

    log();

    log(result);
    log();
    result.result.map((user)=>{
        log(user);
    })

    init()
}  


//
// send_test_mail
//
async function send_test_mail() {

    const rawResponse = await fetch('api/danger/send-test-mail', {
        method: 'POST',
        headers,
        body: JSON.stringify({})
    });
    const result = await rawResponse.json();

    log();
    log(result);
    log();


    init()
}  