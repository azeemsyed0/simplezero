import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/shared/material.module';
import { TimeRoutingModule } from './time-routing.module';
import { TimeComponent } from './time.component';

@NgModule({
  imports: [
    TimeRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    TimeComponent
  ],
  entryComponents: [
    TimeComponent
  ]
})
export class TimeModule { }
