import { Pipe } from '@angular/core';

@Pipe({
  name: 'kraj'
})
export class KrajPipe {

  transform(value) {
    switch (value) {
      case "STC" : return "Středočeský kraj";
      case "PHA" : return "Praha";
      case "JHC" : return "Jihočeský kraj";
      case "PLK" : return "Plzeňský kraj";
      case "KVK" : return "Karlovarský kraj";
      case "ULK" : return "Ústecký kraj";
      case "LBK" : return "Liberecký kraj";
      case "HKK" : return "Královehradecký kraj";
      case "PAK" : return "Pardubický kraj";
      case "OLK" : return "Olomoucký kraj";
      case "MSK" : return "Moravskoslezský kraj";
      case "JHM" : return "Jihomoravský kraj";
      case "ZLK" : return "Zlínský kraj";
      case "VYS" : return "Kraj Vysočina";
    }
    return value;
  }
}
