import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  constructor(public navCtrl:NavController) {

  }

  signIn()
  {

   this.navCtrl.push(LoginPage);
  }

  register()
  {
    this.navCtrl.push(RegisterPage);
  }
}
