"use strict";
(self["webpackChunkeoscostarica_io"] = self["webpackChunkeoscostarica_io"] || []).push([[7213],{

/***/ 1591:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ styles_withStyles; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8679);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js + 4 modules
var makeStyles = __webpack_require__(11719);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js
var getThemeProps = __webpack_require__(93869);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/useTheme/useTheme.js
var useTheme = __webpack_require__(159);
;// CONCATENATED MODULE: ./node_modules/@material-ui/styles/esm/withStyles/withStyles.js








 // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.

var withStyles = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var defaultTheme = options.defaultTheme,
        _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        name = options.name,
        stylesOptions = (0,objectWithoutProperties/* default */.Z)(options, ["defaultTheme", "withTheme", "name"]);

    if (false) {}

    var classNamePrefix = name;

    if (false) { var displayName; }

    var useStyles = (0,makeStyles/* default */.Z)(stylesOrCreator, (0,esm_extends/* default */.Z)({
      defaultTheme: defaultTheme,
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var WithStyles = /*#__PURE__*/react.forwardRef(function WithStyles(props, ref) {
      var classesProp = props.classes,
          innerRef = props.innerRef,
          other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "innerRef"]); // The wrapper receives only user supplied props, which could be a subset of
      // the actual props Component might receive due to merging with defaultProps.
      // So copying it here would give us the same result in the wrapper as well.


      var classes = useStyles((0,esm_extends/* default */.Z)({}, Component.defaultProps, props));
      var theme;
      var more = other;

      if (typeof name === 'string' || withTheme) {
        // name and withTheme are invariant in the outer scope
        // eslint-disable-next-line react-hooks/rules-of-hooks
        theme = (0,useTheme/* default */.Z)() || defaultTheme;

        if (name) {
          more = (0,getThemeProps/* default */.Z)({
            theme: theme,
            name: name,
            props: other
          });
        } // Provide the theme to the wrapped component.
        // So we don't have to use the `withTheme()` Higher-order Component.


        if (withTheme && !more.theme) {
          more.theme = theme;
        }
      }

      return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
        ref: innerRef || ref,
        classes: classes
      }, more));
    });
     false ? 0 : void 0;

    if (false) {}

    hoist_non_react_statics_cjs_default()(WithStyles, Component);

    if (false) {}

    return WithStyles;
  };
};

/* harmony default export */ var withStyles_withStyles = (withStyles);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/defaultTheme.js
var defaultTheme = __webpack_require__(99700);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js




function styles_withStyles_withStyles(stylesOrCreator, options) {
  return withStyles_withStyles(stylesOrCreator, (0,esm_extends/* default */.Z)({
    defaultTheme: defaultTheme/* default */.Z
  }, options));
}

/* harmony default export */ var styles_withStyles = (styles_withStyles_withStyles);

/***/ }),

/***/ 93869:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ getThemeProps; }
/* harmony export */ });
/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  var theme = params.theme,
      name = params.name,
      props = params.props;

  if (!theme || !theme.props || !theme.props[name]) {
    return props;
  } // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  var defaultProps = theme.props[name];
  var propName;

  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }

  return props;
}

/***/ }),

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

/***/ 88096:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80343);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41749);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44996);
var WeAreOneGroup=function WeAreOneGroup(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"containerSec"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"sectionNoPadding"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"h3Box"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{style:{textAlign:'center'}},"We Are One Group")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"spacingBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{container:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{item:true,xs:12,md:3},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"imgBoxLogos"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{target:"_blank",href:"https://eosio.lacchain.net/en/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"oneGroupLogo",alt:"LACChain EOSIO",src:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("img/logos/lacchain-eosio.png")})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{item:true,xs:12,md:3},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"imgBoxLogos"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{target:"_blank",href:"https://www.edenia.com/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"oneGroupLogo",alt:"Edenia",src:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("img/logos/Group17.svg")})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{item:true,xs:12,md:3},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"imgBoxLogos"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{target:"_blank",href:"https://eosurf.com/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"oneGroupLogo",alt:"Eossurf",src:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("img/logos/Group11.svg")})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{item:true,xs:12,md:3},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"imgBoxLogos"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{target:"_blank",href:"https://ticoblockchain.cr/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"oneGroupLogo",alt:"Ticoblockchain",src:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("img/logos/Group55.svg")}))))))));};/* harmony default export */ __webpack_exports__["default"] = (WeAreOneGroup);

/***/ })

}]);