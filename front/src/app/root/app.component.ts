import { Component } from '@angular/core';
import { FingerprintService } from '../@modules/@common-dependencies/services/fingerprint.service';
import { ApiService } from '../@modules/@common-dependencies/services/api.service';

import appState from '../app-state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'front';

  st: any = appState;
  constructor(
    private fingerPrint: FingerprintService,
    private api: ApiService
  ) {
  }

  ngOnInit() {
    this.fingerPrint.checkIfItExist();
    this.getUserInfo();
  }

  async getUserInfo() {
    try {
      this.st.user = await this.api.getUserInfoIfLogged();
      console.log('result getUserInfo', this.st.user);
    } catch (error) {

    }

    // this.st.user = fromServer
    // if (this.st.user.firstName) {
    //   this.st.header.isLogged = true;
    //   this.st.header.user.name = fromServer.firstName;
    // }
  }

}
