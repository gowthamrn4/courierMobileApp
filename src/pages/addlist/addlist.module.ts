import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddlistPage } from './addlist';

@NgModule({
  declarations: [
    AddlistPage,
  ],
  imports: [
    IonicPageModule.forChild(AddlistPage),
  ],
})
export class AddlistPageModule {}
