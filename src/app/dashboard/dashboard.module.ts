import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/shared/material.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    DashboardComponent
  ],
  entryComponents: [
    DashboardComponent
  ]
})
export class DashboardModule { }
