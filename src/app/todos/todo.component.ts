import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../auth/login/login.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {  

  constructor(
    public loginService: LoginService
  ) { }
  

  ngOnInit() {

  }

  checkbutton() {
    console.log("bunnies")
  }
  
  ngOnDestroy(): void {

  }

}
