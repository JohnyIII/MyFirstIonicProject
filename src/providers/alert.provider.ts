// @ts-ignore
import {Alert, AlertController} from "ionic-angular";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

// @ts-ignore
@Injectable()
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


  confirm(message : string,title: string): Alert
  {
    let alert = this.alertCtl.create(
      {
        title : title,
        subTitle : message,
        buttons: [
          {
            text: 'Ano',
            handler: () => {
              alert.dismiss(true);
              return false;
            }
          }, {
            text: 'Ne',
            handler: () => {
              alert.dismiss(false);
              return false;
            }
          }
        ]
      }
    );
    alert.present();

    return alert;
  }

}
