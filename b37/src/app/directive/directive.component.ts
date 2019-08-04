import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  fname:string = 'qshore';
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  callMe(){
    console.log(this.counter);
    this.counter++;
  }

}
