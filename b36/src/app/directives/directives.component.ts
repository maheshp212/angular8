import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  fname: string = 'qshore';
  fruits = ['kiwi', 'melon', 'beryy'];
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  callMe(){
    console.log(this.counter);
    this.counter++;
  }
}
