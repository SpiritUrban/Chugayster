import { Component } from '@angular/core';
import { FingerprintService } from '../@modules/@common-dependencies/services/fingerprint.service';
import { ApiService } from '../@modules/@common-dependencies/services/api.service';

import appState from '../app-state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'front';

  st: any = appState;
  constructor(
    private fingerPrint: FingerprintService,
    private api: ApiService
  ) {
  }

  ngOnInit(){
    this.fingerPrint.checkIfItExist();
    this.getUserInfo();
  }

  async getUserInfo() {
    const fromServer: any = await this.api.getUserInfoIfLogged();
    console.log('result getUserInfo', fromServer);
    if (fromServer.firstName) {
      this.st.header.isLogged = true;
      this.st.header.user.name = fromServer.firstName;
    }
  }

}
