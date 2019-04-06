import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../auth/login/login.service';

@Component({
  selector: 'spends',
  templateUrl: './spends.component.html',
  styleUrls: ['./spends.component.css']
})
export class SpendsComponent implements OnInit {  

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
