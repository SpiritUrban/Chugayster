import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { MainComponent } from './pages/main/main.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { LessonComponent } from './pages/lesson/lesson.component';
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

const routes: Routes = [
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'lesson/:name', component: LessonComponent },
  { path: 'want-more-lessons', component: WantMoreLessonsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'training-apparatus', component: TrainingApparatusComponent },
  { path: 'health', component: HealthComponent },
  { path: 'video-samples', component: VideoSamplesComponent },
  { path: 'free-sounds', component: FreeSoundsComponent },
  { path: 'cabinet', component: CabinetComponent },
  { path: 'programmer-tips', component: ProgrammerTipsComponent },


  { path: 'p404', component: P404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsClanRoutingModule { }


// const routes: Routes = [
  // { path: 'about-us', component: AboutUsComponent },
  // { path: 'engineer/:name', component: EngineerComponent },
  // { path: 'auth', component: AuthComponent },
  // { path: 'admin', component:  AdminComponent},
// ];