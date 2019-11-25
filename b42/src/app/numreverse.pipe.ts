import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numreverse'
})
export class NumreversePipe implements PipeTransform {

  transform(inp: any): any {
    54321%10
    let res = 0;
    while(inp > 0){
      let div  = inp % 10
      inp = inp/10;
      inp = parseInt(inp);
      res = res*10 + div;
    }
    return res;
  }

}
