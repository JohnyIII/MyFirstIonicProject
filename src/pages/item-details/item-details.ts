import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Udalost} from "../../model/udalost.model";
import {GlobalProvider} from "../../providers/global.provider";


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: Udalost = null;
  edit = true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private globalProvider: GlobalProvider) {
  }
  ionViewDidLoad() {
    this.selectedItem = this.navParams.get('item');
  }

  editUdalost() {
    this.edit = false;
  }
  saveUdalost() {
    this.edit = true;
  }
  participate() {

  }

  dismiss() {
    this.navCtrl.pop();
  }
}
