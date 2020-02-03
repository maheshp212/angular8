import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  userData = {fname:'qshore', lname: 'tech', age:34}
  constructor() { }

  ngOnInit() {
  }

  name(event){
    alert(event)
  }

  sendAge(event){
    alert(event);
  }

}
