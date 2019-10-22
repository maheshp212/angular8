import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fname:string = 'QsHoRe';
  day:any = new Date();
  age = 34;
  user:any = {tech:'angular', exp:56}
  
  constructor() { }

  ngOnInit() {

    // setInterval(()=>{
    //   console.log('hello');
    //   this.age--
    // },1000)
  }

}
