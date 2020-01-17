// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import {AlertController, App, LoadingController, NavController, Slides, IonicPage, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "@angular/fire/auth";
import {UserProvider} from "../../providers/user.provider";
import {GlobalProvider} from "../../providers/global.provider";
import {AlertProvider} from "../../providers/alert.provider";
import {LoggedinPage} from "../loggedin/loggedin";
import {KrajProvider} from "../../providers/kraj.provider";
import {Kraj} from "../../model/kraj.model";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: any;
  public backgroundImage = 'assets/img/background/background-5.jpg';
  kraje: Array<Kraj[]>;
  kraj : Kraj;
  mikrofon : boolean;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private globalProvider: GlobalProvider,
    private krajProvider: KrajProvider,
    private alertProvider:AlertProvider
  ) { }

  ionViewDidLoad() {
    this.krajProvider.getKrajList().subscribe(ref => this.kraje= ref);
  }

  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;
  @ViewChild('username') uname;
  @ViewChild('password') password;
  @ViewChild('email') email;

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(2);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  presentLoading(message) {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: message,
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();
  }

  login() {
    this.fire.auth.signInWithEmailAndPassword(this.uname.value,this.password.value)
      .then(() =>{
        this.userProvider.getUser(this.uname.value).subscribe(
          ref => {
            this.globalProvider.user = ref[0];
            this.navCtrl.setRoot(LoggedinPage);
          }
        );
      })
      .catch(error => {
        this.alertProvider.alert(error.message);
      })
  }

  signup() {
    this.presentLoading('Thanks for signing up!');
    // this.navCtrl.push(HomePage);
  }
  resetPassword() {
    this.presentLoading('An e-mail was sent with your new password.');
  }
}
