import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {LoggedinPage} from "../loggedin/loggedin";
import {UserProvider} from "../../providers/user.provider";
import {GlobalProvider} from "../../providers/global.provider";
import {AlertProvider} from "../../providers/alert.provider";

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


  constructor(private fire: AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams,
              private userProvider: UserProvider,
              private globalProvider: GlobalProvider,
              private alertProvider:AlertProvider) {
  }

  ionViewDidLoad() {
  }

  signIn()
  {
    this.fire.auth.signInWithEmailAndPassword(this.uname.value,this.password.value)
      .then(data =>{
        this.userProvider.getUser(this.uname.value).subscribe(
          ref => {
            this.globalProvider.user = ref[0];
            this.navCtrl.setRoot(LoggedinPage);
          }
        );
      })
      .catch(error =>
      {
        this.alertProvider.alert(error.message);
      })
  }

}
