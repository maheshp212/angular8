import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascii'
})
export class AsciiPipe implements PipeTransform {

  transform(inp: any): any {
    var sum = 0;
    for(var i =0; i<inp.length; i++){
      sum += inp.charCodeAt(i);
    }

    while(sum >= 10){
      let temp = sum.toString();
      let res = 0;
      for(i=0; i<temp.length; i++){
        res += parseInt(temp[i]);
      }
      sum = res;
    }
    return sum;
  }

}
