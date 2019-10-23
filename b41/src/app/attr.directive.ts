import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() appAttr(){}
  @Input() msg;
  @Input() fname:string;

  @Output() sendData = new EventEmitter();


  constructor() {
    console.log('directive loaded on pageload')
   }

  @HostListener('click')
  callMe(){
    console.log( 'directive loaded on events ')
    console.log(this.msg);
    console.log(this.fname);
    this.appAttr(); // dynamic logic from parent

    let mm = this.msg + this.fname;

    this.sendData.emit(mm); // sending data from child to parent

    console.log('#################');
  }
}
