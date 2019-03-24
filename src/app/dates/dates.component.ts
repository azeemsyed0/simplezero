import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../auth/login/login.service';

@Component({
  selector: 'dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {  

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
