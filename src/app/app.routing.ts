import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path:'home', loadChildren: '../auth/home/home.module#HomeModule'},
  {path:'login', loadChildren: '../auth/login/login.module#LoginModule'},
  {path:'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path:'todos', loadChildren: './todos/todo.module#TodoModule'},
  {path:'journal', loadChildren: './journal/journal.module#JournalModule'},
  {path:'notes', loadChildren: './notes/notes.module#NotesModule'},
  {path:'people', loadChildren: './people/people.module#PeopleModule'},
  {path:'time', loadChildren: './time/time.module#TimeModule'},
  {path:'dates', loadChildren: './dates/dates.module#DatesModule'},
  {path:'**', redirectTo:'home'}
];

export const appRouting = RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true })
