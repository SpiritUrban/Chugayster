import { Component, OnInit } from '@angular/core';
import { delay } from 'q';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
  };

  navbarOpen: boolean = false;
  navbarCollapse: string = 'navbar-collapse prepare';


  constructor() { }

  ngOnInit() {
  }

  steps(lot) {
    lot.map(one => setTimeout(one[1], one[0]))
  }

  
  navToggle() {
    // open/close
    this.navbarOpen = !this.navbarOpen

    if (!this.navbarOpen) {
      this.navbarCollapse = 'navbar-collapse  prepare'
    } else {
      this.steps([
        [0, _ => this.navbarCollapse = 'navbar-collapse collapsing prepare'],
        [10, _ => this.navbarCollapse = 'navbar-collapse opening prepare'],
      ])
    }

  }
}
