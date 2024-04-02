import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';

const routesUsers: Routes = [
  { path: '', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routesUsers)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
