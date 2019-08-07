import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  message:string = 'Hello';
  constructor() { }

  ngOnInit() {
  }

  customLogic(){
    console.log('custom logic invoked from the intro component')
  }

  getcustomAttrData(data){
    console.log(data);
  }
}
