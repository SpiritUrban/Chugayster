import { Component, OnInit } from '@angular/core';
import appState from '../../../../app-state';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.sass']
})
export class HealthComponent implements OnInit {

  st: any;

  constructor() {
    this.st = appState
  }

  ngOnInit() {
    this.st.cards = [
      {
        number: "0",
        name: "Упражнение для спины",
        video: "-RjXS5aH3Hk",
        img: "assets/js-clan/img/lessons/0.jpg",
        title: {
          en: "",
          ua: "Это Упражнение Убивает Твою Поясницу(Замени Его)"
        },
        description: {
          ua: ""
        },
        text: {
          en: "",
          ua: ""
        }
      },
      {
        number: "0",
        name: "Упражнение для спины",
        video: "-RjXS5aH3Hk",
        img: "assets/js-clan/img/lessons/0.jpg",
        title: {
          en: "",
          ua: "Это Упражнение Убивает Твою Поясницу(Замени Его)"
        },
        description: {
          ua: ""
        },
        text: {
          en: "",
          ua: ""
        }
      },
    ]
  }

}
