(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(26);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js + 4 modules
var makeStyles = __webpack_require__(790);

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js
var getThemeProps = __webpack_require__(500);

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/useTheme/useTheme.js
var useTheme = __webpack_require__(783);

// CONCATENATED MODULE: ./node_modules/@material-ui/styles/esm/withStyles/withStyles.js








 // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.

var withStyles_withStyles = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var defaultTheme = options.defaultTheme,
        _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        name = options.name,
        stylesOptions = Object(objectWithoutProperties["a" /* default */])(options, ["defaultTheme", "withTheme", "name"]);

    if (false) {}

    var classNamePrefix = name;

    if (false) { var displayName; }

    var useStyles = Object(makeStyles["a" /* default */])(stylesOrCreator, Object(esm_extends["a" /* default */])({
      defaultTheme: defaultTheme,
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var WithStyles = /*#__PURE__*/react_default.a.forwardRef(function WithStyles(props, ref) {
      var classesProp = props.classes,
          innerRef = props.innerRef,
          other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "innerRef"]); // The wrapper receives only user supplied props, which could be a subset of
      // the actual props Component might receive due to merging with defaultProps.
      // So copying it here would give us the same result in the wrapper as well.


      var classes = useStyles(Object(esm_extends["a" /* default */])({}, Component.defaultProps, props));
      var theme;
      var more = other;

      if (typeof name === 'string' || withTheme) {
        // name and withTheme are invariant in the outer scope
        // eslint-disable-next-line react-hooks/rules-of-hooks
        theme = Object(useTheme["a" /* default */])() || defaultTheme;

        if (name) {
          more = Object(getThemeProps["a" /* default */])({
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

      return /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
        ref: innerRef || ref,
        classes: classes
      }, more));
    });
     false ? undefined : void 0;

    if (false) {}

    hoist_non_react_statics_cjs_default()(WithStyles, Component);

    if (false) {}

    return WithStyles;
  };
};

/* harmony default export */ var esm_withStyles_withStyles = (withStyles_withStyles);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/defaultTheme.js
var styles_defaultTheme = __webpack_require__(247);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js




function styles_withStyles_withStyles(stylesOrCreator, options) {
  return esm_withStyles_withStyles(stylesOrCreator, Object(esm_extends["a" /* default */])({
    defaultTheme: styles_defaultTheme["a" /* default */]
  }, options));
}

/* harmony default export */ var styles_withStyles = __webpack_exports__["a"] = (styles_withStyles_withStyles);

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getThemeProps; });
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

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(721);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(787);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
var ContactUsBanner=function ContactUsBanner(){var history=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* useHistory */ "k"])();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{className:"containerGray"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{className:"sectionPadding"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{container:true,spacing:5},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{item:true,xs:12,md:8},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"centerTextOnMobile"},"Start working with us ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," and implement ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," blockchain technology. "))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{item:true,xs:12,md:4},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{className:"buttonBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"buttonPrimary",onClick:function onClick(){return history.push("/contact-us/");}},"Contact us"))))));};/* harmony default export */ __webpack_exports__["default"] = (ContactUsBanner);

/***/ })

}]);