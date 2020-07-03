(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-authentication-authentication-module~modules-js-clan-js-clan-module"],{

/***/ "./src/app/@modules/@js-clan/components/flip-card-video/flip-card-video.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/components/flip-card-video/flip-card-video.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FlipCardVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipCardVideoComponent", function() { return FlipCardVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function (a1) { return ["/lesson", a1]; };
function FlipCardVideoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r64.card.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r64.urlSafe, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r64.card.description[ctx_r64.st.lang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r64.card.text[ctx_r64.st.lang]);
} }
class FlipCardVideoComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.url = "https://www.youtube.com/embed/";
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.card.video);
    }
}
FlipCardVideoComponent.ɵfac = function FlipCardVideoComponent_Factory(t) { return new (t || FlipCardVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
FlipCardVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlipCardVideoComponent, selectors: [["app-flip-card-video"]], inputs: { card: "card" }, decls: 1, vars: 1, consts: [["class", "flip-card", 3, "routerLink", 4, "ngIf"], [1, "flip-card", 3, "routerLink"], [1, "flip-card-inner"], [1, "card", "mb-3", "flip-card-front"], ["frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"], [1, "card-body"], [1, "card-text"], [1, "card", "mb-3", "flip-card-back"]], template: function FlipCardVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FlipCardVideoComponent_div_0_Template, 12, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.number);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".flip-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n.flip-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  -webkit-transition: -webkit-transform 0.6s;\n  transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  transition: transform 0.6s, -webkit-transform 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] {\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.flip-card-back[_ngcontent-%COMP%] {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  position: absolute;\n  top: 0;\n}\n\n.card-img-2[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  display: block;\n  background-size: cover;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.18);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9mbGlwLWNhcmQtdmlkZW8vRDpcXHByb2plY3RzXFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXGNvbXBvbmVudHNcXGZsaXAtY2FyZC12aWRlb1xcZmxpcC1jYXJkLXZpZGVvLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9jb21wb25lbnRzL2ZsaXAtY2FyZC12aWRlby9mbGlwLWNhcmQtdmlkZW8uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw2QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7RUFBQSwwQkFBQTtFQUFBLGtEQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FERUE7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0VGOztBREVBO0VBQ0Usa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURBQTtFQUVJLCtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9jb21wb25lbnRzL2ZsaXAtY2FyZC12aWRlby9mbGlwLWNhcmQtdmlkZW8uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGZsaXAtY2FyZFxuLmZsaXAtY2FyZFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4XG5cbi5mbGlwLWNhcmQtaW5uZXJcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIHdpZHRoOiAxMDAlXG4gIGhlaWdodDogMTAwJVxuICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnNcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMilcblxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpXG5cbi5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFja1xuICBoZWlnaHQ6IDEwMCVcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuXG5cbi5mbGlwLWNhcmQtZnJvbnRcblxuLmZsaXAtY2FyZC1iYWNrXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICB0b3A6IDBcblxuLmNhcmQtaW1nLTJcbiAgaGVpZ2h0OiAyMDBweFxuICB3aWR0aDogMTAwJVxuICBkaXNwbGF5OiBibG9ja1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG5cbi5jYXJkLWJvZHkgXG4gICAgLy8gcGFkZGluZzogMS4yNXJlbSAgMS4yNXJlbSAgMCAgMS4yNXJlbSAgXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KSIsIi5mbGlwLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuLmZsaXAtY2FyZC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmZsaXAtY2FyZC1mcm9udCwgLmZsaXAtY2FyZC1iYWNrIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5mbGlwLWNhcmQtYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLmNhcmQtaW1nLTIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipCardVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flip-card-video',
                templateUrl: './flip-card-video.component.html',
                styleUrls: ['./flip-card-video.component.sass']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/components/flip-card/flip-card.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/components/flip-card/flip-card.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FlipCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipCardComponent", function() { return FlipCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/lesson", a1]; };
function FlipCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Go to lesson");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r63.card.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.card.title[ctx_r63.st.lang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-image", "url(" + ctx_r63.card.img + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.card.description[ctx_r63.st.lang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0423\u0440\u043E\u043A: ", ctx_r63.card.number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.card.text[ctx_r63.st.lang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r63.card.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0423\u0440\u043E\u043A: ", ctx_r63.card.number, "");
} }
class FlipCardComponent {
    constructor() {
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
        // lazy img loading
        const imageObserver = new IntersectionObserver((entries, imgObserver) => {
            entries.forEach((entry) => {
                const lazyImage = entry.target;
                if (entry.isIntersecting)
                    lazyImage.style.backgroundImage = lazyImage.dataset.image;
            });
        });
        document.querySelectorAll('.card-img-2').forEach((v) => {
            imageObserver.observe(v);
        });
    }
}
FlipCardComponent.ɵfac = function FlipCardComponent_Factory(t) { return new (t || FlipCardComponent)(); };
FlipCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlipCardComponent, selectors: [["app-flip-card"]], inputs: { card: "card" }, decls: 1, vars: 1, consts: [["class", "flip-card", 3, "routerLink", 4, "ngIf"], [1, "flip-card", 3, "routerLink"], [1, "flip-card-inner"], [1, "card", "mb-3", "flip-card-front"], [1, "card-header"], ["alt", "Card image", 1, "card-img-2"], [1, "card-body"], [1, "card-text"], [1, "card-footer", "text-muted"], [1, "card", "mb-3", "flip-card-back"], [1, "btn", "btn-success", 3, "routerLink"]], template: function FlipCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FlipCardComponent_div_0_Template, 20, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.number);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".flip-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n.flip-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  -webkit-transition: -webkit-transform 0.6s;\n  transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  transition: transform 0.6s, -webkit-transform 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] {\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.flip-card-back[_ngcontent-%COMP%] {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  position: absolute;\n  top: 0;\n}\n\n.card-img-2[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  display: block;\n  background-size: cover;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.18);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9mbGlwLWNhcmQvRDpcXHByb2plY3RzXFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXGNvbXBvbmVudHNcXGZsaXAtY2FyZFxcZmxpcC1jYXJkLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9jb21wb25lbnRzL2ZsaXAtY2FyZC9mbGlwLWNhcmQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw2QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7RUFBQSwwQkFBQTtFQUFBLGtEQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FERUE7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0VGOztBREVBO0VBQ0Usa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURBQTtFQUVJLCtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9jb21wb25lbnRzL2ZsaXAtY2FyZC9mbGlwLWNhcmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGZsaXAtY2FyZFxuLmZsaXAtY2FyZFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4XG5cbi5mbGlwLWNhcmQtaW5uZXJcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIHdpZHRoOiAxMDAlXG4gIGhlaWdodDogMTAwJVxuICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnNcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMilcblxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpXG5cbi5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFja1xuICBoZWlnaHQ6IDEwMCVcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuXG5cbi5mbGlwLWNhcmQtZnJvbnRcblxuLmZsaXAtY2FyZC1iYWNrXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICB0b3A6IDBcblxuLmNhcmQtaW1nLTJcbiAgaGVpZ2h0OiAyMDBweFxuICB3aWR0aDogMTAwJVxuICBkaXNwbGF5OiBibG9ja1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG5cbi5jYXJkLWJvZHkgXG4gICAgLy8gcGFkZGluZzogMS4yNXJlbSAgMS4yNXJlbSAgMCAgMS4yNXJlbSAgXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KSIsIi5mbGlwLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuLmZsaXAtY2FyZC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmZsaXAtY2FyZC1mcm9udCwgLmZsaXAtY2FyZC1iYWNrIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5mbGlwLWNhcmQtYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLmNhcmQtaW1nLTIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flip-card',
                templateUrl: './flip-card.component.html',
                styleUrls: ['./flip-card.component.sass']
            }]
    }], function () { return []; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ClanFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClanFooterComponent", function() { return ClanFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ClanFooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ClanFooterComponent.ɵfac = function ClanFooterComponent_Factory(t) { return new (t || ClanFooterComponent)(); };
ClanFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClanFooterComponent, selectors: [["app-clan-footer"]], decls: 9, vars: 0, consts: [["href", "https://spiriturban.github.io/", "target", "_blank"], ["href", "https://www.js-clan.com/"]], template: function ClanFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 JS-CLAN 2018-2019, created and maintained by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dyachuk Vitaliy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "JS-CLAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  background: #2d2d2d url(/assets/js-clan/img/bg.png) repeat;\n  border-top: 0.2em solid #1f1f1f;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  bottom: 0;\n  margin-top: -1.7em;\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9nZW5lcmFsL2NsYW4tZm9vdGVyL0Q6XFxwcm9qZWN0c1xccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxjb21wb25lbnRzXFxnZW5lcmFsXFxjbGFuLWZvb3RlclxcY2xhbi1mb290ZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL2NvbXBvbmVudHMvZ2VuZXJhbC9jbGFuLWZvb3Rlci9jbGFuLWZvb3Rlci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBEQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0NEO0FEQUM7RUFDQyxnQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9nZW5lcmFsL2NsYW4tZm9vdGVyL2NsYW4tZm9vdGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyXG5cdGJhY2tncm91bmQ6ICMyZDJkMmQgdXJsKC9hc3NldHMvanMtY2xhbi9pbWcvYmcucG5nKSByZXBlYXRcblx0Ym9yZGVyLXRvcDogMC4yZW0gc29saWQgIzFmMWYxZlxuXHR0ZXh0LWFsaWduOiBjZW50ZXJcblx0cG9zaXRpb246IHJlbGF0aXZlXG5cdHdpZHRoOiAxMDAlXG5cdGJvdHRvbTogMFxuXHRtYXJnaW4tdG9wOiAtMS43ZW1cblx0cFxuXHRcdG1hcmdpbi1ib3R0b206IDAiLCJmb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMmQyZDJkIHVybCgvYXNzZXRzL2pzLWNsYW4vaW1nL2JnLnBuZykgcmVwZWF0O1xuICBib3JkZXItdG9wOiAwLjJlbSBzb2xpZCAjMWYxZjFmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogLTEuN2VtO1xufVxuZm9vdGVyIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClanFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clan-footer',
                templateUrl: './clan-footer.component.html',
                styleUrls: ['./clan-footer.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/components/general/nav/nav.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function () { return ["/auth/login"]; };
function NavComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logged in !!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/cabinet"]; };
function NavComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Cabinet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/"]; };
const _c3 = function () { return ["/members"]; };
const _c4 = function () { return ["/lessons"]; };
class NavComponent {
    constructor() {
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
        var w = window;
        //
        // dev signal
        //
        // if (location.origin = "http://localhost") {
        // 	document.querySelector('.logo').style.background = '#673ab761'
        // }
        //
        // My
        //
        const nav = document.querySelector('nav');
        const header = document.querySelector('header');
        const hamburger = document.querySelector('.hamburger');
        hamburger.addEventListener('click', hamburgerClick);
        nav.addEventListener('click', navClick);
        function hamburgerClick(e) {
            nav.classList.add('nav-mobile');
            hamburger.classList.add('hide');
            // nav.classList.add('nav-mobile-fix');
            header.classList.add('header-mobile');
        }
        function navClick() {
            hamburger.classList.remove('hide');
            nav.classList.remove('nav-mobile');
            header.classList.remove('header-mobile');
        }
        // $("main").click(function () {
        // 	log("Handler for .click() called.---MAIN");
        // });
        nav.addEventListener('mouseover', navHover);
        function navHover(e) {
            console.log(e);
        }
        //
        // Scroll
        //
        window.onscroll = scrollBehavior;
        w.skroll = 0;
        //
        // (f) - scrollBehavior
        //
        function scrollBehavior(e) {
            //
            var scrolled = window.pageYOffset || document.documentElement.scrollTop;
            // Up or Down
            if (scrolled > w.skroll)
                scrollDown(scrolled);
            else
                scrollUp(scrolled);
            //
            w.skroll = scrolled;
        }
        //
        // (f) - scrollDown
        //
        function scrollDown(scrolled) {
            if (scrolled < 100)
                return;
            header.classList.add('header-hide');
            nav.classList.add('nav-hide');
            // header.style.top = '-8em';
            // nav.style.top = '-8em'
        }
        //
        // (f) - scrollUp
        //
        function scrollUp(scrolled) {
            // header.style.top = '0px';
            header.classList.remove('header-hide');
            nav.classList.remove('nav-hide');
            // nav.style.top = '1.8em'
        }
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 21, vars: 8, consts: [[1, "p"], ["href", "https://js-clan.com", 1, "logo"], ["src", "assets/js-clan/img/js-clan.svg", "alt", "js-clan"], [1, "led", 2, "--left", "70%", "--top", "20%"], [1, "led", 2, "--left", "68%", "--top", "37%"], [1, "led", 2, "--left", "67%", "--top", "55%"], [1, "led", 2, "--left", "78%", "--top", "12%"], [1, "led", 2, "--left", "76%", "--top", "41%"], [1, "header-right"], [1, "nav"], [3, "routerLink"], ["class", "important", 3, "routerLink", 4, "ngIf"], [1, "hamburger"], ["aria-hidden", "true", 1, "mdi", "mdi-menu"], [1, "important", 3, "routerLink"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "MEMBERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lessons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavComponent_a_17_Template, 2, 2, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavComponent_a_18_Template, 2, 2, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.st.user.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.st.user.isLogged);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["header[_ngcontent-%COMP%] {\n  -webkit-transition: 1s;\n  transition: 1s;\n  background: #00131d;\n  border-top: 0.2em solid #1f1f1f;\n  overflow: hidden;\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  z-index: 100;\n}\n\n.header-hide[_ngcontent-%COMP%] {\n  top: -10em;\n}\n\n.logo[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: relative;\n}\n\n.logo[_ngcontent-%COMP%]    > .led[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  right: 30%;\n  width: 0.2em;\n  height: 0.2em;\n  border-radius: 1em;\n  background: #56ff56;\n  background: blue;\n  z-index: 2000;\n  top: var(--top);\n  left: var(--left);\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes example {\n  0% {\n    background: #03A9F4;\n  }\n  50% {\n    background: black;\n  }\n  100% {\n    background: #56ff56;\n  }\n}\n\n@keyframes example {\n  0% {\n    background: #03A9F4;\n  }\n  50% {\n    background: black;\n  }\n  100% {\n    background: #56ff56;\n  }\n}\n\n.p[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\nheader[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0.3em auto;\n  position: relative;\n}\n\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 18em;\n}\n\n.header-right[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 12;\n  width: 60%;\n  width: 75%;\n  min-width: 150px;\n  height: 100px;\n  right: 0;\n  top: 0.2em;\n}\n\n.header-right[_ngcontent-%COMP%]:before {\n  position: absolute;\n  z-index: -1;\n  content: url(/assets/js-clan/img/header/header-code.svg);\n  right: 0;\n  top: 0;\n  width: 60%;\n  opacity: 0.05;\n}\n\n.header-mobile[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n@media only screen and (max-width: 600px) {\n  .logo[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n\n\n\n.languages[_ngcontent-%COMP%] {\n  text-align: right;\n  z-index: 3000;\n}\n\n.languages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 0.5em;\n  background: #404040;\n  background: #2e3742;\n  padding: 0.25em 0.5em;\n  border-radius: 1em;\n  border: #585858 solid 1px;\n  box-shadow: 0 0.25em 0.45em rgba(0, 0, 0, 0.2);\n}\n\n.languages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n\n\nnav[_ngcontent-%COMP%] {\n  position: fixed;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  height: inherit;\n  overflow: hidden;\n  -webkit-transition-duration: 1.5s;\n          transition-duration: 1.5s;\n  padding-right: 1em;\n  height: 3em;\n  top: 1.8em;\n  top: 2.5em;\n  right: 4%;\n  width: 55%;\n}\n\n.nav-hide[_ngcontent-%COMP%] {\n  top: -16em;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0.25em 0.25em 0.25em 0.5em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 0.5em;\n  padding: 0.5em;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: \"{ \" !important;\n  color: gray;\n}\n\nnav a:after {\n  content: \" }\" !important;\n  color: gray;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #b12a34;\n  color: white;\n  opacity: 1;\n}\n\n.nav-mobile[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  background: #2d2d2d url(/assets/js-clan/img/bg.png) repeat;\n  border-bottom: 0.2em solid #1f1f1f;\n  height: 20em;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  -webkit-transition-duration: 1.5s;\n          transition-duration: 1.5s;\n  padding: 2em 1em;\n  display: block;\n  text-align: center;\n}\n\n.nav-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  background: rgba(255, 255, 255, 0.07);\n  cursor: pointer;\n  margin: 1em 0;\n}\n\n.nav-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n@media only screen and (max-width: 600px) {\n  nav[_ngcontent-%COMP%] {\n    top: -50em;\n  }\n}\n\n.hamburger[_ngcontent-%COMP%] {\n  z-index: 101;\n  display: none;\n  position: absolute;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-weight: 600;\n  font-size: 2em;\n  border-radius: 0.2em;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0.35em;\n  top: 1em;\n  top: 0.2em;\n  right: -0.5em;\n  text-align: center;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n}\n\n.hamburger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 0.4em;\n  line-height: 0.25em;\n  width: 1.3em;\n  border-radius: 0.5em;\n  font-size: 1.5em;\n}\n\n.hamburger[_ngcontent-%COMP%]:hover {\n  background: black;\n  background: #b12a34;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 600px) {\n  .hamburger[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n  }\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9nZW5lcmFsL25hdi9EOlxccHJvamVjdHNcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAanMtY2xhblxcY29tcG9uZW50c1xcZ2VuZXJhbFxcbmF2XFxuYXYuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL2NvbXBvbmVudHMvZ2VuZXJhbC9uYXYvbmF2LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0JBQUE7RUFBQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQ0NEOztBRENBO0VBQ0MsVUFBQTtBQ0VEOztBREFBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0FDR0Q7O0FERkM7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDR0Y7O0FEREE7RUFDQztJQUNDLG1CQUFBO0VDSUE7RURGRDtJQUNDLGlCQUFBO0VDSUE7RURGRDtJQUNDLG1CQUFBO0VDSUE7QUFDRjs7QURiQTtFQUNDO0lBQ0MsbUJBQUE7RUNJQTtFREZEO0lBQ0MsaUJBQUE7RUNJQTtFREZEO0lBQ0MsbUJBQUE7RUNJQTtBQUNGOztBREZBO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0FDSUQ7O0FEREM7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREhDO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDS0Y7O0FESEE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDTUQ7O0FETEM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3REFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNPRjs7QURMQTtFQUNDLGFBQUE7QUNRRDs7QUROQTtFQUNDO0lBQ0MsVUFBQTtFQ1NBOztFRFJEO0lBQ0MsZUFBQTtFQ1dBO0FBQ0Y7O0FESEEsaUJBQUE7O0FBRUE7RUFDQyxpQkFBQTtFQUNBLGFBQUE7QUNJRDs7QURIQztFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsOENBQUE7QUNLRjs7QURKRTtFQUNDLFlBQUE7QUNNSDs7QURKQSxXQUFBOztBQUVBO0VBQ0MsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNNRDs7QURKQTtFQUNDLFVBQUE7QUNPRDs7QURHQztFQUNDLGtDQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDQUY7O0FEQ0U7RUFDQyx3QkFBQTtFQUNBLFdBQUE7QUNDSDs7QURBRTtFQUNDLHdCQUFBO0VBQ0EsV0FBQTtBQ0VIOztBRERFO0VBQ0MsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDR0g7O0FEQ0E7RUFDQyxNQUFBO0VBQ0EsT0FBQTtFQUNBLDBEQUFBO0VBR0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUQ7O0FEQ0M7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDRjs7QURBRTtFQUNDLG9DQUFBO0FDRUg7O0FER0E7RUFDQztJQUNDLFVBQUE7RUNBQTtBQUNGOztBRENBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQ0NEOztBREFDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QUREQztFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDQztJQUNDLG9CQUFBO0lBQUEsYUFBQTtFQ0lBO0FBQ0Y7O0FEREE7RUFDQyxhQUFBO0FDR0QiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9jb21wb25lbnRzL2dlbmVyYWwvbmF2L25hdi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlclxuXHR0cmFuc2l0aW9uOiAxc1xuXHRiYWNrZ3JvdW5kOiAjMDAxMzFkXG5cdGJvcmRlci10b3A6IDAuMmVtIHNvbGlkICMxZjFmMWZcblx0b3ZlcmZsb3c6IGhpZGRlblxuXHRwb3NpdGlvbjogZml4ZWRcblx0d2lkdGg6IDEwMHZ3XG5cdHRvcDogMFxuXHR6LWluZGV4OiAxMDBcblxuLmhlYWRlci1oaWRlXG5cdHRvcDogLTEwZW1cblxuLmxvZ29cblx0ei1pbmRleDogMTBcblx0cG9zaXRpb246IHJlbGF0aXZlXG5cdD4gLmxlZFxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZVxuXHRcdHRvcDogNDAlXG5cdFx0cmlnaHQ6IDMwJVxuXHRcdHdpZHRoOiAuMmVtXG5cdFx0aGVpZ2h0OiAuMmVtXG5cdFx0Ym9yZGVyLXJhZGl1czogMWVtXG5cdFx0YmFja2dyb3VuZDogIzU2ZmY1NlxuXHRcdGJhY2tncm91bmQ6IGJsdWVcblxuXHRcdHotaW5kZXg6IDIwMDBcblx0XHR0b3A6IHZhcigtLXRvcClcblx0XHRsZWZ0OiB2YXIoLS1sZWZ0KVxuXHRcdGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlXG5cdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA0c1xuXHRcdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlXG5cbkBrZXlmcmFtZXMgZXhhbXBsZVxuXHQwJVxuXHRcdGJhY2tncm91bmQ6ICMwM0E5RjRcblxuXHQ1MCVcblx0XHRiYWNrZ3JvdW5kOiBibGFja1xuXG5cdDEwMCVcblx0XHRiYWNrZ3JvdW5kOiAjNTZmZjU2XG5cblxuLnBcblx0ZGlzcGxheTogZmxleFxuXG5oZWFkZXJcblx0LnBcblx0XHR3aWR0aDogOTAlXG5cdFx0bWFyZ2luOiAuM2VtIGF1dG9cblx0XHRwb3NpdGlvbjogcmVsYXRpdmVcblx0aW1nXG5cdFx0ZGlzcGxheTogYmxvY2tcblx0XHR3aWR0aDogMTAwJVxuXHRcdG1pbi13aWR0aDogMThlbVxuXG4uaGVhZGVyLXJpZ2h0XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZVxuXHR6LWluZGV4OiAxMlxuXHR3aWR0aDogNjAlXG5cdHdpZHRoOiA3NSVcblx0bWluLXdpZHRoOiAxNTBweFxuXHRoZWlnaHQ6IDEwMHB4XG5cdHJpZ2h0OiAwXG5cdHRvcDogLjJlbVxuXHQmOmJlZm9yZVxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZVxuXHRcdHotaW5kZXg6IC0xXG5cdFx0Y29udGVudDogdXJsKC9hc3NldHMvanMtY2xhbi9pbWcvaGVhZGVyL2hlYWRlci1jb2RlLnN2Zylcblx0XHRyaWdodDogMFxuXHRcdHRvcDogMFxuXHRcdHdpZHRoOiA2MCVcblx0XHRvcGFjaXR5OiAuMDVcblxuLmhlYWRlci1tb2JpbGVcblx0aGVpZ2h0OiAxMDB2aFxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVxuXHQubG9nb1xuXHRcdHdpZHRoOiA4MCVcblx0aGVhZGVyIGltZ1xuXHRcdG1pbi13aWR0aDogMTAwJVxuXG5cblxuXG5cblxuXG5cbi8qIFxuXHQqKlx0bGFuZ3VhZ2VzXG4ubGFuZ3VhZ2VzXG5cdHRleHQtYWxpZ246IHJpZ2h0XG5cdHotaW5kZXg6IDMwMDBcblx0YVxuXHRcdG1hcmdpbjogMCAuNWVtXG5cdFx0YmFja2dyb3VuZDogIzQwNDA0MFxuXHRcdGJhY2tncm91bmQ6ICMyZTM3NDJcblx0XHRwYWRkaW5nOiAuMjVlbSAuNWVtXG5cdFx0Ym9yZGVyLXJhZGl1czogMWVtXG5cdFx0Ym9yZGVyOiAjNTg1ODU4IHNvbGlkIDFweFxuXHRcdC13ZWJraXQtYm94LXNoYWRvdzogMCAwLjI1ZW0gMC40NWVtIHJnYmEoMCwgMCwgMCwgMC4yKVxuXHRcdGJveC1zaGFkb3c6IDAgMC4yNWVtIDAuNDVlbSByZ2JhKDAsIDAsIDAsIDAuMilcblx0XHQmOmhvdmVyXG5cdFx0XHRjb2xvcjogd2hpdGVcblxuLyogXG5cdCoqXHRuYXZcbm5hdlxuXHRwb3NpdGlvbjogZml4ZWRcblx0ZGlzcGxheTogZmxleFxuXHRmbGV4LXdyYXA6IHdyYXBcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxuXHRoZWlnaHQ6IGluaGVyaXRcblx0b3ZlcmZsb3c6IGhpZGRlblxuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzXG5cdHBhZGRpbmctcmlnaHQ6IDFlbVxuXHRoZWlnaHQ6IDNlbVxuXHR0b3A6IDEuOGVtXG5cdHRvcDogMi41ZW1cblx0cmlnaHQ6IDQlXG5cdHdpZHRoOiA1NSVcblxuLm5hdi1oaWRlXG5cdHRvcDogLTE2ZW1cblxubmF2XG5cdC8vICY6aG92ZXIgIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIE9QRU4gISEhXG5cdC8vIFx0YmFja2dyb3VuZDogIzAwMTMxZFxuXHQvLyBcdHBhZGRpbmctcmlnaHQ6IDFlbVxuXHQvLyBcdHBhZGRpbmctYm90dG9tOiAuMjVlbVxuXHQvLyBcdGJvcmRlci1ib3R0b206IDAuMmVtIHNvbGlkICMxZjFmMWZcblx0Ly8gXHRoZWlnaHQ6IDEwZW1cblx0Ly8gXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzXG5cdGFcblx0XHRtYXJnaW46IC4yNWVtIC4yNWVtIC4yNWVtIC41ZW1cblx0XHR3aWR0aDogZml0LWNvbnRlbnRcblx0XHRib3JkZXItcmFkaXVzOiAuNWVtXG5cdFx0cGFkZGluZzogLjVlbVxuXHRcdCY6YmVmb3JlXG5cdFx0XHRjb250ZW50OiAneyAnICFpbXBvcnRhbnRcblx0XHRcdGNvbG9yOiBncmF5XG5cdFx0JjphZnRlclxuXHRcdFx0Y29udGVudDogJyB9JyAhaW1wb3J0YW50XG5cdFx0XHRjb2xvcjogZ3JheVxuXHRcdCY6aG92ZXJcblx0XHRcdGNvbG9yOiAjYjEyYTM0XG5cdFx0XHRjb2xvcjogd2hpdGVcblx0XHRcdG9wYWNpdHk6IDFcblxuXG5cbi5uYXYtbW9iaWxlXG5cdHRvcDogMFxuXHRsZWZ0OiAwXG5cdGJhY2tncm91bmQ6ICMyZDJkMmQgdXJsKC9hc3NldHMvanMtY2xhbi9pbWcvYmcucG5nKSByZXBlYXRcblx0Ly8gcGFkZGluZy1yaWdodDogMWVtXG5cdC8vIHBhZGRpbmctYm90dG9tOiAuMjVlbVxuXHRib3JkZXItYm90dG9tOiAwLjJlbSBzb2xpZCAjMWYxZjFmXG5cdGhlaWdodDogMjBlbVxuXHRwb3NpdGlvbjogZml4ZWRcblx0d2lkdGg6IDEwMHZ3XG5cdGhlaWdodDogMTAwdmhcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMS41c1xuXHRwYWRkaW5nOiAyZW0gMWVtXG5cdGRpc3BsYXk6IGJsb2NrXG5cdHRleHQtYWxpZ246IGNlbnRlclxuXHRhXG5cdFx0d2lkdGg6IDEwMCVcblx0XHRkaXNwbGF5OiBibG9ja1xuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNylcblx0XHRjdXJzb3I6IHBvaW50ZXJcblx0XHRtYXJnaW46IDFlbSAwXG5cdFx0Jjpob3ZlclxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXG5cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXG5cdG5hdlxuXHRcdHRvcDogLTUwZW1cblxuLmhhbWJ1cmdlclxuXHR6LWluZGV4OiAxMDFcblx0ZGlzcGxheTogbm9uZVxuXHRwb3NpdGlvbjogYWJzb2x1dGVcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxuXHRmb250LXdlaWdodDogNjAwXG5cdGZvbnQtc2l6ZTogMmVtXG5cdGJvcmRlci1yYWRpdXM6IC4yZW1cblx0aGVpZ2h0OiBmaXQtY29udGVudFxuXHRwYWRkaW5nOiAuMzVlbVxuXHR0b3A6IDFlbVxuXHR0b3A6IC4yZW1cblx0cmlnaHQ6IC0uNWVtXG5cdHRleHQtYWxpZ246IGNlbnRlclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKVxuXHRpXG5cdFx0aGVpZ2h0OiAuNGVtXG5cdFx0bGluZS1oZWlnaHQ6IC4yNWVtXG5cdFx0d2lkdGg6IDEuM2VtXG5cdFx0Ym9yZGVyLXJhZGl1czogLjVlbVxuXHRcdGZvbnQtc2l6ZTogMS41ZW1cblx0Jjpob3ZlclxuXHRcdGJhY2tncm91bmQ6IGJsYWNrXG5cdFx0YmFja2dyb3VuZDogI2IxMmEzNFxuXHRcdGN1cnNvcjogcG9pbnRlclxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVxuXHQuaGFtYnVyZ2VyXG5cdFx0ZGlzcGxheTogZmxleFxuXG5cblxuLmhpZGVcblx0ZGlzcGxheTogbm9uZVx0XHQiLCJoZWFkZXIge1xuICB0cmFuc2l0aW9uOiAxcztcbiAgYmFja2dyb3VuZDogIzAwMTMxZDtcbiAgYm9yZGVyLXRvcDogMC4yZW0gc29saWQgIzFmMWYxZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uaGVhZGVyLWhpZGUge1xuICB0b3A6IC0xMGVtO1xufVxuXG4ubG9nbyB7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9nbyA+IC5sZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICByaWdodDogMzAlO1xuICB3aWR0aDogMC4yZW07XG4gIGhlaWdodDogMC4yZW07XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgYmFja2dyb3VuZDogIzU2ZmY1NjtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgei1pbmRleDogMjAwMDtcbiAgdG9wOiB2YXIoLS10b3ApO1xuICBsZWZ0OiB2YXIoLS1sZWZ0KTtcbiAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZDogIzAzQTlGNDtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQ6ICM1NmZmNTY7XG4gIH1cbn1cbi5wIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaGVhZGVyIC5wIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwLjNlbSBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5oZWFkZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDE4ZW07XG59XG5cbi5oZWFkZXItcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEyO1xuICB3aWR0aDogNjAlO1xuICB3aWR0aDogNzUlO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICByaWdodDogMDtcbiAgdG9wOiAwLjJlbTtcbn1cbi5oZWFkZXItcmlnaHQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgY29udGVudDogdXJsKC9hc3NldHMvanMtY2xhbi9pbWcvaGVhZGVyL2hlYWRlci1jb2RlLnN2Zyk7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA2MCU7XG4gIG9wYWNpdHk6IDAuMDU7XG59XG5cbi5oZWFkZXItbW9iaWxlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubG9nbyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIGhlYWRlciBpbWcge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuLyogKipcdGxhbmd1YWdlcyAqL1xuLmxhbmd1YWdlcyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB6LWluZGV4OiAzMDAwO1xufVxuLmxhbmd1YWdlcyBhIHtcbiAgbWFyZ2luOiAwIDAuNWVtO1xuICBiYWNrZ3JvdW5kOiAjNDA0MDQwO1xuICBiYWNrZ3JvdW5kOiAjMmUzNzQyO1xuICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgYm9yZGVyOiAjNTg1ODU4IHNvbGlkIDFweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuMjVlbSAwLjQ1ZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3gtc2hhZG93OiAwIDAuMjVlbSAwLjQ1ZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmxhbmd1YWdlcyBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiAqKlx0bmF2ICovXG5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gIGhlaWdodDogM2VtO1xuICB0b3A6IDEuOGVtO1xuICB0b3A6IDIuNWVtO1xuICByaWdodDogNCU7XG4gIHdpZHRoOiA1NSU7XG59XG5cbi5uYXYtaGlkZSB7XG4gIHRvcDogLTE2ZW07XG59XG5cbm5hdiBhIHtcbiAgbWFyZ2luOiAwLjI1ZW0gMC4yNWVtIDAuMjVlbSAwLjVlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgcGFkZGluZzogMC41ZW07XG59XG5uYXYgYTpiZWZvcmUge1xuICBjb250ZW50OiBcInsgXCIgIWltcG9ydGFudDtcbiAgY29sb3I6IGdyYXk7XG59XG5uYXYgYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIH1cIiAhaW1wb3J0YW50O1xuICBjb2xvcjogZ3JheTtcbn1cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICNiMTJhMzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm5hdi1tb2JpbGUge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICMyZDJkMmQgdXJsKC9hc3NldHMvanMtY2xhbi9pbWcvYmcucG5nKSByZXBlYXQ7XG4gIGJvcmRlci1ib3R0b206IDAuMmVtIHNvbGlkICMxZjFmMWY7XG4gIGhlaWdodDogMjBlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG4gIHBhZGRpbmc6IDJlbSAxZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmF2LW1vYmlsZSBhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMWVtIDA7XG59XG4ubmF2LW1vYmlsZSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIG5hdiB7XG4gICAgdG9wOiAtNTBlbTtcbiAgfVxufVxuLmhhbWJ1cmdlciB7XG4gIHotaW5kZXg6IDEwMTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAuMzVlbTtcbiAgdG9wOiAxZW07XG4gIHRvcDogMC4yZW07XG4gIHJpZ2h0OiAtMC41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG59XG4uaGFtYnVyZ2VyIGkge1xuICBoZWlnaHQ6IDAuNGVtO1xuICBsaW5lLWhlaWdodDogMC4yNWVtO1xuICB3aWR0aDogMS4zZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLmhhbWJ1cmdlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjYjEyYTM0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhhbWJ1cmdlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/js-clan-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/@modules/@js-clan/js-clan-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: JsClanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsClanRoutingModule", function() { return JsClanRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/@modules/@js-clan/pages/main/main.component.ts");
/* harmony import */ var _pages_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/lessons/lessons.component */ "./src/app/@modules/@js-clan/pages/lessons/lessons.component.ts");
/* harmony import */ var _pages_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/lesson/lesson.component */ "./src/app/@modules/@js-clan/pages/lesson/lesson.component.ts");
/* harmony import */ var _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/p404/p404.component */ "./src/app/@modules/@js-clan/pages/p404/p404.component.ts");
/* harmony import */ var _pages_want_more_lessons_want_more_lessons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/want-more-lessons/want-more-lessons.component */ "./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.ts");
/* harmony import */ var _pages_members_members_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/members/members.component */ "./src/app/@modules/@js-clan/pages/members/members.component.ts");
/* harmony import */ var _pages_students_students_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/students/students.component */ "./src/app/@modules/@js-clan/pages/students/students.component.ts");
/* harmony import */ var _pages_training_apparatus_training_apparatus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/training-apparatus/training-apparatus.component */ "./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.ts");
/* harmony import */ var _pages_health_health_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/health/health.component */ "./src/app/@modules/@js-clan/pages/health/health.component.ts");
/* harmony import */ var _pages_sources_video_samples_video_samples_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/sources/video-samples/video-samples.component */ "./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.ts");
/* harmony import */ var _pages_sources_free_sounds_free_sounds_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/sources/free-sounds/free-sounds.component */ "./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.ts");
/* harmony import */ var _pages_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/cabinet/cabinet.component */ "./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.ts");
/* harmony import */ var _pages_programmer_tips_programmer_tips_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/programmer-tips/programmer-tips.component */ "./src/app/@modules/@js-clan/pages/programmer-tips/programmer-tips.component.ts");
/* harmony import */ var _pages_games_ar_ar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/games/ar/ar.component */ "./src/app/@modules/@js-clan/pages/games/ar/ar.component.ts");


