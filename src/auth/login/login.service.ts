import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class LoginService {
  sessionValid: boolean = JSON.parse(sessionStorage.getItem('loggedIn')) || false;
  userName: string = localStorage.getItem('userName') || 'Stranger';
  userSignup: boolean = false;
  apiUrl = environment.api;  
  registeredUser: any;
  
  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}`);
  }
  
  addUser(user) {
    return this.http.post(this.apiUrl, user, httpOptions);
  }
}
