import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiList } from '../../shared/api_list';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class LoginService {
  usersUrl = ApiList.usersUrl;
  userSignup: boolean = false;
  registeredUser: any;
  loggedinUser: any;
  
  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.usersUrl}`);
  }

  getUserByEmail(email) {
    const getUser = (email) => new Promise((resolve) => {
      this.http.get(`${this.usersUrl}/${email}`).subscribe((result) => {
        resolve(result);
      });
    });
    return getUser(email);
  }

  addEmployee(user) {
    return this.http.post(this.usersUrl, user, httpOptions);
  }
}
