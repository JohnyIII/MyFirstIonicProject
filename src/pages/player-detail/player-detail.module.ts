import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerDetailPage } from './player-detail';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    PlayerDetailPage,
  ],
    imports: [
        IonicPageModule.forChild(PlayerDetailPage),
        PipesModule,
    ],
})
export class PlayerDetailPageModule {}
