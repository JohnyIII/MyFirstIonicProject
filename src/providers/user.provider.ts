import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {from, Observable} from "rxjs";
import {User} from "../model/user.model";
import firebase from "firebase";

// @ts-ignore
@Injectable({providedIn: 'root'})
export class UserProvider {

  constructor(private db: AngularFireDatabase ) { }

  getUser(email: string) : Observable<any>
  {
   return this.db.list('/users', query => query.orderByChild('email').equalTo(email)).valueChanges();
  }

  updateUser(user: User) : Observable<any>
  {
    return from(firebase.database().ref('users/'+user.key).update({
      nickname : user.nickname,
      kraj : user.kraj,
      mikrofon : user.mikrofon
    }));
  }

  insertUser(email: string,nickname: string,kraj: string,mikrofon: boolean): Observable<any>
  {
    let ref = firebase.database().ref('users').push();
    return from(firebase.database().ref('users/'+ref.key).set({
      key: ref.key,
      email : email,
      nickname : nickname,
      kraj : kraj,
      mikrofon : mikrofon
    }))
  }
}
