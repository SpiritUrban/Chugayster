import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { User } from '../../interfaces/user';
// import { ApiService } from '../../services/api.service';
import { log } from '../../../../my_modules/stuff';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  userForm: any; //FormGroup;

  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password1: '',
    password2: '',
    role: 'Guest',
    notes: null
  };

  constructor(
    private formBuilder: FormBuilder,
    // private api: ApiService
  ) {

    const pwdValidators: ValidatorFn[] = [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      // this.someCustom()
    ];

    this.userForm = this.formBuilder.group({
      'email': [this.user.email, [Validators.required, Validators.minLength(5), this.mailValidator()]],
      // 'firstName': [this.user.firstName, [Validators.required, Validators.minLength(3), this.someCustom()]],
      // 'lastName': [this.user.lastName, [Validators.required]],
      // 'role': [this.user.role, [Validators.required]],
      // 'notes': [this.user.notes, [Validators.maxLength(45)]]      
      'passwords': this.formBuilder.group({
        'pwd': ['', pwdValidators],
        'confirm': ['', pwdValidators]
      }, {
          validator: this.itemsAreEqual('Passwords', 'pwd', 'confirm')
        })
    });
  }

  // check email
  private mailValidator(): ValidatorFn {
    const pattern: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (control: AbstractControl): { [key: string]: any } => {
      if (!(control.dirty || control.touched)) return null
      else return pattern.test(control.value)
        ? null
        : { custom: `Invalid email` };
    };
  }


  // check items equal
  private itemsAreEqual(itemName, first, second): ValidatorFn {
    const x = { custom: { msg: `${itemName} are not equal` } }
    return (group: FormGroup) => {
      const isEqual = group.get(first).value === group.get(second).value;
      return isEqual ? null : x // x => this.userForm.controls.passwords.errors.custom
    };
  }


  ngOnInit() {
    setInterval(this.logForm.bind(this), 2000)
  }

  logForm() {
    const userData = {
      email: this.userForm.controls.email.value,
      password1: this.userForm.controls.passwords.controls.pwd.value,
      password2: this.userForm.controls.passwords.controls.confirm.value
    }
    log('0', userData)
    log('1', this.userForm.controls.passwords.errors) // .................... 'it'.errors -> {custom: msg: {"Passwords are not equal"}}
    log('3', this.userForm.controls.passwords.controls.confirm.errors) // ... 'it'.errors -> {minlength: {…}}
  }

  get email() { return this.userForm.get('email'); }
  get passwords() { return this.userForm.get('passwords'); }
  get pwd() { return this.userForm.get('passwords.pwd'); }
  get confirm() { return this.userForm.get('passwords.confirm'); }


  // need make: email, pwd    <--------------------- !!!

}
