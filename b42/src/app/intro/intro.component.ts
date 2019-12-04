import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  name = 'qshore tech';
  msg=" Hello"
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((res)=>{
      console.log(res);
    })
  }


  customLogic(){
    console.log('custom logic invoked from parent component')
  }

  asdf(cc){
    console.log(cc);
  }

  ccc(name){
    alert(name)
  }

  sendAge(age){
    alert(age)
  }
}
