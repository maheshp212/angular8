import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fname = 'QsHoRe';
  age = 45;
  day = new Date();
  user = {fname: 'qhosre', age:56};
  constructor() { }

  ngOnInit() {
  }

}
