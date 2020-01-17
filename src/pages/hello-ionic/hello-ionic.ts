import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  constructor(public navCtrl:NavController) {
    this.navCtrl.push(LoginPage);
  }
}
