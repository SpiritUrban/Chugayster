(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./@modules/@common-dependencies/@common-dependencies.module": "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" *ngIf=\"st.show\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{st.title}}</h5>\n        <button (click)=\"close()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <p>{{st.userMsg}}</p>\n        <!-- <p></p> -->\n      </div>\n\n      <!-- * -->\n      <ngb-accordion *ngIf=\"st.devMsg\" #acc=\"ngbAccordion\" activeIds=\"ngb-panel-3\">\n        <ngb-panel title=\"Dev msg\">\n          <ng-template ngbPanelContent>\n            {{st.devMsg}}\n          </ng-template>\n        </ngb-panel>\n      </ngb-accordion>\n      <!-- * -->\n\n      <div class=\"modal-footer\">\n        <!-- <button (click)=\"close()\" type=\"button\" class=\"btn btn-primary\">Save changes</button> -->\n        <button (click)=\"close()\" type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/components/general/footer/footer.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@common-dependencies/components/general/footer/footer.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <br>\r\n        <div class=\"border-secondary mb-3 mx-auto\">\r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title text-center\">We are the Great Team!</h4>\r\n              <br>\r\n              <p class=\"card-text text-center\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n            </div>\r\n    </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- it: the input field -->\n\n<div *ngIf=\"it.invalid && (it.dirty || it.touched)\" class=\"alert alert-danger\">\n    <!-- <div *ngIf=\"it.invalid && !it.pristine\" class=\"alert alert-danger\"> -->\n\n    <!-- required -->\n    <div *ngIf=\"it.errors.required\">\n        Is required.\n    </div>\n\n    <!-- min -->\n    <div *ngIf=\"it.errors.minlength\">\n        Must be at least {{it.errors.minlength.requiredLength}} characters long.\n    </div>\n\n    <!-- max -->\n    <div *ngIf=\"it.errors.maxlength\">\n        Must be shorter {{it.errors.maxlength.requiredLength}} characters long.\n    </div>\n\n    <!-- email validator -->\n    <div *ngIf=\"it.errors.mailValidator && it.value.length > 0\">\n        {{it.errors.mailValidator.msg}}\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/components/general/nav/nav.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@common-dependencies/components/general/nav/nav.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n\r\n    <a class=\"navbar-brand\" routerLink=\"/main\">Logo</a>\r\n\r\n    <button class=\"navbar-toggler collapsed\" (click)=\"navToggle()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <!-- navbarCollapse -->\r\n    <div id=\"navbarColor02\" [ngClass]=\"navbarCollapse\">\r\n\r\n        <ul class=\"navbar-nav mr-auto\">\r\n\r\n            <!-- Home -->\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" routerLink=\"/main\">Home <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n\r\n            <!-- pages -->\r\n            <li class=\"nav-item dropdown\" (click)=\"drop1 = !drop1\" [ngClass]=\" drop1 ? 'show': '' \">\r\n                <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" id=\"themes\" aria-expanded=\"false\">Pages\r\n                    <span class=\"caret\"></span></a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"themes\" [ngClass]=\" drop1 ? 'show': '' \">\r\n                    <a class=\"dropdown-item\" routerLink=\"/main\">Home</a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" routerLink=\"/about-us\">About</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/auth/help\">auth/Help</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/auth/login\">auth/Login</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/auth/register\">auth/Register</a>\r\n\r\n                    <a class=\"dropdown-item\" routerLink=\"/\"></a>\r\n                </div>\r\n            </li>\r\n\r\n            <!-- developer-guide -->\r\n            <li class=\"nav-item dropdown\" (click)=\"drop2 = !drop2\" [ngClass]=\" drop2 ? 'show': '' \">\r\n                <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" id=\"themes\" aria-expanded=\"false\">Dev-guide\r\n                    <span class=\"caret\"></span></a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"themes\" [ngClass]=\" drop2 ? 'show': '' \">\r\n                    <a class=\"dropdown-item\" routerLink=\"/dev/forms\">Forms</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/dev/url-queries\">URL Queries</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/dev/any\">Any examples</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/\"></a>\r\n\r\n                </div>\r\n            </li>\r\n\r\n            <!-- Features -->\r\n            <!-- <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/features\">Features</a>\r\n            </li> -->\r\n\r\n            <!-- Pricing -->\r\n            <!-- <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/pricing\">Pricing</a>\r\n            </li> -->\r\n\r\n            <!-- About -->\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/about-us\">About</a>\r\n            </li>\r\n\r\n\r\n            <li><a routerLink=\"/main\">JS-CLAN -> main</a></li>\r\n\r\n\r\n        </ul>\r\n\r\n\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n            <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n\r\n\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\r\n    <app-nav></app-nav>\r\n    <br>\r\n    <br>\r\n        <div>somethin 1</div>\r\n    <hr>\r\n    <br>\r\n    <br>\r\n        <div>somethin 1</div>\r\n    <hr>\r\n    <br>\r\n    <br>\r\n        <div>somethin 1</div>\r\n    <hr>\r\n    <br>\r\n    <!-- <app-slider></app-slider>\r\n    <app-gallery></app-gallery>\r\n    <app-registration></app-registration> -->\r\n    <app-footer></app-footer>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<pre>\r\n    <code [class]=\"'language-'+language\">\r\n      {{ code }}\r\n    </code>\r\n  </pre>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav> \r\n\r\n<!-- <div class=\"alert alert-dismissible alert-warning\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n    <h4 class=\"alert-heading\">Warning!</h4>\r\n    <p class=\"mb-0\">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href=\"#\" class=\"alert-link\">vel scelerisque nisl consectetur et</a>.</p>\r\n</div> -->\r\n<br>\r\n<br>\r\n\r\n<div class=\"card border-secondary mb-3 mx-auto\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title text-center\">About Us!</h4>\r\n      <p class=\"card-text text-center\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n      <p class=\"card-text text-center\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n      <p class=\"card-text text-center\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>    \r\n    </div>\r\n</div>\r\n<br>\r\n<br>\r\n<div \r\n    *ngFor = \"let bro of team;\"\r\n    class=\"person-card\"\r\n>\r\n    <div class=\"person-card__portrait\">\r\n        <img [src]=\"bro.img\" alt=\"\">\r\n    </div>\r\n    <div class=\"person-card__info\">\r\n        <h3>{{bro.name}}</h3>\r\n        <p>{{bro.text}}</p>\r\n        <a [routerLink]=\"['/engineer', bro.name]\" class=\"btn btn-success\">Look more detail<i class=\"mdi mdi-arrow-right\"></i></a>\r\n    </div>\r\n</div>\r\n<br>\r\n<br>\r\n<app-footer></app-footer> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav> \r\n<br>\r\n<div class=\"wrap\">\r\n  <div class=\"about\">\r\n      <div class=\"member-img\">\r\n          <img [src]=\"engineer.img\" alt=\"\">\r\n      </div>\r\n      <div class=\"test\">\r\n          <h3>{{ engineer.name }}</h3>\r\n\r\n        <div class=\"right\">\r\n          <div \r\n           class=\"skill\"\r\n           *ngFor = \"let skill of engineer.skills\"\r\n          >\r\n            <div class=\"type\">\r\n              <span>{{ skill.type }}</span> \r\n            </div>\r\n            <div class=\"level\">\r\n                <div \r\n                class=\"progressBar\"\r\n                *ngFor = \"let point of numToArr(skill.level)\"\r\n                  >\r\n            </div>\r\n                - {{ skill.level}}%\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"icons\">\r\n          <a class=\"iconBtn mdi mdi-linkedin-box\"></a>\r\n          <a class=\"iconBtn mdi mdi-github-box\"></a>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"member-info\">\r\n      <h4>{{ engineer.chapter }}</h4>\r\n      <p>{{ engineer.past }}</p>\r\n      <p>{{ engineer.present }}</p>\r\n      <p>{{ engineer.future }}</p>\r\n  </div>\r\n  <br>\r\n  <div>\r\n    <ngb-tabset \r\n    (click) = \"highlight()\"\r\n    class = \"nav-fill\"\r\n    >\r\n      <ngb-tab\r\n      *ngFor = \"let codeExample of codeExamples\"  \r\n      >   \r\n        <ng-template ngbTabTitle> {{ codeExample.title }} </ng-template>\r\n        <ng-template ngbTabContent>\r\n          <app-show-code [code]=\"codeExample.content\" [language]=\"codeExample.language\"></app-show-code>\r\n        </ng-template>\r\n       </ngb-tab>\r\n    </ngb-tabset> \r\n  </div>\r\n  <br>\r\n</div>\r\n<app-footer></app-footer> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/pages/main/main.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@common-dependencies/pages/main/main.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n\r\n<div class=\"container main\">\r\n\r\n    <div class=\"hero-main\">\r\n        <div class=\"hero-logo\">\r\n            <img class=\"big-logo\" src=\"assets/img/base/Logo-Chugayster.svg\" alt=\"\" srcset=\"\">\r\n            <div class=\"hero-text-color\">\r\n                <h1>Chugayster</h1> \r\n                <a class=\"btn btn-start \">GET STARTED</a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"hero-description\">\r\n            <i class=\"mdi mdi-view-grid-plus\"></i>\r\n            <h4>        \r\n            The hight layer system <br>\r\n            of architecture and build modules <br>\r\n            for you app.\r\n            </h4>\r\n        </div>\r\n\r\n        <div class=\"hero\"></div>\r\n    </div>\r\n\r\n    <div class=\"example\">\r\n        <div class=\"example-left\">\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n        </div>\r\n        <app-nano-site></app-nano-site>\r\n        <div class=\"example-right\">\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n        </div>\r\n    </div>\r\n\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n</div><!-- main -->\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/pages/p404/p404.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@common-dependencies/pages/p404/p404.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>p404 works!</p>\n\n<button routerLink=\"/main\" type=\"button\" class=\"btn btn-primary btn-lg\">Go To Home</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/root/app.component.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/root/app.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/@modules/@common-dependencies/pages/main/main.component.ts");
/* harmony import */ var _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/p404/p404.component */ "./src/app/@modules/@common-dependencies/pages/p404/p404.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/engineer/engineer.component */ "./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.ts");



// pages




const routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'about-us', component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"] },
    { path: 'engineer/:name', component: _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_6__["EngineerComponent"] },
    { path: 'p404', component: _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"] },
];
let CommonDependenciesRoutingModule = class CommonDependenciesRoutingModule {
};
CommonDependenciesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CommonDependenciesRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_dependencies_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./@common-dependencies-routing.module */ "./src/app/@modules/@common-dependencies/@common-dependencies-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/validator.service */ "./src/app/@modules/@common-dependencies/services/validator.service.ts");
/* harmony import */ var _services_highlight_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/highlight.service */ "./src/app/@modules/@common-dependencies/services/highlight.service.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/@modules/@common-dependencies/pages/main/main.component.ts");
/* harmony import */ var _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/p404/p404.component */ "./src/app/@modules/@common-dependencies/pages/p404/p404.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/engineer/engineer.component */ "./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.ts");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/general/nav/nav.component */ "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts");
/* harmony import */ var _components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/general/form-validator/form-validator.component */ "./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.ts");
/* harmony import */ var _components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/general/extra-alert/extra-alert.component */ "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts");
/* harmony import */ var _components_special_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/special/show-code/show-code.component */ "./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.ts");
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/general/footer/footer.component */ "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts");
/* harmony import */ var _components_special_nano_site_nano_site_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/special/nano-site/nano-site.component */ "./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.ts");





