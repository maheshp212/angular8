import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smallcaps'
})
export class SmallcapsPipe implements PipeTransform {

  transform(inp: any): any {
    if(inp){
      var res = ''
      for(var i=0; i < inp.length ; i++){
        if(i%2==0){
          res += inp[i].toLowerCase();
        }else {
          res += inp[i].toUpperCase();
        }
      }
    }

    return res;
  }

}
