import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaaaaaaaaaaaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(inp: any): any {
    return inp.toString(16);
  }

}
