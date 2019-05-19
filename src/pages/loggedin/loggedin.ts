import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Kraj } from '../../model/kraj.model';
import {UserProvider} from "../../providers/user.provider";
import {KrajProvider} from "../../providers/kraj.provider";
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

  nickname: string;
  kraje: Array<Kraj>;

  constructor(public fa: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private krajeProvider: KrajProvider) {
      userProvider.getUser(this.fa.auth.currentUser.email).subscribe(ref =>this.nickname = ref[0].nickname);
  }

  ionViewDidLoad() {
    this.krajeProvider.getKrajList().subscribe(ref => this.kraje = ref);
  }
}
