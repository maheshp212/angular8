import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fname = 'QsHoRe';
  day = new Date();
  age = 45;
  user:any = {name:'hello', exp:56};
  para:string = 'hello im a perla of the city of the hyd in a country ind';
  
  constructor() { }

  ngOnInit() {
  }

}
