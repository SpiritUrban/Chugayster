// let jwt = require('express-jwt');


//   .set('jwtTokenSecret', process.env.JWT_SECRET)
//   .use(jwt({ secret: process.env.JWT_SECRET }).unless({
//     path: [
//       '/api/version',
//       '/token',
//       '/api/auth',
//       '/users/authenticate',
//       '/users/register',
//       '/auth/test',
//       '/api/auth/google',
//       '/auth/google/callback',
//       '/api/auth/facebook',
//       '/auth/facebook/callback',
//       '/api/auth/tokAuth',
//       '/api/after-paypal-ipn',
//       '/',
//       '/api/get-for-iframe',
//       a,
//       '/api/auth',
//       '/api/reg',
//       '/api/auth/passport_token',
//       '/ping',
//       '/account',
//       '/logout',
//       '/login',
//       '/playlist'
//     ]
//   }))

// app.jwt = jwt({
//   secret: process.env.JWT_SECRET,
//   getToken: function (req) {
//     if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//       return req.headers.authorization.split(' ')[1];
//     } else if (req.query && req.query.token) {
//       return req.query.token;
//     }
//     return null;
//   }
// }).unless({
//   path: []
// })