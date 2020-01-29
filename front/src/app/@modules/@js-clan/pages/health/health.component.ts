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
        name: "Skeleton",
        video: "-8gk0tXZu2w",
        img: "assets/js-clan/img/lessons/0.jpg",
        title: {
          en: "Skeleton of HTML + JavaScript",
          ua: "Скелет HTML + JavaScript"
        },
        description: {
          ua: "Початок, інструменти, структура."
        },
        text: {
          en: "Fundamentals: Browser, Web page, its structure, browser tools.",
          ua: "Основа основ: браузер, веб сторінка, її структура, інструменти розробника у браузері."
        }
      },
      {
        number: "2",
        name: "Skeleton",
        video: "-8gk0tXZu2w",
        img: "assets/js-clan/img/lessons/0.jpg",
        title: {
          en: "Skeleton of HTML + JavaScript",
          ua: "Скелет HTML + JavaScript"
        },
        description: {
          ua: "Початок, інструменти, структура."
        },
        text: {
          en: "Fundamentals: Browser, Web page, its structure, browser tools.",
          ua: "Основа основ: браузер, веб сторінка, її структура, інструменти розробника у браузері."
        }
      }
    ]
  }

}
