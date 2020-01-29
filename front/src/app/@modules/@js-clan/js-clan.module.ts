import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JsClanRoutingModule } from './js-clan-routing.module';

// Other modules
import { CommonDependenciesModule } from '../../@modules/@common-dependencies/@common-dependencies.module'

// Pages
import { LessonsComponent } from './pages/lessons/lessons.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { MainComponent } from './pages/main/main.component';
import { P404Component } from './pages/p404/p404.component';
import { WantMoreLessonsComponent } from './pages/want-more-lessons/want-more-lessons.component';
import { MembersComponent } from './pages/members/members.component';
import { StudentsComponent } from './pages/students/students.component';
import { TrainingApparatusComponent } from './pages/training-apparatus/training-apparatus.component';
import { HealthComponent } from './pages/health/health.component';

// Components
import { NavComponent } from './components/general/nav/nav.component';
import { ClanFooterComponent } from './components/general/clan-footer/clan-footer.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { FlipCardVideoComponent } from './components/flip-card-video/flip-card-video.component';


@NgModule({
  declarations: [
    LessonsComponent, 
    MainComponent, 
    P404Component, 
    NavComponent, ClanFooterComponent, LessonComponent, WantMoreLessonsComponent, MembersComponent, StudentsComponent, TrainingApparatusComponent, HealthComponent, FlipCardComponent, FlipCardVideoComponent
  ],
  imports: [
    CommonModule,
    JsClanRoutingModule,
    CommonDependenciesModule,
    FormsModule,
    NgbModule
  ]
})
export class JsClanModule { }
