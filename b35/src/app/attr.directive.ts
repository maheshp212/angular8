import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() appAttr(){};

  @Input() msg:string;
  @Input() fname:string;
  @Input() user:any;

  @Output() sendFname = new EventEmitter();
  @Output() sendUser = new EventEmitter();

  constructor() {
    //page load
    console.log('this is directive constructor')
   }

   //event load
   @HostListener('click')
   callMe(){
     console.log('directive loaded');
     this.sendFname.emit(this.fname);
     this.sendUser.emit(this.user);

     this.appAttr(); // custom business logic
     
   }

}
