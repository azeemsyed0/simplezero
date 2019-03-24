import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../auth/login/login.service';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {  

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