// added modules

// services



// pages




// components






let CommonDependenciesModule = class CommonDependenciesModule {
};
CommonDependenciesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // pages
            _pages_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
            _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_10__["P404Component"],
            _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"],
            // components
            _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
            _components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_14__["FormValidatorComponent"],
            _components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_15__["ExtraAlertComponent"],
            _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_12__["EngineerComponent"],
            _components_special_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_16__["ShowCodeComponent"],
            _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
            _components_special_nano_site_nano_site_component__WEBPACK_IMPORTED_MODULE_18__["NanoSiteComponent"]
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _common_dependencies_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommonDependenciesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [
            // services
            _services_validator_service__WEBPACK_IMPORTED_MODULE_7__["ValidatorService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _services_highlight_service__WEBPACK_IMPORTED_MODULE_8__["HighlightService"]
        ],
        exports: [
            _components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_14__["FormValidatorComponent"],
            _components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_15__["ExtraAlertComponent"],
            _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]
            // ValidatorService -- !!! it's not need !!!
        ]
    })
], CommonDependenciesModule);



/***/ }),

/***/ "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.sass":
/*!*********************************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.sass ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  display: block;\n  background: rgba(0, 0, 0, 0.69);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL2V4dHJhLWFsZXJ0L0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGNvbW1vbi1kZXBlbmRlbmNpZXNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGV4dHJhLWFsZXJ0XFxleHRyYS1hbGVydC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL2V4dHJhLWFsZXJ0L2V4dHJhLWFsZXJ0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AY29tbW9uLWRlcGVuZGVuY2llcy9jb21wb25lbnRzL2dlbmVyYWwvZXh0cmEtYWxlcnQvZXh0cmEtYWxlcnQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWxcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAwJSwgMC42OSkiLCIubW9kYWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KTtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExtraAlertComponent = class ExtraAlertComponent {
    constructor() {
    }
    ngOnInit() {
    }
    close() {
        this.st.show = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExtraAlertComponent.prototype, "st", void 0);
ExtraAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-extra-alert',
        template: __webpack_require__(/*! raw-loader!./extra-alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.html"),
        styles: [__webpack_require__(/*! ./extra-alert.component.sass */ "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.sass")]
    })
], ExtraAlertComponent);



/***/ }),

/***/ "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.sass":
/*!***********************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/components/general/footer/footer.component.sass ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  height: 20em;\n  background: url(/assets/img/base/footer/footer-img.jpg) no-repeat center fixed;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBjb21tb24tZGVwZW5kZW5jaWVzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsOEVBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyXHJcbiAgICBoZWlnaHQ6IDIwZW1cclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9iYXNlL2Zvb3Rlci9mb290ZXItaW1nLmpwZykgbm8tcmVwZWF0IGNlbnRlciBmaXhlZCBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIiLCIuZm9vdGVyIHtcbiAgaGVpZ2h0OiAyMGVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvYmFzZS9mb290ZXIvZm9vdGVyLWltZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/components/general/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.sass */ "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.sass")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.sass":
/*!***************************************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.sass ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvZ2VuZXJhbC9mb3JtLXZhbGlkYXRvci9mb3JtLXZhbGlkYXRvci5jb21wb25lbnQuc2FzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormValidatorComponent = class FormValidatorComponent {
    constructor() {
    }
    ngOnInit() {
        // setInterval(_=> console.log('>>>', this.it), 1000 )
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormValidatorComponent.prototype, "it", void 0);
FormValidatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-validator',
        template: __webpack_require__(/*! raw-loader!./form-validator.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.html"),
        styles: [__webpack_require__(/*! ./form-validator.component.sass */ "./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.sass")]
    })
], FormValidatorComponent);



