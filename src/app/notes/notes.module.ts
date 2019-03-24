import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/shared/material.module';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';

@NgModule({
  imports: [
    NotesRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    NotesComponent
  ],
  entryComponents: [
    NotesComponent
  ]
})
export class NotesModule { }
