import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(str: any): any {
    let op = '';
     str = str.toString();
    for(var i=(str.length-1);i >=0; i--)  {
      op += str[i];
    }
    console.log(op);
    return op;
  }

}
