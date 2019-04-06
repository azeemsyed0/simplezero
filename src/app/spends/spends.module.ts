import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/shared/material.module';
import { SpendsRoutingModule } from './spends-routing.module';
import { SpendsComponent } from './spends.component';

@NgModule({
  imports: [
    SpendsRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    SpendsComponent
  ],
  entryComponents: [
    SpendsComponent
  ]
})
export class SpendsModule { }
