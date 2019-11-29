import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  name = 'qshore tech';
  msg=" Hello"
  constructor() { }

  ngOnInit() {
  }


  customLogic(){
    console.log('custom logic invoked from parent component')
  }

  asdf(cc){
    console.log(cc);
  }
}
