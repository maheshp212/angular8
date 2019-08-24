import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  @Input() user:any;

  @Output() getFname = new EventEmitter();
  @Output() getLname = new EventEmitter();
  @Output() getAge = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }


  sendFname(){
    this.getFname.emit(this.user.fname);
  }
  sendLname(){
    this.getLname.emit(this.user.lname);
  }
  sendAge(){
    this.getAge.emit(this.user.age);
  }

}
