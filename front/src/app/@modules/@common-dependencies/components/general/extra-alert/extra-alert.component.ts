import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extra-alert',
  templateUrl: './extra-alert.component.html',
  styleUrls: ['./extra-alert.component.sass']
})
export class ExtraAlertComponent implements OnInit {

  @Input() st: any;

  constructor() { 
  }

  ngOnInit() {
  }

  close(){
    this.st.show = false;
  }
}
