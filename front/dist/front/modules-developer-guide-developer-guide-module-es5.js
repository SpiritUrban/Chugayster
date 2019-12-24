(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-developer-guide-developer-guide-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@developer-guide/pages/any/any.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@developer-guide/pages/any/any.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>any works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@developer-guide/pages/forms/forms.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@developer-guide/pages/forms/forms.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron limit\">\n\n    <h3 class=\"title\">Registration</h3>\n  \n    <!-- Register Form -->\n    <form [formGroup]=\"userForm\">\n  \n      <!-- email -->\n      <div class=\"form-group\">\n        <label for=\"1\">Email address</label>\n        <input formControlName=\"email\" id=\"1\" class=\"form-control\" type=\"email\" placeholder=\"Enter email\">\n        <small class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n        <!-- validation -->\n        <app-form-validator [it]=\"email\"></app-form-validator>\n      </div>\n  \n      <!-- both -->\n      <fieldset formGroupName=\"passwords\">\n  \n        <!-- password -->\n        <div class=\"form-group\">\n          <label for=\"2\">Password</label>\n          <input formControlName=\"pwd\" id=\"2\" class=\"form-control\" type=\"password\" placeholder=\"Password\">\n          <!-- validation -->\n          <app-form-validator [it]=\"pwd\"></app-form-validator>\n        </div>\n  \n        <!-- confirm password -->\n        <div class=\"form-group\">\n          <label for=\"3\">Password confirmation</label>\n          <input formControlName=\"confirm\" id=\"3\" class=\"form-control input-lg\" type=\"password\"\n            placeholder=\"Confirm Password\">\n          <small class=\"form-text text-muted\">Password must be at 6 to 20 characters long.</small>\n          <!-- validation -->\n          <app-form-validator [it]=\"confirm\"></app-form-validator>\n        </div>\n  \n        <!-- mix validation: confirm, passwords -->\n        <!-- equal -->\n        <div *ngIf=\" !confirm.pristine && passwords.errors && passwords.errors.itemsAreEqual\" class=\"alert alert-danger\">\n          {{passwords.errors.itemsAreEqual.msg}}\n        </div>\n  \n      </fieldset>\n  \n      <div class=\"form-group\">\n        <i class=\"mdi mdi-file-document-box-check\"></i>\n        <a class=\"alert-link\" href=\"\"> Conditions Document</a>\n      </div>\n  \n      <div class=\"form-group \">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" checked=\"\">\n          <label class=\"custom-control-label\" for=\"customCheck1\">I agree with conditions</label>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n  \n  </div>\n  \n\n\n  <!-- text -->\n  <div class=\"limit\">\n    <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured\n      content or information.</p>\n    <hr class=\"my-4\">\n    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n  </div>\n\n\n\n<!-- other fields -->\n<div class=\"jumbotron limit\">\n\n  <div class=\"form-group\">\n    <fieldset disabled=\"\">\n      <label class=\"control-label\" for=\"disabledInput\">Disabled input</label>\n      <input class=\"form-control\" id=\"disabledInput\" type=\"text\" placeholder=\"Disabled input here...\" disabled=\"\">\n    </fieldset>\n  </div>\n\n  <div class=\"form-group\">\n    <fieldset>\n      <label class=\"control-label\" for=\"readOnlyInput\">Readonly input</label>\n      <input class=\"form-control\" id=\"readOnlyInput\" type=\"text\" placeholder=\"Readonly input here…\" readonly=\"\">\n    </fieldset>\n  </div>\n\n  <div class=\"form-group has-success\">\n    <label class=\"form-control-label\" for=\"inputSuccess1\">Valid input</label>\n    <input type=\"text\" value=\"correct value\" class=\"form-control is-valid\" id=\"inputValid\">\n    <div class=\"valid-feedback\">Success! You've done it.</div>\n  </div>\n\n  <div class=\"form-group has-danger\">\n    <label class=\"form-control-label\" for=\"inputDanger1\">Invalid input</label>\n    <input type=\"text\" value=\"wrong value\" class=\"form-control is-invalid\" id=\"inputInvalid\">\n    <div class=\"invalid-feedback\">Sorry, that username's taken. Try another?</div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-form-label col-form-label-lg\" for=\"inputLarge\">Large input</label>\n    <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\".form-control-lg\" id=\"inputLarge\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-form-label\" for=\"inputDefault\">Default input</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Default input\" id=\"inputDefault\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Small input</label>\n    <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\".form-control-sm\" id=\"inputSmall\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"control-label\">Input addons</label>\n    <div class=\"form-group\">\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">$</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\n        <div class=\"input-group-append\">\n          <span class=\"input-group-text\">.00</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Exaples: working with Queries</h1>\n\nMode:\n\n&nbsp; <a [routerLink]=\"['/auth/register']\" [queryParams]=\"{ mode: 'default'}\">Default</a>\n&nbsp; <a [routerLink]=\"['/auth/register']\" [queryParams]=\"{ mode: 'custom'}\">Custom</a>\n\n&nbsp; <a href=\"/auth/register?mode=default\">Default</a>\n&nbsp; <a href=\"/auth/register?mode=custom\">Custom</a>"

/***/ }),

