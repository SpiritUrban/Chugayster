import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
// import { ApiService } from '../../services/api.service';
import { log, getUrlQueries } from '../../../../my_modules/stuff';
import { ValidatorService } from '../../../../@modules/@common-dependencies/services/validator.service';
import { registerState } from './register.state'
declare var require: any;

// change component mode 
const queries: any = getUrlQueries()
const mode = queries.mode ? queries.mode : 'empty'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    mode == 'custom'
      ? require('./register.component-alternative.sass') // <---| not works for (ng build -prod)
      : require('./register.component.sass') // <---------------| can be used for (ng build): just for stage of development
    // './register.component-alternative.sass'
  ]
})

export class RegisterComponent implements OnInit {

  userForm: any; //FormGroup;
  st = registerState;

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
    // setInterval(this.logForm.bind(this), 2000)

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
  }

  get email() { return this.userForm.get('email'); }
  get passwords() { return this.userForm.get('passwords'); }
  get pwd() { return this.userForm.get('passwords.pwd'); }
  get confirm() { return this.userForm.get('passwords.confirm'); }
}
