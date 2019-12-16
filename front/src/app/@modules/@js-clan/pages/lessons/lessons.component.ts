import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../@common-dependencies/services/api.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.sass']
})
export class LessonsComponent implements OnInit {

  st = {
    lang: 'ua',
    cards: <any>[]
  }
  constructor(
    private api: ApiService
  ) { }

  async ngOnInit() {
    try {
      this.st.cards = await this.api.getJson('/js-clan/data/lessons.json');
      console.log(this.st.cards);
    } catch (error) {
      console.log(error);
    }
    // for (let i = 0; i < 10; i++) {
    //   this.st.cards.push(this.st.cards[0])
    // }
  }

}
