import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { BehaviorSubject, Observable, Subject, Subscription, take, takeUntil } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy{
  students$!: Observable<Array<Student>>;

  studentsSubscription!: Subscription;
  destroy$: Subject<void> = new Subject<void>();  
  // students$: BehaviorSubject<Array<Student>> = new BehaviorSubject<Array<Student>>([]);

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.studentsSubscription = this.usersService.getStudent().subscribe();
    // this.students$ = this.usersService.students$;
    localStorage.removeItem('studentId');

    this.loadStudentsList();
  }

  // addStudent() {
  //   const newStudent = {
  //     "id": "6",
  //     "name": "Luca",
  //     "surname": "Arancioni",
  //     "location": {
  //       "city": "Torino",
  //       "country": "Italia"
  //     },
  //     "age": 18,
  //     "hobby": [
  //       "calcio",
  //       "ippica"
  //     ],
  //     "languages": [
  //       "italiano"
  //     ]
  //   };

  //   this.usersService.addStudent(newStudent).pipe(take(1))
  //     .subscribe((res) => {
  //       this.loadStudentsList();
  //     });
  // }

  deleteStudent(id: string) {
    this.usersService.deleteStudent(id).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loadStudentsList();
          this.destroy$.next();
          this.destroy$.complete();
        },
        error: (error) => { console.log("Studente non trovato"); },
        complete: () => { console.log("Emissione della subscription completata") }
    });
  }

  goToEditStudent(student: Student): void {
    localStorage.setItem('studentId', student.id);
    this.router.navigate(['/users/form']);
    
    // this.usersService.idStudentToEdit = student.id;
    
    // Passare oggetto nella rotta
    // this.router.navigate(['/users/form'], { state: { data: student } });
  }

  updateStudent(id:string, student: Partial<Student>) {
    this.usersService.updateStudent(id, student).pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.loadStudentsList();
        this.destroy$.next();
        this.destroy$.complete();
      });
  }

  loadStudentsList() {
    this.students$ = this.usersService.getStudents();
  }

  ngOnDestroy(): void {
    // this.studentsSubscription.unsubscribe();
  }

}
