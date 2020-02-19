import { Component, OnInit } from '@angular/core';
import appState from '../../../../app-state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  st: any= appState;

  constructor() { 
  }

  ngOnInit() {
  }

}
