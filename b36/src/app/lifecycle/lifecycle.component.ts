import { Component, OnInit, DoCheck, AfterContentInit,AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, DoCheck, AfterContentInit,AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

  constructor() { }
fname:string
  ngOnInit() {
    console.log('ngOnInit');
  }

  //DO-NOT USE
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  //DO-NOT USE
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }
  //DO-NOT USE
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
