import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  listUsers(){
    var url = 'http://api.qshore.com/users';
    return this.http.get(url);
  }

  viewUser(id){
    var url = 'http://api.qshore.com/view-user/'+id;
    return this.http.get(url);
  }

  addUser(){
    var url = 'http://api.qshore.com/add-user';
    var userInfo = {
      fname: 'Rajani',
      lname:'kanth',
      age:23,
      email:'rajani@123',
      password:'kanth123'
    }
    return this.http.post(url, userInfo);
  }

  editUser(id){
    var url = 'http://api.qshore.com/edit-user/'+id;
    var data = {
      fname: 'sashi',
      lname:'kala',
      age:23,
      email:'sashi@123',
      password:'kala123'
    }
    return this.http.put(url, data);
  }

  deleteUser(id){
    var url = 'http://api.qshore.com/delete-user/'+id;
    return this.http.delete(url);
  }
}
