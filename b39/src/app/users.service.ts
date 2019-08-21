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
    let url = 'http://api.qshore.com/add-user';
    var data = {
      fname: 'lucky',
      lname:'singh',
      age:24,
      email:'luckysingh@123',
      password:'singh123'
    }
    return this.http.post(url, data);
  }
  
  editUser(id){

    let url = 'http://api.qshore.com/edit-user/'+id;
    var data = {
      fname: 'balbeer',
      lname:'singh',
      age:24,
      email:'balbeersingh@123',
      password:'singh123'
    }
    return this.http.put(url, data);
  }
  
  deleteUser(id){
    let url = 'http://api.qshore.com/delete-user/'+id;
    return this.http.delete(url);
    }
}
