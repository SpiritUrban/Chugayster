import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../@common-dependencies/services/api.service';
import { ApiJsClanService } from '../../services/api-js-clan.service';
import { Router } from '@angular/router';
import { log,  my_alert } from 'src/app/my_modules/stuff';
import appState from '../../../../app-state';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.sass']
})
export class LessonsComponent implements OnInit {

  st: any = appState;

  constructor(
    private api: ApiService,
    private _api: ApiJsClanService,
    private router: Router
  ) {
  }

  async ngOnInit() {
    try {
      this.st.cards = await this.api.getJson('/js-clan/data/lessons.json');
      console.log(this.st.cards);
    } catch (error) {
      console.log(error);
    }
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
    my_alert(':)', 'Your vote counted', null)
  }

  msgVoteBad() {
    my_alert(':(', 'Something wrong', null)
  }

}
