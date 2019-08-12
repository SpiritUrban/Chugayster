import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonDependenciesRoutingModule } from './@common-dependencies-routing.module';
import { FormValidatorComponent } from './components/general/form-validator/form-validator.component';

import { ValidatorService } from './services/validator.service';


@NgModule({
  declarations: [FormValidatorComponent],
  imports: [
    CommonModule,
    CommonDependenciesRoutingModule
  ],
  providers: [ValidatorService],
  exports: [
    FormValidatorComponent, 
    // ValidatorService -- !!! it's not need !!!
  ]
})
export class CommonDependenciesModule { }
