import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../@common-dependencies/services/api.service';
import { ApiJsClanService } from '../../services/api-js-clan.service';
import { Router } from '@angular/router';
import { log } from 'src/app/my_modules/stuff';
import appState from '../../../../app-state';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.sass']
})
export class LessonsComponent implements OnInit {

  st: any;

  constructor(
    private api: ApiService,
    private _api: ApiJsClanService,
    private router: Router
  ) {
    this.st = appState
  }

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

  async wantMoreLessons() {
    // this.router.navigate(['/want-more-lessons']);
    const r: any = await this._api.voteForLessons();

    (r.ok) ?
      this.msgVoteOk() :
      this.msgVoteBad()
    log(r)
  }

  msgVoteOk() {
    this.st.alert.title = ':)';
    this.st.alert.body = 'Your vote counted';
    this.st.alert.show = true
  }

  msgVoteBad() {
    this.st.alert.title = ':(';
    this.st.alert.body = 'Something wrong';
    this.st.alert.show = true
  }

}
