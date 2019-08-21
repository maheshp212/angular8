import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {
  users:any = [];
  userInfo:any;
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.listUsers();
    
  }
  listUsers(){
    this.userService.listUsers().subscribe( (res:any)=>{
      // success
      console.log(res);
      this.users = res.data
    }, (err:any)=>{
      // failure
    })
  }

  viewUser(id){
    this.userService.viewUser(id).subscribe( (res:any)=>{
      this.userInfo = res;
    }, (err:any)=>{
      // failure
    })
  }
  editUser(id){
    this.userService.editUser(id).subscribe( (res:any)=>{
      this.userInfo = res;
      this.listUsers();
    }, (err:any)=>{
      // failure
    })
  }
  deleteUser(id){
    this.userService.deleteUser(id).subscribe( (res:any)=>{
      this.userInfo = res;
      this.listUsers();
    }, (err:any)=>{
      // failure
    })
  }
  createUser(){
    this.userService.addUser().subscribe( (res:any)=>{
      this.userInfo = res;
      this.listUsers();
    }, (err:any)=>{
      // failure
    })
  }



}
