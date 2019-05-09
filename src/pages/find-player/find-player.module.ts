import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindPlayerPage } from './find-player';

@NgModule({
  declarations: [
    FindPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(FindPlayerPage),
  ],
})
export class FindPlayerPageModule {}
