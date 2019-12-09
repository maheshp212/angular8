import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() appAttr(){};
  @Input() fname:string;
  @Input() msg:string;

  @Output() sendData = new EventEmitter();

  constructor() { 

    console.log('invoked on page load');
  }

  @HostListener('click')
  callMe(){
    console.log('invoked on event load');

    console.log(this.fname);
    console.log(this.msg);
    // dynamic logic from parent component
    this.appAttr();

    this.sendData.emit('data from attrDirective to component');
  }

}
