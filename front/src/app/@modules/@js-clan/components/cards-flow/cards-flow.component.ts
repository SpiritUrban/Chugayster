import { OnInit, Component, EventEmitter, Input, Output } from '@angular/core';
import appState from '../../../../app-state';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-cards-flow',
  templateUrl: './cards-flow.component.html',
  styleUrls: ['./cards-flow.component.sass']
})
export class CardsFlowComponent implements OnInit {

  @Input() videos: any;

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


  }

}
