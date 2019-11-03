// import { open_popup } from '../../../js/_my-plugins/pop-up2.js';


// Open account-card Details
document.querySelector("#account-card").open = true;


//
// init
//
function init() {
    document.querySelector('#save-btn').addEventListener('click', save);
    document.querySelector('#re-send-mail-btn').addEventListener('click', re_send_mail);
}
init();


//
// save()
//
async function save() {
    const first_name = document.querySelector('#first_name').value;
    const last_name = document.querySelector('#last_name').value;

    const rawResponse = await fetch('api/personal/save-profile', {
        method: 'POST',
        headers,
        body: JSON.stringify({ first_name, last_name })
    });
    const result = await rawResponse.json();
    log(result);

    if (result.result == 'ok') popUp('The data is saved.', 'Данні збережено.')
    commonReactions(result);
}


//
// re-send-mail-btn
//
async function re_send_mail() {

    const rawResponse = await fetch('api/personal/re-send-mail', {
        method: 'POST',
        headers,
        body: JSON.stringify({some: null})
    });
    const result = await rawResponse.json();
    log(result);

    if (result.result == 'ok')  popUp('Email sent.', 'Лист відправлено.') 
    commonReactions(result);
}


//
// common reactions
//
function commonReactions(result) {
    if (result == 'not logged') window.location = '/login';
    if (result.err) open_popup(result.msg2, '');
    init();
}


//
// pop-up
//
function popUp(en, uk) {
    open_popup(en, uk);
    setTimeout(() => window.location = '/account', 2000)
}