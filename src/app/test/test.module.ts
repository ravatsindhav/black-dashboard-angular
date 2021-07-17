import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
