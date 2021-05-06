(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(732);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(516);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(515);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(343);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__);
var AccordionComp=function AccordionComp(_ref){var data=_ref.data,handleChange=_ref.handleChange,expanded=_ref.expanded,bgColor=_ref.bgColor;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,data.map(function(item){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{key:item.target,square:true,expanded:expanded===item.target,style:{backgroundColor:bgColor,boxShadow:'none'},onChange:handleChange(item.target),className:"accordion"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],{style:{padding:1},expandIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default.a,{style:{color:'#5484B3'}})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",{style:{margin:'2px',padding:0}},item.title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{style:{padding:1,marginTop:'-15px'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{style:{padding:0}},item.content)));}));};AccordionComp.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,handleChange:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func};AccordionComp.defaultProps={data:[]};/* harmony default export */ __webpack_exports__["default"] = (AccordionComp);

/***/ })

}]);