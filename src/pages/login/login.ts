import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {LoggedinPage} from "../loggedin/loggedin";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;


  constructor(private alertCtl : AlertController,private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
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

  signIn()
  {
    this.fire.auth.signInWithEmailAndPassword(this.uname.value,this.password.value)
      .then(data =>{
       this.alert('Sucess! You are logged in');
       this.navCtrl.setRoot(LoggedinPage);
        // user is logged in
      })
      .catch(error =>
      {
        this.alert(error.message);
      })
  }

}
