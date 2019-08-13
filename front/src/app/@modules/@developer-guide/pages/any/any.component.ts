import { Component, OnInit } from '@angular/core';

// declarations
declare var require: any;
declare function _require(name: string): any;


@Component({
  selector: 'app-any',
  templateUrl: './any.component.html',
  styleUrls: ['./any.component.sass']
})
export class AnyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
