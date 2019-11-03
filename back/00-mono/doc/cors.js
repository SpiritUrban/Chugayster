// Way for CrossDomain
// 
// let originsWhitelist = [ 'http://127.0.0.1:3000', 'https://127.0.0.1:3000', 'http://localhost:3000'  ];
// let corsOptions = {

//   origin: function(origin, callback){
//         let isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
//         callback(null, isWhitelisted);
//   },
//   credentials: true
// }
// app.use(cors(corsOptions));

// .use(cors({origin: 'http://localhost:4200'}));



// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'POST');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });