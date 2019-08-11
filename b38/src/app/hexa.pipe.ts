import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaassas'
})
export class HexaPipe implements PipeTransform {

  transform(num: any): any {
    return num.toString(16);
  }

}
