import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexa'
})
export class HexaPipe implements PipeTransform {

  transform(value: any): any {
    return value.toString(16);
  }

}

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(inp, str): any {
    var res = []
    inp.forEach(function(x){
      res.push(x+' ' + str);
    })
    return res;
  }

}
