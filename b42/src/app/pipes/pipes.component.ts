import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fname = 'QsHoRe';
  num = 34;
  day = new Date();
  user = {fname :' qshore' , lname:'tech'}


  constructor() { }

  ngOnInit() {
  }

}
