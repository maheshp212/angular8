import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  user:any = {fname:'qshore', lname:'tech'};
  uName = 'QsHoRe';
  age = 34;
  day = new Date();

  constructor() { }

  ngOnInit() {
  }

}
