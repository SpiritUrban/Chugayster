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
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r52.card.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r52.urlSafe, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r52.card.description[ctx_r52.st.lang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r52.card.text[ctx_r52.st.lang]);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".flip-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n.flip-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  -webkit-transition: -webkit-transform 0.6s;\n  transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  transition: transform 0.6s, -webkit-transform 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] {\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.flip-card-back[_ngcontent-%COMP%] {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  position: absolute;\n  top: 0;\n}\n\n.card-img-2[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  display: block;\n  background-size: cover;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.18);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9mbGlwLWNhcmQtdmlkZW8vRDpcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAanMtY2xhblxcY29tcG9uZW50c1xcZmxpcC1jYXJkLXZpZGVvXFxmbGlwLWNhcmQtdmlkZW8uY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL2NvbXBvbmVudHMvZmxpcC1jYXJkLXZpZGVvL2ZsaXAtY2FyZC12aWRlby5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ0RGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtFQUFBLDBCQUFBO0VBQUEsa0RBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURFQTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDRUY7O0FERUE7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0VGOztBREFBO0VBRUksK0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL2NvbXBvbmVudHMvZmxpcC1jYXJkLXZpZGVvL2ZsaXAtY2FyZC12aWRlby5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBmbGlwLWNhcmRcclxuLmZsaXAtY2FyZFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XHJcbiAgcGVyc3BlY3RpdmU6IDEwMDBweFxyXG5cclxuLmZsaXAtY2FyZC1pbm5lclxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gIHdpZHRoOiAxMDAlXHJcbiAgaGVpZ2h0OiAxMDAlXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnNcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkXHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpXHJcblxyXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXJcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKVxyXG5cclxuLmZsaXAtY2FyZC1mcm9udCwgLmZsaXAtY2FyZC1iYWNrXHJcbiAgaGVpZ2h0OiAxMDAlXHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuXHJcblxyXG4uZmxpcC1jYXJkLWZyb250XHJcblxyXG4uZmxpcC1jYXJkLWJhY2tcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKVxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gIHRvcDogMFxyXG5cclxuLmNhcmQtaW1nLTJcclxuICBoZWlnaHQ6IDIwMHB4XHJcbiAgd2lkdGg6IDEwMCVcclxuICBkaXNwbGF5OiBibG9ja1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXJcclxuXHJcbi5jYXJkLWJvZHkgXHJcbiAgICAvLyBwYWRkaW5nOiAxLjI1cmVtICAxLjI1cmVtICAwICAxLjI1cmVtICBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCkiLCIuZmxpcC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbi5mbGlwLWNhcmQtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFjayB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uZmxpcC1jYXJkLWJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi5jYXJkLWltZy0yIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn0iXX0= */"] });
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
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r51.card.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.card.title[ctx_r51.st.lang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r51.card.img + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.card.description[ctx_r51.st.lang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0423\u0440\u043E\u043A: ", ctx_r51.card.number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.card.text[ctx_r51.st.lang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r51.card.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0423\u0440\u043E\u043A: ", ctx_r51.card.number, "");
} }
class FlipCardComponent {
    constructor() {
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
    }
}
FlipCardComponent.ɵfac = function FlipCardComponent_Factory(t) { return new (t || FlipCardComponent)(); };
FlipCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlipCardComponent, selectors: [["app-flip-card"]], inputs: { card: "card" }, decls: 1, vars: 1, consts: [["class", "flip-card", 3, "routerLink", 4, "ngIf"], [1, "flip-card", 3, "routerLink"], [1, "flip-card-inner"], [1, "card", "mb-3", "flip-card-front"], [1, "card-header"], ["alt", "Card image", 1, "card-img-2"], [1, "card-body"], [1, "card-text"], [1, "card-footer", "text-muted"], [1, "card", "mb-3", "flip-card-back"], [1, "btn", "btn-success", 3, "routerLink"]], template: function FlipCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FlipCardComponent_div_0_Template, 20, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.number);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".flip-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n.flip-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  -webkit-transition: -webkit-transform 0.6s;\n  transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  transition: transform 0.6s, -webkit-transform 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] {\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.flip-card-back[_ngcontent-%COMP%] {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  position: absolute;\n  top: 0;\n}\n\n.card-img-2[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  display: block;\n  background-size: cover;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.18);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9mbGlwLWNhcmQvRDpcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAanMtY2xhblxcY29tcG9uZW50c1xcZmxpcC1jYXJkXFxmbGlwLWNhcmQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL2NvbXBvbmVudHMvZmxpcC1jYXJkL2ZsaXAtY2FyZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ0RGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtFQUFBLDBCQUFBO0VBQUEsa0RBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURFQTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDRUY7O0FERUE7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0VGOztBREFBO0VBRUksK0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL2NvbXBvbmVudHMvZmxpcC1jYXJkL2ZsaXAtY2FyZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBmbGlwLWNhcmRcclxuLmZsaXAtY2FyZFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XHJcbiAgcGVyc3BlY3RpdmU6IDEwMDBweFxyXG5cclxuLmZsaXAtY2FyZC1pbm5lclxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gIHdpZHRoOiAxMDAlXHJcbiAgaGVpZ2h0OiAxMDAlXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnNcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkXHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpXHJcblxyXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXJcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKVxyXG5cclxuLmZsaXAtY2FyZC1mcm9udCwgLmZsaXAtY2FyZC1iYWNrXHJcbiAgaGVpZ2h0OiAxMDAlXHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuXHJcblxyXG4uZmxpcC1jYXJkLWZyb250XHJcblxyXG4uZmxpcC1jYXJkLWJhY2tcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKVxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gIHRvcDogMFxyXG5cclxuLmNhcmQtaW1nLTJcclxuICBoZWlnaHQ6IDIwMHB4XHJcbiAgd2lkdGg6IDEwMCVcclxuICBkaXNwbGF5OiBibG9ja1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXJcclxuXHJcbi5jYXJkLWJvZHkgXHJcbiAgICAvLyBwYWRkaW5nOiAxLjI1cmVtICAxLjI1cmVtICAwICAxLjI1cmVtICBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCkiLCIuZmxpcC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbi5mbGlwLWNhcmQtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFjayB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uZmxpcC1jYXJkLWJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi5jYXJkLWltZy0yIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn0iXX0= */"] });
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
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  background: #2d2d2d url(/assets/js-clan/img/bg.png) repeat;\n  border-top: 0.2em solid #1f1f1f;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  bottom: 0;\n  margin-top: -1.7em;\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9nZW5lcmFsL2NsYW4tZm9vdGVyL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXGNvbXBvbmVudHNcXGdlbmVyYWxcXGNsYW4tZm9vdGVyXFxjbGFuLWZvb3Rlci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9nZW5lcmFsL2NsYW4tZm9vdGVyL2NsYW4tZm9vdGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMERBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDQ0Q7QURBQztFQUNDLGdCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9jb21wb25lbnRzL2dlbmVyYWwvY2xhbi1mb290ZXIvY2xhbi1mb290ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJcclxuXHRiYWNrZ3JvdW5kOiAjMmQyZDJkIHVybCgvYXNzZXRzL2pzLWNsYW4vaW1nL2JnLnBuZykgcmVwZWF0XHJcblx0Ym9yZGVyLXRvcDogMC4yZW0gc29saWQgIzFmMWYxZlxyXG5cdHRleHQtYWxpZ246IGNlbnRlclxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZVxyXG5cdHdpZHRoOiAxMDAlXHJcblx0Ym90dG9tOiAwXHJcblx0bWFyZ2luLXRvcDogLTEuN2VtXHJcblx0cFxyXG5cdFx0bWFyZ2luLWJvdHRvbTogMCIsImZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMyZDJkMmQgdXJsKC9hc3NldHMvanMtY2xhbi9pbWcvYmcucG5nKSByZXBlYXQ7XG4gIGJvcmRlci10b3A6IDAuMmVtIHNvbGlkICMxZjFmMWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAtMS43ZW07XG59XG5mb290ZXIgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"] });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/auth/profile"]; };
const _c2 = function () { return ["/members"]; };
const _c3 = function () { return ["/lessons"]; };
const _c4 = function () { return ["/health"]; };
const _c5 = function () { return ["/programmer-tips"]; };
class NavComponent {
    constructor() {
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
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 25, vars: 12, consts: [[1, "p"], ["href", "https://js-clan.com", 1, "logo"], ["src", "assets/js-clan/img/js-clan.svg", "alt", "js-clan"], [1, "led", 2, "--left", "70%", "--top", "20%"], [1, "led", 2, "--left", "68%", "--top", "37%"], [1, "led", 2, "--left", "67%", "--top", "55%"], [1, "led", 2, "--left", "78%", "--top", "12%"], [1, "led", 2, "--left", "76%", "--top", "41%"], [1, "header-right"], [1, "nav"], [3, "routerLink"], [1, "hamburger"], ["aria-hidden", "true", 1, "mdi", "mdi-menu"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "MEMBERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lessons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Health");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Programmer tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["header[_ngcontent-%COMP%] {\n  -webkit-transition: 1s;\n  transition: 1s;\n  background: #00131d;\n  border-top: 0.2em solid #1f1f1f;\n  overflow: hidden;\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  z-index: 100;\n}\n\n.header-hide[_ngcontent-%COMP%] {\n  top: -10em;\n}\n\n.logo[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: relative;\n}\n\n.logo[_ngcontent-%COMP%]    > .led[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  right: 30%;\n  width: 0.2em;\n  height: 0.2em;\n  border-radius: 1em;\n  background: #56ff56;\n  background: blue;\n  z-index: 2000;\n  top: var(--top);\n  left: var(--left);\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes example {\n  0% {\n    background: #03A9F4;\n  }\n  50% {\n    background: black;\n  }\n  100% {\n    background: #56ff56;\n  }\n}\n\n@keyframes example {\n  0% {\n    background: #03A9F4;\n  }\n  50% {\n    background: black;\n  }\n  100% {\n    background: #56ff56;\n  }\n}\n\n.p[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\nheader[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0.3em auto;\n  position: relative;\n}\n\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 18em;\n}\n\n.header-right[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 12;\n  width: 60%;\n  width: 75%;\n  min-width: 150px;\n  height: 100px;\n  right: 0;\n  top: 0.2em;\n}\n\n.header-right[_ngcontent-%COMP%]:before {\n  position: absolute;\n  z-index: -1;\n  content: url(/assets/js-clan/img/header/header-code.svg);\n  right: 0;\n  top: 0;\n  width: 60%;\n  opacity: 0.05;\n}\n\n.header-mobile[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n@media only screen and (max-width: 600px) {\n  .logo[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n\n\n\n.languages[_ngcontent-%COMP%] {\n  text-align: right;\n  z-index: 3000;\n}\n\n.languages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 0.5em;\n  background: #404040;\n  background: #2e3742;\n  padding: 0.25em 0.5em;\n  border-radius: 1em;\n  border: #585858 solid 1px;\n  box-shadow: 0 0.25em 0.45em rgba(0, 0, 0, 0.2);\n}\n\n.languages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n\n\nnav[_ngcontent-%COMP%] {\n  position: fixed;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  height: inherit;\n  overflow: hidden;\n  -webkit-transition-duration: 1.5s;\n          transition-duration: 1.5s;\n  padding-right: 1em;\n  height: 3em;\n  top: 1.8em;\n  top: 2.5em;\n  right: 4%;\n  width: 55%;\n}\n\n.nav-hide[_ngcontent-%COMP%] {\n  top: -16em;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0.25em 0.25em 0.25em 0.5em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 0.5em;\n  padding: 0.5em;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: \"{ \" !important;\n  color: gray;\n}\n\nnav a:after {\n  content: \" }\" !important;\n  color: gray;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #b12a34;\n  color: white;\n  opacity: 1;\n}\n\n.nav-mobile[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  background: #2d2d2d url(/assets/js-clan/img/bg.png) repeat;\n  border-bottom: 0.2em solid #1f1f1f;\n  height: 20em;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  -webkit-transition-duration: 1.5s;\n          transition-duration: 1.5s;\n  padding: 2em 1em;\n  display: block;\n  text-align: center;\n}\n\n.nav-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  background: rgba(255, 255, 255, 0.07);\n  cursor: pointer;\n  margin: 1em 0;\n}\n\n.nav-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n@media only screen and (max-width: 600px) {\n  nav[_ngcontent-%COMP%] {\n    top: -50em;\n  }\n}\n\n.hamburger[_ngcontent-%COMP%] {\n  z-index: 101;\n  display: none;\n  position: absolute;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-weight: 600;\n  font-size: 2em;\n  border-radius: 0.2em;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0.35em;\n  top: 1em;\n  top: 0.2em;\n  right: -0.5em;\n  text-align: center;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n}\n\n.hamburger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 0.4em;\n  line-height: 0.25em;\n  width: 1.3em;\n  border-radius: 0.5em;\n  font-size: 1.5em;\n}\n\n.hamburger[_ngcontent-%COMP%]:hover {\n  background: black;\n  background: #b12a34;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 600px) {\n  .hamburger[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n  }\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9nZW5lcmFsL25hdi9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxjb21wb25lbnRzXFxnZW5lcmFsXFxuYXZcXG5hdi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9nZW5lcmFsL25hdi9uYXYuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxzQkFBQTtFQUFBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxVQUFBO0FDRUQ7O0FEQUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7QUNHRDs7QURGQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNHRjs7QUREQTtFQUNDO0lBQ0MsbUJBQUE7RUNJQTtFREZEO0lBQ0MsaUJBQUE7RUNJQTtFREZEO0lBQ0MsbUJBQUE7RUNJQTtBQUNGOztBRGJBO0VBQ0M7SUFDQyxtQkFBQTtFQ0lBO0VERkQ7SUFDQyxpQkFBQTtFQ0lBO0VERkQ7SUFDQyxtQkFBQTtFQ0lBO0FBQ0Y7O0FERkE7RUFDQyxvQkFBQTtFQUFBLGFBQUE7QUNJRDs7QUREQztFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FESEM7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNLRjs7QURIQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNNRDs7QURMQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdEQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ09GOztBRExBO0VBQ0MsYUFBQTtBQ1FEOztBRE5BO0VBQ0M7SUFDQyxVQUFBO0VDU0E7O0VEUkQ7SUFDQyxlQUFBO0VDV0E7QUFDRjs7QURWQSxpQkFBQTs7QUFFQTtFQUNDLGlCQUFBO0VBQ0EsYUFBQTtBQ1dEOztBRFZDO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFFQSw4Q0FBQTtBQ1lGOztBRFhFO0VBQ0MsWUFBQTtBQ2FIOztBRFhBLFdBQUE7O0FBRUE7RUFDQyxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2FEOztBRFhBO0VBQ0MsVUFBQTtBQ2NEOztBREpDO0VBQ0Msa0NBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNPRjs7QURORTtFQUNDLHdCQUFBO0VBQ0EsV0FBQTtBQ1FIOztBRFBFO0VBQ0Msd0JBQUE7RUFDQSxXQUFBO0FDU0g7O0FEUkU7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNVSDs7QUROQTtFQUNDLE1BQUE7RUFDQSxPQUFBO0VBQ0EsMERBQUE7RUFHQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNPRDs7QUROQztFQUNDLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ1FGOztBRFBFO0VBQ0Msb0NBQUE7QUNTSDs7QURKQTtFQUNDO0lBQ0MsVUFBQTtFQ09BO0FBQ0Y7O0FETkE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FDUUQ7O0FEUEM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRFJDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNVRjs7QURSQTtFQUNDO0lBQ0Msb0JBQUE7SUFBQSxhQUFBO0VDV0E7QUFDRjs7QURSQTtFQUNDLGFBQUE7QUNVRCIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL2NvbXBvbmVudHMvZ2VuZXJhbC9uYXYvbmF2LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyXHJcblx0dHJhbnNpdGlvbjogMXNcclxuXHRiYWNrZ3JvdW5kOiAjMDAxMzFkXHJcblx0Ym9yZGVyLXRvcDogMC4yZW0gc29saWQgIzFmMWYxZlxyXG5cdG92ZXJmbG93OiBoaWRkZW5cclxuXHRwb3NpdGlvbjogZml4ZWRcclxuXHR3aWR0aDogMTAwdndcclxuXHR0b3A6IDBcclxuXHR6LWluZGV4OiAxMDBcclxuXHJcbi5oZWFkZXItaGlkZVxyXG5cdHRvcDogLTEwZW1cclxuXHJcbi5sb2dvXHJcblx0ei1pbmRleDogMTBcclxuXHRwb3NpdGlvbjogcmVsYXRpdmVcclxuXHQ+IC5sZWRcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG5cdFx0dG9wOiA0MCVcclxuXHRcdHJpZ2h0OiAzMCVcclxuXHRcdHdpZHRoOiAuMmVtXHJcblx0XHRoZWlnaHQ6IC4yZW1cclxuXHRcdGJvcmRlci1yYWRpdXM6IDFlbVxyXG5cdFx0YmFja2dyb3VuZDogIzU2ZmY1NlxyXG5cdFx0YmFja2dyb3VuZDogYmx1ZVxyXG5cclxuXHRcdHotaW5kZXg6IDIwMDBcclxuXHRcdHRvcDogdmFyKC0tdG9wKVxyXG5cdFx0bGVmdDogdmFyKC0tbGVmdClcclxuXHRcdGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlXHJcblx0XHRhbmltYXRpb24tZHVyYXRpb246IDRzXHJcblx0XHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZVxyXG5cclxuQGtleWZyYW1lcyBleGFtcGxlXHJcblx0MCVcclxuXHRcdGJhY2tncm91bmQ6ICMwM0E5RjRcclxuXHJcblx0NTAlXHJcblx0XHRiYWNrZ3JvdW5kOiBibGFja1xyXG5cclxuXHQxMDAlXHJcblx0XHRiYWNrZ3JvdW5kOiAjNTZmZjU2XHJcblxyXG5cclxuLnBcclxuXHRkaXNwbGF5OiBmbGV4XHJcblxyXG5oZWFkZXJcclxuXHQucFxyXG5cdFx0d2lkdGg6IDkwJVxyXG5cdFx0bWFyZ2luOiAuM2VtIGF1dG9cclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZVxyXG5cdGltZ1xyXG5cdFx0ZGlzcGxheTogYmxvY2tcclxuXHRcdHdpZHRoOiAxMDAlXHJcblx0XHRtaW4td2lkdGg6IDE4ZW1cclxuXHJcbi5oZWFkZXItcmlnaHRcclxuXHRwb3NpdGlvbjogYWJzb2x1dGVcclxuXHR6LWluZGV4OiAxMlxyXG5cdHdpZHRoOiA2MCVcclxuXHR3aWR0aDogNzUlXHJcblx0bWluLXdpZHRoOiAxNTBweFxyXG5cdGhlaWdodDogMTAwcHhcclxuXHRyaWdodDogMFxyXG5cdHRvcDogLjJlbVxyXG5cdCY6YmVmb3JlXHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGVcclxuXHRcdHotaW5kZXg6IC0xXHJcblx0XHRjb250ZW50OiB1cmwoL2Fzc2V0cy9qcy1jbGFuL2ltZy9oZWFkZXIvaGVhZGVyLWNvZGUuc3ZnKVxyXG5cdFx0cmlnaHQ6IDBcclxuXHRcdHRvcDogMFxyXG5cdFx0d2lkdGg6IDYwJVxyXG5cdFx0b3BhY2l0eTogLjA1XHJcblxyXG4uaGVhZGVyLW1vYmlsZVxyXG5cdGhlaWdodDogMTAwdmhcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXHJcblx0LmxvZ29cclxuXHRcdHdpZHRoOiA4MCVcclxuXHRoZWFkZXIgaW1nXHJcblx0XHRtaW4td2lkdGg6IDEwMCUgICAgXHJcblxyXG4vKiBcclxuXHQqKlx0bGFuZ3VhZ2VzXHJcbi5sYW5ndWFnZXNcclxuXHR0ZXh0LWFsaWduOiByaWdodFxyXG5cdHotaW5kZXg6IDMwMDBcclxuXHRhXHJcblx0XHRtYXJnaW46IDAgLjVlbVxyXG5cdFx0YmFja2dyb3VuZDogIzQwNDA0MFxyXG5cdFx0YmFja2dyb3VuZDogIzJlMzc0MlxyXG5cdFx0cGFkZGluZzogLjI1ZW0gLjVlbVxyXG5cdFx0Ym9yZGVyLXJhZGl1czogMWVtXHJcblx0XHRib3JkZXI6ICM1ODU4NTggc29saWQgMXB4XHJcblx0XHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMC4yNWVtIDAuNDVlbSByZ2JhKDAsIDAsIDAsIDAuMilcclxuXHRcdGJveC1zaGFkb3c6IDAgMC4yNWVtIDAuNDVlbSByZ2JhKDAsIDAsIDAsIDAuMilcclxuXHRcdCY6aG92ZXJcclxuXHRcdFx0Y29sb3I6IHdoaXRlXHJcblxyXG4vKiBcclxuXHQqKlx0bmF2XHJcbm5hdlxyXG5cdHBvc2l0aW9uOiBmaXhlZFxyXG5cdGRpc3BsYXk6IGZsZXhcclxuXHRmbGV4LXdyYXA6IHdyYXBcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXHJcblx0aGVpZ2h0OiBpbmhlcml0XHJcblx0b3ZlcmZsb3c6IGhpZGRlblxyXG5cdHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXNcclxuXHRwYWRkaW5nLXJpZ2h0OiAxZW1cclxuXHRoZWlnaHQ6IDNlbVxyXG5cdHRvcDogMS44ZW1cclxuXHR0b3A6IDIuNWVtXHJcblx0cmlnaHQ6IDQlXHJcblx0d2lkdGg6IDU1JVxyXG5cclxuLm5hdi1oaWRlXHJcblx0dG9wOiAtMTZlbVxyXG5cclxubmF2XHJcblx0Ly8gJjpob3ZlciAgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4gT1BFTiAhISFcclxuXHQvLyBcdGJhY2tncm91bmQ6ICMwMDEzMWRcclxuXHQvLyBcdHBhZGRpbmctcmlnaHQ6IDFlbVxyXG5cdC8vIFx0cGFkZGluZy1ib3R0b206IC4yNWVtXHJcblx0Ly8gXHRib3JkZXItYm90dG9tOiAwLjJlbSBzb2xpZCAjMWYxZjFmXHJcblx0Ly8gXHRoZWlnaHQ6IDEwZW1cclxuXHQvLyBcdHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXNcclxuXHRhXHJcblx0XHRtYXJnaW46IC4yNWVtIC4yNWVtIC4yNWVtIC41ZW1cclxuXHRcdHdpZHRoOiBmaXQtY29udGVudFxyXG5cdFx0Ym9yZGVyLXJhZGl1czogLjVlbVxyXG5cdFx0cGFkZGluZzogLjVlbVxyXG5cdFx0JjpiZWZvcmVcclxuXHRcdFx0Y29udGVudDogJ3sgJyAhaW1wb3J0YW50XHJcblx0XHRcdGNvbG9yOiBncmF5XHJcblx0XHQmOmFmdGVyXHJcblx0XHRcdGNvbnRlbnQ6ICcgfScgIWltcG9ydGFudFxyXG5cdFx0XHRjb2xvcjogZ3JheVxyXG5cdFx0Jjpob3ZlclxyXG5cdFx0XHRjb2xvcjogI2IxMmEzNFxyXG5cdFx0XHRjb2xvcjogd2hpdGVcclxuXHRcdFx0b3BhY2l0eTogMVxyXG5cclxuXHJcblxyXG4ubmF2LW1vYmlsZVxyXG5cdHRvcDogMFxyXG5cdGxlZnQ6IDBcclxuXHRiYWNrZ3JvdW5kOiAjMmQyZDJkIHVybCgvYXNzZXRzL2pzLWNsYW4vaW1nL2JnLnBuZykgcmVwZWF0XHJcblx0Ly8gcGFkZGluZy1yaWdodDogMWVtXHJcblx0Ly8gcGFkZGluZy1ib3R0b206IC4yNWVtXHJcblx0Ym9yZGVyLWJvdHRvbTogMC4yZW0gc29saWQgIzFmMWYxZlxyXG5cdGhlaWdodDogMjBlbVxyXG5cdHBvc2l0aW9uOiBmaXhlZFxyXG5cdHdpZHRoOiAxMDB2d1xyXG5cdGhlaWdodDogMTAwdmhcclxuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzXHJcblx0cGFkZGluZzogMmVtIDFlbVxyXG5cdGRpc3BsYXk6IGJsb2NrXHJcblx0dGV4dC1hbGlnbjogY2VudGVyXHJcblx0YVxyXG5cdFx0d2lkdGg6IDEwMCVcclxuXHRcdGRpc3BsYXk6IGJsb2NrXHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpXHJcblx0XHRjdXJzb3I6IHBvaW50ZXJcclxuXHRcdG1hcmdpbjogMWVtIDBcclxuXHRcdCY6aG92ZXJcclxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVxyXG5cdG5hdlxyXG5cdFx0dG9wOiAtNTBlbVxyXG5cclxuLmhhbWJ1cmdlclxyXG5cdHotaW5kZXg6IDEwMVxyXG5cdGRpc3BsYXk6IG5vbmVcclxuXHRwb3NpdGlvbjogYWJzb2x1dGVcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcblx0Zm9udC13ZWlnaHQ6IDYwMFxyXG5cdGZvbnQtc2l6ZTogMmVtXHJcblx0Ym9yZGVyLXJhZGl1czogLjJlbVxyXG5cdGhlaWdodDogZml0LWNvbnRlbnRcclxuXHRwYWRkaW5nOiAuMzVlbVxyXG5cdHRvcDogMWVtXHJcblx0dG9wOiAuMmVtXHJcblx0cmlnaHQ6IC0uNWVtXHJcblx0dGV4dC1hbGlnbjogY2VudGVyXHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSlcclxuXHRpXHJcblx0XHRoZWlnaHQ6IC40ZW1cclxuXHRcdGxpbmUtaGVpZ2h0OiAuMjVlbVxyXG5cdFx0d2lkdGg6IDEuM2VtXHJcblx0XHRib3JkZXItcmFkaXVzOiAuNWVtXHJcblx0XHRmb250LXNpemU6IDEuNWVtXHJcblx0Jjpob3ZlclxyXG5cdFx0YmFja2dyb3VuZDogYmxhY2tcclxuXHRcdGJhY2tncm91bmQ6ICNiMTJhMzRcclxuXHRcdGN1cnNvcjogcG9pbnRlclxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweClcclxuXHQuaGFtYnVyZ2VyXHJcblx0XHRkaXNwbGF5OiBmbGV4XHJcblxyXG5cclxuXHJcbi5oaWRlXHJcblx0ZGlzcGxheTogbm9uZVx0XHQiLCJoZWFkZXIge1xuICB0cmFuc2l0aW9uOiAxcztcbiAgYmFja2dyb3VuZDogIzAwMTMxZDtcbiAgYm9yZGVyLXRvcDogMC4yZW0gc29saWQgIzFmMWYxZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uaGVhZGVyLWhpZGUge1xuICB0b3A6IC0xMGVtO1xufVxuXG4ubG9nbyB7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9nbyA+IC5sZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICByaWdodDogMzAlO1xuICB3aWR0aDogMC4yZW07XG4gIGhlaWdodDogMC4yZW07XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgYmFja2dyb3VuZDogIzU2ZmY1NjtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgei1pbmRleDogMjAwMDtcbiAgdG9wOiB2YXIoLS10b3ApO1xuICBsZWZ0OiB2YXIoLS1sZWZ0KTtcbiAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZDogIzAzQTlGNDtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQ6ICM1NmZmNTY7XG4gIH1cbn1cbi5wIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaGVhZGVyIC5wIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwLjNlbSBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5oZWFkZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDE4ZW07XG59XG5cbi5oZWFkZXItcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEyO1xuICB3aWR0aDogNjAlO1xuICB3aWR0aDogNzUlO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICByaWdodDogMDtcbiAgdG9wOiAwLjJlbTtcbn1cbi5oZWFkZXItcmlnaHQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgY29udGVudDogdXJsKC9hc3NldHMvanMtY2xhbi9pbWcvaGVhZGVyL2hlYWRlci1jb2RlLnN2Zyk7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA2MCU7XG4gIG9wYWNpdHk6IDAuMDU7XG59XG5cbi5oZWFkZXItbW9iaWxlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubG9nbyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIGhlYWRlciBpbWcge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuLyogKipcdGxhbmd1YWdlcyAqL1xuLmxhbmd1YWdlcyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB6LWluZGV4OiAzMDAwO1xufVxuLmxhbmd1YWdlcyBhIHtcbiAgbWFyZ2luOiAwIDAuNWVtO1xuICBiYWNrZ3JvdW5kOiAjNDA0MDQwO1xuICBiYWNrZ3JvdW5kOiAjMmUzNzQyO1xuICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgYm9yZGVyOiAjNTg1ODU4IHNvbGlkIDFweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuMjVlbSAwLjQ1ZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3gtc2hhZG93OiAwIDAuMjVlbSAwLjQ1ZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmxhbmd1YWdlcyBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiAqKlx0bmF2ICovXG5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gIGhlaWdodDogM2VtO1xuICB0b3A6IDEuOGVtO1xuICB0b3A6IDIuNWVtO1xuICByaWdodDogNCU7XG4gIHdpZHRoOiA1NSU7XG59XG5cbi5uYXYtaGlkZSB7XG4gIHRvcDogLTE2ZW07XG59XG5cbm5hdiBhIHtcbiAgbWFyZ2luOiAwLjI1ZW0gMC4yNWVtIDAuMjVlbSAwLjVlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgcGFkZGluZzogMC41ZW07XG59XG5uYXYgYTpiZWZvcmUge1xuICBjb250ZW50OiBcInsgXCIgIWltcG9ydGFudDtcbiAgY29sb3I6IGdyYXk7XG59XG5uYXYgYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIH1cIiAhaW1wb3J0YW50O1xuICBjb2xvcjogZ3JheTtcbn1cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICNiMTJhMzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm5hdi1tb2JpbGUge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICMyZDJkMmQgdXJsKC9hc3NldHMvanMtY2xhbi9pbWcvYmcucG5nKSByZXBlYXQ7XG4gIGJvcmRlci1ib3R0b206IDAuMmVtIHNvbGlkICMxZjFmMWY7XG4gIGhlaWdodDogMjBlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG4gIHBhZGRpbmc6IDJlbSAxZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmF2LW1vYmlsZSBhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMWVtIDA7XG59XG4ubmF2LW1vYmlsZSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIG5hdiB7XG4gICAgdG9wOiAtNTBlbTtcbiAgfVxufVxuLmhhbWJ1cmdlciB7XG4gIHotaW5kZXg6IDEwMTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAuMzVlbTtcbiAgdG9wOiAxZW07XG4gIHRvcDogMC4yZW07XG4gIHJpZ2h0OiAtMC41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG59XG4uaGFtYnVyZ2VyIGkge1xuICBoZWlnaHQ6IDAuNGVtO1xuICBsaW5lLWhlaWdodDogMC4yNWVtO1xuICB3aWR0aDogMS4zZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLmhhbWJ1cmdlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjYjEyYTM0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhhbWJ1cmdlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"] });
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
        _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_7__["ClanFooterComponent"], _pages_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_11__["LessonComponent"], _pages_want_more_lessons_want_more_lessons_component__WEBPACK_IMPORTED_MODULE_14__["WantMoreLessonsComponent"], _pages_members_members_component__WEBPACK_IMPORTED_MODULE_15__["MembersComponent"], _pages_students_students_component__WEBPACK_IMPORTED_MODULE_16__["StudentsComponent"], _pages_training_apparatus_training_apparatus_component__WEBPACK_IMPORTED_MODULE_17__["TrainingApparatusComponent"], _pages_health_health_component__WEBPACK_IMPORTED_MODULE_18__["HealthComponent"], _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_8__["FlipCardComponent"], _components_flip_card_video_flip_card_video_component__WEBPACK_IMPORTED_MODULE_9__["FlipCardVideoComponent"], _pages_sources_video_samples_video_samples_component__WEBPACK_IMPORTED_MODULE_19__["VideoSamplesComponent"], _pages_sources_free_sounds_free_sounds_component__WEBPACK_IMPORTED_MODULE_20__["FreeSoundsComponent"], _pages_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_21__["CabinetComponent"], _pages_programmer_tips_programmer_tips_component__WEBPACK_IMPORTED_MODULE_22__["ProgrammerTipsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
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
                    _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_7__["ClanFooterComponent"], _pages_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_11__["LessonComponent"], _pages_want_more_lessons_want_more_lessons_component__WEBPACK_IMPORTED_MODULE_14__["WantMoreLessonsComponent"], _pages_members_members_component__WEBPACK_IMPORTED_MODULE_15__["MembersComponent"], _pages_students_students_component__WEBPACK_IMPORTED_MODULE_16__["StudentsComponent"], _pages_training_apparatus_training_apparatus_component__WEBPACK_IMPORTED_MODULE_17__["TrainingApparatusComponent"], _pages_health_health_component__WEBPACK_IMPORTED_MODULE_18__["HealthComponent"], _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_8__["FlipCardComponent"], _components_flip_card_video_flip_card_video_component__WEBPACK_IMPORTED_MODULE_9__["FlipCardVideoComponent"], _pages_sources_video_samples_video_samples_component__WEBPACK_IMPORTED_MODULE_19__["VideoSamplesComponent"], _pages_sources_free_sounds_free_sounds_component__WEBPACK_IMPORTED_MODULE_20__["FreeSoundsComponent"], _pages_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_21__["CabinetComponent"], _pages_programmer_tips_programmer_tips_component__WEBPACK_IMPORTED_MODULE_22__["ProgrammerTipsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _js_clan_routing_module__WEBPACK_IMPORTED_MODULE_3__["JsClanRoutingModule"],
                    _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_5__["CommonDependenciesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
                ],
                exports: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_7__["ClanFooterComponent"]]
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
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@common-dependencies/components/general/extra-alert/extra-alert.component */ "./src/app/@modules/@common-dependencies/components/general/extra-alert/extra-alert.component.ts");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");








function CabinetComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Block: ", item_r22, " ");
} }
const _c0 = function () { return [1, 2, 3]; };
class CabinetComponent {
    constructor(api) {
        this.api = api;
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
    }
}
CabinetComponent.ɵfac = function CabinetComponent_Factory(t) { return new (t || CabinetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
CabinetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CabinetComponent, selectors: [["app-cabinet"]], decls: 10, vars: 3, consts: [[1, "container", "lessons-content"], [1, "row"], [1, "col-12"], ["class", "col-12  col-sm-12  col-md-6  col-lg-4  col-xl-3", 4, "ngFor", "ngForOf"], [3, "st"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-3"], [1, "user-info"]], template: function CabinetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Info about user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CabinetComponent_div_7_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-extra-alert", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-clan-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("st", ctx.st.alert);
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_5__["ExtraAlertComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_6__["ClanFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL2NhYmluZXQvY2FiaW5ldC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CabinetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cabinet',
                templateUrl: './cabinet.component.html',
                styleUrls: ['./cabinet.component.sass']
            }]
    }], function () { return [{ type: _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


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
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_4__["ExtraAlertComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_5__["ClanFooterComponent"], _components_flip_card_video_flip_card_video_component__WEBPACK_IMPORTED_MODULE_6__["FlipCardVideoComponent"]], styles: [".PS[_ngcontent-%COMP%] {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvaGVhbHRoL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXHBhZ2VzXFxoZWFsdGhcXGhlYWx0aC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUFNcclxuICBtYXJnaW46IDFlbSBhdXRvIDJlbSBhdXRvXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyIiwiLlBTIHtcbiAgbWFyZ2luOiAxZW0gYXV0byAyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
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
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"]], styles: ["iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 460px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbGVzc29uL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXHBhZ2VzXFxsZXNzb25cXGxlc3Nvbi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbGVzc29uL2xlc3Nvbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy9sZXNzb24vbGVzc29uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1lXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgaGVpZ2h0OiA0NjBweCIsImlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ2MHB4O1xufSJdfQ== */"] });
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
            // for (let i = 0; i < 10; i++) {
            //   this.st.cards.push(this.st.cards[0])
            // }
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
        this.st.alert.title = ':)';
        this.st.alert.body = 'Your vote counted';
        this.st.alert.show = true;
    }
    msgVoteBad() {
        this.st.alert.title = ':(';
        this.st.alert.body = 'Something wrong';
        this.st.alert.show = true;
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
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_9__["ExtraAlertComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_10__["ClanFooterComponent"], _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_11__["FlipCardComponent"]], styles: [".PS[_ngcontent-%COMP%] {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbGVzc29ucy9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxwYWdlc1xcbGVzc29uc1xcbGVzc29ucy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbGVzc29ucy9sZXNzb25zLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbGVzc29ucy9sZXNzb25zLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLlBTXHJcbiAgbWFyZ2luOiAxZW0gYXV0byAyZW0gYXV0b1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciIsIi5QUyB7XG4gIG1hcmdpbjogMWVtIGF1dG8gMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
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
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 61, vars: 0, consts: [[1, "container", "lessons-content"], [1, "row"], ["routerLink", "/common/main"], ["routerLink", "/lessons"], ["routerLink", "/members"], ["routerLink", "/training-apparatus"], ["routerLink", "/cabinet"], ["routerLink", "/programmer-tips"], ["routerLink", "/video-samples"], ["routerLink", "/free-sounds"], ["routerLink", "/auth/register"], ["routerLink", "/auth/conditions"], ["routerLink", "/auth/login"], ["href", "/all-users"], ["href", "/user"], ["href", "/clean"], ["href", "/send-mail"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0420\u0435\u0441\u0443\u0440\u0441\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0414\u043B\u044F \u0432\u0456\u0434\u0435\u043E \u043C\u043E\u043D\u0442\u0430\u0436\u0443:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Video samples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Free sounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "AUTH:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "DEV:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Show all users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Show user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Remove all users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Send meill to shadespiritenator@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "app-clan-footer");
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
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_7__["ClanFooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbHighlight"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: [".PS[_ngcontent-%COMP%] {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n\n.table-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.search[_ngcontent-%COMP%] {\n  background: #0000;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.mdi-account-search[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: #df691a;\n}\n\n.mdi-github-circle[_ngcontent-%COMP%], .mdi-linkedin-box[_ngcontent-%COMP%], .mdi-instagram[_ngcontent-%COMP%] {\n  font-size: 2em;\n  cursor: pointer;\n  margin-right: 0.5em;\n}\n\n.mdi-github-circle[_ngcontent-%COMP%]:hover, .mdi-linkedin-box[_ngcontent-%COMP%]:hover, .mdi-instagram[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.custom-select[_ngcontent-%COMP%] {\n  background-color: #818a8f;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbWVtYmVycy9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxwYWdlc1xcbWVtYmVyc1xcbWVtYmVycy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREFBO0VBQ0ksc0JBQUE7QUNHSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREhJO0VBQ0ksWUFBQTtBQ0tSOztBREhBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy9tZW1iZXJzL21lbWJlcnMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUFNcclxuICBtYXJnaW46IDFlbSBhdXRvIDJlbSBhdXRvXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICBcclxuICAgIFxyXG4udGFibGUtZm9ybVxyXG4gICAgd2lkdGg6IDEwMCVcclxudGRcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuXHJcblxyXG4uc2VhcmNoXHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMFxyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KVxyXG5cclxuLm1kaS1hY2NvdW50LXNlYXJjaFxyXG4gICAgZm9udC1zaXplOiAyZW1cclxuICAgIGNvbG9yOiAjZGY2OTFhXHJcblxyXG4ubWRpLWdpdGh1Yi1jaXJjbGUsIC5tZGktbGlua2VkaW4tYm94LCAubWRpLWluc3RhZ3JhbVxyXG4gICAgZm9udC1zaXplOiAyZW1cclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtXHJcbiAgICAmOmhvdmVyXHJcbiAgICAgICAgb3BhY2l0eTogLjdcclxuXHJcbi5jdXN0b20tc2VsZWN0XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE4YThmXHJcbiAgICBjb2xvcjogYmxhY2siLCIuUFMge1xuICBtYXJnaW46IDFlbSBhdXRvIDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJsZS1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNlYXJjaCB7XG4gIGJhY2tncm91bmQ6ICMwMDAwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5tZGktYWNjb3VudC1zZWFyY2gge1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICNkZjY5MWE7XG59XG5cbi5tZGktZ2l0aHViLWNpcmNsZSwgLm1kaS1saW5rZWRpbi1ib3gsIC5tZGktaW5zdGFncmFtIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cbi5tZGktZ2l0aHViLWNpcmNsZTpob3ZlciwgLm1kaS1saW5rZWRpbi1ib3g6aG92ZXIsIC5tZGktaW5zdGFncmFtOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uY3VzdG9tLXNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MThhOGY7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"] });
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


class P404Component {
    constructor() {
    }
    ngOnInit() {
    }
}
P404Component.ɵfac = function P404Component_Factory(t) { return new (t || P404Component)(); };
P404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: P404Component, selectors: [["app-p404"]], decls: 2, vars: 0, template: function P404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "p404 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL3A0MDQvcDQwNC5jb21wb25lbnQuc2FzcyJ9 */"] });
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
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProgrammerTipsComponent_div_4_Template_a_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.play(); });
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
    const card_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Card header ", card_r24.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", "{", " ", "}", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r24.text.en);
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
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_7__["ExtraAlertComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_8__["ClanFooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 6em;\n}\n\n.btn[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n\n.block-1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 0;\n}\n\n.big[_ngcontent-%COMP%] {\n  font-size: 5em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvcHJvZ3JhbW1lci10aXBzL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXHBhZ2VzXFxwcm9ncmFtbWVyLXRpcHNcXHByb2dyYW1tZXItdGlwcy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvcHJvZ3JhbW1lci10aXBzL3Byb2dyYW1tZXItdGlwcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvcHJvZ3JhbW1lci10aXBzL3Byb2dyYW1tZXItdGlwcy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1haW5cclxuLmNvbnRhaW5lclxyXG4gIG1hcmdpbi10b3A6IDZlbSAvLyAhISEgZHVwbGljYXRlIGluIG1hbnkgcGFnZXNcclxuXHJcbi8vIHJhd1xyXG4uYnRuLCBwXHJcbiAgICBtYXJnaW46IDFlbVxyXG4uYmxvY2stMVxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMFxyXG5cclxuLmJpZ1xyXG4gICAgZm9udC1zaXplOiA1ZW1cclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNmVtO1xufVxuXG4uYnRuLCBwIHtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5ibG9jay0xIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmJpZyB7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
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
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_3__["ClanFooterComponent"]], styles: ["img[_ngcontent-%COMP%] {\n  max-width: 20em;\n}\n\n.one[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvc291cmNlcy9mcmVlLXNvdW5kcy9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxwYWdlc1xcc291cmNlc1xcZnJlZS1zb3VuZHNcXGZyZWUtc291bmRzLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy9zb3VyY2VzL2ZyZWUtc291bmRzL2ZyZWUtc291bmRzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy9zb3VyY2VzL2ZyZWUtc291bmRzL2ZyZWUtc291bmRzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIFxyXG4gICAgbWF4LXdpZHRoOiAyMGVtXHJcblxyXG4ub25lXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgIG1hcmdpbjogMWVtIiwiaW1nIHtcbiAgbWF4LXdpZHRoOiAyMGVtO1xufVxuXG4ub25lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDFlbTtcbn0iXX0= */"] });
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
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_3__["ClanFooterComponent"]], styles: ["img[_ngcontent-%COMP%] {\n  max-width: 20em;\n}\n\n.one[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvc291cmNlcy92aWRlby1zYW1wbGVzL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXHBhZ2VzXFxzb3VyY2VzXFx2aWRlby1zYW1wbGVzXFx2aWRlby1zYW1wbGVzLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy9zb3VyY2VzL3ZpZGVvLXNhbXBsZXMvdmlkZW8tc2FtcGxlcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvc291cmNlcy92aWRlby1zYW1wbGVzL3ZpZGVvLXNhbXBsZXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcgXHJcbiAgICBtYXgtd2lkdGg6IDIwZW1cclxuXHJcbi5vbmVcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgbWFyZ2luOiAxZW0iLCJpbWcge1xuICBtYXgtd2lkdGg6IDIwZW07XG59XG5cbi5vbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMWVtO1xufSJdfQ== */"] });
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
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _common_dependencies_components_general_extra_alert_extra_alert_component__WEBPACK_IMPORTED_MODULE_7__["ExtraAlertComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_8__["ClanFooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 6em;\n}\n\n.btn[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n\n.block-1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 0;\n}\n\n.big[_ngcontent-%COMP%] {\n  font-size: 5em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvdHJhaW5pbmctYXBwYXJhdHVzL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXHBhZ2VzXFx0cmFpbmluZy1hcHBhcmF0dXNcXHRyYWluaW5nLWFwcGFyYXR1cy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvdHJhaW5pbmctYXBwYXJhdHVzL3RyYWluaW5nLWFwcGFyYXR1cy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvdHJhaW5pbmctYXBwYXJhdHVzL3RyYWluaW5nLWFwcGFyYXR1cy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1haW5cclxuLmNvbnRhaW5lclxyXG4gIG1hcmdpbi10b3A6IDZlbSAvLyAhISEgZHVwbGljYXRlIGluIG1hbnkgcGFnZXNcclxuXHJcbi8vIHJhd1xyXG4uYnRuLCBwXHJcbiAgICBtYXJnaW46IDFlbVxyXG4uYmxvY2stMVxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMFxyXG5cclxuLmJpZ1xyXG4gICAgZm9udC1zaXplOiA1ZW1cclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNmVtO1xufVxuXG4uYnRuLCBwIHtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5ibG9jay0xIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmJpZyB7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
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
    } }, directives: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_2__["ClanFooterComponent"]], styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  margin-top: 6em;\n}\n.\u0441[_ngcontent-%COMP%] {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvd2FudC1tb3JlLWxlc3NvbnMvd2FudC1tb3JlLWxlc3NvbnMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL3dhbnQtbW9yZS1sZXNzb25zL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXHBhZ2VzXFx3YW50LW1vcmUtbGVzc29uc1xcd2FudC1tb3JlLWxlc3NvbnMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsZUFBQTtBREVGO0FDREE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FESUYiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy93YW50LW1vcmUtbGVzc29ucy93YW50LW1vcmUtbGVzc29ucy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA2ZW07XG59XG5cbi7RgSB7XG4gIG1hcmdpbjogMWVtIGF1dG8gMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuY29udGFpbmVyXHJcbiAgbWFyZ2luLXRvcDogNmVtXHJcbi7RgVxyXG4gIG1hcmdpbjogMWVtIGF1dG8gMmVtIGF1dG9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIFxyXG5cclxuIl19 */"] });
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