/***/ }),

/***/ "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.sass":
/*!*****************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/components/general/nav/nav.component.sass ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-collapse {\n  transition: 0.5s;\n}\n\n.prepare {\n  overflow: visible;\n  display: block;\n}\n\n@media screen and (max-width: 992px) {\n  .prepare {\n    height: 0;\n    overflow: hidden;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  .opening {\n    height: 500px;\n  }\n}\n\n.opened {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.collapsing {\n  height: 0;\n}\n\n@media (min-width: 992px) {\n  .dropdown-menu {\n    position: absolute;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL25hdi9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBjb21tb24tZGVwZW5kZW5jaWVzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxuYXZcXG5hdi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL25hdi9uYXYuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQUk7RUFISjtJQUlRLFNBQUE7SUFDQSxnQkFBQTtFQ0dOO0FBQ0Y7O0FEQUk7RUFESjtJQUVRLGFBQUE7RUNJTjtBQUNGOztBREhBO0VBQ0ksMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FDTUo7O0FESkE7RUFDSSxTQUFBO0FDT0o7O0FESEk7RUFESjtJQUVRLGtCQUFBO0VDT047QUFDRiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvZ2VuZXJhbC9uYXYvbmF2LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXZiYXItY29sbGFwc2VcclxuICAgIHRyYW5zaXRpb246IC41c1xyXG5cclxuLnByZXBhcmVcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlXHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpXHJcbiAgICAgICAgaGVpZ2h0OiAwXHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlblxyXG4gICAgICAgIFxyXG5cclxuLm9wZW5pbmdcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KVxyXG4gICAgICAgIGhlaWdodDogNTAwcHhcclxuXHJcbi5vcGVuZWRcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQgIFxyXG5cclxuLmNvbGxhcHNpbmdcclxuICAgIGhlaWdodDogMCAgICBcclxuXHJcblxyXG4uZHJvcGRvd24tbWVudVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KVxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSIsIi5uYXZiYXItY29sbGFwc2Uge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ucHJlcGFyZSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5wcmVwYXJlIHtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAub3BlbmluZyB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxufVxuXG4ub3BlbmVkIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLmNvbGxhcHNpbmcge1xuICBoZWlnaHQ6IDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../my_modules/stuff */ "./src/app/my_modules/stuff.ts");



let NavComponent = class NavComponent {
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
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["steps"])([
                    [0, _ => this.navbarCollapse = 'navbar-collapse collapsing prepare'],
                    [20, _ => this.navbarCollapse = 'navbar-collapse opening prepare'],
                    [500, _ => this.navbarCollapse = 'navbar-collapse opened prepare'],
                ])
            :
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["steps"])([
                    [0, _ => this.navbarCollapse = 'navbar-collapse opening prepare'],
                    [70, _ => this.navbarCollapse = 'navbar-collapse  prepare'],
                ]);
        // this.navbarCollapse = 'navbar-collapse  prepare'
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/components/general/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.sass */ "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.sass")]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.sass":
/*!*****************************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.sass ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap {\n  margin: auto;\n  background-color: grey;\n  width: 50%;\n  height: 50%;\n  box-shadow: 0.2em 5em 5em 5em rgba(0, 0, 0, 0.3);\n  transform: perspective(2000px) rotateY(35deg);\n  transition: 2s;\n}\n.wrap:hover {\n  transform: rotateY(0deg);\n}\n.wrap div {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9zcGVjaWFsL25hbm8tc2l0ZS9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBjb21tb24tZGVwZW5kZW5jaWVzXFxjb21wb25lbnRzXFxzcGVjaWFsXFxuYW5vLXNpdGVcXG5hbm8tc2l0ZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9zcGVjaWFsL25hbm8tc2l0ZS9uYW5vLXNpdGUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0VBQ0EsNkNBQUE7RUFDQSxjQUFBO0FDQ0o7QURBSTtFQUNJLHdCQUFBO0FDRVI7QURESTtFQUNJLGtCQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AY29tbW9uLWRlcGVuZGVuY2llcy9jb21wb25lbnRzL3NwZWNpYWwvbmFuby1zaXRlL25hbm8tc2l0ZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwIFxyXG4gICAgbWFyZ2luOiBhdXRvXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5XHJcbiAgICB3aWR0aDogNTAlXHJcbiAgICBoZWlnaHQ6IDUwJVxyXG4gICAgYm94LXNoYWRvdzogLjJlbSA1ZW0gNWVtIDVlbSByZ2JhKDAsMCwwLDAuMylcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMjAwMHB4KSByb3RhdGVZKDM1ZGVnKVxyXG4gICAgdHJhbnNpdGlvbjogMnNcclxuICAgICY6aG92ZXJcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgXHJcbiAgICBkaXZcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuIiwiLndyYXAge1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBib3gtc2hhZG93OiAwLjJlbSA1ZW0gNWVtIDVlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMjAwMHB4KSByb3RhdGVZKDM1ZGVnKTtcbiAgdHJhbnNpdGlvbjogMnM7XG59XG4ud3JhcDpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbn1cbi53cmFwIGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NanoSiteComponent = class NanoSiteComponent {
    constructor() { }
    ngOnInit() {
    }
};
NanoSiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nano-site',
        template: __webpack_require__(/*! raw-loader!./nano-site.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.html"),
        styles: [__webpack_require__(/*! ./nano-site.component.sass */ "./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.sass")]
    })
], NanoSiteComponent);



