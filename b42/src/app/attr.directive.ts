import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() appAttr(){}
  @Input() fname:string;
  @Input() msg:string;

  @Output() sendMe = new EventEmitter();
  constructor() { 
    console.log('this is on page load');
  }

  @HostListener('click')
  callMe(){
    console.log('this is on  event load');

    console.log(this.fname)
    console.log(this.msg)
    this.appAttr();

    this.sendMe.emit('output data');
  }

}
