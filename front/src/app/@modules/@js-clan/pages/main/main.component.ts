import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  st = {
    alert: {
      show: true,
      title: 'About',
      body: 'Some wrong or good',
      bodyDev: 'Tech details'
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
