// Open account-card Details
// document.querySelector("#account-card").open = true;

/////
const send_by_mail = async () => { 
    const login_email = selector('#login_email').value;

    const result = await request('/api/auth/restore-access-by-email-or-username', 'POST', { login_email });
    log(result);

    if (result.result == 'ok') open_popup('Your password has been sent to your mail.', 'На твою пошту надіслано посилання для зміни паролю.');
    if (result.err) open_popup(result.msg2, '');
    init();
}

/////
const send_by_username = async () => { 
    const login_username = selector('#login_username').value;
    log('send_by_username ', login_username)

    const result = await request('/api/auth/restore-access-by-email-or-username', 'POST', { login_username });
    log(result);

    if (result.result == 'ok') open_popup('Your password has been sent to your mail.', 'На твою пошту надіслано посилання для зміни паролю.');
    if (result.err) open_popup(result.msg2, '');
    init();
}

/////
const init = () => {
    selector('#by-mail-btn').addEventListener('click', send_by_mail);
    selector('#by-username-btn').addEventListener('click', send_by_username);
}
init();