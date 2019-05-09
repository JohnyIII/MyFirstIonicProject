import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {LoggedinPage} from "../loggedin/loggedin";
import firebase from 'firebase';
import { Kraj } from '../../model/kraj.model';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private KrajRef = firebase.database().ref('Kraje');
  kraje: Array<Kraj[]>;
  kraj : Kraj;
  mikrofon : boolean;

  @ViewChild('username') uname;
  @ViewChild('password') password;
  @ViewChild('email') email;

  constructor(private alertCtl : AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
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
    console.log(this.kraje);
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

  registerUser()
  {
    console.log(this.uname);
    if(this.uname.value.length<4)
    {
      this.alert('Zadejte prosim uzivatelske jmeno alespon 4 znaky dlouhe');
      return;
    }
    this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.password.value)
      .then(data =>
      {
        console.log('got data', data);
        firebase.database().ref('users').push().set({
          email : this.email.value,
          nickname : this.uname.value,
          kraj : this.kraj.zkratka,
          mikrofon : this.mikrofon
        });
        this.alert('You are registered, welcome!')
        this.navCtrl.setRoot(LoggedinPage);;
      })
      .catch(error =>
      {
        this.alert(error.message);
        console.log('got an error ', error);
      });
    console.log('Would register in with ', this.email.value, this.password.value);
  }

}
