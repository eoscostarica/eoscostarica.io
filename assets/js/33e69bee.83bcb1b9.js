"use strict";
(self["webpackChunkeoscostarica_io"] = self["webpackChunkeoscostarica_io"] || []).push([[3601],{

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

/***/ 1203:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80343);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41749);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76775);
var ContactUsBanner=function ContactUsBanner(){var history=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .useHistory */ .k6)();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"containerGray"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"sectionPadding"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{container:true,spacing:5},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{item:true,xs:12,md:8},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:"centerTextOnMobile"},"Start working with us ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null)," and implement ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null)," blockchain technology. "))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{item:true,xs:12,md:4},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"buttonBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"buttonPrimary",onClick:function onClick(){return history.push("/contact-us/");}},"Contact us"))))));};/* harmony default export */ __webpack_exports__["default"] = (ContactUsBanner);

/***/ })

}]);