import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './pages/forms/forms.component';
import { UrlQueriesComponent } from './pages/url-queries/url-queries.component'


const routes: Routes = [
  { path: 'forms', component: FormsComponent },
  { path: 'url-queries', component: UrlQueriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperGuideRoutingModule { }
