import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from 'src/shared/material.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    loginRouting,
    SharedModule,
    MaterialModule
  ],
  exports: [
    LoginComponent
  ],
  entryComponents: [
    LoginComponent
  ]
})

export class LoginModule { }
