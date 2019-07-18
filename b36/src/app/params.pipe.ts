import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(inp: any, x,y,z): any {
    return inp * (x+y+z);
  }

}
