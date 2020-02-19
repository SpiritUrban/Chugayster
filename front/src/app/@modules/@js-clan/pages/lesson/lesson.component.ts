import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import appState from '../../../../app-state';
import { log } from '../../../../my_modules/stuff';
import { ApiService } from '../../../@common-dependencies/services/api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.sass']
})
export class LessonComponent implements OnInit {

  st: any = appState;
  url: string = "https://www.youtube.com/embed/";
  urlSafe: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    public sanitizer: DomSanitizer
  ) {
  }

  async ngOnInit() {
    try {

      // 1
      let lessonName = this.route.snapshot.paramMap.get('name');
      log(lessonName)
      // log(state)

      // 2
      this.st.cards = await this.api.getJson('/js-clan/data/lessons.json');
      log(this.st.cards);

      //3
      this.st.currentCard = this.st.cards.filter(card => card.name == lessonName)[0]
      log(this.st.currentCard)

      //4
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.st.currentCard.video);

    } catch (error) {
      log(error);
    }
  }

}
