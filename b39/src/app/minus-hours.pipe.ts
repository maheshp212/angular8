import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minusHours'
})
export class MinusHoursPipe implements PipeTransform {
  transform(hrs): any {
    var today = new Date();
    today.setTime(today.getTime() - (hrs*60*60*1000));
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
  }
}
