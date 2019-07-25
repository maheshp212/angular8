import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  listUsers(){
    var url = 'http://api.qshore.com/users';
    return this.http.get(url);
  }

  addUser(){
    var url = 'http://api.qshore.com/add-user';
    var user = {
      fname: 'Mohan',
      lname:'Lal',
      age:23,
      email:'mohanlal@123',
      password:'lal123'
    }
    return this.http.post(url, user);
  }
  
  viewUser(id){
    var url = 'http://api.qshore.com/view-user/' +id;
    return this.http.get(url);
  }
  
  editUser(id){
    var url = 'http://api.qshore.com/edit-user/'+id;
    var user = {
      fname: 'krishna',
      lname:'Lal',
      age:23,
      email:'mohanlal@123',
      password:'lal123'
    }
    return this.http.put(url, user);
  }
  
  deleteUser(id){
    var url = 'http://api.qshore.com/delete-user/'+id;
    return this.http.delete(url);
  }
}
