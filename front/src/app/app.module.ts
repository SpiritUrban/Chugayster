import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ReactiveFormsModule,FormsModule } from '@angular/forms';

// router
import { AppRoutingModule } from './app-routing.module';

//  root component
import { AppComponent } from './root/app.component';

// @modules
import { CommonDependenciesModule } from './@modules/@common-dependencies/@common-dependencies.module'

// services
import { ApiService } from './@modules/@common-dependencies/services/api.service'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // NgbModule,
    BrowserModule,
    AppRoutingModule,
    CommonDependenciesModule,
    HttpClientModule,
    // ReactiveFormsModule,
    // FormsModule
  ],
  providers: [
    ApiService
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
