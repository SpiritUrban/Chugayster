function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,r,n){return r&&_defineProperties(e.prototype,r),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"A/Tp":function(e,r,n){"use strict";n.d(r,"a",(function(){return l}));var t=n("fXoL"),i=n("ofXK");function c(e,r){1&e&&(t.Rb(0,"div"),t.Cc(1," Is required. "),t.Qb())}function a(e,r){if(1&e&&(t.Rb(0,"div"),t.Cc(1),t.Qb()),2&e){var n=t.fc(2);t.zb(1),t.Ec(" Must be at least ",n.it.errors.minlength.requiredLength," characters long. ")}}function o(e,r){if(1&e&&(t.Rb(0,"div"),t.Cc(1),t.Qb()),2&e){var n=t.fc(2);t.zb(1),t.Ec(" Must be shorter ",n.it.errors.maxlength.requiredLength," characters long. ")}}function s(e,r){if(1&e&&(t.Rb(0,"div"),t.Cc(1),t.Qb()),2&e){var n=t.fc(2);t.zb(1),t.Ec(" ",n.it.errors.mailValidator.msg," ")}}function f(e,r){if(1&e&&(t.Rb(0,"div",1),t.Ac(1,c,2,0,"div",2),t.Ac(2,a,2,1,"div",2),t.Ac(3,o,2,1,"div",2),t.Ac(4,s,2,1,"div",2),t.Qb()),2&e){var n=t.fc();t.zb(1),t.kc("ngIf",n.it.errors.required),t.zb(1),t.kc("ngIf",n.it.errors.minlength),t.zb(1),t.kc("ngIf",n.it.errors.maxlength),t.zb(1),t.kc("ngIf",n.it.errors.mailValidator&&n.it.value.length>0)}}var l=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Gb({type:e,selectors:[["app-form-validator"]],inputs:{it:"it"},decls:1,vars:1,consts:[["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(e,r){1&e&&t.Ac(0,f,5,4,"div",0),2&e&&t.kc("ngIf",r.it.invalid&&(r.it.dirty||r.it.touched))},directives:[i.m],styles:[""]}),e}()}}]);