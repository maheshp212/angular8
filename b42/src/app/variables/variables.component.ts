import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  age:number = 34;
  fname:string = 'qshore';
  gender:boolean = true;
  interest:null = null;
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {name:'angular',exp:56};
  undf;

  a=2;
  b=3;

  constructor() { }

  ngOnInit() {
  }

}