/***/ "./src/app/@modules/@developer-guide/@developer-guide-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@modules/@developer-guide/@developer-guide-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: DeveloperGuideRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperGuideRoutingModule", function() { return DeveloperGuideRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_forms_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/forms/forms.component */ "./src/app/@modules/@developer-guide/pages/forms/forms.component.ts");
/* harmony import */ var _pages_url_queries_url_queries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/url-queries/url-queries.component */ "./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.ts");
/* harmony import */ var _pages_any_any_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/any/any.component */ "./src/app/@modules/@developer-guide/pages/any/any.component.ts");



// pages



var routes = [
    { path: 'forms', component: _pages_forms_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"] },
    { path: 'url-queries', component: _pages_url_queries_url_queries_component__WEBPACK_IMPORTED_MODULE_4__["UrlQueriesComponent"] },
    { path: 'any', component: _pages_any_any_component__WEBPACK_IMPORTED_MODULE_5__["AnyComponent"] },
];
var DeveloperGuideRoutingModule = /** @class */ (function () {
    function DeveloperGuideRoutingModule() {
    }
    DeveloperGuideRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DeveloperGuideRoutingModule);
    return DeveloperGuideRoutingModule;
}());



/***/ }),

/***/ "./src/app/@modules/@developer-guide/@developer-guide.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@modules/@developer-guide/@developer-guide.module.ts ***!
  \**********************************************************************/
/*! exports provided: DeveloperGuideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperGuideModule", function() { return DeveloperGuideModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _developer_guide_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./@developer-guide-routing.module */ "./src/app/@modules/@developer-guide/@developer-guide-routing.module.ts");
/* harmony import */ var _pages_forms_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/forms/forms.component */ "./src/app/@modules/@developer-guide/pages/forms/forms.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@modules/@common-dependencies/services/validator.service */ "./src/app/@modules/@common-dependencies/services/validator.service.ts");
/* harmony import */ var _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@modules/@common-dependencies/@common-dependencies.module */ "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts");
/* harmony import */ var _pages_url_queries_url_queries_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/url-queries/url-queries.component */ "./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.ts");
/* harmony import */ var _pages_any_any_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/any/any.component */ "./src/app/@modules/@developer-guide/pages/any/any.component.ts");







// import { FormValidatorComponent } from '../../@modules/@common-dependencies/components/general/form-validator/form-validator.component';



var DeveloperGuideModule = /** @class */ (function () {
    function DeveloperGuideModule() {
    }
    DeveloperGuideModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_forms_forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"], _pages_url_queries_url_queries_component__WEBPACK_IMPORTED_MODULE_8__["UrlQueriesComponent"], _pages_any_any_component__WEBPACK_IMPORTED_MODULE_9__["AnyComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _developer_guide_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeveloperGuideRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_7__["CommonDependenciesModule"]
            ],
            providers: [_modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorService"]]
        })
    ], DeveloperGuideModule);
    return DeveloperGuideModule;
}());



/***/ }),

/***/ "./src/app/@modules/@developer-guide/pages/any/any.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/@modules/@developer-guide/pages/any/any.component.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0BkZXZlbG9wZXItZ3VpZGUvcGFnZXMvYW55L2FueS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/@modules/@developer-guide/pages/any/any.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@modules/@developer-guide/pages/any/any.component.ts ***!
  \**********************************************************************/
/*! exports provided: AnyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnyComponent", function() { return AnyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnyComponent = /** @class */ (function () {
    function AnyComponent() {
    }
    AnyComponent.prototype.ngOnInit = function () {
    };
    AnyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-any',
            template: __webpack_require__(/*! raw-loader!./any.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@developer-guide/pages/any/any.component.html"),
            styles: [__webpack_require__(/*! ./any.component.sass */ "./src/app/@modules/@developer-guide/pages/any/any.component.sass")]
        })
    ], AnyComponent);
    return AnyComponent;
}());



/***/ }),

