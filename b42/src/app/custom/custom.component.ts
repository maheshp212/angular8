import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  @Input() user:any = {};

  @Output() sendName = new EventEmitter();
  @Output() sendAge = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  age(){
    this.sendAge.emit(this.user.age);
  }

  name(){
    var n = this.user.fname + ' ' + this.user.lname;
    this.sendName.emit(n);
  }
}
