import { OnInit, Component, EventEmitter, Input, Output } from '@angular/core';
import appState from '../../../../app-state';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { log } from 'src/app/my_modules/stuff';


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

  moveCards(direction) {
    log(direction);
    if(direction == 'left') {
      const item = this.videos.shift()
      this.videos.push(item)
    }
    if(direction == 'right') {
      const item = this.videos.pop()
      this.videos.unshift(item)
    }
  }

}
