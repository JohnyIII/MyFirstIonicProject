import {Kraj} from "./kraj.model";
import {Time} from "@angular/common";
import {User} from "./user.model";

export class Udalost
{
  key: string;
  zalozil: User;
  zacatek: Time;
  konec: Time;
  datumUdalosti: Date;
  mikrofon: boolean;
  maxPocet: number;
  kraj: Kraj;
  nazev: string;
  popis: string;

}
