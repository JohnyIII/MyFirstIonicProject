import { Component } from '@angular/core';
import {NavController, IonicPage, NavParams, ModalController} from 'ionic-angular';
import {ItemDetailsPage} from "../item-details/item-details";
import {UdalostProvider} from "../../providers/udalost.provider";
import {NewEventPage} from "../new-event/new-event";
import {GlobalProvider} from "../../providers/global.provider";
import {UdalostAndUserProvider} from "../../providers/udalostAndUser.provider";
import {AlertProvider} from "../../providers/alert.provider";

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items;

  constructor(public navCtrl: NavController,
              public alertProvider: AlertProvider,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public provider: UdalostProvider,
              public globalProvider: GlobalProvider,
              public udalostProvider: UdalostProvider,
              ) {
  }

  ionViewDidLoad() {
    this.provider.getUdalostiValid().subscribe( val=>this.items=val);
  }

  delete(item) {
    var alert = this.alertProvider.confirm("Opravdu si přejete smazat tuto událost","Smazat");
    alert.onDidDismiss(val => {
      if(val) this.udalostProvider.deleteUdalost(item);
    });
  }

  viewDetail(item) {
      this.navCtrl.push(ItemDetailsPage, {
        item: item
      });
  }

  join(item) {
    alert('Viewing players of ' + item.title);
  }

  leave(item) {
    alert('Viewing players of ' + item.title);
  }

  addUdalost()
  {
    const modal = this.modalCtrl.create(NewEventPage);
    modal.present();
  }
}
