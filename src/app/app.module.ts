import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule} from "angularfire2";
import { AngularFireAuthModule} from "angularfire2/auth";
import { AngularFireDatabaseModule} from "angularfire2/database";
import { KrajProvider } from '../providers/kraj.provider';
import { UserProvider } from '../providers/user.provider';
import {UdalostProvider} from "../providers/udalost.provider";
import {GlobalProvider} from "../providers/global.provider";
import {PlayerDetailPageModule} from "../pages/player-detail/player-detail.module";
import {NewEventPageModule} from "../pages/new-event/new-event.module";
import {LoggedinPageModule} from "../pages/loggedin/loggedin.module";
import {RegisterPageModule} from "../pages/register/register.module";
import {PlayerMapPageModule} from "../pages/player-map/player-map.module";
import {FindPlayerPageModule} from "../pages/find-player/find-player.module";
import {AlertProvider} from "../providers/alert.provider";
import {UserUdalostProvider} from "../providers/userUdalost.provider";
import {LoginPageModule} from "../pages/login/login.module";

const firebase = {
  apiKey: "AIzaSyBSMiCjENqE1jFthMAMH1SRglFcBplN0vg",
  authDomain: "my-first-ionic-project-b96ad.firebaseapp.com",
  databaseURL: "https://my-first-ionic-project-b96ad.firebaseio.com",
  projectId: "my-first-ionic-project-b96ad",
  storageBucket: "my-first-ionic-project-b96ad.appspot.com",
  messagingSenderId: "245803748410"
};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    PlayerDetailPageModule,
    NewEventPageModule,
    LoggedinPageModule,
    RegisterPageModule,
    LoginPageModule,
    PlayerMapPageModule,
    FindPlayerPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KrajProvider,
    UdalostProvider,
    UserProvider,
    GlobalProvider,
    AlertProvider,
    UserUdalostProvider
  ]
})
export class AppModule {}
