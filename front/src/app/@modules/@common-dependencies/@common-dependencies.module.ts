import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonDependenciesRoutingModule } from './@common-dependencies-routing.module';
import { FormValidatorComponent } from './components/general/form-validator/form-validator.component';


@NgModule({
  declarations: [FormValidatorComponent],
  imports: [
    CommonModule,
    CommonDependenciesRoutingModule
  ],
  exports: [FormValidatorComponent]
})
export class CommonDependenciesModule { }
