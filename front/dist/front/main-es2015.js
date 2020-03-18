(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/@modules/@common-dependencies/@common-dependencies-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/@common-dependencies-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CommonDependenciesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonDependenciesRoutingModule", function() { return CommonDependenciesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/@modules/@common-dependencies/pages/main/main.component.ts");
/* harmony import */ var _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/p404/p404.component */ "./src/app/@modules/@common-dependencies/pages/p404/p404.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/engineer/engineer.component */ "./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.ts");


// pages






const routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'about-us', component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"] },
    { path: 'engineer/:name', component: _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_5__["EngineerComponent"] },
    { path: 'p404', component: _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_3__["P404Component"] },
];
class CommonDependenciesRoutingModule {
}
CommonDependenciesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommonDependenciesRoutingModule });
CommonDependenciesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommonDependenciesRoutingModule_Factory(t) { return new (t || CommonDependenciesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommonDependenciesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonDependenciesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/@common-dependencies.module.ts ***!
  \******************************************************************************/
/*! exports provided: CommonDependenciesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonDependenciesModule", function() { return CommonDependenciesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_dependencies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@common-dependencies-routing.module */ "./src/app/@modules/@common-dependencies/@common-dependencies-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/validator.service */ "./src/app/@modules/@common-dependencies/services/validator.service.ts");
/* harmony import */ var _services_highlight_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/highlight.service */ "./src/app/@modules/@common-dependencies/services/highlight.service.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/@modules/@common-dependencies/pages/main/main.component.ts");
/* harmony import */ var _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/p404/p404.component */ "./src/app/@modules/@common-dependencies/pages/p404/p404.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/engineer/engineer.component */ "./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.ts");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/general/nav/nav.component */ "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts");
/* harmony import */ var _components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/general/form-validator/form-validator.component */ "./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.ts");
/* harmony import */ var _components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/general/extra-alert/extra-alert.component */ "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts");
/* harmony import */ var _components_special_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/special/show-code/show-code.component */ "./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.ts");
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/general/footer/footer.component */ "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts");
/* harmony import */ var _components_special_nano_site_nano_site_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/special/nano-site/nano-site.component */ "./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.ts");




// added modules

// services



// pages




// components







class CommonDependenciesModule {
}
CommonDependenciesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommonDependenciesModule });
CommonDependenciesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommonDependenciesModule_Factory(t) { return new (t || CommonDependenciesModule)(); }, providers: [
        // services
        _services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _services_highlight_service__WEBPACK_IMPORTED_MODULE_7__["HighlightService"]
    ], imports: [[
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _common_dependencies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommonDependenciesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommonDependenciesModule, { declarations: [
        // pages
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
        _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_9__["P404Component"],
        _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"],
        // components
        _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
        _components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_13__["FormValidatorComponent"],
        _components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_14__["ExtraAlertComponent"],
        _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_11__["EngineerComponent"],
        _components_special_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_15__["ShowCodeComponent"],
        _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        _components_special_nano_site_nano_site_component__WEBPACK_IMPORTED_MODULE_17__["NanoSiteComponent"]], imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _common_dependencies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommonDependenciesRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]], exports: [_components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_13__["FormValidatorComponent"],
        _components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_14__["ExtraAlertComponent"],
        _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]
        // ValidatorService -- !!! it's not need !!!
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonDependenciesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    // pages
                    _pages_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                    _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_9__["P404Component"],
                    _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"],
                    // components
                    _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
                    _components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_13__["FormValidatorComponent"],
                    _components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_14__["ExtraAlertComponent"],
                    _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_11__["EngineerComponent"],
                    _components_special_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_15__["ShowCodeComponent"],
                    _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                    _components_special_nano_site_nano_site_component__WEBPACK_IMPORTED_MODULE_17__["NanoSiteComponent"]
                ],
                imports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _common_dependencies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommonDependenciesRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [
                    // services
                    _services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorService"],
                    _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
                    _services_highlight_service__WEBPACK_IMPORTED_MODULE_7__["HighlightService"]
                ],
                exports: [
                    _components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_13__["FormValidatorComponent"],
                    _components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_14__["ExtraAlertComponent"],
                    _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]
                    // ValidatorService -- !!! it's not need !!!
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ExtraAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraAlertComponent", function() { return ExtraAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




