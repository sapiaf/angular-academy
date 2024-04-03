import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserListComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
