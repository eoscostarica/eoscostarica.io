"use strict";
(self["webpackChunkeoscostarica_io"] = self["webpackChunkeoscostarica_io"] || []).push([[7254],{

/***/ 80343:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Box_Box; }
});

// UNUSED EXPORTS: styleFunction

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/merge.js
var merge = __webpack_require__(19668);
;// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/styleFunctionSx.js






function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

var warnedOnce = false;

function styleFunctionSx(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var output = styleFunction(props);

    if (props.css) {
      return (0,esm_extends/* default */.Z)({}, (0,merge/* default */.Z)(output, styleFunction((0,esm_extends/* default */.Z)({
        theme: props.theme
      }, props.css))), omit(props.css, [styleFunction.filterProps]));
    }

    if (props.sx) {
      return (0,esm_extends/* default */.Z)({}, (0,merge/* default */.Z)(output, styleFunction((0,esm_extends/* default */.Z)({
        theme: props.theme
      }, props.sx))), omit(props.sx, [styleFunction.filterProps]));
    }

    return output;
  };

  newStyleFunction.propTypes =  false ? 0 : {};
  newStyleFunction.filterProps = ['css', 'sx'].concat((0,toConsumableArray/* default */.Z)(styleFunction.filterProps));
  return newStyleFunction;
}
/**
 *
 * @deprecated
 * The css style function is deprecated. Use the `styleFunctionSx` instead.
 */


function css(styleFunction) {
  if (false) {}

  return styleFunctionSx(styleFunction);
}
/* harmony default export */ var esm_styleFunctionSx = (styleFunctionSx);
;// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/compose.js



function compose() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var fn = function fn(props) {
    return styles.reduce(function (acc, style) {
      var output = style(props);

      if (output) {
        return (0,merge/* default */.Z)(acc, output);
      }

      return acc;
    }, {});
  }; // Alternative approach that doesn't yield any performance gain.
  // const handlers = styles.reduce((acc, style) => {
  //   style.filterProps.forEach(prop => {
  //     acc[prop] = style;
  //   });
  //   return acc;
  // }, {});
  // const fn = props => {
  //   return Object.keys(props).reduce((acc, prop) => {
  //     if (handlers[prop]) {
  //       return merge(acc, handlers[prop](props));
  //     }
  //     return acc;
  //   }, {});
  // };


  fn.propTypes =  false ? 0 : {};
  fn.filterProps = styles.reduce(function (acc, style) {
    return acc.concat(style.filterProps);
  }, []);
  return fn;
}

/* harmony default export */ var esm_compose = (compose);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(71410);
;// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/style.js




function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce(function (acc, item) {
    return acc && acc[item] ? acc[item] : null;
  }, obj);
}