function ExtraAlertComponent_div_0_ngb_accordion_12_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r47.st.devMsg, " ");
} }
function ExtraAlertComponent_div_0_ngb_accordion_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-accordion", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-panel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExtraAlertComponent_div_0_ngb_accordion_12_ng_template_3_Template, 1, 1, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExtraAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExtraAlertComponent_div_0_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExtraAlertComponent_div_0_ngb_accordion_12_Template, 4, 0, "ngb-accordion", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExtraAlertComponent_div_0_Template_button_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r44.st.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r44.st.userMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.st.devMsg);
} }
class ExtraAlertComponent {
    constructor() {
    }
    ngOnInit() {
    }
    close() {
        this.st.show = false;
    }
}
ExtraAlertComponent.ɵfac = function ExtraAlertComponent_Factory(t) { return new (t || ExtraAlertComponent)(); };
ExtraAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExtraAlertComponent, selectors: [["app-extra-alert"]], inputs: { st: "st" }, decls: 1, vars: 1, consts: [["class", "modal", 4, "ngIf"], [1, "modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["activeIds", "ngb-panel-3", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["activeIds", "ngb-panel-3"], ["acc", "ngbAccordion"], ["title", "Dev msg"], ["ngbPanelContent", ""]], template: function ExtraAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtraAlertComponent_div_0_Template, 16, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.st.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"]], styles: [".modal[_ngcontent-%COMP%] {\n  display: block;\n  background: rgba(0, 0, 0, 0.69);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL2V4dHJhLWFsZXJ0L0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGNvbW1vbi1kZXBlbmRlbmNpZXNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGV4dHJhLWFsZXJ0XFxleHRyYS1hbGVydC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL2V4dHJhLWFsZXJ0L2V4dHJhLWFsZXJ0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AY29tbW9uLWRlcGVuZGVuY2llcy9jb21wb25lbnRzL2dlbmVyYWwvZXh0cmEtYWxlcnQvZXh0cmEtYWxlcnQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWxcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAwJSwgMC42OSkiLCIubW9kYWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtraAlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-extra-alert',
                templateUrl: './extra-alert.component.html',
                styleUrls: ['./extra-alert.component.sass']
            }]
    }], function () { return []; }, { st: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "border-secondary", "mb-3", "mx-auto"], [1, "card-body"], [1, "card-title", "text-center"], [1, "card-text", "text-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We are the Great Team!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  height: 20em;\n  background: url(/assets/img/base/footer/footer-img.jpg) no-repeat center fixed;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBjb21tb24tZGVwZW5kZW5jaWVzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsOEVBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyXHJcbiAgICBoZWlnaHQ6IDIwZW1cclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9iYXNlL2Zvb3Rlci9mb290ZXItaW1nLmpwZykgbm8tcmVwZWF0IGNlbnRlciBmaXhlZCBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIiLCIuZm9vdGVyIHtcbiAgaGVpZ2h0OiAyMGVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvYmFzZS9mb290ZXIvZm9vdGVyLWltZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: FormValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidatorComponent", function() { return FormValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function FormValidatorComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormValidatorComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Must be at least ", ctx_r41.it.errors.minlength.requiredLength, " characters long. ");
} }
function FormValidatorComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Must be shorter ", ctx_r42.it.errors.maxlength.requiredLength, " characters long. ");
} }
function FormValidatorComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r43.it.errors.mailValidator.msg, " ");
} }
function FormValidatorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormValidatorComponent_div_0_div_1_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormValidatorComponent_div_0_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormValidatorComponent_div_0_div_3_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormValidatorComponent_div_0_div_4_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.it.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.it.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.it.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.it.errors.mailValidator && ctx_r39.it.value.length > 0);
} }
class FormValidatorComponent {
    constructor() {
    }
    ngOnInit() {
        // setInterval(_=> console.log('>>>', this.it), 1000 )
    }
}
FormValidatorComponent.ɵfac = function FormValidatorComponent_Factory(t) { return new (t || FormValidatorComponent)(); };
FormValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormValidatorComponent, selectors: [["app-form-validator"]], inputs: { it: "it" }, decls: 1, vars: 1, consts: [["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function FormValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormValidatorComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.it.invalid && (ctx.it.dirty || ctx.it.touched));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvZ2VuZXJhbC9mb3JtLXZhbGlkYXRvci9mb3JtLXZhbGlkYXRvci5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-validator',
                templateUrl: './form-validator.component.html',
                styleUrls: ['./form-validator.component.sass']
            }]
    }], function () { return []; }, { it: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class NavComponent {
    constructor() {
        this.navbarOpen = false;
        this.drop1 = false;
        this.drop2 = false;
        this.navbarCollapse = 'navbar-collapse prepare';
    }
    ngOnInit() {
    }
    navToggle() {
        // open/close
        this.navbarOpen = !this.navbarOpen;
        // open ?
        this.navbarOpen
            ?
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["steps"])([
                    [0, _ => this.navbarCollapse = 'navbar-collapse collapsing prepare'],
                    [20, _ => this.navbarCollapse = 'navbar-collapse opening prepare'],
                    [500, _ => this.navbarCollapse = 'navbar-collapse opened prepare'],
                ])
            :
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["steps"])([
                    [0, _ => this.navbarCollapse = 'navbar-collapse opening prepare'],
                    [70, _ => this.navbarCollapse = 'navbar-collapse  prepare'],
                ]);
        // this.navbarCollapse = 'navbar-collapse  prepare'
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 51, vars: 5, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLink", "/main", 1, "navbar-brand"], [1, "navbar-toggler", "collapsed", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarColor02", 3, "ngClass"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "/main", 1, "nav-link"], [1, "sr-only"], [1, "nav-item", "dropdown", 3, "ngClass", "click"], ["data-toggle", "dropdown", "id", "themes", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "themes", 1, "dropdown-menu", 3, "ngClass"], ["routerLink", "/main", 1, "dropdown-item"], [1, "dropdown-divider"], ["routerLink", "/about-us", 1, "dropdown-item"], ["routerLink", "/auth/help", 1, "dropdown-item"], ["routerLink", "/auth/login", 1, "dropdown-item"], ["routerLink", "/auth/register", 1, "dropdown-item"], ["routerLink", "/", 1, "dropdown-item"], ["routerLink", "/dev/forms", 1, "dropdown-item"], ["routerLink", "/dev/url-queries", 1, "dropdown-item"], ["routerLink", "/dev/any", 1, "dropdown-item"], [1, "nav-item"], ["routerLink", "/about-us", 1, "nav-link"], ["routerLink", "/main"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "text", "placeholder", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-secondary", "my-2", "my-sm-0"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_3_listener($event) { return ctx.navToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_12_listener($event) { return ctx.drop1 = !ctx.drop1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "auth/Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "auth/Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "auth/Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_29_listener($event) { return ctx.drop2 = !ctx.drop2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Dev-guide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "URL Queries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Any examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "JS-CLAN -> main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.navbarCollapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.drop1 ? "show" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.drop1 ? "show" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.drop2 ? "show" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.drop2 ? "show" : "");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ɵm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], styles: [".navbar-collapse[_ngcontent-%COMP%] {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.prepare[_ngcontent-%COMP%] {\n  overflow: visible;\n  display: block;\n}\n\n@media screen and (max-width: 992px) {\n  .prepare[_ngcontent-%COMP%] {\n    height: 0;\n    overflow: hidden;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  .opening[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n}\n\n.opened[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.collapsing[_ngcontent-%COMP%] {\n  height: 0;\n}\n\n@media (min-width: 992px) {\n  .dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL25hdi9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBjb21tb24tZGVwZW5kZW5jaWVzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxuYXZcXG5hdi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL25hdi9uYXYuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx3QkFBQTtFQUFBLGdCQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURBSTtFQUhKO0lBSVEsU0FBQTtJQUNBLGdCQUFBO0VDR047QUFDRjs7QURBSTtFQURKO0lBRVEsYUFBQTtFQ0lOO0FBQ0Y7O0FESEE7RUFDSSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNNSjs7QURKQTtFQUNJLFNBQUE7QUNPSjs7QURISTtFQURKO0lBRVEsa0JBQUE7RUNPTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL25hdi9uYXYuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdmJhci1jb2xsYXBzZVxyXG4gICAgdHJhbnNpdGlvbjogLjVzXHJcblxyXG4ucHJlcGFyZVxyXG4gICAgb3ZlcmZsb3c6IHZpc2libGVcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweClcclxuICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgICAgICAgXHJcblxyXG4ub3BlbmluZ1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpXHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweFxyXG5cclxuLm9wZW5lZFxyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudCAgXHJcblxyXG4uY29sbGFwc2luZ1xyXG4gICAgaGVpZ2h0OiAwICAgIFxyXG5cclxuXHJcbi5kcm9wZG93bi1tZW51XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlIiwiLm5hdmJhci1jb2xsYXBzZSB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5wcmVwYXJlIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnByZXBhcmUge1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5vcGVuaW5nIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG59XG5cbi5vcGVuZWQge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uY29sbGFwc2luZyB7XG4gIGhlaWdodDogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NanoSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NanoSiteComponent", function() { return NanoSiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general/nav/nav.component */ "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts");
/* harmony import */ var _general_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/footer/footer.component */ "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts");




class NanoSiteComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NanoSiteComponent.ɵfac = function NanoSiteComponent_Factory(t) { return new (t || NanoSiteComponent)(); };
NanoSiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NanoSiteComponent, selectors: [["app-nano-site"]], decls: 19, vars: 0, consts: [[1, "wrap"]], template: function NanoSiteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "somethin 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "somethin 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "somethin 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _general_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".wrap[_ngcontent-%COMP%] {\n  margin: auto;\n  background-color: grey;\n  width: 50%;\n  height: 50%;\n  box-shadow: 0.2em 5em 5em 5em rgba(0, 0, 0, 0.3);\n  -webkit-transform: perspective(2000px) rotateY(35deg);\n          transform: perspective(2000px) rotateY(35deg);\n  -webkit-transition: 2s;\n  transition: 2s;\n}\n.wrap[_ngcontent-%COMP%]:hover {\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg);\n}\n.wrap[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9zcGVjaWFsL25hbm8tc2l0ZS9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBjb21tb24tZGVwZW5kZW5jaWVzXFxjb21wb25lbnRzXFxzcGVjaWFsXFxuYW5vLXNpdGVcXG5hbm8tc2l0ZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9zcGVjaWFsL25hbm8tc2l0ZS9uYW5vLXNpdGUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtFQUNBLHNCQUFBO0VBQUEsY0FBQTtBQ0NKO0FEQUk7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0FDRVI7QURESTtFQUNJLGtCQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AY29tbW9uLWRlcGVuZGVuY2llcy9jb21wb25lbnRzL3NwZWNpYWwvbmFuby1zaXRlL25hbm8tc2l0ZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwIFxyXG4gICAgbWFyZ2luOiBhdXRvXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5XHJcbiAgICB3aWR0aDogNTAlXHJcbiAgICBoZWlnaHQ6IDUwJVxyXG4gICAgYm94LXNoYWRvdzogLjJlbSA1ZW0gNWVtIDVlbSByZ2JhKDAsMCwwLDAuMylcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMjAwMHB4KSByb3RhdGVZKDM1ZGVnKVxyXG4gICAgdHJhbnNpdGlvbjogMnNcclxuICAgICY6aG92ZXJcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgXHJcbiAgICBkaXZcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuIiwiLndyYXAge1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBib3gtc2hhZG93OiAwLjJlbSA1ZW0gNWVtIDVlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMjAwMHB4KSByb3RhdGVZKDM1ZGVnKTtcbiAgdHJhbnNpdGlvbjogMnM7XG59XG4ud3JhcDpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbn1cbi53cmFwIGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NanoSiteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nano-site',
                templateUrl: './nano-site.component.html',
                styleUrls: ['./nano-site.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ShowCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCodeComponent", function() { return ShowCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/highlight.service */ "./src/app/@modules/@common-dependencies/services/highlight.service.ts");



class ShowCodeComponent {
    constructor(highlightService) {
        this.highlightService = highlightService;
        this.codeExamples = [
            {
                title: 'example - 1',
                language: 'css',
                content: `body {
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }`
            },
            {
                title: 'example - 2',
                language: 'typescript',
                content: `console.log( const[...profit]= () => {} );`
            },
            {
                title: 'example - 3',
                language: 'javascript',
                content: `let i = () => {};`
            }
        ];
    }
    ngOnInit() {
        this.highlightService.highlightAll();
    }
}
ShowCodeComponent.ɵfac = function ShowCodeComponent_Factory(t) { return new (t || ShowCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"])); };
ShowCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowCodeComponent, selectors: [["app-show-code"]], inputs: { code: "code", language: "language" }, decls: 5, vars: 3, template: function ShowCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("language-" + ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n      ", ctx.code, "\n    ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvc3BlY2lhbC9zaG93LWNvZGUvc2hvdy1jb2RlLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-code',
                templateUrl: './show-code.component.html',
                styleUrls: ['./show-code.component.sass']
            }]
    }], function () { return [{ type: _services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"] }]; }, { code: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/data/team.ts":
/*!************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/data/team.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const team = [
    {
        img: "https://www.dccomics.com/sites/default/files/Char_GetToKnow_Batman80_5ca54cb83a27a6.53173051.png",
        name: "engineer-1",
        chapter: "some important information about an engineer#1",
        past: "bla bla bla about your past",
        present: "bla bla bla about present",
        future: "bla bla bla about future",
        skills: [
            {
                type: 'HTML',
                level: '72',
                description: 'bla bla bla'
            },
            {
                type: 'CSS',
                level: '62',
                description: 'bla bla bla'
            },
            {
                type: 'JS',
                level: '52',
                description: 'bla bla bla'
            },
            {
                type: 'NodeJS',
                level: '52',
                description: 'bla bla bla'
            },
        ]
    },
    {
        img: "https://www.dccomics.com/sites/default/files/gettoknow_atom_55f21e39aa2288.78318196.png",
        name: "engineer-2",
        chapter: "some important information about an engineer#2",
        past: "bla bla bla about your past",
        present: "bla bla bla about present",
        future: "bla bla bla about future",
        skills: [
            {
                type: 'HTML',
                level: '52',
                description: 'bla bla bla'
            },
            {
                type: 'CSS',
                level: '42',
                description: 'bla bla bla'
            },
            {
                type: 'JS',
                level: '62',
                description: 'bla bla bla'
            },
            {
                type: 'NodeJS',
                level: '62',
                description: 'bla bla bla'
            },
        ]
    },
    {
        img: "https://www.dccomics.com/sites/default/files/gettoknow_firestorm_55f21ee244cb23.64798555.png",
        name: "engineer-3",
        chapter: "some important information about an engineer#3",
        past: "bla bla bla about your past",
        present: "bla bla bla about present",
        future: "bla bla bla about future",
        skills: [
            {
                type: 'HTML',
                level: '82',
                description: 'bla bla bla'
            },
            {
                type: 'CSS',
                level: '72',
                description: 'bla bla bla'
            },
            {
                type: 'JS',
                level: '42',
                description: 'bla bla bla'
            },
            {
                type: 'NodeJS',
                level: '32',
                description: 'bla bla bla'
            },
        ]
    },
    {
        img: "https://www.dccomics.com/sites/default/files/gettoknow2_deathstroke_59373f6ab3aeb6.37111804.png",
        name: "engineer-4",
        chapter: "some important information about an engineer#4",
        past: "bla bla bla about your past",
        present: "bla bla bla about present",
        future: "bla bla bla about future",
        skills: [
            {
                type: 'HTML',
                level: '62',
                description: 'bla bla bla'
            },
            {
                type: 'CSS',
                level: '52',
                description: 'bla bla bla'
            },
            {
                type: 'JS',
                level: '42',
                description: 'bla bla bla'
            },
            {
                type: 'NodeJS',
                level: '42',
                description: 'bla bla bla'
            },
        ]
    }
];
/* harmony default export */ __webpack_exports__["default"] = (team);


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.ts ***!
  \************************************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _data_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/team */ "./src/app/@modules/@common-dependencies/data/team.ts");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/general/footer/footer.component */ "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const _c0 = function (a1) { return ["/engineer", a1]; };
function AboutUsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Look more detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bro_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", bro_r28.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bro_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bro_r28.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, bro_r28.name));
} }
class AboutUsComponent {
    constructor() {
        this.team = _data_team__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.shuffledArr = (arr) => arr.sort(() => Math.random() - 0.5);
    }
    ngOnInit() {
        _app_state__WEBPACK_IMPORTED_MODULE_1__["default"].nav.msg += 2;
        this.arrayRandomizer(_data_team__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }
    ngOnDestroy() {
    }
    arrayRandomizer(arr) {
        let firstItem = arr.shift(), allItems = this.shuffledArr(arr);
        return allItems.unshift(firstItem);
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 19, vars: 1, consts: [[1, "card", "border-secondary", "mb-3", "mx-auto"], [1, "card-body"], [1, "card-title", "text-center"], [1, "card-text", "text-center"], ["class", "person-card", 4, "ngFor", "ngForOf"], [1, "person-card"], [1, "person-card__portrait"], ["alt", "", 3, "src"], [1, "person-card__info"], [1, "btn", "btn-success", 3, "routerLink"], [1, "mdi", "mdi-arrow-right"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AboutUsComponent_div_15_Template, 11, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team);
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".person-card[_ngcontent-%COMP%] {\n  margin: 0 5em 10em 5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.person-card[_ngcontent-%COMP%]:nth-child(even) {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n}\n\n.person-card__portrait[_ngcontent-%COMP%] {\n  width: 35%;\n}\n\n.person-card__portrait[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n.person-card__info[_ngcontent-%COMP%] {\n  width: 60%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.mdi-arrow-right[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  padding-left: 0.5em;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvYWJvdXQtdXMvRDpcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAY29tbW9uLWRlcGVuZGVuY2llc1xccGFnZXNcXGFib3V0LXVzXFxhYm91dC11cy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0UsOEJBQUE7RUFBQSw4QkFBQTtVQUFBLDJCQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0FDR0Y7O0FERkU7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0lOOztBREZBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNLRjs7QURIQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNNRjs7QURKQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVyc29uLWNhcmRcclxuICAgIG1hcmdpbjogMCA1ZW0gMTBlbSA1ZW1cclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kIFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG5cclxuLnBlcnNvbi1jYXJkOm50aC1jaGlsZChldmVuKVxyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZVxyXG5cclxuLnBlcnNvbi1jYXJkX19wb3J0cmFpdFxyXG4gIHdpZHRoOiAzNSVcclxuICBpbWdcclxuICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgZGlzcGxheTogYmxvY2tcclxuXHJcbi5wZXJzb24tY2FyZF9faW5mb1xyXG4gIHdpZHRoOiA2MCVcclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiBcclxuICBhbGlnbi1pdGVtczogY2VudGVyICAgXHJcblxyXG4ubWRpLWFycm93LXJpZ2h0XHJcbiAgZm9udC1zaXplOiAxLjVlbVxyXG4gIHBhZGRpbmctbGVmdDogLjVlbVxyXG5cclxuLmJ0bi1zdWNjZXNzXHJcbiAgZm9udC1zaXplOiAxLjFlbVxyXG4gIGRpc3BsYXk6IGZsZXhcclxuICBhbGlnbi1pdGVtczogY2VudGVyIiwiLnBlcnNvbi1jYXJkIHtcbiAgbWFyZ2luOiAwIDVlbSAxMGVtIDVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wZXJzb24tY2FyZDpudGgtY2hpbGQoZXZlbikge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5wZXJzb24tY2FyZF9fcG9ydHJhaXQge1xuICB3aWR0aDogMzUlO1xufVxuLnBlcnNvbi1jYXJkX19wb3J0cmFpdCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wZXJzb24tY2FyZF9faW5mbyB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZGktYXJyb3ctcmlnaHQge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.ts ***!
  \************************************************************************************/
/*! exports provided: EngineerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineerComponent", function() { return EngineerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/team */ "./src/app/@modules/@common-dependencies/data/team.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/highlight.service */ "./src/app/@modules/@common-dependencies/services/highlight.service.ts");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/general/footer/footer.component */ "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts");
/* harmony import */ var _components_special_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/special/show-code/show-code.component */ "./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.ts");










function EngineerComponent_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} }
function EngineerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EngineerComponent_div_10_div_5_Template, 1, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r31 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r31.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.numToArr(skill_r31.level));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", skill_r31.level, "% ");
} }
function EngineerComponent_ngb_tab_26_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const codeExample_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", codeExample_r34.title, " ");
} }
function EngineerComponent_ngb_tab_26_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-show-code", 20);
} if (rf & 2) {
    const codeExample_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", codeExample_r34.content)("language", codeExample_r34.language);
} }
function EngineerComponent_ngb_tab_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EngineerComponent_ngb_tab_26_ng_template_1_Template, 1, 1, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EngineerComponent_ngb_tab_26_ng_template_2_Template, 1, 2, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EngineerComponent {
    constructor(route, highlightService) {
        this.route = route;
        this.highlightService = highlightService;
        this.engineer = this.getEngineer();
        this.codeExamples = [
            {
                title: 'example - 1',
                language: 'css',
                content: `body {
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }`
            },
            {
                title: 'example - 2',
                language: 'typescript',
                content: `console.log( const[...profit]= () => {} );`
            },
            {
                title: 'example - 3',
                language: 'javascript',
                content: `let i = () => {};`
            }
        ];
    }
    ngOnInit() {
        setTimeout(() => this.highlightService.highlightAll(), 100);
    }
    getEngineer() {
        let name = this.route.snapshot.paramMap.get('name');
        let engineer = _data_team__WEBPACK_IMPORTED_MODULE_1__["default"].filter(engineer => engineer.name == name);
        return engineer[0];
    }
    numToArr(num) {
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(i);
        }
        return arr;
    }
    highlight() {
        this.highlightService.highlightAll();
        console.log('click');
    }
}
EngineerComponent.ɵfac = function EngineerComponent_Factory(t) { return new (t || EngineerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"])); };
EngineerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EngineerComponent, selectors: [["app-engineer"]], decls: 29, vars: 8, consts: [[1, "wrap"], [1, "about"], [1, "member-img"], ["alt", "", 3, "src"], [1, "test"], [1, "right"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "icons"], [1, "iconBtn", "mdi", "mdi-linkedin-box"], [1, "iconBtn", "mdi", "mdi-github-box"], [1, "member-info"], [1, "nav-fill", 3, "click"], [4, "ngFor", "ngForOf"], [1, "skill"], [1, "type"], [1, "level"], ["class", "progressBar", 4, "ngFor", "ngForOf"], [1, "progressBar"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [3, "code", "language"]], template: function EngineerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EngineerComponent_div_10_Template, 7, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngb-tabset", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerComponent_Template_ngb_tabset_click_25_listener($event) { return ctx.highlight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EngineerComponent_ngb_tab_26_Template, 3, 0, "ngb-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.engineer.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.engineer.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.engineer.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.engineer.chapter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.engineer.past);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.engineer.present);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.engineer.future);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.codeExamples);
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabset"], _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabContent"], _components_special_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_8__["ShowCodeComponent"]], styles: [".wrap[_ngcontent-%COMP%] {\n  margin: 0 5em;\n}\n\n.member-img[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 50%;\n  margin: 2em;\n}\n\n.member-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.member-info[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.level[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.member-code[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\ncode[_ngcontent-%COMP%] {\n  margin: 2em;\n}\n\n.about[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n.test[_ngcontent-%COMP%] {\n  margin: 2em;\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.progressBar[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.125em;\n  height: 1em;\n  background-color: orange;\n  margin-right: 0.25em;\n  box-shadow: 0px 0px 7px 2px rgba(255, 0, 0, 0.42);\n}\n\n.iconBtn[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n.iconBtn[_ngcontent-%COMP%]:hover::before {\n  cursor: pointer;\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n}\n\n.icons[_ngcontent-%COMP%] {\n  -webkit-transform: translateX(-0.4em);\n          transform: translateX(-0.4em);\n  -webkit-transform: translateY(1.4em);\n          transform: translateY(1.4em);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvZW5naW5lZXIvRDpcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAY29tbW9uLWRlcGVuZGVuY2llc1xccGFnZXNcXGVuZ2luZWVyXFxlbmdpbmVlci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvZW5naW5lZXIvZW5naW5lZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0FDR1I7O0FEREE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSUo7O0FEREE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7QUNNSjs7QURKQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ09KOztBRExBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDUUo7O0FETEE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlEQUFBO0FDUUo7O0FETkE7RUFDSSxjQUFBO0FDU0o7O0FEUFE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ1NaOztBRFBBO0VBQ0kscUNBQUE7VUFBQSw2QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL3BhZ2VzL2VuZ2luZWVyL2VuZ2luZWVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAgXHJcbiAgICBtYXJnaW46IDAgNWVtXHJcblxyXG4ubWVtYmVyLWltZ1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICB3aWR0aDogNTAlXHJcbiAgICBtYXJnaW46IDJlbVxyXG4gICAgaW1nXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuXHJcbi5tZW1iZXItaW5mb1xyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG5cclxuXHJcbi5sZXZlbFxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG5cclxuLm1lbWJlci1jb2RlXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcblxyXG5jb2RlICAgIFxyXG4gICAgbWFyZ2luOiAyZW1cclxuXHJcbi5hYm91dCBcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuXHJcbi50ZXN0XHJcbiAgICBtYXJnaW46IDJlbVxyXG4gICAgd2lkdGg6IDUwJVxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAgICBcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG5cclxuXHJcbi5wcm9ncmVzc0JhclxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICB3aWR0aDogLjEyNWVtXHJcbiAgICBoZWlnaHQ6IDFlbVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlXHJcbiAgICBtYXJnaW4tcmlnaHQ6IC4yNWVtXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAycHggcmdiYSgyNTUsIDAsIDAsIDAuNDIpXHJcblxyXG4uaWNvbkJ0blxyXG4gICAgZm9udC1zaXplOiAzZW0gXHJcbiAgICAmOmhvdmVyIFxyXG4gICAgICAgICY6OmJlZm9yZVxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSAgIFxyXG5cclxuLmljb25zXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLS40ZW0pXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMS40ZW0pXHJcbiIsIi53cmFwIHtcbiAgbWFyZ2luOiAwIDVlbTtcbn1cblxuLm1lbWJlci1pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMmVtO1xufVxuLm1lbWJlci1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZW1iZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZXZlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW1iZXItY29kZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmNvZGUge1xuICBtYXJnaW46IDJlbTtcbn1cblxuLmFib3V0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRlc3Qge1xuICBtYXJnaW46IDJlbTtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvZ3Jlc3NCYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwLjEyNWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMnB4IHJnYmEoMjU1LCAwLCAwLCAwLjQyKTtcbn1cblxuLmljb25CdG4ge1xuICBmb250LXNpemU6IDNlbTtcbn1cbi5pY29uQnRuOmhvdmVyOjpiZWZvcmUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuLmljb25zIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjRlbSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxLjRlbSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EngineerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-engineer',
                templateUrl: './engineer.component.html',
                styleUrls: ['./engineer.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/pages/main/main.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/pages/main/main.component.ts ***!
  \****************************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@modules/@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts");
/* harmony import */ var _components_special_nano_site_nano_site_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/special/nano-site/nano-site.component */ "./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.ts");
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/general/footer/footer.component */ "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts");









