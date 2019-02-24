import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/shared/material.module';

@NgModule({
  imports: [
    UserRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    UserComponent
  ],
  entryComponents: [
    UserComponent
  ]
})
export class UserModule { }
