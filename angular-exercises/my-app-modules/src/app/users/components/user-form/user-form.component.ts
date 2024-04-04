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
  location!: FormGroup;
  city!: FormControl;
  country!: FormControl;
  age!: FormControl;

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
          this.buildForm();
          this.showForm = true;
        })
    } else {
      this.buildForm();
      this.showForm = true;
    }
  }

  buildForm(): void {
    this.name = new FormControl(null, Validators.required);
    this.surname = new FormControl(null, Validators.required);
    this.age = new FormControl(null, [Validators.required, Validators.min(13)]);

    this.city = new FormControl(null);
    this.country = new FormControl(null, Validators.required);

    this.location = this.fb.group({
      city: this.city,
      country: this.country
    });

    this.userForm = this.fb.group({
      name: this.name,
      surname: this.surname,
      location: this.location,
      age: this.age,
      country: this.country
    });

    if (this.student) {
      this.patchFormValues();
    }
  }

  patchFormValues(): void {
    this.userForm.patchValue({
      name: this.student.name,
      surname: this.student.surname,
      age: this.student.age,
      location: {
        city: this.student.location?.city,
        country: this.student.location?.country
      }
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

  checkFormStatus(): void {
    console.log(this.userForm);
  }

  ngOnDestroy(): void {
    localStorage.removeItem('studentId');
  }

}
