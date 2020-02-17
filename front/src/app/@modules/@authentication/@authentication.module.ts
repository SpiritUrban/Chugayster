import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './@authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonDependenciesModule } from '../../@modules/@common-dependencies/@common-dependencies.module';
import { JsClanModule } from '../../@modules/@js-clan/js-clan.module'


// services
import { ValidatorService } from '../../@modules/@common-dependencies/services/validator.service';
import { ApiService } from '../../@modules/@common-dependencies/services/api.service';

// pages
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HelpComponent } from './pages/help/help.component';
import { ConditionsComponent } from './pages/conditions/conditions.component';

// import { ClanFooterComponent } from './components/general/clan-footer/clan-footer.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, HelpComponent, ConditionsComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonDependenciesModule,
    JsClanModule
  ],
  providers: [
    ValidatorService,
    ApiService
  ],
  exports: [LoginComponent, RegisterComponent, HelpComponent, ConditionsComponent]
})
export class AuthenticationModule { }
