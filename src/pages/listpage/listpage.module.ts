import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListpagePage } from './listpage';

@NgModule({
  declarations: [
    ListpagePage,
  ],
  imports: [
    IonicPageModule.forChild(ListpagePage),
  ],
})
export class ListpagePageModule {}
