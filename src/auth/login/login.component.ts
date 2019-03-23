import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'SimpleZero';
  signinForm: FormGroup;
  submitted: boolean = false;  
  invalidCredentials: boolean = false;

  constructor(
    public router: Router,
    public loginService: LoginService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  get password() {
    return this.signinForm.get('password');
  }
  
  get email() {
    return this.signinForm.get('email');
  }

  async signin() {
    this.submitted = true;

    if(this.signinForm.valid) {
      const data = this.signinForm.value;
      const user = await this.loginService.getUserByEmail(data.email);

      if(user[0].email === data.email && user[0].password === data.password){
        this.loginService.loggedinUser = user[0].name;
        this.router.navigate(['me']);
      }
      else this.invalidCredentials = true;
    }
  }

  ngOnDestroy() {
    this.loginService.userSignup = false;
    this.loginService.registeredUser = null;
    this.invalidCredentials = false;
  }
}
