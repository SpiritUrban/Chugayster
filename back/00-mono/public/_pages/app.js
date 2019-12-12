(function () {
  'use strict';
  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
  }
  navigator.serviceWorker
    .register('./service-worker.js')
    .then(function () { console.log('Service Worker Registered'); });
})();



const news = [
	{
		slug: 'about the start of the project',
		link: './pages/about-the-start-of-the-project',
		img: 'start.jpg',
		name: 'Beta version is launched',
		author: 'Spirit_Urban',
		description: '   About how the idea was born.  &nbsp;  Why are certain approaches and technologies chosen? About the development process.',
		description_ua: 'Про те, як народилася ідея.   &nbsp;  Чому вибрані певні підходи та технології? Про процес розробки.'
	}
];


// const log = console.log;
// var w = window;


//
// Generating content based on the template
//
// var content = news.reduce(function(prev, curr) {
// 	return prev + `
// 		<article>
// 			<img src='data/img/placeholder.png' data-src='data/img/${curr.img}' alt='${curr.name}'>
// 			<h3>${curr.name}</h3>
// 			<ul>
// 			<li><span>Author:</span> <strong>${curr.author}</strong></li>
// 			<li><span>More:</span> <a href='${curr.link}'>/${curr.slug}</a></li>
// 			<li>
// 				<span>Description:</span>
// 				<strong 
// 					class="t"
// 					data-en="${curr.description}"
// 					data-ua="${curr.description_ua}"
// 				></strong>
// 				</li>
// 			</ul>
// 	  	</article>`;
//   }, [""]);


// document.querySelector('#content').innerHTML = content;




//
// Requesting permission for Notifications after clicking on the button
//
var button = document.getElementById("notifications");
if (button) button.addEventListener('click', function (e) {
	Notification.requestPermission().then(function (result) {
		console.log(result)
		if (result === 'granted') {
			randomNotification();
		}
	});
});


// Setting up random Notification
function randomNotification() {
	var randomItem = Math.floor(Math.random() * news.length);
	var notifTitle = news[randomItem].name;
	var notifBody = 'Created by ' + news[randomItem].author + '.';
	var notifImg = 'data/img/' + news[randomItem].img;
	var options = {
		body: notifBody,
		icon: notifImg
	}
	var notif = new Notification(notifTitle, options);
	console.log(notif)
};
setTimeout(randomNotification, 1000);


//
// Progressive loading images
//
var imagesToLoad = document.querySelectorAll('img[data-src]');
var loadImages = function (image) {
	image.setAttribute('src', image.getAttribute('data-src'));
	image.onload = function () {
		image.removeAttribute('data-src');
	};
};
if ('IntersectionObserver' in window) {
	var observer = new IntersectionObserver(function (items, observer) {
		items.forEach(function (item) {
			if (item.isIntersecting) {
				loadImages(item.target);
				observer.unobserve(item.target);
			}
		});
	});
	imagesToLoad.forEach(function (img) {
		observer.observe(img);
	});
}
else {
	imagesToLoad.forEach(function (img) {
		loadImages(img);
	});
}






