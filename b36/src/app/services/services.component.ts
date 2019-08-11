import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [UserApiService]
})
export class ServicesComponent implements OnInit {

  users:any;
  userInfo:any;
  constructor(private user:UserApiService) { }

  ngOnInit() {

    this.listUsers();
  }

  listUsers(){
    this.user.listUsers().subscribe((res:any)=>{
      //{data: msg: status}
      this.users = res.data;
    }, (err:any)=>{

    })
  }

  editUser(id){

    this.user.editUser(id).subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers();
    }, (err:any)=>{

    })

  }

  
  deleteUser(id){
    this.user.deletUser(id).subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers();
    }, (err:any)=>{

    })
  }


  createUser(){
    this.user.addUser().subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers();
    }, (err:any)=>{

    })
  }

  viewUser(id){
    this.user.viewUser(id).subscribe((res:any)=>{
      this.userInfo = res;
    }, (err:any)=>{

    })
  }


}
