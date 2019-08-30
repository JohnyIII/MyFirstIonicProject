// @ts-ignore
import {AlertController} from "ionic-angular";
import {Injectable} from "@angular/core";

// @ts-ignore
@Injectable({providedIn: 'root'})
export class AlertProvider {

  constructor(private alertCtl : AlertController) {}

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

}
