import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  fname= "qshore";
  fruits=['kiwi', 'melon', 'berry'];
  counter = 0;
  users:any = [
    {name:'mahesh', country:'india'},
    {name:'ramesh', country:'pakistan'},
    {name:'suresh', country:'chinna'},
    {name:'rajesh', country:'UK'},
    {name:'rakesh', country:'US'},
    {name:'lokesh', country:'nepal'},
    {name:'mukesh', country:'bangladesh'},
    {name:'lokesj', country:'sri lanka'},
    {name:'naresh', country:'korea'},
    {name:'yogesh', country:'japan'},
    {name:'yuktesh', country:'england'},
    {name:'ram', country:'australia'},
    {name:'robert', country:'denmark'},
    {name:'raheem', country:'sweden'},
    {name:'alok', country:'norway'},
    {name:'ragini', country:'finland'},
    {name:'pooja', country:'greenland'},
    {name:'satya', country:'iceland'},
    {name:'kaur', country:'kryzkistan'},
    {name:'rajar', country:'uzekebistan'},
  ];
  constructor() { }

  ngOnInit() {
  }

  callMe(){
    console.log(this.counter);
    this.counter++;
  }
}

