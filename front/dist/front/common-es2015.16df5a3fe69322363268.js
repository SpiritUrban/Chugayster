(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"A/Tp":function(t,r,i){"use strict";i.d(r,"a",(function(){return d}));var n=i("fXoL"),e=i("ofXK");function c(t,r){1&t&&(n.Rb(0,"div"),n.Dc(1," Is required. "),n.Qb())}function s(t,r){if(1&t&&(n.Rb(0,"div"),n.Dc(1),n.Qb()),2&t){const t=n.gc(2);n.zb(1),n.Fc(" Must be at least ",t.it.errors.minlength.requiredLength," characters long. ")}}function o(t,r){if(1&t&&(n.Rb(0,"div"),n.Dc(1),n.Qb()),2&t){const t=n.gc(2);n.zb(1),n.Fc(" Must be shorter ",t.it.errors.maxlength.requiredLength," characters long. ")}}function a(t,r){if(1&t&&(n.Rb(0,"div"),n.Dc(1),n.Qb()),2&t){const t=n.gc(2);n.zb(1),n.Fc(" ",t.it.errors.mailValidator.msg," ")}}function l(t,r){if(1&t&&(n.Rb(0,"div",1),n.Bc(1,c,2,0,"div",2),n.Bc(2,s,2,1,"div",2),n.Bc(3,o,2,1,"div",2),n.Bc(4,a,2,1,"div",2),n.Qb()),2&t){const t=n.gc();n.zb(1),n.lc("ngIf",t.it.errors.required),n.zb(1),n.lc("ngIf",t.it.errors.minlength),n.zb(1),n.lc("ngIf",t.it.errors.maxlength),n.zb(1),n.lc("ngIf",t.it.errors.mailValidator&&t.it.value.length>0)}}let d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["app-form-validator"]],inputs:{it:"it"},decls:1,vars:1,consts:[["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(t,r){1&t&&n.Bc(0,l,5,4,"div",0),2&t&&n.lc("ngIf",r.it.invalid&&(r.it.dirty||r.it.touched))},directives:[e.m],styles:[""]}),t})()}}]);