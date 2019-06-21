import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  fruits = ['kwii', 'melon', 'berry'];
  user = {fname: 'qshore', lname:'technoloy'};
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


  sendFname(fname){
    alert(fname);
  }

  getFruit(fruit){
    alert(fruit);
  }
}
