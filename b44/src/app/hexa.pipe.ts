import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaaaaaaaaaaaaaaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(input): any {
    return input.toString(16);
  }

}
