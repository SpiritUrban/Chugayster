
// .env
require('dotenv').config()

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GithubStrategy = require('passport-github2').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var InstagramStrategy = require('passport-instagram').Strategy;
var User = require('../models/user.js');
// var config = require('./oauth.js');
let log = console.log


// setInterval(()=>{
//   log(`AUTH @#@#@# ${process.env.HOST}`.info)
//   log(`${process.env.HOST}/auth/facebook/callback`)
// },1000)



var config = {
  facebook: {
    clientID: process.env.FB_ID,  // '455174914848353',
    clientSecret: process.env.FB_KEY, //'30a983716bd55cf5f36e1626fe3b20b8',
    callbackURL: process.env.FB_CLB // 'http://r4.okm.pub:3600/auth/facebook/callback'
    // callbackURL: `${process.env.HOST}:3600/auth/facebook/callback`
  },
  twitter: {
    consumerKey: 'get_your_own',
    consumerSecret: 'get_your_own',
    callbackURL: "http://127.0.0.1:3600/auth/twitter/callback"
  },
  github: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: "http://127.0.0.1:3600/auth/github/callback"
  },
  google: {
    clientID: process.env.GP_ID, //'706111676047-g5j86f7ipga7ant19ii0shaltrooac36.apps.googleusercontent.com',
    clientSecret: process.env.GP_KEY, //'IdHthb-IWhRRyGtl1K5dNd38',
    // callbackURL: 'http://127.0.0.1:3600/auth/google/callback'
    callbackURL: process.env.GP_CLB //'http://r4.okm.pub:3600/auth/google/callback'
    // callbackURL: `${process.env.HOST}:3600/auth/google/callback`

  },
  instagram: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: 'http://127.0.0.1:3600/auth/instagram/callback'
  }
};


//
// serialize and deserialize
//
passport.serializeUser(function (user, done) {
  log('serializeUser: ' + user._id);
  done(null, user._id);
})

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (!err) done(null, user)
    else done(err, null)
  });
})



//
// LocalStrategy
//
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {

  // shadespiritenator@gmail.com ebfa6a9617ed2a****c3a1a4a07b5f
  console.log(
    '******************',
    email, password
  )

  User.findOne({ email }, function (err, user) {
    return err
      ? done(err)
      : user
        ? password === user.password
          ? done(null, user)
          : done(null, false, { message: 'Incorrect password.' })
        : done(null, false, { message: 'Incorrect email.' });
  });
}));


module.exports = passport.use(new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: config.facebook.callbackURL
},
  function (accessToken, refreshToken, profile, done) {
    // logs
    log('facebook profile: '.info, profile)
    // var-s
    let email = ''
    let id = profile.id
    let username = profile.displayName

    User.findOne({ 'facebook.id': profile.id }, function (err, user) {
      if (err) log(err)

      if (!err && user !== null) done(null, user)
      else {

        if (profile.email) email = profile.email

        user = new User()

        user.facebook.id = id;
        user.facebook.username = username;
        user.facebook.email = email;
        user.username = username;
        user.email = email;
        user.created = Date.now();
        user.wallets = {
          USD: {
            balance: 0
          }
        };

        user.save(function (err) {
          if (err) log(err)
          else {
            log("saving user ...")
            done(null, user)
          }
        })

      }
    })
  }
))

passport.use(new TwitterStrategy({
  consumerKey: config.twitter.consumerKey,
  consumerSecret: config.twitter.consumerSecret,
  callbackURL: config.twitter.callbackURL
},
  function (accessToken, refreshToken, profile, done) {
    User.findOne({ oauthID: profile.id }, function (err, user) {
      if (err) {
        console.log(err);  // handle errors!
      }
      if (!err && user !== null) {
        done(null, user);
      } else {
        user = new User({
          oauthID: profile.id,
          name: profile.displayName,
          created: Date.now()
        });
        user.save(function (err) {
          if (err) {
            console.log(err);  // handle errors!
          } else {
            console.log("saving user ...");
            done(null, user);
          }
        });
      }
    });
  }
));



User.remove({}, ()=>{}); // !!!!!!!!!!!!!!!!!!!!!!


passport.use(new GithubStrategy({
  clientID: config.github.clientID,
  clientSecret: config.github.clientSecret,
  callbackURL: config.github.callbackURL
},
  function (accessToken, refreshToken, profile, done) {
    User.findOne({ oauthID: profile.id }, function (err, user) {
      if (err) {
        console.log(err);  // handle errors!
      }
      if (!err && user !== null) {
        done(null, user);
      } else {
        user = new User({
          oauthID: profile.id,
          name: profile.displayName,
          created: Date.now()
        });
        user.save(function (err) {
          if (err) {
            console.log(err);  // handle errors!
          } else {
            console.log("saving user ...");
            done(null, user);
          }
        });
      }
    });
  }
));

// +  // AIzaSyC-8rrUreJt_E9YMWPv1sL7Pk2sI2VwMuA
passport.use(new GoogleStrategy({
  clientID: config.google.clientID,
  clientSecret: config.google.clientSecret,
  callbackURL: config.google.callbackURL,
  passReqToCallback: true
},
  function (request, accessToken, refreshToken, profile, done) {
    // log-s
    log('google profile: ', profile);
    // var-s
    let email = profile.emails[0].value;
    let id = profile.id;
    let username = profile.displayName;

    // !!!
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });

    User.findOne({ 'google.id': profile.id }, function (err, user) {
      if (err) log(err)

      if (!err && user !== null) {
        done(null, user);
      } else {


        const user = new User();

        user.google.id = id;
        user.google.username = username;
        user.google.email = email;
        user.username = username;
        user.email = email;
        user.created = Date.now();
        user.wallets = {
          USD: {
            balance: 0
          }
        }

        user.save(function (err) {
          if (err) log(err)
          else {
            log("saving user ...");
            done(null, user);
          }
        })
      }
    })
  }
))


// passport.use(new GoogleStrategy({
//   clientID:     config.google.clientID,
//   clientSecret: config.google.clientSecret,
//   callbackURL:  config.google.callbackURL
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     log('google profile: '.info, profile)

//     User.findOne({ oauthID: profile.id }, function(err, user) {
//       if(err) {
//         console.log(err);  // handle errors!
//       }
//       if (!err && user !== null) {
//         done(null, user);
//       } else {
//         user = new User({
//           oauthID:  profile.id,
//           username: profile.displayName,
//           email:    profile.email,
//           password: 'Not has. Because it Passport registration.',
//           created: Date.now()
//         });
//         user.save(function(err) {
//           if(err) {
//             console.log(err);  // handle errors!
//           } else {
//             console.log("saving user ...");
//             done(null, user);
//           }
//         });
//       }
//     });
//   }
// ));

passport.use(new InstagramStrategy({
  clientID: config.instagram.clientID,
  clientSecret: config.instagram.clientSecret,
  callbackURL: config.instagram.callbackURL
},
  function (accessToken, refreshToken, profile, done) {
    User.findOne({ oauthID: profile.id }, function (err, user) {
      if (err) {
        console.log(err);  // handle errors!
      }
      if (!err && user !== null) {
        done(null, user);
      } else {
        user = new User({
          oauthID: profile.id,
          name: profile.displayName,
          created: Date.now()
        });
        user.save(function (err) {
          if (err) {
            console.log(err);  // handle errors!
          } else {
            console.log("saving user ...");
            done(null, user);
          }
        });
      }
    });
  }
));