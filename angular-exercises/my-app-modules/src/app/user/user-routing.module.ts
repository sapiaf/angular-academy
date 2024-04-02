import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routesUser: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routesUser)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
