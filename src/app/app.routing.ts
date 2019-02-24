import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path:'home', loadChildren: './home/home.module#HomeModule'},
  {path:'login', loadChildren: './login/login.module#LoginModule'},
  {path:'me', loadChildren: './user/user.module#UserModule'},
  {path:'**', redirectTo:'home'}

];

export const appRouting = RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true })
