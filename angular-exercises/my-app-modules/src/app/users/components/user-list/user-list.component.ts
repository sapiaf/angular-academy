import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  studentsSubscription!: Subscription;
  students$: BehaviorSubject<Array<Student>> = new BehaviorSubject<Array<Student>>([]);

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.studentsSubscription = this.usersService.getStudents().subscribe();
    this.students$ = this.usersService.students$;
  }

  addStudent() {
    const newStudent = {
      "id": "6",
      "name": "Luca",
      "surname": "Arancioni",
      "location": {
        "city": "Torino",
        "country": "Italia"
      },
      "age": 18,
      "hobby": [
        "calcio",
        "ippica"
      ],
      "languages": [
        "italiano"
      ]
    };

    this.usersService.addStudent(newStudent).subscribe((res) => console.log(res));
  }

  deleteStudent() {
    this.usersService.deleteStudent("6").subscribe((res) => console.log(res));
  }

}
