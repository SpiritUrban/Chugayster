const log = console.log;
const User = require('../models/user.js');
const passport = require('passport');
var hash = require('../controllers/crypto/hash');

module.exports = {

  // Здесь мы проверяем, передаем данные о пользователе в функцию верификации, котоую мы определили выше. 
  // Вообще, passport.authenticate() вызывает метод req.logIn автоматически, здесь же я указал это явно. Это добавляет удобство в отладке. Например, можно вставить сюда console.log(), чтобы посмотреть, что происходит...
  // При удачной авторизации данные пользователя будут храниться в req.user

  login: (req, res, next) => {
    log('BODY ->>> ', req.body)
    passport.authenticate('local',
      (err, user, info) => {
        return err
          ? next(err)
          : user
            ? req.logIn(user, (err) => {
              return err
                ? next(err)
                : send(user, req, res, 'User logged!') //res.json({success: true, user});
            })
            : error('custom', req, res, 409, 'Not logged!')//res.json({err});
      }
    )(req, res, next);
  },

  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  }

}
