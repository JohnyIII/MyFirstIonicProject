import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Udalost} from "../../model/udalost.model";


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: Udalost;
  edit = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  editUdalost() {
    this.edit = false;
  }
  saveUdalost() {
    this.edit = true;
  }
}
