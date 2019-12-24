(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-authentication-authentication-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@authentication/pages/help/help.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@authentication/pages/help/help.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>help works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@authentication/pages/login/login.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@authentication/pages/login/login.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>login works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@authentication/pages/register/register.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@authentication/pages/register/register.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Mode:\n&nbsp; <a href=\"/auth/register?mode=default\">Default</a>\n&nbsp; <a href=\"/auth/register?mode=custom\">Custom</a>\n\n<app-extra-alert [st]=\"st.alert\"></app-extra-alert>\n\n<div class=\"jumbotron limit\">\n\n  <h3 class=\"title\">Registration</h3>\n\n  <!-- Register Form -->\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n\n    <!-- email -->\n    <div class=\"form-group\">\n      <label for=\"1\">Email address</label>\n      <input formControlName=\"email\" id=\"1\" class=\"form-control\" type=\"email\" placeholder=\"Enter email\">\n      <small class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n      <!-- validation -->\n      <app-form-validator [it]=\"email\"></app-form-validator>\n    </div>\n\n    <!-- both -->\n    <fieldset formGroupName=\"passwords\">\n\n      <!-- password -->\n      <div class=\"form-group\">\n        <label for=\"2\">Password</label>\n        <input formControlName=\"pwd\" id=\"2\" class=\"form-control\" type=\"password\" placeholder=\"Password\">\n        <!-- validation -->\n        <app-form-validator [it]=\"pwd\"></app-form-validator>\n      </div>\n\n      <!-- confirm password -->\n      <div class=\"form-group\">\n        <label for=\"3\">Password confirmation</label>\n        <input formControlName=\"confirm\" id=\"3\" class=\"form-control input-lg\" type=\"password\"\n          placeholder=\"Confirm Password\">\n        <small class=\"form-text text-muted\">Password must be at 6 to 20 characters long.</small>\n        <!-- validation -->\n        <app-form-validator [it]=\"confirm\"></app-form-validator>\n      </div>\n\n      <!-- mix validation: confirm, passwords -->\n      <!-- equal -->\n      <div *ngIf=\" !confirm.pristine && passwords.errors && passwords.errors.itemsAreEqual\" class=\"alert alert-danger\">\n        {{passwords.errors.itemsAreEqual.msg}}\n      </div>\n\n    </fieldset>\n\n    <div class=\"form-group\">\n      <i class=\"mdi mdi-file-document-box-check\"></i>\n      <a class=\"alert-link\" href=\"\"> Conditions Document</a>\n    </div>\n\n    <div class=\"form-group \">\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" checked=\"\">\n        <label class=\"custom-control-label\" for=\"customCheck1\">I agree with conditions</label>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n\n</div>\n\n\n<div class=\"limit\">\n  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured\n    content or information.</p>\n  <hr class=\"my-4\">\n  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n</div>"

/***/ }),

/***/ "./src/app/@modules/@authentication/@authentication-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/@modules/@authentication/@authentication-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_help_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/help/help.component */ "./src/app/@modules/@authentication/pages/help/help.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/@modules/@authentication/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/@modules/@authentication/pages/register/register.component.ts");



// pages



const routes = [
    { path: 'help', component: _pages_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
];
let AuthenticationRoutingModule = class AuthenticationRoutingModule {
};
AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthenticationRoutingModule);



/***/ }),

/***/ "./src/app/@modules/@authentication/@authentication.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/@modules/@authentication/@authentication.module.ts ***!
  \********************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/@modules/@authentication/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/@modules/@authentication/pages/register/register.component.ts");
/* harmony import */ var _pages_help_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/help/help.component */ "./src/app/@modules/@authentication/pages/help/help.component.ts");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./@authentication-routing.module */ "./src/app/@modules/@authentication/@authentication-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@modules/@common-dependencies/@common-dependencies.module */ "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts");
/* harmony import */ var _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@modules/@common-dependencies/services/validator.service */ "./src/app/@modules/@common-dependencies/services/validator.service.ts");
/* harmony import */ var _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@modules/@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");



// pages






// services


let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _pages_help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticationRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_8__["CommonDependenciesModule"]
        ],
        providers: [
            _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_9__["ValidatorService"],
            _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]
        ],
        exports: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _pages_help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"]]
    })
], AuthenticationModule);



/***/ }),

/***/ "./src/app/@modules/@authentication/pages/help/help.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/@modules/@authentication/pages/help/help.component.sass ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0BhdXRoZW50aWNhdGlvbi9wYWdlcy9oZWxwL2hlbHAuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/@modules/@authentication/pages/help/help.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/@modules/@authentication/pages/help/help.component.ts ***!
  \***********************************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelpComponent = class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
};
HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: __webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@authentication/pages/help/help.component.html"),
        styles: [__webpack_require__(/*! ./help.component.sass */ "./src/app/@modules/@authentication/pages/help/help.component.sass")]
    })
], HelpComponent);



/***/ }),

/***/ "./src/app/@modules/@authentication/pages/login/login.component.sass":
/*!***************************************************************************!*\
  !*** ./src/app/@modules/@authentication/pages/login/login.component.sass ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0BhdXRoZW50aWNhdGlvbi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/@modules/@authentication/pages/login/login.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@modules/@authentication/pages/login/login.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@authentication/pages/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/@modules/@authentication/pages/login/login.component.sass")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/@modules/@authentication/pages/register/register.component-alternative.sass":
/*!*********************************************************************************************!*\
  !*** ./src/app/@modules/@authentication/pages/register/register.component-alternative.sass ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".limit {\n  max-width: 30em;\n  margin: 3em auto;\n}\n\n.title {\n  text-align: center;\n  margin: 0em 1em;\n  margin: 0.5em 1em;\n}\n\n.jumbotron {\n  padding: 2em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGF1dGhlbnRpY2F0aW9uL3BhZ2VzL3JlZ2lzdGVyL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGF1dGhlbnRpY2F0aW9uXFxwYWdlc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC1hbHRlcm5hdGl2ZS5zYXNzIiwic3JjL2FwcC9AbW9kdWxlcy9AYXV0aGVudGljYXRpb24vcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LWFsdGVybmF0aXZlLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSx1QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGF1dGhlbnRpY2F0aW9uL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC1hbHRlcm5hdGl2ZS5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbWl0XHJcbiAgICBtYXgtd2lkdGg6IDMwZW1cclxuICAgIG1hcmdpbjogM2VtIGF1dG9cclxuXHJcbi50aXRsZVxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICBtYXJnaW46IDBlbSAxZW0gXHJcbiAgICBtYXJnaW46IC41ZW0gMWVtIFxyXG5cclxuXHJcbi5qdW1ib3Ryb25cclxuICAgIHBhZGRpbmc6IDJlbSAhaW1wb3J0YW50IiwiLmxpbWl0IHtcbiAgbWF4LXdpZHRoOiAzMGVtO1xuICBtYXJnaW46IDNlbSBhdXRvO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMGVtIDFlbTtcbiAgbWFyZ2luOiAwLjVlbSAxZW07XG59XG5cbi5qdW1ib3Ryb24ge1xuICBwYWRkaW5nOiAyZW0gIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/@modules/@authentication/pages/register/register.component.sass":
/*!*********************************************************************************!*\
  !*** ./src/app/@modules/@authentication/pages/register/register.component.sass ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".limit {\n  max-width: 30em;\n  margin: 3em auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGF1dGhlbnRpY2F0aW9uL3BhZ2VzL3JlZ2lzdGVyL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGF1dGhlbnRpY2F0aW9uXFxwYWdlc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9AbW9kdWxlcy9AYXV0aGVudGljYXRpb24vcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0BhdXRoZW50aWNhdGlvbi9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW1pdFxyXG4gICAgbWF4LXdpZHRoOiAzMGVtXHJcbiAgICBtYXJnaW46IDNlbSBhdXRvXHJcblxyXG4vLyAudGl0bGVcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4vLyAgICAgbWFyZ2luOiAyZW0gMWVtIDBlbSAxZW1cclxuXHJcbi8vIC5qdW1ib3Ryb25cclxuLy8gICAgIHBhZGRpbmc6IDJlbSAhaW1wb3J0YW50IiwiLmxpbWl0IHtcbiAgbWF4LXdpZHRoOiAzMGVtO1xuICBtYXJnaW46IDNlbSBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/@modules/@authentication/pages/register/register.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/@modules/@authentication/pages/register/register.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@modules/@common-dependencies/services/validator.service */ "./src/app/@modules/@common-dependencies/services/validator.service.ts");
