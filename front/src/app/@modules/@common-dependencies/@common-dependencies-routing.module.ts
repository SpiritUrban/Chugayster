import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages
import { MainComponent } from './pages/main/main.component';
import { P404Component } from './pages/p404/p404.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { EngineerComponent } from './pages/engineer/engineer.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'engineer/:name', component: EngineerComponent },
  { path: 'p404', component: P404Component },
  // { path: 'auth', component: AuthComponent },
  // { path: 'admin', component:  AdminComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonDependenciesRoutingModule { }
