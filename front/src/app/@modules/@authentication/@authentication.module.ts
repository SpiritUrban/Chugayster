import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HelpComponent } from './pages/help/help.component';

import { AuthenticationRoutingModule } from './@authentication-routing.module'

@NgModule({
  declarations: [LoginComponent, RegisterComponent, HelpComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  exports: [LoginComponent, RegisterComponent, HelpComponent]
})
export class AuthenticationModule { }
