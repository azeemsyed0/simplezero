import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../environments/environment";

@Injectable()
export class AuthService {
  isLoggedInUser:boolean= false;
  apiUrl = environment.api;
  public loggedOut = new EventEmitter<boolean>();
  public loggedIn = new EventEmitter<boolean>();

  constructor(
    private router: Router, 
    private http: HttpClient
  ) {
    this.setLoggedIn();    
  }

  isLoggedIn() {
    return this.isLoggedInUser;
  }

  setLoggedIn() {
    let loggedIn = localStorage.getItem('logIn') == 'true' ? true : false;
    this.isLoggedInUser = loggedIn;
  }

  setLoggedInData(user) {
    localStorage.setItem('logIn', JSON.stringify(true));    
    localStorage.setItem('userId', user.id);
    localStorage.setItem('userName', user.name);
    this.setLoggedIn();
    this.loggedIn.emit();
  }

  login(user: any) {
    const getUser = (user) => new Promise((resolve) => {
      console.log("user email", user)
      this.http.get(`${this.apiUrl}/${user.email}`)
        .subscribe((result) => {
          if(result[0]['email'] === user.email && result[0]['password'] === user.password){
            this.setLoggedInData(result[0])
            resolve({
              status: "valid",
              username: result[0]['name']
            });
          } else {
            resolve({status: "invalid"});
          }
        })
    });
    return getUser(user);
  }  

  logOut() {
    localStorage.setItem('logIn', JSON.stringify(false));
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    this.setLoggedIn();
    this.loggedOut.emit();
    this.router.navigate(['login']);    
  }
}