/***/ }),

/***/ "./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.sass":
/*!*****************************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.sass ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvc3BlY2lhbC9zaG93LWNvZGUvc2hvdy1jb2RlLmNvbXBvbmVudC5zYXNzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/highlight.service */ "./src/app/@modules/@common-dependencies/services/highlight.service.ts");



let ShowCodeComponent = class ShowCodeComponent {
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
};
ShowCodeComponent.ctorParameters = () => [
    { type: _services_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShowCodeComponent.prototype, "code", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShowCodeComponent.prototype, "language", void 0);
ShowCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-code',
        template: __webpack_require__(/*! raw-loader!./show-code.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.html"),
        styles: [__webpack_require__(/*! ./show-code.component.sass */ "./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.sass")]
    })
], ShowCodeComponent);



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

/***/ "./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.sass":
/*!**************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.sass ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".person-card {\n  margin: 0 5em 10em 5em;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.person-card:nth-child(even) {\n  flex-direction: row-reverse;\n}\n\n.person-card__portrait {\n  width: 35%;\n}\n\n.person-card__portrait img {\n  width: 100%;\n  display: block;\n}\n\n.person-card__info {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.mdi-arrow-right {\n  font-size: 1.5em;\n  padding-left: 0.5em;\n}\n\n.btn-success {\n  font-size: 1.1em;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvYWJvdXQtdXMvRDpcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAY29tbW9uLWRlcGVuZGVuY2llc1xccGFnZXNcXGFib3V0LXVzXFxhYm91dC11cy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNFLDJCQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0FDR0Y7O0FERkU7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0lOOztBREZBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDS0Y7O0FESEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDTUY7O0FESkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVyc29uLWNhcmRcclxuICAgIG1hcmdpbjogMCA1ZW0gMTBlbSA1ZW1cclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kIFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG5cclxuLnBlcnNvbi1jYXJkOm50aC1jaGlsZChldmVuKVxyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZVxyXG5cclxuLnBlcnNvbi1jYXJkX19wb3J0cmFpdFxyXG4gIHdpZHRoOiAzNSVcclxuICBpbWdcclxuICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgZGlzcGxheTogYmxvY2tcclxuXHJcbi5wZXJzb24tY2FyZF9faW5mb1xyXG4gIHdpZHRoOiA2MCVcclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiBcclxuICBhbGlnbi1pdGVtczogY2VudGVyICAgXHJcblxyXG4ubWRpLWFycm93LXJpZ2h0XHJcbiAgZm9udC1zaXplOiAxLjVlbVxyXG4gIHBhZGRpbmctbGVmdDogLjVlbVxyXG5cclxuLmJ0bi1zdWNjZXNzXHJcbiAgZm9udC1zaXplOiAxLjFlbVxyXG4gIGRpc3BsYXk6IGZsZXhcclxuICBhbGlnbi1pdGVtczogY2VudGVyIiwiLnBlcnNvbi1jYXJkIHtcbiAgbWFyZ2luOiAwIDVlbSAxMGVtIDVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wZXJzb24tY2FyZDpudGgtY2hpbGQoZXZlbikge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5wZXJzb24tY2FyZF9fcG9ydHJhaXQge1xuICB3aWR0aDogMzUlO1xufVxuLnBlcnNvbi1jYXJkX19wb3J0cmFpdCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wZXJzb24tY2FyZF9faW5mbyB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZGktYXJyb3ctcmlnaHQge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _data_team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/team */ "./src/app/@modules/@common-dependencies/data/team.ts");




