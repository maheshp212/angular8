import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  @Input() user:any;
  @Input() msg : any;
  @Input() age:any;
  @Input() showButtons:boolean = true;

  @Output() sendFname = new EventEmitter();
  @Output() sendLname = new EventEmitter();
  @Output() sendAge = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getFname(){
    let res2 = this.msg + ' ' + this.user.fname;
    let res = `${this.msg} ${this.user.fname}`
    this.sendFname.emit(res);
  }

  getLname(){
    let res = `${this.msg} ${this.user.lname}`
    this.sendLname.emit(res);
  }

  getAge(){
    let res = `${this.msg} ${this.age}`
    this.sendAge.emit(res);
  }
}
