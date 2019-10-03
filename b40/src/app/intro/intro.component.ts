import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  fname = 'qshore';
  userObj = {fname:'qshore', lname:'tech', age:45}
  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  images = [
    'https://static.magiquiz.com/cdn-cgi/image/width=810,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/10/Which-Avenger-Should-You-Marry_LEAD-806x421.jpg',
    'https://cdn3.movieweb.com/i/article/rl2x4pK0kEXZ6RaEUgu3L504yAsFiL/738:50/Avengers-5-Confirmed-Different-Marvel-Heroes.jpg',
    'https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/04/superhero_570628189.jpg'
  ]

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
    {name: 'Brand', key:'brand'},
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


  customLogic(){
    console.log('custom logic from the intro component')
  }

  attrRtn(res){
    console.log(res);
  }

  getName(name:any){
    alert(name)
  }

  getAge(age:any){
    alert(age)
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
