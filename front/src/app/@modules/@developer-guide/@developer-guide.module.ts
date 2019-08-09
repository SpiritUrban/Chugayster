import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperGuideRoutingModule } from './@developer-guide-routing.module';
import { FormsComponent } from './pages/forms/forms.component';


@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    DeveloperGuideRoutingModule
  ]
})
export class DeveloperGuideModule { }
