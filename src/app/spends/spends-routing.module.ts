import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpendsComponent } from './spends.component';

const routes: Routes = [
  {path: '', component: SpendsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpendsRoutingModule { }
