import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  fname = 'qshores';
  fruits = ['kiwi', 'melon', 'berry'];
  counter = 0;
  constructor() { }

  ngOnInit() {
  }


callMe(){
  console.log(this.counter);
  this.counter++;
}
login(){
  console.log(' im logic from parent component')
}

data(value){
  console.log('this is the dat from child  to  parent')
  console.log(value);
}
}
