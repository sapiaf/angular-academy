import { AbstractControl, ValidationErrors } from "@angular/forms";

export function noWhiteSpaceValidator(control: AbstractControl): ValidationErrors | null {
  // let strTest = '   Pippo   ';
  // let strTestClean = strTest.trim(); // Output: 'Pippo';
  
  if (control.value?.trim() === '')
    return { 'whiteSpace': true }
  else
    return null
}