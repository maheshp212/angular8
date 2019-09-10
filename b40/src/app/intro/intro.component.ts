import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  fname = 'qshore';
  constructor() { }

  ngOnInit() {
  }


  customLogic(){
    console.log('custom logic from the intro component')
  }

  attrRtn(res){
    console.log(res);
  }
}
