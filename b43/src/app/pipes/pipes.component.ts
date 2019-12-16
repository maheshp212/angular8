import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  age:number =34;
  fname = 'QsHoRe';
  day = new Date();
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((res)=>{
      console.log(res);
    },()=>{

    })
  }

}
