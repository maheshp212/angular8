import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(num: any): any {
    return num.toString(16);
  }

}
