import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';

const routesUser: Routes = [
  { path: '', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routesUser)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
