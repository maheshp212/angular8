import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(inp, p1, p2,p3): any {
    return inp * (p1+p2+p3);
  }

}
