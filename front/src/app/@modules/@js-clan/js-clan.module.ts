import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsClanRoutingModule } from './js-clan-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Other modules
import { CommonDependenciesModule } from '../../@modules/@common-dependencies/@common-dependencies.module'

// Components
import { NavComponent } from './components/general/nav/nav.component';
import { ClanFooterComponent } from './components/general/clan-footer/clan-footer.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { FlipCardVideoComponent } from './components/flip-card-video/flip-card-video.component';

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
import { VideoSamplesComponent } from './pages/sources/video-samples/video-samples.component';
import { FreeSoundsComponent } from './pages/sources/free-sounds/free-sounds.component';
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { ProgrammerTipsComponent } from './pages/programmer-tips/programmer-tips.component';
import { ArComponent } from './pages/games/ar/ar.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ClanCommunicationsComponent } from './components/clan-communications/clan-communications.component';
import { CardsFlowComponent } from './components/cards-flow/cards-flow.component';
import { LessonUniversityComponent } from './pages/lesson-university/lesson-university.component';

@NgModule({
  declarations: [
    LessonsComponent, 
    MainComponent, 
    P404Component, 
    NavComponent, ClanFooterComponent, LessonComponent, WantMoreLessonsComponent, MembersComponent, StudentsComponent, TrainingApparatusComponent, HealthComponent, FlipCardComponent, FlipCardVideoComponent, VideoSamplesComponent, FreeSoundsComponent, CabinetComponent, ProgrammerTipsComponent, ArComponent, AdminComponent, ClanCommunicationsComponent, CardsFlowComponent, LessonUniversityComponent
  ],
  imports: [
    CommonModule,
    JsClanRoutingModule,
    CommonDependenciesModule,
    FormsModule,
    NgbModule
  ],
  exports: [NavComponent, ClanFooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class JsClanModule { }
