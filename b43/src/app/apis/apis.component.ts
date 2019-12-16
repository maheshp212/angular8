import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {

  usersList:any;
  userInfo:any;
  constructor(private user:UsersService) { }

  ngOnInit() {
    this.listUsers()

  }

  listUsers(){
    this.user.listUsers().subscribe((res:any)=>{
      console.log(res);
      this.usersList = res.data;
    }, (err:any)=>{

    })
  }

  viewUser(id){
    this.user.viewUser(id).subscribe((res:any)=>{
      this.userInfo = res;
    },()=>{

    })

  }
  editUser(id){
    this.user.editUser(id).subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers()
    },()=>{

    })

  }

  deleteUser(id){
    this.user.deleteUser(id).subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers()
    },()=>{

    })

  }

  createUser(){
    this.user.addUser().subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers()
    },()=>{

    })

  }

}
