import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postcurrency'
})
export class PostcurrencyPipe implements PipeTransform {

  transform(value: any, currencyCode="$"): any {
    value = value.toFixed(2);
    return value + currencyCode;
  }

}
