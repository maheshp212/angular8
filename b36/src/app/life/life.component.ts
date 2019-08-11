import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

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

  // please avoid the below funcitons
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
