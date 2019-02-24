import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';

const loginRoutes: Routes = [
  {path: '', component: LoginComponent},
];

export const loginRouting = RouterModule.forChild(loginRoutes);
