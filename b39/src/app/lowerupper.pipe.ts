import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerupper'
})
export class LowerupperPipe implements PipeTransform {

  transform(value: any): any {
    let res = '';
    for(let i=0; i<value.length;i++){
      let temp = ''
      if(i%2 === 0){
        temp = value[i].toLowerCase();
      } else {
        temp = value[i].toUpperCase();
      }

      res += temp
    }
    return res;
  }

}
