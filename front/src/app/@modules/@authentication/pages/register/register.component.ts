import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { log, getUrlQueries, my_alert } from '../../../../my_modules/stuff';
import { ValidatorService } from '../../../../@modules/@common-dependencies/services/validator.service';
import { ApiService } from '../../../../@modules/@common-dependencies/services/api.service'
import appState from '../../../../app-state';
declare var require: any;

// change component mode 
const queries: any = getUrlQueries()
const mode = queries.mode ? queries.mode : 'empty'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: [
//     mode == 'custom'
//       ? require('./register.component-alternative.sass') // <---| not works for (ng build -prod)
//       : require('./register.component.sass') // <---------------| can be used for (ng build): just for stage of development
//     // './register.component-alternative.sass'
//   ]
// })

export class RegisterComponent implements OnInit {

  userForm: any; //FormGroup;
  st: any = appState;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private validator: ValidatorService,
    private api: ApiService
  ) {
    // group of validators (for next usage)
    const pwdValidators: ValidatorFn[] = [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ];

    // build 'userForm' essence
    this.userForm = this.formBuilder.group({
      'username': [this.st.user.username, [Validators.required, Validators.minLength(2)]],
      'email': [this.st.user.email, [Validators.required, Validators.minLength(5), this.validator.mailValidator()]],
      'passwords': this.formBuilder.group({
        'pwd': ['', pwdValidators],
        'confirm': ['', pwdValidators]
      }, {
        validator: this.validator.itemsAreEqual('Passwords', 'pwd', 'confirm')
      })
    });
  }

  async ngOnInit() {
  }

  fill(){
    log('fill')
    this.userForm.controls['username'].setValue('testUser');
    this.userForm.controls['email'].setValue('shadespiritenator@gmail.com');
    this.userForm.controls['passwords'].controls['pwd'].setValue(123456);
    this.userForm.controls['passwords'].controls['confirm'].setValue(123456);
  }

  // when user pressed (submit/register)
  async onSubmit() {
    try {
      const answer: any = await this.api.register(this.userData)
      log('answer: ', answer)
      if (answer.err) my_alert(':(', answer.msg2, answer.err); // showing of error
      if (answer.success) {
        my_alert(':)', 'User was created!', null);
        this.router.navigate(['/auth/login']);
      }
    } catch (error) {
      log('HttpErrorResponse: ', error)
    }

  }

  // gathering the structure 'userData' from 'userForm'
  get userData() {
    return {
      username: this.userForm.controls.username.value,
      email: this.userForm.controls.email.value,
      password: this.userForm.controls.passwords.controls.pwd.value,
      password2: this.userForm.controls.passwords.controls.confirm.value
    }
  }

  // for elements of form 
  get passwords() { return this.userForm.get('passwords'); }
  get username() { return this.userForm.get('username'); }
  get confirm() { return this.userForm.get('passwords.confirm'); }
  get email() { return this.userForm.get('email'); }
  get pwd() { return this.userForm.get('passwords.pwd'); }
}