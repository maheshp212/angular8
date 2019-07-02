import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
  providers:[UsersService]
})
export class ApiComponent implements OnInit {

  users:any;
  userInfo: any;
  constructor(private user:UsersService) { }

  ngOnInit() {
    this.listUsers();
  }

  listUsers(){
    this.user.listUsers().subscribe((res: any)=>{
      console.log(res);
      this.users = res.data;
    }, (err)=>{

    })
  }

  createUser(){
    this.user.addUser().subscribe((res)=>{
      this.listUsers();
    },(err)=>{

    })
  }


  viewUser(id){

    this.user.viewUser(id).subscribe((res:any)=>{
      this.userInfo = res;
    },(err: any)=>{

    })

  }
  editUser(id){
    this.user.editUser(id).subscribe((res:any)=>{
      this.userInfo =res;
      this.listUsers();
    },(err)=>{

    })

  }
  deleteUser(id){

    this.user.deleteUser  (id).subscribe((res:any)=>{
      this.userInfo =res;
      this.listUsers();
    },(err)=>{

    })

  }

}
