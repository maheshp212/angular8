import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  fname:string = 'qshore';
  age:number = 45;
  gender:boolean = true;
  interest:null = null;
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {name:'qshore', tech:'angular'};
  undf:any;

  a=2;
  b=3;
  
  constructor() { }

  ngOnInit() {
  }

}
