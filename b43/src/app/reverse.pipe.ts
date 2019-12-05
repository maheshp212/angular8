import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    var res ='';
    for(var i=(value.length -1) ;i >=0;i--){
      res += value[i];
    }
    return res;
  }

}
