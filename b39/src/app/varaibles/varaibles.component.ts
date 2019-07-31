import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-varaibles',
  templateUrl: './varaibles.component.html',
  styleUrls: ['./varaibles.component.scss']
})
export class VaraiblesComponent implements OnInit {

  fname:string = 'qshroe';
  age:number = 45;
  
  constructor() { }

  ngOnInit() {
  }

}
