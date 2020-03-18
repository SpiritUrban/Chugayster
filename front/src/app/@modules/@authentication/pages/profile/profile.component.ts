import { Component, OnInit } from '@angular/core';
import appState from '../../../../app-state';
import { log, my_alert } from '../../../../my_modules/stuff';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  st: any = appState;

  constructor() { }

  ngOnInit(): void {
    log(this.st)
  }

}
