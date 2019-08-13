import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages
import { FormsComponent } from './pages/forms/forms.component';
import { UrlQueriesComponent } from './pages/url-queries/url-queries.component'
import { AnyComponent } from './pages/any/any.component'


const routes: Routes = [
  { path: 'forms', component: FormsComponent },
  { path: 'url-queries', component: UrlQueriesComponent },
  { path: 'any', component: AnyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperGuideRoutingModule { }
