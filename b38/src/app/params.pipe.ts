import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(inp: any, p1 , p2 , p3 , p4): any {
    return inp * (p1 +p2+p3+p4);
  }

}
