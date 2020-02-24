import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  const routes: Routes = [
    {
      path: '',
      // loadChildren: 'src/app/@modules/js-clan/js-clan.module#JsClanModule'
      loadChildren: () => import('./@modules/@js-clan/js-clan.module').then(mod => mod.JsClanModule) 
    },
    {
      path: 'common',
      loadChildren: () => import('./@modules/@common-dependencies/@common-dependencies.module').then(mod => mod.CommonDependenciesModule)
    },
    {
      path: 'auth',
      loadChildren: () => import('./@modules/@authentication/@authentication.module').then(mod => mod.AuthenticationModule)
    },
    {
      path: 'dev',
      loadChildren: () => import('./@modules/@developer-guide/@developer-guide.module').then(mod => mod.DeveloperGuideModule)
    },
    { path: '**', redirectTo: '/p404' }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }