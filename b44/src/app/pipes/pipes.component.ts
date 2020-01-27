import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fname = 'QsHoRe';
  age = 34;
  day = new Date();
  user = {tech: 'angular', exp:45};
  fruits = ["Banana", "Orange", "Apple", "Mango"];
  
  constructor() { }

  ngOnInit() {
  }

}
