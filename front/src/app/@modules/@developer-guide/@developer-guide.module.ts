import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperGuideRoutingModule } from './@developer-guide-routing.module';
import { FormsComponent } from './pages/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorService } from '../../@modules/@common-dependencies/services/validator.service';

// import { FormValidatorComponent } from '../../@modules/@common-dependencies/components/general/form-validator/form-validator.component';
import { CommonDependenciesModule } from '../../@modules/@common-dependencies/@common-dependencies.module';
import { UrlQueriesComponent } from './pages/url-queries/url-queries.component';
import { AnyComponent } from './pages/any/any.component'


@NgModule({
  declarations: [FormsComponent, UrlQueriesComponent, AnyComponent, 
    // FormValidatorComponent // no!
  ],
  imports: [
    CommonModule,
    DeveloperGuideRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonDependenciesModule
  ],
  providers: [ValidatorService]
})
export class DeveloperGuideModule { }
