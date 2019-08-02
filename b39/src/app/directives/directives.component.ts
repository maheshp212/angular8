import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent  {

  fname = 'qshores';
  fruits = ['kiwi', 'melon', 'berry'];
  counter = 0;
  constructor() { }

  callMe(){
    console.log(this.counter);
    this.counter++;
  }

}
