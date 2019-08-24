import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  msg = 'Hello'
  userDetails = {fname:'qshore', lname:'tech', age:56 };
  constructor() { }

  ngOnInit() {
  }

    dynamicFun(){
      console.log('dynamic logic from the parent compnent')
    }
    getDetails(data){
      console.log(data);
    }
    getFname(fname){
      alert(fname);
    }

    getLname(lame){
      alert(lame);
    }
    
    getAge(age){
      alert(age);
    }
}
