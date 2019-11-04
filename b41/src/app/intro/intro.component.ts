import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  fname: string = 'qshore';
  userObj :any = {
    fname: 'qshore',
    lname: 'tech',
    age: 45
  }
  userHeaders:any = [
    {name: 'First Name', key:'fname'},
    {name: 'Last Name', key:'lname'},
    {name: 'Email', key:'email'},
    {name: 'Passsword', key:'pwd'},
    {name: 'Phone Number', key:'phone'},
  ];

  users:any = [
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'tyugnh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'asdf', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'msdafsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'rtyurtuh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'vcbsd', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'dftyery', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
  ];

  carHeaders: any = [
    {name: 'Brand', key:'brand'},
    {name: ' Name', key:'name'},
    {name: 'Model', key:'model'},
  ]

  cars:any = [
    {name:'dezire', model:'switf', brand:'maruit'},
    {name:'dezire', model:'switf', brand:'maruit'},
    {name:'asdf', model:'switf', brand:'maruit'},
    {name:'dezire', model:'switf', brand:'maruit'},
    {name:'deziasdfasdre', model:'switf', brand:'maruit'},
    {name:'zxvfger', model:'switf', brand:'maruit'},
    {name:'sdfsde', model:'switf', brand:'maruit'},
    {name:'deziasdfasdre', model:'switf', brand:'maruit'},
    {name:'deziasdfasdre', model:'switf', brand:'maruit'},
    {name:'dez343245234ire', model:'switf', brand:'maruit'},
  ]

  animalHeaders: any = [
    {name: ' Name', key:'name'},
    {name: 'Type', key:'type'},
  ];

animals:any = [
  {name:'cow', type:'herbivore'},
  {name:'asdf', type:'herbivore'},
  {name:'coasdfw', type:'herbivore'},
  {name:'coafw', type:'herbivore'},
  {name:'coqwrqwerw', type:'herbivore'},
]
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


  dynamicLogic(){
    console.log('this is dynamic logic from parent component')
  }

  sendDatacc(name){
    console.log(name);
  }

  getName(name){
    alert(name);
  }

  getAge(age){
    alert(age);
  }
  availableUsersIndex(index){
    let obj = this.availableUsers[index];
    this.availableUsers.splice(index, 1);
    this.selectedUsers.push(obj);
  }
  selectedUsersIndex(index) {
    let obj = this.selectedUsers[index];
    this.selectedUsers.splice(index, 1);
    this.availableUsers.push(obj);
  }
}
