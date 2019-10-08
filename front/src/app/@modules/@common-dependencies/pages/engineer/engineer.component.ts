import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import team from '../../data/team';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.sass']
})
export class EngineerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
    ) { } 

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    let engineer = team.filter( engineer => engineer.name == name )
    console.log(name, engineer);
  }

}

