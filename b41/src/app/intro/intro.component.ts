import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  fname: string = 'qshore';
  constructor() { }

  ngOnInit() {
  }


  dynamicLogic(){
    console.log('this is dynamic logic from parent component')
  }

  sendDatacc(name){
    console.log(name);
  }
}
