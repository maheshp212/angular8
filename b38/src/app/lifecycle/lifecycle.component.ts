import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  fname:any;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
  }


  // do not use below functions
  ngDoCheck(){
    console.log('ngDoCheck')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
}
