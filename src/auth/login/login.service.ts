import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class LoginService {
  sessionValid: boolean = JSON.parse(sessionStorage.getItem('loggedIn')) || false;
  userName: string = sessionStorage.getItem('userName') || 'Stranger';
  userSignup: boolean = false;
  apiUrl = environment.api;
  isLoginPage: boolean;
  registeredUser: any;
  
  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}`);
  }

  signout() {
    console.log("This is happening..")
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('userName');
  }

  getUserByEmail(email) {
    const getUser = (email) => new Promise((resolve) => {
      this.http.get(`${this.apiUrl}/${email}`).subscribe((result) => {
        resolve(result);
      });
    });
    return getUser(email);
  }

  addUser(user) {
    return this.http.post(this.apiUrl, user, httpOptions);
  }
}
