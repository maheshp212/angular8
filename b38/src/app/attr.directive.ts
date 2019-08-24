import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  // sending data from parent to child
  @Input() appAttr(){};
  @Input() msg;
  @Input() fname;

  // sending the data from child to parent
  @Output() sendDetails =  new EventEmitter();

  constructor() {
    // loading the directive on page load 
    console.log('directive on page load');
   }
  // loading the directive on Events
  @HostListener('click')
  calMe(){
    console.log('directive on event load');
    console.log(this.msg);
    console.log(this.fname);
    
    //dynamic logic
    this.appAttr();
    let ss = this.msg + this.fname;
    // emitting the output
    this.sendDetails.emit(ss);
  }

}
