







import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  message:string = 'Hello';
  user = {fname: 'qshroe' , lname:'technologies'}
  
  displayedColumns: string[] = ['fname', 'lname', 'email', 'pwd', 'phone'];
  dataSource = ELEMENT_DATA;


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
imageSources:string[] = [
  'https://cdn-images-1.medium.com/max/2000/1*Nccd2ofdArlXF7v58UK94Q.jpeg',
  'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
  'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg'
]

  constructor() { }

  ngOnInit() {
  }

  customLogic(){
    console.log('custom logic invoked from the intro component')
  }

  getcustomAttrData(data){
    console.log(data);
  }
  sendFnamesss(name){
    alert(name);
  }

  sendLname(name){
    alert(name);
  }

  age(name){
    alert(name);
  }
}
