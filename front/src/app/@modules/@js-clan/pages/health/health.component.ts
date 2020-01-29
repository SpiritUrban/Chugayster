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
        name: "Вправа для поясниці",
        video: "-RjXS5aH3Hk",
        // img: "assets/js-clan/img/lessons/0.jpg",
        // title: {
        //   en: "",
        //   ua: "Это Упражнение Убивает Твою Поясницу(Замени Его)"
        // },
        description: {
          ua: "Вправа для поясниці"
        },
        text: {
          en: "text",
          ua: "При сидячій роботі розвивається викривлення в районі поясниці. Ця вправа допомагає виправити цей момент."
        }
      },
      {
        number: "1",
        name: "Вправа для поясниці",
        video: "PMqLSUT8LhE",
        // img: "assets/js-clan/img/lessons/0.jpg",
        // title: {
        //   en: "",
        //   ua: "Это Упражнение Убивает Твою Поясницу(Замени Его)"
        // },
        description: {
          ua: "Вправа для поясниці"
        },
        text: {
          en: "text",
          ua: "При сидячій роботі розвивається викривлення в районі поясниці. Ця вправа допомагає виправити цей момент."
        }
      },
    ]
  }

}
