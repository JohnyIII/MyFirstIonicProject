import { Injectable } from '@angular/core';
// @ts-ignore
import {AngularFireDatabase} from "@angular/fire/database";
import {from, Observable} from "rxjs";
import firebase from "firebase";
import {UserProvider} from "./user.provider";
import {UdalostProvider} from "./udalost.provider";

// @ts-ignore
@Injectable({providedIn: 'root'})
export class UserUdalostProvider {

  constructor(private db: AngularFireDatabase,
              private userProvider: UserProvider,
              private udalostProvider: UdalostProvider) {
  }

  getUserKeys(udalostKey: string) : Observable<any>
  {
    return this.db.list('/userUdalost', query => query.orderByChild('udalostKey').equalTo(udalostKey)).valueChanges();
  }

  getUdalostKeys(userKey: string) : Observable<any>
  {
    return this.db.list('/userUdalost', query => query.orderByChild('userKey').equalTo(userKey)).valueChanges();
  }

  insert(userKey: string, udalostKey: string): Observable<any>
  {
    let ref = firebase.database().ref('userUdalost').push();
    return from(firebase.database().ref('userUdalost/'+ref.key).set({
      key: ref.key,
      userKey: userKey,
      udalostKey: udalostKey
    }))
  }
}
