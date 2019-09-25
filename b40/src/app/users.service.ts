import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  listUsers(){
    let url = 'http://api.qshore.com/users';
    return this.http.get(url);
  }

  viewUser(id){
    let url = 'http://api.qshore.com/view-user/'+id;
    return this.http.get(url);
  }

  addUser(){
    var url = 'http://api.qshore.com/add-user';
    var data = {
      fname: 'ram',
      lname:'pothineni',
      age:23,
      email:'ram@123',
      password:'p123',
    }

    return this.http.post(url,data);
  }

  editUser(id){
    var url = 'http://api.qshore.com/edit-user/'+id;
    var data = {
      fname: 'krishna',
      lname:'G',
      age:23,
      email:'krishna@123',
      password:'g123',
    }

    return this.http.put(url,data);
  }

  deleteUser(id){
    var url = 'http://api.qshore.com/delete-user/'+id;
    return this.http.delete(url);
  }
}
