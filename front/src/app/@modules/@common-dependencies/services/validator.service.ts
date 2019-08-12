import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  test() {
    return 'v serv'
  }

  // check email
  public mailValidator(): ValidatorFn {
    const x = { mailValidator: { msg: `Incorrect email` } }
    const pattern: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (control: AbstractControl): { [key: string]: any } => {
      const isValide = pattern.test(control.value);
      return isValide ? null : x;
    };
  }

  // check items equal
  public itemsAreEqual(itemName, first, second): ValidatorFn {
    const x = { itemsAreEqual: { msg: `${itemName} are not equal` } }
    return (group: FormGroup) => {
      const isEqual = group.get(first).value === group.get(second).value;
      return isEqual ? null : x // x => this.userForm.controls.passwords.errors.custom
    };
  }

}
