///<reference path="../../node_modules/@angular/fire/database/database.d.ts"/>
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs";


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(private db: AngularFireDatabase ) { }

  getUser(email: string) : Observable<any>
  {
   return this.db.list('/users', query => query.orderByChild('email').equalTo(email)).valueChanges();
  }
}
