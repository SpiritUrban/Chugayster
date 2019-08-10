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

  userForm: FormGroup;

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
      // this.passwordConfirm()
    ];

    this.userForm = this.formBuilder.group({
      'email': [this.user.email, [Validators.required, Validators.minLength(5), this.mailValidator()]],
      // 'password': [this.user.password, [Validators.required, this.passwordConfirm()]],
      // 'firstName': [this.user.firstName, [Validators.required, Validators.minLength(3)]],
      // 'lastName': [this.user.lastName, [Validators.required]],
      //'password1': [this.user.password, [Validators.required,Validators.minLength(3),this.passwordsAreEqual()]],

      'passwords': this.formBuilder.group({
        'pwd': ['', pwdValidators],
        'confirm': ['', pwdValidators]
      }, { validator: this.passwordsAreEqual() }),

      //'password2': [this.user.password, [Validators.required,Validators.minLength(3),this.passwordsAreEqual()]],
      // 'role': [this.user.role, [Validators.required]],
      // 'notes': [this.user.notes, [Validators.maxLength(45)]]
    });
  }

  //check email
  private mailValidator(): ValidatorFn {
    const pattern: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (control: AbstractControl): { [key: string]: any } => {
      if (!(control.dirty || control.touched)) return null
      else return pattern.test(control.value) ? null : { custom: `Invalid email` };
    };
  }

  //check password
  private passwordConfirm(): ValidatorFn {
    return (group: FormGroup) => (!(group.dirty || group.touched)) ? { custom: 'Something going wrong' } : null
  }

  //check password equal
  private passwordsAreEqual(): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      if (!(group.dirty || group.touched) || group.get('pwd').value === group.get('confirm').value) return null;
      return { custom: 'Passwords are not equal' }; //=> this.userForm.controls.passwords.errors.custom
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
    log(userData)
    log(this.userForm.controls.passwords.errors)
    log(this.userForm.controls.passwords.controls.pwd.errors)
    // userForm.controls.passwords.errors.custom
  }

  get email() { return this.userForm.get('email'); }

  get pwd() { return this.userForm.get('passwords.pwd'); }

  get confirm() { return this.userForm.get('passwords.confirm'); }



  // need make: email, pwd    <--------------------- !!!

  
}
