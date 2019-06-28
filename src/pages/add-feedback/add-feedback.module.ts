import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFeedbackPage } from './add-feedback';

@NgModule({
  declarations: [
    AddFeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFeedbackPage),
  ],
})
export class AddFeedbackPageModule {}
