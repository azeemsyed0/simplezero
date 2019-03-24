import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/shared/material.module';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from '../todos/todo.component';

@NgModule({
  imports: [
    TodoRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    TodoComponent
  ],
  entryComponents: [
    TodoComponent
  ]
})
export class TodoModule { }
