import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  state  from '../../../../app-state';
import { log } from '../../../../my_modules/stuff';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.sass']
})
export class LessonComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    log(name)
    log(state)

  }

}