// Pages
















const routes = [
    // { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'lessons', component: _pages_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_3__["LessonsComponent"] },
    { path: 'lesson/:name', component: _pages_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_4__["LessonComponent"] },
    { path: 'want-more-lessons', component: _pages_want_more_lessons_want_more_lessons_component__WEBPACK_IMPORTED_MODULE_6__["WantMoreLessonsComponent"] },
    { path: 'members', component: _pages_members_members_component__WEBPACK_IMPORTED_MODULE_7__["MembersComponent"] },
    { path: 'students', component: _pages_students_students_component__WEBPACK_IMPORTED_MODULE_8__["StudentsComponent"] },
    { path: 'training-apparatus', component: _pages_training_apparatus_training_apparatus_component__WEBPACK_IMPORTED_MODULE_9__["TrainingApparatusComponent"] },
    { path: 'health', component: _pages_health_health_component__WEBPACK_IMPORTED_MODULE_10__["HealthComponent"] },
    { path: 'video-samples', component: _pages_sources_video_samples_video_samples_component__WEBPACK_IMPORTED_MODULE_11__["VideoSamplesComponent"] },
    { path: 'free-sounds', component: _pages_sources_free_sounds_free_sounds_component__WEBPACK_IMPORTED_MODULE_12__["FreeSoundsComponent"] },
    { path: 'cabinet', component: _pages_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_13__["CabinetComponent"] },
    { path: 'programmer-tips', component: _pages_programmer_tips_programmer_tips_component__WEBPACK_IMPORTED_MODULE_14__["ProgrammerTipsComponent"] },
    { path: 'games/ar', component: _pages_games_ar_ar_component__WEBPACK_IMPORTED_MODULE_15__["ArComponent"] },
    { path: 'p404', component: _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_5__["P404Component"] },
];
class JsClanRoutingModule {
}
JsClanRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JsClanRoutingModule });
JsClanRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JsClanRoutingModule_Factory(t) { return new (t || JsClanRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JsClanRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsClanRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/js-clan.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/@modules/@js-clan/js-clan.module.ts ***!
  \*****************************************************/
/*! exports provided: JsClanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsClanModule", function() { return JsClanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _js_clan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js-clan-routing.module */ "./src/app/@modules/@js-clan/js-clan-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@modules/@common-dependencies/@common-dependencies.module */ "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");
/* harmony import */ var _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/flip-card/flip-card.component */ "./src/app/@modules/@js-clan/components/flip-card/flip-card.component.ts");
/* harmony import */ var _components_flip_card_video_flip_card_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/flip-card-video/flip-card-video.component */ "./src/app/@modules/@js-clan/components/flip-card-video/flip-card-video.component.ts");
/* harmony import */ var _pages_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/lessons/lessons.component */ "./src/app/@modules/@js-clan/pages/lessons/lessons.component.ts");
/* harmony import */ var _pages_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/lesson/lesson.component */ "./src/app/@modules/@js-clan/pages/lesson/lesson.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/@modules/@js-clan/pages/main/main.component.ts");
/* harmony import */ var _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/p404/p404.component */ "./src/app/@modules/@js-clan/pages/p404/p404.component.ts");
/* harmony import */ var _pages_want_more_lessons_want_more_lessons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/want-more-lessons/want-more-lessons.component */ "./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.ts");
/* harmony import */ var _pages_members_members_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/members/members.component */ "./src/app/@modules/@js-clan/pages/members/members.component.ts");
/* harmony import */ var _pages_students_students_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/students/students.component */ "./src/app/@modules/@js-clan/pages/students/students.component.ts");
/* harmony import */ var _pages_training_apparatus_training_apparatus_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/training-apparatus/training-apparatus.component */ "./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.ts");
/* harmony import */ var _pages_health_health_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/health/health.component */ "./src/app/@modules/@js-clan/pages/health/health.component.ts");
/* harmony import */ var _pages_sources_video_samples_video_samples_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/sources/video-samples/video-samples.component */ "./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.ts");
/* harmony import */ var _pages_sources_free_sounds_free_sounds_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/sources/free-sounds/free-sounds.component */ "./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.ts");
/* harmony import */ var _pages_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/cabinet/cabinet.component */ "./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.ts");
/* harmony import */ var _pages_programmer_tips_programmer_tips_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/programmer-tips/programmer-tips.component */ "./src/app/@modules/@js-clan/pages/programmer-tips/programmer-tips.component.ts");
/* harmony import */ var _pages_games_ar_ar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/games/ar/ar.component */ "./src/app/@modules/@js-clan/pages/games/ar/ar.component.ts");





// Other modules

// Components




// Pages















