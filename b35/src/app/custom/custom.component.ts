import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  index:any;
  @Input() user:any;
  @Input() fruits:string[];

  @Output() sendFname = new EventEmitter();
  @Output() sendFruit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fname(){
    this.sendFname.emit(this.user.fname);
  }

  fruit(){
    if(this.index >=0 && this.index < this.fruits.length){
      this.sendFruit.emit(this.fruits[this.index]);
    } else {
      alert('please enter  a valid index');
    }
  }

  
}
