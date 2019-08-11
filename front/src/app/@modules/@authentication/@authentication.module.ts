import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HelpComponent } from './pages/help/help.component';

import { AuthenticationRoutingModule } from './@authentication-routing.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonDependenciesModule } from '../../@modules/@common-dependencies/@common-dependencies.module'

@NgModule({
  declarations: [LoginComponent, RegisterComponent, HelpComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonDependenciesModule
  ],
  exports: [LoginComponent, RegisterComponent, HelpComponent]
})
export class AuthenticationModule { }
