import {Injectable} from "@angular/core";
import {User} from "../model/user.model";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class GlobalProvider {

  private _user: User;

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  canI(key:String) : boolean
  {
    return this._user.key === key;
  }
}
