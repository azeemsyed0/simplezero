import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedComponent,
    CommonModule,
    ReactiveFormsModule 
  ]
})

export class SharedModule {}