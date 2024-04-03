export type Locations = {
  city: string;
  country: string;
}

export class Student {
  name: string;
  surname: string;
  location: Locations;
  age: number;
  hobby: Array<string>;
  languages: Array<string>;

  constructor(stu: Student) {
    this.name = stu.name;
    this.surname = stu.surname;
    this.location = stu.location;
    this.age = stu.age;
    this.hobby = stu.hobby;
    this.languages = stu.languages;
  }
}