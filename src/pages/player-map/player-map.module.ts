import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerMapPage } from './player-map';

@NgModule({
  declarations: [
    PlayerMapPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerMapPage),
  ],
})
export class PlayerMapPageModule {}
