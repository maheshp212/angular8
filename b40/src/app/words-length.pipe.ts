import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordsLength'
})
export class WordsLengthPipe implements PipeTransform {

  transform(str:string): any {
    var arr = str.split(" ");
    return arr.length;
  }

}
    