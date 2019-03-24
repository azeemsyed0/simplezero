import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../auth/login/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {    
  constructor(
    public loginService: LoginService
  ) {  }

  ngOnInit() {

  }

  toggleDrawer() {
    
  }

  ngOnDestroy(): void {

  }

}
