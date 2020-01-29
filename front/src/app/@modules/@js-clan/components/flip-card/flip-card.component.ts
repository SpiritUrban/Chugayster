import { OnInit, Component, EventEmitter, Input, Output } from '@angular/core';
import appState from '../../../../app-state';


@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.sass']
})
export class FlipCardComponent implements OnInit {

  // @Output() onChanged = new EventEmitter<any>();
  // @Input() state: any
  // @Input() userId: string;
  @Input() card: any;

  st: any;

  constructor() {
    this.st = appState
   }

  ngOnInit() {
  }

}
