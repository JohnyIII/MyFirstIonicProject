import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { FindPlayerPage } from '../pages/find-player/find-player';
import { PlayerMapPage } from "../pages/player-map/player-map";
import { PlayerDetailPage } from "../pages/player-detail/player-detail";
import { LoginPage} from "../pages/login/login";
import { RegisterPage} from "../pages/register/register";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule} from "angularfire2";
import { AngularFireAuthModule} from "angularfire2/auth";
import { LoggedinPage} from "../pages/loggedin/loggedin";
import { AngularFireDatabaseModule} from "angularfire2/database";
import { KrajServiceProvider } from '../providers/kraj-service/kraj-service';
import { UserProvider } from '../providers/user/user';
import { NewEventPage } from '../pages/new-event/new-event';

const firebase = {

};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    FindPlayerPage,
    PlayerDetailPage,
    PlayerMapPage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    NewEventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    FindPlayerPage,
    PlayerMapPage,
    PlayerDetailPage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    NewEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KrajServiceProvider,
    UserProvider,
  ]
})
export class AppModule {}
