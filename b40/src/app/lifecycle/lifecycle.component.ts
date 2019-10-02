import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  fname:string;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  // dont use the below functions these will be get called everytime
  // impact on performance
  
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

}
