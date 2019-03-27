import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/auth/login/login.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') public sidenav;

  isLoginPage: boolean;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  mode = new FormControl('push');
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  checkbutton() {
    this.sidenav.close()
    console.log("bunnies")
  }
  
  checkRoute() {
    if(this.router.url === '/login' || this.router.url === '/home')
      return true
    else
      return false
  }
}
