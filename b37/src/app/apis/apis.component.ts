import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {

  usersList:any;
  userInfo:any
  constructor(private users:UsersService) { }

  ngOnInit() {
    this.listUsers() 
  }
  listUsers(){
    this.users.listUsers().subscribe(
      
      (res:any) => {
      //success
      console.log(res);
      this.usersList = res.data;
    }, (err)=>{
      // failure
    }
  
  
  )
  }

  viewUser(id){
    this.users.viewUser(id).subscribe((res:any)=>{
      this.userInfo = res;
    }, (err)=>{
    })
  }

  editUser(id){
    this.users.editUser(id).subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers()
    }, (err)=>{
    })

  }

  deleteUser(id){
    this.users.deleteUser(id).subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers()
    }, (err)=>{
    })

  }
  
  createUser(){
    this.users.createUser().subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers()
    }, (err)=>{
    })

  }

}
