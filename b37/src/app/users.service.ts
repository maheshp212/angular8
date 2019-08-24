import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  listUsers(){
    let url = 'http://api.qshore.com/users'
    return this.http.get(url)
  }

  viewUser(id){
    let url = 'http://api.qshore.com/view-user/'+id;
    return this.http.get(url)
  }

  createUser(){
    let url = 'http://api.qshore.com/add-user';
    let data = {
      fname: 'Mohan',
      lname:'Lal',
      age:23,
      email:'mohanlal@123',
      password:'lal123'
    }
    return this.http.post(url, data);
  }

  editUser(id){
    let url = 'http://api.qshore.com/edit-user/' + id;
    let data = {
      fname: 'ram',
      lname:'Lal',
      age:23,
      email:'ramlal@123',
      password:'lal123'
    }
    return this.http.put(url, data);
  }

  deleteUser(id){
    let url = 'http://api.qshore.com/delete-user/'+id;
    return this.http.delete(url)
  }

}
