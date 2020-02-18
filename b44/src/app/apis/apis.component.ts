import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {

  usersList: any;
  userInfo:any
  constructor(private users: UsersService) { }

  ngOnInit() {
    this.listusers();
  }

  listusers(){
    this.users.listUsers().subscribe((res: any) => {
      // success
      this.usersList = res.data;
      console.log(res);
    }, (errRes: any) => {
      // failure
    })
  }

  viewUser(id) {
    this.users.viewUser(id).subscribe((res: any) => {
      this.userInfo = res;
    }, (errRes: any) => {
    })
  }

  editUser(id) {
    this.users.editUser(id).subscribe((res: any) => {
      this.userInfo = res;
      this.listusers();
    }, (errRes: any) => {
    })
  }

  deleteUser(id) {
    this.users.deleteUser(id).subscribe((res: any) => {
      this.userInfo = res;
      this.listusers();
    }, (errRes: any) => {
    })
  }

  createUser() {
    this.users.addUser().subscribe((res: any) => {
      this.userInfo = res;
      this.listusers();
    }, (errRes: any) => {
    })
  }

}
