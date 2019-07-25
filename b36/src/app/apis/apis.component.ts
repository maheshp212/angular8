import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service';
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {

  constructor(private user:UsersService) { }
  users:any;
  userInfo:any
  ngOnInit() {
    this.listUsers();
  }

  listUsers(){
    this.user.listUsers().subscribe((res:any)=>{
      //success
      this.users = res.data;
    }, (err:any)=>{
      //failure
    })
  }


  createUser(){
    this.user.addUser().subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers();
    },(err:any)=>{

    })
  }

  viewUser(id){
    this.user.viewUser(id).subscribe((res:any)=>{
      this.userInfo = res;
    },(err:any)=>{

    })
  }

  editUser(id){
      this.user.editUser(id).subscribe((res:any)=>{
        this.userInfo = res;
        this.listUsers();
      },(err:any)=>{
  
      })
  }
  
  deleteUser(id){
    this.user.deleteUser(id).subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers();
    },(err:any)=>{

    })
  }
}
