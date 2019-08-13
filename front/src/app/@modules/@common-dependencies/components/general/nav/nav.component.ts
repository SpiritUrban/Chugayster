import { Component, OnInit } from '@angular/core';
import { log, steps } from '../../../../../my_modules/stuff';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  navbarOpen: boolean = false;
  drop1: boolean = false;
  drop2: boolean = false;
  navbarCollapse: string = 'navbar-collapse prepare';

  constructor() { }

  ngOnInit() {
  }

  navToggle() {
    // open/close
    this.navbarOpen = !this.navbarOpen
    // open ?
    this.navbarOpen
      ?
      steps([
        [0, _ => this.navbarCollapse = 'navbar-collapse collapsing prepare'],
        [20, _ => this.navbarCollapse = 'navbar-collapse opening prepare'],
        [500, _ => this.navbarCollapse = 'navbar-collapse opened prepare'],
      ])
      :
      steps([
        [0, _ => this.navbarCollapse = 'navbar-collapse opening prepare'],
        [70, _ => this.navbarCollapse = 'navbar-collapse  prepare'],
      ])      
      // this.navbarCollapse = 'navbar-collapse  prepare'
  }
}
