function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-authentication-authentication-module"], {
  /***/
  "./src/app/@modules/@authentication/@authentication-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/@modules/@authentication/@authentication-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: AuthenticationRoutingModule */

  /***/
  function srcAppModulesAuthenticationAuthenticationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
      return AuthenticationRoutingModule;
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


    var _pages_help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/help/help.component */
    "./src/app/@modules/@authentication/pages/help/help.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/@modules/@authentication/pages/login/login.component.ts");
    /* harmony import */


    var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/register/register.component */
    "./src/app/@modules/@authentication/pages/register/register.component.ts");
    /* harmony import */


    var _pages_conditions_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/conditions/conditions.component */
    "./src/app/@modules/@authentication/pages/conditions/conditions.component.ts");
    /* harmony import */


    var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/profile/profile.component */
    "./src/app/@modules/@authentication/pages/profile/profile.component.ts"); // pages


    var routes = [{
      path: 'help',
      component: _pages_help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"]
    }, {
      path: 'login',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: 'conditions',
      component: _pages_conditions_conditions_component__WEBPACK_IMPORTED_MODULE_5__["ConditionsComponent"]
    }, {
      path: 'profile',
      component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]
    }];

    var AuthenticationRoutingModule = function AuthenticationRoutingModule() {
      _classCallCheck(this, AuthenticationRoutingModule);
    };

    AuthenticationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthenticationRoutingModule
    });
    AuthenticationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthenticationRoutingModule_Factory(t) {
        return new (t || AuthenticationRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationRoutingModule, [{
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
  "./src/app/@modules/@authentication/@authentication.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/@modules/@authentication/@authentication.module.ts ***!
    \********************************************************************/

  /*! exports provided: AuthenticationModule */

  /***/
  function srcAppModulesAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
      return AuthenticationModule;
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


    var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./@authentication-routing.module */
    "./src/app/@modules/@authentication/@authentication-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../@modules/@common-dependencies/@common-dependencies.module */
    "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts");
    /* harmony import */


    var _modules_js_clan_js_clan_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../@modules/@js-clan/js-clan.module */
    "./src/app/@modules/@js-clan/js-clan.module.ts");
    /* harmony import */


    var _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../@modules/@common-dependencies/services/validator.service */
    "./src/app/@modules/@common-dependencies/services/validator.service.ts");
    /* harmony import */


    var _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../@modules/@common-dependencies/services/api.service */
    "./src/app/@modules/@common-dependencies/services/api.service.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/@modules/@authentication/pages/login/login.component.ts");
    /* harmony import */


    var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/register/register.component */
    "./src/app/@modules/@authentication/pages/register/register.component.ts");
    /* harmony import */


    var _pages_help_help_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/help/help.component */
    "./src/app/@modules/@authentication/pages/help/help.component.ts");
    /* harmony import */


    var _pages_conditions_conditions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/conditions/conditions.component */
    "./src/app/@modules/@authentication/pages/conditions/conditions.component.ts");
    /* harmony import */


    var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/profile/profile.component */
    "./src/app/@modules/@authentication/pages/profile/profile.component.ts"); // services
    // pages
    // import { ClanFooterComponent } from './components/general/clan-footer/clan-footer.component';


    var AuthenticationModule = function AuthenticationModule() {
      _classCallCheck(this, AuthenticationModule);
    };

    AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthenticationModule
    });
    AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthenticationModule_Factory(t) {
        return new (t || AuthenticationModule)();
      },
      providers: [_modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorService"], _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_4__["CommonDependenciesModule"], _modules_js_clan_js_clan_module__WEBPACK_IMPORTED_MODULE_5__["JsClanModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, {
        declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _pages_help_help_component__WEBPACK_IMPORTED_MODULE_10__["HelpComponent"], _pages_conditions_conditions_component__WEBPACK_IMPORTED_MODULE_11__["ConditionsComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_4__["CommonDependenciesModule"], _modules_js_clan_js_clan_module__WEBPACK_IMPORTED_MODULE_5__["JsClanModule"]],
        exports: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _pages_help_help_component__WEBPACK_IMPORTED_MODULE_10__["HelpComponent"], _pages_conditions_conditions_component__WEBPACK_IMPORTED_MODULE_11__["ConditionsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _pages_help_help_component__WEBPACK_IMPORTED_MODULE_10__["HelpComponent"], _pages_conditions_conditions_component__WEBPACK_IMPORTED_MODULE_11__["ConditionsComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_4__["CommonDependenciesModule"], _modules_js_clan_js_clan_module__WEBPACK_IMPORTED_MODULE_5__["JsClanModule"]],
          providers: [_modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorService"], _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]],
          exports: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _pages_help_help_component__WEBPACK_IMPORTED_MODULE_10__["HelpComponent"], _pages_conditions_conditions_component__WEBPACK_IMPORTED_MODULE_11__["ConditionsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@authentication/pages/conditions/conditions.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/@modules/@authentication/pages/conditions/conditions.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ConditionsComponent */

  /***/
  function srcAppModulesAuthenticationPagesConditionsConditionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConditionsComponent", function () {
      return ConditionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _js_clan_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../@js-clan/components/general/nav/nav.component */
    "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
    /* harmony import */


    var _js_clan_components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../@js-clan/components/general/clan-footer/clan-footer.component */
    "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");

    var ConditionsComponent =
    /*#__PURE__*/
    function () {
      function ConditionsComponent() {
        _classCallCheck(this, ConditionsComponent);
      }

      _createClass(ConditionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConditionsComponent;
    }();

    ConditionsComponent.ɵfac = function ConditionsComponent_Factory(t) {
      return new (t || ConditionsComponent)();
    };

    ConditionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConditionsComponent,
      selectors: [["app-conditions"]],
      decls: 16,
      vars: 0,
      consts: [[1, "container", "conditions-content"], [1, "title"], [1, "row"]],
      template: function ConditionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0417\u0430\u0445\u0438\u0441\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n            \u042F \u0434\u043E\u0431\u0440\u043E\u0432\u0456\u043B\u044C\u043D\u043E \u043D\u0430\u0434\u0430\u044E \u0437\u0433\u043E\u0434\u0443 \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u043C\u043E\u0457\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0417\u0430\u043A\u043E\u043D\u0443 \u0423\u043A\u0440\u0430\u0457\u043D\u0438 \"\u041F\u0440\u043E \u0437\u0430\u0445\u0438\u0441\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445\".\n             \n            \n            \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0456 \u0437\u0430\u0445\u0438\u0441\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0443 \u0431\u0430\u0437\u0430\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u0435\u043C \u044F\u043A\u0438\u0445 \u0454 \u043F\u0440\u043E\u0434\u0430\u0432\u0435\u0446\u044C\n            \n            \n            \u0417\u043C\u0456\u0441\u0442\n            \n            1. \u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0456 \u043F\u043E\u043D\u044F\u0442\u0442\u044F \u0442\u0430 \u0441\u0444\u0435\u0440\u0430 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F.\n            \n            2. \u041F\u0435\u0440\u0435\u043B\u0456\u043A \u0431\u0430\u0437 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            3. \u041C\u0435\u0442\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            4. \u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445: \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0437\u0433\u043E\u0434\u0438, \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u043F\u0440\u0430\u0432\u0430 \u0442\u0430 \u0434\u0456\u0457 \u0437 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u0434\u0430\u043D\u0438\u043C\u0438 \u0441\u0443\u0431'\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            5. \u041C\u0456\u0441\u0446\u0435\u0437\u043D\u0430\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            6. \u0423\u043C\u043E\u0432\u0438 \u0440\u043E\u0437\u043A\u0440\u0438\u0442\u0442\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u043F\u0440\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u0442\u0440\u0435\u0442\u0456\u043C \u043E\u0441\u043E\u0431\u0430\u043C.\n            \n            7. \u0417\u0430\u0445\u0438\u0441\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445: \u0441\u043F\u043E\u0441\u043E\u0431\u0438 \u0437\u0430\u0445\u0438\u0441\u0442\u0443, \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0430 \u043E\u0441\u043E\u0431\u0430, \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438, \u044F\u043A\u0456 \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u044E\u0442\u044C \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0442\u0430/\u0430\u0431\u043E \u043C\u0430\u044E\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0443 \u0437\u0432\u2019\u044F\u0437\u043A\u0443 \u0437 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F\u043C \u0441\u0432\u043E\u0457\u0445 \u0441\u043B\u0443\u0436\u0431\u043E\u0432\u0438\u0445 \u043E\u0431\u043E\u0432\u2019\u044F\u0437\u043A\u0456\u0432, \u0441\u0442\u0440\u043E\u043A \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            8. \u041F\u0440\u0430\u0432\u0430 \u0441\u0443\u0431\u2019\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n             \n            \n            1. \u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0456 \u043F\u043E\u043D\u044F\u0442\u0442\u044F \u0442\u0430 \u0441\u0444\u0435\u0440\u0430 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F\n            \n             \n            \n            1.1. \u0412\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0442\u0435\u0440\u043C\u0456\u043D\u0456\u0432:\n            \n            \u0431\u0430\u0437\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 - \u0456\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0430 \u0441\u0443\u043A\u0443\u043F\u043D\u0456\u0441\u0442\u044C \u0443\u043F\u043E\u0440\u044F\u0434\u043A\u043E\u0432\u0430\u043D\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0456\u0439 \u0444\u043E\u0440\u043C\u0456 \u0442\u0430/\u0430\u0431\u043E \u0443 \u0444\u043E\u0440\u043C\u0456 \u043A\u0430\u0440\u0442\u043E\u0442\u0435\u043A \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445;\n            \n            \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0430 \u043E\u0441\u043E\u0431\u0430 \u2013 \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u043E\u0441\u043E\u0431\u0430, \u044F\u043A\u0430 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u043E\u0432\u0443\u0454 \u0440\u043E\u0431\u043E\u0442\u0443, \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u0443 \u0456\u0437 \u0437\u0430\u0445\u0438\u0441\u0442\u043E\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043F\u0440\u0438 \u0457\u0445 \u043E\u0431\u0440\u043E\u0431\u0446\u0456, \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0437\u0430\u043A\u043E\u043D\u0443;\n            \n            \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u0435\u0446\u044C \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 - \u0444\u0456\u0437\u0438\u0447\u043D\u0430 \u0430\u0431\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0430 \u043E\u0441\u043E\u0431\u0430, \u044F\u043A\u0456\u0439 \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u0430\u0431\u043E \u0437\u0430 \u0437\u0433\u043E\u0434\u043E\u044E \u0441\u0443\u0431'\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043D\u0430\u0434\u0430\u043D\u043E \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0446\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u044F\u043A\u0430 \u0437\u0430\u0442\u0432\u0435\u0440\u0434\u0436\u0443\u0454 \u043C\u0435\u0442\u0443 \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0443 \u0446\u0456\u0439 \u0431\u0430\u0437\u0456 \u0434\u0430\u043D\u0438\u0445, \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u044E\u0454 \u0441\u043A\u043B\u0430\u0434 \u0446\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0442\u0430 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438 \u0457\u0445 \u043E\u0431\u0440\u043E\u0431\u043A\u0438, \u044F\u043A\u0449\u043E \u0456\u043D\u0448\u0435 \u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u043C;\n            \n            \u0414\u0435\u0440\u0436\u0430\u0432\u043D\u0438\u0439 \u0440\u0435\u0454\u0441\u0442\u0440 \u0431\u0430\u0437 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 - \u0454\u0434\u0438\u043D\u0430 \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0437\u0431\u043E\u0440\u0443, \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0435\u043D\u043D\u044F \u0442\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u0432\u0456\u0434\u043E\u043C\u043E\u0441\u0442\u0435\u0439 \u043F\u0440\u043E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0456 \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445;\n            \n            \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u043E\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u0434\u0436\u0435\u0440\u0435\u043B\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u2013 \u0434\u043E\u0432\u0456\u0434\u043D\u0438\u043A\u0438, \u0430\u0434\u0440\u0435\u0441\u043D\u0456 \u043A\u043D\u0438\u0433\u0438, \u0440\u0435\u0454\u0441\u0442\u0440\u0438, \u0441\u043F\u0438\u0441\u043A\u0438, \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0438, \u0456\u043D\u0448\u0456 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0438\u0437\u043E\u0432\u0430\u043D\u0456 \u0437\u0431\u0456\u0440\u043D\u0438\u043A\u0438 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457, \u044F\u043A\u0456 \u043C\u0456\u0441\u0442\u044F\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456, \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u0456 \u0442\u0430 \u043E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u0456 \u0437 \u0432\u0456\u0434\u043E\u043C\u0430 \u0441\u0443\u0431\u2019\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            \u041D\u0435 \u0432\u0432\u0430\u0436\u0430\u044E\u0442\u044C\u0441\u044F \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u043E\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u043C\u0438 \u0434\u0436\u0435\u0440\u0435\u043B\u0430\u043C\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0456 \u043C\u0435\u0440\u0435\u0436\u0456 \u0442\u0430 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0440\u0435\u0441\u0443\u0440\u0441\u0438, \u0432 \u044F\u043A\u0438\u0445 \u0441\u0443\u0431\u2019\u0454\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0437\u0430\u043B\u0438\u0448\u0430\u044E\u0442\u044C \u0441\u0432\u043E\u0457 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 (\u043E\u043A\u0440\u0456\u043C \u0432\u0438\u043F\u0430\u0434\u043A\u0456\u0432, \u043A\u043E\u043B\u0438 \u0441\u0443\u0431\u2019\u0454\u043A\u0442\u043E\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043F\u0440\u044F\u043C\u043E \u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043E, \u0449\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u0456 \u0437 \u043C\u0435\u0442\u043E\u044E \u0457\u0445 \u0432\u0456\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u043D\u044F \u0442\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F);\n            \n            \u0437\u0433\u043E\u0434\u0430 \u0441\u0443\u0431'\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 - \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432\u0430\u043D\u0435, \u0434\u043E\u0431\u0440\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u0432\u043E\u043B\u0435\u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u0444\u0456\u0437\u0438\u0447\u043D\u043E\u0457 \u043E\u0441\u043E\u0431\u0438 \u0449\u043E\u0434\u043E \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0434\u043E\u0437\u0432\u043E\u043B\u0443 \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0457\u0457 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0441\u0444\u043E\u0440\u043C\u0443\u043B\u044C\u043E\u0432\u0430\u043D\u043E\u0457 \u043C\u0435\u0442\u0438 \u0457\u0445 \u043E\u0431\u0440\u043E\u0431\u043A\u0438;\n            \n            \u0437\u043D\u0435\u043E\u0441\u043E\u0431\u043B\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 - \u0432\u0438\u043B\u0443\u0447\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u043E\u043C\u043E\u0441\u0442\u0435\u0439, \u044F\u043A\u0456 \u0434\u0430\u044E\u0442\u044C \u0437\u043C\u043E\u0433\u0443 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0443\u0432\u0430\u0442\u0438 \u043E\u0441\u043E\u0431\u0443;\n            \n            \u043E\u0431\u0440\u043E\u0431\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 - \u0431\u0443\u0434\u044C-\u044F\u043A\u0430 \u0434\u0456\u044F \u0430\u0431\u043E \u0441\u0443\u043A\u0443\u043F\u043D\u0456\u0441\u0442\u044C \u0434\u0456\u0439, \u0437\u0434\u0456\u0439\u0441\u043D\u0435\u043D\u0438\u0445 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0430\u0431\u043E \u0447\u0430\u0441\u0442\u043A\u043E\u0432\u043E \u0432 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u0456\u0439 (\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u043E\u0432\u0430\u043D\u0456\u0439) \u0441\u0438\u0441\u0442\u0435\u043C\u0456 \u0442\u0430/\u0430\u0431\u043E \u0432 \u043A\u0430\u0440\u0442\u043E\u0442\u0435\u043A\u0430\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u044F\u043A\u0456 \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u0456 \u0437\u0456 \u0437\u0431\u0438\u0440\u0430\u043D\u043D\u044F\u043C, \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0454\u044E, \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0435\u043D\u043D\u044F\u043C, \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F\u043C, \u0430\u0434\u0430\u043F\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u043C, \u0437\u043C\u0456\u043D\u043E\u044E, \u043F\u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F\u043C, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u0456 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u043D\u044F\u043C (\u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0435\u043D\u043D\u044F\u043C, \u0440\u0435\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0454\u044E, \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435\u044E), \u0437\u043D\u0435\u043E\u0441\u043E\u0431\u043B\u0435\u043D\u043D\u044F\u043C, \u0437\u043D\u0438\u0449\u0435\u043D\u043D\u044F\u043C \u0432\u0456\u0434\u043E\u043C\u043E\u0441\u0442\u0435\u0439 \u043F\u0440\u043E \u0444\u0456\u0437\u0438\u0447\u043D\u0443 \u043E\u0441\u043E\u0431\u0443;\n            \n            \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 - \u0432\u0456\u0434\u043E\u043C\u043E\u0441\u0442\u0456 \u0447\u0438 \u0441\u0443\u043A\u0443\u043F\u043D\u0456\u0441\u0442\u044C \u0432\u0456\u0434\u043E\u043C\u043E\u0441\u0442\u0435\u0439 \u043F\u0440\u043E \u0444\u0456\u0437\u0438\u0447\u043D\u0443 \u043E\u0441\u043E\u0431\u0443, \u044F\u043A\u0430 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u043E\u0432\u0430\u043D\u0430 \u0430\u0431\u043E \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u043E\u0432\u0430\u043D\u0430;\n            \n            \u0440\u043E\u0437\u043F\u043E\u0440\u044F\u0434\u043D\u0438\u043A \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 - \u0444\u0456\u0437\u0438\u0447\u043D\u0430 \u0447\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0430 \u043E\u0441\u043E\u0431\u0430, \u044F\u043A\u0456\u0439 \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u0435\u043C \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0430\u0431\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u043D\u0430\u0434\u0430\u043D\u043E \u043F\u0440\u0430\u0432\u043E \u043E\u0431\u0440\u043E\u0431\u043B\u044F\u0442\u0438 \u0446\u0456 \u0434\u0430\u043D\u0456.\n            \n            \u041D\u0435 \u0454 \u0440\u043E\u0437\u043F\u043E\u0440\u044F\u0434\u043D\u0438\u043A\u043E\u043C \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043E\u0441\u043E\u0431\u0430, \u044F\u043A\u0456\u0439 \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u0435\u043C \u0442\u0430/\u0430\u0431\u043E \u0440\u043E\u0437\u043F\u043E\u0440\u044F\u0434\u043D\u0438\u043A\u043E\u043C \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0434\u043E\u0440\u0443\u0447\u0435\u043D\u043E \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0432\u0430\u0442\u0438 \u0440\u043E\u0431\u043E\u0442\u0438 \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u043E\u0433\u043E \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0443 \u0437 \u0431\u0430\u0437\u043E\u044E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0431\u0435\u0437 \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u043E \u0437\u043C\u0456\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445;\n            \n            \u0441\u0443\u0431'\u0454\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 - \u0444\u0456\u0437\u0438\u0447\u043D\u0430 \u043E\u0441\u043E\u0431\u0430, \u0441\u0442\u043E\u0441\u043E\u0432\u043D\u043E \u044F\u043A\u043E\u0457 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0437\u0430\u043A\u043E\u043D\u0443 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u043E\u0431\u0440\u043E\u0431\u043A\u0430 \u0457\u0457 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445;\n            \n            \u0442\u0440\u0435\u0442\u044F \u043E\u0441\u043E\u0431\u0430 - \u0431\u0443\u0434\u044C-\u044F\u043A\u0430 \u043E\u0441\u043E\u0431\u0430, \u0437\u0430 \u0432\u0438\u043D\u044F\u0442\u043A\u043E\u043C \u0441\u0443\u0431'\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u044F \u0447\u0438 \u0440\u043E\u0437\u043F\u043E\u0440\u044F\u0434\u043D\u0438\u043A\u0430 \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0442\u0430 \u0443\u043F\u043E\u0432\u043D\u043E\u0432\u0430\u0436\u0435\u043D\u043E\u0433\u043E \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u0433\u043E \u043E\u0440\u0433\u0430\u043D\u0443 \u0437 \u043F\u0438\u0442\u0430\u043D\u044C \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u044F\u043A\u0456\u0439 \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u0435\u043C \u0447\u0438 \u0440\u043E\u0437\u043F\u043E\u0440\u044F\u0434\u043D\u0438\u043A\u043E\u043C \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0437\u0430\u043A\u043E\u043D\u0443;\n            \n            \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u0456 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0434\u0430\u043D\u0438\u0445 \u2013 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u043E \u0440\u0430\u0441\u043E\u0432\u0435 \u0430\u0431\u043E \u0435\u0442\u043D\u0456\u0447\u043D\u0435 \u043F\u043E\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F, \u043F\u043E\u043B\u0456\u0442\u0438\u0447\u043D\u0456, \u0440\u0435\u043B\u0456\u0433\u0456\u0439\u043D\u0456 \u0430\u0431\u043E \u0441\u0432\u0456\u0442\u043E\u0433\u043B\u044F\u0434\u043D\u0456 \u043F\u0435\u0440\u0435\u043A\u043E\u043D\u0430\u043D\u043D\u044F, \u0447\u043B\u0435\u043D\u0441\u0442\u0432\u043E \u0432 \u043F\u043E\u043B\u0456\u0442\u0438\u0447\u043D\u0438\u0445 \u043F\u0430\u0440\u0442\u0456\u044F\u0445 \u0442\u0430 \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0438\u0445 \u0441\u043F\u0456\u043B\u043A\u0430\u0445, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0434\u0430\u043D\u0438\u0445, \u0449\u043E \u0441\u0442\u043E\u0441\u0443\u044E\u0442\u044C\u0441\u044F \u0437\u0434\u043E\u0440\u043E\u0432'\u044F \u0447\u0438 \u0441\u0442\u0430\u0442\u0435\u0432\u043E\u0433\u043E \u0436\u0438\u0442\u0442\u044F.\n            \n            1.2. \u0414\u0430\u043D\u0435 \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u043E\u0431\u043E\u0432\u2019\u044F\u0437\u043A\u043E\u0432\u0435 \u0434\u043B\u044F \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u044E \u043E\u0441\u043E\u0431\u043E\u044E \u0442\u0430 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u044F, \u044F\u043A\u0456 \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u044E\u0442\u044C \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0442\u0430/\u0430\u0431\u043E \u043C\u0430\u044E\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0443 \u0437\u0432\u2019\u044F\u0437\u043A\u0443 \u0437 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F\u043C \u0441\u0432\u043E\u0457\u0445 \u0441\u043B\u0443\u0436\u0431\u043E\u0432\u0438\u0445 \u043E\u0431\u043E\u0432\u2019\u044F\u0437\u043A\u0456\u0432.\n            \n             \n            \n            2. \u041F\u0435\u0440\u0435\u043B\u0456\u043A \u0431\u0430\u0437 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            2.1. \u041F\u0440\u043E\u0434\u0430\u0432\u0435\u0446\u044C \u0454 \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u0435\u043C \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u0431\u0430\u0437 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445:\n            \n            - \u0431\u0430\u0437\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043A\u043B\u0456\u0454\u043D\u0442\u0438.\n            \n             \n            \n            3. \u041C\u0435\u0442\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            3.1. \u041C\u0435\u0442\u043E\u044E \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u0456 \u0454 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F \u0442\u0430 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0456\u0432, \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0441\u0442\u0430\u0442\u0435\u0439 6, 7 \u0417\u0430\u043A\u043E\u043D\u0443 \u0423\u043A\u0440\u0430\u0457\u043D\u0438 \"\u041F\u0440\u043E \u0437\u0430\u0445\u0438\u0441\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445\":.\n            \n            3.2. \u041C\u0435\u0442\u043E\u044E \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0454 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0440\u0435\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457 \u0446\u0438\u0432\u0456\u043B\u044C\u043D\u043E-\u043F\u0440\u0430\u0432\u043E\u0432\u0438\u0445 \u0432\u0456\u0434\u043D\u043E\u0441\u0438\u043D, \u043D\u0430\u0434\u0430\u043D\u043D\u044F/ \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0442\u0430 \u0437\u0434\u0456\u0439\u0441\u043D\u0435\u043D\u043D\u044F \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0456\u0432 \u0437\u0430 \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0456 \u0442\u043E\u0432\u0430\u0440\u0438/\u043F\u043E\u0441\u043B\u0443\u0433\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u041F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u0434\u0435\u043A\u0441\u0443 \u0423\u043A\u0440\u0430\u0457\u043D\u0438, \u0417\u0430\u043A\u043E\u043D\u0443 \u0423\u043A\u0440\u0430\u0457\u043D\u0438 \xAB\u041F\u0440\u043E \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u044C\u043A\u0438\u0439 \u043E\u0431\u043B\u0456\u043A \u0442\u0430 \u0444\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0443 \u0437\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456\xBB.\n            \n             \n            \n            4. \u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445: \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0437\u0433\u043E\u0434\u0438, \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u043F\u0440\u0430\u0432\u0430 \u0442\u0430 \u0434\u0456\u0457 \u0437 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u0434\u0430\u043D\u0438\u043C\u0438 \u0441\u0443\u0431\u2019\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            4.1. \u0417\u0433\u043E\u0434\u0430 \u0441\u0443\u0431'\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043C\u0430\u0454 \u0431\u0443\u0442\u0438 \u0434\u043E\u0431\u0440\u043E\u0432\u0456\u043B\u044C\u043D\u0438\u043C \u0432\u043E\u043B\u0435\u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043D\u044F\u043C \u0444\u0456\u0437\u0438\u0447\u043D\u043E\u0457 \u043E\u0441\u043E\u0431\u0438 \u0449\u043E\u0434\u043E \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0434\u043E\u0437\u0432\u043E\u043B\u0443 \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0457\u0457 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0441\u0444\u043E\u0440\u043C\u0443\u043B\u044C\u043E\u0432\u0430\u043D\u043E\u0457 \u043C\u0435\u0442\u0438 \u0457\u0445 \u043E\u0431\u0440\u043E\u0431\u043A\u0438. \u0417\u0433\u043E\u0434\u0430 \u0441\u0443\u0431'\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u043D\u0430\u0434\u0430\u043D\u0430 \u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u0444\u043E\u0440\u043C\u0430\u0445:\n            \n            \xB7 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u043D\u0430 \u043F\u0430\u043F\u0435\u0440\u043E\u0432\u043E\u043C\u0443 \u043D\u043E\u0441\u0456\u0457 \u0437 \u0440\u0435\u043A\u0432\u0456\u0437\u0438\u0442\u0430\u043C\u0438, \u0449\u043E \u0434\u0430\u0454 \u0437\u043C\u043E\u0433\u0443 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0443\u0432\u0430\u0442\u0438 \u0446\u0435\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0456 \u0444\u0456\u0437\u0438\u0447\u043D\u0443 \u043E\u0441\u043E\u0431\u0443;\n            \n            \xB7 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442, \u044F\u043A\u0438\u0439 \u043C\u0430\u0454 \u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0456 \u0440\u0435\u043A\u0432\u0456\u0437\u0438\u0442\u0438, \u0449\u043E \u0434\u0430\u044E\u0442\u044C \u0437\u043C\u043E\u0433\u0443 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0443\u0432\u0430\u0442\u0438 \u0446\u0435\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0442\u0430 \u0444\u0456\u0437\u0438\u0447\u043D\u0443 \u043E\u0441\u043E\u0431\u0443. \u0414\u043E\u0431\u0440\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u0432\u043E\u043B\u0435\u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u0444\u0456\u0437\u0438\u0447\u043D\u043E\u0457 \u043E\u0441\u043E\u0431\u0438 \u0449\u043E\u0434\u043E \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0434\u043E\u0437\u0432\u043E\u043B\u0443 \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0457\u0457 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0434\u043E\u0446\u0456\u043B\u044C\u043D\u043E \u0437\u0430\u0441\u0432\u0456\u0434\u0447\u0443\u0432\u0430\u0442\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u043C \u043F\u0456\u0434\u043F\u0438\u0441\u043E\u043C \u0441\u0443\u0431'\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            \xB7 \u0432\u0456\u0434\u043C\u0456\u0442\u043A\u0430 \u043D\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u0447\u0438 \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u043C\u0443 \u0444\u0430\u0439\u043B\u0456, \u0449\u043E \u043E\u0431\u0440\u043E\u0431\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0432 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u0456\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0456 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432\u0430\u043D\u0438\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u043E-\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0445 \u0440\u0456\u0448\u0435\u043D\u044C.\n            \n            4.2. \u0417\u0433\u043E\u0434\u0430 \u0441\u0443\u0431\u2019\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043D\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u043F\u0456\u0434 \u0447\u0430\u0441 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0446\u0438\u0432\u0456\u043B\u044C\u043D\u043E-\u043F\u0440\u0430\u0432\u043E\u0432\u0438\u0445 \u0432\u0456\u0434\u043D\u043E\u0441\u0438\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0447\u0438\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0432\u0441\u0442\u0432\u0430.\n            \n            4.3. \u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0441\u0443\u0431\u2019\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043F\u0440\u043E \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0439\u043E\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0434\u043E \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u043F\u0440\u0430\u0432\u0430, \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0456 \u0417\u0430\u043A\u043E\u043D\u043E\u043C \u0423\u043A\u0440\u0430\u0457\u043D\u0438 \xAB\u041F\u0440\u043E \u0437\u0430\u0445\u0438\u0441\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445\xBB, \u043C\u0435\u0442\u0443 \u0437\u0431\u043E\u0440\u0443 \u0434\u0430\u043D\u0438\u0445 \u0442\u0430 \u043E\u0441\u0456\u0431, \u044F\u043A\u0438\u043C \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u044C\u0441\u044F \u0439\u043E\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u043F\u0456\u0434 \u0447\u0430\u0441 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0446\u0438\u0432\u0456\u043B\u044C\u043D\u043E-\u043F\u0440\u0430\u0432\u043E\u0432\u0438\u0445 \u0432\u0456\u0434\u043D\u043E\u0441\u0438\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0447\u0438\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0432\u0441\u0442\u0432\u0430.\n            \n            4.4. \u041E\u0431\u0440\u043E\u0431\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043F\u0440\u043E \u0440\u0430\u0441\u043E\u0432\u0435 \u0430\u0431\u043E \u0435\u0442\u043D\u0456\u0447\u043D\u0435 \u043F\u043E\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F, \u043F\u043E\u043B\u0456\u0442\u0438\u0447\u043D\u0456, \u0440\u0435\u043B\u0456\u0433\u0456\u0439\u043D\u0456 \u0430\u0431\u043E \u0441\u0432\u0456\u0442\u043E\u0433\u043B\u044F\u0434\u043D\u0456 \u043F\u0435\u0440\u0435\u043A\u043E\u043D\u0430\u043D\u043D\u044F, \u0447\u043B\u0435\u043D\u0441\u0442\u0432\u043E \u0432 \u043F\u043E\u043B\u0456\u0442\u0438\u0447\u043D\u0438\u0445 \u043F\u0430\u0440\u0442\u0456\u044F\u0445 \u0442\u0430 \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0438\u0445 \u0441\u043F\u0456\u043B\u043A\u0430\u0445, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0434\u0430\u043D\u0438\u0445, \u0449\u043E \u0441\u0442\u043E\u0441\u0443\u044E\u0442\u044C\u0441\u044F \u0437\u0434\u043E\u0440\u043E\u0432'\u044F \u0447\u0438 \u0441\u0442\u0430\u0442\u0435\u0432\u043E\u0433\u043E \u0436\u0438\u0442\u0442\u044F (\u043E\u0441\u043E\u0431\u043B\u0438\u0432\u0456 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0434\u0430\u043D\u0438\u0445) \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u044F\u0454\u0442\u044C\u0441\u044F.\n            \n             \n            \n            5. \u041C\u0456\u0441\u0446\u0435\u0437\u043D\u0430\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            5.1. \u0412\u043A\u0430\u0437\u0430\u043D\u0456 \u0443 \u0440\u043E\u0437\u0434\u0456\u043B\u0456 2 \u0446\u044C\u043E\u0433\u043E \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0437\u043D\u0430\u0445\u043E\u0434\u044F\u0442\u044C\u0441\u044F \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u044F.\n            \n             \n            \n            6. \u0423\u043C\u043E\u0432\u0438 \u0440\u043E\u0437\u043A\u0440\u0438\u0442\u0442\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u043F\u0440\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u0442\u0440\u0435\u0442\u0456\u043C \u043E\u0441\u043E\u0431\u0430\u043C.\n            \n            6.1. \u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0442\u0440\u0435\u0442\u0456\u0445 \u043E\u0441\u0456\u0431 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u0454\u0442\u044C\u0441\u044F \u0443\u043C\u043E\u0432\u0430\u043C\u0438 \u0437\u0433\u043E\u0434\u0438 \u0441\u0443\u0431'\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u043D\u0430\u0434\u0430\u043D\u043E\u0457 \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u044E \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0446\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0430\u0431\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0432\u0438\u043C\u043E\u0433 \u0437\u0430\u043A\u043E\u043D\u0443.\n            \n            6.2. \u0414\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0442\u0440\u0435\u0442\u0456\u0439 \u043E\u0441\u043E\u0431\u0456 \u043D\u0435 \u043D\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F, \u044F\u043A\u0449\u043E \u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u043E\u0441\u043E\u0431\u0430 \u0432\u0456\u0434\u043C\u043E\u0432\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0432\u0437\u044F\u0442\u0438 \u043D\u0430 \u0441\u0435\u0431\u0435 \u0437\u043E\u0431\u043E\u0432'\u044F\u0437\u0430\u043D\u043D\u044F \u0449\u043E\u0434\u043E \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0432\u0438\u043C\u043E\u0433 \u0417\u0430\u043A\u043E\u043D\u0443 \u0423\u043A\u0440\u0430\u0457\u043D\u0438 \xAB\u041F\u0440\u043E \u0437\u0430\u0445\u0438\u0441\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445\xBB \u0430\u0431\u043E \u043D\u0435\u0441\u043F\u0440\u043E\u043C\u043E\u0436\u043D\u0430 \u0457\u0445 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438.\n            \n            6.3. \u0421\u0443\u0431'\u0454\u043A\u0442 \u0432\u0456\u0434\u043D\u043E\u0441\u0438\u043D, \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u0438\u0445 \u0437 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u0434\u0430\u043D\u0438\u043C\u0438, \u043F\u043E\u0434\u0430\u0454 \u0437\u0430\u043F\u0438\u0442 \u0449\u043E\u0434\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0443 (\u0434\u0430\u043B\u0456 - \u0437\u0430\u043F\u0438\u0442) \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u044E \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            6.4. \u0423 \u0437\u0430\u043F\u0438\u0442\u0456 \u0437\u0430\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F:\n            \n            \xB7 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0456\u043C'\u044F \u0442\u0430 \u043F\u043E \u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456, \u043C\u0456\u0441\u0446\u0435 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F (\u043C\u0456\u0441\u0446\u0435 \u043F\u0435\u0440\u0435\u0431\u0443\u0432\u0430\u043D\u043D\u044F) \u0456 \u0440\u0435\u043A\u0432\u0456\u0437\u0438\u0442\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430, \u0449\u043E \u043F\u043E\u0441\u0432\u0456\u0434\u0447\u0443\u0454 \u0444\u0456\u0437\u0438\u0447\u043D\u0443 \u043E\u0441\u043E\u0431\u0443, \u044F\u043A\u0430 \u043F\u043E\u0434\u0430\u0454 \u0437\u0430\u043F\u0438\u0442 (\u0434\u043B\u044F \u0444\u0456\u0437\u0438\u0447\u043D\u043E\u0457 \u043E\u0441\u043E\u0431\u0438 - \u0437\u0430\u044F\u0432\u043D\u0438\u043A\u0430);\n            \n            \xB7 \u043D\u0430\u0439\u043C\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F, \u043C\u0456\u0441\u0446\u0435\u0437\u043D\u0430\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u043E\u0457 \u043E\u0441\u043E\u0431\u0438, \u044F\u043A\u0430 \u043F\u043E\u0434\u0430\u0454 \u0437\u0430\u043F\u0438\u0442, \u043F\u043E\u0441\u0430\u0434\u0430, \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0456\u043C'\u044F \u0442\u0430 \u043F\u043E \u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456 \u043E\u0441\u043E\u0431\u0438, \u044F\u043A\u0430 \u0437\u0430\u0441\u0432\u0456\u0434\u0447\u0443\u0454 \u0437\u0430\u043F\u0438\u0442; \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u0442\u043E\u0433\u043E, \u0449\u043E \u0437\u043C\u0456\u0441\u0442 \u0437\u0430\u043F\u0438\u0442\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u043F\u043E\u0432\u043D\u043E\u0432\u0430\u0436\u0435\u043D\u043D\u044F\u043C \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u043E\u0457 \u043E\u0441\u043E\u0431\u0438 (\u0434\u043B\u044F \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u043E\u0457 \u043E\u0441\u043E\u0431\u0438 - \u0437\u0430\u044F\u0432\u043D\u0438\u043A\u0430);\n            \n            \xB7 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0456\u043C'\u044F \u0442\u0430 \u043F\u043E \u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0456\u043D\u0448\u0456 \u0432\u0456\u0434\u043E\u043C\u043E\u0441\u0442\u0456, \u0449\u043E \u0434\u0430\u044E\u0442\u044C \u0437\u043C\u043E\u0433\u0443 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0443\u0432\u0430\u0442\u0438 \u0444\u0456\u0437\u0438\u0447\u043D\u0443 \u043E\u0441\u043E\u0431\u0443, \u0441\u0442\u043E\u0441\u043E\u0432\u043D\u043E \u044F\u043A\u043E\u0457 \u0440\u043E\u0431\u0438\u0442\u044C\u0441\u044F \u0437\u0430\u043F\u0438\u0442;\n            \n            \xB7 \u0432\u0456\u0434\u043E\u043C\u043E\u0441\u0442\u0456 \u043F\u0440\u043E \u0431\u0430\u0437\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0441\u0442\u043E\u0441\u043E\u0432\u043D\u043E \u044F\u043A\u043E\u0457 \u043F\u043E\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u0437\u0430\u043F\u0438\u0442, \u0447\u0438 \u0432\u0456\u0434\u043E\u043C\u043E\u0441\u0442\u0456 \u043F\u0440\u043E \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u044F \u0447\u0438 \u0440\u043E\u0437\u043F\u043E\u0440\u044F\u0434\u043D\u0438\u043A\u0430 \u0446\u0456\u0454\u0457 \u0431\u0430\u0437\u0438;\n            \n            \xB7 \u043F\u0435\u0440\u0435\u043B\u0456\u043A \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0449\u043E \u0437\u0430\u043F\u0438\u0442\u0443\u044E\u0442\u044C\u0441\u044F;\n            \n            \xB7 \u043C\u0435\u0442\u0430 \u0437\u0430\u043F\u0438\u0442\u0443.\n            \n            6.5. \u0421\u0442\u0440\u043E\u043A \u0432\u0438\u0432\u0447\u0435\u043D\u043D\u044F \u0437\u0430\u043F\u0438\u0442\u0443 \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0439\u043E\u0433\u043E \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u043D\u044F \u043D\u0435 \u043C\u043E\u0436\u0435 \u043F\u0435\u0440\u0435\u0432\u0438\u0449\u0443\u0432\u0430\u0442\u0438 \u0434\u0435\u0441\u044F\u0442\u0438 \u0440\u043E\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0456\u0432 \u0437 \u0434\u043D\u044F \u0439\u043E\u0433\u043E \u043D\u0430\u0434\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F.\n            \n            \u041F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u0446\u044C\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u043A\u0443 \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u0435\u0446\u044C \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0434\u043E\u0432\u043E\u0434\u0438\u0442\u044C \u0434\u043E \u0432\u0456\u0434\u043E\u043C\u0430 \u043E\u0441\u043E\u0431\u0438, \u044F\u043A\u0430 \u043F\u043E\u0434\u0430\u0454 \u0437\u0430\u043F\u0438\u0442, \u0449\u043E \u0437\u0430\u043F\u0438\u0442 \u0431\u0443\u0434\u0435 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u0435 \u0430\u0431\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0456 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u043D\u0435 \u043F\u0456\u0434\u043B\u044F\u0433\u0430\u044E\u0442\u044C \u043D\u0430\u0434\u0430\u043D\u043D\u044E, \u0456\u0437 \u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C \u043F\u0456\u0434\u0441\u0442\u0430\u0432\u0438, \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E\u0457 \u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E\u043C\u0443 \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u043E-\u043F\u0440\u0430\u0432\u043E\u0432\u043E\u043C\u0443 \u0430\u043A\u0442\u0456.\n            \n            \u0417\u0430\u043F\u0438\u0442 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u044C\u043D\u044F\u0454\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u0442\u0440\u0438\u0434\u0446\u044F\u0442\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u0438\u0445 \u0434\u043D\u0456\u0432 \u0437 \u0434\u043D\u044F \u0439\u043E\u0433\u043E \u043D\u0430\u0434\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F, \u044F\u043A\u0449\u043E \u0456\u043D\u0448\u0435 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0435\u043D\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u043C.\n            \n            6.6. \u0423\u0441\u0456 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438 \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u044F \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0437\u043E\u0431\u043E\u0432'\u044F\u0437\u0430\u043D\u0456 \u0434\u043E\u0434\u0435\u0440\u0436\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0432\u0438\u043C\u043E\u0433 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u0449\u043E\u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0442\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0449\u043E\u0434\u043E \u0440\u0430\u0445\u0443\u043D\u043A\u0456\u0432 \u0443 \u0446\u0456\u043D\u043D\u0438\u0445 \u043F\u0430\u043F\u0435\u0440\u0430\u0445 \u0442\u0430 \u043E\u0431\u0456\u0433\u0443 \u0446\u0456\u043D\u043D\u0438\u0445 \u043F\u0430\u043F\u0435\u0440\u0456\u0432.\n            \n            6.7. \u0412\u0456\u0434\u0441\u0442\u0440\u043E\u0447\u0435\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0442\u0440\u0435\u0442\u0456\u0445 \u043E\u0441\u0456\u0431 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0454\u0442\u044C\u0441\u044F \u0443 \u0440\u0430\u0437\u0456, \u044F\u043A\u0449\u043E \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456 \u043D\u0435 \u043C\u043E\u0436\u0443\u0442\u044C \u0431\u0443\u0442\u0438 \u043D\u0430\u0434\u0430\u043D\u0456 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u0442\u0440\u0438\u0434\u0446\u044F\u0442\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u0438\u0445 \u0434\u043D\u0456\u0432 \u0437 \u0434\u043D\u044F \u043D\u0430\u0434\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043F\u0438\u0442\u0443. \u041F\u0440\u0438 \u0446\u044C\u043E\u043C\u0443 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0442\u0435\u0440\u043C\u0456\u043D \u0432\u0438\u0440\u0456\u0448\u0435\u043D\u043D\u044F \u043F\u0438\u0442\u0430\u043D\u044C, \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u0438\u0445 \u0443 \u0437\u0430\u043F\u0438\u0442\u0456, \u043D\u0435 \u043C\u043E\u0436\u0435 \u043F\u0435\u0440\u0435\u0432\u0438\u0449\u0443\u0432\u0430\u0442\u0438 \u0441\u043E\u0440\u043E\u043A\u0430 \u043F'\u044F\u0442\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u0438\u0445 \u0434\u043D\u0456\u0432.\n            \n            6.8. \u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u0432\u0456\u0434\u0441\u0442\u0440\u043E\u0447\u0435\u043D\u043D\u044F \u0434\u043E\u0432\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0434\u043E \u0432\u0456\u0434\u043E\u043C\u0430 \u0442\u0440\u0435\u0442\u044C\u043E\u0457 \u043E\u0441\u043E\u0431\u0438, \u044F\u043A\u0430 \u043F\u043E\u0434\u0430\u043B\u0430 \u0437\u0430\u043F\u0438\u0442, \u0443 \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u0456\u0439 \u0444\u043E\u0440\u043C\u0456 \u0437 \u0440\u043E\u0437'\u044F\u0441\u043D\u0435\u043D\u043D\u044F\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0443 \u043E\u0441\u043A\u0430\u0440\u0436\u0435\u043D\u043D\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0440\u0456\u0448\u0435\u043D\u043D\u044F.\n            \n            6.9. \u0423 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u0456 \u043F\u0440\u043E \u0432\u0456\u0434\u0441\u0442\u0440\u043E\u0447\u0435\u043D\u043D\u044F \u0437\u0430\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F:\n            \n            \xB7 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0456\u043C'\u044F \u0442\u0430 \u043F\u043E \u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456 \u043F\u043E\u0441\u0430\u0434\u043E\u0432\u043E\u0457 \u043E\u0441\u043E\u0431\u0438;\n            \n            \xB7 \u0434\u0430\u0442\u0430 \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F;\n            \n            \xB7 \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u0456\u0434\u0441\u0442\u0440\u043E\u0447\u0435\u043D\u043D\u044F;\n            \n            \xB7 \u0441\u0442\u0440\u043E\u043A, \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u044F\u043A\u043E\u0433\u043E \u0431\u0443\u0434\u0435 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u0435 \u0437\u0430\u043F\u0438\u0442.\n            \n            6.10. \u0412\u0456\u0434\u043C\u043E\u0432\u0430 \u0443 \u0434\u043E\u0441\u0442\u0443\u043F\u0456 \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0454\u0442\u044C\u0441\u044F, \u044F\u043A\u0449\u043E \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043D\u0438\u0445 \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u043E \u0437\u0433\u0456\u0434\u043D\u043E \u0456\u0437 \u0437\u0430\u043A\u043E\u043D\u043E\u043C.\n            \n            6.11. \u0423 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u0456 \u043F\u0440\u043E \u0432\u0456\u0434\u043C\u043E\u0432\u0443 \u0437\u0430\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F:\n            \n            \xB7 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0456\u043C'\u044F, \u043F\u043E \u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456 \u043F\u043E\u0441\u0430\u0434\u043E\u0432\u043E\u0457 \u043E\u0441\u043E\u0431\u0438, \u044F\u043A\u0430 \u0432\u0456\u0434\u043C\u043E\u0432\u043B\u044F\u0454 \u0443 \u0434\u043E\u0441\u0442\u0443\u043F\u0456;\n            \n            \xB7 \u0434\u0430\u0442\u0430 \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F;\n            \n            \xB7 \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u0456\u0434\u043C\u043E\u0432\u0438.\n            \n            6.12. \u0420\u0456\u0448\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u0432\u0456\u0434\u0441\u0442\u0440\u043E\u0447\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u0432\u0456\u0434\u043C\u043E\u0432\u0443 \u0456\u0437 \u0434\u043E\u0441\u0442\u0443\u043F\u0456 \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u043E\u0441\u043A\u0430\u0440\u0436\u0435\u043D\u043E \u0434\u043E \u0443\u043F\u043E\u0432\u043D\u043E\u0432\u0430\u0436\u0435\u043D\u043E\u0433\u043E \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u0433\u043E \u043E\u0440\u0433\u0430\u043D\u0443 \u0437 \u043F\u0438\u0442\u0430\u043D\u044C \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0456\u043D\u0448\u0438\u0445 \u043E\u0440\u0433\u0430\u043D\u0456\u0432 \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u0457 \u0432\u043B\u0430\u0434\u0438 \u0442\u0430 \u043E\u0440\u0433\u0430\u043D\u0456\u0432 \u043C\u0456\u0441\u0446\u0435\u0432\u043E\u0433\u043E \u0441\u0430\u043C\u043E\u0432\u0440\u044F\u0434\u0443\u0432\u0430\u043D\u043D\u044F, \u0434\u043E \u043F\u043E\u0432\u043D\u043E\u0432\u0430\u0436\u0435\u043D\u044C \u044F\u043A\u0438\u0445 \u043D\u0430\u043B\u0435\u0436\u0438\u0442\u044C \u0437\u0434\u0456\u0439\u0441\u043D\u0435\u043D\u043D\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0430\u0431\u043E \u0434\u043E \u0441\u0443\u0434\u0443.\n            \n             \n            \n            7. \u0417\u0430\u0445\u0438\u0441\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445: \u0441\u043F\u043E\u0441\u043E\u0431\u0438 \u0437\u0430\u0445\u0438\u0441\u0442\u0443, \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0430 \u043E\u0441\u043E\u0431\u0430, \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438, \u044F\u043A\u0456 \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u044E\u0442\u044C \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0442\u0430/\u0430\u0431\u043E \u043C\u0430\u044E\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0443 \u0437\u0432\u2019\u044F\u0437\u043A\u0443 \u0437 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F\u043C \u0441\u0432\u043E\u0457\u0445 \u0441\u043B\u0443\u0436\u0431\u043E\u0432\u0438\u0445 \u043E\u0431\u043E\u0432\u2019\u044F\u0437\u043A\u0456\u0432, \u0441\u0442\u0440\u043E\u043A \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            7.1. \u0412\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u044F \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043E \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u0438\u043C\u0438 \u0456 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u043E-\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u043C\u0438 \u0437\u0430\u0441\u043E\u0431\u0430\u043C\u0438 \u0442\u0430 \u0437\u0430\u0441\u043E\u0431\u0430\u043C\u0438 \u0437\u0432'\u044F\u0437\u043A\u0443, \u044F\u043A\u0456 \u0437\u0430\u043F\u043E\u0431\u0456\u0433\u0430\u044E\u0442\u044C \u0432\u0442\u0440\u0430\u0442\u0430\u043C, \u043A\u0440\u0430\u0434\u0456\u0436\u043A\u0430\u043C, \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0456\u043E\u043D\u043E\u0432\u0430\u043D\u043E\u043C\u0443 \u0437\u043D\u0438\u0449\u0435\u043D\u043D\u044E, \u0432\u0438\u043A\u0440\u0438\u0432\u043B\u0435\u043D\u043D\u044E, \u043F\u0456\u0434\u0440\u043E\u0431\u043B\u0435\u043D\u043D\u044E, \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0456 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0442\u044C \u0432\u0438\u043C\u043E\u0433\u0430\u043C \u043C\u0456\u0436\u043D\u0430\u0440\u043E\u0434\u043D\u0438\u0445 \u0442\u0430 \u043D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0456\u0432.\n            \n            7.2. \u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0430 \u043E\u0441\u043E\u0431\u0430 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u043E\u0432\u0443\u0454 \u0440\u043E\u0431\u043E\u0442\u0443, \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u0443 \u0456\u0437 \u0437\u0430\u0445\u0438\u0441\u0442\u043E\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043F\u0440\u0438 \u0457\u0445 \u043E\u0431\u0440\u043E\u0431\u0446\u0456, \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0437\u0430\u043A\u043E\u043D\u0443. \u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0430 \u043E\u0441\u043E\u0431\u0430 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430\u043A\u0430\u0437\u043E\u043C \u0412\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u044F \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            \u041E\u0431\u043E\u0432\u2019\u044F\u0437\u043A\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0457 \u043E\u0441\u043E\u0431\u0438 \u0449\u043E\u0434\u043E \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457 \u0440\u043E\u0431\u043E\u0442\u0438, \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u043E\u0457 \u0456\u0437 \u0437\u0430\u0445\u0438\u0441\u0442\u043E\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043F\u0440\u0438 \u0457\u0445 \u043E\u0431\u0440\u043E\u0431\u0446\u0456 \u0437\u0430\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F \u0443 \u043F\u043E\u0441\u0430\u0434\u043E\u0432\u0456\u0439 \u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457.\n            \n            7.3. \u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0430 \u043E\u0441\u043E\u0431\u0430 \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0430:\n            \n            \xB7 \u0437\u043D\u0430\u0442\u0438 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0432\u0441\u0442\u0432\u043E \u0423\u043A\u0440\u0430\u0457\u043D\u0438 \u0432 \u0441\u0444\u0435\u0440\u0456 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445;\n            \n            \xB7 \u0440\u043E\u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0456\u0432 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0457\u0445\u043D\u0456\u0445 \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0438\u0445 \u0447\u0438 \u0441\u043B\u0443\u0436\u0431\u043E\u0432\u0438\u0445 \u0430\u0431\u043E \u0442\u0440\u0443\u0434\u043E\u0432\u0438\u0445 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u0456\u0432;\n            \n            \xB7 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0412\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u044F \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432\u0438\u043C\u043E\u0433 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0432\u0441\u0442\u0432\u0430 \u0423\u043A\u0440\u0430\u0457\u043D\u0438 \u0432 \u0441\u0444\u0435\u0440\u0456 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0442\u0430 \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432, \u0449\u043E \u0440\u0435\u0433\u0443\u043B\u044E\u044E\u0442\u044C \u0434\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0412\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u044F \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0449\u043E\u0434\u043E \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u0456 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0443 \u0431\u0430\u0437\u0430\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445;\n            \n            \xB7 \u0440\u043E\u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u043F\u043E\u0440\u044F\u0434\u043E\u043A (\u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0443) \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E \u0437\u0430 \u0434\u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F\u043C \u0432\u0438\u043C\u043E\u0433 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0432\u0441\u0442\u0432\u0430 \u0423\u043A\u0440\u0430\u0457\u043D\u0438 \u0432 \u0441\u0444\u0435\u0440\u0456 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0442\u0430 \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432, \u0449\u043E \u0440\u0435\u0433\u0443\u043B\u044E\u044E\u0442\u044C \u0434\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0412\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u044F \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0449\u043E\u0434\u043E \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u0456 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0443 \u0431\u0430\u0437\u0430\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u044F\u043A\u0438\u0439, \u0437\u043E\u043A\u0440\u0435\u043C\u0430, \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043D\u043E\u0440\u043C\u0438 \u0449\u043E\u0434\u043E \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E\u0441\u0442\u0456 \u0437\u0434\u0456\u0439\u0441\u043D\u0435\u043D\u043D\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E;\n            \n            \xB7 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u044F\u0442\u0438 \u0412\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u044F \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043F\u0440\u043E \u0444\u0430\u043A\u0442\u0438 \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u044C \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0432\u0438\u043C\u043E\u0433 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0432\u0441\u0442\u0432\u0430 \u0423\u043A\u0440\u0430\u0457\u043D\u0438 \u0432 \u0441\u0444\u0435\u0440\u0456 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0442\u0430 \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432, \u0449\u043E \u0440\u0435\u0433\u0443\u043B\u044E\u044E\u0442\u044C \u0434\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0412\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u044F \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0449\u043E\u0434\u043E \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u0456 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0443 \u0431\u0430\u0437\u0430\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0443 \u0442\u0435\u0440\u043C\u0456\u043D \u043D\u0435 \u043F\u0456\u0437\u043D\u0456\u0448\u0435 \u043E\u0434\u043D\u043E\u0433\u043E \u0440\u043E\u0431\u043E\u0447\u043E\u0433\u043E \u0434\u043D\u044F \u0437 \u043C\u043E\u043C\u0435\u043D\u0442\u0443 \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u0442\u0430\u043A\u0438\u0445 \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u044C;\n            \n            \xB7 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432, \u0449\u043E \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0443\u044E\u0442\u044C \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0441\u0443\u0431\u2019\u0454\u043A\u0442\u043E\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0437\u0433\u043E\u0434\u0438 \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0441\u0432\u043E\u0457\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0442\u0430 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0432\u043A\u0430\u0437\u0430\u043D\u043E\u0433\u043E \u0441\u0443\u0431\u2019\u0454\u043A\u0442\u0430 \u043F\u0440\u043E \u0439\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430.\n            \n            7.4. \u0417 \u043C\u0435\u0442\u043E\u044E \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0441\u0432\u043E\u0457\u0445 \u043E\u0431\u043E\u0432\u2019\u044F\u0437\u043A\u0456\u0432 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0430 \u043E\u0441\u043E\u0431\u0430 \u043C\u0430\u0454 \u043F\u0440\u0430\u0432\u043E:\n            \n            \xB7 \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0456 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438, \u0443 \u0442\u043E\u043C\u0443 \u0447\u0438\u0441\u043B\u0456 \u043D\u0430\u043A\u0430\u0437\u0438 \u0439 \u0456\u043D\u0448\u0456 \u0440\u043E\u0437\u043F\u043E\u0440\u044F\u0434\u0447\u0456 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438, \u0432\u0438\u0434\u0430\u043D\u0456 \u0412\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u0435\u043C \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 , \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0456 \u0456\u0437 \u043E\u0431\u0440\u043E\u0431\u043A\u043E\u044E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445;\n            \n            \xB7 \u0440\u043E\u0431\u0438\u0442\u0438 \u043A\u043E\u043F\u0456\u0457 \u0437 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u0438\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432, \u0443 \u0442\u043E\u043C\u0443 \u0447\u0438\u0441\u043B\u0456 \u043A\u043E\u043F\u0456\u0457 \u0444\u0430\u0439\u043B\u0456\u0432, \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0437\u0430\u043F\u0438\u0441\u0456\u0432, \u0449\u043E \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044E\u0442\u044C\u0441\u044F \u0432 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u0438\u0445 \u043E\u0431\u0447\u0438\u0441\u043B\u044E\u0432\u0430\u043B\u044C\u043D\u0438\u0445 \u043C\u0435\u0440\u0435\u0436\u0430\u0445 \u0456 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0438\u0445 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445;\n            \n            \xB7 \u0431\u0440\u0430\u0442\u0438 \u0443\u0447\u0430\u0441\u0442\u044C \u0432 \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u0456 \u0432\u0438\u043A\u043E\u043D\u0443\u0432\u0430\u043D\u0438\u0445 \u043D\u0438\u043C \u043E\u0431\u043E\u0432\u2019\u044F\u0437\u043A\u0456\u0432 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457 \u0440\u043E\u0431\u043E\u0442\u0438, \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u043E\u0457 \u0456\u0437 \u0437\u0430\u0445\u0438\u0441\u0442\u043E\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043F\u0440\u0438 \u0457\u0445 \u043E\u0431\u0440\u043E\u0431\u0446\u0456;\n            \n            \xB7 \u0432\u043D\u043E\u0441\u0438\u0442\u0438 \u043D\u0430 \u0440\u043E\u0437\u0433\u043B\u044F\u0434 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0449\u043E\u0434\u043E \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0442\u0430 \u0432\u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0435\u043D\u043D\u044F \u043C\u0435\u0442\u043E\u0434\u0456\u0432 \u0440\u043E\u0431\u043E\u0442\u0438, \u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0438 \u0437\u0430\u0443\u0432\u0430\u0436\u0435\u043D\u043D\u044F \u0442\u0430 \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0438 \u0443\u0441\u0443\u043D\u0435\u043D\u043D\u044F \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u0438\u0445 \u043D\u0435\u0434\u043E\u043B\u0456\u043A\u0456\u0432 \u0443 \u043F\u0440\u043E\u0446\u0435\u0441\u0456 \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445;\n            \n            \xB7 \u043E\u0434\u0435\u0440\u0436\u0443\u0432\u0430\u0442\u0438 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F \u0437 \u043F\u0438\u0442\u0430\u043D\u044C \u0437\u0434\u0456\u0439\u0441\u043D\u0435\u043D\u043D\u044F \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445;\n            \n            \xB7 \u043F\u0456\u0434\u043F\u0438\u0441\u0443\u0432\u0430\u0442\u0438 \u0442\u0430 \u0432\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438 \u0432 \u043C\u0435\u0436\u0430\u0445 \u0441\u0432\u043E\u0454\u0457 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0456\u0457.\n            \n            7.5. \u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438, \u044F\u043A\u0456 \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u044E\u0442\u044C \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0442\u0430/\u0430\u0431\u043E \u043C\u0430\u044E\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0443 \u0437\u0432\u2019\u044F\u0437\u043A\u0443 \u0437 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F\u043C \u0441\u0432\u043E\u0457\u0445 \u0441\u043B\u0443\u0436\u0431\u043E\u0432\u0438\u0445 (\u0442\u0440\u0443\u0434\u043E\u0432\u0438\u0445) \u043E\u0431\u043E\u0432\u2019\u044F\u0437\u043A\u0456\u0432 \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0456 \u0434\u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438\u0441\u044C \u0432\u0438\u043C\u043E\u0433 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0432\u0441\u0442\u0432\u0430 \u0423\u043A\u0440\u0430\u0457\u043D\u0438 \u0432 \u0441\u0444\u0435\u0440\u0456 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0442\u0430 \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432, \u0449\u043E\u0434\u043E \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u0456 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0443 \u0431\u0430\u0437\u0430\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            7.6. \u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438, \u0449\u043E \u043C\u0430\u044E\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0443 \u0442\u043E\u043C\u0443 \u0447\u0438\u0441\u043B\u0456, \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u044E\u0442\u044C \u0457\u0445 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0456 \u043D\u0435 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0442\u0438 \u0440\u043E\u0437\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F \u0443 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u044F\u043A\u0456 \u0457\u043C \u0431\u0443\u043B\u043E \u0434\u043E\u0432\u0456\u0440\u0435\u043D\u043E \u0430\u0431\u043E \u044F\u043A\u0456 \u0441\u0442\u0430\u043B\u0438 \u0432\u0456\u0434\u043E\u043C\u0456 \u0443 \u0437\u0432'\u044F\u0437\u043A\u0443 \u0437 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F\u043C \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0438\u0445 \u0447\u0438 \u0441\u043B\u0443\u0436\u0431\u043E\u0432\u0438\u0445 \u0430\u0431\u043E \u0442\u0440\u0443\u0434\u043E\u0432\u0438\u0445 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u0456\u0432. \u0422\u0430\u043A\u0435 \u0437\u043E\u0431\u043E\u0432'\u044F\u0437\u0430\u043D\u043D\u044F \u0447\u0438\u043D\u043D\u0435 \u043F\u0456\u0441\u043B\u044F \u043F\u0440\u0438\u043F\u0438\u043D\u0435\u043D\u043D\u044F \u043D\u0438\u043C\u0438 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456, \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u043E\u0457 \u0437 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u0434\u0430\u043D\u0438\u043C\u0438, \u043A\u0440\u0456\u043C \u0432\u0438\u043F\u0430\u0434\u043A\u0456\u0432, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0445 \u0437\u0430\u043A\u043E\u043D\u043E\u043C.\n            \n            7.7.\u041E\u0441\u043E\u0431\u0438, \u0449\u043E \u043C\u0430\u044E\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0443 \u0442\u043E\u043C\u0443 \u0447\u0438\u0441\u043B\u0456, \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u044E\u0442\u044C \u0457\u0445 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0443 \u0440\u0430\u0437\u0456 \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F \u043D\u0438\u043C\u0438 \u0432\u0438\u043C\u043E\u0433 \u0417\u0430\u043A\u043E\u043D\u0443 \u0423\u043A\u0440\u0430\u0457\u043D\u0438 \xAB\u041F\u0440\u043E \u0437\u0430\u0445\u0438\u0441\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445\xBB \u043D\u0435\u0441\u0443\u0442\u044C \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0437\u0433\u0456\u0434\u043D\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0432\u0441\u0442\u0432\u0430 \u0423\u043A\u0440\u0430\u0457\u043D\u0438.\n            \n            7.8. \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u043D\u0435 \u043F\u043E\u0432\u0438\u043D\u043D\u0456 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0442\u0438\u0441\u044F \u0434\u043E\u0432\u0448\u0435, \u043D\u0456\u0436 \u0446\u0435 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0434\u043B\u044F \u043C\u0435\u0442\u0438, \u0434\u043B\u044F \u044F\u043A\u043E\u0457 \u0442\u0430\u043A\u0456 \u0434\u0430\u043D\u0456 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044E\u0442\u044C\u0441\u044F, \u0430\u043B\u0435 \u0443 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u043C\u0443 \u0440\u0430\u0437\u0456 \u043D\u0435 \u0434\u043E\u0432\u0448\u0435 \u0441\u0442\u0440\u043E\u043A\u0443 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445, \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E\u0433\u043E \u0437\u0433\u043E\u0434\u043E\u044E \u0441\u0443\u0431'\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0446\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n             \n            \n            8. \u041F\u0440\u0430\u0432\u0430 \u0441\u0443\u0431\u2019\u0454\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n            \n            8.1. \u0421\u0443\u0431'\u0454\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043C\u0430\u0454 \u043F\u0440\u0430\u0432\u043E:\n            \n            \xB7 \u0437\u043D\u0430\u0442\u0438 \u043F\u0440\u043E \u043C\u0456\u0441\u0446\u0435\u0437\u043D\u0430\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0431\u0430\u0437\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u044F\u043A\u0430 \u043C\u0456\u0441\u0442\u0438\u0442\u044C \u0439\u043E\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456, \u0457\u0457 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0442\u0430 \u043D\u0430\u0439\u043C\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F, \u043C\u0456\u0441\u0446\u0435\u0437\u043D\u0430\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0442\u0430 / \u0430\u0431\u043E \u043C\u0456\u0441\u0446\u0435 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F (\u043F\u0435\u0440\u0435\u0431\u0443\u0432\u0430\u043D\u043D\u044F) \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u044F \u0447\u0438 \u0440\u043E\u0437\u043F\u043E\u0440\u044F\u0434\u043D\u0438\u043A\u0430 \u0446\u0456\u0454\u0457 \u0431\u0430\u0437\u0438 \u0430\u0431\u043E \u0434\u0430\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0435 \u0434\u043E\u0440\u0443\u0447\u0435\u043D\u043D\u044F \u0449\u043E\u0434\u043E \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0446\u0456\u0454\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0443\u043F\u043E\u0432\u043D\u043E\u0432\u0430\u0436\u0435\u043D\u0438\u043C \u043D\u0438\u043C \u043E\u0441\u043E\u0431\u0430\u043C, \u043A\u0440\u0456\u043C \u0432\u0438\u043F\u0430\u0434\u043A\u0456\u0432, \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0445 \u0437\u0430\u043A\u043E\u043D\u043E\u043C;\n            \n            \xB7 \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043F\u0440\u043E \u0443\u043C\u043E\u0432\u0438 \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0437\u043E\u043A\u0440\u0435\u043C\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043F\u0440\u043E \u0442\u0440\u0435\u0442\u0456\u0445 \u043E\u0441\u0456\u0431, \u044F\u043A\u0438\u043C \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u044C\u0441\u044F \u0439\u043E\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456, \u0449\u043E \u043C\u0456\u0441\u0442\u044F\u0442\u044C\u0441\u044F \u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0456\u0439 \u0431\u0430\u0437\u0456 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445;\n            \n            \xB7 \u043D\u0430 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0441\u0432\u043E\u0457\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0449\u043E \u043C\u0456\u0441\u0442\u044F\u0442\u044C\u0441\u044F \u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0456\u0439 \u0431\u0430\u0437\u0456 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445;\n            \n            \xB7 \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u043D\u0435 \u043F\u0456\u0437\u043D\u0456\u0448 \u044F\u043A \u0437\u0430 \u0442\u0440\u0438\u0434\u0446\u044F\u0442\u044C \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u0438\u0445 \u0434\u043D\u0456\u0432 \u0437 \u0434\u043D\u044F \u043D\u0430\u0434\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043F\u0438\u0442\u0443, \u043A\u0440\u0456\u043C \u0432\u0438\u043F\u0430\u0434\u043A\u0456\u0432, \u043F\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0435\u043D\u0438\u0445 \u0437\u0430\u043A\u043E\u043D\u043E\u043C, \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C \u043F\u0440\u043E \u0442\u0435, \u0447\u0438 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044E\u0442\u044C\u0441\u044F \u0439\u043E\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0456\u0439 \u0431\u0430\u0437\u0456 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0430 \u0442\u0430\u043A\u043E\u0436 \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u0437\u043C\u0456\u0441\u0442 \u0439\u043E\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u044F\u043A\u0456 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044E\u0442\u044C\u0441\u044F;\n            \n            \xB7 \u043F\u0440\u0435\u0434'\u044F\u0432\u043B\u044F\u0442\u0438 \u0432\u043C\u043E\u0442\u0438\u0432\u043E\u0432\u0430\u043D\u0443 \u0432\u0438\u043C\u043E\u0433\u0443 \u0456\u0437 \u0437\u0430\u043F\u0435\u0440\u0435\u0447\u0435\u043D\u043D\u044F\u043C \u043F\u0440\u043E\u0442\u0438 \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u0441\u0432\u043E\u0457\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043E\u0440\u0433\u0430\u043D\u0430\u043C\u0438 \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u0457 \u0432\u043B\u0430\u0434\u0438, \u043E\u0440\u0433\u0430\u043D\u0430\u043C\u0438 \u043C\u0456\u0441\u0446\u0435\u0432\u043E\u0433\u043E \u0441\u0430\u043C\u043E\u0432\u0440\u044F\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u0438 \u0437\u0434\u0456\u0439\u0441\u043D\u0435\u043D\u043D\u0456 \u0457\u0445\u043D\u0456\u0445 \u043F\u043E\u0432\u043D\u043E\u0432\u0430\u0436\u0435\u043D\u044C, \u043F\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0435\u043D\u0438\u0445 \u0437\u0430\u043A\u043E\u043D\u043E\u043C;\n            \n            \xB7 \u043F\u0440\u0435\u0434'\u044F\u0432\u043B\u044F\u0442\u0438 \u0432\u043C\u043E\u0442\u0438\u0432\u043E\u0432\u0430\u043D\u0443 \u0432\u0438\u043C\u043E\u0433\u0443 \u0449\u043E\u0434\u043E \u0437\u043C\u0456\u043D\u0438 \u0430\u0431\u043E \u0437\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u0441\u0432\u043E\u0457\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0432\u043E\u043B\u043E\u0434\u0456\u043B\u044C\u0446\u0435\u043C \u0442\u0430 \u0440\u043E\u0437\u043F\u043E\u0440\u044F\u0434\u043D\u0438\u043A\u043E\u043C \u0446\u0456\u0454\u0457 \u0431\u0430\u0437\u0438, \u044F\u043A\u0449\u043E \u0446\u0456 \u0434\u0430\u043D\u0456 \u043E\u0431\u0440\u043E\u0431\u043B\u044F\u044E\u0442\u044C\u0441\u044F \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u043E \u0447\u0438 \u0454 \u043D\u0435\u0434\u043E\u0441\u0442\u043E\u0432\u0456\u0440\u043D\u0438\u043C\u0438;\n            \n            \xB7 \u043D\u0430 \u0437\u0430\u0445\u0438\u0441\u0442 \u0441\u0432\u043E\u0457\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432\u0456\u0434 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u043E\u0457 \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u0442\u0430 \u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u043E\u0457 \u0432\u0442\u0440\u0430\u0442\u0438, \u0437\u043D\u0438\u0449\u0435\u043D\u043D\u044F, \u043F\u043E\u0448\u043A\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0443 \u0437\u0432'\u044F\u0437\u043A\u0443 \u0437 \u0443\u043C\u0438\u0441\u043D\u0438\u043C \u043F\u0440\u0438\u0445\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F\u043C, \u043D\u0435\u043D\u0430\u0434\u0430\u043D\u043D\u044F\u043C \u0447\u0438 \u043D\u0435\u0441\u0432\u043E\u0454\u0447\u0430\u0441\u043D\u0438\u043C \u0457\u0445 \u043D\u0430\u0434\u0430\u043D\u043D\u044F\u043C, \u0430 \u0442\u0430\u043A\u043E\u0436 \u043D\u0430 \u0437\u0430\u0445\u0438\u0441\u0442 \u0432\u0456\u0434 \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u043E\u043C\u043E\u0441\u0442\u0435\u0439, \u0449\u043E \u0454 \u043D\u0435\u0434\u043E\u0441\u0442\u043E\u0432\u0456\u0440\u043D\u0438\u043C\u0438 \u0447\u0438 \u0433\u0430\u043D\u044C\u0431\u043B\u044F\u0442\u044C \u0447\u0435\u0441\u0442\u044C, \u0433\u0456\u0434\u043D\u0456\u0441\u0442\u044C \u0442\u0430 \u0434\u0456\u043B\u043E\u0432\u0443 \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0456\u044E \u0444\u0456\u0437\u0438\u0447\u043D\u043E\u0457 \u043E\u0441\u043E\u0431\u0438;\n            \n            \xB7 \u0437\u0432\u0435\u0440\u0442\u0430\u0442\u0438\u0441\u044F \u0437 \u043F\u0438\u0442\u0430\u043D\u044C \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0441\u0432\u043E\u0457\u0445 \u043F\u0440\u0430\u0432 \u0449\u043E\u0434\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0434\u043E \u043E\u0440\u0433\u0430\u043D\u0456\u0432 \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u0457 \u0432\u043B\u0430\u0434\u0438, \u043E\u0440\u0433\u0430\u043D\u0456\u0432 \u043C\u0456\u0441\u0446\u0435\u0432\u043E\u0433\u043E \u0441\u0430\u043C\u043E\u0432\u0440\u044F\u0434\u0443\u0432\u0430\u043D\u043D\u044F, \u0434\u043E \u043F\u043E\u0432\u043D\u043E\u0432\u0430\u0436\u0435\u043D\u044C \u044F\u043A\u0438\u0445 \u043D\u0430\u043B\u0435\u0436\u0438\u0442\u044C \u0437\u0434\u0456\u0439\u0441\u043D\u0435\u043D\u043D\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445;\n            \n            \xB7 \u0437\u0430\u0441\u0442\u043E\u0441\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u0441\u043E\u0431\u0438 \u043F\u0440\u0430\u0432\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0432 \u0440\u0430\u0437\u0456 \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0432\u0441\u0442\u0432\u0430 \u043F\u0440\u043E \u0437\u0430\u0445\u0438\u0441\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-clan-footer");
        }
      },
      directives: [_js_clan_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _js_clan_components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_2__["ClanFooterComponent"]],
      styles: [".title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGF1dGhlbnRpY2F0aW9uL3BhZ2VzL2NvbmRpdGlvbnMvRDpcXHByb2plY3RzXFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGF1dGhlbnRpY2F0aW9uXFxwYWdlc1xcY29uZGl0aW9uc1xcY29uZGl0aW9ucy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGF1dGhlbnRpY2F0aW9uL3BhZ2VzL2NvbmRpdGlvbnMvY29uZGl0aW9ucy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AYXV0aGVudGljYXRpb24vcGFnZXMvY29uZGl0aW9ucy9jb25kaXRpb25zLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmRpdGlvbnMtY29udGVudFxuXG4udGl0bGVcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIiLCIudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConditionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-conditions',
          templateUrl: './conditions.component.html',
          styleUrls: ['./conditions.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@authentication/pages/help/help.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/@modules/@authentication/pages/help/help.component.ts ***!
    \***********************************************************************/

  /*! exports provided: HelpComponent */

  /***/
  function srcAppModulesAuthenticationPagesHelpHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
      return HelpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _js_clan_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../@js-clan/components/general/nav/nav.component */
    "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
    /* harmony import */


    var _js_clan_components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../@js-clan/components/general/clan-footer/clan-footer.component */
    "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");

    var HelpComponent =
    /*#__PURE__*/
    function () {
      function HelpComponent() {
        _classCallCheck(this, HelpComponent);
      }

      _createClass(HelpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpComponent;
    }();

    HelpComponent.ɵfac = function HelpComponent_Factory(t) {
      return new (t || HelpComponent)();
    };

    HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpComponent,
      selectors: [["app-help"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container", "conditions-content"]],
      template: function HelpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "help works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-clan-footer");
        }
      },
      directives: [_js_clan_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _js_clan_components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_2__["ClanFooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0BhdXRoZW50aWNhdGlvbi9wYWdlcy9oZWxwL2hlbHAuY29tcG9uZW50LnNhc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-help',
          templateUrl: './help.component.html',
          styleUrls: ['./help.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@authentication/pages/login/login.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/@modules/@authentication/pages/login/login.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppModulesAuthenticationPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../my_modules/stuff */
    "./src/app/my_modules/stuff.ts");
    /* harmony import */


    var _app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../app-state */
    "./src/app/app-state.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../@modules/@common-dependencies/services/validator.service */
    "./src/app/@modules/@common-dependencies/services/validator.service.ts");
    /* harmony import */


    var _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../@modules/@common-dependencies/services/api.service */
    "./src/app/@modules/@common-dependencies/services/api.service.ts");
    /* harmony import */


    var _modules_common_dependencies_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../@modules/@common-dependencies/services/storage.service */
    "./src/app/@modules/@common-dependencies/services/storage.service.ts");
    /* harmony import */


    var _js_clan_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../@js-clan/components/general/nav/nav.component */
    "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
    /* harmony import */


    var _common_dependencies_components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../@common-dependencies/components/general/form-validator/form-validator.component */
    "./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../@common-dependencies/components/general/extra-alert/extra-alert.component */
    "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts");
    /* harmony import */


    var _js_clan_components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../@js-clan/components/general/clan-footer/clan-footer.component */
    "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");

    function LoginComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r67.passwords.errors.itemsAreEqual.msg, " ");
      }
    }

    var _c0 = function _c0() {
      return ["/auth/register"];
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, formBuilder, validator, api, storage) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.validator = validator;
        this.api = api;
        this.storage = storage;
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_4__["default"]; // group of validators (for next usage)

        var pwdValidators = [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]; // build 'userForm' essence

        this.userForm = this.formBuilder.group({
          'username': [this.st.user.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
          'email': [this.st.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), this.validator.mailValidator()]],
          'passwords': this.formBuilder.group({
            'pwd': ['', pwdValidators],
            'confirm': ['', pwdValidators]
          }, {
            validator: this.validator.itemsAreEqual('Passwords', 'pwd', 'confirm')
          })
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "fill",
        value: function fill() {
          Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])('fill');
          this.userForm.controls['username'].setValue('testUser');
          this.userForm.controls['email'].setValue('shadespiritenator@gmail.com');
          this.userForm.controls['passwords'].controls['pwd'].setValue(123456);
          this.userForm.controls['passwords'].controls['confirm'].setValue(123456);
        } // when user pressed (submit/register)

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var answer;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return this.api.login(this.userData);

                  case 3:
                    answer = _context.sent;
                    Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])('answer: ', answer);
                    if (answer.err) Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["my_alert"])(':(', answer.msg2, answer.err); // showing of error

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

                      Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])('this.st: ', this.st); // need add finger print !!!

                      Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["my_alert"])(':)', 'User logged!', null);
                      setTimeout(function (_) {
                        return _this.st.alert.show = false;
                      }, 1500);
                      setTimeout(function (_) {
                        return _this.router.navigate(['/cabinet']);
                      }, 2000);
                    }

                    _context.next = 12;
                    break;

                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context["catch"](0);
                    Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])('HttpErrorResponse: ', _context.t0);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 9]]);
          }));
        } // gathering the structure 'userData' from 'userForm'

      }, {
        key: "userData",
        get: function get() {
          return {
            username: this.userForm.controls.username.value,
            email: this.userForm.controls.email.value,
            password: this.userForm.controls.passwords.controls.pwd.value,
            password2: this.userForm.controls.passwords.controls.confirm.value
          };
        } // for elements of form 

      }, {
        key: "passwords",
        get: function get() {
          return this.userForm.get('passwords');
        }
      }, {
        key: "username",
        get: function get() {
          return this.userForm.get('username');
        }
      }, {
        key: "confirm",
        get: function get() {
          return this.userForm.get('passwords.confirm');
        }
      }, {
        key: "email",
        get: function get() {
          return this.userForm.get('email');
        }
      }, {
        key: "pwd",
        get: function get() {
          return this.userForm.get('passwords.pwd');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_common_dependencies_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 36,
      vars: 7,
      consts: [[1, "container", "login-content"], [1, "jumbotron", "limit"], [1, "title"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "1"], ["formControlName", "email", "id", "1", "type", "email", "placeholder", "Enter email", 1, "form-control"], [3, "it"], ["formGroupName", "passwords"], ["for", "2"], ["formControlName", "pwd", "id", "2", "type", "password", "placeholder", "Password", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "btn-panel"], ["type", "submit", 1, "btn", "btn-primary"], ["href", "/api/auth/facebook"], ["href", "/api/auth/google"], [1, "register", 3, "routerLink"], [1, "btn", "btn-secondary", 3, "click"], [3, "st"], [1, "alert", "alert-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-form-validator", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "fieldset", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-form-validator", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Login via Facebook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Login via Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Register !!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener($event) {
            return ctx.fill();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Fill");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "app-extra-alert", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "app-clan-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx.pwd);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.confirm.pristine && ctx.passwords.errors && ctx.passwords.errors.itemsAreEqual);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("st", ctx.st.alert);
        }
      },
      directives: [_js_clan_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _common_dependencies_components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_10__["FormValidatorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_12__["ExtraAlertComponent"], _js_clan_components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_13__["ClanFooterComponent"]],
      styles: [".limit[_ngcontent-%COMP%] {\n  max-width: 30em;\n  margin: 3em auto;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0em 1em;\n  margin: 0 0.5em 0.5em 0.5em;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  padding: 2em !important;\n}\n\n.btn-panel[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.register[_ngcontent-%COMP%] {\n  color: #ff003b;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGF1dGhlbnRpY2F0aW9uL3BhZ2VzL2xvZ2luL0Q6XFxwcm9qZWN0c1xccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBhdXRoZW50aWNhdGlvblxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGF1dGhlbnRpY2F0aW9uL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0VKOztBREFBO0VBQ0ksdUJBQUE7QUNHSjs7QUREQTtFQUNJLGlCQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0BhdXRoZW50aWNhdGlvbi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW1pdFxuICAgIG1heC13aWR0aDogMzBlbVxuICAgIG1hcmdpbjogM2VtIGF1dG9cblxuLnRpdGxlXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgbWFyZ2luOiAwZW0gMWVtIFxuICAgIG1hcmdpbjogMCAuNWVtIC41ZW0gLjVlbVxuXG4uanVtYm90cm9uXG4gICAgcGFkZGluZzogMmVtICFpbXBvcnRhbnRcblxuLmJ0bi1wYW5lbFxuICAgIHRleHQtYWxpZ246IHJpZ2h0XG5cbi5yZWdpc3RlclxuICAgIGNvbG9yOiAjZmYwMDNiXG4gICAgZm9udC13ZWlnaHQ6IDkwMCAgICAiLCIubGltaXQge1xuICBtYXgtd2lkdGg6IDMwZW07XG4gIG1hcmdpbjogM2VtIGF1dG87XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwZW0gMWVtO1xuICBtYXJnaW46IDAgMC41ZW0gMC41ZW0gMC41ZW07XG59XG5cbi5qdW1ib3Ryb24ge1xuICBwYWRkaW5nOiAyZW0gIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wYW5lbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucmVnaXN0ZXIge1xuICBjb2xvcjogI2ZmMDAzYjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorService"]
        }, {
          type: _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _modules_common_dependencies_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@authentication/pages/profile/profile.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/@modules/@authentication/pages/profile/profile.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppModulesAuthenticationPagesProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../app-state */
    "./src/app/app-state.ts");
    /* harmony import */


    var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../my_modules/stuff */
    "./src/app/my_modules/stuff.ts");
    /* harmony import */


    var _js_clan_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../@js-clan/components/general/nav/nav.component */
    "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
    /* harmony import */


    var _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../@common-dependencies/components/general/extra-alert/extra-alert.component */
    "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts");
    /* harmony import */


    var _js_clan_components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../@js-clan/components/general/clan-footer/clan-footer.component */
    "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);

        this.st = _app_state__WEBPACK_IMPORTED_MODULE_1__["default"];
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"])(this.st);
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)();
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 22,
      vars: 2,
      consts: [[1, "container", "health-content"], [1, "jumbotron"], [1, "display-3"], [1, "lead"], [1, "my-4"], ["href", "#", "role", "button", 1, "btn", "btn-primary", "btn-lg"], [1, "row"], [1, "PS"], ["href", "https://www.youtube.com/channel/UC1fRCBrRa1oeIENiEm8AzUA?view_as=subscriber", "target", "_blank", 1, "btn", "btn-success"], [3, "st"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "It uses utility classes for typography and spacing to space content out within the larger container.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Learn more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0414\u043E\u043B\u0443\u0447\u0430\u0439\u0441\u044F \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0438 \u043D\u0430 \u042E\u0442\u0443\u0431!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0425\u041E\u0427\u0423 !!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-extra-alert", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-clan-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", ctx.st.user.username, "!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("st", ctx.st.alert);
        }
      },
      directives: [_js_clan_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_4__["ExtraAlertComponent"], _js_clan_components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_5__["ClanFooterComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.PS[_ngcontent-%COMP%] {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGF1dGhlbnRpY2F0aW9uL3BhZ2VzL3Byb2ZpbGUvRDpcXHByb2plY3RzXFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGF1dGhlbnRpY2F0aW9uXFxwYWdlc1xccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGF1dGhlbnRpY2F0aW9uL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AYXV0aGVudGljYXRpb24vcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lclxuICAgIC8vIHBhZGRpbmctdG9wOiA5ZW1cbiAgICBtaW4taGVpZ2h0OiAxMDB2aFxuXG4gICAgXG4uUFNcbiAgICBtYXJnaW46IDFlbSBhdXRvIDJlbSBhdXRvXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIiwiLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uUFMge1xuICBtYXJnaW46IDFlbSBhdXRvIDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@authentication/pages/register/register.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/@modules/@authentication/pages/register/register.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppModulesAuthenticationPagesRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../my_modules/stuff */
    "./src/app/my_modules/stuff.ts");
    /* harmony import */


    var _app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../app-state */
    "./src/app/app-state.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../@modules/@common-dependencies/services/validator.service */
    "./src/app/@modules/@common-dependencies/services/validator.service.ts");
    /* harmony import */


    var _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../@modules/@common-dependencies/services/api.service */
    "./src/app/@modules/@common-dependencies/services/api.service.ts");
    /* harmony import */


    var _js_clan_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../@js-clan/components/general/nav/nav.component */
    "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
    /* harmony import */


    var _common_dependencies_components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../@common-dependencies/components/general/form-validator/form-validator.component */
    "./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../@common-dependencies/components/general/extra-alert/extra-alert.component */
    "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts");
    /* harmony import */


    var _js_clan_components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../@js-clan/components/general/clan-footer/clan-footer.component */
    "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");

    function RegisterComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r68.passwords.errors.itemsAreEqual.msg, " ");
      }
    } // change component mode 


    var queries = Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["getUrlQueries"])();
    var mode = queries.mode ? queries.mode : 'empty'; // @Component({
    //   selector: 'app-register',
    //   templateUrl: './register.component.html',
    //   styleUrls: [
    //     mode == 'custom'
    //       ? require('./register.component-alternative.sass') // <---| not works for (ng build -prod)
    //       : require('./register.component.sass') // <---------------| can be used for (ng build): just for stage of development
    //     // './register.component-alternative.sass'
    //   ]
    // })

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(router, formBuilder, validator, api) {
        _classCallCheck(this, RegisterComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.validator = validator;
        this.api = api;
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_4__["default"]; // group of validators (for next usage)

        var pwdValidators = [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]; // build 'userForm' essence

        this.userForm = this.formBuilder.group({
          'username': [this.st.user.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
          'email': [this.st.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), this.validator.mailValidator()]],
          'passwords': this.formBuilder.group({
            'pwd': ['', pwdValidators],
            'confirm': ['', pwdValidators]
          }, {
            validator: this.validator.itemsAreEqual('Passwords', 'pwd', 'confirm')
          })
        });
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "fill",
        value: function fill() {
          Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])('fill');
          this.userForm.controls['username'].setValue('testUser');
          this.userForm.controls['email'].setValue('shadespiritenator@gmail.com');
          this.userForm.controls['passwords'].controls['pwd'].setValue(123456);
          this.userForm.controls['passwords'].controls['confirm'].setValue(123456);
        } // when user pressed (submit/register)

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var answer;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return this.api.register(this.userData);

                  case 3:
                    answer = _context3.sent;
                    Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])('answer: ', answer);
                    if (answer.err) Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["my_alert"])(':(', answer.msg2, answer.err); // showing of error

                    if (answer.success) {
                      Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["my_alert"])(':)', 'User was created!', null);
                      this.router.navigate(['/auth/login']);
                    }

                    _context3.next = 12;
                    break;

                  case 9:
                    _context3.prev = 9;
                    _context3.t0 = _context3["catch"](0);
                    Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])('HttpErrorResponse: ', _context3.t0);

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 9]]);
          }));
        } // gathering the structure 'userData' from 'userForm'

      }, {
        key: "userData",
        get: function get() {
          return {
            username: this.userForm.controls.username.value,
            email: this.userForm.controls.email.value,
            password: this.userForm.controls.passwords.controls.pwd.value,
            password2: this.userForm.controls.passwords.controls.confirm.value
          };
        } // for elements of form 

      }, {
        key: "passwords",
        get: function get() {
          return this.userForm.get('passwords');
        }
      }, {
        key: "username",
        get: function get() {
          return this.userForm.get('username');
        }
      }, {
        key: "confirm",
        get: function get() {
          return this.userForm.get('passwords.confirm');
        }
      }, {
        key: "email",
        get: function get() {
          return this.userForm.get('email');
        }
      }, {
        key: "pwd",
        get: function get() {
          return this.userForm.get('passwords.pwd');
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 48,
      vars: 7,
      consts: [[1, "container", "register-content"], [1, "jumbotron", "limit"], [1, "title"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "1"], ["formControlName", "username", "id", "0", "type", "email", "placeholder", "Enter username", 1, "form-control"], [3, "it"], ["formControlName", "email", "id", "1", "type", "email", "placeholder", "Enter email", 1, "form-control"], [1, "form-text", "text-muted"], ["formGroupName", "passwords"], ["for", "2"], ["formControlName", "pwd", "id", "2", "type", "password", "placeholder", "Password", 1, "form-control"], ["for", "3"], ["formControlName", "confirm", "id", "3", "type", "password", "placeholder", "Confirm Password", 1, "form-control", "input-lg"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group", "conditions"], [1, "mdi", "mdi-file-document-box-check"], ["routerLink", "/auth/conditions", 1, "alert-link"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", "checked", "", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], [1, "btn-panel"], ["type", "submit", 1, "btn", "btn-primary"], [1, "btn", "btn-secondary", 3, "click"], [3, "st"], [1, "alert", "alert-danger"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-form-validator", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "small", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "We'll never share your email with anyone else.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-form-validator", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "fieldset", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "app-form-validator", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Password confirmation");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "small", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Password must be at 6 to 20 characters long.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "app-form-validator", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RegisterComponent_div_31_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Conditions Document");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "I agree with conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_44_listener($event) {
            return ctx.fill();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Fill");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "app-extra-alert", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "app-clan-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx.pwd);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("it", ctx.confirm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.confirm.pristine && ctx.passwords.errors && ctx.passwords.errors.itemsAreEqual);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("st", ctx.st.alert);
        }
      },
      directives: [_js_clan_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _common_dependencies_components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_9__["FormValidatorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_11__["ExtraAlertComponent"], _js_clan_components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_12__["ClanFooterComponent"]],
      styles: [".limit[_ngcontent-%COMP%] {\n  max-width: 30em;\n  margin: 3em auto;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0em 1em;\n  margin: 0 0.5em 0.5em 0.5em;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  padding: 2em !important;\n}\n\n.btn-panel[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGF1dGhlbnRpY2F0aW9uL3BhZ2VzL3JlZ2lzdGVyL0Q6XFxwcm9qZWN0c1xccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBhdXRoZW50aWNhdGlvblxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGF1dGhlbnRpY2F0aW9uL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0VKOztBREFBO0VBQ0ksdUJBQUE7QUNHSjs7QUREQTtFQUNJLGlCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AYXV0aGVudGljYXRpb24vcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGltaXRcbiAgICBtYXgtd2lkdGg6IDMwZW1cbiAgICBtYXJnaW46IDNlbSBhdXRvXG5cbi50aXRsZVxuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIG1hcmdpbjogMGVtIDFlbSBcbiAgICBtYXJnaW46IDAgLjVlbSAuNWVtIC41ZW1cblxuLmp1bWJvdHJvblxuICAgIHBhZGRpbmc6IDJlbSAhaW1wb3J0YW50XG5cbi5idG4tcGFuZWxcbiAgICB0ZXh0LWFsaWduOiByaWdodCAgICAiLCIubGltaXQge1xuICBtYXgtd2lkdGg6IDMwZW07XG4gIG1hcmdpbjogM2VtIGF1dG87XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwZW0gMWVtO1xuICBtYXJnaW46IDAgMC41ZW0gMC41ZW0gMC41ZW07XG59XG5cbi5qdW1ib3Ryb24ge1xuICBwYWRkaW5nOiAyZW0gIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wYW5lbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _modules_common_dependencies_services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorService"]
        }, {
          type: _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-authentication-authentication-module-es5.js.map