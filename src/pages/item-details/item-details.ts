import { Component } from '@angular/core';

import { NavController, NavParams} from 'ionic-angular';
import {Udalost} from "../../model/udalost.model";
import {GlobalProvider} from "../../providers/global.provider";
import {UdalostProvider} from "../../providers/udalost.provider";
import {UdalostAndUserProvider} from "../../providers/udalostAndUser.provider";
import {AlertProvider} from "../../providers/alert.provider";
import {UdalostAndUser} from "../../model/udalostAndUser.model";


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: Udalost;
  edit :boolean;
  isCreator: boolean;
  usersLogged: Array<UdalostAndUser>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private glogal: GlobalProvider,
              private udalostProvider:UdalostProvider,
              private udalostAndUserProvider: UdalostAndUserProvider,
              private alertProvider: AlertProvider) {
    this.edit = true;
    this.selectedItem = navParams.get('item');
    this.isCreator = glogal.user.key === this.selectedItem.zalozil.key;
    if(this.isCreator){
      udalostAndUserProvider.getUsersByUdalost(this.selectedItem).subscribe(
        ref => this.usersLogged =ref);
    }
  }

  editUdalost() {
    this.edit = false;
  }
  saveUdalost() {
    this.edit = true;
    this.udalostProvider.updateUdalost(this.selectedItem);
  }

  joinUdalost() {
    this.udalostAndUserProvider.saveUdalostAndUser({
      user:this.glogal.user,
      udalost:this.selectedItem}).subscribe(
      () => this.alertProvider.alert("Pridal jste se do udalosti")
    );
  }

  deleteUserUdalost(userUdalost: UdalostAndUser) {
    this.alertProvider.confirm("Chcete smazat uzivatele z udalosti","Smazat").onDidDismiss(
      (data) => {
        if(data){
          this.udalostAndUserProvider.deleteUser(userUdalost);
          this.alertProvider.alert("Uzivatel smazan");
        }
      }
    )
  }
}
