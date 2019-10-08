import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import team from '../../data/team';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.sass']
})
export class MemberComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
    ) { } 

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    let engineer = team.filter( engineer => engineer.name == name )
    console.log(name, engineer);
  }

}

