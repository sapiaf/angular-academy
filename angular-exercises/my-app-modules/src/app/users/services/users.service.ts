import { Injectable } from '@angular/core';
import { UsersModule } from '../users.module';
import { Student } from '../models/student';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: UsersModule
})
export class UsersService {
  apiUrl: string = "http://localhost:3000";
  // students$: BehaviorSubject<Array<Student>> = new BehaviorSubject<Array<Student>>([]);

  lastUsedId!: number;

  // idStudentToEdit: string | undefined;

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(`${this.apiUrl}/students`)
      .pipe(map((stu) => {
        // Aggiorno ultimo id utilizzabile così da avere id pronto per futura POST
        this.lastUsedId = +stu.reduce((max, student) => { return student.id > max.id ? student : max; }).id;
        // this.students$.next(students);
        return stu
      }));
  }

  addStudent(student: Student): Observable<Student> {
    student.id = (this.lastUsedId + 1).toString();
    return this.http.post<Student>(`${this.apiUrl}/students`, student)
      .pipe(map((stu) => {
        this.lastUsedId++;
        // const newStudentsList = this.students$.value;
        // newStudentsList.push(stu);
        // this.students$.next(newStudentsList);
        return stu;
      }));
  }

  deleteStudent(id: number | string): Observable<Student> {
    return this.http.delete<Student>(`${this.apiUrl}/students/${id}`);
  }

  updateStudent(id: string, student: Partial<Student>) {
    return this.http.patch(`${this.apiUrl}/students/${id}`, student)
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/students/${id}`)
      .pipe(map((stu) => {
        return stu
      }));
  }

  getStudentByLanguage(lang: string): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(`${this.apiUrl}/students`)
      .pipe(map((students) => {
        const ListStudentsSameLanguage: Array<Student> = []
        students.forEach((s) => {
          if (s.languages.includes(lang))
            ListStudentsSameLanguage.push(s);
        });
        return ListStudentsSameLanguage;
    }));
  }

  /*
   *  TODO | Esercizio.
   *  Integrare tutte i "filtraggi" fatti nell'esercizio .ts come chiamate tramite parametri
   */

  getStudentOlderThan(age: string): Observable<Array<Student>> {
    const options = { 
      params: new HttpParams()
        .set('age_gte', age)
    };
    return this.http.get<Array<Student>>(`${this.apiUrl}/students`, options)
  }
}
