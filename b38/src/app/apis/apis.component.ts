import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: []
})
export class ApisComponent implements OnInit {

  usersList: any;
  userInfo: any;
  constructor(private users : UsersService) { }

  ngOnInit() {
   this.listUsers();
  }

  listUsers(){
    this.users.listUsers().subscribe( (res:any)=>{
      console.log(res);
      this.usersList = res.data;
    }, ()=>{

    })
  }

  viewUser(id){
    this.users.viewUser(id).subscribe( (res:any)=>{
      this.userInfo = res;
    }, ()=>{

    })


  }
  editUser(id){
    this.users.editUser(id).subscribe( (res:any)=>{
      this.userInfo = res;
      this.listUsers();
    }, ()=>{

    })

  }
  deleteUser(id){
    this.users.deleteUser(id).subscribe( (res:any)=>{
      this.userInfo = res;
      this.listUsers();
    }, ()=>{

    })
  }
  createUser(){
    this.users.createUser().subscribe( (res:any)=>{
      this.userInfo = res;
      this.listUsers();
    }, ()=>{

    })

  }
}
