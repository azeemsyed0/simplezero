import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../auth/login/login.service';

@Component({
  selector: 'journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {  

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
