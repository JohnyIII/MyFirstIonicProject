import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {UdalostAndUserProvider} from "../../providers/udalostAndUser.provider";
import {User} from "../../model/user.model";
import {GlobalProvider} from "../../providers/global.provider";
import {UdalostAndUser} from "../../model/udalostAndUser.model";
import {UdalostProvider} from "../../providers/udalost.provider";
import {Udalost} from "../../model/udalost.model";
/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  user: User;
  udalostiUser: Array<UdalostAndUser>;
  udalosti: Array<Udalost>;
  constructor(public fa: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    private udalostAndUserProvider: UdalostAndUserProvider,
    private globalProvider: GlobalProvider,
    private udalostProvider: UdalostProvider) {}

  ionViewDidLoad() {
    this.user = this.globalProvider.user;
    this.udalostAndUserProvider.getUdalostiByUser(this.user).subscribe(
      data => this.udalostiUser = data
    );
    this.udalostProvider.getUdalostByUser(this.user).subscribe(
      data => this.udalosti = data.filter(udalost => udalost.datumUdalosti>new Date().toISOString())
    );
  }
}
