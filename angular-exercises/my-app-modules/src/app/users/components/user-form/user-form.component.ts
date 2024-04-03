import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Locations, Student } from '../../models/student';
import { take } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnDestroy {
  showForm: boolean = false;

  studentId!: string | null;
  student!: Student;

  userForm!: FormGroup;
  name!: FormControl;
  surname!: FormControl;
  age!: FormControl;
  country!: FormControl;

  constructor(
    private fb:FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.studentId = localStorage.getItem('studentId');
    if (this.studentId) {
      this.usersService.getStudentById(this.studentId).pipe(take(1))
        .subscribe((student) => {
          this.student = new Student(student);
          this.showForm = true;
          this.buildForm(student);
        })
    } else {
      this.showForm = true;
      this.buildForm();
    }
  }

  buildForm(student?: Student): void {
    this.name = new FormControl(student ? this.student?.name : '', Validators.required);
    this.surname = new FormControl(student ? this.student?.surname : '', Validators.required);
    this.age = new FormControl(student ? this.student?.age : '', [Validators.required, Validators.min(1)]);
    this.country = new FormControl(student ? this.student?.location?.country : '', Validators.required);

    this.userForm = this.fb.group({
      name: this.name,
      surname: this.surname,
      age: this.age,
      country: this.country
    });
  }

  resetForm() {
    this.userForm.reset(this.student);
  }

  onSubmit() {
    let newStudent = new Student(this.userForm.value);
    let newLocation = new Locations({ country: this.country.value });
    newStudent.location = newLocation;

    if (this.studentId) {
      this.usersService.updateStudent(this.studentId, newStudent).pipe(take(1)).subscribe(res => console.log("Studente aggiornato", res));
    } else {
      this.usersService.addStudent(newStudent).pipe(take(1)).subscribe(res => console.log("Studente aggiunto", res));
    }
  }

  ngOnDestroy(): void {
    localStorage.removeItem('studentId');
  }

}
