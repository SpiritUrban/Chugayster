import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../../../@common-dependencies/services/api.service';
import { ApiJsClanService } from '../../services/api-js-clan.service';
import { Router } from '@angular/router';
import { log, my_alert } from 'src/app/my_modules/stuff';
import appState from '../../../../app-state';

@Component({
  selector: 'app-clan-communications',
  templateUrl: './clan-communications.component.html',
  styleUrls: ['./clan-communications.component.sass']
})
export class ClanCommunicationsComponent implements OnInit {

  @Input() mode: any; // user or admin

  st: any = appState;
  newAdminMsg: String;
  adminMsgs: any = [];

  constructor(
    private api: ApiService,
    private _api: ApiJsClanService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAdminMsgs();

  }


  
  async postAdminMsg(){
    log(this.newAdminMsg);
    const answer: any = await this.api.postAdminMsg(this.newAdminMsg);
    log(answer);
    this.getAdminMsgs();
  }

  async getAdminMsgs() {
    try {
      log('!!!')
      const answer: any = await this.api.getAdminMsgs();
      this.adminMsgs = answer.result;
      log('result adminMsgs', this.adminMsgs);
    } catch (error) {
      log(error);
    }
  }

  async delAdminMsg(_id){
    const answer: any = await this.api.delAdminMsg(_id);
    log(answer);
    this.getAdminMsgs();
  }

}
