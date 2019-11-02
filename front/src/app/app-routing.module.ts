import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// We have connected other active projects here
const projectMode = 'JS-Clan';

const routes: Routes = []

if (projectMode == 'JS-Clan') {
  routes.push({
    path: '',
    loadChildren: './@modules/js-clan/js-clan.module#JsClanModule'
  })  
}else{
  routes.push({
    path: '',
    loadChildren: './@modules/@common-dependencies/@common-dependencies.module#CommonDependenciesModule'
  })
}

  // {
  //   path: 'login',
  //   loadChildren: './@modules/@authentication/@authentication.module#AuthenticationModule',
  // },

  routes.push(
    {
      path: 'auth',
      loadChildren: () => import('./@modules/@authentication/@authentication.module').then(mod => mod.AuthenticationModule)
    },
    {
      path: 'dev',
      loadChildren: () => import('./@modules/@developer-guide/@developer-guide.module').then(mod => mod.DeveloperGuideModule)
    },
    { path: '**', redirectTo: '/p404' }
  )



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
