import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers : [UsersService]
})
export class ApisComponent implements OnInit {

  usersList:any;
  userInfo:any;
  constructor(private user:UsersService) { }

  ngOnInit() { 
   this.listUsers(); 
  }

  listUsers(){
    this.user.listUsers().subscribe((res:any)=>{
      this.usersList = res.data;
      console.log(res);
    }, (err)=>{
      // failure
    })
  }

  viewUser(id){
    this.user.viewUser(id).subscribe((res)=> {
      this.userInfo = res;
    }, (err)=>{

    })
  }

  addUser() {
    this.user.addUser().subscribe((res)=> {
      this.userInfo = res;
      this.listUsers();
    }, (err)=>{

    })
  }

  editUser(id){
    this.user.editUser(id).subscribe((res)=> {
      this.userInfo = res;
      this.listUsers();
    }, (err)=>{

    })
  }

  deleteUser(id){
    this.user.deleteUser(id).subscribe((res)=> {
      this.userInfo = res;
      this.listUsers(); 
    }, (err)=>{

    })
  }


}