/***/ "./src/app/@modules/@developer-guide/pages/forms/forms.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/@modules/@developer-guide/pages/forms/forms.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".limit {\n  max-width: 30em;\n  margin: 3em auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGRldmVsb3Blci1ndWlkZS9wYWdlcy9mb3Jtcy9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBkZXZlbG9wZXItZ3VpZGVcXHBhZ2VzXFxmb3Jtc1xcZm9ybXMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0BkZXZlbG9wZXItZ3VpZGUvcGFnZXMvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0BkZXZlbG9wZXItZ3VpZGUvcGFnZXMvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGltaXRcclxuICAgIG1heC13aWR0aDogMzBlbVxyXG4gICAgbWFyZ2luOiAzZW0gYXV0byIsIi5saW1pdCB7XG4gIG1heC13aWR0aDogMzBlbTtcbiAgbWFyZ2luOiAzZW0gYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/@modules/@developer-guide/pages/forms/forms.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/@modules/@developer-guide/pages/forms/forms.component.ts ***!
  \**************************************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@modules/@common-dependencies/services/validator.service */ "./src/app/@modules/@common-dependencies/services/validator.service.ts");
/* harmony import */ var _individual_example_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./individual-example-state */ "./src/app/@modules/@developer-guide/pages/forms/individual-example-state.ts");




// import { ApiService } from '../../services/api.service';


 // individual state
var FormsComponent = /** @class */ (function () {
    function FormsComponent(formBuilder, route, validator
    // private api: ApiService
    ) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.validator = validator;
        this.st = _individual_example_state__WEBPACK_IMPORTED_MODULE_6__["individualExampleState"];
        var pwdValidators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20),
        ];
        this.userForm = this.formBuilder.group({
            'email': [this.st.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), this.validator.mailValidator()]],
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
    FormsComponent.prototype.ngOnInit = function () {
        // example !!!
        setInterval(this.logForm.bind(this), 2000);
        // example
        var mode = this.route.snapshot.queryParams["mode"];
        Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_4__["log"])(mode);
        // example
        this.route.queryParams.subscribe(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_4__["log"]);
    };
    FormsComponent.prototype.logForm = function () {
        var userData = {
            email: this.userForm.controls.email.value,
            password1: this.userForm.controls.passwords.controls.pwd.value,
            password2: this.userForm.controls.passwords.controls.confirm.value
        };
        Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_4__["log"])('0', userData);
        Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_4__["log"])('0', this.userForm);
        Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_4__["log"])('1', this.userForm.controls.passwords.errors); // .................... 'it'.errors -> {itemsAreEqual: msg: {"Passwords are not equal"}}
        Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_4__["log"])('3', this.userForm.controls.passwords.controls.confirm.errors); // ... 'it'.errors -> {minlength: {…}}
    };
    Object.defineProperty(FormsComponent.prototype, "email", {
        get: function () { return this.userForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormsComponent.prototype, "passwords", {
        get: function () { return this.userForm.get('passwords'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormsComponent.prototype, "pwd", {
        get: function () { return this.userForm.get('passwords.pwd'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormsComponent.prototype, "confirm", {
        get: function () { return this.userForm.get('passwords.confirm'); },
        enumerable: true,
        configurable: true
    });
    FormsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorService"] }
    ]; };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@developer-guide/pages/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.sass */ "./src/app/@modules/@developer-guide/pages/forms/forms.component.sass")]
        })
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/@modules/@developer-guide/pages/forms/individual-example-state.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/@modules/@developer-guide/pages/forms/individual-example-state.ts ***!
  \***********************************************************************************/
/*! exports provided: individualExampleState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "individualExampleState", function() { return individualExampleState; });
var individualExampleState = {
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
    ]
};



/***/ }),

/***/ "./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.sass":
/*!****************************************************************************************!*\
  !*** ./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.sass ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0BkZXZlbG9wZXItZ3VpZGUvcGFnZXMvdXJsLXF1ZXJpZXMvdXJsLXF1ZXJpZXMuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UrlQueriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlQueriesComponent", function() { return UrlQueriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../my_modules/stuff */ "./src/app/my_modules/stuff.ts");




// change component mode 
var queries = Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["getUrlQueries"])();
var mode = queries.mode ? queries.mode : 'empty';
var UrlQueriesComponent = /** @class */ (function () {
    function UrlQueriesComponent(route) {
        this.route = route;
    }
    UrlQueriesComponent.prototype.ngOnInit = function () {
        // 1
        var mode = this.route.snapshot.queryParams["mode"];
        Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])(mode);
        // 2
        this.route.queryParams.subscribe(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"]);
    };
    UrlQueriesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    UrlQueriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-url-queries',
            template: __webpack_require__(/*! raw-loader!./url-queries.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.html"),
            styles: [__webpack_require__(/*! ./url-queries.component.sass */ "./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.sass")]
        })
    ], UrlQueriesComponent);
    return UrlQueriesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-developer-guide-developer-guide-module-es5.js.map