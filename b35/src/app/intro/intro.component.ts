import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  login(){
    console.log('custom business logic from component')
  }

  fetchFname(fname){
    console.log('##########');
    console.log(fname);
  }

  sendUser(user){
    console.log('************');
    console.log(user);
  }
}
