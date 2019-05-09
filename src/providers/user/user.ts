import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor() {
  }

  getUser(email)
  {
    firebase.database().ref('users').orderByChild('email').equalTo(email).on('value', snapshot => {
      console.log(snapshot.val());
      if (snapshot.exists()) {
       return snapshot.val();
     }
      })
  }
}
