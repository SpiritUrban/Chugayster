import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { P404Component } from './pages/p404/p404.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  // {
  //   path: 'login',
  //   loadChildren: './@modules/@authentication/@authentication.module#AuthenticationModule',
  // },
  {
    path: 'auth',
    loadChildren: () => import('./@modules/@authentication/@authentication.module').then(mod => mod.AuthenticationModule)
  },
  { path: 'about-us', component: AboutUsComponent },
  // { path: 'auth', component: AuthComponent },
  { path: 'p404', component: P404Component },
  // { path: 'admin', component:  AdminComponent},
  { path: '**', redirectTo: '/p404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