let AboutUsComponent = class AboutUsComponent {
    constructor() {
        this.team = _data_team__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.shuffledArr = (arr) => arr.sort(() => Math.random() - 0.5);
    }
    ngOnInit() {
        _app_state__WEBPACK_IMPORTED_MODULE_2__["default"].nav.msg += 2;
        this.arrayRandomizer(_data_team__WEBPACK_IMPORTED_MODULE_3__["default"]);
    }
    ngOnDestroy() {
    }
    arrayRandomizer(arr) {
        let firstItem = arr.shift(), allItems = this.shuffledArr(arr);
        return allItems.unshift(firstItem);
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.html"),
        styles: [__webpack_require__(/*! ./about-us.component.sass */ "./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.sass")]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.sass":
/*!**************************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.sass ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap {\n  margin: 0 5em;\n}\n\n.member-img {\n  text-align: center;\n  width: 50%;\n  margin: 2em;\n}\n\n.member-img img {\n  width: 100%;\n}\n\n.member-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.level {\n  display: flex;\n  align-items: center;\n}\n\n.member-code {\n  display: flex;\n}\n\ncode {\n  margin: 2em;\n}\n\n.about {\n  display: flex;\n}\n\n.test {\n  margin: 2em;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.progressBar {\n  display: inline-block;\n  width: 0.125em;\n  height: 1em;\n  background-color: orange;\n  margin-right: 0.25em;\n  box-shadow: 0px 0px 7px 2px rgba(255, 0, 0, 0.42);\n}\n\n.iconBtn {\n  font-size: 3em;\n}\n\n.iconBtn:hover::before {\n  cursor: pointer;\n  transform: scale(1.3);\n}\n\n.icons {\n  transform: translateX(-0.4em);\n  transform: translateY(1.4em);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvZW5naW5lZXIvRDpcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAY29tbW9uLWRlcGVuZGVuY2llc1xccGFnZXNcXGVuZ2luZWVyXFxlbmdpbmVlci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvZW5naW5lZXIvZW5naW5lZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0FDR1I7O0FEREE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0lKOztBRERBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0FDTUo7O0FESkE7RUFDSSxhQUFBO0FDT0o7O0FETEE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDUUo7O0FETEE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlEQUFBO0FDUUo7O0FETkE7RUFDSSxjQUFBO0FDU0o7O0FEUFE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUNTWjs7QURQQTtFQUNJLDZCQUFBO0VBQ0EsNEJBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL3BhZ2VzL2VuZ2luZWVyL2VuZ2luZWVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAgXHJcbiAgICBtYXJnaW46IDAgNWVtXHJcblxyXG4ubWVtYmVyLWltZ1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICB3aWR0aDogNTAlXHJcbiAgICBtYXJnaW46IDJlbVxyXG4gICAgaW1nXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuXHJcbi5tZW1iZXItaW5mb1xyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG5cclxuXHJcbi5sZXZlbFxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG5cclxuLm1lbWJlci1jb2RlXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcblxyXG5jb2RlICAgIFxyXG4gICAgbWFyZ2luOiAyZW1cclxuXHJcbi5hYm91dCBcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuXHJcbi50ZXN0XHJcbiAgICBtYXJnaW46IDJlbVxyXG4gICAgd2lkdGg6IDUwJVxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAgICBcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG5cclxuXHJcbi5wcm9ncmVzc0JhclxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICB3aWR0aDogLjEyNWVtXHJcbiAgICBoZWlnaHQ6IDFlbVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlXHJcbiAgICBtYXJnaW4tcmlnaHQ6IC4yNWVtXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAycHggcmdiYSgyNTUsIDAsIDAsIDAuNDIpXHJcblxyXG4uaWNvbkJ0blxyXG4gICAgZm9udC1zaXplOiAzZW0gXHJcbiAgICAmOmhvdmVyIFxyXG4gICAgICAgICY6OmJlZm9yZVxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSAgIFxyXG5cclxuLmljb25zXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLS40ZW0pXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMS40ZW0pXHJcbiIsIi53cmFwIHtcbiAgbWFyZ2luOiAwIDVlbTtcbn1cblxuLm1lbWJlci1pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMmVtO1xufVxuLm1lbWJlci1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZW1iZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZXZlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW1iZXItY29kZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmNvZGUge1xuICBtYXJnaW46IDJlbTtcbn1cblxuLmFib3V0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRlc3Qge1xuICBtYXJnaW46IDJlbTtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvZ3Jlc3NCYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwLjEyNWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMnB4IHJnYmEoMjU1LCAwLCAwLCAwLjQyKTtcbn1cblxuLmljb25CdG4ge1xuICBmb250LXNpemU6IDNlbTtcbn1cbi5pY29uQnRuOmhvdmVyOjpiZWZvcmUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuLmljb25zIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjRlbSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxLjRlbSk7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/team */ "./src/app/@modules/@common-dependencies/data/team.ts");
/* harmony import */ var _services_highlight_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/highlight.service */ "./src/app/@modules/@common-dependencies/services/highlight.service.ts");