/* harmony import */ var _register_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.state */ "./src/app/@modules/@authentication/pages/register/register.state.ts");
/* harmony import */ var _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@modules/@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");







// change component mode 
const queries = Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["getUrlQueries"])();
const mode = queries.mode ? queries.mode : 'empty';
let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, validator, api) {
        this.formBuilder = formBuilder;
        this.validator = validator;
        this.api = api;
        this.st = _register_state__WEBPACK_IMPORTED_MODULE_5__["registerState"];
        // group of validators (for next usage)
        const pwdValidators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
        ];
        // build 'userForm' essence
        this.userForm = this.formBuilder.group({
            'email': [this.st.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), this.validator.mailValidator()]],
            'passwords': this.formBuilder.group({
                'pwd': ['', pwdValidators],
                'confirm': ['', pwdValidators]
            }, {
                validator: this.validator.itemsAreEqual('Passwords', 'pwd', 'confirm')
            })
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // example !!!
            // setInterval(this.logForm.bind(this), 2000)
            // api test
            // log( await this.api.test() )
        });
    }
    logForm() {
        Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])('userData: ', this.userData);
    }
    my_alert(userMsg, devMsg) {
        alert(userMsg);
        alert(devMsg);
    }
    // when user pressed (submit/register)
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const answer = yield this.api.register(this.userData);
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])('answer: ', answer);
                if (answer.err)
                    this.my_alert(answer.msg2, answer.err); // showing of error
                if (answer.success)
                    alert('User was created!'); // showing of error
            }
            catch (error) {
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])('HttpErrorResponse: ', error);
            }
        });
    }
    // gathering the structure 'userData' from 'userForm'
    get userData() {
        return {
            email: this.userForm.controls.email.value,
            password: this.userForm.controls.passwords.controls.pwd.value,
            password2: this.userForm.controls.passwords.controls.confirm.value
        };
    }
    // for elements of form 
    get email() { return this.userForm.get('email'); }
    get passwords() { return this.userForm.get('passwords'); }
    get pwd() { return this.userForm.get('passwords.pwd'); }
    get confirm() { return this.userForm.get('passwords.confirm'); }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_4__["ValidatorService"] },
    { type: _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@authentication/pages/register/register.component.html"),
        styles: [mode == 'custom'
                ? __webpack_require__(/*! ./register.component-alternative.sass */ "./src/app/@modules/@authentication/pages/register/register.component-alternative.sass") // <---| not works for (ng build -prod)
                : __webpack_require__(/*! ./register.component.sass */ "./src/app/@modules/@authentication/pages/register/register.component.sass") // <---------------| can be used for (ng build): just for stage of development
            // './register.component-alternative.sass'
        ]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/@modules/@authentication/pages/register/register.state.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@modules/@authentication/pages/register/register.state.ts ***!
  \***************************************************************************/
/*! exports provided: registerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerState", function() { return registerState; });
var registerState = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password1: '',
        password2: '',
        role: 'Guest',
        notes: null
    },
    roles: [
        'Guest',
        'Admin',
        'Owner',
        'Operator'
    ],
    alert: {
        show: true,
        title: 'About',
        body: 'Some wrong or good',
        bodyDev: 'Tech details'
    }
};



/***/ })

}]);
//# sourceMappingURL=modules-authentication-authentication-module-es2015.js.map