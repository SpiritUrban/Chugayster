import { OnInit, Component, EventEmitter, Input, Output } from '@angular/core';
import appState from '../../../../app-state';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-flip-card-video',
  templateUrl: './flip-card-video.component.html',
  styleUrls: ['./flip-card-video.component.sass']
})
export class FlipCardVideoComponent implements OnInit {

  @Input() card: any;
  @Input() goingTo: any;

  st: any;
  url: string = "https://www.youtube.com/embed/";
  urlSafe: SafeResourceUrl;

  constructor(
    public sanitizer: DomSanitizer
  ) {
    this.st = appState
   }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.card.video);
  }

}