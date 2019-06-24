import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  fruits = ['kwii', 'melon', 'berry'];
  user = {fname: 'qshore', lname:'technoloy'};

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
    {name: ' Name', key:'name'},
    {name: 'Model', key:'model'},
    {name: 'Brand', key:'brand'},
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
