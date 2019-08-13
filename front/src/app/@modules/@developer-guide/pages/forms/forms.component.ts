import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
// import { ApiService } from '../../services/api.service';
import { log } from '../../../../my_modules/stuff';
import { ValidatorService } from '../../../../@modules/@common-dependencies/services/validator.service';
import { individualExampleState } from './individual-example-state'; // individual state

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {

  userForm: any; //FormGroup;
  st = individualExampleState;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private validator: ValidatorService
    // private api: ApiService
  ) {

    const pwdValidators: ValidatorFn[] = [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      // this.someCustom()
    ];

    this.userForm = this.formBuilder.group({
      'email': [this.st.user.email, [Validators.required, Validators.minLength(5), this.validator.mailValidator()]],
      // 'firstName': [this.st.user.firstName, [Validators.required, Validators.minLength(3), this.someCustom()]],
      // 'lastName': [this.st.user.lastName, [Validators.required]],
      // 'role': [this.user.st.role, [Validators.required]],
      // 'notes': [this.user.st.notes, [Validators.maxLength(45)]]      
      'passwords': this.formBuilder.group({
        'pwd': ['', pwdValidators],
        'confirm': ['', pwdValidators]
      }, {
          validator: this.validator.itemsAreEqual('Passwords', 'pwd', 'confirm')
        })
    });
  }


  ngOnInit() {
    // example !!!
    setInterval(this.logForm.bind(this), 2000)

    // example
    let mode = this.route.snapshot.queryParams["mode"];
    log(mode)

    // example
    this.route.queryParams.subscribe(log);
  }

  logForm() {
    const userData = {
      email: this.userForm.controls.email.value,
      password1: this.userForm.controls.passwords.controls.pwd.value,
      password2: this.userForm.controls.passwords.controls.confirm.value
    }
    log('0', userData)
    log('0', this.userForm)
    log('1', this.userForm.controls.passwords.errors) // .................... 'it'.errors -> {itemsAreEqual: msg: {"Passwords are not equal"}}
    log('3', this.userForm.controls.passwords.controls.confirm.errors) // ... 'it'.errors -> {minlength: {…}}
  }

  get email() { return this.userForm.get('email'); }
  get passwords() { return this.userForm.get('passwords'); }
  get pwd() { return this.userForm.get('passwords.pwd'); }
  get confirm() { return this.userForm.get('passwords.confirm'); }

}


