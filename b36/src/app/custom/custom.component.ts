import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  @Input() msg:string;
  @Input() user:any;
  @Input() showButtons:boolean = true;

  @Output() _fetchName = new EventEmitter();
  @Output() _fetchExp = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  sendName(){
    this._fetchName.emit(this.user.name)
  }
  sendExp(){
    this._fetchExp.emit(this.user.exp);
  }
}
