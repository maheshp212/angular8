import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  fname: string = 'qshore';
  userObj :any = {
    fname: 'qshore',
    lname: 'tech',
    age: 45
  }
  constructor() { }

  ngOnInit() {
  }


  dynamicLogic(){
    console.log('this is dynamic logic from parent component')
  }

  sendDatacc(name){
    console.log(name);
  }

  getName(name){
    alert(name);
  }

  getAge(age){
    alert(age);
  }
}
