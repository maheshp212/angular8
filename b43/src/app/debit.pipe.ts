import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debit'
})
export class DebitPipe implements PipeTransform {

  transform(inp: any): any {
    inp = inp.toString();
    let six = inp.substr(9,6);
    let temp = 'XXXXXXXXXX' + six;
    let res = '';
    for(var i=0; i<temp.length;i++){
      res += temp[i];
      if(i>0 && i%4 ==0){
        res += ' ';
      }
    }

    return res;
  }

}
