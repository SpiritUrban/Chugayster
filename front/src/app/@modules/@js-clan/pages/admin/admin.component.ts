import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../@common-dependencies/services/api.service';
import { ApiJsClanService } from '../../services/api-js-clan.service';
import { Router } from '@angular/router';
import { log, my_alert } from 'src/app/my_modules/stuff';
import appState from '../../../../app-state';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {


  st: any = appState;
  editable: string;
  editableValue: any;
  editableValue2: any;
  test: any;
  showCat: boolean;
  // admin
  newAdminMsg: String;
  adminMsgs: any = [];

  constructor(
    private api: ApiService,
    private _api: ApiJsClanService,
    private router: Router
  ) {
  }

  ngOnInit() {
    log('STATE:');
    log(this.st)

    // debugger
    // setTimeout(() => { this.fake() }, 2000)

    // login control
    if (!this.st.user.isLogged) this.router.navigate(['/auth/login']);
    // admin control
    if (this.st.user.role != 'Admin') this.router.navigate(['/auth/login']);

    this.getAdminMsgs();

    log(this.st);
  }

  goToSubPage(name) {
    log(name, this.st)
    this.st.pages.cabinet.subPage = name;
  }

  async logout() {
    const answer: any = await this.api.logout();
    location.reload();
  }

  toEditableMod(field, $event) {
    log(field)
    const container = $event.toElement.parentElement.parentElement;
    // focus
    setTimeout(() => {
      const target = container.querySelector('p input, p select');
      target.focus();
      log(container, target);
    }, 100)
    this.editableValue = this.st.user[field];
    this.editable = field;

    // this.test = new Date( this.st.user.date_of_birth)
  }

  async editUser() {
    log(this.editable, this.editableValue, this.st.user);
    const answer: any = await this.api.editUser({ key: this.editable, newValue: this.editableValue });
    this.editable = '';
    this.getUserInfo(); // refresh ui user;
    log(answer);
  }

  async getUserInfo() {
    try {
      this.st.user = await this.api.getUserInfoIfLogged();
      log('result getUserInfo', this.st.user);
    } catch (error) {
      log(error);
    }
  }

  onChange(deviceValue) {
    this.editableValue = deviceValue
    console.log(deviceValue);
  }

  async sendVerificationMail() {
    const answer: any = await this.api.sendVerificationMail();
    log(answer);
  }

  async changePassword(){
    log(this.editableValue2);

    const info = {
      old_password: this.editableValue,
      new_password: this.editableValue2
    };
    const answer: any = await this.api.changePassword(info);
    log(answer);
    this.editable = '';
    my_alert('', answer.msg2, null);
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
