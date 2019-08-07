import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fname = 'QsHorE';
  age = 45;
  fruits = ['kiwi', 'melon', 'berry'];
  day = new Date();
  user = {name:'qshore', tech:'angualr'}
  constructor() { }

  ngOnInit() {
  }

}