function style(options) {
  var prop = options.prop,
      _options$cssProperty = options.cssProperty,
      cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty,
      themeKey = options.themeKey,
      transform = options.transform;

  var fn = function fn(props) {
    if (props[prop] == null) {
      return null;
    }

    var propValue = props[prop];
    var theme = props.theme;
    var themeMapping = getPath(theme, themeKey) || {};

    var styleFromPropValue = function styleFromPropValue(propValueFinal) {
      var value;

      if (typeof themeMapping === 'function') {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || propValueFinal;
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;

        if (transform) {
          value = transform(value);
        }
      }

      if (cssProperty === false) {
        return value;
      }

      return (0,defineProperty/* default */.Z)({}, cssProperty, value);
    };

    return (0,breakpoints/* handleBreakpoints */.k)(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  false ? 0 : {};
  fn.filterProps = [prop];
  return fn;
}

/* harmony default export */ var esm_style = (style);
;// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/borders.js



function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return "".concat(value, "px solid");
}

var border = esm_style({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
var borderTop = esm_style({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
var borderRight = esm_style({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
var borderBottom = esm_style({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
var borderLeft = esm_style({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
var borderColor = esm_style({
  prop: 'borderColor',
  themeKey: 'palette'
});
var borderRadius = esm_style({
  prop: 'borderRadius',
  themeKey: 'shape'
});
var borders = esm_compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);
/* harmony default export */ var esm_borders = (borders);
;// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/display.js


var displayPrint = esm_style({
  prop: 'displayPrint',
  cssProperty: false,
  transform: function transform(value) {
    return {
      '@media print': {
        display: value
      }
    };
  }
});
var displayRaw = esm_style({
  prop: 'display'
});
var overflow = esm_style({
  prop: 'overflow'
});
var textOverflow = esm_style({
  prop: 'textOverflow'
});
var visibility = esm_style({
  prop: 'visibility'
});
var whiteSpace = esm_style({
  prop: 'whiteSpace'
});
/* harmony default export */ var display = (esm_compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace));
;// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/flexbox.js


var flexBasis = esm_style({
  prop: 'flexBasis'
});
var flexDirection = esm_style({
  prop: 'flexDirection'
});
var flexWrap = esm_style({
  prop: 'flexWrap'
});
var justifyContent = esm_style({
  prop: 'justifyContent'
});
var alignItems = esm_style({
  prop: 'alignItems'
});
var alignContent = esm_style({
  prop: 'alignContent'
});
var order = esm_style({
  prop: 'order'
});
var flex = esm_style({
  prop: 'flex'
});
var flexGrow = esm_style({
  prop: 'flexGrow'
});
var flexShrink = esm_style({
  prop: 'flexShrink'
});
var alignSelf = esm_style({
  prop: 'alignSelf'
});
var justifyItems = esm_style({
  prop: 'justifyItems'
});
var justifySelf = esm_style({
  prop: 'justifySelf'
});
var flexbox = esm_compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
/* harmony default export */ var esm_flexbox = (flexbox);
;// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/grid.js


var gridGap = esm_style({
  prop: 'gridGap'
});
var gridColumnGap = esm_style({
  prop: 'gridColumnGap'
});
var gridRowGap = esm_style({
  prop: 'gridRowGap'
});
var gridColumn = esm_style({
  prop: 'gridColumn'
});
var gridRow = esm_style({
  prop: 'gridRow'
});
var gridAutoFlow = esm_style({
  prop: 'gridAutoFlow'
});
var gridAutoColumns = esm_style({
  prop: 'gridAutoColumns'
});
var gridAutoRows = esm_style({
  prop: 'gridAutoRows'
});
var gridTemplateColumns = esm_style({
  prop: 'gridTemplateColumns'
});
var gridTemplateRows = esm_style({
  prop: 'gridTemplateRows'
});
var gridTemplateAreas = esm_style({
  prop: 'gridTemplateAreas'
});
var gridArea = esm_style({
  prop: 'gridArea'
});
var grid = esm_compose(gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
/* harmony default export */ var esm_grid = (grid);
;// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/positions.js


var position = esm_style({
  prop: 'position'
});
var zIndex = esm_style({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
var positions_top = esm_style({
  prop: 'top'
});
var right = esm_style({
  prop: 'right'
});
var bottom = esm_style({
  prop: 'bottom'
});
var left = esm_style({
  prop: 'left'
});
/* harmony default export */ var positions = (esm_compose(position, zIndex, positions_top, right, bottom, left));
;// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/palette.js


var color = esm_style({
  prop: 'color',
  themeKey: 'palette'
});
var bgcolor = esm_style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
var palette = esm_compose(color, bgcolor);
/* harmony default export */ var esm_palette = (palette);
;// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/shadows.js

var boxShadow = esm_style({
  prop: 'boxShadow',
  themeKey: 'shadows'
});
/* harmony default export */ var shadows = (boxShadow);
;// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/sizing.js



function transform(value) {
  return value <= 1 ? "".concat(value * 100, "%") : value;
}

var width = esm_style({
  prop: 'width',
  transform: transform
});
var maxWidth = esm_style({
  prop: 'maxWidth',
  transform: transform
});
var minWidth = esm_style({
  prop: 'minWidth',
  transform: transform
});
var height = esm_style({
  prop: 'height',
  transform: transform
});
var maxHeight = esm_style({
  prop: 'maxHeight',
  transform: transform
});
var minHeight = esm_style({
  prop: 'minHeight',
  transform: transform
});
var sizeWidth = esm_style({
  prop: 'size',
  cssProperty: 'width',
  transform: transform
});
var sizeHeight = esm_style({
  prop: 'size',
  cssProperty: 'height',
  transform: transform
});
var boxSizing = esm_style({
  prop: 'boxSizing'
});
var sizing = esm_compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ var esm_sizing = (sizing);
;// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/typography.js


var fontFamily = esm_style({
  prop: 'fontFamily',
  themeKey: 'typography'
});
var fontSize = esm_style({
  prop: 'fontSize',
  themeKey: 'typography'
});
var fontStyle = esm_style({
  prop: 'fontStyle',
  themeKey: 'typography'
});
var fontWeight = esm_style({
  prop: 'fontWeight',
  themeKey: 'typography'
});
var letterSpacing = esm_style({
  prop: 'letterSpacing'
});
var lineHeight = esm_style({
  prop: 'lineHeight'
});
var textAlign = esm_style({
  prop: 'textAlign'
});
var typography = esm_compose(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
/* harmony default export */ var esm_typography = (typography);
// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/spacing.js + 1 modules
var spacing = __webpack_require__(27122);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/styled.js + 1 modules
var styled = __webpack_require__(34266);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js


var styleFunction = esm_styleFunctionSx(esm_compose(esm_borders, display, esm_flexbox, esm_grid, positions, esm_palette, shadows, esm_sizing, spacing/* default */.Z, esm_typography));
/**
 * @ignore - do not document.
 */

var Box = (0,styled/* default */.Z)('div')(styleFunction, {
  name: 'MuiBox'
});
/* harmony default export */ var Box_Box = (Box);

/***/ }),

/***/ 15736:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": function() { return /* binding */ useFormControl; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * @ignore - internal component.
 */

var FormControlContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext();

if (false) {}

function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormControlContext);
}
/* harmony default export */ __webpack_exports__["Z"] = (FormControlContext);

/***/ }),

/***/ 17812:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86010);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1591);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59693);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41810);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93871);










var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: theme.typography.pxToRem(24),
      padding: 12,
      borderRadius: '50%',
      overflow: 'visible',
      // Explicitly set the default value to solve a bug on IE 11.
      color: theme.palette.action.active,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__/* .alpha */ .Fq)(theme.palette.action.active, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        backgroundColor: 'transparent',
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -12,
      '$sizeSmall&': {
        marginLeft: -3
      }
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -12,
      '$sizeSmall&': {
        marginRight: -3
      }
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__/* .alpha */ .Fq)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__/* .alpha */ .Fq)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: 3,
      fontSize: theme.typography.pxToRem(18)
    },

    /* Styles applied to the children container element. */
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    }
  };
};
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

var IconButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function IconButton(props, ref) {
  var _props$edge = props.edge,
      edge = _props$edge === void 0 ? false : _props$edge,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(classes.root, className, color !== 'default' && classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(color))], disabled && classes.disabled, size === "small" && classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(size))], {
      'start': classes.edgeStart,
      'end': classes.edgeEnd
    }[edge]),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: classes.label
  }, children));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(styles, {
  name: 'MuiIconButton'
})(IconButton));

/***/ }),

/***/ 36519:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B7": function() { return /* binding */ isAdornedStart; },
/* harmony export */   "vd": function() { return /* binding */ isFilled; }
/* harmony export */ });
/* unused harmony export hasValue */
// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}

/***/ }),

/***/ 22318:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86010);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1591);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93871);







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      margin: 0
    },

    /* Styles applied to the root element if `variant="body2"`. */
    body2: theme.typography.body2,

    /* Styles applied to the root element if `variant="body1"`. */
    body1: theme.typography.body1,

    /* Styles applied to the root element if `variant="caption"`. */
    caption: theme.typography.caption,

    /* Styles applied to the root element if `variant="button"`. */
    button: theme.typography.button,

    /* Styles applied to the root element if `variant="h1"`. */
    h1: theme.typography.h1,

    /* Styles applied to the root element if `variant="h2"`. */
    h2: theme.typography.h2,

    /* Styles applied to the root element if `variant="h3"`. */
    h3: theme.typography.h3,

    /* Styles applied to the root element if `variant="h4"`. */
    h4: theme.typography.h4,

    /* Styles applied to the root element if `variant="h5"`. */
    h5: theme.typography.h5,

    /* Styles applied to the root element if `variant="h6"`. */
    h6: theme.typography.h6,

    /* Styles applied to the root element if `variant="subtitle1"`. */
    subtitle1: theme.typography.subtitle1,

    /* Styles applied to the root element if `variant="subtitle2"`. */
    subtitle2: theme.typography.subtitle2,

    /* Styles applied to the root element if `variant="overline"`. */
    overline: theme.typography.overline,

    /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
    srOnly: {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `nowrap={true}`. */
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the root element if `gutterBottom={true}`. */
    gutterBottom: {
      marginBottom: '0.35em'
    },

    /* Styles applied to the root element if `paragraph={true}`. */
    paragraph: {
      marginBottom: 16
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="textPrimary"`. */
    colorTextPrimary: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `color="textSecondary"`. */
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `display="inline"`. */
    displayInline: {
      display: 'inline'
    },

    /* Styles applied to the root element if `display="block"`. */
    displayBlock: {
      display: 'block'
    }
  };
};
var defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
};
var Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Typography(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'initial' : _props$color,
      component = props.component,
      _props$display = props.display,
      display = _props$display === void 0 ? 'initial' : _props$display,
      _props$gutterBottom = props.gutterBottom,
      gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
      _props$noWrap = props.noWrap,
      noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'body1' : _props$variant,
      _props$variantMapping = props.variantMapping,
      variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

  var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(align))], display !== 'initial' && classes["display".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(display))]),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(styles, {
  name: 'MuiTypography'
})(Typography));

/***/ }),

/***/ 34266:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ styles_styled; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8679);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js + 4 modules
var makeStyles = __webpack_require__(11719);
;// CONCATENATED MODULE: ./node_modules/@material-ui/styles/esm/styled/styled.js









function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
} // styled-components's API removes the mapping between components and styles.
// Using components as a low-level styling construct can be simpler.


function styled_styled(Component) {
  var componentCreator = function componentCreator(style) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var name = options.name,
        stylesOptions = (0,objectWithoutProperties/* default */.Z)(options, ["name"]);

    if (false) {}

    var classNamePrefix = name;

    if (false) { var displayName; }

    var stylesOrCreator = typeof style === 'function' ? function (theme) {
      return {
        root: function root(props) {
          return style((0,esm_extends/* default */.Z)({
            theme: theme
          }, props));
        }
      };
    } : {
      root: style
    };
    var useStyles = (0,makeStyles/* default */.Z)(stylesOrCreator, (0,esm_extends/* default */.Z)({
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var filterProps;
    var propTypes = {};

    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }
    /* eslint-disable react/forbid-foreign-prop-types */


    if (style.propTypes) {
      propTypes = style.propTypes;
      delete style.propTypes;
    }
    /* eslint-enable react/forbid-foreign-prop-types */


    var StyledComponent = /*#__PURE__*/react.forwardRef(function StyledComponent(props, ref) {
      var children = props.children,
          classNameProp = props.className,
          clone = props.clone,
          ComponentProp = props.component,
          other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "className", "clone", "component"]);

      var classes = useStyles(props);
      var className = (0,clsx_m/* default */.Z)(classes.root, classNameProp);
      var spread = other;

      if (filterProps) {
        spread = omit(spread, filterProps);
      }

      if (clone) {
        return /*#__PURE__*/react.cloneElement(children, (0,esm_extends/* default */.Z)({
          className: (0,clsx_m/* default */.Z)(children.props.className, className)
        }, spread));
      }

      if (typeof children === 'function') {
        return children((0,esm_extends/* default */.Z)({
          className: className
        }, spread));
      }

      var FinalComponent = ComponentProp || Component;
      return /*#__PURE__*/react.createElement(FinalComponent, (0,esm_extends/* default */.Z)({
        ref: ref,
        className: className
      }, spread), children);
    });
     false ? 0 : void 0;

    if (false) {}

    hoist_non_react_statics_cjs_default()(StyledComponent, Component);
    return StyledComponent;
  };

  return componentCreator;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/defaultTheme.js
var defaultTheme = __webpack_require__(99700);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/styled.js




var styled = function styled(Component) {
  var componentCreator = styled_styled(Component);
  return function (style, options) {
    return componentCreator(style, (0,esm_extends/* default */.Z)({
      defaultTheme: defaultTheme/* default */.Z
    }, options));
  };
};

/* harmony default export */ var styles_styled = (styled);

/***/ }),

/***/ 82568:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ createChainedFunction; }
/* harmony export */ });
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (acc, func) {
    if (func == null) {
      return acc;
    }

    if (false) {}

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}

/***/ }),

/***/ 594:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ createSvgIcon; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__(1591);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(93871);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      fontSize: theme.typography.pxToRem(24),
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      })
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="action"`. */
    colorAction: {
      color: theme.palette.action.active
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `color="disabled"`. */
    colorDisabled: {
      color: theme.palette.action.disabled
    },

    /* Styles applied to the root element if `fontSize="inherit"`. */
    fontSizeInherit: {
      fontSize: 'inherit'
    },

    /* Styles applied to the root element if `fontSize="small"`. */
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(20)
    },

    /* Styles applied to the root element if `fontSize="large"`. */
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(35)
    }
  };
};
var SvgIcon = /*#__PURE__*/react.forwardRef(function SvgIcon(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'inherit' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'svg' : _props$component,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 'medium' : _props$fontSize,
      htmlColor = props.htmlColor,
      titleAccess = props.titleAccess,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);

  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, color !== 'inherit' && classes["color".concat((0,capitalize/* default */.Z)(color))], fontSize !== 'default' && fontSize !== 'medium' && classes["fontSize".concat((0,capitalize/* default */.Z)(fontSize))]),
    focusable: "false",
    viewBox: viewBox,
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref
  }, other), children, titleAccess ? /*#__PURE__*/react.createElement("title", null, titleAccess) : null);
});
 false ? 0 : void 0;
