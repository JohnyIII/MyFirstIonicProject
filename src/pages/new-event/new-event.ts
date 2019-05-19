import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {UdalostProvider} from "../../providers/udalost.provider";
import {Udalost} from "../../model/udalost.model";
import {AngularFireAuth} from "angularfire2/auth";
import {UserProvider} from "../../providers/user.provider";

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

  udalost: Udalost;

  constructor(
    private alertCtl : AlertController,
    public userProvider: UserProvider,
    public fa: AngularFireAuth,
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public provider: UdalostProvider,
  ) {
    this.udalost= new Udalost();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  alert(message : string)
  {
    this.alertCtl.create(
      {
        title : 'Info!',
        subTitle : message,
        buttons : ['OK']
      }
    ).present();
  }

  save() {
    this.userProvider.getUser(this.fa.auth.currentUser.email).subscribe(ref =>{
      this.udalost.zalozil = ref[0].nickname;
      this.provider.saveUdalost(this.udalost);
      this.alert('Událost vytvořena');
      this.viewCtrl.dismiss();
    });
  }

}
