function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-developer-guide-developer-guide-module"], {
  /***/
  "./src/app/@modules/@developer-guide/@developer-guide-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/@modules/@developer-guide/@developer-guide-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: DeveloperGuideRoutingModule */

  /***/
  function srcAppModulesDeveloperGuideDeveloperGuideRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeveloperGuideRoutingModule", function () {
      return DeveloperGuideRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_forms_forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/forms/forms.component */
    "./src/app/@modules/@developer-guide/pages/forms/forms.component.ts");
    /* harmony import */


    var _pages_url_queries_url_queries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/url-queries/url-queries.component */
    "./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.ts");
    /* harmony import */


    var _pages_any_any_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/any/any.component */
    "./src/app/@modules/@developer-guide/pages/any/any.component.ts"); // pages


    var routes = [{
      path: 'forms',
      component: _pages_forms_forms_component__WEBPACK_IMPORTED_MODULE_2__["FormsComponent"]
    }, {
      path: 'url-queries',
      component: _pages_url_queries_url_queries_component__WEBPACK_IMPORTED_MODULE_3__["UrlQueriesComponent"]
    }, {
      path: 'any',
      component: _pages_any_any_component__WEBPACK_IMPORTED_MODULE_4__["AnyComponent"]
    }];

    var DeveloperGuideRoutingModule = function DeveloperGuideRoutingModule() {
      _classCallCheck(this, DeveloperGuideRoutingModule);
    };

    DeveloperGuideRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DeveloperGuideRoutingModule
    });
    DeveloperGuideRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DeveloperGuideRoutingModule_Factory(t) {
        return new (t || DeveloperGuideRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeveloperGuideRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeveloperGuideRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@developer-guide/@developer-guide.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/@modules/@developer-guide/@developer-guide.module.ts ***!
    \**********************************************************************/

  /*! exports provided: DeveloperGuideModule */

  /***/
  function srcAppModulesDeveloperGuideDeveloperGuideModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeveloperGuideModule", function () {
      return DeveloperGuideModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _developer_guide_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./@developer-guide-routing.module */
    "./src/app/@modules/@developer-guide/@developer-guide-routing.module.ts");
    /* harmony import */


    var _pages_forms_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/forms/forms.component */
    "./src/app/@modules/@developer-guide/pages/forms/forms.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../@modules/@common-dependencies/services/validator.service */
    "./src/app/@modules/@common-dependencies/services/validator.service.ts");
    /* harmony import */


    var _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../@modules/@common-dependencies/@common-dependencies.module */
    "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts");
    /* harmony import */


    var _pages_url_queries_url_queries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/url-queries/url-queries.component */
    "./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.ts");
    /* harmony import */


    var _pages_any_any_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/any/any.component */
    "./src/app/@modules/@developer-guide/pages/any/any.component.ts"); // import { FormValidatorComponent } from '../../@modules/@common-dependencies/components/general/form-validator/form-validator.component';


    var DeveloperGuideModule = function DeveloperGuideModule() {
      _classCallCheck(this, DeveloperGuideModule);
    };

    DeveloperGuideModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DeveloperGuideModule
    });
    DeveloperGuideModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DeveloperGuideModule_Factory(t) {
        return new (t || DeveloperGuideModule)();
      },
      providers: [_modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _developer_guide_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeveloperGuideRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_6__["CommonDependenciesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeveloperGuideModule, {
        declarations: [_pages_forms_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"], _pages_url_queries_url_queries_component__WEBPACK_IMPORTED_MODULE_7__["UrlQueriesComponent"], _pages_any_any_component__WEBPACK_IMPORTED_MODULE_8__["AnyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _developer_guide_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeveloperGuideRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_6__["CommonDependenciesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeveloperGuideModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_pages_forms_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"], _pages_url_queries_url_queries_component__WEBPACK_IMPORTED_MODULE_7__["UrlQueriesComponent"], _pages_any_any_component__WEBPACK_IMPORTED_MODULE_8__["AnyComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _developer_guide_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeveloperGuideRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_6__["CommonDependenciesModule"]],
          providers: [_modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@developer-guide/pages/any/any.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/@modules/@developer-guide/pages/any/any.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AnyComponent */

  /***/
  function srcAppModulesDeveloperGuidePagesAnyAnyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnyComponent", function () {
      return AnyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AnyComponent =
    /*#__PURE__*/
    function () {
      function AnyComponent() {
        _classCallCheck(this, AnyComponent);
      }

      _createClass(AnyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnyComponent;
    }();

    AnyComponent.ɵfac = function AnyComponent_Factory(t) {
      return new (t || AnyComponent)();
    };

    AnyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnyComponent,
      selectors: [["app-any"]],
      decls: 2,
      vars: 0,
      template: function AnyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "any works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0BkZXZlbG9wZXItZ3VpZGUvcGFnZXMvYW55L2FueS5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-any',
          templateUrl: './any.component.html',
          styleUrls: ['./any.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@developer-guide/pages/forms/forms.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/@modules/@developer-guide/pages/forms/forms.component.ts ***!
    \**************************************************************************/

  /*! exports provided: FormsComponent */

  /***/
  function srcAppModulesDeveloperGuidePagesFormsFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
      return FormsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../my_modules/stuff */
    "./src/app/my_modules/stuff.ts");
    /* harmony import */


    var _individual_example_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./individual-example-state */
    "./src/app/@modules/@developer-guide/pages/forms/individual-example-state.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../@modules/@common-dependencies/services/validator.service */
    "./src/app/@modules/@common-dependencies/services/validator.service.ts");
    /* harmony import */


    var _common_dependencies_components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../@common-dependencies/components/general/form-validator/form-validator.component */
    "./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // import { ApiService } from '../../services/api.service';
    // individual state


    function FormsComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r55.passwords.errors.itemsAreEqual.msg, " ");
      }
    }

    var FormsComponent =
    /*#__PURE__*/
    function () {
      function FormsComponent(formBuilder, route, validator // private api: ApiService
      ) {
        _classCallCheck(this, FormsComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.validator = validator;
        this.st = _individual_example_state__WEBPACK_IMPORTED_MODULE_3__["individualExampleState"];
        var pwdValidators = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)];
        this.userForm = this.formBuilder.group({
          'email': [this.st.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), this.validator.mailValidator()]],
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

      _createClass(FormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // example !!!
          setInterval(this.logForm.bind(this), 2000); // example

          var mode = this.route.snapshot.queryParams["mode"];
          Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"])(mode); // example

          this.route.queryParams.subscribe(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"]);
        }
      }, {
        key: "logForm",
        value: function logForm() {
          var userData = {
            email: this.userForm.controls.email.value,
            password1: this.userForm.controls.passwords.controls.pwd.value,
            password2: this.userForm.controls.passwords.controls.confirm.value
          };
          Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"])('0', userData);
          Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"])('0', this.userForm);
          Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"])('1', this.userForm.controls.passwords.errors); // .................... 'it'.errors -> {itemsAreEqual: msg: {"Passwords are not equal"}}

          Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"])('3', this.userForm.controls.passwords.controls.confirm.errors); // ... 'it'.errors -> {minlength: {…}}
        }
      }, {
        key: "email",
        get: function get() {
          return this.userForm.get('email');
        }
      }, {
        key: "passwords",
        get: function get() {
          return this.userForm.get('passwords');
        }
      }, {
        key: "pwd",
        get: function get() {
          return this.userForm.get('passwords.pwd');
        }
      }, {
        key: "confirm",
        get: function get() {
          return this.userForm.get('passwords.confirm');
        }
      }]);

      return FormsComponent;
    }();

    FormsComponent.ɵfac = function FormsComponent_Factory(t) {
      return new (t || FormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorService"]));
    };

    FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsComponent,
      selectors: [["app-forms"]],
      decls: 89,
      vars: 5,
      consts: [[1, "jumbotron", "limit"], [1, "title"], [3, "formGroup"], [1, "form-group"], ["for", "1"], ["formControlName", "email", "id", "1", "type", "email", "placeholder", "Enter email", 1, "form-control"], [1, "form-text", "text-muted"], [3, "it"], ["formGroupName", "passwords"], ["for", "2"], ["formControlName", "pwd", "id", "2", "type", "password", "placeholder", "Password", 1, "form-control"], ["for", "3"], ["formControlName", "confirm", "id", "3", "type", "password", "placeholder", "Confirm Password", 1, "form-control", "input-lg"], ["class", "alert alert-danger", 4, "ngIf"], [1, "mdi", "mdi-file-document-box-check"], ["href", "", 1, "alert-link"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", "checked", "", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], ["type", "submit", 1, "btn", "btn-primary"], [1, "limit"], [1, "lead"], [1, "my-4"], ["disabled", ""], ["for", "disabledInput", 1, "control-label"], ["id", "disabledInput", "type", "text", "placeholder", "Disabled input here...", "disabled", "", 1, "form-control"], ["for", "readOnlyInput", 1, "control-label"], ["id", "readOnlyInput", "type", "text", "placeholder", "Readonly input here\u2026", "readonly", "", 1, "form-control"], [1, "form-group", "has-success"], ["for", "inputSuccess1", 1, "form-control-label"], ["type", "text", "value", "correct value", "id", "inputValid", 1, "form-control", "is-valid"], [1, "valid-feedback"], [1, "form-group", "has-danger"], ["for", "inputDanger1", 1, "form-control-label"], ["type", "text", "value", "wrong value", "id", "inputInvalid", 1, "form-control", "is-invalid"], [1, "invalid-feedback"], ["for", "inputLarge", 1, "col-form-label", "col-form-label-lg"], ["type", "text", "placeholder", ".form-control-lg", "id", "inputLarge", 1, "form-control", "form-control-lg"], ["for", "inputDefault", 1, "col-form-label"], ["type", "text", "placeholder", "Default input", "id", "inputDefault", 1, "form-control"], ["for", "inputSmall", 1, "col-form-label", "col-form-label-sm"], ["type", "text", "placeholder", ".form-control-sm", "id", "inputSmall", 1, "form-control", "form-control-sm"], [1, "control-label"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "aria-label", "Amount (to the nearest dollar)", 1, "form-control"], [1, "input-group-append"], [1, "alert", "alert-danger"]],
      template: function FormsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "We'll never share your email with anyone else.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-form-validator", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fieldset", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-form-validator", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password confirmation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password must be at 6 to 20 characters long.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-form-validator", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FormsComponent_div_24_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Conditions Document");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "I agree with conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "It uses utility classes for typography and spacing to space content out within the larger container.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "fieldset", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Disabled input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Readonly input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Valid input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Success! You've done it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Invalid input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Sorry, that username's taken. Try another?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Large input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Default input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Small input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Input addons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ".00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("it", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("it", ctx.pwd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("it", ctx.confirm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.confirm.pristine && ctx.passwords.errors && ctx.passwords.errors.itemsAreEqual);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _common_dependencies_components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_6__["FormValidatorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: [".limit[_ngcontent-%COMP%] {\n  max-width: 30em;\n  margin: 3em auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGRldmVsb3Blci1ndWlkZS9wYWdlcy9mb3Jtcy9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBkZXZlbG9wZXItZ3VpZGVcXHBhZ2VzXFxmb3Jtc1xcZm9ybXMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0BkZXZlbG9wZXItZ3VpZGUvcGFnZXMvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0BkZXZlbG9wZXItZ3VpZGUvcGFnZXMvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGltaXRcclxuICAgIG1heC13aWR0aDogMzBlbVxyXG4gICAgbWFyZ2luOiAzZW0gYXV0byIsIi5saW1pdCB7XG4gIG1heC13aWR0aDogMzBlbTtcbiAgbWFyZ2luOiAzZW0gYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms',
          templateUrl: './forms.component.html',
          styleUrls: ['./forms.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@developer-guide/pages/forms/individual-example-state.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/@modules/@developer-guide/pages/forms/individual-example-state.ts ***!
    \***********************************************************************************/

  /*! exports provided: individualExampleState */

  /***/
  function srcAppModulesDeveloperGuidePagesFormsIndividualExampleStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "individualExampleState", function () {
      return individualExampleState;
    });

    var individualExampleState = {
      user: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password1: '',
        password2: '',
        role: 'Guest',
        notes: null
      },
      roles: ['Guest', 'Admin', 'Owner', 'Operator']
    };
    /***/
  },

  /***/
  "./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/@modules/@developer-guide/pages/url-queries/url-queries.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: UrlQueriesComponent */

  /***/
  function srcAppModulesDeveloperGuidePagesUrlQueriesUrlQueriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UrlQueriesComponent", function () {
      return UrlQueriesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../my_modules/stuff */
    "./src/app/my_modules/stuff.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/auth/register"];
    };

    var _c1 = function _c1() {
      return {
        mode: "default"
      };
    };

    var _c2 = function _c2() {
      return {
        mode: "custom"
      };
    }; // change component mode 


    var queries = Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["getUrlQueries"])();
    var mode = queries.mode ? queries.mode : 'empty';

    var UrlQueriesComponent =
    /*#__PURE__*/
    function () {
      function UrlQueriesComponent(route) {
        _classCallCheck(this, UrlQueriesComponent);

        this.route = route;
      }

      _createClass(UrlQueriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // 1
          var mode = this.route.snapshot.queryParams["mode"];
          Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])(mode); // 2

          this.route.queryParams.subscribe(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"]);
        }
      }]);

      return UrlQueriesComponent;
    }();

    UrlQueriesComponent.ɵfac = function UrlQueriesComponent_Factory(t) {
      return new (t || UrlQueriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    UrlQueriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UrlQueriesComponent,
      selectors: [["app-url-queries"]],
      decls: 14,
      vars: 8,
      consts: [[3, "routerLink", "queryParams"], ["href", "/auth/register?mode=default"], ["href", "/auth/register?mode=custom"]],
      template: function UrlQueriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Exaples: working with Queries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Mode: \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Custom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Custom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0BkZXZlbG9wZXItZ3VpZGUvcGFnZXMvdXJsLXF1ZXJpZXMvdXJsLXF1ZXJpZXMuY29tcG9uZW50LnNhc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlQueriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-url-queries',
          templateUrl: './url-queries.component.html',
          styleUrls: [// mode == 'custom'
          // ? require('./url-queries.component-alternative.sass') // <---| not works for (ng build -prod)
          // : require('./url-queries.component.sass') // <---------------| can be used for (ng build): just for stage of development
          './url-queries.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-developer-guide-developer-guide-module-es5.js.map