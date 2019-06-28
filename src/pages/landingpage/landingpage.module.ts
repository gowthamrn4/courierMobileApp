import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandingpagePage } from './landingpage';

@NgModule({
  declarations: [
    LandingpagePage,
  ],
  imports: [
    IonicPageModule.forChild(LandingpagePage),
  ],
})
export class LandingpagePageModule {}
