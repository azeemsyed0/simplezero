import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/shared/material.module';
import { JournalRoutingModule } from './journal-routing.module';
import { JournalComponent } from './journal.component';

@NgModule({
  imports: [
    JournalRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    JournalComponent
  ],
  entryComponents: [
    JournalComponent
  ]
})
export class JournalModule { }
