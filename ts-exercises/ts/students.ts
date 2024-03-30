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

export const STUDENTS_LIST_DTO = [
  {
    name: "Mario",
    surname: "Rossi",
    location: { city: "Torino", country: "Italia" },
    age: 18,
    hobby: ["nuoto", "ippica"],
    languages: ["italiano", "inglese"]
  },
  {
    name: "Maria",
    surname: "Bianchi",
    location: { city: "Varsavia", country: "Polonia" },
    age: 28,
    hobby: ["corsa", "ippica"],
    languages: ["italiano", "inglese", "polacco"]
  },
  {
    name: "Gianni",
    surname: "Verdi",
    location: { city: "Atene", country: "Grecia" },
    age: 41,
    hobby: ["cucina", "nuoto"],
    languages: ["greco", "inglese"]
  },
  {
    name: "Paola",
    surname: "Chiara",
    location: { city: "Milano", country: "Italia" },
    age: 31,
    hobby: ["film", "musica", "corsa"],
    languages: ["italiano", "francese", "tedesco"]
  },
  {
    name: "Luigi",
    surname: "Azzurro",
    location: { city: "New York City", country: "Stati Uniti d'America" },
    age: 41,
    hobby: ["cucina", "nuoto"],
    languages: ["greco", "inglese"]
  }
]