import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Simplapps';
  signinForm: FormGroup;
  submitted: boolean = false;
  invalidCredentials: boolean = false;
  aliveSubscription:boolean = true;
  
  constructor(
    public router: Router,
    private authService: AuthService,
    public loginService: LoginService,
    public fb: FormBuilder
  ) {
    if(this.authService.isLoggedIn()) {
      router.navigate(['dashboard']);
    }
  }

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
    this.invalidCredentials = false;
    if(this.signinForm.valid) {
      const data = this.signinForm.value;
      const response = await this.authService.login(data);

      if(response['status'] === 'valid'){
        console.log('Successful login');
        this.submitted = false;        
        this.loginService.userName = response['username'];
        this.router.navigate(['dashboard']);
      }
      else this.invalidCredentials = true;
    }
  }

  ngOnDestroy() {    
    this.aliveSubscription = false;
  }
}
