import { Component, OnInit } from '@angular/core';
import appState from '../../../../app-state';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.sass']
})
export class CabinetComponent implements OnInit {

  st: any = appState;

  constructor() { }

  ngOnInit() {
  }

}
