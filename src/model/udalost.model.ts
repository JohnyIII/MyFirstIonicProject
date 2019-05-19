import {User} from "firebase";
import {Kraj} from "./kraj.model";
import {Time} from "@angular/common";

export class Udalost
{
  $key: string;
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
