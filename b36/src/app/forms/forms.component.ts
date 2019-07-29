import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  fname: string;
  lname: string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((res:any)=>{
      console.log(res);
    },()=>{

    })
  }

  login(){
    alert(this.fname + ' ' + this.lname);
  }
}
