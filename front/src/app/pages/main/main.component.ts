import { Component, OnInit, OnDestroy } from '@angular/core';
import  state  from '../../app-state';
import { log } from '../../my_modules/stuff';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})

export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    state.nav.msg += 1
    log(state.nav.msg)
  }

  ngOnDestroy() {
  }

}
