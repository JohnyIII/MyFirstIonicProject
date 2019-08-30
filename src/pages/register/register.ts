import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {LoggedinPage} from "../loggedin/loggedin";
import { Kraj } from '../../model/kraj.model';
import {KrajProvider} from "../../providers/kraj.provider";
import {UserProvider} from "../../providers/user.provider";
import {GlobalProvider} from "../../providers/global.provider";
import {AlertProvider} from "../../providers/alert.provider";

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

  kraje: Array<Kraj[]>;
  kraj : Kraj;
  mikrofon : boolean;

  @ViewChild('username') uname;
  @ViewChild('password') password;
  @ViewChild('email') email;

  constructor(private fire: AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams,
              private krajProvider: KrajProvider,
              private userProvider: UserProvider,
              private globalProvider: GlobalProvider,
              private alertProvider:AlertProvider) {
  }

  ionViewDidLoad() {
    this.krajProvider.getKrajList().subscribe(ref => this.kraje= ref);
  }

  registerUser()
  {
    if(this.uname.value.length<4)
    {
      this.alertProvider.alert('Zadejte prosim uzivatelske jmeno alespon 4 znaky dlouhe');
      return;
    }
    this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.password.value)
      .then(data =>
      {
        this.userProvider.insertUser(this.email.value,this.uname.value,this.kraj.zkratka,this.mikrofon).subscribe(
          () => {
            this.userProvider.getUser(this.email.value).subscribe(
              ref => {
                this.globalProvider.user = ref[0];
                this.alertProvider.alert('You are registered, welcome!');
                this.navCtrl.setRoot(LoggedinPage);
              }
            );
          }
        );
      })
      .catch(error =>
      {
        this.alertProvider.alert(error.message);
        console.log('got an error ', error);
      });
    console.log('Would register in with ', this.email.value, this.password.value);
  }

}
