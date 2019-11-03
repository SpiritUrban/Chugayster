
var log = console.log;

log('Strem')

const socket = io.connect('http://localhost:3001');
window.socket = socket;

socket.on('onConnect', (message) => {
    socket.emit('userMessage', 'SO WERE ARE HERE');
});

socket.on('userMessage', (message) => {
    log('SOCKET: ', message)
});

const videoButton = document.querySelector('#videoButton');

import { VideoConnection } from './webRTC.js';
videoButton.addEventListener('click', () => VideoConnection());

import { getVideoStream } from './webRTC.js';
getVideoStream();


var userId = Math.floor(Math.random() * 99) + 1; // Not important
// var socket = io();

var who = document.querySelector("p.who span");
var loginStatus = document.querySelector("p.status span");
var logins = document.querySelector("p input");
var loginButton = document.querySelector("button.login");
var logoutButton = document.querySelector("button.logout");

var video1 = document.querySelector('#video1');
var video2 = document.querySelector('#video2');
var video3 = document.querySelector('#video3');

var img1 = document.querySelector('#img1');
var link = document.querySelector('#link');
var canvas1 = document.querySelector("#canvas1");
var canvas2 = document.querySelector("#canvas2");

var saveButton = document.querySelector("button.save");
var snapButton = document.querySelector("button.snap");
log('snapButton', snapButton)

var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");



snapButton.addEventListener("click", function () {
    log('snapButton')
    ctx1.drawImage(video1, 0, 0, video1.videoWidth, video1.videoHeight);
}, false);


video1.addEventListener("canplay", function () {
    canvas1.width = video1.videoWidth;
    canvas1.height = video1.videoHeight;
}, false);


saveButton.addEventListener("click", function () {
    log('save')
    var dataURL = canvas1.toDataURL('image/png');
    sendToServer(dataURL);
}, false);


function sendToServer(dataURL) {
    const w = video1.videoWidth / 4;
    const h = video1.videoHeight / 4;

    canvas2.width = w;
    canvas2.height = h;
    ctx2.drawImage(video1, 0, 0, w, h);
    // ctx2.createObjectURL(dataURL)
}



// socket
//     .on('data1', function (data) {
//         // HERE IS THE PROBLEM
//         log('MESSAGE')
//         context.decodeAudioData(data, decodeHandler, function (e) { console.log(e); });
//     })
//     .on("blob", (buff) => {
//         // var bufView = new Uint16Array(bin);
//         var dataArr = new Uint8Array(buff);

//         log('buff', buff)
//         log('dataArr', dataArr)

//         binaryData.push(buff);
//         video2.src = window.URL.createObjectURL(new Blob(binaryData, { type: "video/webm" }));
//         video2.play();
//     });



