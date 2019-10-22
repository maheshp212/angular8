import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascii'
})
export class AsciiPipe implements PipeTransform {

  transform(inp): any {
    return inp.charCodeAt(0);
  }

}
