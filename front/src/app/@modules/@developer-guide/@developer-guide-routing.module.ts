import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './pages/forms/forms.component';


const routes: Routes = [
  { path: 'forms', component: FormsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperGuideRoutingModule { }
