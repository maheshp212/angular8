import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaaaaaaaaaaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(num): any {
    return num.toString(16);
  }

}
