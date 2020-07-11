#!/usr/bin/env node

/**
 * Module dependencies.
 */
const app = require('./_app');
const debug = require('debug')('js-clan:server');
const fs = require('fs');
const http = require('http');
// const http2 = require('http2');
const https = require('https');
// const socket = require('./socket.js');


/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '80');
app.set('port', port);


/**
 * SSL for HTTPS, HTTP2
 */
// const options = {
//   key: fs.readFileSync(__dirname + '/keys/server.key'),
//   cert: fs.readFileSync(__dirname + '/keys/server.crt')
// }
var options = {
  ca: fs.readFileSync (__dirname +  '/keys/ca_bundle.crt'),
  cert: fs.readFileSync(__dirname + '/keys/certificate.crt'),
  key: fs.readFileSync(__dirname + '/keys/private.key'),
 };


/**
 * Create HTTPS server.
 */
https.createServer(options, app).listen(443);


/**
 * Create HTTP-2 server.  --> https://localhost:3000/
 * https://medium.com/the-node-js-collection/node-js-can-http-2-push-b491894e1bb1
 */

// const server2 = http2.createSecureServer(options, app);
// server2.listen(3000);


/**
 * Create HTTP server.
 */
var server = http.createServer(app);


/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('\n server.js: ', server.address());


/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);
  // named pipe
  if (isNaN(port)) return val;
  // port number
  if (port >= 0) return port;
  return false;
}


/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') throw error;

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}


/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}