class JsClanModule {
}
JsClanModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JsClanModule });
JsClanModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JsClanModule_Factory(t) { return new (t || JsClanModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _js_clan_routing_module__WEBPACK_IMPORTED_MODULE_3__["JsClanRoutingModule"],
            _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_5__["CommonDependenciesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JsClanModule, { declarations: [_pages_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_10__["LessonsComponent"],
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"],
        _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_13__["P404Component"],
        _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_7__["ClanFooterComponent"], _pages_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_11__["LessonComponent"], _pages_want_more_lessons_want_more_lessons_component__WEBPACK_IMPORTED_MODULE_14__["WantMoreLessonsComponent"], _pages_members_members_component__WEBPACK_IMPORTED_MODULE_15__["MembersComponent"], _pages_students_students_component__WEBPACK_IMPORTED_MODULE_16__["StudentsComponent"], _pages_training_apparatus_training_apparatus_component__WEBPACK_IMPORTED_MODULE_17__["TrainingApparatusComponent"], _pages_health_health_component__WEBPACK_IMPORTED_MODULE_18__["HealthComponent"], _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_8__["FlipCardComponent"], _components_flip_card_video_flip_card_video_component__WEBPACK_IMPORTED_MODULE_9__["FlipCardVideoComponent"], _pages_sources_video_samples_video_samples_component__WEBPACK_IMPORTED_MODULE_19__["VideoSamplesComponent"], _pages_sources_free_sounds_free_sounds_component__WEBPACK_IMPORTED_MODULE_20__["FreeSoundsComponent"], _pages_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_21__["CabinetComponent"], _pages_programmer_tips_programmer_tips_component__WEBPACK_IMPORTED_MODULE_22__["ProgrammerTipsComponent"], _pages_games_ar_ar_component__WEBPACK_IMPORTED_MODULE_23__["ArComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _js_clan_routing_module__WEBPACK_IMPORTED_MODULE_3__["JsClanRoutingModule"],
        _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_5__["CommonDependenciesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]], exports: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_7__["ClanFooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsClanModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_10__["LessonsComponent"],
                    _pages_main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"],
                    _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_13__["P404Component"],
                    _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_7__["ClanFooterComponent"], _pages_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_11__["LessonComponent"], _pages_want_more_lessons_want_more_lessons_component__WEBPACK_IMPORTED_MODULE_14__["WantMoreLessonsComponent"], _pages_members_members_component__WEBPACK_IMPORTED_MODULE_15__["MembersComponent"], _pages_students_students_component__WEBPACK_IMPORTED_MODULE_16__["StudentsComponent"], _pages_training_apparatus_training_apparatus_component__WEBPACK_IMPORTED_MODULE_17__["TrainingApparatusComponent"], _pages_health_health_component__WEBPACK_IMPORTED_MODULE_18__["HealthComponent"], _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_8__["FlipCardComponent"], _components_flip_card_video_flip_card_video_component__WEBPACK_IMPORTED_MODULE_9__["FlipCardVideoComponent"], _pages_sources_video_samples_video_samples_component__WEBPACK_IMPORTED_MODULE_19__["VideoSamplesComponent"], _pages_sources_free_sounds_free_sounds_component__WEBPACK_IMPORTED_MODULE_20__["FreeSoundsComponent"], _pages_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_21__["CabinetComponent"], _pages_programmer_tips_programmer_tips_component__WEBPACK_IMPORTED_MODULE_22__["ProgrammerTipsComponent"], _pages_games_ar_ar_component__WEBPACK_IMPORTED_MODULE_23__["ArComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _js_clan_routing_module__WEBPACK_IMPORTED_MODULE_3__["JsClanRoutingModule"],
                    _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_5__["CommonDependenciesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
                ],
                exports: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_7__["ClanFooterComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.ts ***!
  \**********************************************************************/
/*! exports provided: CabinetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabinetComponent", function() { return CabinetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");
/* harmony import */ var _services_api_js_clan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api-js-clan.service */ "./src/app/@modules/@js-clan/services/api-js-clan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _common_dependencies_components_general_night_sky_night_sky_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@common-dependencies/components/general/night-sky/night-sky.component */ "./src/app/@modules/@common-dependencies/components/general/night-sky/night-sky.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@common-dependencies/components/general/extra-alert/extra-alert.component */ "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");












function CabinetComponent_p_28_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CabinetComponent_p_28_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.editable = "full_name"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.st.user.full_name || " ... ", " ");
} }
function CabinetComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CabinetComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CabinetComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CabinetComponent_div_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Achievements:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r25.st.user.username, "!");
} }
class CabinetComponent {
    constructor(api, _api, router) {
        this.api = api;
        this._api = _api;
        this.router = router;
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ngOnInit() {
        Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])('STATE:');
        Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])(this.st);
        // debugger
        // setTimeout(() => { this.fake() }, 2000)
        // login control
        if (!this.st.user.isLogged)
            this.router.navigate(['/auth/login']);
        Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])(this.st);
    }
    goToSubPage(name) {
        Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])(name, this.st);
        this.st.pages.cabinet.subPage = name;
    }
    fake() {
        this.st.user = JSON.parse(`{
      "wallets": {
        "USD": {
          "balance": 0
        }
      },
      "facebook": {
        "id": "",
        "token": "",
        "email": "",
        "username": ""
      },
      "google": {
        "id": "",
        "token": "",
        "email": "",
        "username": ""
      },
      "isLogged": true,
      "purchases_made": [],
      "saved_numbers": [],
      "linked_users": [],
      "_id": "5e72314405de434144dca5be",
      "username": "testUser",
      "email": "shadespiritenator@gmail.com",
      "email_token": "077q6b76v9vwqtaryepfjbseao0fdprrj7chg22dlhj",
      "password": "cd2a9a2e8d3572113b95e3b60bf626a77899ec6b",
      "phone_pin": 730901,
      "link_pin": 272749,
      "active": false,
      "email_verif": false,
      "phone_verif": false,
      "ever_cha": "7645e520-6925-11ea-977c-578729c8c9f9",
      "ever_sec": "4c04539621e9baec7e8651059293a71573409788",
      "last_login": "2020-03-18T14:33:40.735Z",
      "last_appeal": "2020-03-18T14:33:40.736Z",
      "__v": 0
    }`);
    }
}
CabinetComponent.ɵfac = function CabinetComponent_Factory(t) { return new (t || CabinetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_js_clan_service__WEBPACK_IMPORTED_MODULE_4__["ApiJsClanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CabinetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CabinetComponent, selectors: [["app-cabinet"]], decls: 173, vars: 18, consts: [[1, "mega-container"], [1, "sub-container", "sub-first"], ["id", "logo"], [1, "logo"], [1, "CTA"], [1, "leftbox"], [1, "sub-nav"], [1, "active", 3, "click"], [1, "mdi", "mdi-account"], [3, "click"], [1, "mdi", "mdi-credit-card"], [1, "mdi", "mdi-desktop-classic"], [1, "mdi", "mdi-format-list-checks"], [1, "mdi", "mdi-settings"], [1, "rightbox"], [4, "ngIf"], [1, "badge"], ["class", "badge badge-pill badge-success", 4, "ngIf"], ["class", "badge badge-pill badge-danger", 4, "ngIf"], [1, "btn"], [1, "sub-container", "cabinet-content", "sub-second"], ["class", "jumbotron user-card", 4, "ngIf"], [3, "st"], [1, "btn", 3, "click"], ["type", "text", "name", "", "id", ""], [1, "badge", "badge-pill", "badge-success"], [1, "badge", "badge-pill", "badge-danger"], [1, "jumbotron", "user-card"], [1, ""], [1, "text-primary"], ["src", "assets/js-clan/img/anonymous.svg", "alt", "Anonymous", 2, "height", "200px", "width", "100%", "display", "block"], [1, "my-4"], ["href", "/api/auth/facebook"], ["aria-hidden", "true", "title", "Connection with facebook", 1, "social", "mdi", "mdi-facebook"], ["href", "/api/auth/google"], ["aria-hidden", "true", "title", "Connection with google", 1, "social", "mdi", "mdi-google"], ["href", "/auth/logout", "role", "button", 1, "btn", "btn-primary", "btn-lg"]], template: function CabinetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-night-sky");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Get $10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CabinetComponent_Template_a_click_12_listener($event) { return ctx.goToSubPage("profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CabinetComponent_Template_a_click_14_listener($event) { return ctx.goToSubPage("payment"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CabinetComponent_Template_a_click_16_listener($event) { return ctx.goToSubPage("subscription"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CabinetComponent_Template_a_click_18_listener($event) { return ctx.goToSubPage("privacy"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CabinetComponent_Template_a_click_20_listener($event) { return ctx.goToSubPage("settings"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Personal Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CabinetComponent_p_28_Template, 4, 1, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CabinetComponent_p_29_Template, 4, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Birthday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "July 21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "sup", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CabinetComponent_span_41_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CabinetComponent_span_42_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u2022\u2022\u2022\u2022\u2022\u2022\u2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Payment Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Mastercard \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 0000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Billing Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "1234 Example Ave | Seattle, WA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Zipcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "999000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Billing History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Redeem Gift Subscription ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Your Subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Payment Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "05-15-2018 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "pay now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Your Next Charge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "$8.48");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " includes tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Hulu Base Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Limited Commercials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "change plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Add-ons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "None ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Monthly Recurring Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "$7.99/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Privacy Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Manage Email Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Manage Privacy Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "View Terms of Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Personalize Ad Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Protect Your Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "protect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Account Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Sync Watchlist to My Stuff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "sync");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Hold Your Subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Cancel Your Subscription ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Your Devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Manage Devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Referrals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "get $10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](168, CabinetComponent_div_168_Template, 19, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "app-extra-alert", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "app-clan-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.st.pages.cabinet.subPage == "profile" ? "profile" : "profile noshow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editable == "full_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editable != "full_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.st.user.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.st.user.email_verif);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.st.user.email_verif);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.st.user.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.st.pages.cabinet.subPage == "payment" ? "payment" : "payment noshow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.st.pages.cabinet.subPage == "subscription" ? "subscription" : "subscription noshow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.st.pages.cabinet.subPage == "privacy" ? "privacy" : "privacy noshow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.st.pages.cabinet.subPage == "settings" ? "settings" : "settings noshow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.st.user.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("st", ctx.st.alert);
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _common_dependencies_components_general_night_sky_night_sky_component__WEBPACK_IMPORTED_MODULE_7__["NightSkyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_9__["ExtraAlertComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_10__["ClanFooterComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,900|Montserrat|Roboto\");\n.mega-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 5em;\n  min-height: 100vh;\n  margin-bottom: 2em;\n  margin-top: 7em;\n}\n@media screen and (max-width: 1100px) {\n  .mega-container[_ngcontent-%COMP%] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n.sub-container[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: relative;\n  opacity: 0.9;\n  padding-top: 1em;\n}\n.sub-first[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n}\n.sub-second[_ngcontent-%COMP%] {\n  height: 100%;\n  min-width: 500px;\n}\n.PS[_ngcontent-%COMP%] {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n.user-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.not-logged[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-size: 2em;\n  font-weight: 900;\n  color: #b9005e;\n  -webkit-animation: hard 5s infinite;\n          animation: hard 5s infinite;\n}\n.not-logged[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@-webkit-keyframes hard {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    color: black;\n    -webkit-filter: blur(7px);\n            filter: blur(7px);\n    opacity: 0.1;\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    color: #b9005e;\n    opacity: 1;\n  }\n}\n@keyframes hard {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    color: black;\n    -webkit-filter: blur(7px);\n            filter: blur(7px);\n    opacity: 0.1;\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    color: #b9005e;\n    opacity: 1;\n  }\n}\ndl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin: 1em;\n}\ndl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\ndl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\ndl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin: 0 0 0 0.5em;\n}\ndl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 0 0 0.5em;\n}\ndl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  background: gray;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  border-radius: 1em;\n  font-size: 1em;\n  cursor: pointer;\n  display: block;\n  color: white;\n}\ndl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .mdi-facebook[_ngcontent-%COMP%]:hover {\n  background: blue;\n  background: #3b5998;\n}\ndl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .mdi-google[_ngcontent-%COMP%]:hover {\n  background: #ea4335;\n}\n.jumbotron[_ngcontent-%COMP%] {\n  padding: 2rem 2rem;\n  background-color: #00000000;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%] {\n  background: -webkit-gradient(linear, left top, right top, from(#3FB6A8), to(#7ED386));\n  background: linear-gradient(to right, #3FB6A8, #7ED386);\n}\n.sub-container[_ngcontent-%COMP%] {\n  background: rgba(78, 93, 108, 0.5);\n  max-width: 540px;\n  margin: 0 auto;\n  position: relative;\n  margin-top: 3em;\n  box-shadow: 2px 5px 20px rgba(41, 48, 56, 0.5);\n}\n.logo[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 12px;\n  margin-top: 12px;\n  font-family: \"Nunito Sans\", sans-serif;\n  color: #3DBB3D;\n  font-weight: 900;\n  font-size: 1.5em;\n  letter-spacing: 1px;\n}\n.CTA[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n  right: -20px;\n  bottom: 0;\n  margin-bottom: 90px;\n  position: absolute;\n  z-index: 1;\n  background: #7ED386;\n  font-size: 1em;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  cursor: pointer;\n}\n.CTA[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  margin-top: 10px;\n  margin-left: 9px;\n}\n.CTA[_ngcontent-%COMP%]:hover {\n  background: #3FB6A8;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.leftbox[_ngcontent-%COMP%] {\n  float: left;\n  top: -1%;\n  left: 5%;\n  position: absolute;\n  width: 5em;\n  height: 102%;\n  background: #5b419a;\n  box-shadow: 3px 3px 10px rgba(41, 48, 56, 0.5);\n}\n.sub-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0.7em;\n  color: #FFFFFF;\n  font-size: 2em;\n  display: block;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.sub-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3FB6A8;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  cursor: pointer;\n}\n.sub-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  margin-top: 7px;\n}\n.active[_ngcontent-%COMP%] {\n  color: #3FB6A8;\n}\n.rightbox[_ngcontent-%COMP%] {\n  float: right;\n  width: 60%;\n  height: 100%;\n}\n.profile[_ngcontent-%COMP%], .payment[_ngcontent-%COMP%], .subscription[_ngcontent-%COMP%], .privacy[_ngcontent-%COMP%], .settings[_ngcontent-%COMP%] {\n  -webkit-transition: opacity 0.5s ease-in;\n  transition: opacity 0.5s ease-in;\n  position: absolute;\n  width: 70%;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  color: #7ED386;\n  font-size: 1em;\n  margin-top: 40px;\n  margin-bottom: 35px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #f0ad4e;\n  font-family: \"Roboto\", sans-serif;\n  width: 80%;\n  text-transform: uppercase;\n  font-size: 8px;\n  letter-spacing: 1px;\n  margin-left: 2px;\n}\np[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-style: solid;\n  -webkit-border-image: -webkit-gradient(linear, left top, right top, from(#3FB6A8), to(rgba(126, 211, 134, 0.5))) 1 0%;\n  -webkit-border-image: linear-gradient(to right, #3FB6A8, rgba(126, 211, 134, 0.5)) 1 0%;\n       -o-border-image: linear-gradient(to right, #3FB6A8, rgba(126, 211, 134, 0.5)) 1 0%;\n          border-image: -webkit-gradient(linear, left top, right top, from(#3FB6A8), to(rgba(126, 211, 134, 0.5))) 1 0%;\n          border-image: linear-gradient(to right, #3FB6A8, rgba(126, 211, 134, 0.5)) 1 0%;\n  border-top: 0;\n  width: 80%;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 0.7em;\n  padding: 7px 0;\n}\n.btn[_ngcontent-%COMP%] {\n  float: right;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  font-size: 10px;\n  border: none;\n  color: #3FB6A8;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  font-weight: 900;\n}\ninput[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  font-family: \"Roboto\", sans-serif;\n  padding: 2px;\n  margin: 0;\n}\n.privacy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.settings[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.noshow[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -1;\n}\nfooter[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20%;\n  bottom: 0;\n  right: -20px;\n  text-align: right;\n  font-size: 0.8em;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-family: \"Roboto\", sans-serif;\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-decoration: none;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7d7d7d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvY2FiaW5ldC9EOlxccHJvamVjdHNcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAanMtY2xhblxccGFnZXNcXGNhYmluZXRcXGNhYmluZXQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL2NhYmluZXQvY2FiaW5ldC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SFEsdUZBQUE7QUE1SFI7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNFSjtBRENBO0VBQ0k7SUFDSSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNFTjtBQUNGO0FEQUE7RUFHSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRElBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNESjtBREVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREFBO0VBQ0ksa0JBQUE7QUNHSjtBREFJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDR1I7QUREUTtFQUNJLFdBQUE7QUNHWjtBRERBO0VBQ0U7SUFDRSwrQkFBQTtZQUFBLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO1lBQUEsaUJBQUE7SUFDQSxZQUFBO0VDSUY7RURIQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtFQ0tGO0FBQ0Y7QURmQTtFQUNFO0lBQ0UsK0JBQUE7WUFBQSx1QkFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtZQUFBLGlCQUFBO0lBQ0EsWUFBQTtFQ0lGO0VESEE7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7RUNLRjtBQUNGO0FEQUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFHQSxXQUFBO0FDQVI7QURDUTtFQUNJLGlCQUFBO0FDQ1o7QURBUTtFQUNJLFlBQUE7QUNFWjtBREFZO0VBQ0ksbUJBQUE7QUNFaEI7QUREWTtFQUNJLG1CQUFBO0FDR2hCO0FERlE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNJWjtBREZZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0loQjtBRERZO0VBQ0ksbUJBQUE7QUNHaEI7QURDQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDRUo7QUQwQkE7RUFDRSxxRkFBQTtFQUFBLHVEQUFBO0FDdkJGO0FEMEJBO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw4Q0FBQTtBQ3ZCRjtBRDBCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBckJLO0VBc0JMLGNBL0JLO0VBZ0NMLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ3ZCRjtBRDBCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQTFDTTtFQTJDTixjQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSxlQUFBO0FDdkJGO0FEd0JFO0VBQ0UsY0E5Q0k7RUErQ0osZ0JBQUE7RUFDQSxnQkFBQTtBQ3RCSjtBRHdCRTtFQUNFLG1CQXBERztFQXFESCw2QkFBQTtVQUFBLHFCQUFBO0FDdEJKO0FEMEJBO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUN2QkY7QUQwQkE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQXRFTTtFQXVFTixjQUFBO0VBQ0EsY0FBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUN2QkY7QUR3QkU7RUFDRSxjQTVFRztFQTZFSCw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsZUFBQTtBQ3RCSjtBRHVCRTtFQUNFLGVBQUE7QUNyQko7QUR5QkE7RUFDRSxjQXJGSztBQytEUDtBRHlCQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ3RCRjtBRDBCQTtFQUNFLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUN2QkY7QUQwQkE7RUFDRSxxQ0FoR1E7RUFpR1IsY0F4R007RUF5R04sY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUN2QkY7QUQwQkE7RUFDRSxjQUFBO0VBQ0EsaUNBeEdLO0VBeUdMLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDdkJGO0FEMEJBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFIQUFBO0VBQUEsdUZBQUE7T0FBQSxrRkFBQTtVQUFBLDZHQUFBO1VBQUEsK0VBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQXZIUTtFQXdIUixnQkFBQTtFQUNBLGNBQUE7QUN2QkY7QUQyQkE7RUFDRSxZQUFBO0VBQ0EsaUNBOUhLO0VBK0hMLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQXpJSztBQ2lIUDtBRDJCQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUN4QkY7QUQyQkE7RUFDRSx5QkFBQTtFQUNBLGlDQTVJSztFQTZJTCxZQUFBO0VBQ0EsU0FBQTtBQ3hCRjtBRDJCQTtFQUNFLGdCQUFBO0FDeEJGO0FEMkJBO0VBQ0UsZ0JBQUE7QUN4QkY7QUQyQkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ3hCRjtBRDJCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0F2S0s7QUMrSVA7QUR5QkU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ3ZCSjtBRHlCRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ3ZCSjtBRHdCSTtFQUNFLGNBQUE7QUN0Qk4iLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy9jYWJpbmV0L2NhYmluZXQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVnYS1jb250YWluZXJcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcbiAgICBtYXJnaW4tYm90dG9tOiA1ZW1cbiAgICBtaW4taGVpZ2h0OiAxMDB2aFxuICAgIG1hcmdpbi1ib3R0b206IDJlbVxuICAgIG1hcmdpbi10b3A6IDdlbVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweClcbiAgICAubWVnYS1jb250YWluZXJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuXG5cbi5zdWItY29udGFpbmVyXG4gICAgLy8gcGFkZGluZy10b3A6IDllbVxuICAgIC8vIG1pbi1oZWlnaHQ6IDEwMHZoXG4gICAgei1pbmRleDogMVxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIG9wYWNpdHk6IC45XG4gICAgcGFkZGluZy10b3A6IDFlbVxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM3OTIxMDlcbiAgICBcblxuLnN1Yi1maXJzdFxuICAgIHdpZHRoOiA1MDBweFxuICAgIGhlaWdodDogNTAwcHhcbi5zdWItc2Vjb25kXG4gICAgaGVpZ2h0OiAxMDAlXG4gICAgbWluLXdpZHRoOiA1MDBweFxuICAgIFxuLlBTXG4gICAgbWFyZ2luOiAxZW0gYXV0byAyZW0gYXV0b1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxuXG4udXNlci1jYXJkXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbi5ub3QtbG9nZ2VkXG4gICAgaDEgXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbVxuICAgICAgICBmb250LXNpemU6IDJlbVxuICAgICAgICBmb250LXdlaWdodDogOTAwXG4gICAgICAgIGNvbG9yOiAjYjkwMDVlXG4gICAgICAgIGFuaW1hdGlvbjogaGFyZCA1cyBpbmZpbml0ZVxuICAgIC5zdWItY29udGVudFxuICAgICAgICBwIFxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcblxuQGtleWZyYW1lcyBoYXJkIFxuICAwJVxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXG4gICAgY29sb3I6IGJsYWNrXG4gICAgZmlsdGVyOiBibHVyKDdweClcbiAgICBvcGFjaXR5OiAuMVxuICAxMDAlXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxuICAgIGNvbG9yOiAjYjkwMDVlXG4gICAgb3BhY2l0eTogMVxuXG5cblxuXG5kbCBcbiAgICBwIFxuICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgIC8vanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gICAgICAgIC8vbWFyZ2luOiBhdXRvXG4gICAgICAgIG1hcmdpbjogMWVtXG4gICAgICAgIGFcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtXG4gICAgICAgIGR0IFxuICAgICAgICAgICAgb3BhY2l0eTogLjVcbiAgICAgICAgZGQgXG4gICAgICAgICAgICAuYmFkZ2VcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIC41ZW1cbiAgICAgICAgICAgIGJ1dHRvblxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgLjVlbVxuICAgICAgICAuc29jaWFsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmF5XG4gICAgICAgICAgICB3aWR0aDogMmVtXG4gICAgICAgICAgICBoZWlnaHQ6IDJlbVxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJlbVxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbVxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgIC5tZGktZmFjZWJvb2tcbiAgICAgICAgICAgICY6aG92ZXJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibHVlXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzNiNTk5OFxuXG4gICAgICAgIC5tZGktZ29vZ2xlXG4gICAgICAgICAgICAmOmhvdmVyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VhNDMzNVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cbi5qdW1ib3Ryb24gXG4gICAgcGFkZGluZzogMnJlbSAycmVtXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwXG4gICAgcGFkZGluZzogMCAgICAgICAgIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiRsb2dvOiAjM0RCQjNEXG4kZ3JheTogIzc3Nzc3N1xuJGJsYWNrOiAjMDcwNzA3XG4kZ3JlZW46ICM3RUQzODZcbiRhcXVhOiAjM0ZCNkE4XG4kd2hpdGU6ICNGRkZGRkZcblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDkwMHxNb250c2VycmF0fFJvYm90bycpXG5cbiRodWx1OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmXG4kaGVhZGluZzogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmXG4kYm9keTogJ1JvYm90bycsIHNhbnMtc2VyaWZcblxuYm9keSBcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkYXF1YSwgJGdyZWVuKVxuXG5cbi5zdWItY29udGFpbmVyIFxuICBiYWNrZ3JvdW5kOiByZ2JhKDc4LDkzLDEwOCwwLjUpXG4gIG1heC13aWR0aDogNTQwcHhcbiAgbWFyZ2luOiAwIGF1dG9cbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIG1hcmdpbi10b3A6IDNlbVxuICBib3gtc2hhZG93OiAycHggNXB4IDIwcHggcmdiYSgjMjkzMDM4LCAuNSlcblxuXG4ubG9nbyBcbiAgZmxvYXQ6IHJpZ2h0XG4gIG1hcmdpbi1yaWdodDogMTJweFxuICBtYXJnaW4tdG9wOiAxMnB4XG4gIGZvbnQtZmFtaWx5OiAkaHVsdVxuICBjb2xvcjogJGxvZ29cbiAgZm9udC13ZWlnaHQ6IDkwMFxuICBmb250LXNpemU6IDEuNWVtXG4gIGxldHRlci1zcGFjaW5nOiAxcHhcblxuXG4uQ1RBIFxuICB3aWR0aDogODBweFxuICBoZWlnaHQ6IDQwcHhcbiAgcmlnaHQ6IC0yMHB4XG4gIGJvdHRvbTogMFxuICBtYXJnaW4tYm90dG9tOiA5MHB4XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICB6LWluZGV4OiAxXG4gIGJhY2tncm91bmQ6ICRncmVlblxuICBmb250LXNpemU6IDFlbVxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXRcbiAgY3Vyc29yOiBwb2ludGVyXG4gIGgxIFxuICAgIGNvbG9yOiAkd2hpdGVcbiAgICBtYXJnaW4tdG9wOiAxMHB4XG4gICAgbWFyZ2luLWxlZnQ6IDlweFxuICBcbiAgJjpob3ZlciBcbiAgICBiYWNrZ3JvdW5kOiAkYXF1YVxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxuICBcblxuXG4ubGVmdGJveCBcbiAgZmxvYXQ6IGxlZnRcbiAgdG9wOiAtMSVcbiAgbGVmdDogNSVcbiAgcG9zaXRpb246IGFic29sdXRlXG4gIHdpZHRoOiA1ZW1cbiAgaGVpZ2h0OiAxMDIlXG4gIGJhY2tncm91bmQ6ICM1YjQxOWFcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoIzI5MzAzOCwgLjUpXG5cblxuLnN1Yi1uYXYgYSBcbiAgbGlzdC1zdHlsZTogbm9uZVxuICBwYWRkaW5nOiAuN2VtXG4gIGNvbG9yOiAkd2hpdGVcbiAgZm9udC1zaXplOiAyZW1cbiAgZGlzcGxheTogYmxvY2tcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dFxuICAmOmhvdmVyIFxuICAgIGNvbG9yOiAkYXF1YVxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKVxuICAgIGN1cnNvcjogcG9pbnRlclxuICAmOmZpcnN0LWNoaWxkIFxuICAgIG1hcmdpbi10b3A6IDdweFxuICBcblxuXG4uYWN0aXZlIFxuICBjb2xvcjogJGFxdWFcblxuXG4ucmlnaHRib3ggXG4gIGZsb2F0OiByaWdodFxuICB3aWR0aDogNjAlXG4gIGhlaWdodDogMTAwJVxuXG5cblxuLnByb2ZpbGUsIC5wYXltZW50LCAuc3Vic2NyaXB0aW9uLCAucHJpdmFjeSwgLnNldHRpbmdzIFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICB3aWR0aDogNzAlXG5cblxuaDEgXG4gIGZvbnQtZmFtaWx5OiAkaGVhZGluZ1xuICBjb2xvcjogJGdyZWVuXG4gIGZvbnQtc2l6ZTogMWVtXG4gIG1hcmdpbi10b3A6IDQwcHhcbiAgbWFyZ2luLWJvdHRvbTogMzVweFxuXG5cbmgyIFxuICBjb2xvcjogI2YwYWQ0ZVxuICBmb250LWZhbWlseTogJGJvZHlcbiAgd2lkdGg6IDgwJVxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG4gIGZvbnQtc2l6ZTogOHB4XG4gIGxldHRlci1zcGFjaW5nOiAxcHhcbiAgbWFyZ2luLWxlZnQ6IDJweFxuXG5cbnAgXG4gIGJvcmRlci13aWR0aDogMXB4XG4gIGJvcmRlci1zdHlsZTogc29saWRcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRhcXVhLCByZ2JhKCRncmVlbiwuNSkpIDEgMCVcbiAgYm9yZGVyLXRvcDogMFxuICB3aWR0aDogODAlXG4gIGZvbnQtZmFtaWx5OiAkaGVhZGluZ1xuICBmb250LXNpemU6IC43ZW1cbiAgcGFkZGluZzogN3B4IDBcbiAgLy9jb2xvcjogJGJsYWNrXG5cblxuLmJ0biBcbiAgZmxvYXQ6IHJpZ2h0XG4gIGZvbnQtZmFtaWx5OiAkYm9keVxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG4gIGZvbnQtc2l6ZTogMTBweFxuICBib3JkZXI6IG5vbmVcbiAgY29sb3I6ICRhcXVhXG5cblxuLmJ0bjpob3ZlciBcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcbiAgZm9udC13ZWlnaHQ6IDkwMFxuXG5cbmlucHV0IFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGVuKCRncmF5LDQwJSlcbiAgZm9udC1mYW1pbHk6ICRib2R5XG4gIHBhZGRpbmc6IDJweFxuICBtYXJnaW46IDBcblxuXG4ucHJpdmFjeSBoMlxuICBtYXJnaW4tdG9wOiAyNXB4XG5cblxuLnNldHRpbmdzIGgyXG4gIG1hcmdpbi10b3A6IDI1cHhcblxuXG4ubm9zaG93IFxuICBvcGFjaXR5OiAwXG4gIHotaW5kZXg6IC0xXG5cblxuZm9vdGVyIFxuICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgd2lkdGg6IDIwJVxuICBib3R0b206IDBcbiAgcmlnaHQ6IC0yMHB4XG4gIHRleHQtYWxpZ246IHJpZ2h0XG4gIGZvbnQtc2l6ZTogMC44ZW1cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxuICBsZXR0ZXItc3BhY2luZzogMnB4XG4gIGZvbnQtZmFtaWx5OiAkYm9keVxuICBwIFxuICAgIGJvcmRlcjogbm9uZVxuICAgIHBhZGRpbmc6IDBcbiAgXG4gIGEgXG4gICAgY29sb3I6ICNmZmZmZmZcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbiAgICAmOmhvdmVyIFxuICAgICAgY29sb3I6ICM3ZDdkN2QiLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDkwMHxNb250c2VycmF0fFJvYm90b1wiKTtcbi5tZWdhLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tYm90dG9tOiA1ZW07XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIG1hcmdpbi10b3A6IDdlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5tZWdhLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLnN1Yi1jb250YWluZXIge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgcGFkZGluZy10b3A6IDFlbTtcbn1cblxuLnN1Yi1maXJzdCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLnN1Yi1zZWNvbmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogNTAwcHg7XG59XG5cbi5QUyB7XG4gIG1hcmdpbjogMWVtIGF1dG8gMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vdC1sb2dnZWQgaDEge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogI2I5MDA1ZTtcbiAgYW5pbWF0aW9uOiBoYXJkIDVzIGluZmluaXRlO1xufVxuLm5vdC1sb2dnZWQgLnN1Yi1jb250ZW50IHAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQGtleWZyYW1lcyBoYXJkIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmaWx0ZXI6IGJsdXIoN3B4KTtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICBjb2xvcjogI2I5MDA1ZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5kbCBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxZW07XG59XG5kbCBwIGEge1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbmRsIHAgZHQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5kbCBwIGRkIC5iYWRnZSB7XG4gIG1hcmdpbjogMCAwIDAgMC41ZW07XG59XG5kbCBwIGRkIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCAwIDAgMC41ZW07XG59XG5kbCBwIC5zb2NpYWwge1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xufVxuZGwgcCAubWRpLWZhY2Vib29rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcbn1cbmRsIHAgLm1kaS1nb29nbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWE0MzM1O1xufVxuXG4uanVtYm90cm9uIHtcbiAgcGFkZGluZzogMnJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzRkI2QTgsICM3RUQzODYpO1xufVxuXG4uc3ViLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNzgsIDkzLCAxMDgsIDAuNSk7XG4gIG1heC13aWR0aDogNTQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IHJnYmEoNDEsIDQ4LCA1NiwgMC41KTtcbn1cblxuLmxvZ28ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzREJCM0Q7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5DVEEge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICByaWdodDogLTIwcHg7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjN0VEMzg2O1xuICBmb250LXNpemU6IDFlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5DVEEgaDEge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cbi5DVEE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM0ZCNkE4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5sZWZ0Ym94IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRvcDogLTElO1xuICBsZWZ0OiA1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNWVtO1xuICBoZWlnaHQ6IDEwMiU7XG4gIGJhY2tncm91bmQ6ICM1YjQxOWE7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDQxLCA0OCwgNTYsIDAuNSk7XG59XG5cbi5zdWItbmF2IGEge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwLjdlbTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uc3ViLW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICMzRkI2QTg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN1Yi1uYXYgYTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjM0ZCNkE4O1xufVxuXG4ucmlnaHRib3gge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByb2ZpbGUsIC5wYXltZW50LCAuc3Vic2NyaXB0aW9uLCAucHJpdmFjeSwgLnNldHRpbmdzIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwJTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjN0VEMzg2O1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuaDIge1xuICBjb2xvcjogI2YwYWQ0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG5wIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM0ZCNkE4LCByZ2JhKDEyNiwgMjExLCAxMzQsIDAuNSkpIDEgMCU7XG4gIGJvcmRlci10b3A6IDA7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgcGFkZGluZzogN3B4IDA7XG59XG5cbi5idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMzRkI2QTg7XG59XG5cbi5idG46aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5wcml2YWN5IGgyIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnNldHRpbmdzIGgyIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLm5vc2hvdyB7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMCU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IC0yMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5mb290ZXIgcCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbmZvb3RlciBhIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6ICM3ZDdkN2Q7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CabinetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cabinet',
                templateUrl: './cabinet.component.html',
                styleUrls: ['./cabinet.component.sass']
            }]
    }], function () { return [{ type: _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _services_api_js_clan_service__WEBPACK_IMPORTED_MODULE_4__["ApiJsClanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/games/ar/ar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/games/ar/ar.component.ts ***!
  \******************************************************************/
/*! exports provided: ArComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArComponent", function() { return ArComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_dependencies_components_general_camera_camera_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@common-dependencies/components/general/camera/camera.component */ "./src/app/@modules/@common-dependencies/components/general/camera/camera.component.ts");
/*

Ctrl + k -> 2 --- Fold all methods
Ctrl + k -> j --- Unfold all

*/





function ArComponent_app_camera_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-camera");
} }
class ArComponent {
    // aims:any = []
    constructor() {
        this.rockets = [];
        this.readyMsg = 'Loaded...';
        this.onCamera = false;
        this.wiev_info = ':info:';
        this.score = 0;
        this.showButtons = 'ready';
    }
    //
    // Run 1
    //
    ngOnInit() {
        // 40
        setInterval(() => this.aimMove(), 40);
        // setInterval(() => this.rocketMove(), 40);
        this.scene.addEventListener('loaded', _ => this.aFrameOnInit());
    }
    //
    // Run 2
    //
    aFrameOnInit() {
        this.readyMsg = 'READY !!!';
        // run gamepad
        this.runGamepad();
    }
    //
    // Run 3
    //
    run() {
        this.init_Listeners();
        //
        this.spawn('enemy', 'buster_drone');
        setTimeout(() => this.spawn('enemy', 'biotronican_crab-simple'), 30000);
        setTimeout(() => this.spawn('enemy', 'biotronican_crab-simple'), 60000);
        setTimeout(() => this.spawn('enemy', 'buster_drone'), 90000);
        setTimeout(() => this.spawn('enemy', 'biotronican_crab'), 120000);
        //
        this.spawnRocket();
        // this.spawnRocket();
        // this.spawnRocket();
        //
        this.init_VR_Camera();
        //
        // const soundBg: any = document.querySelector("#sound-bg")
        // soundBg.loop = true;
        // soundBg.play();
        //
        window.loop = setInterval(() => this.gameLoop(), 50);
        this.gameLoop();
    }
    //
    // Run 3 Gamepad
    //
    runGamepad() {
        //
        // ready ?
        //
        window.addEventListener("gamepadconnected", (e) => {
            console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", e.gamepad.index, e.gamepad.id, e.gamepad.buttons.length, e.gamepad.axes.length);
            this.restart();
            Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])('Start gamepad loop !!!');
            window.loop = setInterval(() => this.gameLoop, 50);
        });
        window.addEventListener("gamepaddisconnected", (e) => {
            console.log("Gamepad disconnected from index %d: %s", e.gamepad.index, e.gamepad.id);
        });
    }
    restart() {
        //alert('Need implement Restart')
    }
    //
    // ???
    //
    gameLoop() {
        Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])('gameLoop');
        // CONTROLS
        this.gp = window.gp = (navigator.webkitGetGamepads) ? navigator.webkitGetGamepads()[0] : navigator.getGamepads()[0]; // Get gamepad
        // if (this.isButton(window.gp, 0)) alert('Go Up')
        if (this.isButton(window.gp, 5))
            this.fireStart();
        //alert(JSON.stringify(window.gp))
        // log((JSON.stringify(window.gp.buttons)))
        Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])('Gamepad');
        for (let key in window.gp.buttons) {
            Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])(key, this.isButton(window.gp, key));
        }
        this.showButtons = JSON.stringify(window.gp);
    }
    // GAMEPAD
    // Gamepad Button Checker
    isButton(gp, i) {
        if (!gp || !gp.buttons[i])
            return false;
        console.log('>>> ', gp.buttons[i], i);
        if (typeof gp.buttons[i] == 'number')
            return gp.buttons[0] == 1; // ??? // for webkitGetGamepads
        return (gp.buttons[i].value > 0 || gp.buttons[i].pressed == true);
    }
    ngIsButton(key) {
        return this.isButton(this.gp, key);
    }
    //
    // animate explosion
    //
    animateExplosion(position) {
        const exp = document.querySelector(".sprite");
        const expLight = document.querySelector("#exp-light");
        // log('exp: ', exp, RockPosDeg)
        exp.setAttribute('opacity', 1);
        exp.setAttribute('position', position);
        expLight.setAttribute('position', position);
        expLight.setAttribute('visible', 'true');
        //
        this.lightLoop = setInterval(() => {
            const scale = exp.getAttribute('scale');
            let opacity = exp.getAttribute('opacity');
            //
            scale.x += 0.4;
            scale.y += 0.4;
            opacity -= 0.04;
            //
            if (scale.x > 25) {
                scale.x = .1;
                scale.y = .1;
                opacity = 1;
                expLight.setAttribute('visible', 'false');
                clearInterval(this.lightLoop);
            }
            exp.setAttribute('scale', scale);
            exp.setAttribute('opacity', opacity);
        }, 40);
    }
    // info
    info(info) {
        Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])(info);
        this.wiev_info = info;
    }
    //
    // init VR Camera
    //
    init_VR_Camera() {
        this.camera.addEventListener('componentchanged', (evt) => {
            Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])('Camera event: ', evt);
            if (evt.detail.name == 'rotation') {
                this.rocketPositioning();
                this.explosionPsositioning();
            }
        });
    }
    //
    // activate event listeners
    //
    init_Listeners() {
        window.addEventListener("keydown", (e) => {
            Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])('keydown');
        });
        document.addEventListener('keyup', (e) => {
            Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])(e);
            if (e.keyCode == 32)
                this.launch();
            if (e.code == 'KeyR')
                this.spawnRocket();
            if (e.code == 'KeyE')
                this.spawn('enemy', 'buster_drone');
        });
    }
    //
    // explosion psositioning
    //
    explosionPsositioning() {
        const RockPosDeg = this.camPosToSpritePosDeg(this.camPos);
        // log('keydown', this.rockets, this.camPos, '::: ', RockPosDeg);
        // log('_camPos -> ', this.camPos );
        const exp = document.querySelector(".sprite");
        // log('exp: ', exp, RockPosDeg);
        exp.setAttribute('rotation', RockPosDeg);
        //
        // this.rockets.forEach((rocket) => {
        //   rocket.link.setAttribute('rotation', RockPosDeg);
        // })
    }
    //
    // set roket position
    //
    rocketPositioning() {
        const RockPosDeg = this.camPosToRockPosDeg(this.camPos);
        // log('keydown', this.rockets, this.camPos, '::: ', RockPosDeg);
        // log('_camPos -> ', this.camPos);
        this.rockets.forEach((rocket) => {
            rocket.link.setAttribute('rotation', RockPosDeg);
        });
    }
    //
    // fire start
    //
    fireStart() {
        this.launch();
        // this.fireFlow = setInterval(() => {
        //   this.spawn('enemy');
        // }, 500)
    }
    //
    // fire end
    //
    fireEnd() {
        clearInterval(this.fireFlow);
    }
    //
    // move to zero
    //
    toZero(x) {
        x.setAttribute('position', '0 -1 -0.5');
    }
    /////////////////////////////////////////////////////////////////////////
    //                              SPAWNERS                               //
    /////////////////////////////////////////////////////////////////////////  
    //
    // spawn Entity
    //
    spawnEntity(who, position = this.startPosition, scale = '40 40 40') {
        var newEl = document.createElement('a-entity');
        newEl.setAttribute('class', who);
        newEl.setAttribute('scale', scale);
        // newEl.setAttribute('scale', '0.01 0.01 0.01');
        newEl.setAttribute('position', position);
        // newEl._remove = () => newEl.parentNode.removeChild(newEl);
        this.scene.appendChild(newEl);
        return newEl;
    }
    //
    // spawn Enemy
    //
    spawn(who, type) {
        const en = this.spawnEntity(who);
        if (type == 'tree') {
            this.info('Generate: tree');
            en.setAttribute('gltf-model', 'url(assets/js-clan/3d/oak_tree_lowpoly/scene.gltf)');
            en.setAttribute('scale', '4 4 4');
        }
        else if (type == 'biotronican_crab') {
            this.info('Generate: biotronican_crab');
            en.setAttribute('gltf-model', 'url(assets/js-clan/3d/biotronican_crab_head_c1/scene.gltf)');
            en.setAttribute('scale', '20 20 20');
        }
        else if (type == 'biotronican_crab-simple') {
            this.info('Generate: biotronican_crab-simple');
            en.setAttribute('gltf-model', 'url(assets/js-clan/3d/biotronican_crab_head_c1/scene_simple.gltf)');
            en.setAttribute('scale', '20 20 20');
        }
        else if (type == 'buster_drone') {
            this.info('Generate: buster_drone');
            en.setAttribute('gltf-model', 'url(assets/js-clan/3d/buster_drone/scene.gltf)');
            en.setAttribute('scale', '0.01 0.01 0.01');
        }
        // en.setAttribute('geometry', 'primitive: box; width: 100; height: 100; depth: 100)');
        // en.setAttribute('obj-model', 'url(assets/js-clan/3d/Rubber_duck/Rubber_duck.obj)');
        // en.setAttribute('color', 'rgb(44, 57, 44)');
        // en.setAttribute('material', 'color: red');
        // en.setAttribute('scale', '0.01 0.01 0.01');
    }
    //
    // spawn Rocket
    //
    spawnRocket() {
        // 0 0 -1 == -90 0 0
        const idNum = this.rockets.length;
        var worldPos = new THREE.Vector3();
        worldPos.setFromMatrixPosition(this.camera.object3D.matrixWorld);
        //
        const en = this.spawnEntity('rocket', '0 -1 -0.5', '0.1 0.1 0.1');
        en.setAttribute('rotation', '-90 0 0');
        en.setAttribute('gltf-model', 'url(assets/js-clan/3d/simple_rocket/scene.gltf)');
        en.setAttribute('id', 'r-' + idNum);
        // sound="src: url(river.mp3); autoplay: true";
        //
        ////////// Sound component not playing audio asset across multiple entities in 0.8.*
        en.setAttribute('sound', `src: url(assets/js-clan/sound/Rocket-Thrusters-${idNum}.mp3); autoplay: true; loop: true `);
        //
        this.rockets.push({
            isFlying: false,
            link: en,
            // linkSound: null,
            vector: '',
            position: '0 -1 -0.5',
            speed: '',
            ownInterval: null
        });
    }
    /////////////////////////////////////////////////////////////////////////
    //                             ACTIVATORS                              //
    /////////////////////////////////////////////////////////////////////////  
    //
    // rockets activate
    //
    rocketsActivate(rocket, ownPosition) {
        this.animateExplosion(ownPosition);
        clearInterval(rocket.ownInterval);
        rocket.isFlying = false;
        this.toZero(rocket.link);
        // x.parentNode.removeChild(x);
    }
    //
    // launch
    //
    launch() {
        // take 1 roket 
        // or delay sound
        const freeRoket = this.rockets.filter((x) => !x.isFlying); // boolean
        if (freeRoket.length > 0) {
            // log('has free rocket', freeRoket);
            const rocket = freeRoket[0];
            rocket.isFlying = true;
            rocket.ownInterval = setInterval(() => this.rocketMove(rocket), 40);
            setTimeout(() => {
                // clearInterval(roket.ownInterval)
            }, 500);
            // sound
            // launch-sound
            const soundLaunch = document.querySelector("#sound-launch");
            // soundLaunch.loop = true;
            // sound.pause();
            soundLaunch.currentTime = 0;
            soundLaunch.play();
        }
        else {
            Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])('all isFlying', freeRoket);
        }
    }
    /////////////////////////////////////////////////////////////////////////
    //                                MOVERS                               //
    /////////////////////////////////////////////////////////////////////////
    aimMove() {
        const all = document.querySelectorAll('.enemy');
        all.forEach((x, i) => {
            const ownPosition = x.getAttribute('position');
            // log(i, ownPosition);
            //
            // ownPosition.y += Math.random()*0.1 - 0.04;
            // ownPosition.x += Math.random()*0.1 - 0.01;
            // ownPosition.z += Math.random()*0.1 - 0.01;
            ownPosition.y += 0.01; // ................................................ Vertical
            ownPosition.x += Math.random() * 0.1 - 0.01; // .................................. Horizontal
            ownPosition.z += 0.05; // ................................................ Move to You
            //
            x.setAttribute('position', ownPosition);
            const toFar = Math.max(Math.abs(ownPosition.y), Math.abs(ownPosition.x), Math.abs(ownPosition.z));
            //200
            if (toFar > 100)
                this.toBegin(x); //this.remove(x) //x.parentNode.removeChild(x);
            // if (toFar > 40) this.remove(x) //x.parentNode.removeChild(x);
        });
    }
    toBegin(x) {
        x.setAttribute('position', this.startPosition);
    }
    rocketMove(rocket) {
        // log(rocket);
        // clearInterval(roket.ownInterval);
        //
        // const all = document.querySelectorAll('.rocket');
        // all.forEach((x) => {
        const x = rocket.link;
        const ownPosition = x.getAttribute('position');
        // shift
        ownPosition.z += this.camPos.z;
        ownPosition.x += this.camPos.x;
        ownPosition.y += this.camPos.y;
        // rocket.linkSound.setAttribute('position', ownPosition);
        // log(ownPosition);
        const toFar = Math.max(Math.abs(ownPosition.y), Math.abs(ownPosition.x), Math.abs(ownPosition.z));
        // log(toFar);
        if (toFar > 60)
            this.rocketsActivate(rocket, ownPosition);
        // The collisions !!!
        // check every
        const allEnemies = document.querySelectorAll('.enemy');
        allEnemies.forEach((en) => {
            // distance betwen
            const distance = this.distanceBetven3D(x, en);
            // log('distanceBetven3D: ', distance);
            if (distance < 3) {
                this.score++;
                this.rocketsActivate(rocket, ownPosition);
                this.toBegin(en);
            }
        });
        x.setAttribute('position', ownPosition);
    }
    /////////////////////////////////////////////////////////////////////////
    //                             CALCULATORS                             //
    /////////////////////////////////////////////////////////////////////////
    distanceBetven3D(a, b) {
        const _a = a.getAttribute('position');
        const _b = b.getAttribute('position');
        const xDistance = Math.abs(Math.abs(_a.x) - Math.abs(_b.x));
        const yDistance = Math.abs(Math.abs(_a.y) - Math.abs(_b.y));
        const zDistance = Math.abs(Math.abs(_a.z) - Math.abs(_b.z));
        return (xDistance + yDistance + zDistance) / 3;
    }
    camPosToSpritePosDeg(camPos) {
        // let RockPosDeg = `${camPos.y * 90 - 90} 0 ${(camPos.x * 90 * -1) }`
        Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_1__["log"])((camPos.z < 0));
        let RockPosDeg = `
      ${(camPos.z < 0) ? 180 - (camPos.y * 90) : (camPos.y * 90) - 180} 
      ${(camPos.z < 0) ? 180 - (camPos.x * 90) : (camPos.x * 90 - 180)} 
      0
    `;
        return RockPosDeg;
    }
    camPosToRockPosDeg(camPos) {
        // let RockPosDeg = `${camPos.y * 90 - 90} 0 ${(camPos.x * 90 * -1) }`
        let RockPosDeg = `
      ${(camPos.z < 0) ? (camPos.y * 90 - 90) : 180 - (camPos.y * 90 - 90)} 
      0 
      ${(camPos.z < 0) ? (camPos.x * 90 * -1) : 180 - (camPos.x * 90 * -1)}
    `;
        return RockPosDeg;
    }
    /////////////////////////////////////////////////////////////////////////
    //                               GETTERS                               //
    /////////////////////////////////////////////////////////////////////////
    get camera() {
        return document.querySelector('#camera');
    }
    get marker() {
        return document.querySelector('#marker');
    }
    get scene() {
        return document.querySelector('a-scene');
    }
    get markerPosition() {
        // return (this.getMarker) ? this.getMarker.object3D.getWorldPosition() : {x:0, y:0, z:0}
        return { x: '0', y: '0', z: '-100' };
    }
    get startPosition() {
        return `${-200 + Math.random() * 200} 0.5 -50`;
        // return '-10 0.5 -50';
        // return { x: '0', y: '0', z: '-100' }
    }
    // get camera position
    //
    get camPos() {
        var direction = new THREE.Vector3();
        return this.camera.sceneEl.camera.getWorldDirection(direction);
    }
    ///////////////////////////////////////////////////////////////////////////////////// XZ /////////////////////////////////////////////////
    xz() {
        window.addEventListener("keydown", (e) => {
            const RockPosDeg = this.camPosToRockPosDeg(this.camPos); // ???
            var player = document.querySelector("a-camera");
            var direction = new THREE.Vector3();
            // go forvard
            if (e.code === "KeyR") {
                // get the cameras world direction
                player.sceneEl.camera.getWorldDirection(direction);
                direction.multiplyScalar(0.1);
                // faster than the below code - but getAttribute wont work
                // player.object3D.position.add(direction)
                var pos = player.getAttribute("position");
                pos.x += direction.x;
                pos.y += direction.y; // comment this to get 2D movement
                pos.z += direction.z;
                player.setAttribute("position", pos);
            }
        });
    }
    getPosition(x) {
    }
    setPosition(x) {
    }
    //
    // remove ???
    //
    remove(x) {
        // AFRAME.registerComponent('light', {
        //   // ...
        //   remove:  () =>  {
        //     x.removeObject3D('light');
        //   }
        //   // ...
        // });
        // x._remove()
        x.parentNode.removeChild(x);
        // delete this.rockets[0]
        // x = null; //delete x;
    }
}
ArComponent.ɵfac = function ArComponent_Factory(t) { return new (t || ArComponent)(); };
ArComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArComponent, selectors: [["app-ar"]], decls: 36, vars: 5, consts: [[1, "wrap"], [1, "ui", "game-ui"], [1, "score"], [1, "ui"], [3, "click"], [1, "info"], ["fog", "type: linear; color: #2B3E50; far: 100; near: 0", 3, "touchstart"], ["id", "camera", "rotation-reader", ""], ["id", "marker", "position", "0 0 -50"], ["id", "env-light", "position", "0 2 -40"], ["light", "type: ambient; color: #FFA200; intensity: 0.5; distance: 100.0;"], ["id", "exp-light", "position", "0 2 -4"], ["light", "type: point; color: #FFA200; intensity: 2.5; distance: 100.0;"], ["id", "exp", "position", "0 1 -4", "scale", "0.2 0.2 0.2", "src", "assets/js-clan/img/game/explosion-2.png", 1, "sprite"], ["id", "sound-launch"], ["src", "assets/js-clan/sound/Missle_Launch.mp3", "type", "audio/mpeg"], [2, "text-align", "right"], [4, "ngIf"], [1, "on-wrap"]], template: function ArComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArComponent_Template_button_click_5_listener($event) { return ctx.onCamera = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Open camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArComponent_Template_button_click_7_listener($event) { return ctx.run(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "RUN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fire - Tup or Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Spawn Enemy - E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Spawn Rocket - R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a-scene", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function ArComponent_Template_a_scene_touchstart_21_listener($event) { return ctx.fireStart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a-camera", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "a-entity", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a-entity", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "a-entity", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a-entity", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "a-entity", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "a-image", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "audio", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "source", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Your browser does not support the audio element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ArComponent_app_camera_34_Template, 1, 0, "app-camera", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SCORE: ", ctx.score, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.readyMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wiev_info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Camera on: ", ctx.onCamera, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onCamera);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _common_dependencies_components_general_camera_camera_component__WEBPACK_IMPORTED_MODULE_3__["CameraComponent"]], styles: [".wrap {\n  background: #020a02;\n}\n\n.on-wrap {\n  background: url(/assets/js-clan/img/header/header-code.svg);\n  background: url(/assets/js-clan/img/hexagons.svg);\n  background: url(/assets/js-clan/img/hex.png);\n  background-size: 20em;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10;\n  opacity: 0.3;\n}\n\na-scene {\n  z-index: 3333;\n  height: 100%;\n}\n\n.ui {\n  z-index: 9999;\n  position: fixed;\n  top: 0;\n  background: rgba(0, 0, 0, 0.28);\n  padding: 1em;\n  color: gray;\n  opacity: 0.3;\n}\n\n.ui .info {\n  color: lightgreen;\n}\n\n.game-ui {\n  right: 0;\n  top: 1em;\n}\n\n.game-ui .score {\n  font-size: 3em;\n  margin-bottom: 0;\n}\n\nvideo {\n  z-index: 3;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n}\n\nbody {\n  height: 100%;\n  z-index: 1;\n}\n\n.cool-btn {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  background: gray;\n}\n\n.cool-btn-active {\n  background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvZ2FtZXMvYXIvRDpcXHByb2plY3RzXFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXHBhZ2VzXFxnYW1lc1xcYXJcXGFyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy9nYW1lcy9hci9hci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSwyREFBQTtFQUNBLGlEQUFBO0VBQ0EsNENBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNHSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FERkk7RUFDSSxpQkFBQTtBQ0lSOztBREZBO0VBQ0ksUUFBQTtFQUNBLFFBQUE7QUNLSjs7QURKSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ01SOztBRExBO0VBQ0ksVUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtBQ09KOztBRExBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUNRSjs7QUROQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksaUJBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL2dhbWVzL2FyL2FyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMiwgMTAsIDIpXHJcblxyXG4ub24td3JhcFxyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvanMtY2xhbi9pbWcvaGVhZGVyL2hlYWRlci1jb2RlLnN2ZylcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2pzLWNsYW4vaW1nL2hleGFnb25zLnN2ZylcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2pzLWNsYW4vaW1nL2hleC5wbmcpXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwZW1cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgd2lkdGg6IDEwMHZ3XHJcbiAgICBoZWlnaHQ6IDEwMHZoXHJcbiAgICB6LWluZGV4OiAxMFxyXG4gICAgb3BhY2l0eTogLjNcclxuXHJcbmEtc2NlbmVcclxuICAgIHotaW5kZXg6IDMzMzNcclxuICAgIGhlaWdodDogMTAwJVxyXG5cclxuXHJcbi51aSBcclxuICAgIHotaW5kZXg6IDk5OTlcclxuICAgIHBvc2l0aW9uOiBmaXhlZFxyXG4gICAgdG9wOiAwXHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAwJSwgMC4yOClcclxuICAgIHBhZGRpbmc6IDFlbVxyXG4gICAgY29sb3I6IGdyYXlcclxuICAgIG9wYWNpdHk6IC4zXHJcbiAgICAuaW5mb1xyXG4gICAgICAgIGNvbG9yOiBsaWdodGdyZWVuXHJcblxyXG4uZ2FtZS11aVxyXG4gICAgcmlnaHQ6IDBcclxuICAgIHRvcDogMWVtXHJcbiAgICAuc2NvcmVcclxuICAgICAgICBmb250LXNpemU6IDNlbVxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBcclxudmlkZW8gXHJcbiAgICB6LWluZGV4OiAzXHJcbiAgICAvL3dpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDEwMHZoXHJcbiAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgIHRvcDogMFxyXG5cclxuYm9keVxyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgICB6LWluZGV4OiAxXHJcblxyXG4uY29vbC1idG5cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgd2lkdGg6IDFlbVxyXG4gICAgaGVpZ2h0OiAxZW1cclxuICAgIGJhY2tncm91bmQ6IGdyYXlcclxuXHJcbi5jb29sLWJ0bi1hY3RpdmVcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuXHJcblxyXG5cclxuIiwiLndyYXAge1xuICBiYWNrZ3JvdW5kOiAjMDIwYTAyO1xufVxuXG4ub24td3JhcCB7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2pzLWNsYW4vaW1nL2hlYWRlci9oZWFkZXItY29kZS5zdmcpO1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9qcy1jbGFuL2ltZy9oZXhhZ29ucy5zdmcpO1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9qcy1jbGFuL2ltZy9oZXgucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMGVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMTA7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuYS1zY2VuZSB7XG4gIHotaW5kZXg6IDMzMzM7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnVpIHtcbiAgei1pbmRleDogOTk5OTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIHBhZGRpbmc6IDFlbTtcbiAgY29sb3I6IGdyYXk7XG4gIG9wYWNpdHk6IDAuMztcbn1cbi51aSAuaW5mbyB7XG4gIGNvbG9yOiBsaWdodGdyZWVuO1xufVxuXG4uZ2FtZS11aSB7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDFlbTtcbn1cbi5nYW1lLXVpIC5zY29yZSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG52aWRlbyB7XG4gIHotaW5kZXg6IDM7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29vbC1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBiYWNrZ3JvdW5kOiBncmF5O1xufVxuXG4uY29vbC1idG4tYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ar',
                templateUrl: './ar.component.html',
                styleUrls: ['./ar.component.sass'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/health/health.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/health/health.component.ts ***!
  \********************************************************************/
/*! exports provided: HealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthComponent", function() { return HealthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@common-dependencies/components/general/extra-alert/extra-alert.component */ "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");
/* harmony import */ var _components_flip_card_video_flip_card_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/flip-card-video/flip-card-video.component */ "./src/app/@modules/@js-clan/components/flip-card-video/flip-card-video.component.ts");








function HealthComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-flip-card-video", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r16);
} }
class HealthComponent {
    constructor() {
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
        this.st.cards = [
            {
                number: "0",
                name: "Вправа для поясниці",
                video: "-RjXS5aH3Hk",
                // img: "assets/js-clan/img/lessons/0.jpg",
                // title: {
                //   en: "",
                //   ua: "Это Упражнение Убивает Твою Поясницу(Замени Его)"
                // },
                description: {
                    ua: "Вправа для поясниці"
                },
                text: {
                    en: "text",
                    ua: "При сидячій роботі розвивається викривлення в районі поясниці. Ця вправа допомагає виправити цей момент."
                }
            },
            {
                number: "1",
                name: "Вправа для поясниці",
                video: "PMqLSUT8LhE",
                // img: "assets/js-clan/img/lessons/0.jpg",
                // title: {
                //   en: "",
                //   ua: "Это Упражнение Убивает Твою Поясницу(Замени Его)"
                // },
                description: {
                    ua: "Вправа для поясниці"
                },
                text: {
                    en: "text",
                    ua: "При сидячій роботі розвивається викривлення в районі поясниці. Ця вправа допомагає виправити цей момент."
                }
            },
        ];
    }
}
HealthComponent.ɵfac = function HealthComponent_Factory(t) { return new (t || HealthComponent)(); };
HealthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HealthComponent, selectors: [["app-health"]], decls: 12, vars: 2, consts: [[1, "container", "health-content"], [1, "row"], ["class", "col-12  col-sm-12  col-md-6  col-lg-4  col-xl-3", 4, "ngFor", "ngForOf"], [1, "PS"], ["href", "https://www.youtube.com/channel/UC1fRCBrRa1oeIENiEm8AzUA?view_as=subscriber", "target", "_blank", 1, "btn", "btn-success"], [3, "st"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-3"], [3, "card"]], template: function HealthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HealthComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0414\u043E\u043B\u0443\u0447\u0430\u0439\u0441\u044F \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0438 \u043D\u0430 \u042E\u0442\u0443\u0431!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0425\u041E\u0427\u0423 !!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-extra-alert", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-clan-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.st.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("st", ctx.st.alert);
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_4__["ExtraAlertComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_5__["ClanFooterComponent"], _components_flip_card_video_flip_card_video_component__WEBPACK_IMPORTED_MODULE_6__["FlipCardVideoComponent"]], styles: [".PS[_ngcontent-%COMP%] {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvaGVhbHRoL0Q6XFxwcm9qZWN0c1xccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxwYWdlc1xcaGVhbHRoXFxoZWFsdGguY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLlBTXG4gIG1hcmdpbjogMWVtIGF1dG8gMmVtIGF1dG9cbiAgdGV4dC1hbGlnbjogY2VudGVyIiwiLlBTIHtcbiAgbWFyZ2luOiAxZW0gYXV0byAyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-health',
                templateUrl: './health.component.html',
                styleUrls: ['./health.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/lesson/lesson.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/lesson/lesson.component.ts ***!
  \********************************************************************/
/*! exports provided: LessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonComponent", function() { return LessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");









class LessonComponent {
    constructor(route, api, sanitizer) {
        this.route = route;
        this.api = api;
        this.sanitizer = sanitizer;
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.url = "https://www.youtube.com/embed/";
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // 1
                let lessonName = this.route.snapshot.paramMap.get('name');
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])(lessonName);
                // log(state)
                // 2
                this.st.cards = yield this.api.getJson('/js-clan/data/lessons.json');
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])(this.st.cards);
                //3
                this.st.currentCard = this.st.cards.filter(card => card.name == lessonName)[0];
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])(this.st.currentCard);
                //4
                this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.st.currentCard.video);
            }
            catch (error) {
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])(error);
            }
        });
    }
}
LessonComponent.ɵfac = function LessonComponent_Factory(t) { return new (t || LessonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"])); };
LessonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LessonComponent, selectors: [["app-lesson"]], decls: 18, vars: 3, consts: [[1, "container", "lessons-content"], [1, "card-header"], [1, "row"], ["frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"], [1, "card-text"], ["href", "https://github.com/SpiritUrban/JavaScript-2020"]], template: function LessonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Code on GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.st.currentCard.title[ctx.st.lang]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.urlSafe, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.st.currentCard.description[ctx.st.lang]);
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"]], styles: ["iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 460px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbGVzc29uL0Q6XFxwcm9qZWN0c1xccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxwYWdlc1xcbGVzc29uXFxsZXNzb24uY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL2xlc3Nvbi9sZXNzb24uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbGVzc29uL2xlc3Nvbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImlmcmFtZVxuICAgIHdpZHRoOiAxMDAlXG4gICAgaGVpZ2h0OiA0NjBweCIsImlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ2MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-lesson',
                templateUrl: './lesson.component.html',
                styleUrls: ['./lesson.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/lessons/lessons.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/lessons/lessons.component.ts ***!
  \**********************************************************************/
/*! exports provided: LessonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsComponent", function() { return LessonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");
/* harmony import */ var _services_api_js_clan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api-js-clan.service */ "./src/app/@modules/@js-clan/services/api-js-clan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@common-dependencies/components/general/extra-alert/extra-alert.component */ "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");
/* harmony import */ var _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/flip-card/flip-card.component */ "./src/app/@modules/@js-clan/components/flip-card/flip-card.component.ts");













function LessonsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-flip-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("card", card_r1);
} }
class LessonsComponent {
    constructor(api, _api, router) {
        this.api = api;
        this._api = _api;
        this.router = router;
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.st.cards = yield this.api.getJson('/js-clan/data/lessons.json');
                console.log(this.st.cards);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    wantMoreLessons() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.router.navigate(['/want-more-lessons']);
            const r = yield this._api.voteForLessons();
            (r.ok) ?
                this.msgVoteOk() :
                this.msgVoteBad();
            Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"])(r);
        });
    }
    msgVoteOk() {
        Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["my_alert"])(':)', 'Your vote counted', null);
    }
    msgVoteBad() {
        Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["my_alert"])(':(', 'Something wrong', null);
    }
}
LessonsComponent.ɵfac = function LessonsComponent_Factory(t) { return new (t || LessonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_js_clan_service__WEBPACK_IMPORTED_MODULE_5__["ApiJsClanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
LessonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LessonsComponent, selectors: [["app-lessons"]], decls: 12, vars: 2, consts: [[1, "container", "lessons-content"], [1, "row"], ["class", "col-12  col-sm-12  col-md-6  col-lg-4  col-xl-3", 4, "ngFor", "ngForOf"], [1, "PS"], [1, "btn", "btn-success", 3, "click"], [3, "st"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-3"], [3, "card"]], template: function LessonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LessonsComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0425\u043E\u0447\u0435\u0448 \u0449\u0435 \u0443\u0440\u043E\u043A\u0456\u0432? \u0416\u043C\u0438 \u043A\u043D\u043E\u043F\u043A\u0443! \u0429\u043E\u0431 \u044F \u0437\u043D\u0430\u0432, \u0441\u043A\u0456\u043B\u044C\u043A\u043E\u043C \u043B\u044E\u0434\u044F\u043C \u0446\u0435 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LessonsComponent_Template_a_click_8_listener($event) { return ctx.wantMoreLessons(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0425\u041E\u0427\u0423 \u0429\u0415 !!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-extra-alert", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-clan-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.st.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("st", ctx.st.alert);
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_9__["ExtraAlertComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_10__["ClanFooterComponent"], _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_11__["FlipCardComponent"]], styles: [".PS[_ngcontent-%COMP%] {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbGVzc29ucy9EOlxccHJvamVjdHNcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAanMtY2xhblxccGFnZXNcXGxlc3NvbnNcXGxlc3NvbnMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL2xlc3NvbnMvbGVzc29ucy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL2xlc3NvbnMvbGVzc29ucy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5QU1xuICBtYXJnaW46IDFlbSBhdXRvIDJlbSBhdXRvXG4gIHRleHQtYWxpZ246IGNlbnRlciIsIi5QUyB7XG4gIG1hcmdpbjogMWVtIGF1dG8gMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-lessons',
                templateUrl: './lessons.component.html',
                styleUrls: ['./lessons.component.sass']
            }]
    }], function () { return [{ type: _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _services_api_js_clan_service__WEBPACK_IMPORTED_MODULE_5__["ApiJsClanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/main/main.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/main/main.component.ts ***!
  \****************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");






class MainComponent {
    constructor() {
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 64, vars: 0, consts: [[1, "container", "main-content"], [1, "row"], ["routerLink", "/common/main"], ["routerLink", "/lessons"], ["routerLink", "/members"], ["routerLink", "/training-apparatus"], ["routerLink", "/cabinet"], ["routerLink", "/programmer-tips"], ["routerLink", "/games/ar"], ["routerLink", "/video-samples"], ["routerLink", "/free-sounds"], ["routerLink", "/auth/register"], ["routerLink", "/auth/conditions"], ["routerLink", "/auth/login"], ["href", "/all-users"], ["href", "/user"], ["href", "/clean"], ["href", "/send-mail"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "JS-CLAN:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "/common/main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lessons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Training apparatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cabinet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Programmer tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "games/ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0420\u0435\u0441\u0443\u0440\u0441\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0414\u043B\u044F \u0432\u0456\u0434\u0435\u043E \u043C\u043E\u043D\u0442\u0430\u0436\u0443:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Video samples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Free sounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "AUTH:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "DEV:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Show all users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Show user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Remove all users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Send meill to shadespiritenator@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-clan-footer");
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_4__["ClanFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/members/member.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/members/member.service.ts ***!
  \*******************************************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _members__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./members */ "./src/app/@modules/@js-clan/pages/members/members.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
function sort(members, column, direction) {
    if (direction === '') {
        return members;
    }
    else {
        return [...members].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(member, term, pipe) {
    return member.name.toLowerCase().includes(term.toLowerCase())
        || pipe.transform(member.carma).includes(term)
        || pipe.transform(member.level).includes(term);
}
class MemberService {
    constructor(pipe) {
        this.pipe = pipe;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._members$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
        this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
            this._members$.next(result.members);
            this._total$.next(result.total);
        });
        this._search$.next();
    }
    get members$() { return this._members$.asObservable(); }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let members = sort(_members__WEBPACK_IMPORTED_MODULE_2__["MEMBERS"], sortColumn, sortDirection);
        // 2. filter
        members = members.filter(member => matches(member, searchTerm, this.pipe));
        const total = members.length;
        // 3. paginate
        members = members.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ members, total });
    }
}
MemberService.ɵfac = function MemberService_Factory(t) { return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"])); };
MemberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MemberService, factory: MemberService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/members/members.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/members/members.component.ts ***!
  \**********************************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member.service */ "./src/app/@modules/@js-clan/pages/members/member.service.ts");
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortable.directive */ "./src/app/@modules/@js-clan/pages/members/sortable.directive.ts");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");












function MembersComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MembersComponent_tr_24_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", member_r4.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MembersComponent_tr_24_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", member_r4.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MembersComponent_tr_24_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", member_r4.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MembersComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngb-highlight", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MembersComponent_tr_24_a_7_Template, 2, 1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MembersComponent_tr_24_a_8_Template, 2, 1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MembersComponent_tr_24_a_9_Template, 2, 1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ngb-highlight", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ngb-highlight", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", member_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", member_r4.name)("term", ctx_r3.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r4.github);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r4.linkedin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r4.instagram);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, member_r4.carma))("term", ctx_r3.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", member_r4.status)("term", ctx_r3.service.searchTerm);
} }
class MembersComponent {
    constructor(service) {
        this.service = service;
        this.members$ = service.members$;
        this.total$ = service.total$;
    }
    ngOnInit() {
    }
    onSort({ column, direction }) {
        // resetting other headers
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
}
MembersComponent.ɵfac = function MembersComponent_Factory(t) { return new (t || MembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"])); };
MembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MembersComponent, selectors: [["app-members"]], viewQuery: function MembersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_3__["NgbdSortableHeader"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]])], decls: 40, vars: 16, consts: [[1, "container", "members-content"], [1, "row"], [1, "table-form"], [1, "form-group", "form-inline"], ["aria-hidden", "true", 1, "mdi", "mdi-account-search"], ["type", "text", "placeholder", "Search by names", "name", "searchTerm", 1, "form-control", "ml-2", "search", 3, "ngModel", "ngModelChange"], ["class", "ml-3", 4, "ngIf"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "col", "sortable", "name", 3, "sort"], ["scope", "col", "sortable", "area", 3, "sort"], ["scope", "col", "sortable", "population", 3, "sort"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "collectionSize", "page", "pageSize", "pageChange"], ["name", "pageSize", 1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "PS"], [1, "ml-3"], ["scope", "row"], [1, "mr-2", 2, "width", "20px", 3, "src"], [3, "result", "term"], [2, "padding", "0 .75rem"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], ["aria-hidden", "true", 1, "mdi", "mdi-github-circle"], ["aria-hidden", "true", 1, "mdi", "mdi-linkedin-box"], ["aria-hidden", "true", 1, "mdi", "mdi-instagram"]], template: function MembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MembersComponent_Template_input_ngModelChange_7_listener($event) { return ctx.service.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MembersComponent_span_8_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function MembersComponent_Template_th_sort_15_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function MembersComponent_Template_th_sort_17_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function MembersComponent_Template_th_sort_19_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Carma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function MembersComponent_Template_th_sort_21_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MembersComponent_tr_24_Template, 15, 13, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngb-pagination", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function MembersComponent_Template_ngb_pagination_pageChange_27_listener($event) { return ctx.service.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MembersComponent_Template_select_ngModelChange_29_listener($event) { return ctx.service.pageSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "10 items per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "20 items per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "30 items per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u042F\u043A\u0449\u043E \u0442\u0438 \u043E\u0434\u0438\u043D \u0437 \u043C\u043E\u0457\u0445 \u0443\u0447\u043D\u0456\u0432 \u0456 \u0442\u0438 \u0445\u043E\u0447\u0435\u0448 \u0431\u0443\u0442\u0438 \u0432 \u0446\u0435\u043C\u0443 \u0441\u043F\u0438\u0441\u043A\u0443, \u0441\u043A\u0430\u0436\u0438 \u043C\u0435\u043D\u0456 \u043F\u0440\u043E \u0446\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-clan-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, ctx.service.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 12, ctx.members$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 14, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 30);
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_7__["ClanFooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbHighlight"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: [".PS[_ngcontent-%COMP%] {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n\n.table-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.search[_ngcontent-%COMP%] {\n  background: #0000;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.mdi-account-search[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: #df691a;\n}\n\n.mdi-github-circle[_ngcontent-%COMP%], .mdi-linkedin-box[_ngcontent-%COMP%], .mdi-instagram[_ngcontent-%COMP%] {\n  font-size: 2em;\n  cursor: pointer;\n  margin-right: 0.5em;\n}\n\n.mdi-github-circle[_ngcontent-%COMP%]:hover, .mdi-linkedin-box[_ngcontent-%COMP%]:hover, .mdi-instagram[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.custom-select[_ngcontent-%COMP%] {\n  background-color: #818a8f;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbWVtYmVycy9EOlxccHJvamVjdHNcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAanMtY2xhblxccGFnZXNcXG1lbWJlcnNcXG1lbWJlcnMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURBQTtFQUNJLHNCQUFBO0FDR0o7O0FEQUE7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0dKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURISTtFQUNJLFlBQUE7QUNLUjs7QURIQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLlBTXG4gIG1hcmdpbjogMWVtIGF1dG8gMmVtIGF1dG9cbiAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgXG4gICAgXG4udGFibGUtZm9ybVxuICAgIHdpZHRoOiAxMDAlXG50ZFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcblxuXG4uc2VhcmNoXG4gICAgYmFja2dyb3VuZDogIzAwMDBcbiAgICB3aWR0aDogZml0LWNvbnRlbnRcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KVxuXG4ubWRpLWFjY291bnQtc2VhcmNoXG4gICAgZm9udC1zaXplOiAyZW1cbiAgICBjb2xvcjogI2RmNjkxYVxuXG4ubWRpLWdpdGh1Yi1jaXJjbGUsIC5tZGktbGlua2VkaW4tYm94LCAubWRpLWluc3RhZ3JhbVxuICAgIGZvbnQtc2l6ZTogMmVtXG4gICAgY3Vyc29yOiBwb2ludGVyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtXG4gICAgJjpob3ZlclxuICAgICAgICBvcGFjaXR5OiAuN1xuXG4uY3VzdG9tLXNlbGVjdFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MThhOGZcbiAgICBjb2xvcjogYmxhY2siLCIuUFMge1xuICBtYXJnaW46IDFlbSBhdXRvIDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJsZS1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNlYXJjaCB7XG4gIGJhY2tncm91bmQ6ICMwMDAwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5tZGktYWNjb3VudC1zZWFyY2gge1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICNkZjY5MWE7XG59XG5cbi5tZGktZ2l0aHViLWNpcmNsZSwgLm1kaS1saW5rZWRpbi1ib3gsIC5tZGktaW5zdGFncmFtIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cbi5tZGktZ2l0aHViLWNpcmNsZTpob3ZlciwgLm1kaS1saW5rZWRpbi1ib3g6aG92ZXIsIC5tZGktaW5zdGFncmFtOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uY3VzdG9tLXNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MThhOGY7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-members',
                templateUrl: './members.component.html',
                styleUrls: ['./members.component.sass'],
                providers: [_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]]
            }]
    }], function () { return [{ type: _member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"] }]; }, { headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_sortable_directive__WEBPACK_IMPORTED_MODULE_3__["NgbdSortableHeader"]]
        }] }); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/members/members.ts":
