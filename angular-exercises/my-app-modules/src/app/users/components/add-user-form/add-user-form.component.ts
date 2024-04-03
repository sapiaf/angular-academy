import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Locations, Student } from '../../models/student';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.scss'
})
export class AddUserFormComponent implements OnInit {
  newUserForm!: FormGroup;
  name!: FormControl;
  surname!: FormControl;
  age!: FormControl;
  country!: FormControl;

  constructor(
    private fb:FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.name = new FormControl();
    this.surname = new FormControl();
    this.age = new FormControl();
    this.country = new FormControl();

    this.newUserForm = this.fb.group({
      name: this.name,
      surname: this.surname,
      age: this.age,
      country: this.country
    });
  }

  onSubmit() {
    let newStudent = new Student(this.newUserForm.value);
    let newLocation = new Locations({ country: this.country.value });
    newStudent.location = newLocation;
    this.usersService.addStudent(newStudent).pipe(take(1)).subscribe(res => console.log("Studente aggiunto", res));
  }

}
