import { Component, OnInit } from '@angular/core';
import {userObj} from './obj.interface';
@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.scss']
})
export class ObjFormsComponent implements OnInit {
  user:any = {}
  constructor() { }

  ngOnInit() {
  }

  login() {
    alert(`${this.user.fname} -- ${this.user.lname} :::`)
  }

}