/*!************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/members/members.ts ***!
  \************************************************************/
/*! exports provided: MEMBERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEMBERS", function() { return MEMBERS; });
const MEMBERS = [
    {
        id: 1,
        name: 'Vitaliy Dyachuk',
        img: 'https://avatars3.githubusercontent.com/u/16016599?s=460&v=4',
        status: 'CLAN-leader, super-mentor',
        carma: 1000,
        level: 0,
        github: 'https://github.com/SpiritUrban',
        linkedin: 'https://www.linkedin.com/in/vitaly-dyachuk-8ba18a54/',
        instagram: 'https://www.instagram.com/shadespiritenator/'
    },
    {
        id: 2,
        name: 'Roman Peredrii',
        img: 'https://avatars0.githubusercontent.com/u/42037680?s=460&v=4',
        status: 'student, mentor',
        carma: 100,
        level: 0,
        github: 'https://github.com/RomanPeredrii',
        linkedin: '',
        instagram: ''
    },
    {
        id: 3,
        name: 'Vladyslav Piatyhor',
        img: 'https://avatars1.githubusercontent.com/u/29441499?s=460&v=4',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/5Mountains',
        linkedin: '',
        instagram: ''
    },
    {
        id: 4,
        name: 'Taras Ostasha',
        img: 'https://avatars3.githubusercontent.com/u/19312196?s=460&v=4',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/TarasOstasha',
        linkedin: '',
        instagram: ''
    },
    {
        id: 5,
        name: 'Vlad Buryak',
        img: 'assets/img/base/icons/avatars/batman.svg',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/VladGodOfJS',
        linkedin: '',
        instagram: ''
    },
    {
        id: 6,
        name: 'Oksana Soroka',
        img: 'assets/img/base/icons/avatars/woman.svg',
        status: 'student',
        carma: 100,
        level: 0,
        github: '',
        linkedin: 'http://linkedin.com/in/oksana-soroka-45282919a',
        instagram: 'https://www.instagram.com/ksu_mid/'
    },
    {
        id: 7,
        name: 'Kolya (Toto)',
        img: 'https://avatars3.githubusercontent.com/u/33295757?s=460&v=4',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/Mooninghnk',
        linkedin: '',
        instagram: ''
    },
    {
        id: 8,
        name: 'Sergiy Semeguk',
        img: 'https://avatars2.githubusercontent.com/u/45179731?s=460&v=4',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/semeguk',
        linkedin: '',
        instagram: ''
    },
    {
        id: 9,
        name: 'Dima Semeguk',
        img: 'https://avatars1.githubusercontent.com/u/51905745?s=460&v=4',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/dimasemehuk7',
        linkedin: '',
        instagram: ''
    },
    {
        id: 10,
        name: 'Dima Martinovich',
        img: 'assets/img/base/icons/avatars/batman.svg',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/marpusik',
        linkedin: 'https://www.linkedin.com/in/%D0%B4%D0%B8%D0%BC%D0%B0-%D0%BC%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BE%D0%B2%D0%B8%D1%87-0881a5196/',
        instagram: ''
    }
];


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/members/sortable.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/members/sortable.directive.ts ***!
  \***********************************************************************/
