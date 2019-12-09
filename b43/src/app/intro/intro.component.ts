import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  gnamee = 'qshore tech'
  constructor() { }

  ngOnInit() {
  }

  dynamicLogic(){
    console.log('logic from parent comp')
  }

  yy(res){
    console.log(res);
  }
}
