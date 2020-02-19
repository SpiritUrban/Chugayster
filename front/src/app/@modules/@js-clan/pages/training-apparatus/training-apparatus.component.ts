import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../@common-dependencies/services/api.service';
import { log } from 'src/app/my_modules/stuff';
import appState from '../../../../app-state';

@Component({
  selector: 'app-training-apparatus',
  templateUrl: './training-apparatus.component.html',
  styleUrls: ['./training-apparatus.component.sass']
})
export class TrainingApparatusComponent implements OnInit {

  st: any= appState;
  
  constructor(
    private api: ApiService
  ) { }

  async ngOnInit() {
    try {
      this.st.cards = await this.api.getJson('/js-clan/data/training-apparatus.json');
      console.log(this.st.cards);
    } catch (error) {
      console.log(error);
    }
  }

  play(){
    log('Play')
  }

}
