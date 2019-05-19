///<reference path="../../node_modules/@angular/fire/database/database.d.ts"/>
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs";
import {Udalost} from "../model/udalost.model";


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

  saveUdalost(udalost: Udalost) {
    this.db.list('/udalost').push(udalost);
  }

  updateUdalost(udalost: Udalost) {
    this.db.list('/udalost'+ udalost.$key).push(udalost);
  }
}