class MainComponent {
    constructor(api) {
        this.api = api;
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _app_state__WEBPACK_IMPORTED_MODULE_2__["default"].nav.msg += 1;
            Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])(_app_state__WEBPACK_IMPORTED_MODULE_2__["default"].nav.msg);
            const fromGit = yield this.api.test();
            Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])(fromGit);
        });
    }
    ngOnDestroy() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 39, vars: 0, consts: [[1, "container", "main"], [1, "hero-main"], [1, "hero-logo"], ["src", "assets/img/base/Logo-Chugayster.svg", "alt", "", "srcset", "", 1, "big-logo"], [1, "hero-text-color"], [1, "btn", "btn-start"], [1, "hero-description"], [1, "mdi", "mdi-view-grid-plus"], [1, "hero"], [1, "example"], [1, "example-left"], [1, "example-right"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Chugayster");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "GET STARTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " The hight layer system ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " of architecture and build modules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " for you app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "app-nano-site");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "app-footer");
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _components_special_nano_site_nano_site_component__WEBPACK_IMPORTED_MODULE_6__["NanoSiteComponent"], _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".big-logo[_ngcontent-%COMP%] {\n  margin-right: 5em;\n  width: 15em;\n}\n\n.hero-logo[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transform: translateY(-3em);\n          transform: translateY(-3em);\n}\n\n.hero[_ngcontent-%COMP%] {\n  z-index: -1;\n  background: linear-gradient(200deg, #fbff00, #f58442);\n  position: absolute;\n  width: 100%;\n  height: 36em;\n  -webkit-transform: skewY(-8deg);\n          transform: skewY(-8deg);\n  -webkit-transform-origin: 100% center;\n          transform-origin: 100% center;\n  overflow: hidden;\n  right: 0;\n  top: -15em;\n}\n\n.hero-main[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.hero-description[_ngcontent-%COMP%] {\n  margin-top: -10em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.hero-description[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: left;\n  padding-left: 1em;\n  line-height: 1.2em;\n}\n\n.hero-description[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 5.95em;\n  color: white;\n  opacity: 0.5;\n}\n\n.hero-text-color[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: #000;\n}\n\n.hero-text-color[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n\n.hero-text-color[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.btn-start[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0.5em 1em;\n  border-radius: 2em;\n  font-size: 1.2em;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.btn-start[_ngcontent-%COMP%]:hover {\n  box-shadow: 0.2em 0.4em 0.5em 0.2em rgba(0, 0, 0, 0.3);\n}\n\n.expample[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.example-left[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.example-left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 13em;\n  width: 100%;\n  background-color: #fff;\n  margin: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvbWFpbi9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBjb21tb24tZGVwZW5kZW5jaWVzXFxwYWdlc1xcbWFpblxcbWFpbi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0tKOztBREpJO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNNUjs7QURMSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNPUjs7QURKQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFdBQUE7QUNPSjs7QUROSTtFQUNJLG9CQUFBO0FDUVI7O0FEUEk7RUFDSSxrQkFBQTtBQ1NSOztBRFBBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURUSTtFQUNJLHNEQUFBO0FDV1I7O0FEVEE7RUFDSSxrQkFBQTtBQ1lKOztBRFZBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ2FKOztBRFpJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNjUiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaWctbG9nb1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1ZW1cclxuICAgIHdpZHRoOiAxNWVtXHJcblxyXG4uaGVyby1sb2dvXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNlbSlcclxuXHJcbi5oZXJvXHJcbiAgICB6LWluZGV4OiAtMVxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIwMGRlZywgI2ZiZmYwMCwgI2Y1ODQ0MilcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGhlaWdodDogMzZlbVxyXG4gICAgdHJhbnNmb3JtOiBza2V3WSgtOGRlZylcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgY2VudGVyXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgICByaWdodDogMFxyXG4gICAgdG9wOiAtMTVlbVxyXG5cclxuLmhlcm8tbWFpblxyXG4gICAgaGVpZ2h0OiAxMDB2aCAgIFxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgICBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuIFxyXG4uaGVyby1kZXNjcmlwdGlvblxyXG4gICAgbWFyZ2luLXRvcDogLTEwZW1cclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICBoNCBcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbVxyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbVxyXG4gICAgaVxyXG4gICAgICAgIGZvbnQtc2l6ZTogNS45NWVtXHJcbiAgICAgICAgY29sb3I6IHdoaXRlXHJcbiAgICAgICAgb3BhY2l0eTogLjVcclxuICAgICAgICBcclxuXHJcbi5oZXJvLXRleHQtY29sb3JcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgIGNvbG9yOiAjMDAwXHJcbiAgICBoMSBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNWVtXHJcbiAgICBoNFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbVxyXG4gICAgXHJcbi5idG4tc3RhcnRcclxuICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgIHBhZGRpbmc6IC41ZW0gMWVtXHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW1cclxuICAgIGZvbnQtc2l6ZTogMS4yZW1cclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMFxyXG4gICAgJjpob3ZlclxyXG4gICAgICAgIGJveC1zaGFkb3c6IC4yZW0gLjRlbSAuNWVtIC4yZW0gcmdiYSgwLDAsMCwwLjMpXHJcblxyXG4uZXhwYW1wbGVcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG5cclxuLmV4YW1wbGUtbGVmdFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICB3aWR0aDogMjAlXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuICAgIGRpdlxyXG4gICAgICAgIGhlaWdodDogMTNlbVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG4gICAgICAgIG1hcmdpbjogLjVlbSIsIi5iaWctbG9nbyB7XG4gIG1hcmdpbi1yaWdodDogNWVtO1xuICB3aWR0aDogMTVlbTtcbn1cblxuLmhlcm8tbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM2VtKTtcbn1cblxuLmhlcm8ge1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIwMGRlZywgI2ZiZmYwMCwgI2Y1ODQ0Mik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzZlbTtcbiAgdHJhbnNmb3JtOiBza2V3WSgtOGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICByaWdodDogMDtcbiAgdG9wOiAtMTVlbTtcbn1cblxuLmhlcm8tbWFpbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVyby1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IC0xMGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZXJvLWRlc2NyaXB0aW9uIGg0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xufVxuLmhlcm8tZGVzY3JpcHRpb24gaSB7XG4gIGZvbnQtc2l6ZTogNS45NWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmhlcm8tdGV4dC1jb2xvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjMDAwO1xufVxuLmhlcm8tdGV4dC1jb2xvciBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuLmhlcm8tdGV4dC1jb2xvciBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLmJ0bi1zdGFydCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYnRuLXN0YXJ0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMC4yZW0gMC40ZW0gMC41ZW0gMC4yZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uZXhwYW1wbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5leGFtcGxlLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5leGFtcGxlLWxlZnQgZGl2IHtcbiAgaGVpZ2h0OiAxM2VtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwLjVlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.sass']
            }]
    }], function () { return [{ type: _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/pages/p404/p404.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/pages/p404/p404.component.ts ***!
  \****************************************************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class P404Component {
    constructor() {
    }
    ngOnInit() {
    }
}
P404Component.ɵfac = function P404Component_Factory(t) { return new (t || P404Component)(); };
P404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: P404Component, selectors: [["app-p404"]], decls: 4, vars: 0, consts: [["routerLink", "/main", "type", "button", 1, "btn", "btn-primary", "btn-lg"]], template: function P404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "p404 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL3BhZ2VzL3A0MDQvcDQwNC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-p404',
                templateUrl: './p404.component.html',
                styleUrls: ['./p404.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/services/api.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/services/api.service.ts ***!
  \***********************************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
if (location.hostname == 'localhost')
    var url = 'http://localhost'; //dev
else
    var url = ''; //production
class ApiService {
    constructor(http) {
        this.http = http;
        // test
        this.test = () => this.http.get('https://api.github.com/users').toPromise();
        // front
        this.getJson = (path) => this.http.get('./assets' + path).toPromise();
        // back
        this.register = (userData) => this.http.post(url + '/api/auth/register', userData, httpOptions).toPromise();
        this.login = (userData) => this.http.post(url + '/api/auth/login', userData, httpOptions).toPromise();
    }
    // auth info ???
    // register = (userData) => this.http.get('http://localhost:49001/api/auth/info', userData).toPromise();
    // login(userData) {
    //   return this.http.post(url + '/login', userData, httpOptions).toPromise();
    // }
    // register(userData) {
    //   return this.http.post(url + '/register', userData, httpOptions).toPromise();
    // }
    // getProduct(id) {
    //   return this.http.get(url + '/product/' + id).toPromise(); //productID
    // }
    // getTodos() {
    //   return this.http.get<Todo[]>(url + '/todos') //leave becouse we don't use it
    // }
    // setTodos(todos) {
    //   return this.http.post<Todo[]>(url + '/todos', todos, httpOptions) //leave becouse we don't use it
    // }
    getSessionInfo() {
        return this.http.get(url + '/session-info').toPromise();
    }
    // getProducts(): any {
    //   return this.http.get(url + '/products').toPromise(); 
    // }
    // // search() {
    // //   return this.http.get(url + '/search'); // dont know
    // // }
    // getUsers() {
    //   return this.http.get(url + '/users').toPromise();
    // }
    // setCategories(productCategories) {
    //   return this.http.post(url + '/categories', productCategories, httpOptions).toPromise();
    // }
    // getCategories() {
    //   return this.http.get(url + '/categories').toPromise();
    // }
    // addProduct(newProduct) {
    //   return this.http.post(url + '/products', newProduct, httpOptions).toPromise();
    // }
    // upload(obj) {
    //   return this.http.post(url + '/upload2', obj, httpOptions).toPromise();
    // }
    // addUserStatistic(obj) {
    //   return this.http.post(url + '/user-statistic', obj, httpOptions).toPromise();
    // }
    // addVoute(obj) {
    //   return this.http.post(url + '/user-voute', obj, httpOptions).toPromise();
    // }
    // megaSearch(queryString) {
    //   return this.http.get(`${url}/mega-search${queryString}`).toPromise();
    // }
    // editProduct(product) {
    //   return this.http.put(url + '/edit-product', product, httpOptions).toPromise();
    // }
    // contactsMail(mail) {
    //   return this.http.post(url + '/contacts-mail', mail, httpOptions).toPromise();
    // }
    // getAdminNotifications() {
    //   return this.http.get(url + '/admin-notifications',httpOptions).toPromise();
    // }
    // getAdminMessages(currentPage, sizePage) {
    //   return this.http.get(url + '/admin-messages/' + currentPage + '?size=' + sizePage, httpOptions).toPromise();
    // }
    // moveToArchiveAdminMessages(_id) {
    //   return this.http.put(url + '/move-to-archive-admin-messages', { _id }, httpOptions).toPromise();
    // }
    // moveToTransactionArchive(_id) {
    //   return this.http.put( url + '/transaction-archive', { _id }, httpOptions ).toPromise();
    // }
    // moveToTransactionFromArchive(_id) {
    //   return this.http.put( url + '/archive-to-transaction', { _id }, httpOptions ).toPromise();
    // }
    // getAdminMessagesFromArchive(currentPage, sizePage) {
    //   return this.http.get(url + '/admin-messages-archive/' + currentPage + '?size=' + sizePage, httpOptions).toPromise();
    // }
    // getTransactionsFromArchive(currentPage, sizePage) {
    //   return this.http.get(url + '/admin-transactions-archive/' + currentPage + '?size=' + sizePage, httpOptions).toPromise();
    // }  
    // getUniversalSearch(currentPage, queryString) {
    //   return this.http.get(`${url}/universal-search/${currentPage}${queryString}`, httpOptions).toPromise();
    // }
    createFingerPrint(systemInfo) {
        console.log(systemInfo);
        return this.http.post(url + '/session', systemInfo, httpOptions).toPromise();
    }
    getUserInfoIfLogged() {
        return this.http.get(url + '/get-user-info-if-logged', httpOptions).toPromise();
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/services/fingerprint.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/services/fingerprint.service.ts ***!
  \*******************************************************************************/
/*! exports provided: FingerprintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerprintService", function() { return FingerprintService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ "./src/app/@modules/@common-dependencies/services/storage.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");





class FingerprintService {
    constructor(storage, api) {
        this.storage = storage;
        this.api = api;
    }
    checkIfItExist() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(await this.getFingerPrint())
            if (!(yield this.getFingerPrint()))
                this.createFingerPrint(); // <-- there is something wrong with IF statement
        });
    }
    getFingerPrint() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.storage.getItem('session'); // get item is finger print
        });
    }
    createFingerPrint() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fromServer = yield this.api.createFingerPrint({ appVersion: navigator.appVersion });
            console.log('token from server - ', fromServer);
            this.storage.setItem('session', fromServer.session);
            // token set to local storage 
        });
    }
}
FingerprintService.ɵfac = function FingerprintService_Factory(t) { return new (t || FingerprintService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
FingerprintService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FingerprintService, factory: FingerprintService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FingerprintService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/services/highlight.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/services/highlight.service.ts ***!
  \*****************************************************************************/
/*! exports provided: HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-sass */ "./node_modules/prismjs/components/prism-sass.js");
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_10__);
// Manual
// https://auralinna.blog/post/2017/code-syntax-highlighting-with-angular-and-prismjs













class HighlightService {
    constructor(platformId) {
        this.platformId = platformId;
    }
    highlightAll() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
        }
    }
}
HighlightService.ɵfac = function HighlightService_Factory(t) { return new (t || HighlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
HighlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HighlightService, factory: HighlightService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/services/storage.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/services/storage.service.ts ***!
  \***************************************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StorageService {
    constructor() {
    }
    getBasketFromStorage() {
        const json = localStorage.getItem('basket');
        if (json == null)
            return [];
        else
            return JSON.parse(json);
    }
    setItem(key, value) {
        //return Promise.resolve().then(function () {
        localStorage.setItem(key, JSON.stringify(value));
        //});
    }
    getItem(key) {
        return Promise.resolve().then(function () {
            return JSON.parse(localStorage.getItem(key));
        });
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@common-dependencies/services/validator.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/services/validator.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorService", function() { return ValidatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ValidatorService {
    constructor() {
    }
    test() {
        return 'v serv';
    }
    // check email
    mailValidator() {
        const x = { mailValidator: { msg: `Incorrect email` } };
        const pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return (control) => {
            const isValide = pattern.test(control.value);
            return isValide ? null : x;
        };
    }
    // check items equal
    itemsAreEqual(itemName, first, second) {
        const x = { itemsAreEqual: { msg: `${itemName} are not equal` } };
        return (group) => {
            const isEqual = group.get(first).value === group.get(second).value;
            return isEqual ? null : x; // x => this.userForm.controls.passwords.errors.custom
        };
    }
}
ValidatorService.ɵfac = function ValidatorService_Factory(t) { return new (t || ValidatorService)(); };
ValidatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidatorService, factory: ValidatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        // loadChildren: 'src/app/@modules/js-clan/js-clan.module#JsClanModule'
        loadChildren: () => __webpack_require__.e(/*! import() | modules-js-clan-js-clan-module */ "default~modules-authentication-authentication-module~modules-js-clan-js-clan-module").then(__webpack_require__.bind(null, /*! ./@modules/@js-clan/js-clan.module */ "./src/app/@modules/@js-clan/js-clan.module.ts")).then(mod => mod.JsClanModule)
    },
    {
        path: 'common',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./@modules/@common-dependencies/@common-dependencies.module */ "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts")).then(mod => mod.CommonDependenciesModule)
    },
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() | modules-authentication-authentication-module */[__webpack_require__.e("default~modules-authentication-authentication-module~modules-js-clan-js-clan-module"), __webpack_require__.e("modules-authentication-authentication-module")]).then(__webpack_require__.bind(null, /*! ./@modules/@authentication/@authentication.module */ "./src/app/@modules/@authentication/@authentication.module.ts")).then(mod => mod.AuthenticationModule)
    },
    {
        path: 'dev',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-developer-guide-developer-guide-module */ "modules-developer-guide-developer-guide-module").then(__webpack_require__.bind(null, /*! ./@modules/@developer-guide/@developer-guide.module */ "./src/app/@modules/@developer-guide/@developer-guide.module.ts")).then(mod => mod.DeveloperGuideModule)
    },
    { path: '**', redirectTo: '/p404' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-state.ts":
/*!******************************!*\
  !*** ./src/app/app-state.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const appState = {
    nav: {
        msg: 'hi'
    },
    lang: 'ua',
    cards: [],
    currentCard: {
        title: '',
        description: '',
        video: 'zKOQhgWQPM4'
    },
    user: {
        isLogged: false,
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
    roles: [
        'Guest',
        'Admin',
        'Owner',
        'Operator'
    ],
    alert: {
        show: false,
        title: 'About',
        userMsg: 'Some wrong or good',
        devMsg: 'Tech details'
    }
};
/* harmony default export */ __webpack_exports__["default"] = (appState);


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _root_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root/app.component */ "./src/app/root/app.component.ts");
/* harmony import */ var _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@modules/@common-dependencies/@common-dependencies.module */ "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts");
/* harmony import */ var _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./@modules/@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");



// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// router

//  root component

// @modules

// services


class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
    ], imports: [[
            // NgbModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_5__["CommonDependenciesModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [
        // NgbModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_5__["CommonDependenciesModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ],
                imports: [
                    // NgbModule,
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_5__["CommonDependenciesModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ],
                providers: [
                    _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
                ],
                bootstrap: [_root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/my_modules/stuff.ts":
/*!*************************************!*\
  !*** ./src/app/my_modules/stuff.ts ***!
  \*************************************/
/*! exports provided: log, steps, parseQuery, getUrlQueries, my_alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQuery", function() { return parseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlQueries", function() { return getUrlQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "my_alert", function() { return my_alert; });
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-state */ "./src/app/app-state.ts");

const log = console.log;
const steps = (lot) => {
    lot.map(one => setTimeout(one[1], one[0]));
};
//////////////////////////////////////////////////////////////////////////////////////////
//                                    work with URL                                     //
//////////////////////////////////////////////////////////////////////////////////////////
const parseQuery = (queryString) => {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
};
const getUrlQueries = () => parseQuery(location.search);
const my_alert = (title, userMsg, devMsg) => {
    _app_state__WEBPACK_IMPORTED_MODULE_0__["default"].alert = { show: true, title, userMsg, devMsg };
};



/***/ }),

/***/ "./src/app/root/app.component.ts":
/*!***************************************!*\
  !*** ./src/app/root/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _modules_common_dependencies_services_fingerprint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@modules/@common-dependencies/services/fingerprint.service */ "./src/app/@modules/@common-dependencies/services/fingerprint.service.ts");
/* harmony import */ var _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@modules/@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class AppComponent {
    constructor(fingerPrint, api) {
        this.fingerPrint = fingerPrint;
        this.api = api;
        this.title = 'front';
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ngOnInit() {
        this.fingerPrint.checkIfItExist();
        this.getUserInfo();
    }
    getUserInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.st.user = yield this.api.getUserInfoIfLogged();
            console.log('result getUserInfo', this.st.user);
            // this.st.user = fromServer
            // if (this.st.user.firstName) {
            //   this.st.header.isLogged = true;
            //   this.st.header.user.name = fromServer.firstName;
            // }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_common_dependencies_services_fingerprint_service__WEBPACK_IMPORTED_MODULE_3__["FingerprintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb3QvYXBwLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _modules_common_dependencies_services_fingerprint_service__WEBPACK_IMPORTED_MODULE_3__["FingerprintService"] }, { type: _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects2\Chugayster\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map