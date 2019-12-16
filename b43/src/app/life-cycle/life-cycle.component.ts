import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  lname:String
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

  // never use the below functions it will effect on performance
  ngDoCheck(){
    console.log('ngDoCheck');

  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');

  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');

  }
}
