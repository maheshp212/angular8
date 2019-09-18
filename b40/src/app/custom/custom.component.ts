import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  @Input() user:any;

  @Output() x = new EventEmitter();
  @Output() y = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  sendName(){
    var name = this.user.fname + " " + this.user.lname;
    this.x.emit(name);
  }

  sendAge(){
    this.y.emit(this.user.age);
  }

}
