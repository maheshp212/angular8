import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http : HttpClient ) { }

  listUsers(){
    var url = 'http://api.qshore.com/users';
    return this.http.get(url);
  }
  viewUser(id){
    var url = 'http://api.qshore.com/view-user/'+id;
    return this.http.get(url);
  }
  addUser(){
    var data = {
      fname: 'Mohan',
      lname:'Lal',
      age:23,
      email:'mohanlal@123',
      password:'lal123'
    }
    var url = 'http://api.qshore.com/add-user';
    return this.http.post(url, data);
  }

  editUser(id){
    var data = {
      fname: 'Ranga',
      lname:'Rajan',
      age:23,
      email:'rangarajan@123',
      password:'rajan123'
    }
    var url = 'http://api.qshore.com/edit-user/' + id;
    return this.http.put(url, data);
  }

  deletUser(id){
    var url = 'http://api.qshore.com/delete-user/'+id;
    return this.http.delete(url);
  }
}
