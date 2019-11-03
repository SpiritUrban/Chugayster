// import { open_popup } from '../../../js/_my-plugins/pop-up2.js';
// import { validateEmail } from '../../../js/_my-lib/validate.js';

selector("#login").open = true; // Open Login Details

/////
const login = async () => {
  const username = selector('#login_username').value;
  const password = selector('#login_password').value;
  const result = await request('/l-login', 'POST', { email: username, password });
  log(result);
  if (result == 'no') open_popup('(User not found or incorrect password.)', 'Користувач не знайдений або неправильний пароль.');
  if (result == 'ok') window.location = '/account';
  init();
}

/////
const registration = async () => {
  const username = selector('#username').value;
  const email    = selector('#email').value;
  const password = selector('#password').value;
  if (!validateEmail(email)) {
    open_popup('(Incorrect mail.)', 'Неправильна адреса електронної пошти.');
    return init();
  }
  const result = await request('/api/auth/reg', 'POST', { username, email, password });
  log(result);
  if (result.err) open_popup(result.msg2, '');
  if (result.success) open_popup('Registration completed successfully.', 'Регистрация прошла успешно.')
  init()
}

/////
const init = () => {
  selector('#login-btn').addEventListener('click', login)
  selector('#registration-btn').addEventListener('click', registration)
}
init();