/*! exports provided: NgbdSortableHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdSortableHeader", function() { return NgbdSortableHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
class NgbdSortableHeader {
    constructor() {
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
}
NgbdSortableHeader.ɵfac = function NgbdSortableHeader_Factory(t) { return new (t || NgbdSortableHeader)(); };
NgbdSortableHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgbdSortableHeader, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function NgbdSortableHeader_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdSortableHeader_click_HostBindingHandler($event) { return ctx.rotate(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
    } }, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdSortableHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'th[sortable]',
                host: {
                    '[class.asc]': 'direction === "asc"',
                    '[class.desc]': 'direction === "desc"',
                    '(click)': 'rotate()'
                }
            }]
    }], null, { sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/p404/p404.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/p404/p404.component.ts ***!
  \****************************************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _common_dependencies_components_general_night_sky_night_sky_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@common-dependencies/components/general/night-sky/night-sky.component */ "./src/app/@modules/@common-dependencies/components/general/night-sky/night-sky.component.ts");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");





class P404Component {
    constructor() {
    }
    ngOnInit() {
    }
}
P404Component.ɵfac = function P404Component_Factory(t) { return new (t || P404Component)(); };
P404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: P404Component, selectors: [["app-p404"]], decls: 6, vars: 0, consts: [[1, "container"]], template: function P404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-night-sky");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404 Page not found ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-clan-footer");
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _common_dependencies_components_general_night_sky_night_sky_component__WEBPACK_IMPORTED_MODULE_2__["NightSkyComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_3__["ClanFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL3A0MDQvcDQwNC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-p404',
                templateUrl: './p404.component.html',
                styleUrls: ['./p404.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/programmer-tips/programmer-tips.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/programmer-tips/programmer-tips.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProgrammerTipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgrammerTipsComponent", function() { return ProgrammerTipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@common-dependencies/components/general/extra-alert/extra-alert.component */ "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");










function ProgrammerTipsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0416\u043C\u0438 \u043A\u043D\u043E\u043F\u043A\u0443!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProgrammerTipsComponent_div_4_Template_a_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.play(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "PLAY !!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Special title treatment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Support card subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Cras justo odio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Dapibus ac facilisis in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Vestibulum at eros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Card link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Another link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " 2 days ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Card title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Card subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Some quick example text to build on the card title and make up the bulk of the card's content.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Card link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Another link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Card header ", card_r29.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", "{", " ", "}", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r29.text.en);
} }
class ProgrammerTipsComponent {
    constructor(api) {
        this.api = api;
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.st.cards = yield this.api.getJson('/js-clan/data/programmer-tips.json');
                console.log(this.st.cards);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    play() {
        Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"])('Play');
    }
}
ProgrammerTipsComponent.ɵfac = function ProgrammerTipsComponent_Factory(t) { return new (t || ProgrammerTipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
ProgrammerTipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProgrammerTipsComponent, selectors: [["app-programmer-tips"]], decls: 7, vars: 2, consts: [[1, "container", "programmer-tips"], [1, "row"], ["class", "col-12  col-sm-12  col-md-6  col-lg-4  col-xl-3", 4, "ngFor", "ngForOf"], [3, "st"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-3"], [1, "card", "mb-3"], [1, "card-header"], [1, "card-body", "block-1"], [1, "card-title"], [1, "btn", "btn-success", 3, "click"], [1, "card-body", "block-2"], [1, "card-title", "big"], [1, "card-body"], [1, "card-subtitle", "text-muted"], ["src", "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E", "alt", "Card image", 2, "height", "200px", "width", "100%", "display", "block"], [1, "card-text"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], ["href", "#", 1, "card-link"], [1, "card-footer", "text-muted"], [1, "card"], [1, "card-subtitle", "mb-2", "text-muted"]], template: function ProgrammerTipsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProgrammerTipsComponent_div_4_Template, 47, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-extra-alert", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-clan-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.st.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("st", ctx.st.alert);
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_7__["ExtraAlertComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_8__["ClanFooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 6em;\n}\n\n.btn[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n\n.block-1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 0;\n}\n\n.big[_ngcontent-%COMP%] {\n  font-size: 5em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvcHJvZ3JhbW1lci10aXBzL0Q6XFxwcm9qZWN0c1xccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxwYWdlc1xccHJvZ3JhbW1lci10aXBzXFxwcm9ncmFtbWVyLXRpcHMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL3Byb2dyYW1tZXItdGlwcy9wcm9ncmFtbWVyLXRpcHMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL3Byb2dyYW1tZXItdGlwcy9wcm9ncmFtbWVyLXRpcHMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYWluXG4uY29udGFpbmVyXG4gIG1hcmdpbi10b3A6IDZlbSAvLyAhISEgZHVwbGljYXRlIGluIG1hbnkgcGFnZXNcblxuLy8gcmF3XG4uYnRuLCBwXG4gICAgbWFyZ2luOiAxZW1cbi5ibG9jay0xXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgcGFkZGluZy1ib3R0b206IDBcblxuLmJpZ1xuICAgIGZvbnQtc2l6ZTogNWVtXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNmVtO1xufVxuXG4uYnRuLCBwIHtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5ibG9jay0xIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmJpZyB7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgrammerTipsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-programmer-tips',
                templateUrl: './programmer-tips.component.html',
                styleUrls: ['./programmer-tips.component.sass']
            }]
    }], function () { return [{ type: _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FreeSoundsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeSoundsComponent", function() { return FreeSoundsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");





function FreeSoundsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", one_r20.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", one_r20.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](one_r20.description);
} }
class FreeSoundsComponent {
    constructor() {
        this.place = 'assets/js-clan/img/sources/free-sounds/';
        this.list = [
            {
                link: 'https://freesound.org/',
                img: this.place + 'freesound.jpg',
                description: 'freesound.org'
            },
            {
                link: 'https://www.zapsplat.com/sound-effect-category/carts-and-trolleys/',
                img: this.place + 'ZapSplat.jpg',
                description: 'ZapSplat.com'
            },
            {
                link: 'https://ru.audiomicro.com/besplatno-zvukovie-effekti/svobodnoy-industrialnoy-i-oborudovanie',
                img: this.place + 'audiomicro.jpg',
                description: 'ru.audiomicro.com'
            },
            {
                link: 'https://www.musicradar.com/news/sampleradar-244-free-big-impact-samples',
                img: this.place + 'musicradar.jpg',
                description: 'musicradar.com'
            },
            {
                link: 'https://www.looperman.com/loops/tags/royalty-free-sound-effect-loops-samples-sounds-wavs-download',
                img: this.place + 'looperman.jpg',
                description: 'looperman.com'
            },
            {
                link: 'https://www.producerloops.com/download-royalty-free-loops-and-samples/index3.html?a=1&sort=add_date&sort_direction=1',
                img: this.place + 'producerloops.jpg',
                description: 'producerloops.com'
            },
            {
                link: 'https://soundcloud.com/search?q=Creative%20Commons%20drum',
                img: this.place + 'soundcloud.jpg',
                description: 'soundcloud.com | Creative Commons'
            },
        ];
    }
    ngOnInit() {
    }
}
FreeSoundsComponent.ɵfac = function FreeSoundsComponent_Factory(t) { return new (t || FreeSoundsComponent)(); };
FreeSoundsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FreeSoundsComponent, selectors: [["app-free-sounds"]], decls: 6, vars: 1, consts: [[1, "container", "lessons-content"], [1, "row"], ["class", "one", 4, "ngFor", "ngForOf"], [1, "one"], ["target", "_blank", 3, "href"], ["alt", "pixabay", 3, "src"]], template: function FreeSoundsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FreeSoundsComponent_div_4_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-clan-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_3__["ClanFooterComponent"]], styles: ["img[_ngcontent-%COMP%] {\n  max-width: 20em;\n}\n\n.one[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvc291cmNlcy9mcmVlLXNvdW5kcy9EOlxccHJvamVjdHNcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAanMtY2xhblxccGFnZXNcXHNvdXJjZXNcXGZyZWUtc291bmRzXFxmcmVlLXNvdW5kcy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvc291cmNlcy9mcmVlLXNvdW5kcy9mcmVlLXNvdW5kcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvc291cmNlcy9mcmVlLXNvdW5kcy9mcmVlLXNvdW5kcy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyBcbiAgICBtYXgtd2lkdGg6IDIwZW1cblxuLm9uZVxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgIG1hcmdpbjogMWVtIiwiaW1nIHtcbiAgbWF4LXdpZHRoOiAyMGVtO1xufVxuXG4ub25lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDFlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FreeSoundsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-free-sounds',
                templateUrl: './free-sounds.component.html',
                styleUrls: ['./free-sounds.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.ts ***!
  \******************************************************************************************/
/*! exports provided: VideoSamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSamplesComponent", function() { return VideoSamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");





function VideoSamplesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", one_r18.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", one_r18.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](one_r18.description);
} }
class VideoSamplesComponent {
    constructor() {
        this.place = 'assets/js-clan/img/sources/video-samples/';
        this.list = [
            {
                link: 'https://pixabay.com/videos/search/?pagi=4',
                img: this.place + 'pixabay.jpg',
                description: 'pixabay.com'
            },
            {
                link: 'https://www.videvo.net/free-stock-footage/sort/popular/',
                img: this.place + 'videvo.jpg',
                description: 'videvo.net'
            },
            {
                link: 'https://www.pexels.com/search/videos/tech/',
                img: this.place + 'pexels.jpg',
                description: 'pexels.com'
            },
        ];
    }
    ngOnInit() {
    }
}
VideoSamplesComponent.ɵfac = function VideoSamplesComponent_Factory(t) { return new (t || VideoSamplesComponent)(); };
VideoSamplesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoSamplesComponent, selectors: [["app-video-samples"]], decls: 6, vars: 1, consts: [[1, "container", "lessons-content"], [1, "row"], ["class", "one", 4, "ngFor", "ngForOf"], [1, "one"], ["target", "_blank", 3, "href"], ["alt", "pixabay", 3, "src"]], template: function VideoSamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VideoSamplesComponent_div_4_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-clan-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_3__["ClanFooterComponent"]], styles: ["img[_ngcontent-%COMP%] {\n  max-width: 20em;\n}\n\n.one[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvc291cmNlcy92aWRlby1zYW1wbGVzL0Q6XFxwcm9qZWN0c1xccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxwYWdlc1xcc291cmNlc1xcdmlkZW8tc2FtcGxlc1xcdmlkZW8tc2FtcGxlcy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvc291cmNlcy92aWRlby1zYW1wbGVzL3ZpZGVvLXNhbXBsZXMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL3NvdXJjZXMvdmlkZW8tc2FtcGxlcy92aWRlby1zYW1wbGVzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIFxuICAgIG1heC13aWR0aDogMjBlbVxuXG4ub25lXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgbWFyZ2luOiAxZW0iLCJpbWcge1xuICBtYXgtd2lkdGg6IDIwZW07XG59XG5cbi5vbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMWVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoSamplesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-samples',
                templateUrl: './video-samples.component.html',
                styleUrls: ['./video-samples.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/students/students.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/students/students.component.ts ***!
  \************************************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StudentsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
StudentsComponent.ɵfac = function StudentsComponent_Factory(t) { return new (t || StudentsComponent)(); };
StudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentsComponent, selectors: [["app-students"]], decls: 2, vars: 0, template: function StudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "students works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL3N0dWRlbnRzL3N0dWRlbnRzLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-students',
                templateUrl: './students.component.html',
                styleUrls: ['./students.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TrainingApparatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingApparatusComponent", function() { return TrainingApparatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@common-dependencies/components/general/extra-alert/extra-alert.component */ "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");










function TrainingApparatusComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Card header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0416\u043C\u0438 \u043A\u043D\u043E\u043F\u043A\u0443!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrainingApparatusComponent_div_4_Template_a_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.play(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "PLAY !!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Special title treatment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Support card subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Some quick example text to build on the card title and make up the bulk of the card's content.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Cras justo odio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Dapibus ac facilisis in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Vestibulum at eros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Card link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Another link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " 2 days ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Card title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Card subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Some quick example text to build on the card title and make up the bulk of the card's content.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Card link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Another link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", "{", " ", "}", "");
} }
class TrainingApparatusComponent {
    constructor(api) {
        this.api = api;
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.st.cards = yield this.api.getJson('/js-clan/data/training-apparatus.json');
                console.log(this.st.cards);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    play() {
        Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_2__["log"])('Play');
    }
}
TrainingApparatusComponent.ɵfac = function TrainingApparatusComponent_Factory(t) { return new (t || TrainingApparatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
TrainingApparatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrainingApparatusComponent, selectors: [["app-training-apparatus"]], decls: 7, vars: 2, consts: [[1, "container", "training-apparatus"], [1, "row"], ["class", "col-12  col-sm-12  col-md-6  col-lg-4  col-xl-3", 4, "ngFor", "ngForOf"], [3, "st"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-3"], [1, "card", "mb-3"], [1, "card-header"], [1, "card-body", "block-1"], [1, "card-title"], [1, "btn", "btn-success", 3, "click"], [1, "card-body", "block-2"], [1, "card-title", "big"], [1, "card-body"], [1, "card-subtitle", "text-muted"], ["src", "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E", "alt", "Card image", 2, "height", "200px", "width", "100%", "display", "block"], [1, "card-text"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], ["href", "#", 1, "card-link"], [1, "card-footer", "text-muted"], [1, "card"], [1, "card-subtitle", "mb-2", "text-muted"]], template: function TrainingApparatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TrainingApparatusComponent_div_4_Template, 47, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-extra-alert", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-clan-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.st.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("st", ctx.st.alert);
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_7__["ExtraAlertComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_8__["ClanFooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 6em;\n}\n\n.btn[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n\n.block-1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 0;\n}\n\n.big[_ngcontent-%COMP%] {\n  font-size: 5em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvdHJhaW5pbmctYXBwYXJhdHVzL0Q6XFxwcm9qZWN0c1xccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxwYWdlc1xcdHJhaW5pbmctYXBwYXJhdHVzXFx0cmFpbmluZy1hcHBhcmF0dXMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL3RyYWluaW5nLWFwcGFyYXR1cy90cmFpbmluZy1hcHBhcmF0dXMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL3RyYWluaW5nLWFwcGFyYXR1cy90cmFpbmluZy1hcHBhcmF0dXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYWluXG4uY29udGFpbmVyXG4gIG1hcmdpbi10b3A6IDZlbSAvLyAhISEgZHVwbGljYXRlIGluIG1hbnkgcGFnZXNcblxuLy8gcmF3XG4uYnRuLCBwXG4gICAgbWFyZ2luOiAxZW1cbi5ibG9jay0xXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgcGFkZGluZy1ib3R0b206IDBcblxuLmJpZ1xuICAgIGZvbnQtc2l6ZTogNWVtXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNmVtO1xufVxuXG4uYnRuLCBwIHtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5ibG9jay0xIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmJpZyB7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TrainingApparatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-training-apparatus',
                templateUrl: './training-apparatus.component.html',
                styleUrls: ['./training-apparatus.component.sass']
            }]
    }], function () { return [{ type: _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WantMoreLessonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WantMoreLessonsComponent", function() { return WantMoreLessonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");




class WantMoreLessonsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
WantMoreLessonsComponent.ɵfac = function WantMoreLessonsComponent_Factory(t) { return new (t || WantMoreLessonsComponent)(); };
WantMoreLessonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WantMoreLessonsComponent, selectors: [["app-want-more-lessons"]], decls: 7, vars: 0, consts: [[1, "container", "lessons-content"], [1, "row"], [1, "\u0441"]], template: function WantMoreLessonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0422\u0432\u0456\u0439 \u0433\u043E\u043B\u043E\u0441 \u0432\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u043E!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-clan-footer");
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_2__["ClanFooterComponent"]], styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  margin-top: 6em;\n}\n.\u0441[_ngcontent-%COMP%] {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvd2FudC1tb3JlLWxlc3NvbnMvd2FudC1tb3JlLWxlc3NvbnMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL3dhbnQtbW9yZS1sZXNzb25zL0Q6XFxwcm9qZWN0c1xccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxwYWdlc1xcd2FudC1tb3JlLWxlc3NvbnNcXHdhbnQtbW9yZS1sZXNzb25zLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGVBQUE7QURFRjtBQ0RBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBRElGIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvd2FudC1tb3JlLWxlc3NvbnMvd2FudC1tb3JlLWxlc3NvbnMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNmVtO1xufVxuXG4u0YEge1xuICBtYXJnaW46IDFlbSBhdXRvIDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLmNvbnRhaW5lclxuICBtYXJnaW4tdG9wOiA2ZW1cbi7RgVxuICBtYXJnaW46IDFlbSBhdXRvIDJlbSBhdXRvXG4gIHRleHQtYWxpZ246IGNlbnRlciAgXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WantMoreLessonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-want-more-lessons',
                templateUrl: './want-more-lessons.component.html',
                styleUrls: ['./want-more-lessons.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@modules/@js-clan/services/api-js-clan.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@modules/@js-clan/services/api-js-clan.service.ts ***!
  \*******************************************************************/
/*! exports provided: ApiJsClanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiJsClanService", function() { return ApiJsClanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
const back = '.'; // 'http://localhost'
class ApiJsClanService {
    constructor(http) {
        this.http = http;
        this.voteForLessons = () => this.http.get(back + '/vote-for-lessons').toPromise();
    }
}
ApiJsClanService.ɵfac = function ApiJsClanService_Factory(t) { return new (t || ApiJsClanService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiJsClanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiJsClanService, factory: ApiJsClanService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiJsClanService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~modules-authentication-authentication-module~modules-js-clan-js-clan-module-es2015.js.map