import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import team from '../../data/team';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.sass']
})
export class EngineerComponent implements OnInit {

  engineer = this.getEngineer();

  constructor(
    private route: ActivatedRoute
    ) { } 

  ngOnInit() {
    
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

}