SvgIcon.muiName = 'SvgIcon';
/* harmony default export */ var SvgIcon_SvgIcon = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiSvgIcon'
})(SvgIcon));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js



/**
 * Private module reserved for @material-ui/x packages.
 */

function createSvgIcon(path, displayName) {
  var Component = function Component(props, ref) {
    return /*#__PURE__*/react.createElement(SvgIcon_SvgIcon, (0,esm_extends/* default */.Z)({
      ref: ref
    }, props), path);
  };

  if (false) {}

  Component.muiName = SvgIcon_SvgIcon.muiName;
  return /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(Component));
}

/***/ }),

/***/ 83711:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ isMuiElement; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

/***/ }),

/***/ 95001:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useId; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * Private module reserved for @material-ui/x packages.
 */

function useId(idOverride) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(idOverride),
      defaultId = _React$useState[0],
      setDefaultId = _React$useState[1];

  var id = idOverride || defaultId;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the random value for client-side rendering only.
      // We can't use it server-side.
      setDefaultId("mui-".concat(Math.round(Math.random() * 1e5)));
    }
  }, [defaultId]);
  return id;
}

/***/ }),

/***/ 22775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useControlled; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

function useControlled(_ref) {
  var controlled = _ref.controlled,
      defaultProp = _ref.default,
      name = _ref.name,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'value' : _ref$state;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(controlled !== undefined),
      isControlled = _React$useRef.current;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp),
      valueState = _React$useState[0],
      setValue = _React$useState[1];

  var value = isControlled ? controlled : valueState;

  if (false) { var _React$useRef2, defaultValue; }

  var setValueIfUncontrolled = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

