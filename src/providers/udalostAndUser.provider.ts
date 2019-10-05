///<reference path="../../node_modules/@angular/fire/database/database.d.ts"/>
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {from, Observable} from "rxjs";
import firebase from "firebase";
import {UdalostAndUser} from "../model/udalostAndUser.model";
import {Udalost} from "../model/udalost.model";
import {User} from "../model/user.model";


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UdalostAndUserProvider {

  constructor(private db: AngularFireDatabase) { }

  getUsersByUdalost(udalost: Udalost): Observable<any>
  {
    return this.db.list('/udalostAndUser',query => query.orderByChild('udalost/key').equalTo(udalost.key)).valueChanges();
  }

  getUdalostiByUser(user:User) : Observable<any>
  {
    return this.db.list('/udalostAndUser',query => query.orderByChild('user/key').equalTo(user.key)).valueChanges();
  }
  isUserInUdalost(userKey:string,udalostKey: string): Observable<any>
  {
    return this.db.list('/udalostAndUser',query => query.orderByChild('userKey').equalTo(userKey)).valueChanges();
  }

  saveUdalostAndUser(udalostAndUser: UdalostAndUser) : Observable<any> {
    let ref = firebase.database().ref('udalostAndUser').push();
    return from(firebase.database().ref('udalostAndUser/'+ref.key).update({
      key: ref.key,
      user: udalostAndUser.user,
      udalost: udalostAndUser.udalost
    }))
  }

  updateUdalostAndUser(udalostAndUser: UdalostAndUser): Observable<any> {
    return from(firebase.database().ref('udalostAndUser/'+udalostAndUser.key).update({
      user: udalostAndUser.user,
      udalost: udalostAndUser.udalost
    }))
  }

  deleteUser(udalostAndUser: UdalostAndUser): Observable<any> {
    return from(this.db.object('/udalostAndUser/'+udalostAndUser.key).remove())
  }
}
