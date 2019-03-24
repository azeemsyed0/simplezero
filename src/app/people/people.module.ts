import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/shared/material.module';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';

@NgModule({
  imports: [
    PeopleRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    PeopleComponent
  ],
  entryComponents: [
    PeopleComponent
  ]
})
export class PeopleModule { }
