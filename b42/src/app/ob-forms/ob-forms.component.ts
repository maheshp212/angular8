import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ob-forms',
  templateUrl: './ob-forms.component.html',
  styleUrls: ['./ob-forms.component.scss']
})
export class ObFormsComponent implements OnInit {

  user:any = {}
  constructor() { }

  ngOnInit() {
  }

  login(){
    this.user.game = 'hello';
    alert(`${this.user.fname}  -- ${this.user.lname}`)
  }
}
