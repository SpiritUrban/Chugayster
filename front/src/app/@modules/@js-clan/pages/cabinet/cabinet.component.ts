import { Component, OnInit } from '@angular/core';
import appState from '../../../../app-state';
import { ApiService } from '../../../@common-dependencies/services/api.service';


@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.sass']
})
export class CabinetComponent implements OnInit {

  st: any = appState;

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() {
  }

}
