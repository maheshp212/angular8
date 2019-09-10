import { Directive, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() appAttr(){}
  @Input() msg;
  @Input() fname;


  @Output() data = new EventEmitter();

  constructor() {
    console.log('attr directive logics on page load');
  }

  @HostListener('click')
  asdf(){
    console.log('attr directive invoked');
    console.log(this.msg);
    console.log(this.fname);
    this.appAttr(); // dynamic logic from the component

    var res = `${this.msg} ${this.fname}`;
    this.data.emit(res);
  }

}
