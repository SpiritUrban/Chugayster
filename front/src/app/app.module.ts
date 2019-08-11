import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// @modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
// import { AuthenticationModule } from './@modules/@authentication/@authentication.module'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonDependenciesModule } from './@modules/@common-dependencies/@common-dependencies.module'

import { AppComponent } from './root/app.component';

// pages
import { MainComponent } from './pages/main/main.component';
import { P404Component } from './pages/p404/p404.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NavComponent } from './components/general/nav/nav.component';

import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    P404Component,
    AboutUsComponent,
    NavComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    // AuthenticationModule,
    CommonDependenciesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
