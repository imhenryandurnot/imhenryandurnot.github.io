(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Fiverr\calculator\CalculatorApp\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");












function AppComponent_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](option_r7.name);
} }
function AppComponent_mat_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](option_r8.name);
} }
function AppComponent_mat_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](option_r9.name);
} }
function AppComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Your TDEE Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "calories/day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "calories/week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](7, 8, ctx_r4.tdee, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](13, 11, ctx_r4.tdee * 7, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Age: ", ctx_r4.chipData.age, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Weight(lbs): ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](23, 14, ctx_r4.chipData.bodyWeight, "1.0-0"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r4.chipData.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r4.chipData.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r4.chipData.activityLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r4.chipData.macro);
} }
function AppComponent_div_80_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Activity Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_80_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r16.name, " ");
} }
function AppComponent_div_80_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Calories/Day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_80_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (ctx_r13.bmr * element_r17.formula).toFixed(0), " ");
} }
function AppComponent_div_80_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 58);
} }
function AppComponent_div_80_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 59);
} }
function AppComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Based on your Input, the best estimate for your maintenance calories is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " per day using the Muller Equation, which is regarded as the most accurate. This table is a visual aid for all the different activity levels.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](10, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, AppComponent_div_80_th_11_Template, 2, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, AppComponent_div_80_td_12_Template, 2, 1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](13, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, AppComponent_div_80_th_14_Template, 2, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, AppComponent_div_80_td_15_Template, 2, 1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, AppComponent_div_80_tr_16_Template, 1, 0, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, AppComponent_div_80_tr_17_Template, 1, 0, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](7, 4, ctx_r5.tdee, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r5.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx_r5.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx_r5.displayedColumns);
} }
function AppComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " While your TDEE can be used as a base line. Our program requires you to follow this macro breakdown ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Total Calories: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Carbs: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "calories/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "grams");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Protein: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "calories/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "grams");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Fats: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](40, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "calories/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](45, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "grams");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.chipData.macro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](11, 8, ctx_r6.macroNumber, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](16, 11, ctx_r6.carbGrams * 4, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](21, 14, ctx_r6.carbGrams, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](28, 17, ctx_r6.proteinGrams * 4, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](33, 20, ctx_r6.proteinGrams, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](40, 23, ctx_r6.fatGrams * 9, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](45, 26, ctx_r6.fatGrams, "1.0-0"), " ");
} }
class AppComponent {
    constructor() {
        this.title = 'CalculatorApp';
        this.heightOptions = [
            { name: '4ft. 7in.', value: this.feetToCm(4, 7) },
            { name: '4ft. 8in.', value: this.feetToCm(4, 8) },
            { name: '4ft. 9in.', value: this.feetToCm(4, 9) },
            { name: '4ft. 10in.', value: this.feetToCm(4, 10) },
            { name: '4ft. 11in.', value: this.feetToCm(4, 11) },
            { name: '5ft. 0in.', value: this.feetToCm(5, 0) },
            { name: '5ft. 1in.', value: this.feetToCm(5, 1) },
            { name: '5ft. 2in.', value: this.feetToCm(5, 2) },
            { name: '5ft. 3in.', value: this.feetToCm(5, 3) },
            { name: '5ft. 4in.', value: this.feetToCm(5, 4) },
            { name: '5ft. 5in.', value: this.feetToCm(5, 5) },
            { name: '5ft. 6in.', value: this.feetToCm(5, 6) },
            { name: '5ft. 7in.', value: this.feetToCm(5, 7) },
            { name: '5ft. 8in.', value: this.feetToCm(5, 8) },
            { name: '5ft. 9in.', value: this.feetToCm(5, 9) },
            { name: '5ft. 10in.', value: this.feetToCm(5, 10) },
            { name: '5ft. 11in.', value: this.feetToCm(5, 11) },
            { name: '6ft. 0in.', value: this.feetToCm(6, 0) },
            { name: '6ft. 1in.', value: this.feetToCm(6, 1) },
            { name: '6ft. 2in.', value: this.feetToCm(6, 2) },
            { name: '6ft. 3in.', value: this.feetToCm(6, 3) },
            { name: '6ft. 4in.', value: this.feetToCm(6, 4) },
            { name: '6ft. 5in.', value: this.feetToCm(6, 5) },
            { name: '6ft. 6in.', value: this.feetToCm(6, 6) },
            { name: '6ft. 7in.', value: this.feetToCm(6, 7) },
            { name: '6ft. 8in.', value: this.feetToCm(6, 8) },
            { name: '6ft. 9in.', value: this.feetToCm(6, 9) },
            { name: '6ft. 10in.', value: this.feetToCm(6, 10) },
            { name: '6ft. 11in.', value: this.feetToCm(6, 11) },
            { name: '7ft. 0in.', value: this.feetToCm(7, 0) },
        ];
        this.activityLevelOptions = [
            { name: 'Sedentary (0 workouts - office job)', value: 'Sedentary (0 workouts - office job)', formula: 1.20 },
            { name: 'Light Exercise (workout 1-2 times/week)', value: 'Light Exercise (workout 1-2 times/week)', formula: 1.375 },
            { name: 'Moderate Exercise (3-5 times/week)', value: 'Moderate Exercise (3-5 times/week)', formula: 1.55 },
            { name: 'Heavy Exercise (6-7 times/week)', value: 'Heavy Exercise (6-7 times/week)', formula: 1.725 },
            { name: 'Athlete (2x/day)', value: 'Athlete (2x/day)', formula: 1.9 }
        ];
        this.macroOptions = [
            { name: 'Lean Bulk (110% Surplus) ', value: 'Lean Bulk (110% Surplus)' },
            { name: 'Fat Loss (Deficit)', value: 'Fat Loss (Deficit)' },
            { name: 'Regular Bulk (120% Surplus)', value: 'Regular Bulk (120% Surplus)' },
            { name: 'Maintenance', value: 'Maintenance' }
        ];
        this.dataSource = [
            { name: 'Basal Metabolic Rate', formula: 1 },
            { name: 'Sedentary', formula: 1.20 },
            { name: 'Light Exercise', formula: 1.375 },
            { name: 'Moderate Exercise', formula: 1.55 },
            { name: 'Heavy Exercise', formula: 1.725 },
            { name: 'Athlete', formula: 1.9 },
        ];
        this.displayedColumns = ['position', 'name'];
        this.calculated = false;
    }
    ngOnInit() {
        this.calculatorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bodyFat: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]),
            bodyWeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            activityLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            macro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            macroType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    submitForm(el) {
        if (this.calculatorForm.valid) {
            const TBW = this.calculatorForm.value.bodyWeight * 0.45359237;
            const BFP = this.calculatorForm.value.bodyFat;
            const AGE = this.calculatorForm.value.age;
            const FM = TBW * (BFP / 100);
            const LBM = TBW - FM;
            this.lbm = LBM;
            const GENDER = this.calculatorForm.value.gender === 'male' ? 1 : 0;
            this.bmr = (13.587 * LBM) + (9.613 * FM) + (198 * GENDER) - (3.351 * AGE) + 674;
            this.calculated = true;
            const height = this.selectedHeight;
            this.chipData = Object.assign(Object.assign({}, this.calculatorForm.value), { height: height });
            const selectedActivityVal = this.activityLevelOptions
                .filter(val => val.name === this.calculatorForm.value.activityLevel)[0].formula;
            this.tdee = this.bmr * selectedActivityVal;
            this.macroNumber = this.setMacroCalorie(BFP, GENDER, TBW);
            setTimeout(() => {
                el.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    }
    resetForm() {
        this.calculatorForm.reset();
        this.calculated = false;
    }
    getSelHeightInFt(event) {
        this.selectedHeight = event.source.selected.viewValue;
    }
    feetToCm(ft, inch) {
        return ((ft * 30.48) + (inch * 2.54)).toFixed(2);
    }
    setMacroCalorie(bfp, gender, TBW) {
        const macro = this.calculatorForm.value.macro;
        this.proteinGrams = 2.6 * this.lbm;
        if (macro === 'Lean Bulk (110% Surplus)') {
            const LBC = this.tdee * 1.1;
            this.calculateCarbFat(LBC);
            return LBC;
        }
        else if (macro === 'Regular Bulk (120% Surplus)') {
            const LBC = this.tdee * 1.2;
            this.calculateCarbFat(LBC);
            return LBC;
        }
        else if (macro === 'Maintenance') {
            this.carbGrams = 0;
            this.fatGrams = 0;
            return this.tdee;
        }
        else if (macro === 'Fat Loss (Deficit)') {
            const CD = this.calorieDeficit(bfp, gender);
            const WLG = TBW * 0.006;
            const FLC = this.tdee - (WLG * CD);
            this.calculateCarbFat(FLC);
            return FLC;
        }
    }
    calorieDeficit(bfp, gender) {
        if ((bfp >= 27 && gender) || (bfp >= 38 && !gender)) {
            return 1024;
        }
        else if ((bfp >= 20 && gender) || (bfp >= 33 && !gender)) {
            return 1024;
        }
        else if ((bfp >= 10 && gender) || (bfp >= 21 && !gender)) {
            return 930;
        }
        else if ((bfp < 10 && gender) || (bfp < 21 && !gender)) {
            return 834;
        }
    }
    calculateCarbFat(calorie) {
        const macroType = this.calculatorForm.value.macroType;
        if (macroType === 'carb') {
            this.carbGrams = ((calorie - (this.proteinGrams * 4)) * 0.6) / 4;
            this.fatGrams = ((calorie - (this.proteinGrams * 4)) * 0.4) / 9;
        }
        else {
            this.carbGrams = ((calorie - (this.proteinGrams * 4)) * 0.4) / 4;
            this.fatGrams = ((calorie - (this.proteinGrams * 4)) * 0.6) / 9;
        }
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 86, vars: 7, consts: [[1, "py-5"], [1, "container", "px-lg-5"], [1, "text-center"], [1, "m-2", "m-lg-2"], [1, "display-5", "fw-bold"], ["src", "../assets/blackfonttransparent.png", "height", "200px", "alt", "logo"], [1, "pt-4"], [1, "row", "gx-lg-5"], [1, "col-lg-6", "mb-5"], [1, "card", "bg-light", "border-0", "h-100"], [1, "card-body", "text-center", "p-4", "p-lg-5"], [3, "formGroup"], [1, "row"], ["appearance", "legacy"], ["matInput", "", "formControlName", "age", "type", "number"], ["matInput", "", "formControlName", "bodyWeight", "type", "number"], ["matInput", "", "formControlName", "bodyFat", "type", "number"], ["formControlName", "gender"], ["value", "male"], ["value", "female"], ["formControlName", "height", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "activityLevel"], ["formControlName", "macro"], ["formControlName", "macroType"], ["value", "carb"], ["value", "fat"], ["mat-stroked-button", "", "color", "warn", "type", "reset", 1, "m-2", 3, "click"], ["mat-stroked-button", "", "color", "primary", "type", "submit", 1, "m-2", 3, "click"], [1, "card", "border-0", "h-100"], [1, "card-body", "p-4", "p-lg-5", "pt-0", "pt-lg-0"], [1, "fs-4", "fw-bold", "mt-3"], [1, "mb-0"], [1, "p-2"], ["src", "../assets/tdee-pie-chart.png", "alt", "chart"], ["target", ""], ["class", "card border-0 h-100", 4, "ngIf"], ["class", "col-lg-6 mb-5", 4, "ngIf"], ["class", "col-lg-12 mb-5", 4, "ngIf"], [1, "py-5", "bg-dark"], [1, "container"], [1, "m-0", "text-center", "text-white"], [3, "value"], [1, "card-body", "text-center", "p-4", "p-lg-5", "pt-0", "pt-lg-0"], [1, "fs-4", "fw-bold", "mt-3", "mb-3"], [1, "fw-bold"], [1, "sm"], [1, "fw-light"], [1, "mt-3", "mb-2"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "col-lg-12", "mb-5"], [1, "card", "bg-light", "h-100"], [1, "fs-4", "fw-bold", "mt-4", "mb-3"], [1, "mb-3", "fw-lighter"], [1, "mb-3"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Body Weight(in lbs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Body Fat Percentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectionChange", function AppComponent_Template_mat_select_selectionChange_41_listener($event) { return ctx.getSelHeightInFt($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, AppComponent_mat_option_42_Template, 2, 2, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Activity Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, AppComponent_mat_option_48_Template, 2, 2, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Macro Split/Goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, AppComponent_mat_option_54_Template, 2, 2, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Macro Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Carb Heavy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Fat Heavy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_64_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](78); return ctx.submitForm(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "How TDEE is Calculated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " Total Daily Energy Expenditure (TDEE) is an estimation of how many calories you burn per day when exercise is taken into account. It is calculated by first figuring out your Basal Metabolic Rate, then multiplying that value by an activity multiplier. Since your BMR represents how many calories your body burns when at rest, it is necessary to adjust the numbers upwards to account for the calories you burn during the day. This is true even for those with a sedentary lifestyle. Our TDEE calculator uses the best formulas and displays your score in a way that's easy to read and meaningful. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p", 33);
        
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 8, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](79, AppComponent_div_79_Template, 36, 17, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](80, AppComponent_div_80_Template, 18, 7, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](81, AppComponent_div_81_Template, 48, 29, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "footer", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Copyright \u00A9 Crossfit Perception");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.calculatorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.heightOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.activityLevelOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.macroOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.calculated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.calculated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.calculated);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
