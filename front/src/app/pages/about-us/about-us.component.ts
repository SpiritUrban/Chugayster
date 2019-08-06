import { Component, OnInit, OnDestroy } from '@angular/core';
import  state  from '../../app-state';
import { log } from '../../my_modules/stuff';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})

export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    state.nav.msg += 2
    log(state.nav.msg)
  }

  ngOnDestroy() {
  } 
 
}
