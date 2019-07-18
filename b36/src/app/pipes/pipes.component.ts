import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  fname: string = 'QsHoRe';
  age:number = 34;
  day = new Date();
  user= {name:'angular', exp:34};
  fruits = ['kiwiw', 'melon', 'berry', 'apple', 'mango', 'grapes', 'banana', 'papaya', 'orange', 'lemon', 'pine apple', 'custard' , 'strawberry', 'avacado', 'dragonfruit'];
  constructor() { }

  ngOnInit() {
  }

}
