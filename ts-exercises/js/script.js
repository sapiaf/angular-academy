// JavaScript: il tipo di una variabile viene dedotto dal linguaggio e questo tipo è dinamico
// let testStringJS = "Ciao mondo";
// testStringJS = 10;                // In JS no errore - il tipo è mutevole senza problemi
// TypeScript: il tipo è statico, non mutevole, e può essere dichiarato scrivendolo nel codice
// let testStringTS = "Ciao mondo";
// testStringTS = 10;                // In TS errore - non può cambiare da string a number
/*
 * Es. Mostra "Buongiorno", "Buon pomeriggio" o "Buona sera" a seconda dell'orario:
 *      06:00 a 11:59 > Buongiorno
 *      12:00 a 17:59 > Buon pomeriggio
 *      18:00 a 05:59 (giorno successivo) > Buonasera
*/
// Inizializziamo una variabile di tipo "Date" utilizzando l'oggetto Date di JS per prendere la data corrente sul client locale
let dateTime = new Date();
let dateHours = dateTime.getHours();
// Inizializzo la stringa che andrò a mostrare ed analizzo i possibili casi delle varie fasce orarie
let topMessage = "";
if (dateHours >= 6 && dateHours <= 11)
    topMessage = "Buongiorno";
if (dateHours >= 12 && dateHours <= 17)
    topMessage = "Buon Pomeriggio";
if (dateHours >= 18 || dateHours <= 5)
    topMessage = "Buonasera";
// Prendo l'elemento HTML a cui voglio modificare il contenuto indicandone il valore dell'attributo id
// Tramite l'operatore ! forzo il codice ad ignorare i possibili valori null o undefined
const MainTitleDiv = document.getElementById("mainTitle");
MainTitleDiv.innerHTML = topMessage;
/*
 * TODO | Esercizio:
 * Aggiungi una riga sotto il messaggio di benvenuto (div, p, ecc...) che mostri ora e data attuali
*/
/*
 * Es. Far apparire al click sul pulsante 'Cliccami' presente nel HTML un messaggio sotto al bottone
 * Se il messaggio è presente, il seguente click lo farà scomparire
 *      Benvenuto nell'Angular Academy!
*/
// Prendo l'elemento HTML, partendo dalla sua classe, selezionando l'elemento con il tag button
const BtnElement = document.querySelector(".btnDiv").querySelector("button");
const WelcomeParag = document.createElement("p");
WelcomeParag.innerHTML = "Benvenuto nell'Angular Academy!";
// Aggiungo l'event listener all'elemento bottone per sapere quando invocare la funzione
BtnElement.addEventListener('click', toggleWelcomeMessage);
/**
 * Gestisce la vista e scomparsa del messaggio di benvenuto, che sarà creato dentro un elemento p
 */
function toggleWelcomeMessage() {
    var _a, _b;
    const BtnDiv = BtnElement.parentElement;
    if (BtnDiv.querySelector("p")) {
        (_a = BtnDiv.querySelector("p")) === null || _a === void 0 ? void 0 : _a.remove();
    }
    else {
        (_b = BtnElement.parentElement) === null || _b === void 0 ? void 0 : _b.append(WelcomeParag);
    }
}
/*
 * TODO | Esercizio:
 * Ogni 5 click cambia il colore del paragrafo. I possibili modi per influenzare lo stile sono:
 *    - aggiungere "inline css" all'elemento (es. style="...")
 *    - dare una classe / id all'elemento con relative regole di stile nel foglio css
*/
/*
 * TODO | Esercizio:
 * Al click sul pulsante 'Cliccami' verrano mostrate queste ulteriori informazioni:
 *    - la data ed ora della prossima lezione dell'Academy (09:00 di giorno feriale)
 *    - se attualmente è in corso una lezione (tra le 09:00 e le 18:00 di un giorno feriale)
*/
/*
 * Es. Crea una lista di x studenti differenti tra loro. Ogni studente deve avere queste proprietà:
 *  name: string;
 *  surname: string;
 *  location: { city: string, country: string }
 *  age: number;
 *  hobby: Array<string>;
 *  languages: Array<string>;
*/
// Settando la proprietà "module": "es2015" nel file tsconfig.json e modificando il tag script in index.html in <script type="module" src="./js/script.js"></script> possiamo utilizzare import / export di file
// Scrivere in un modulo separato la classe, tipo e fonte dati
// Specificare l'estensione .js, così che il file script.js compilato riporti il percorso corretto
import { Student, STUDENTS_LIST_DTO } from "./students.js";
const StudentsList = STUDENTS_LIST_DTO.map((s) => new Student(s));
console.log("Lista Students", StudentsList);
// Segue una serie di esercizi che richiedono di mostrare dei risultati nell'HTML
// di conseguenza, salvo l'elemento HTML in cui andrò ad inserire i miei risultati, l'elemento div#demo
const DemoDiv = document.getElementById("demo");
/*
 * Es. Mostrare nella vista la lista degli studenti in questo formato:
 *  - Nome Cognome, Età (Paese di provenienza)
*/
// Creo un header h2 da inserire all'inizio della "sezione", giusto per ordinare la vista
const StudentsTitle = document.createElement("h2");
StudentsTitle.innerHTML = "Studenti:";
DemoDiv.append(StudentsTitle);
// Ricavo la lista di stringhe nel formato richiesto
const StudentsNameAgeLocationList = StudentsList.map((s) => getNameAgeLocation(s));
/**
 * Ricevuto un oggetto di tipo Student, ritorna la stringa con le proprie informazioni anagrafiche.
 * @param {Student} s oggetto di tipo Student di cui si vuole l'anagrafica
 * @returns {string} stringa formato "Nome Cognome, età (Paese di provenienza)"
 */
