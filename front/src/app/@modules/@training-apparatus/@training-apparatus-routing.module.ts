import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepAComponent } from './pages/step-a/step-a.component';


const routes: Routes = [
  { path: 'step-a', component: StepAComponent },

  // { path: 'p404', component: P404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingApparatusRoutingModule { }
