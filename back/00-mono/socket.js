const log = console.log;
const fs = require('fs');
const http = require('http');
const moment = require('moment');
var clients = [];
var clientsFront = [];


var dateTime = () => { return (moment().locale('us').format('MMMM Do YYYY, hh:mm:ss a')) }
log('Socet.js: ', dateTime());


let hh = moment().format('hh');
if (moment().format('a') === 'pm') {
  hh = +hh + 12;
}
var logFileName = './logs/' + moment().format('YY_MM_DD_') + hh + moment().format('_mm') + '.txt';
//fs.openSync(logFileName, 'w');


var serverIo = http.createServer();
var io = require('socket.io')(serverIo);


/****************************************/
io.on('connection', function (client) {
  client.emit('userMessage', 'Connected');

  clients.push(client);
  //fs.openSync('./buff/'+ client.id, 'w');
  client.emit('onConnect', 'Connected');
  /***************************************/
  client.on('blob', function (data) {
    log('CLIENT', client.id);
    //fs.appendFile('./buff/'+ client.id, data, () => {});
    log('data: ', data);
    client.broadcast.emit('stream', data);
    client.emit('stream', data);

  });


  /****************************************/
  client.on('disconnect', function () {
    clientsListRefresh();
  });


  /****************************************/
  client.on('userMessage', (message) => {

    if (client.nickname === undefined) client.nickname = 'guest';

    console.log('I get message from ', client.nickname, '-', message, dateTimeForChat);
    var dateTimeForChat = dateTime();
    let parcel = {
      message,
      nickname: client.nickname,
      dateTimeForChat
    }
    client.emit('message', parcel);
    client.broadcast.emit('message', parcel);
    let forAppendToFile = parcel.nickname + ': ' + parcel.message + ' - ' + parcel.dateTimeForChat + '\n';
    //fs.appendFileSync(logFileName, forAppendToFile);
    clientsListRefresh();
  })


  /****************************************/
  client.on('identify', function (name) {
    client.nickname = name;
    clientsListRefresh();

  });

  let clientsListRefresh = () => {
    ioClients = io.sockets.clients();
    clientsFront = [];
    Object
      .entries(ioClients.connected)
      .map((ioClient) => {
        clientsFront.push({
          id: ioClient[0],
          name: ioClient[1].nickname
        });
      });
    client.emit('clientList', clientsFront);
    client.broadcast.emit('clientList', clientsFront);
  };


  /****************************************/
  client.on('uploadFile', (binaryFile) => {
    var base64Data = binaryFile.replace(/^data:image\/jpeg;base64,/, "");
    fs.writeFile("buff.jpeg", base64Data, 'binary', function (err) {


      //fs.writeFile("buff.jpeg", base64Data, 'base64', function (err) {
      if (err) {
        log(err); throw err
      }
      log('Saved!');
    });

  })
});
serverIo.listen(3001);



module.exports = {};