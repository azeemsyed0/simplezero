import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../auth/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {  
  constructor(
    public loginService: LoginService,
    public router: Router
  ) {  }

  ngOnInit() { }

  redirectTodo() {
    this.router.navigate(['todos']);
  }

  redirectNotes() {
    this.router.navigate(['notes']);
  }

  redirectJournal() {
    this.router.navigate(['journal']);
  }

  redirectDates() {
    this.router.navigate(['dates']);
  }

  redirectTime() {
    this.router.navigate(['time']);
  }

  redirectPeople() {
    this.router.navigate(['people']);
  }

  ngOnDestroy(): void {
    
  }
}
