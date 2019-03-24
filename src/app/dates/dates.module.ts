import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/shared/material.module';
import { DatesRoutingModule } from './dates-routing.module';
import { DatesComponent } from './dates.component';

@NgModule({
  imports: [
    DatesRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    DatesComponent
  ],
  entryComponents: [
    DatesComponent
  ]
})
export class DatesModule { }
