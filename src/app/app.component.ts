import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FindPlayerPage} from "../pages/find-player/find-player";
import { PlayerDetailPage} from "../pages/player-detail/player-detail";
import { PlayerMapPage} from "../pages/player-map/player-map";
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { AngularFireAuth } from 'angularfire2/auth';
import {ProfileListPage} from "../pages/profile/profile";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public fb : AngularFireAuth
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Domů' , component : LoggedinPage},
      { title: 'Můj profil', component: PlayerDetailPage },
      { title: 'Najdi hráče', component: FindPlayerPage },
      { title: 'Události', component: ListPage },
      { title: 'Mapa hráčů', component: PlayerMapPage },
      { title: 'Ukazky', component: ProfileListPage}

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  logout(){
  this.fb.auth.signOut().then(() => {
    this.menu.close();
    this.nav.setRoot(this.rootPage);
  }
  );
}

}
