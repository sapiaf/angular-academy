import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';

const routesUsers: Routes = [
  { path: '', component: UserListComponent },
  { path: 'new-user', component: AddUserFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routesUsers)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
