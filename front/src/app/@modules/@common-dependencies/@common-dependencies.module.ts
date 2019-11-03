import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDependenciesRoutingModule } from './@common-dependencies-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

// added modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// services
import { ApiService } from './services/api.service';
import { ValidatorService } from './services/validator.service';
import { HighlightService } from './services/highlight.service';

// pages
import { MainComponent } from './pages/main/main.component';
import { P404Component } from './pages/p404/p404.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { EngineerComponent } from './pages/engineer/engineer.component';

// components
import { NavComponent } from './components/general/nav/nav.component';
import { FormValidatorComponent } from './components/general/form-validator/form-validator.component';
import { ExtraAlertComponent } from './components/general/extra-alert/extra-alert.component';
import { ShowCodeComponent } from './components/special/show-code/show-code.component';
import { FooterComponent } from './components/general/footer/footer.component';


@NgModule({
  declarations: [
    // pages
    MainComponent,
    P404Component,
    AboutUsComponent,
    // components
    NavComponent,
    FormValidatorComponent,
    ExtraAlertComponent,
    EngineerComponent,
    ShowCodeComponent,
    FooterComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    CommonDependenciesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    // services
    ValidatorService,
    ApiService,
    HighlightService
  ],
  exports: [
    FormValidatorComponent, 
    ExtraAlertComponent,
    FooterComponent
    // ValidatorService -- !!! it's not need !!!
  ]
})
export class CommonDependenciesModule { }
