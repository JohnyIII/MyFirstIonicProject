import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs";
import {query} from "@angular/animations";
/*
  Generated class for the KrajServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KrajProvider {

  constructor(private db: AngularFireDatabase) { }

  getKrajList() : Observable<any>
  {
      return this.db.list('/Kraje').valueChanges();
  }

}