let EngineerComponent = class EngineerComponent {
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
        let engineer = _data_team__WEBPACK_IMPORTED_MODULE_3__["default"].filter(engineer => engineer.name == name);
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
};
EngineerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_highlight_service__WEBPACK_IMPORTED_MODULE_4__["HighlightService"] }
];
EngineerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-engineer',
        template: __webpack_require__(/*! raw-loader!./engineer.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.html"),
        styles: [__webpack_require__(/*! ./engineer.component.sass */ "./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.sass")]
    })
], EngineerComponent);



/***/ }),

/***/ "./src/app/@modules/@common-dependencies/pages/main/main.component.sass":
/*!******************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/pages/main/main.component.sass ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-logo {\n  margin-right: 5em;\n  width: 15em;\n}\n\n.hero-logo {\n  display: flex;\n  align-items: center;\n  transform: translateY(-3em);\n}\n\n.hero {\n  z-index: -1;\n  background: linear-gradient(200deg, #fbff00, #f58442);\n  position: absolute;\n  width: 100%;\n  height: 36em;\n  transform: skewY(-8deg);\n  transform-origin: 100% center;\n  overflow: hidden;\n  right: 0;\n  top: -15em;\n}\n\n.hero-main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.hero-description {\n  margin-top: -10em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hero-description h4 {\n  display: inline-block;\n  text-align: left;\n  padding-left: 1em;\n  line-height: 1.2em;\n}\n\n.hero-description i {\n  font-size: 5.95em;\n  color: white;\n  opacity: 0.5;\n}\n\n.hero-text-color {\n  display: flex;\n  flex-direction: column;\n  color: #000;\n}\n\n.hero-text-color h1 {\n  margin-bottom: 0.5em;\n}\n\n.hero-text-color h4 {\n  margin-bottom: 1em;\n}\n\n.btn-start {\n  background: #fff;\n  padding: 0.5em 1em;\n  border-radius: 2em;\n  font-size: 1.2em;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.btn-start:hover {\n  box-shadow: 0.2em 0.4em 0.5em 0.2em rgba(0, 0, 0, 0.3);\n}\n\n.expample {\n  position: relative;\n}\n\n.example-left {\n  position: absolute;\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.example-left div {\n  height: 13em;\n  width: 100%;\n  background-color: #fff;\n  margin: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvbWFpbi9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBjb21tb24tZGVwZW5kZW5jaWVzXFxwYWdlc1xcbWFpblxcbWFpbi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0tKOztBREpJO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNNUjs7QURMSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNPUjs7QURKQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNPSjs7QUROSTtFQUNJLG9CQUFBO0FDUVI7O0FEUEk7RUFDSSxrQkFBQTtBQ1NSOztBRFBBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURUSTtFQUNJLHNEQUFBO0FDV1I7O0FEVEE7RUFDSSxrQkFBQTtBQ1lKOztBRFZBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNhSjs7QURaSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDY1IiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AY29tbW9uLWRlcGVuZGVuY2llcy9wYWdlcy9tYWluL21haW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlnLWxvZ29cclxuICAgIG1hcmdpbi1yaWdodDogNWVtXHJcbiAgICB3aWR0aDogMTVlbVxyXG5cclxuLmhlcm8tbG9nb1xyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zZW0pXHJcblxyXG4uaGVyb1xyXG4gICAgei1pbmRleDogLTFcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMDBkZWcsICNmYmZmMDAsICNmNTg0NDIpXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDM2ZW1cclxuICAgIHRyYW5zZm9ybTogc2tld1koLThkZWcpXHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIGNlbnRlclxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG4gICAgcmlnaHQ6IDBcclxuICAgIHRvcDogLTE1ZW1cclxuXHJcbi5oZXJvLW1haW5cclxuICAgIGhlaWdodDogMTAwdmggICBcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICAgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiBcclxuLmhlcm8tZGVzY3JpcHRpb25cclxuICAgIG1hcmdpbi10b3A6IC0xMGVtXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgaDQgXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW1cclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW1cclxuICAgIGlcclxuICAgICAgICBmb250LXNpemU6IDUuOTVlbVxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxyXG4gICAgICAgIG9wYWNpdHk6IC41XHJcbiAgICAgICAgXHJcblxyXG4uaGVyby10ZXh0LWNvbG9yXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgICBjb2xvcjogIzAwMFxyXG4gICAgaDEgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVlbVxyXG4gICAgaDRcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW1cclxuICAgIFxyXG4uYnRuLXN0YXJ0XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICBwYWRkaW5nOiAuNWVtIDFlbVxyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtXHJcbiAgICBmb250LXNpemU6IDEuMmVtXHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcclxuICAgICY6aG92ZXJcclxuICAgICAgICBib3gtc2hhZG93OiAuMmVtIC40ZW0gLjVlbSAuMmVtIHJnYmEoMCwwLDAsMC4zKVxyXG5cclxuLmV4cGFtcGxlXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuXHJcbi5leGFtcGxlLWxlZnRcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgd2lkdGg6IDIwJVxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbiAgICBkaXZcclxuICAgICAgICBoZWlnaHQ6IDEzZW1cclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcclxuICAgICAgICBtYXJnaW46IC41ZW0iLCIuYmlnLWxvZ28ge1xuICBtYXJnaW4tcmlnaHQ6IDVlbTtcbiAgd2lkdGg6IDE1ZW07XG59XG5cbi5oZXJvLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNlbSk7XG59XG5cbi5oZXJvIHtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMDBkZWcsICNmYmZmMDAsICNmNTg0NDIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2ZW07XG4gIHRyYW5zZm9ybTogc2tld1koLThkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTE1ZW07XG59XG5cbi5oZXJvLW1haW4ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlcm8tZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAtMTBlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVyby1kZXNjcmlwdGlvbiBoNCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbn1cbi5oZXJvLWRlc2NyaXB0aW9uIGkge1xuICBmb250LXNpemU6IDUuOTVlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5oZXJvLXRleHQtY29sb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogIzAwMDtcbn1cbi5oZXJvLXRleHQtY29sb3IgaDEge1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbi5oZXJvLXRleHQtY29sb3IgaDQge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5idG4tc3RhcnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmJ0bi1zdGFydDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAuMmVtIDAuNGVtIDAuNWVtIDAuMmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmV4cGFtcGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZXhhbXBsZS1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZXhhbXBsZS1sZWZ0IGRpdiB7XG4gIGhlaWdodDogMTNlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMC41ZW07XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@modules/@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");





let MainComponent = class MainComponent {
    constructor(api) {
        this.api = api;
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            _app_state__WEBPACK_IMPORTED_MODULE_2__["default"].nav.msg += 1;
            Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])(_app_state__WEBPACK_IMPORTED_MODULE_2__["default"].nav.msg);
            const fromGit = yield this.api.test();
            Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])(fromGit);
        });
    }
    ngOnDestroy() {
    }
};
MainComponent.ctorParameters = () => [
    { type: _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/pages/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.sass */ "./src/app/@modules/@common-dependencies/pages/main/main.component.sass")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/@modules/@common-dependencies/pages/p404/p404.component.sass":
