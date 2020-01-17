///<reference path="../../node_modules/@angular/fire/database/database.d.ts"/>
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {from, Observable} from "rxjs";
import {Udalost} from "../model/udalost.model";
import firebase from "firebase";
import {User} from "../model/user.model";


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UdalostProvider {

  constructor(private db: AngularFireDatabase) { }

  getUdalosti() : Observable<any>
  {
   return this.db.list('/udalost').valueChanges();
  }

  getUdalostiValid() : Observable<any>
  {
    const today = new Date().toISOString();
    return this.db.list('/udalost',query => query.orderByChild('datumUdalosti').startAt(today)).valueChanges();
  }

  getUdalostByUser(user: User) : Observable<any>{
    return this.db.list('/udalost',query => query.orderByChild('zalozil/key').equalTo(user.key)).valueChanges();
  }

  saveUdalost(udalost: Udalost) : Observable<any> {
    let ref = firebase.database().ref('udalost').push();
    return from(firebase.database().ref('udalost/'+ref.key).update({
      key: ref.key,
      zalozil: udalost.zalozil,
      zacatek: udalost.zacatek,
      konec: udalost.konec,
      datumUdalosti: udalost.datumUdalosti,
      maxPocet: udalost.maxPocet,
      nazev: udalost.nazev,
      popis: udalost.popis
    }))
  }

  updateUdalost(udalost: Udalost): Observable<any> {
    return from(firebase.database().ref('udalost/'+udalost.key).update({
      zalozil: udalost.zalozil,
      zacatek: udalost.zacatek,
      konec: udalost.konec,
      datumUdalosti: udalost.datumUdalosti,
      maxPocet: udalost.maxPocet,
      nazev: udalost.nazev,
      popis: udalost.popis
    }))
  }
}
