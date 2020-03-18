import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../@common-dependencies/services/api.service';
import { ApiJsClanService } from '../../services/api-js-clan.service';
import { Router } from '@angular/router';
import { log } from 'src/app/my_modules/stuff';
import appState from '../../../../app-state';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.sass']
})
export class CabinetComponent implements OnInit {

  st: any = appState;

  constructor(
    private api: ApiService,
    private _api: ApiJsClanService,
    private router: Router
  ) {
  }

  ngOnInit() {
    log('STATE:');
    log(this.st)
  }

}
