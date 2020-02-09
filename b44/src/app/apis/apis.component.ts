import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {

  usersList:any;
  constructor(private users:UsersService) { }

  ngOnInit() {
    this.users.listUsers().subscribe((res:any)=>{
      // success
      this.usersList = res.data;
      console.log(res); 
    },(errRes:any)=>{
      // failure
    })
  }

}
