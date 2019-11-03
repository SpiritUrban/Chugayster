// import { open_popup } from '../../../js/_my-plugins/pop-up2.js';

// Open Login Details
document.querySelector("#change-password").open = true;

//
// init
//
function init() {
    document.querySelector('#send-btn').addEventListener('click', send);
}
init();

//
// send()
//
async function send() {
    const old_password = document.querySelector('#old-password').value;
    const new_password = document.querySelector('#new-password').value;
    const repeat_new_password = document.querySelector('#repeat-new-password').value;

    // new_password equal ?
    if (new_password !== repeat_new_password) {
        open_popup('(New passwords are not equal.)', 'Нові паролі не однакові.');
        init();
        return
    }

    const rawResponse = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers,
        body: JSON.stringify({ old_password, new_password })
    });
    const result = await rawResponse.json();

    log(result);

    if (result == 'not logged') window.location = '/login';

    if (result.result == 'ok') open_popup('(Password changed.)', 'Пароль змінено.');

    if (result.msg2 == 'User password not correct!') open_popup('Old user password is not correct!.', 'Старий пароль користувача неправильний!');

    init();
}