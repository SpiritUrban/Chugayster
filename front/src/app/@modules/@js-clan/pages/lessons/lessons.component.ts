import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.sass']
})
export class LessonsComponent implements OnInit {

  st = {
    cards: [
      {
        title_en: 'Skeleton of HTML + JavaScript',
        title_ua: 'Скелет HTML + JavaScript',
        title_ru: 'Скелет HTML + JavaScript',
      },
      {
        title_en: 'Skeleton of HTML + JavaScript',
        title_ua: 'Скелет HTML + JavaScript',
        title_ru: 'Скелет HTML + JavaScript',
      },
      {
        title_en: 'Skeleton of HTML + JavaScript',
        title_ua: 'Скелет HTML + JavaScript',
        title_ru: 'Скелет HTML + JavaScript',
      },
      {
        title_en: 'Skeleton of HTML + JavaScript',
        title_ua: 'Скелет HTML + JavaScript',
        title_ru: 'Скелет HTML + JavaScript',
      },
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
