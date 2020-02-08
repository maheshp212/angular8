import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  userData = {fname:'qshore', lname: 'tech', age:34}
  constructor() { }
  availableUsers = [
    {img:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', name:'mahesh'},
    {img:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png', name:'naresh'},
    {img:'https://homepages.cae.wisc.edu/~ece533/images/baboon.png', name:'suresh'},
    {img:'https://homepages.cae.wisc.edu/~ece533/images/barbara.png', name:'rajesh'},
    {img:'https://homepages.cae.wisc.edu/~ece533/images/boat.png', name:'lokesh'},
    {img:'https://homepages.cae.wisc.edu/~ece533/images/cat.png', name:'niklesh'},
  ];
  selectedUsers = []

  ngOnInit() {
  }

  name(event){
    alert(event)
  }

  sendAge(event){
    alert(event);
  }

  availableIndex(index){
    let currentUser = this.availableUsers[index];
    this.availableUsers.splice(index,1);
    this.selectedUsers.push(currentUser);
  }

  selectedIndex(index){
    let currentUser = this.selectedUsers[index];
    this.selectedUsers.splice(index,1);
    this.availableUsers.push(currentUser);

  }

}