/*!******************************************************************************!*\
  !*** ./src/app/@modules/@common-dependencies/pages/p404/p404.component.sass ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL3BhZ2VzL3A0MDQvcDQwNC5jb21wb25lbnQuc2FzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let P404Component = class P404Component {
    constructor() { }
    ngOnInit() {
    }
};
P404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-p404',
        template: __webpack_require__(/*! raw-loader!./p404.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@common-dependencies/pages/p404/p404.component.html"),
        styles: [__webpack_require__(/*! ./p404.component.sass */ "./src/app/@modules/@common-dependencies/pages/p404/p404.component.sass")]
    })
], P404Component);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
if (location.hostname == 'localhost')
    var url = 'http://localhost'; //dev
else
    var url = ''; //production
let ApiService = class ApiService {
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
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-sass */ "./node_modules/prismjs/components/prism-sass.js");
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_11__);
// Manual
// https://auralinna.blog/post/2017/code-syntax-highlighting-with-angular-and-prismjs













let HighlightService = class HighlightService {
    constructor(platformId) {
        this.platformId = platformId;
    }
    highlightAll() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
        }
    }
};
HighlightService.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
HighlightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
], HighlightService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidatorService = class ValidatorService {
    constructor() { }
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
};
ValidatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ValidatorService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        // loadChildren: 'src/app/@modules/js-clan/js-clan.module#JsClanModule'
        loadChildren: () => __webpack_require__.e(/*! import() | modules-js-clan-js-clan-module */ "default~modules-authentication-authentication-module~modules-js-clan-js-clan-module").then(__webpack_require__.bind(null, /*! ./@modules/@js-clan/js-clan.module */ "./src/app/@modules/@js-clan/js-clan.module.ts")).then(m => m.JsClanModule)
    },
    {
        path: 'common',
        loadChildren: './@modules/@common-dependencies/@common-dependencies.module#CommonDependenciesModule'
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _root_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/app.component */ "./src/app/root/app.component.ts");
/* harmony import */ var _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./@modules/@common-dependencies/@common-dependencies.module */ "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts");
/* harmony import */ var _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@modules/@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");




// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// router

//  root component

// @modules

// services

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _root_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        ],
        imports: [
            // NgbModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_6__["CommonDependenciesModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ],
        providers: [
            _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        ],
        bootstrap: [_root_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



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

/***/ "./src/app/root/app.component.sass":
/*!*****************************************!*\
  !*** ./src/app/root/app.component.sass ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb3QvYXBwLmNvbXBvbmVudC5zYXNzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'front';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/root/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/root/app.component.sass")]
    })
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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