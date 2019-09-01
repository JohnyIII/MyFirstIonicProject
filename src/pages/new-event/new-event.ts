import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {UdalostProvider} from "../../providers/udalost.provider";
import {Udalost} from "../../model/udalost.model";
import {AngularFireAuth} from "angularfire2/auth";
import {AlertProvider} from "../../providers/alert.provider";
import {GlobalProvider} from "../../providers/global.provider";

/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html',
})
export class NewEventPage {

  udalost = new Udalost();

  constructor(
    public fa: AngularFireAuth,
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public provider: UdalostProvider,
    private alertProvider: AlertProvider,
    private globalProvider: GlobalProvider
  ) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  save() {
      this.udalost.zalozil = this.globalProvider.user;
      this.provider.saveUdalost(this.udalost).subscribe(
        () =>{
          this.alertProvider.alert('Událost vytvořena');
          this.viewCtrl.dismiss();
        }
      );
  }

}
