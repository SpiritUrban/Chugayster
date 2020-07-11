import { Component, OnInit } from '@angular/core';
import appState from '../../../../../app-state';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  st: any = appState;

  constructor() { }

  ngOnInit() {
    var w: any = window;

    console.log(this.st)

    //
    // dev signal
    //
    // if (location.origin = "http://localhost") {
    // 	document.querySelector('.logo').style.background = '#673ab761'
    // }

    //
    // My
    //
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');



    hamburger.addEventListener('click', hamburgerClick)
    nav.addEventListener('click', navClick)

    function hamburgerClick(e) {
        nav.classList.add('nav-mobile');
        hamburger.classList.add('hide');
        // nav.classList.add('nav-mobile-fix');
        header.classList.add('header-mobile');
    }


    function navClick() {
        hamburger.classList.remove('hide');
        nav.classList.remove('nav-mobile');
        header.classList.remove('header-mobile');


    }

    // $("main").click(function () {
    // 	log("Handler for .click() called.---MAIN");
    // });



    nav.addEventListener('mouseover', navHover)

    function navHover(e) {
        console.log(e)
    }


    //
    // Scroll
    //
    window.onscroll = scrollBehavior;
    w.skroll = 0;

    //
    // (f) - scrollBehavior
    //
    function scrollBehavior(e) {
        //
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        // Up or Down
        if (scrolled > w.skroll) scrollDown(scrolled)
        else scrollUp(scrolled)
        //
        w.skroll = scrolled;
    }
    //
    // (f) - scrollDown
    //
    function scrollDown(scrolled) {
        if (scrolled < 100) return

        header.classList.add('header-hide');
        nav.classList.add('nav-hide');

        // header.style.top = '-8em';
        // nav.style.top = '-8em'
    }
    //
    // (f) - scrollUp
    //
    function scrollUp(scrolled) {
        // header.style.top = '0px';
        header.classList.remove('header-hide');
        nav.classList.remove('nav-hide');
        // nav.style.top = '1.8em'
    }
  }

}
