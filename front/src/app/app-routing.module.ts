import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './@modules/@common-dependencies/@common-dependencies.module#CommonDependenciesModule'
  },
  // {
  //   path: 'login',
  //   loadChildren: './@modules/@authentication/@authentication.module#AuthenticationModule',
  // },
  {
    path: 'auth',
    loadChildren: () => import('./@modules/@authentication/@authentication.module').then(mod => mod.AuthenticationModule)
  },
  {
    path: 'dev',
    loadChildren: () => import('./@modules/@developer-guide/@developer-guide.module').then(mod => mod.DeveloperGuideModule)
  },
  { path: '**', redirectTo: '/p404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
