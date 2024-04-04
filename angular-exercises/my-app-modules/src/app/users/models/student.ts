export class Locations {
  city: string;
  country: string;

  constructor(loc: Partial<Locations>) {
    this.city = loc.city ? loc.city : '';
    this.country = loc.country ? loc.country : '';
  }
}

export class Student {
  id: string;
  name: string;
  surname: string;
  location: Locations | null;
  age: number | null;
  hobbies: Array<string>;
  languages: Array<string>;

  constructor(stu: Partial<Student>) {
    this.id = stu.id ? stu.id : '0';
    this.name = stu.name ? stu.name : '';
    this.surname = stu.surname ? stu.surname : '';
    this.location = stu.location ? new Locations(stu.location) : null;
    this.age = stu.age ? stu.age : null;
    this.hobbies = stu.hobbies ? stu.hobbies : [];
    this.languages = stu.languages ? stu.languages : [];
  }
}