import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(value: any,p1, p2, p3): any {
    return value*(p1+p2+p3);
  }

}
