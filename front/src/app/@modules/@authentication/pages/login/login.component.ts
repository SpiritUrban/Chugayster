import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { ValidatorService } from '../../../../@modules/@common-dependencies/services/validator.service';
import { ApiService } from '../../../../@modules/@common-dependencies/services/api.service'
import { StorageService } from '../../../../@modules/@common-dependencies/services/storage.service'

import { log, my_alert } from '../../../../my_modules/stuff';
import appState from '../../../../app-state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  userForm: any; //FormGroup;
  st: any = appState;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private validator: ValidatorService,
    private api: ApiService,
    private storage: StorageService
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

  ngOnInit() {
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
      const answer: any = await this.api.login(this.userData)
      log('answer: ', answer)
      if (answer.err) my_alert(':(', answer.msg2, answer.err); // showing of error
      if (answer.success) {
        this.storage.setItem('user', answer.result); // save to localStorage
        this.st.user = answer.result; // save to appState
        //   {
        //     username: '',
        //     firstName: '',                                          + need add to model !!!
        //     lastName: '',                                           + need add to model !!!
        //     email: '',
        //     password: '',
        //     password1: '',
        //     password2: '',
        //     role: 'Guest',                                          + need add to model !!!
        //     notes: null                                             + need add to model !!!
        // }
        log('this.st: ', this.st);

        // need add finger print !!!
        

        my_alert(':)', 'User logged!', null);
        setTimeout(_ => this.router.navigate(['/cabinet']), 2000)
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
