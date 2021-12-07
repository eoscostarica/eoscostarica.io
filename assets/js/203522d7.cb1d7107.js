"use strict";
(self["webpackChunkeoscostarica_io"] = self["webpackChunkeoscostarica_io"] || []).push([[7109],{

/***/ 13919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": function() { return /* binding */ hasProtocol; },
/* harmony export */   "Z": function() { return /* binding */ isInternalUrl; }
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function hasProtocol(url){return /^(\w*:|\/\/)/.test(url)===true;}function isInternalUrl(url){return typeof url!=='undefined'&&!hasProtocol(url);}

/***/ }),

/***/ 44996:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ useBaseUrlUtils; },
/* harmony export */   "Z": function() { return /* binding */ useBaseUrl; }
/* harmony export */ });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52263);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13919);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function addBaseUrl(siteUrl,baseUrl,url,_temp){var _ref=_temp===void 0?{}:_temp,_ref$forcePrependBase=_ref.forcePrependBaseUrl,forcePrependBaseUrl=_ref$forcePrependBase===void 0?false:_ref$forcePrependBase,_ref$absolute=_ref.absolute,absolute=_ref$absolute===void 0?false:_ref$absolute;if(!url){return url;}// it never makes sense to add a base url to a local anchor url
if(url.startsWith('#')){return url;}// it never makes sense to add a base url to an url with a protocol
if((0,_isInternalUrl__WEBPACK_IMPORTED_MODULE_1__/* .hasProtocol */ .b)(url)){return url;}if(forcePrependBaseUrl){return baseUrl+url;}// We should avoid adding the baseurl twice if it's already there
var shouldAddBaseUrl=!url.startsWith(baseUrl);var basePath=shouldAddBaseUrl?baseUrl+url.replace(/^\//,''):url;return absolute?siteUrl+basePath:basePath;}function useBaseUrlUtils(){var _useDocusaurusContext=(0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig;_useDocusaurusContext2=_useDocusaurusContext2===void 0?{}:_useDocusaurusContext2;var _useDocusaurusContext3=_useDocusaurusContext2.baseUrl,baseUrl=_useDocusaurusContext3===void 0?'/':_useDocusaurusContext3,siteUrl=_useDocusaurusContext2.url;return{withBaseUrl:function withBaseUrl(url,options){return addBaseUrl(siteUrl,baseUrl,url,options);}};}function useBaseUrl(url,options){if(options===void 0){options={};}var _useBaseUrlUtils=useBaseUrlUtils(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;return withBaseUrl(url,options);}

/***/ }),

/***/ 91309:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1591);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89659);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50998);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46869);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95757);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44996);
var GenericListItem=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({root:{paddingLeft:'20px',paddingRight:0,borderLeft:'solid 5px white','&$selected':{backgroundColor:'rgb(84, 132, 179,0.1)'}},selected:{borderLeft:'solid 5px #5484b3'}})(function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,props);});var GenericListItemIcon=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({root:{color:'black',minWidth:'20px',opacity:.5,width:'20px',marginRight:'15px'}})(function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,props);});var GenericListItemText=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({primary:{fontFamily:'Lato',fontSize:15,fontWeight:'bold',color:'black'}})(function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,props);});var CustomListItem=function CustomListItem(_ref){var label=_ref.label,href=_ref.href,target=_ref.target,icon=_ref.icon,isSelected=_ref.isSelected;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{href:href,target:target,style:{textDecoration:'none'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GenericListItem,{button:true,selected:isSelected},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GenericListItemIcon,{style:{width:'50px'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(icon),alt:label})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GenericListItemText,{primary:label})));};/* harmony default export */ __webpack_exports__["default"] = (CustomListItem);

/***/ })

}]);