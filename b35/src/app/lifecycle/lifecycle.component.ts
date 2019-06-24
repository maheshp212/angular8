import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit , DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy{

  fname:string;
  constructor() { }

  /*
  OnInit
  DoCheck
  AfterContentInit
  AfterContentChecked
  AfterViewInit
  AfterViewChecked
  OnDestroy
  */

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');

  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngDoCheck(){ /* do not use */
    console.log('ngDoCheck');
  }

  ngAfterContentChecked(){ /* do not use */
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(){ /* do not use */
    console.log('ngAfterViewChecked');
  }
}
