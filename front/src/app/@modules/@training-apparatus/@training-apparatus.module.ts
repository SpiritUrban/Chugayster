import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Other modules
import { CommonDependenciesModule } from '../../@modules/@common-dependencies/@common-dependencies.module'
import { JsClanModule } from '../../@modules/@js-clan/js-clan.module'


import { TrainingApparatusRoutingModule } from './@training-apparatus-routing.module';
import { StepAComponent } from './pages/step-a/step-a.component';


@NgModule({
  declarations: [StepAComponent],
  imports: [
    CommonModule,
    TrainingApparatusRoutingModule,
    CommonDependenciesModule,
    JsClanModule
  ]
})
export class TrainingApparatusModule { }
