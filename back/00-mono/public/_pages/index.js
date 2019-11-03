//const log = console.log;

window.pageName = 'root'


// log('from port: 3600')


// var json = JSON.stringify({
//     msg: 'Hello'
// })

// let send = () => {
//     $.post('api/get-for-iframe', function(data) {  // front (children iFrame): 3600  <--- back: 3600   &   message-->  front: parrent(main) 
//         log()
//         log()
//         log('Emiter !!!')
//         log()
//         log(data)
//         window.parent.postMessage(JSON.stringify(data), "*")
//     })
// }
// send()

// setInterval(function(){
//     send()
// }, 1000)





// (function () {
	'use strict';
  
	// TODO add service worker code here
	if ('serviceWorker' in navigator) {
  
	}
  
	navigator.serviceWorker
	  .register('./service-worker.js')
	  .then(function () { console.log('Service Worker Registered'); });
  
//   })();