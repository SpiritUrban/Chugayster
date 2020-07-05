import { OnInit, Component, EventEmitter, Input, Output } from '@angular/core';
import appState from '../../../../app-state';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-cards-flow',
  templateUrl: './cards-flow.component.html',
  styleUrls: ['./cards-flow.component.sass']
})
export class CardsFlowComponent implements OnInit {

  @Input() card: any;

  st: any;
  url: string = "https://www.youtube.com/embed/";
  urlSafe: SafeResourceUrl;

  constructor(
    public sanitizer: DomSanitizer
  ) {
    this.st = appState
   }

  ngOnInit() {
    // this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.card.video);

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
