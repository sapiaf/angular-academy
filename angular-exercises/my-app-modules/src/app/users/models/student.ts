export class Locations {
  city: string;
  country: string;

  constructor(loc: Partial<Locations>) {
    this.city = loc.city ? loc.city : '';
    this.country = loc.country ? loc.country : '';
  }
}

export type LanguageLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | '';

export class LanguageExpertise {
  language: string;
  level: LanguageLevel

  constructor(langExp: Partial<LanguageExpertise>) {
    this.language = langExp.language ? langExp.language : '',
    this.level = langExp.level ? langExp.level : ''
  }
}

export class Student {
  id: string;
  name: string;
  surname: string;
  age: number | null;
  location: Locations | null;
  hobbies: Array<string>;
  languages: Array<LanguageExpertise>;

  constructor(stu: Partial<Student>) {
    this.id = stu.id ? stu.id : '0';
    this.name = stu.name ? stu.name : '';
    this.surname = stu.surname ? stu.surname : '';
    this.location = stu.location ? new Locations(stu.location) : null;
    this.age = stu.age ? stu.age : null;
    this.hobbies = stu.hobbies ? stu.hobbies : [];
    this.languages = stu.languages ? stu.languages.map(lang => new LanguageExpertise(lang)) : [];
  }
}