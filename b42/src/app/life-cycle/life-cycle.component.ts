import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  fname = 'qshore';
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


  // please dont use the below methods
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
