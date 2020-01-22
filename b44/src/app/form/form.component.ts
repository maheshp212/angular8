import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  fname;
  lname;

  constructor() { }

  ngOnInit() {
  }

  login(){
    alert(`${this.fname}  --  ${this.lname}`);
  }

}
