function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/@modules/@common-dependencies/@common-dependencies-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/@common-dependencies-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: CommonDependenciesRoutingModule */

  /***/
  function srcAppModulesCommonDependenciesCommonDependenciesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonDependenciesRoutingModule", function () {
      return CommonDependenciesRoutingModule;
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


    var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/main/main.component */
    "./src/app/@modules/@common-dependencies/pages/main/main.component.ts");
    /* harmony import */


    var _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/p404/p404.component */
    "./src/app/@modules/@common-dependencies/pages/p404/p404.component.ts");
    /* harmony import */


    var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/about-us/about-us.component */
    "./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.ts");
    /* harmony import */


    var _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/engineer/engineer.component */
    "./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.ts"); // pages


    var routes = [{
      path: '',
      redirectTo: '/main',
      pathMatch: 'full'
    }, {
      path: 'main',
      component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }, {
      path: 'about-us',
      component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"]
    }, {
      path: 'engineer/:name',
      component: _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_5__["EngineerComponent"]
    }, {
      path: 'p404',
      component: _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_3__["P404Component"]
    }];

    var CommonDependenciesRoutingModule = function CommonDependenciesRoutingModule() {
      _classCallCheck(this, CommonDependenciesRoutingModule);
    };

    CommonDependenciesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CommonDependenciesRoutingModule
    });
    CommonDependenciesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CommonDependenciesRoutingModule_Factory(t) {
        return new (t || CommonDependenciesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommonDependenciesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonDependenciesRoutingModule, [{
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
  "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/@common-dependencies.module.ts ***!
    \******************************************************************************/

  /*! exports provided: CommonDependenciesModule */

  /***/
  function srcAppModulesCommonDependenciesCommonDependenciesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonDependenciesModule", function () {
      return CommonDependenciesModule;
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


    var _common_dependencies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./@common-dependencies-routing.module */
    "./src/app/@modules/@common-dependencies/@common-dependencies-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/api.service */
    "./src/app/@modules/@common-dependencies/services/api.service.ts");
    /* harmony import */


    var _services_validator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/validator.service */
    "./src/app/@modules/@common-dependencies/services/validator.service.ts");
    /* harmony import */


    var _services_highlight_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/highlight.service */
    "./src/app/@modules/@common-dependencies/services/highlight.service.ts");
    /* harmony import */


    var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/main/main.component */
    "./src/app/@modules/@common-dependencies/pages/main/main.component.ts");
    /* harmony import */


    var _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/p404/p404.component */
    "./src/app/@modules/@common-dependencies/pages/p404/p404.component.ts");
    /* harmony import */


    var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/about-us/about-us.component */
    "./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.ts");
    /* harmony import */


    var _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/engineer/engineer.component */
    "./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.ts");
    /* harmony import */


    var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/general/nav/nav.component */
    "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts");
    /* harmony import */


    var _components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/general/form-validator/form-validator.component */
    "./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.ts");
    /* harmony import */


    var _components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/general/extra-alert/extra-alert.component */
    "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts");
    /* harmony import */


    var _components_special_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/special/show-code/show-code.component */
    "./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.ts");
    /* harmony import */


    var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/general/footer/footer.component */
    "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts");
    /* harmony import */


    var _components_special_nano_site_nano_site_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/special/nano-site/nano-site.component */
    "./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.ts");
    /* harmony import */


    var _components_general_camera_camera_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/general/camera/camera.component */
    "./src/app/@modules/@common-dependencies/components/general/camera/camera.component.ts"); // added modules
    // services
    // pages
    // components


    var CommonDependenciesModule = function CommonDependenciesModule() {
      _classCallCheck(this, CommonDependenciesModule);
    };

    CommonDependenciesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CommonDependenciesModule
    });
    CommonDependenciesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CommonDependenciesModule_Factory(t) {
        return new (t || CommonDependenciesModule)();
      },
      providers: [// services
      _services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorService"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _services_highlight_service__WEBPACK_IMPORTED_MODULE_7__["HighlightService"]],
      imports: [[_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_dependencies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommonDependenciesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommonDependenciesModule, {
        declarations: [// pages
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"], _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_9__["P404Component"], _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"], // components
        _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"], _components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_13__["FormValidatorComponent"], _components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_14__["ExtraAlertComponent"], _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_11__["EngineerComponent"], _components_special_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_15__["ShowCodeComponent"], _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _components_special_nano_site_nano_site_component__WEBPACK_IMPORTED_MODULE_17__["NanoSiteComponent"], _components_general_camera_camera_component__WEBPACK_IMPORTED_MODULE_18__["CameraComponent"]],
        imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_dependencies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommonDependenciesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        exports: [_components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_13__["FormValidatorComponent"], _components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_14__["ExtraAlertComponent"], _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _components_general_camera_camera_component__WEBPACK_IMPORTED_MODULE_18__["CameraComponent"] // ValidatorService -- !!! it's not need !!!
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonDependenciesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [// pages
          _pages_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"], _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_9__["P404Component"], _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"], // components
          _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"], _components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_13__["FormValidatorComponent"], _components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_14__["ExtraAlertComponent"], _pages_engineer_engineer_component__WEBPACK_IMPORTED_MODULE_11__["EngineerComponent"], _components_special_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_15__["ShowCodeComponent"], _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _components_special_nano_site_nano_site_component__WEBPACK_IMPORTED_MODULE_17__["NanoSiteComponent"], _components_general_camera_camera_component__WEBPACK_IMPORTED_MODULE_18__["CameraComponent"]],
          imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_dependencies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommonDependenciesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
          providers: [// services
          _services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorService"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _services_highlight_service__WEBPACK_IMPORTED_MODULE_7__["HighlightService"]],
          exports: [_components_general_form_validator_form_validator_component__WEBPACK_IMPORTED_MODULE_13__["FormValidatorComponent"], _components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_14__["ExtraAlertComponent"], _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _components_general_camera_camera_component__WEBPACK_IMPORTED_MODULE_18__["CameraComponent"] // ValidatorService -- !!! it's not need !!!
          ]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/components/general/camera/camera.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/components/general/camera/camera.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CameraComponent */

  /***/
  function srcAppModulesCommonDependenciesComponentsGeneralCameraCameraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraComponent", function () {
      return CameraComponent;
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


    var src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/my_modules/stuff */
    "./src/app/my_modules/stuff.ts");

    var CameraComponent =
    /*#__PURE__*/
    function () {
      function CameraComponent() {
        _classCallCheck(this, CameraComponent);

        this.constraints = window.constraints = {
          audio: false,
          video: true
        };
      }

      _createClass(CameraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"])('init camera');
          this.startCamera();
        } //
        // sctivate of camera
        //

      }, {
        key: "startCamera",
        value: function startCamera() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var stream;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return navigator.mediaDevices.getUserMedia(this.constraints);

                  case 3:
                    stream = _context.sent;
                    this.handleSuccess(stream);
                    _context.next = 10;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    console.error(_context.t0);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 7]]);
          }));
        } // for camera

      }, {
        key: "handleSuccess",
        value: function handleSuccess(stream) {
          var video = document.querySelector('video');
          var videoTracks = stream.getVideoTracks();
          console.log('Got stream with constraints:', this.constraints);
          console.log("Using video device: ".concat(videoTracks[0].label));
          window.stream = stream; // make variable available to browser console

          video.srcObject = stream;
        } // for camera

      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.name === 'ConstraintNotSatisfiedError') {
            var v = this.constraints.video;
            Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"])("The resolution ".concat(v.width.exact, "x").concat(v.height.exact, " px is not supported by your device."), 1);
          } else if (error.name === 'PermissionDeniedError') {
            Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"])('Permissions have not been granted to use your camera and ' + 'microphone, you need to allow the page access to your devices in ' + 'order for the demo to work.', 1);
          }

          Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"])("getUserMedia error: ".concat(error.name), error);
        }
      }]);

      return CameraComponent;
    }();

    CameraComponent.ɵfac = function CameraComponent_Factory(t) {
      return new (t || CameraComponent)();
    };

    CameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CameraComponent,
      selectors: [["app-camera"]],
      decls: 1,
      vars: 0,
      consts: [["id", "bg-camera", "autoplay", "", "playsinline", ""]],
      template: function CameraComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvZ2VuZXJhbC9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zYXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CameraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-camera',
          templateUrl: './camera.component.html',
          styleUrls: ['./camera.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: ExtraAlertComponent */

  /***/
  function srcAppModulesCommonDependenciesComponentsGeneralExtraAlertExtraAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtraAlertComponent", function () {
      return ExtraAlertComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function ExtraAlertComponent_div_0_ngb_accordion_12_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r55.st.devMsg, " ");
      }
    }

    function ExtraAlertComponent_div_0_ngb_accordion_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-accordion", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-panel", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExtraAlertComponent_div_0_ngb_accordion_12_ng_template_3_Template, 1, 1, "ng-template", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExtraAlertComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExtraAlertComponent_div_0_Template_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExtraAlertComponent_div_0_Template_button_click_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r52.st.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r52.st.userMsg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.st.devMsg);
      }
    }

    var ExtraAlertComponent =
    /*#__PURE__*/
    function () {
      function ExtraAlertComponent() {
        _classCallCheck(this, ExtraAlertComponent);
      }

      _createClass(ExtraAlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.st.show = false;
        }
      }]);

      return ExtraAlertComponent;
    }();

    ExtraAlertComponent.ɵfac = function ExtraAlertComponent_Factory(t) {
      return new (t || ExtraAlertComponent)();
    };

    ExtraAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExtraAlertComponent,
      selectors: [["app-extra-alert"]],
      inputs: {
        st: "st"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "modal", 4, "ngIf"], [1, "modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["activeIds", "ngb-panel-3", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["activeIds", "ngb-panel-3"], ["acc", "ngbAccordion"], ["title", "Dev msg"], ["ngbPanelContent", ""]],
      template: function ExtraAlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtraAlertComponent_div_0_Template, 16, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.st.show);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"]],
      styles: [".modal[_ngcontent-%COMP%] {\n  display: block;\n  background: rgba(0, 0, 0, 0.69);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL2V4dHJhLWFsZXJ0L0Q6XFxwcm9qZWN0c1xccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBjb21tb24tZGVwZW5kZW5jaWVzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxleHRyYS1hbGVydFxcZXh0cmEtYWxlcnQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvZ2VuZXJhbC9leHRyYS1hbGVydC9leHRyYS1hbGVydC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL2V4dHJhLWFsZXJ0L2V4dHJhLWFsZXJ0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsXG4gICAgZGlzcGxheTogYmxvY2tcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAwJSwgMC42OSkiLCIubW9kYWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtraAlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-extra-alert',
          templateUrl: './extra-alert.component.html',
          styleUrls: ['./extra-alert.component.sass']
        }]
      }], function () {
        return [];
      }, {
        st: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppModulesCommonDependenciesComponentsGeneralFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 10,
      vars: 0,
      consts: [[1, "footer"], [1, "container"], [1, "border-secondary", "mb-3", "mx-auto"], [1, "card-body"], [1, "card-title", "text-center"], [1, "card-text", "text-center"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\n  height: 20em;\n  background: url(/assets/img/base/footer/footer-img.jpg) no-repeat center fixed;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9EOlxccHJvamVjdHNcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAY29tbW9uLWRlcGVuZGVuY2llc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvZ2VuZXJhbC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLDhFQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvZ2VuZXJhbC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlclxuICAgIGhlaWdodDogMjBlbVxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9iYXNlL2Zvb3Rlci9mb290ZXItaW1nLmpwZykgbm8tcmVwZWF0IGNlbnRlciBmaXhlZCBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIiwiLmZvb3RlciB7XG4gIGhlaWdodDogMjBlbTtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2Jhc2UvZm9vdGVyL2Zvb3Rlci1pbWcuanBnKSBuby1yZXBlYXQgY2VudGVyIGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/components/general/form-validator/form-validator.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: FormValidatorComponent */

  /***/
  function srcAppModulesCommonDependenciesComponentsGeneralFormValidatorFormValidatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormValidatorComponent", function () {
      return FormValidatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FormValidatorComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormValidatorComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Must be at least ", ctx_r49.it.errors.minlength.requiredLength, " characters long. ");
      }
    }

    function FormValidatorComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Must be shorter ", ctx_r50.it.errors.maxlength.requiredLength, " characters long. ");
      }
    }

    function FormValidatorComponent_div_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r51.it.errors.mailValidator.msg, " ");
      }
    }

    function FormValidatorComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormValidatorComponent_div_0_div_1_Template, 2, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormValidatorComponent_div_0_div_2_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormValidatorComponent_div_0_div_3_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormValidatorComponent_div_0_div_4_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.it.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.it.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.it.errors.maxlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.it.errors.mailValidator && ctx_r47.it.value.length > 0);
      }
    }

    var FormValidatorComponent =
    /*#__PURE__*/
    function () {
      function FormValidatorComponent() {
        _classCallCheck(this, FormValidatorComponent);
      }

      _createClass(FormValidatorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// setInterval(_=> console.log('>>>', this.it), 1000 )
        }
      }]);

      return FormValidatorComponent;
    }();

    FormValidatorComponent.ɵfac = function FormValidatorComponent_Factory(t) {
      return new (t || FormValidatorComponent)();
    };

    FormValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormValidatorComponent,
      selectors: [["app-form-validator"]],
      inputs: {
        it: "it"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"]],
      template: function FormValidatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormValidatorComponent_div_0_Template, 5, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.it.invalid && (ctx.it.dirty || ctx.it.touched));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvZ2VuZXJhbC9mb3JtLXZhbGlkYXRvci9mb3JtLXZhbGlkYXRvci5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-form-validator',
          templateUrl: './form-validator.component.html',
          styleUrls: ['./form-validator.component.sass']
        }]
      }], function () {
        return [];
      }, {
        it: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppModulesCommonDependenciesComponentsGeneralNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../my_modules/stuff */
    "./src/app/my_modules/stuff.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);

        this.navbarOpen = false;
        this.drop1 = false;
        this.drop2 = false;
        this.navbarCollapse = 'navbar-collapse prepare';
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navToggle",
        value: function navToggle() {
          var _this = this;

          // open/close
          this.navbarOpen = !this.navbarOpen; // open ?

          this.navbarOpen ? Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["steps"])([[0, function (_) {
            return _this.navbarCollapse = 'navbar-collapse collapsing prepare';
          }], [20, function (_) {
            return _this.navbarCollapse = 'navbar-collapse opening prepare';
          }], [500, function (_) {
            return _this.navbarCollapse = 'navbar-collapse opened prepare';
          }]]) : Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["steps"])([[0, function (_) {
            return _this.navbarCollapse = 'navbar-collapse opening prepare';
          }], [70, function (_) {
            return _this.navbarCollapse = 'navbar-collapse  prepare';
          }]]); // this.navbarCollapse = 'navbar-collapse  prepare'
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 51,
      vars: 5,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLink", "/main", 1, "navbar-brand"], [1, "navbar-toggler", "collapsed", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarColor02", 3, "ngClass"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "/main", 1, "nav-link"], [1, "sr-only"], [1, "nav-item", "dropdown", 3, "ngClass", "click"], ["data-toggle", "dropdown", "id", "themes", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "themes", 1, "dropdown-menu", 3, "ngClass"], ["routerLink", "/main", 1, "dropdown-item"], [1, "dropdown-divider"], ["routerLink", "/about-us", 1, "dropdown-item"], ["routerLink", "/auth/help", 1, "dropdown-item"], ["routerLink", "/auth/login", 1, "dropdown-item"], ["routerLink", "/auth/register", 1, "dropdown-item"], ["routerLink", "/", 1, "dropdown-item"], ["routerLink", "/dev/forms", 1, "dropdown-item"], ["routerLink", "/dev/url-queries", 1, "dropdown-item"], ["routerLink", "/dev/any", 1, "dropdown-item"], [1, "nav-item"], ["routerLink", "/about-us", 1, "nav-link"], ["routerLink", "/main"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "text", "placeholder", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-secondary", "my-2", "my-sm-0"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_3_listener($event) {
            return ctx.navToggle();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_12_listener($event) {
            return ctx.drop1 = !ctx.drop1;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_29_listener($event) {
            return ctx.drop2 = !ctx.drop2;
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ɵm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]],
      styles: [".navbar-collapse[_ngcontent-%COMP%] {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.prepare[_ngcontent-%COMP%] {\n  overflow: visible;\n  display: block;\n}\n\n@media screen and (max-width: 992px) {\n  .prepare[_ngcontent-%COMP%] {\n    height: 0;\n    overflow: hidden;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  .opening[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n}\n\n.opened[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.collapsing[_ngcontent-%COMP%] {\n  height: 0;\n}\n\n@media (min-width: 992px) {\n  .dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9nZW5lcmFsL25hdi9EOlxccHJvamVjdHNcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAY29tbW9uLWRlcGVuZGVuY2llc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcbmF2XFxuYXYuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvZ2VuZXJhbC9uYXYvbmF2LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQUk7RUFISjtJQUlRLFNBQUE7SUFDQSxnQkFBQTtFQ0dOO0FBQ0Y7O0FEQUk7RUFESjtJQUVRLGFBQUE7RUNJTjtBQUNGOztBREhBO0VBQ0ksMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FDTUo7O0FESkE7RUFDSSxTQUFBO0FDT0o7O0FESEk7RUFESjtJQUVRLGtCQUFBO0VDT047QUFDRiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvZ2VuZXJhbC9uYXYvbmF2LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubmF2YmFyLWNvbGxhcHNlXG4gICAgdHJhbnNpdGlvbjogLjVzXG5cbi5wcmVwYXJlXG4gICAgb3ZlcmZsb3c6IHZpc2libGVcbiAgICBkaXNwbGF5OiBibG9ja1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KVxuICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlblxuICAgICAgICBcblxuLm9wZW5pbmdcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweClcbiAgICAgICAgaGVpZ2h0OiA1MDBweFxuXG4ub3BlbmVkXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudCAgXG5cbi5jb2xsYXBzaW5nXG4gICAgaGVpZ2h0OiAwICAgIFxuXG5cbi5kcm9wZG93bi1tZW51XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KVxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUiLCIubmF2YmFyLWNvbGxhcHNlIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnByZXBhcmUge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucHJlcGFyZSB7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm9wZW5pbmcge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbn1cblxuLm9wZW5lZCB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5jb2xsYXBzaW5nIHtcbiAgaGVpZ2h0OiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: NanoSiteComponent */

  /***/
  function srcAppModulesCommonDependenciesComponentsSpecialNanoSiteNanoSiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NanoSiteComponent", function () {
      return NanoSiteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../general/nav/nav.component */
    "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts");
    /* harmony import */


    var _general_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../general/footer/footer.component */
    "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts");

    var NanoSiteComponent =
    /*#__PURE__*/
    function () {
      function NanoSiteComponent() {
        _classCallCheck(this, NanoSiteComponent);
      }

      _createClass(NanoSiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NanoSiteComponent;
    }();

    NanoSiteComponent.ɵfac = function NanoSiteComponent_Factory(t) {
      return new (t || NanoSiteComponent)();
    };

    NanoSiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NanoSiteComponent,
      selectors: [["app-nano-site"]],
      decls: 19,
      vars: 0,
      consts: [[1, "wrap"]],
      template: function NanoSiteComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      directives: [_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _general_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: [".wrap[_ngcontent-%COMP%] {\n  margin: auto;\n  background-color: grey;\n  width: 50%;\n  height: 50%;\n  box-shadow: 0.2em 5em 5em 5em rgba(0, 0, 0, 0.3);\n  -webkit-transform: perspective(2000px) rotateY(35deg);\n          transform: perspective(2000px) rotateY(35deg);\n  -webkit-transition: 2s;\n  transition: 2s;\n}\n.wrap[_ngcontent-%COMP%]:hover {\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg);\n}\n.wrap[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9zcGVjaWFsL25hbm8tc2l0ZS9EOlxccHJvamVjdHNcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAY29tbW9uLWRlcGVuZGVuY2llc1xcY29tcG9uZW50c1xcc3BlY2lhbFxcbmFuby1zaXRlXFxuYW5vLXNpdGUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvc3BlY2lhbC9uYW5vLXNpdGUvbmFuby1zaXRlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7RUFDQSxzQkFBQTtFQUFBLGNBQUE7QUNDSjtBREFJO0VBQ0ksZ0NBQUE7VUFBQSx3QkFBQTtBQ0VSO0FEREk7RUFDSSxrQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvY29tcG9uZW50cy9zcGVjaWFsL25hbm8tc2l0ZS9uYW5vLXNpdGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCBcbiAgICBtYXJnaW46IGF1dG9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5XG4gICAgd2lkdGg6IDUwJVxuICAgIGhlaWdodDogNTAlXG4gICAgYm94LXNoYWRvdzogLjJlbSA1ZW0gNWVtIDVlbSByZ2JhKDAsMCwwLDAuMylcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDIwMDBweCkgcm90YXRlWSgzNWRlZylcbiAgICB0cmFuc2l0aW9uOiAyc1xuICAgICY6aG92ZXJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIFxuICAgIGRpdlxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiIsIi53cmFwIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgYm94LXNoYWRvdzogMC4yZW0gNWVtIDVlbSA1ZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDIwMDBweCkgcm90YXRlWSgzNWRlZyk7XG4gIHRyYW5zaXRpb246IDJzO1xufVxuLndyYXA6aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG59XG4ud3JhcCBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NanoSiteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nano-site',
          templateUrl: './nano-site.component.html',
          styleUrls: ['./nano-site.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ShowCodeComponent */

  /***/
  function srcAppModulesCommonDependenciesComponentsSpecialShowCodeShowCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowCodeComponent", function () {
      return ShowCodeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/highlight.service */
    "./src/app/@modules/@common-dependencies/services/highlight.service.ts");

    var ShowCodeComponent =
    /*#__PURE__*/
    function () {
      function ShowCodeComponent(highlightService) {
        _classCallCheck(this, ShowCodeComponent);

        this.highlightService = highlightService;
        this.codeExamples = [{
          title: 'example - 1',
          language: 'css',
          content: "body {\n        width: 100%;\n        height: 100%;\n        margin: 0 auto;\n      }"
        }, {
          title: 'example - 2',
          language: 'typescript',
          content: "console.log( const[...profit]= () => {} );"
        }, {
          title: 'example - 3',
          language: 'javascript',
          content: "let i = () => {};"
        }];
      }

      _createClass(ShowCodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.highlightService.highlightAll();
        }
      }]);

      return ShowCodeComponent;
    }();

    ShowCodeComponent.ɵfac = function ShowCodeComponent_Factory(t) {
      return new (t || ShowCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"]));
    };

    ShowCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowCodeComponent,
      selectors: [["app-show-code"]],
      inputs: {
        code: "code",
        language: "language"
      },
      decls: 5,
      vars: 3,
      template: function ShowCodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("language-" + ctx.language);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n      ", ctx.code, "\n    ");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL2NvbXBvbmVudHMvc3BlY2lhbC9zaG93LWNvZGUvc2hvdy1jb2RlLmNvbXBvbmVudC5zYXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-show-code',
          templateUrl: './show-code.component.html',
          styleUrls: ['./show-code.component.sass']
        }]
      }], function () {
        return [{
          type: _services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"]
        }];
      }, {
        code: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        language: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/data/team.ts":
  /*!************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/data/team.ts ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCommonDependenciesDataTeamTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var team = [{
      img: "https://www.dccomics.com/sites/default/files/Char_GetToKnow_Batman80_5ca54cb83a27a6.53173051.png",
      name: "engineer-1",
      chapter: "some important information about an engineer#1",
      past: "bla bla bla about your past",
      present: "bla bla bla about present",
      future: "bla bla bla about future",
      skills: [{
        type: 'HTML',
        level: '72',
        description: 'bla bla bla'
      }, {
        type: 'CSS',
        level: '62',
        description: 'bla bla bla'
      }, {
        type: 'JS',
        level: '52',
        description: 'bla bla bla'
      }, {
        type: 'NodeJS',
        level: '52',
        description: 'bla bla bla'
      }]
    }, {
      img: "https://www.dccomics.com/sites/default/files/gettoknow_atom_55f21e39aa2288.78318196.png",
      name: "engineer-2",
      chapter: "some important information about an engineer#2",
      past: "bla bla bla about your past",
      present: "bla bla bla about present",
      future: "bla bla bla about future",
      skills: [{
        type: 'HTML',
        level: '52',
        description: 'bla bla bla'
      }, {
        type: 'CSS',
        level: '42',
        description: 'bla bla bla'
      }, {
        type: 'JS',
        level: '62',
        description: 'bla bla bla'
      }, {
        type: 'NodeJS',
        level: '62',
        description: 'bla bla bla'
      }]
    }, {
      img: "https://www.dccomics.com/sites/default/files/gettoknow_firestorm_55f21ee244cb23.64798555.png",
      name: "engineer-3",
      chapter: "some important information about an engineer#3",
      past: "bla bla bla about your past",
      present: "bla bla bla about present",
      future: "bla bla bla about future",
      skills: [{
        type: 'HTML',
        level: '82',
        description: 'bla bla bla'
      }, {
        type: 'CSS',
        level: '72',
        description: 'bla bla bla'
      }, {
        type: 'JS',
        level: '42',
        description: 'bla bla bla'
      }, {
        type: 'NodeJS',
        level: '32',
        description: 'bla bla bla'
      }]
    }, {
      img: "https://www.dccomics.com/sites/default/files/gettoknow2_deathstroke_59373f6ab3aeb6.37111804.png",
      name: "engineer-4",
      chapter: "some important information about an engineer#4",
      past: "bla bla bla about your past",
      present: "bla bla bla about present",
      future: "bla bla bla about future",
      skills: [{
        type: 'HTML',
        level: '62',
        description: 'bla bla bla'
      }, {
        type: 'CSS',
        level: '52',
        description: 'bla bla bla'
      }, {
        type: 'JS',
        level: '42',
        description: 'bla bla bla'
      }, {
        type: 'NodeJS',
        level: '42',
        description: 'bla bla bla'
      }]
    }];
    /* harmony default export */

    __webpack_exports__["default"] = team;
    /***/
  },

  /***/
  "./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/pages/about-us/about-us.component.ts ***!
    \************************************************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppModulesCommonDependenciesPagesAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
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


    var _data_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../data/team */
    "./src/app/@modules/@common-dependencies/data/team.ts");
    /* harmony import */


    var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/general/nav/nav.component */
    "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/general/footer/footer.component */
    "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/engineer", a1];
    };

    function AboutUsComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var bro_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", bro_r36.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bro_r36.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bro_r36.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, bro_r36.name));
      }
    }

    var AboutUsComponent =
    /*#__PURE__*/
    function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);

        this.team = _data_team__WEBPACK_IMPORTED_MODULE_2__["default"];

        this.shuffledArr = function (arr) {
          return arr.sort(function () {
            return Math.random() - 0.5;
          });
        };
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _app_state__WEBPACK_IMPORTED_MODULE_1__["default"].nav.msg += 2;
          this.arrayRandomizer(_data_team__WEBPACK_IMPORTED_MODULE_2__["default"]);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "arrayRandomizer",
        value: function arrayRandomizer(arr) {
          var firstItem = arr.shift(),
              allItems = this.shuffledArr(arr);
          return allItems.unshift(firstItem);
        }
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
      return new (t || AboutUsComponent)();
    };

    AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutUsComponent,
      selectors: [["app-about-us"]],
      decls: 19,
      vars: 1,
      consts: [[1, "card", "border-secondary", "mb-3", "mx-auto"], [1, "card-body"], [1, "card-title", "text-center"], [1, "card-text", "text-center"], ["class", "person-card", 4, "ngFor", "ngForOf"], [1, "person-card"], [1, "person-card__portrait"], ["alt", "", 3, "src"], [1, "person-card__info"], [1, "btn", "btn-success", 3, "routerLink"], [1, "mdi", "mdi-arrow-right"]],
      template: function AboutUsComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team);
        }
      },
      directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
      styles: [".person-card[_ngcontent-%COMP%] {\n  margin: 0 5em 10em 5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.person-card[_ngcontent-%COMP%]:nth-child(even) {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n}\n\n.person-card__portrait[_ngcontent-%COMP%] {\n  width: 35%;\n}\n\n.person-card__portrait[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n.person-card__info[_ngcontent-%COMP%] {\n  width: 60%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.mdi-arrow-right[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  padding-left: 0.5em;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvYWJvdXQtdXMvRDpcXHByb2plY3RzXFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGNvbW1vbi1kZXBlbmRlbmNpZXNcXHBhZ2VzXFxhYm91dC11c1xcYWJvdXQtdXMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURDQTtFQUNFLDhCQUFBO0VBQUEsOEJBQUE7VUFBQSwyQkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBREZFO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNJTjs7QURGQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDS0Y7O0FESEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDTUY7O0FESkE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcnNvbi1jYXJkXG4gICAgbWFyZ2luOiAwIDVlbSAxMGVtIDVlbVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuXG4ucGVyc29uLWNhcmQ6bnRoLWNoaWxkKGV2ZW4pXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZVxuXG4ucGVyc29uLWNhcmRfX3BvcnRyYWl0XG4gIHdpZHRoOiAzNSVcbiAgaW1nXG4gICAgICB3aWR0aDogMTAwJVxuICAgICAgZGlzcGxheTogYmxvY2tcblxuLnBlcnNvbi1jYXJkX19pbmZvXG4gIHdpZHRoOiA2MCVcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uIFxuICBhbGlnbi1pdGVtczogY2VudGVyICAgXG5cbi5tZGktYXJyb3ctcmlnaHRcbiAgZm9udC1zaXplOiAxLjVlbVxuICBwYWRkaW5nLWxlZnQ6IC41ZW1cblxuLmJ0bi1zdWNjZXNzXG4gIGZvbnQtc2l6ZTogMS4xZW1cbiAgZGlzcGxheTogZmxleFxuICBhbGlnbi1pdGVtczogY2VudGVyIiwiLnBlcnNvbi1jYXJkIHtcbiAgbWFyZ2luOiAwIDVlbSAxMGVtIDVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wZXJzb24tY2FyZDpudGgtY2hpbGQoZXZlbikge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5wZXJzb24tY2FyZF9fcG9ydHJhaXQge1xuICB3aWR0aDogMzUlO1xufVxuLnBlcnNvbi1jYXJkX19wb3J0cmFpdCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wZXJzb24tY2FyZF9faW5mbyB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZGktYXJyb3ctcmlnaHQge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-us',
          templateUrl: './about-us.component.html',
          styleUrls: ['./about-us.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/pages/engineer/engineer.component.ts ***!
    \************************************************************************************/

  /*! exports provided: EngineerComponent */

  /***/
  function srcAppModulesCommonDependenciesPagesEngineerEngineerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EngineerComponent", function () {
      return EngineerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../data/team */
    "./src/app/@modules/@common-dependencies/data/team.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/highlight.service */
    "./src/app/@modules/@common-dependencies/services/highlight.service.ts");
    /* harmony import */


    var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/general/nav/nav.component */
    "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/general/footer/footer.component */
    "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts");
    /* harmony import */


    var _components_special_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/special/show-code/show-code.component */
    "./src/app/@modules/@common-dependencies/components/special/show-code/show-code.component.ts");

    function EngineerComponent_div_10_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
      }
    }

    function EngineerComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var skill_r39 = ctx.$implicit;

        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r39.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.numToArr(skill_r39.level));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", skill_r39.level, "% ");
      }
    }

    function EngineerComponent_ngb_tab_26_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var codeExample_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", codeExample_r42.title, " ");
      }
    }

    function EngineerComponent_ngb_tab_26_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-show-code", 20);
      }

      if (rf & 2) {
        var codeExample_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", codeExample_r42.content)("language", codeExample_r42.language);
      }
    }

    function EngineerComponent_ngb_tab_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-tab");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EngineerComponent_ngb_tab_26_ng_template_1_Template, 1, 1, "ng-template", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EngineerComponent_ngb_tab_26_ng_template_2_Template, 1, 2, "ng-template", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var EngineerComponent =
    /*#__PURE__*/
    function () {
      function EngineerComponent(route, highlightService) {
        _classCallCheck(this, EngineerComponent);

        this.route = route;
        this.highlightService = highlightService;
        this.engineer = this.getEngineer();
        this.codeExamples = [{
          title: 'example - 1',
          language: 'css',
          content: "body {\n        width: 100%;\n        height: 100%;\n        margin: 0 auto;\n      }"
        }, {
          title: 'example - 2',
          language: 'typescript',
          content: "console.log( const[...profit]= () => {} );"
        }, {
          title: 'example - 3',
          language: 'javascript',
          content: "let i = () => {};"
        }];
      }

      _createClass(EngineerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          setTimeout(function () {
            return _this2.highlightService.highlightAll();
          }, 100);
        }
      }, {
        key: "getEngineer",
        value: function getEngineer() {
          var name = this.route.snapshot.paramMap.get('name');

          var engineer = _data_team__WEBPACK_IMPORTED_MODULE_1__["default"].filter(function (engineer) {
            return engineer.name == name;
          });

          return engineer[0];
        }
      }, {
        key: "numToArr",
        value: function numToArr(num) {
          var arr = [];

          for (var i = 0; i < num; i++) {
            arr.push(i);
          }

          return arr;
        }
      }, {
        key: "highlight",
        value: function highlight() {
          this.highlightService.highlightAll();
          console.log('click');
        }
      }]);

      return EngineerComponent;
    }();

    EngineerComponent.ɵfac = function EngineerComponent_Factory(t) {
      return new (t || EngineerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"]));
    };

    EngineerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EngineerComponent,
      selectors: [["app-engineer"]],
      decls: 29,
      vars: 8,
      consts: [[1, "wrap"], [1, "about"], [1, "member-img"], ["alt", "", 3, "src"], [1, "test"], [1, "right"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "icons"], [1, "iconBtn", "mdi", "mdi-linkedin-box"], [1, "iconBtn", "mdi", "mdi-github-box"], [1, "member-info"], [1, "nav-fill", 3, "click"], [4, "ngFor", "ngForOf"], [1, "skill"], [1, "type"], [1, "level"], ["class", "progressBar", 4, "ngFor", "ngForOf"], [1, "progressBar"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [3, "code", "language"]],
      template: function EngineerComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerComponent_Template_ngb_tabset_click_25_listener($event) {
            return ctx.highlight();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EngineerComponent_ngb_tab_26_Template, 3, 0, "ngb-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-footer");
        }

        if (rf & 2) {
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
        }
      },
      directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabset"], _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabContent"], _components_special_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_8__["ShowCodeComponent"]],
      styles: [".wrap[_ngcontent-%COMP%] {\n  margin: 0 5em;\n}\n\n.member-img[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 50%;\n  margin: 2em;\n}\n\n.member-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.member-info[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.level[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.member-code[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\ncode[_ngcontent-%COMP%] {\n  margin: 2em;\n}\n\n.about[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n.test[_ngcontent-%COMP%] {\n  margin: 2em;\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.progressBar[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.125em;\n  height: 1em;\n  background-color: orange;\n  margin-right: 0.25em;\n  box-shadow: 0px 0px 7px 2px rgba(255, 0, 0, 0.42);\n}\n\n.iconBtn[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n.iconBtn[_ngcontent-%COMP%]:hover::before {\n  cursor: pointer;\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n}\n\n.icons[_ngcontent-%COMP%] {\n  -webkit-transform: translateX(-0.4em);\n          transform: translateX(-0.4em);\n  -webkit-transform: translateY(1.4em);\n          transform: translateY(1.4em);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvZW5naW5lZXIvRDpcXHByb2plY3RzXFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGNvbW1vbi1kZXBlbmRlbmNpZXNcXHBhZ2VzXFxlbmdpbmVlclxcZW5naW5lZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL3BhZ2VzL2VuZ2luZWVyL2VuZ2luZWVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRERJO0VBQ0ksV0FBQTtBQ0dSOztBRERBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0lKOztBRERBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0FDTUo7O0FESkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ1FKOztBRExBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpREFBQTtBQ1FKOztBRE5BO0VBQ0ksY0FBQTtBQ1NKOztBRFBRO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUNTWjs7QURQQTtFQUNJLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AY29tbW9uLWRlcGVuZGVuY2llcy9wYWdlcy9lbmdpbmVlci9lbmdpbmVlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwIFxuICAgIG1hcmdpbjogMCA1ZW1cblxuLm1lbWJlci1pbWdcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB3aWR0aDogNTAlXG4gICAgbWFyZ2luOiAyZW1cbiAgICBpbWdcbiAgICAgICAgd2lkdGg6IDEwMCVcblxuLm1lbWJlci1pbmZvXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG5cblxuLmxldmVsXG4gICAgZGlzcGxheTogZmxleFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcblxuLm1lbWJlci1jb2RlXG4gICAgZGlzcGxheTogZmxleFxuXG5jb2RlICAgIFxuICAgIG1hcmdpbjogMmVtXG5cbi5hYm91dCBcbiAgICBkaXNwbGF5OiBmbGV4XG5cbi50ZXN0XG4gICAgbWFyZ2luOiAyZW1cbiAgICB3aWR0aDogNTAlXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gICAgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG5cblxuLnByb2dyZXNzQmFyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgd2lkdGg6IC4xMjVlbVxuICAgIGhlaWdodDogMWVtXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlXG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVlbVxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDJweCByZ2JhKDI1NSwgMCwgMCwgMC40MilcblxuLmljb25CdG5cbiAgICBmb250LXNpemU6IDNlbSBcbiAgICAmOmhvdmVyIFxuICAgICAgICAmOjpiZWZvcmVcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlciBcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSAgIFxuXG4uaWNvbnNcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLS40ZW0pXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEuNGVtKVxuIiwiLndyYXAge1xuICBtYXJnaW46IDAgNWVtO1xufVxuXG4ubWVtYmVyLWltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAyZW07XG59XG4ubWVtYmVyLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbWJlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxldmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbWJlci1jb2RlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuY29kZSB7XG4gIG1hcmdpbjogMmVtO1xufVxuXG4uYWJvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGVzdCB7XG4gIG1hcmdpbjogMmVtO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9ncmVzc0JhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDAuMTI1ZW07XG4gIGhlaWdodDogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIG1hcmdpbi1yaWdodDogMC4yNWVtO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAycHggcmdiYSgyNTUsIDAsIDAsIDAuNDIpO1xufVxuXG4uaWNvbkJ0biB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuLmljb25CdG46aG92ZXI6OmJlZm9yZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xufVxuXG4uaWNvbnMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuNGVtKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEuNGVtKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EngineerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-engineer',
          templateUrl: './engineer.component.html',
          styleUrls: ['./engineer.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/pages/main/main.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/pages/main/main.component.ts ***!
    \****************************************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppModulesCommonDependenciesPagesMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
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


    var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../app-state */
    "./src/app/app-state.ts");
    /* harmony import */


    var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../my_modules/stuff */
    "./src/app/my_modules/stuff.ts");
    /* harmony import */


    var _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../@modules/@common-dependencies/services/api.service */
    "./src/app/@modules/@common-dependencies/services/api.service.ts");
    /* harmony import */


    var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/general/nav/nav.component */
    "./src/app/@modules/@common-dependencies/components/general/nav/nav.component.ts");
    /* harmony import */


    var _components_special_nano_site_nano_site_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/special/nano-site/nano-site.component */
    "./src/app/@modules/@common-dependencies/components/special/nano-site/nano-site.component.ts");
    /* harmony import */


    var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/general/footer/footer.component */
    "./src/app/@modules/@common-dependencies/components/general/footer/footer.component.ts");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(api) {
        _classCallCheck(this, MainComponent);

        this.api = api;
        this.model = {
          left: true,
          middle: false,
          right: false
        };
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var fromGit;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _app_state__WEBPACK_IMPORTED_MODULE_2__["default"].nav.msg += 1;
                    Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])(_app_state__WEBPACK_IMPORTED_MODULE_2__["default"].nav.msg);
                    _context2.next = 4;
                    return this.api.test();

                  case 4:
                    fromGit = _context2.sent;
                    Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])(fromGit);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 39,
      vars: 0,
      consts: [[1, "container", "main"], [1, "hero-main"], [1, "hero-logo"], ["src", "assets/img/base/Logo-Chugayster.svg", "alt", "", "srcset", "", 1, "big-logo"], [1, "hero-text-color"], [1, "btn", "btn-start"], [1, "hero-description"], [1, "mdi", "mdi-view-grid-plus"], [1, "hero"], [1, "example"], [1, "example-left"], [1, "example-right"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _components_special_nano_site_nano_site_component__WEBPACK_IMPORTED_MODULE_6__["NanoSiteComponent"], _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      styles: [".big-logo[_ngcontent-%COMP%] {\n  margin-right: 5em;\n  width: 15em;\n}\n\n.hero-logo[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transform: translateY(-3em);\n          transform: translateY(-3em);\n}\n\n.hero[_ngcontent-%COMP%] {\n  z-index: -1;\n  background: linear-gradient(200deg, #fbff00, #f58442);\n  position: absolute;\n  width: 100%;\n  height: 36em;\n  -webkit-transform: skewY(-8deg);\n          transform: skewY(-8deg);\n  -webkit-transform-origin: 100% center;\n          transform-origin: 100% center;\n  overflow: hidden;\n  right: 0;\n  top: -15em;\n}\n\n.hero-main[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.hero-description[_ngcontent-%COMP%] {\n  margin-top: -10em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.hero-description[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: left;\n  padding-left: 1em;\n  line-height: 1.2em;\n}\n\n.hero-description[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 5.95em;\n  color: white;\n  opacity: 0.5;\n}\n\n.hero-text-color[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: #000;\n}\n\n.hero-text-color[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n\n.hero-text-color[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.btn-start[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0.5em 1em;\n  border-radius: 2em;\n  font-size: 1.2em;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.btn-start[_ngcontent-%COMP%]:hover {\n  box-shadow: 0.2em 0.4em 0.5em 0.2em rgba(0, 0, 0, 0.3);\n}\n\n.expample[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.example-left[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.example-left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 13em;\n  width: 100%;\n  background-color: #fff;\n  margin: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGNvbW1vbi1kZXBlbmRlbmNpZXMvcGFnZXMvbWFpbi9EOlxccHJvamVjdHNcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAY29tbW9uLWRlcGVuZGVuY2llc1xccGFnZXNcXG1haW5cXG1haW4uY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNJSjs7QURGQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNLSjs7QURKSTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTVI7O0FETEk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDT1I7O0FESkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxXQUFBO0FDT0o7O0FETkk7RUFDSSxvQkFBQTtBQ1FSOztBRFBJO0VBQ0ksa0JBQUE7QUNTUjs7QURQQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVUo7O0FEVEk7RUFDSSxzREFBQTtBQ1dSOztBRFRBO0VBQ0ksa0JBQUE7QUNZSjs7QURWQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNhSjs7QURaSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDY1IiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AY29tbW9uLWRlcGVuZGVuY2llcy9wYWdlcy9tYWluL21haW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlnLWxvZ29cbiAgICBtYXJnaW4tcmlnaHQ6IDVlbVxuICAgIHdpZHRoOiAxNWVtXG5cbi5oZXJvLWxvZ29cbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM2VtKVxuXG4uaGVyb1xuICAgIHotaW5kZXg6IC0xXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIwMGRlZywgI2ZiZmYwMCwgI2Y1ODQ0MilcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICB3aWR0aDogMTAwJVxuICAgIGhlaWdodDogMzZlbVxuICAgIHRyYW5zZm9ybTogc2tld1koLThkZWcpXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSBjZW50ZXJcbiAgICBvdmVyZmxvdzogaGlkZGVuXG4gICAgcmlnaHQ6IDBcbiAgICB0b3A6IC0xNWVtXG5cbi5oZXJvLW1haW5cbiAgICBoZWlnaHQ6IDEwMHZoICAgXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAgIFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiBcbi5oZXJvLWRlc2NyaXB0aW9uXG4gICAgbWFyZ2luLXRvcDogLTEwZW1cbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgaDQgXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICBcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW1cbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtXG4gICAgaVxuICAgICAgICBmb250LXNpemU6IDUuOTVlbVxuICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgb3BhY2l0eTogLjVcbiAgICAgICAgXG5cbi5oZXJvLXRleHQtY29sb3JcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGNvbG9yOiAjMDAwXG4gICAgaDEgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41ZW1cbiAgICBoNFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW1cbiAgICBcbi5idG4tc3RhcnRcbiAgICBiYWNrZ3JvdW5kOiAjZmZmXG4gICAgcGFkZGluZzogLjVlbSAxZW1cbiAgICBib3JkZXItcmFkaXVzOiAyZW1cbiAgICBmb250LXNpemU6IDEuMmVtXG4gICAgY3Vyc29yOiBwb2ludGVyXG4gICAgZm9udC13ZWlnaHQ6IDYwMFxuICAgICY6aG92ZXJcbiAgICAgICAgYm94LXNoYWRvdzogLjJlbSAuNGVtIC41ZW0gLjJlbSByZ2JhKDAsMCwwLDAuMylcblxuLmV4cGFtcGxlXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG5cbi5leGFtcGxlLWxlZnRcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICB3aWR0aDogMjAlXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiAgICBkaXZcbiAgICAgICAgaGVpZ2h0OiAxM2VtXG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcbiAgICAgICAgbWFyZ2luOiAuNWVtIiwiLmJpZy1sb2dvIHtcbiAgbWFyZ2luLXJpZ2h0OiA1ZW07XG4gIHdpZHRoOiAxNWVtO1xufVxuXG4uaGVyby1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zZW0pO1xufVxuXG4uaGVybyB7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjAwZGVnLCAjZmJmZjAwLCAjZjU4NDQyKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNmVtO1xuICB0cmFuc2Zvcm06IHNrZXdZKC04ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHJpZ2h0OiAwO1xuICB0b3A6IC0xNWVtO1xufVxuXG4uaGVyby1tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZXJvLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogLTEwZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlcm8tZGVzY3JpcHRpb24gaDQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBsaW5lLWhlaWdodDogMS4yZW07XG59XG4uaGVyby1kZXNjcmlwdGlvbiBpIHtcbiAgZm9udC1zaXplOiA1Ljk1ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uaGVyby10ZXh0LWNvbG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICMwMDA7XG59XG4uaGVyby10ZXh0LWNvbG9yIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG4uaGVyby10ZXh0LWNvbG9yIGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uYnRuLXN0YXJ0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5idG4tc3RhcnQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwLjJlbSAwLjRlbSAwLjVlbSAwLjJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5leHBhbXBsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmV4YW1wbGUtbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmV4YW1wbGUtbGVmdCBkaXYge1xuICBoZWlnaHQ6IDEzZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAuNWVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.sass']
        }]
      }], function () {
        return [{
          type: _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/pages/p404/p404.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/pages/p404/p404.component.ts ***!
    \****************************************************************************/

  /*! exports provided: P404Component */

  /***/
  function srcAppModulesCommonDependenciesPagesP404P404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P404Component", function () {
      return P404Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var P404Component =
    /*#__PURE__*/
    function () {
      function P404Component() {
        _classCallCheck(this, P404Component);
      }

      _createClass(P404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return P404Component;
    }();

    P404Component.ɵfac = function P404Component_Factory(t) {
      return new (t || P404Component)();
    };

    P404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: P404Component,
      selectors: [["app-p404"]],
      decls: 4,
      vars: 0,
      consts: [["routerLink", "/main", "type", "button", 1, "btn", "btn-primary", "btn-lg"]],
      template: function P404Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "p404 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go To Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bjb21tb24tZGVwZW5kZW5jaWVzL3BhZ2VzL3A0MDQvcDQwNC5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-p404',
          templateUrl: './p404.component.html',
          styleUrls: ['./p404.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/services/api.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/services/api.service.ts ***!
    \***********************************************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppModulesCommonDependenciesServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };
    if (location.hostname == 'localhost') var url = 'http://localhost'; //dev
    else var url = ''; //production

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http) {
        var _this3 = this;

        _classCallCheck(this, ApiService);

        this.http = http; // test

        this.test = function () {
          return _this3.http.get('https://api.github.com/users').toPromise();
        }; // front


        this.getJson = function (path) {
          return _this3.http.get('./assets' + path).toPromise();
        }; // back


        this.register = function (userData) {
          return _this3.http.post(url + '/api/auth/register', userData, httpOptions).toPromise();
        };

        this.login = function (userData) {
          return _this3.http.post(url + '/api/auth/login', userData, httpOptions).toPromise();
        };
      } // auth info ???
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


      _createClass(ApiService, [{
        key: "getSessionInfo",
        value: function getSessionInfo() {
          return this.http.get(url + '/session-info').toPromise();
        } // getProducts(): any {
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

      }, {
        key: "createFingerPrint",
        value: function createFingerPrint(systemInfo) {
          console.log(systemInfo);
          return this.http.post(url + '/session', systemInfo, httpOptions).toPromise();
        }
      }, {
        key: "getUserInfoIfLogged",
        value: function getUserInfoIfLogged() {
          return this.http.get(url + '/get-user-info-if-logged', httpOptions).toPromise();
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/services/fingerprint.service.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/services/fingerprint.service.ts ***!
    \*******************************************************************************/

  /*! exports provided: FingerprintService */

  /***/
  function srcAppModulesCommonDependenciesServicesFingerprintServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FingerprintService", function () {
      return FingerprintService;
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


    var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/@modules/@common-dependencies/services/storage.service.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/@modules/@common-dependencies/services/api.service.ts");

    var FingerprintService =
    /*#__PURE__*/
    function () {
      function FingerprintService(storage, api) {
        _classCallCheck(this, FingerprintService);

        this.storage = storage;
        this.api = api;
      }

      _createClass(FingerprintService, [{
        key: "checkIfItExist",
        value: function checkIfItExist() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.getFingerPrint();

                  case 2:
                    if (_context3.sent) {
                      _context3.next = 4;
                      break;
                    }

                    this.createFingerPrint();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getFingerPrint",
        value: function getFingerPrint() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.storage.getItem('session');

                  case 2:
                    return _context4.abrupt("return", _context4.sent);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "createFingerPrint",
        value: function createFingerPrint() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var fromServer;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.api.createFingerPrint({
                      appVersion: navigator.appVersion
                    });

                  case 2:
                    fromServer = _context5.sent;
                    console.log('token from server - ', fromServer);
                    this.storage.setItem('session', fromServer.session); // token set to local storage 

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return FingerprintService;
    }();

    FingerprintService.ɵfac = function FingerprintService_Factory(t) {
      return new (t || FingerprintService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
    };

    FingerprintService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FingerprintService,
      factory: FingerprintService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FingerprintService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/services/highlight.service.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/services/highlight.service.ts ***!
    \*****************************************************************************/

  /*! exports provided: HighlightService */

  /***/
  function srcAppModulesCommonDependenciesServicesHighlightServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightService", function () {
      return HighlightService;
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


    var clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! clipboard */
    "./node_modules/clipboard/dist/clipboard.js");
    /* harmony import */


    var clipboard__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! prismjs */
    "./node_modules/prismjs/prism.js");
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! prismjs/plugins/toolbar/prism-toolbar */
    "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
    /* harmony import */


    var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */
    "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
    /* harmony import */


    var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! prismjs/components/prism-css */
    "./node_modules/prismjs/components/prism-css.js");
    /* harmony import */


    var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! prismjs/components/prism-javascript */
    "./node_modules/prismjs/components/prism-javascript.js");
    /* harmony import */


    var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! prismjs/components/prism-markup */
    "./node_modules/prismjs/components/prism-markup.js");
    /* harmony import */


    var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! prismjs/components/prism-typescript */
    "./node_modules/prismjs/components/prism-typescript.js");
    /* harmony import */


    var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! prismjs/components/prism-sass */
    "./node_modules/prismjs/components/prism-sass.js");
    /* harmony import */


    var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_10__); // Manual
    // https://auralinna.blog/post/2017/code-syntax-highlighting-with-angular-and-prismjs


    var HighlightService =
    /*#__PURE__*/
    function () {
      function HighlightService(platformId) {
        _classCallCheck(this, HighlightService);

        this.platformId = platformId;
      }

      _createClass(HighlightService, [{
        key: "highlightAll",
        value: function highlightAll() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
          }
        }
      }]);

      return HighlightService;
    }();

    HighlightService.ɵfac = function HighlightService_Factory(t) {
      return new (t || HighlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
    };

    HighlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HighlightService,
      factory: HighlightService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/services/storage.service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/services/storage.service.ts ***!
    \***************************************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppModulesCommonDependenciesServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StorageService =
    /*#__PURE__*/
    function () {
      function StorageService() {
        _classCallCheck(this, StorageService);
      }

      _createClass(StorageService, [{
        key: "getBasketFromStorage",
        value: function getBasketFromStorage() {
          var json = localStorage.getItem('basket');
          if (json == null) return [];else return JSON.parse(json);
        }
      }, {
        key: "setItem",
        value: function setItem(key, value) {
          //return Promise.resolve().then(function () {
          localStorage.setItem(key, JSON.stringify(value)); //});
        }
      }, {
        key: "getItem",
        value: function getItem(key) {
          return Promise.resolve().then(function () {
            return JSON.parse(localStorage.getItem(key));
          });
        }
      }]);

      return StorageService;
    }();

    StorageService.ɵfac = function StorageService_Factory(t) {
      return new (t || StorageService)();
    };

    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StorageService,
      factory: StorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@modules/@common-dependencies/services/validator.service.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/@modules/@common-dependencies/services/validator.service.ts ***!
    \*****************************************************************************/

  /*! exports provided: ValidatorService */

  /***/
  function srcAppModulesCommonDependenciesServicesValidatorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidatorService", function () {
      return ValidatorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ValidatorService =
    /*#__PURE__*/
    function () {
      function ValidatorService() {
        _classCallCheck(this, ValidatorService);
      }

      _createClass(ValidatorService, [{
        key: "test",
        value: function test() {
          return 'v serv';
        } // check email

      }, {
        key: "mailValidator",
        value: function mailValidator() {
          var x = {
            mailValidator: {
              msg: "Incorrect email"
            }
          };
          var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          return function (control) {
            var isValide = pattern.test(control.value);
            return isValide ? null : x;
          };
        } // check items equal

      }, {
        key: "itemsAreEqual",
        value: function itemsAreEqual(itemName, first, second) {
          var x = {
            itemsAreEqual: {
              msg: "".concat(itemName, " are not equal")
            }
          };
          return function (group) {
            var isEqual = group.get(first).value === group.get(second).value;
            return isEqual ? null : x; // x => this.userForm.controls.passwords.errors.custom
          };
        }
      }]);

      return ValidatorService;
    }();

    ValidatorService.ɵfac = function ValidatorService_Factory(t) {
      return new (t || ValidatorService)();
    };

    ValidatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ValidatorService,
      factory: ValidatorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      // loadChildren: 'src/app/@modules/js-clan/js-clan.module#JsClanModule'
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-js-clan-js-clan-module */
        "default~modules-authentication-authentication-module~modules-js-clan-js-clan-module").then(__webpack_require__.bind(null,
        /*! ./@modules/@js-clan/js-clan.module */
        "./src/app/@modules/@js-clan/js-clan.module.ts")).then(function (mod) {
          return mod.JsClanModule;
        });
      }
    }, {
      path: 'common',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./@modules/@common-dependencies/@common-dependencies.module */
        "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts")).then(function (mod) {
          return mod.CommonDependenciesModule;
        });
      }
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-authentication-authentication-module */
        [__webpack_require__.e("default~modules-authentication-authentication-module~modules-js-clan-js-clan-module"), __webpack_require__.e("modules-authentication-authentication-module")]).then(__webpack_require__.bind(null,
        /*! ./@modules/@authentication/@authentication.module */
        "./src/app/@modules/@authentication/@authentication.module.ts")).then(function (mod) {
          return mod.AuthenticationModule;
        });
      }
    }, {
      path: 'dev',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-developer-guide-developer-guide-module */
        "modules-developer-guide-developer-guide-module").then(__webpack_require__.bind(null,
        /*! ./@modules/@developer-guide/@developer-guide.module */
        "./src/app/@modules/@developer-guide/@developer-guide.module.ts")).then(function (mod) {
          return mod.DeveloperGuideModule;
        });
      }
    }, {
      path: '**',
      redirectTo: '/p404'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-state.ts":
  /*!******************************!*\
    !*** ./src/app/app-state.ts ***!
    \******************************/

  /*! exports provided: default */

  /***/
  function srcAppAppStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var appState = {
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
      roles: ['Guest', 'Admin', 'Owner', 'Operator'],
      alert: {
        show: false,
        title: 'About',
        userMsg: 'Some wrong or good',
        devMsg: 'Tech details'
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = appState;
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _root_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./root/app.component */
    "./src/app/root/app.component.ts");
    /* harmony import */


    var _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./@modules/@common-dependencies/@common-dependencies.module */
    "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts");
    /* harmony import */


    var _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./@modules/@common-dependencies/services/api.service */
    "./src/app/@modules/@common-dependencies/services/api.service.ts"); // import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
    // import { ReactiveFormsModule,FormsModule } from '@angular/forms';
    // router
    //  root component
    // @modules
    // services


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]],
      imports: [[// NgbModule,
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_5__["CommonDependenciesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [// NgbModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_5__["CommonDependenciesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [// NgbModule,
          _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_5__["CommonDependenciesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [_modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]],
          // schemas: [CUSTOM_ELEMENTS_SCHEMA],
          bootstrap: [_root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/my_modules/stuff.ts":
  /*!*************************************!*\
    !*** ./src/app/my_modules/stuff.ts ***!
    \*************************************/

  /*! exports provided: log, steps, parseQuery, getUrlQueries, my_alert */

  /***/
  function srcAppMy_modulesStuffTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "log", function () {
      return log;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "steps", function () {
      return steps;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseQuery", function () {
      return parseQuery;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUrlQueries", function () {
      return getUrlQueries;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "my_alert", function () {
      return my_alert;
    });
    /* harmony import */


    var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../app-state */
    "./src/app/app-state.ts");

    var log = console.log;

    var steps = function steps(lot) {
      lot.map(function (one) {
        return setTimeout(one[1], one[0]);
      });
    }; //////////////////////////////////////////////////////////////////////////////////////////
    //                                    work with URL                                     //
    //////////////////////////////////////////////////////////////////////////////////////////


    var parseQuery = function parseQuery(queryString) {
      var query = {};
      var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');

      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      }

      return query;
    };

    var getUrlQueries = function getUrlQueries() {
      return parseQuery(location.search);
    };

    var my_alert = function my_alert(title, userMsg, devMsg) {
      _app_state__WEBPACK_IMPORTED_MODULE_0__["default"].alert = {
        show: true,
        title: title,
        userMsg: userMsg,
        devMsg: devMsg
      };
    };
    /***/

  },

  /***/
  "./src/app/root/app.component.ts":
  /*!***************************************!*\
    !*** ./src/app/root/app.component.ts ***!
    \***************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppRootAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app-state */
    "./src/app/app-state.ts");
    /* harmony import */


    var _modules_common_dependencies_services_fingerprint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../@modules/@common-dependencies/services/fingerprint.service */
    "./src/app/@modules/@common-dependencies/services/fingerprint.service.ts");
    /* harmony import */


    var _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../@modules/@common-dependencies/services/api.service */
    "./src/app/@modules/@common-dependencies/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(fingerPrint, api) {
        _classCallCheck(this, AppComponent);

        this.fingerPrint = fingerPrint;
        this.api = api;
        this.title = 'front';
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_2__["default"];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fingerPrint.checkIfItExist();
          this.getUserInfo();
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.api.getUserInfoIfLogged();

                  case 2:
                    this.st.user = _context6.sent;
                    console.log('result getUserInfo', this.st.user); // this.st.user = fromServer
                    // if (this.st.user.firstName) {
                    //   this.st.header.isLogged = true;
                    //   this.st.header.user.name = fromServer.firstName;
                    // }

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_common_dependencies_services_fingerprint_service__WEBPACK_IMPORTED_MODULE_3__["FingerprintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb3QvYXBwLmNvbXBvbmVudC5zYXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass'] // encapsulation: ViewEncapsulation.None,

        }]
      }], function () {
        return [{
          type: _modules_common_dependencies_services_fingerprint_service__WEBPACK_IMPORTED_MODULE_3__["FingerprintService"]
        }, {
          type: _modules_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\projects\projects2\Chugayster\front\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map