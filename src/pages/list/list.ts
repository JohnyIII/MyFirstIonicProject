import { Component } from '@angular/core';

import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { NewEventPage } from '../new-event/new-event';
import {Udalost} from "../../model/udalost.model";
import {UdalostProvider} from "../../providers/udalost.provider";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  udalosti : Array<Udalost>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public provider: UdalostProvider) {
    provider.getUdalosti().subscribe( val=>this.udalosti=val);
    }

  itemTapped(event, item)
  {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  addUdalost()
  {
    const modal = this.modalCtrl.create(NewEventPage);
    modal.present();
  }
}
