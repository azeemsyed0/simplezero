import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path:'home', loadChildren: '../auth/home/home.module#HomeModule'},
  {path:'login', loadChildren: '../auth/login/login.module#LoginModule'},
  {path:'me', loadChildren: './user/user.module#UserModule'},
  {path:'**', redirectTo:'home'}
];

export const appRouting = RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true })
