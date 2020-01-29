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