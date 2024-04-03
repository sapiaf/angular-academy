import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routesUsers: Routes = [
  { path: '', component: UserListComponent },
  { path: 'form', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routesUsers)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
