import { OnInit, Component, EventEmitter, Input, Output } from '@angular/core';
import appState from '../../../../app-state';

@Component({
  selector: 'app-flip-card-video',
  templateUrl: './flip-card-video.component.html',
  styleUrls: ['./flip-card-video.component.sass']
})
export class FlipCardVideoComponent implements OnInit {

  @Input() card: any;

  st: any;

  constructor() {
    this.st = appState
   }

  ngOnInit() {
  }

}