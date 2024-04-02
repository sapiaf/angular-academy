import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  test!: string;

  constructor(private usersService: UsersService) {
    this.test = this.usersService.test;
  }

}
