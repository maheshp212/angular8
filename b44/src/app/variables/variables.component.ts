import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  fname:string = 'qshore';
  age:number = 34;
  gender:boolean = true;
  interest = null;
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {tech:'angular', exp:56};
  undf:any;

  a:number = 2;
  b:number = 3;

  constructor() { }

  ngOnInit() {
  }

}
