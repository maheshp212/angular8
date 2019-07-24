import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  // passing data from parent to child
  @Input() appAttr(){};
  @Input() msg;
  @Input() fname:string;

  // passing data from child to parent
  @Output() sendData = new EventEmitter();
  
  // invoking the directive on page load
  constructor() {
    console.log('attr directive invoked');
   }

   // invoking the directive on some Event(click)
   @HostListener('click')
   callMe(){
    console.log('callMe Invoked');
    console.log(this.fname); // utilising the input variables
    console.log(this.msg);
    
    this.appAttr(); // invoking your custom logic from parent component
    let lname = this.msg + this.fname;
    
    this.sendData.emit(lname); // sending the data back to the parent 
    console.log('********END***********');
   }
}
