import { Injectable } from '@angular/core';
import { Kraj } from '../../model/kraj.model';
import firebase from 'firebase';

/*
  Generated class for the KrajServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KrajServiceProvider {

  kraje: Array<Kraj[]>;

  constructor()
  {
  }

  getKrajList()
  {
    firebase.database
      return this.kraje;
  }

}
