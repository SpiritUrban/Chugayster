import { Component, OnInit, Input } from '@angular/core';
import { HighlightService } from '../../../services/highlight.service';

@Component({
  selector: 'app-show-code',
  templateUrl: './show-code.component.html',
  styleUrls: ['./show-code.component.sass']
})
export class ShowCodeComponent implements OnInit {

  @Input() code:any; 
  @Input() language:any; 

  constructor(
    private highlightService: HighlightService
  ) { }

  ngOnInit() {
    this.highlightService.highlightAll();
  }

  codeExamples = [
    {
      title: 'example - 1',
      language: 'css',
      content: `body {
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }`
    },
    {
      title: 'example - 2',
      language: 'typescript',
      content: `console.log( const[...profit]= () => {} );`
    },
    {
      title: 'example - 3',
      language: 'javascript',
      content: `let i = () => {};`
    }
  ]

}