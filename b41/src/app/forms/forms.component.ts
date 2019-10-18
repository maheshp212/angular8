import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
fname:string;
lname:string;

  constructor() { }

  ngOnInit() {
  }

  login(){
    alert(`${this.fname} :: ${this.lname} these are the submitted values`);
    //alert(this.fname + ' :: ' + this.lname + ' these are the submiited values');
  }

}
