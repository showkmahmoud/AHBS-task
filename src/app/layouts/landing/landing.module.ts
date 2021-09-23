import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingLayoutComponent } from './components/landing-layout/landing-layout.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    LandingLayoutComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CoreModule
  ]
})
export class LandingModule { }
