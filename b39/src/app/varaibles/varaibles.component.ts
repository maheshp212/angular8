import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-varaibles',
  templateUrl: './varaibles.component.html',
  styleUrls: ['./varaibles.component.scss']
})
export class VaraiblesComponent implements OnInit {

  /**
   * string
   * number
   * object**
   * boolean
   * array
   * null
   * undefined**
   * function**
   * 
   * tuple
   * 
   */
  fname:string = 'qshroe';
  age:number = 45;
  gender:boolean = true;
  interest:null = null;
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {name: 'qshore', lang:'angular'};
  undf:any;
 
  a:number = 2;
  b = 3;

  
  constructor() { }

  ngOnInit() {
  }

}
