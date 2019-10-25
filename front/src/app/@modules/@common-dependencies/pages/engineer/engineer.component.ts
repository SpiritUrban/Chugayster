import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import team from '../../data/team';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.sass']
})

export class EngineerComponent implements OnInit {

  engineer = this.getEngineer();

  constructor(
    private route: ActivatedRoute,
    private highlightService: HighlightService
    ) { } 

  ngOnInit() {
    setTimeout(()=>this.highlightService.highlightAll(), 100); 
  }

  getEngineer() {
    let name = this.route.snapshot.paramMap.get('name');
    let engineer = team.filter( engineer => engineer.name == name );
    return engineer[0];
  }

  numToArr(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(i);
    }
    return arr;
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

  highlight() {
    this.highlightService.highlightAll();
    console.log('click');
  }

}

