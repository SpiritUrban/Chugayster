import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { MainComponent } from './pages/main/main.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { P404Component } from './pages/p404/p404.component';

const routes: Routes = [
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'lessons', component: LessonsComponent },
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