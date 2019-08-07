import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  // passing data from parent to child
  @Input() appAttr(){};

  @Input() fname:string;
  @Input() msg:string;
  
  // send data from child to parent
  @Output() getData = new EventEmitter();

  // page load 
  constructor() {
    console.log('directive invoked on page load');
  }

  // event Load
  @HostListener('click')
  zzzzz(){
    console.log('directive invoked on event load...');
    console.log(this.fname)
    console.log(this.msg)
    this.appAttr(); // Dynamic Logic based on parent Component

    let res = this.msg + ' - ' + this.fname;
    // calling the output
    this.getData.emit(res);
  }


}
