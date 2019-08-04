import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent {

  fname:string  = 'qshore';
  fruits = ['kiwi', 'melon', 'berry'];
  counter = 0;
  constructor() { }

  
  callMe(){
    console.log(this.counter);
    this.counter++;
  }
}
