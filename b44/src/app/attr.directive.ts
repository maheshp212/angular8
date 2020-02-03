import { Directive, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  //sending data from parent to child
  @Input() appAttr(){};
  @Input() msg;
  @Input() user;


  @Output() sendData = new EventEmitter();
  
  constructor() {
    console.log('this is on page load');
   }


  @HostListener('click')
  callMe(){
    console.log('this is Event Load');
    console.log(this.msg);
    console.log(this.user);
    
    
    // dynamic Logic from parent class
    this.appAttr();

    //sending data from child to parent
    this.sendData.emit('Bye');
  }
}
