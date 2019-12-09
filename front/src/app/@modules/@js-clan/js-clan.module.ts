import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsClanRoutingModule } from './js-clan-routing.module';

// Other modules
import { CommonDependenciesModule } from '../../@modules/@common-dependencies/@common-dependencies.module'

// Pages
import { LessonsComponent } from './pages/lessons/lessons.component';
import { MainComponent } from './pages/main/main.component';
import { P404Component } from './pages/p404/p404.component';

// Components
import { NavComponent } from './components/general/nav/nav.component';
import { ClanFooterComponent } from './components/general/clan-footer/clan-footer.component';


@NgModule({
  declarations: [
    LessonsComponent, 
    MainComponent, 
    P404Component, 
    NavComponent, ClanFooterComponent
  ],
  imports: [
    CommonModule,
    JsClanRoutingModule,
    CommonDependenciesModule
  ]
})
export class JsClanModule { }
