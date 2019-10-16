import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  a = 2;
  b = 3;
  fname:string = 'qshroe';
  gender:boolean = true;
  interest:null = null;
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {tech:'ange', exp:56};
  undf:any;

  constructor() { }

  ngOnInit() {
  }

}
