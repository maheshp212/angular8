import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
availableUsers:any = [
  {name:'airplane', img:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'},
  {name:'arch', img:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'},
  {name:'baboon', img:'https://homepages.cae.wisc.edu/~ece533/images/baboon.png'},
  {name:'barbara', img:'https://homepages.cae.wisc.edu/~ece533/images/barbara.png'},
  {name:'boat', img:'https://homepages.cae.wisc.edu/~ece533/images/boat.png'},
  {name:'cat', img:'https://homepages.cae.wisc.edu/~ece533/images/cat.png'},
  {name:'fruit', img:'https://homepages.cae.wisc.edu/~ece533/images/fruits.png'},
  {name:'girl', img:'https://homepages.cae.wisc.edu/~ece533/images/girl.png'}
];

selectedUsers:any = []
  constructor() { }

  ngOnInit() {
  }
  availableUsersIndex(i){
    let user = this.availableUsers[i];
    this.availableUsers.splice(i,1);
    this.selectedUsers.push(user);
  }

  selectedUsersIndex(i){
    let user = this.selectedUsers[i];
    this.selectedUsers.splice(i,1);
    this.availableUsers.push(user)
  }
}
