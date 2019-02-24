import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/shared/material.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    homeRouting,
    SharedModule,
    MaterialModule
  ],
  exports: [
    HomeComponent
  ],
  entryComponents: [
    HomeComponent
  ]
})
export class HomeModule {}