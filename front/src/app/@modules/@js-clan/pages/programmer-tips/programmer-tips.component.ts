import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../@common-dependencies/services/api.service';
import { log } from 'src/app/my_modules/stuff';
import appState from '../../../../app-state';

@Component({
  selector: 'app-programmer-tips',
  templateUrl: './programmer-tips.component.html',
  styleUrls: ['./programmer-tips.component.sass']
})
export class ProgrammerTipsComponent implements OnInit {

  st: any= appState;
  
  constructor(
    private api: ApiService
  ) { }

  async ngOnInit(): Promise<any> {
    try {
      this.st.cards = await this.api.getJson('/js-clan/data/programmer-tips.json');
      console.log(this.st.cards);
    } catch (error) {
      console.log(error);
    }
  }

  play(){
    log('Play')
  }

}
