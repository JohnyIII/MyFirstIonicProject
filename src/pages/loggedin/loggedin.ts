import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Kraj } from '../../model/kraj.model';
import firebase from 'firebase';
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

  private KrajRef = firebase.database().ref('Kraje');
  nickname: string;
  kraje: Array<Kraj[]>;
  okresy: Array<any>;

  constructor(public fa: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {
    var ololo;
    firebase.database().ref('users').orderByChild('email').equalTo(this.fa.auth.currentUser.email).on('value', snapshot => {
      snapshot.forEach(function(data) {
        console.log(data.val().nickname);
        ololo = data.val().nickname;
      });
      this.nickname = ololo;
    });
  }

  ionViewDidLoad() {
    this.kraje = [];
    this.KrajRef.on('value', itemSnapshot => {
      this.kraje = [];
      itemSnapshot.forEach(itemSnap => {
        this.kraje.push(itemSnap.val());
        return false;
      });
    });
  }
}
