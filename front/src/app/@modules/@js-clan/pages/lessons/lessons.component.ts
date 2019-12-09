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
        title: {
          en: 'Skeleton of HTML + JavaScript',
          ua: 'Скелет HTML + JavaScript',
          ru: 'Скелет HTML + JavaScript',
        }
      },
      {
        title: {
          en: 'Skeleton of HTML + JavaScript',
          ua: 'Скелет HTML + JavaScript',
          ru: 'Скелет HTML + JavaScript',
        }
      },
      {
        title: {
          en: 'Skeleton of HTML + JavaScript',
          ua: 'Скелет HTML + JavaScript',
          ru: 'Скелет HTML + JavaScript',
        }
      },
      {
        title: {
          en: 'Skeleton of HTML + JavaScript',
          ua: 'Скелет HTML + JavaScript',
          ru: 'Скелет HTML + JavaScript',
        }
      },
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