function getNameAgeLocation(s) {
    return `${s.name} ${s.surname}, ${s.age} (${s.location.country})`;
    return s.name + " " + s.surname + ", " + s.age + " (" + s.location.country + ")";
    // I due ritorni sono uguali: 
    //    nel primo si utilizza la sintassi di template liberal o template string
    //    nel secondo la concatenazione di stringhe
}
// Creo gli elementi HTML con cui mostrare la lista
const StudentsNameAgeLocationUlElement = document.createElement("ul"); // Unordered List
StudentsNameAgeLocationList.forEach((s) => {
    const StudentNameAgeLocationLiElement = document.createElement("li"); // List Item
    StudentNameAgeLocationLiElement.innerHTML = s;
    StudentsNameAgeLocationUlElement.appendChild(StudentNameAgeLocationLiElement);
});
DemoDiv.append(StudentsNameAgeLocationUlElement);
/*
 * TODO | Esercizio:
 * Modificare la lista a vista affinché mostri gli studenti ordinati per età e/o alfabeticamente
*/
/*
 * TODO | Esercizio:
 * Rendere solamente il cognome in grassetto (l'elemento <span> è un elemento inlinea)
*/
/*
 * Es. Mostrare nella vista la lista dei paesi degli studenti, senza duplicati in questo formato:
    Paese1, Paese2, Paese3, ...
*/
const LocationsTitle = document.createElement("h2");
LocationsTitle.innerHTML = "Località:";
DemoDiv.append(LocationsTitle);
// Creo un array di appoggio in cui andrò a salvare le stringhe dei paesi unici
const StudentsCountriesList = [];
StudentsList.forEach((s) => {
    const country = s.location.country;
    if (StudentsCountriesList.every((nation) => nation !== country))
        if (!StudentsCountriesList.includes(country))
            if (StudentsCountriesList.indexOf(country) === -1)
                StudentsCountriesList.push(country);
});
// Creo la stringa e l'elemento in cui mostrarla nel HTML
const StudentsCountriesParag = document.createElement("p");
let studentsCountries = StudentsCountriesList.join(", ");
StudentsCountriesParag.innerHTML = studentsCountries;
DemoDiv.append(StudentsCountriesParag);
/*
 * TODO | Esercizio:
 * Aggiungere dopo ogni paese il numero di studenti provenienti da esso
 * es. Italia (2), ...
*/
/*
 * Es. Mostrare nella vista la lista degli studenti raggruppati per lingue il tutto alfabeticamente, in questo formato:
 *   Italiano:
 *    - Mario Rossi
 *    ...
*/
const LanguagesTitle = document.createElement("h2");
LanguagesTitle.innerHTML = "Lingue:";
DemoDiv.append(LanguagesTitle);
// Creo l'array in cui avrò tutte le lingue, con duplicati a salvare le stringhe delle lingue uniche
const StudentsLanguagesList = Array.from(new Set(StudentsList.map(s => s.languages).reduce((acc, val) => acc.concat(val), []))).sort();
// Creo un array da un oggetto iterabile                    | Array.from()
// Istanzio un Set per prendere valori unici                | new Set()
// Valorizzo il set con il risultato accumulato             | string[].reduce()
// ottenuto dalla concatenazione delle lingue               | .concat()
// dalla iterazione dei singoli studenti                    | StudentsList.map()
// Infine viene ordinato alfabeticamente il tutto           | .sort()
// Creo una mappa che abbia come chiave una lingua e valore il relativo array di studenti
let mapLanguagesAndStudents = new Map();
StudentsLanguagesList.forEach((l) => {
    const ListSameLanguageStudents = [];
    StudentsList.forEach((s) => {
        if (s.languages.includes(l))
            ListSameLanguageStudents.push(s.surname + " " + s.name);
    });
    mapLanguagesAndStudents.set(l, ListSameLanguageStudents.sort());
});
// Creo gli elementi HTML con cui mostrare le lista, iterando la mia mappa
mapLanguagesAndStudents.forEach((students, language) => {
    const LanguageParag = document.createElement("p");
    // Capitalizzo la prima lettera della stringa
    LanguageParag.innerHTML = language.charAt(0).toUpperCase() + language.slice(1);
    const StudentsSameLanguageUlElement = document.createElement("ul");
    students.forEach((s) => {
        const StudentLiElement = document.createElement("li");
        StudentLiElement.innerHTML = s;
        StudentsSameLanguageUlElement.append(StudentLiElement);
    });
    DemoDiv.append(LanguageParag);
    DemoDiv.append(StudentsSameLanguageUlElement);
});
/*
 * TODO | Esercizio:
 * Creare nella vista un bottone per ogni lingua e, al click su uno di questi, mostrare la relativa lista specifica di studenti
*/
// Soluzione alternativa:
//  Creazione di una classe apposita che ci aiuti a "mappare" una proprietà ad un'altra
class LangMap {
    constructor(lang, studs) {
        this.langName = lang;
        this.studsNames = studs;
    }
}
const ListStudentsLanguages = [];
StudentsList.forEach((stu) => {
    for (let i = 0; i < stu.languages.length; i++) {
        if (ListStudentsLanguages.every((lan) => lan !== stu.languages[i]))
            ListStudentsLanguages.push(stu.languages[i]);
    }
});
const MapLanguagesStuds = [];
let index = 0;
ListStudentsLanguages.forEach((lan) => {
    MapLanguagesStuds.push(new LangMap(lan, new Array()));
    StudentsList.forEach((stu) => {
        if (!stu.languages.every((l) => l !== lan))
            MapLanguagesStuds[index].studsNames.push(stu.name);
    });
    index++;
});
console.log("Lista 'mappa' { lingua: studenti}", MapLanguagesStuds);
