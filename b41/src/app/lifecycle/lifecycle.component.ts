import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  fname:string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() { // after constructor
    console.log('ngOnInit')
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      console.log(res.age);
      console.log(res.email);
      console.log(res.name);
    }, ()=>{

    })
  }

  ngAfterContentInit(){ // after getting data from the model
    console.log('ngAfterContentInit')
  }

  ngAfterViewInit(){ // after the view/ template got intialized
    console.log('ngAfterViewInit')
  }

  ngOnDestroy(){ // when you leave the component
    console.log('ngOnDestroy')
  }


  // please dont use the below functions as they get trigger for every small change
  // they will increase the load and decrease the performance


  ngDoCheck(){ // when there are changes in the component
    console.log('ngDoCheck')
  }

  ngAfterContentChecked(){ // when there are changes in the content/variables or methods
    console.log('ngAfterContentChecked')
  }

  ngAfterViewChecked(){ // where ther are changes in the template/view
    console.log('ngAfterViewChecked')
  }

}
