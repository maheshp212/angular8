import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {
  // {{5 | params:4:5:2}}

  transform(value: number, p1:number, p2:number,p3): any {
    return value * (p1+p2+p3);
  }

}
