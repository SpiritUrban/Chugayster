import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages
import { HelpComponent } from './pages/help/help.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ConditionsComponent } from './pages/conditions/conditions.component'
import { ProfileComponent } from './pages/profile/profile.component';



const routes: Routes = [
  { path: 'help', component: HelpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: 'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthenticationRoutingModule { }