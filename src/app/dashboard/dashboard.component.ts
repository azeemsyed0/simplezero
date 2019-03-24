import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../auth/login/login.service';
import { FormControl } from '@angular/forms';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {  
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  mode = new FormControl('push');
  constructor(
    public loginService: LoginService
  ) {  }
  array: any;

  ngOnInit() { }

  checkbutton() {    
    console.log("bunnies")
  }
  
  ngOnDestroy(): void {
    
  }
}
