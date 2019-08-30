import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "@angular/fire/auth";
import {KrajProvider} from "../../providers/kraj.provider";
import {Kraj} from "../../model/kraj.model";
import {GlobalProvider} from "../../providers/global.provider";
import {User} from "../../model/user.model";
import {UserProvider} from "../../providers/user.provider";
import {AlertProvider} from "../../providers/alert.provider";

/**
 * Generated class for the PlayerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-detail',
  templateUrl: 'player-detail.html',
})
export class PlayerDetailPage implements OnInit{

  kraje: Array<Kraj[]>;
  user: User;

  constructor(private fire:AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams,
              private krajProvider:KrajProvider,
              private globalProvider: GlobalProvider,
              private userProvider: UserProvider,
              private alertProvider:AlertProvider) {
  }

  ngOnInit(): void {
    this.krajProvider.getKrajList().subscribe(ref => this.kraje= ref);
    this.user = this.globalProvider.user;
  }

  update()
  {
    this.userProvider.updateUser(this.user).subscribe(
      () => {
        this.alertProvider.alert("Uživatel aktualizován");
        this.navCtrl.setRoot(PlayerDetailPage);
      }
    )
  }

}
