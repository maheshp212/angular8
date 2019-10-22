import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value, pointer = 3): any {
    return value.toFixed(pointer);
  }

}