/***/ }),

/***/ 67750:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1591);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86010);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80343);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35167);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37661);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30553);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64436);
var GenericRadio=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({root:{color:'gray','&$checked':{color:'#5484b3'}},checked:{}})(function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,(0,_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({color:"default"},props));});var FormComponent=function FormComponent(_ref){var formQuestions=_ref.formQuestions,isDesktop=_ref.isDesktop,onSubmit=_ref.onSubmit;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),activeStep=_useState[0],setActiveStep=_useState[1];var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),disableButton=_useState2[0],setDisableButton=_useState2[1];var refNextSection=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);refNextSection.current=Array(formQuestions.length).fill().map(function(_,i){return/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();});var handleNext=function handleNext(){setActiveStep(function(prevActiveStep){return prevActiveStep+1;});formQuestions[activeStep+1].visible=true;refNextSection.current[activeStep+1].scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});handleDisableButton();};var handleEnableButton=function handleEnableButton(){setDisableButton(false);};var handleDisableButton=function handleDisableButton(){setDisableButton(true);};var setQuestionValue=function setQuestionValue(indexSection,indexQuestion,value){formQuestions[indexSection].questions[indexQuestion].value=value;if(isSectionComplete(indexSection)){handleEnableButton();}};var isSectionComplete=function isSectionComplete(indexSection){var flag=true;formQuestions[indexSection].questions.map(function(item){if(item.value===-1)flag=false;});return flag;};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,formQuestions.map(function(section,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{key:section.title,className:"formBox",style:{backgroundColor:section.color},ref:function ref(el){return refNextSection.current[i]=el;}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{style:{margin:0}},section.title),section.visible&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)("topSpacingBox","spacingBox")},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,section.description)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,null,section.questions.map(function(item,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{className:"spacingBox",key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"itemQuestion"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,section.index+1,".",i+1)," - ",item.question),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{className:"radioBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{component:"fieldset"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{row:true,"aria-label":"form",name:"form1"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{value:"1",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GenericRadio,null),label:"1",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,1);}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{value:"2",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GenericRadio,null),label:"2",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,2);}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{value:"3",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GenericRadio,null),label:"3",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,3);}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{value:"4",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GenericRadio,null),label:"4",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,4);}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{value:"5",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GenericRadio,null),label:"5",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,5);}})))));})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)("boxFlexEnd","spacingBox")},activeStep===section.index&&activeStep!==formQuestions.length-1&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"buttonPrimary",style:{marginLeft:'10px'},onClick:handleNext,disabled:disableButton},"Next"),activeStep===section.index&&activeStep===formQuestions.length-1&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"buttonPrimary",style:{marginLeft:'10px'},onClick:onSubmit,disabled:disableButton},"Finish"))));}));};FormComponent.propTypes={formQuestions:(prop_types__WEBPACK_IMPORTED_MODULE_9___default().array),isDesktop:(prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),onSubmit:(prop_types__WEBPACK_IMPORTED_MODULE_9___default().func)};FormComponent.defaultProps={formQuestions:[]};/* harmony default export */ __webpack_exports__["default"] = (FormComponent);

/***/ })

}]);