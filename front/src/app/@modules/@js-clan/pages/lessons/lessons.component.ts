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
        name: 'skeleton',
        title: {
          en: 'Skeleton of HTML + JavaScript',
          ua: 'Скелет HTML + JavaScript',
          ru: 'Скелет HTML + JavaScript',
        }
      }
    ]
  }
  constructor() { }

  ngOnInit() {
    for (let i=0; i<10; i++){
      this.st.cards.push(this.st.cards[0])
    }
  }

}
