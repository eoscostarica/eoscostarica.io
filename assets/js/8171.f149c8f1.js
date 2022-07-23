(self["webpackChunkeoscostarica_io"] = self["webpackChunkeoscostarica_io"] || []).push([[8171],{

/***/ 79825:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Fade__WEBPACK_IMPORTED_MODULE_0__.Z; }
/* harmony export */ });
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73637);


/***/ }),

/***/ 1890:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _IconButton__WEBPACK_IMPORTED_MODULE_0__.Z; }
/* harmony export */ });
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17812);


/***/ }),

/***/ 69769:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Slide__WEBPACK_IMPORTED_MODULE_0__.Z; }
/* harmony export */ });
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82285);


/***/ }),

/***/ 24214:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MuiThemeProvider": function() { return /* reexport */ ThemeProvider_ThemeProvider; },
  "ServerStyleSheets": function() { return /* reexport */ ServerStyleSheets; },
  "StylesProvider": function() { return /* reexport */ StylesProvider/* default */.ZP; },
  "ThemeProvider": function() { return /* reexport */ ThemeProvider_ThemeProvider; },
  "alpha": function() { return /* reexport */ colorManipulator/* alpha */.Fq; },
  "createGenerateClassName": function() { return /* reexport */ createGenerateClassName/* default */.Z; },
  "createMuiTheme": function() { return /* reexport */ createTheme/* createMuiTheme */.A; },
  "createStyles": function() { return /* reexport */ createStyles_createStyles; },
  "createTheme": function() { return /* reexport */ createTheme/* default */.Z; },
  "darken": function() { return /* reexport */ colorManipulator/* darken */._j; },
  "decomposeColor": function() { return /* reexport */ colorManipulator/* decomposeColor */.tB; },
  "duration": function() { return /* reexport */ transitions/* duration */.x9; },
  "easing": function() { return /* reexport */ transitions/* easing */.Ui; },
  "emphasize": function() { return /* reexport */ colorManipulator/* emphasize */._4; },
  "fade": function() { return /* reexport */ colorManipulator/* fade */.U1; },
  "getContrastRatio": function() { return /* reexport */ colorManipulator/* getContrastRatio */.mi; },
  "getLuminance": function() { return /* reexport */ colorManipulator/* getLuminance */.H3; },
  "hexToRgb": function() { return /* reexport */ colorManipulator/* hexToRgb */.oo; },
  "hslToRgb": function() { return /* reexport */ colorManipulator/* hslToRgb */.ve; },
  "jssPreset": function() { return /* reexport */ jssPreset/* default */.Z; },
  "lighten": function() { return /* reexport */ colorManipulator/* lighten */.$n; },
  "makeStyles": function() { return /* reexport */ styles_makeStyles; },
  "recomposeColor": function() { return /* reexport */ colorManipulator/* recomposeColor */.wy; },
  "responsiveFontSizes": function() { return /* reexport */ responsiveFontSizes; },
  "rgbToHex": function() { return /* reexport */ colorManipulator/* rgbToHex */.vq; },
  "styled": function() { return /* reexport */ styled/* default */.Z; },
  "unstable_createMuiStrictModeTheme": function() { return /* reexport */ createMuiStrictModeTheme; },
  "useTheme": function() { return /* reexport */ useTheme/* default */.Z; },
  "withStyles": function() { return /* reexport */ withStyles/* default */.Z; },
  "withTheme": function() { return /* reexport */ styles_withTheme; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(59693);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createTheme.js + 15 modules
var createTheme = __webpack_require__(83559);
// EXTERNAL MODULE: ./node_modules/@material-ui/utils/esm/deepmerge.js
var deepmerge = __webpack_require__(35953);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js


function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return createTheme/* default.apply */.Z.apply(void 0, [(0,deepmerge/* default */.Z)({
    unstable_strictMode: true
  }, options)].concat(args));
}
;// CONCATENATED MODULE: ./node_modules/@material-ui/styles/esm/createStyles/createStyles.js
function createStyles(styles) {
  return styles;
}
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
 // let warnOnce = false;
// To remove in v5

function createStyles_createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return createStyles(styles);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js + 4 modules
var makeStyles = __webpack_require__(11719);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/defaultTheme.js
var defaultTheme = __webpack_require__(99700);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js




function makeStyles_makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,makeStyles/* default */.Z)(stylesOrCreator, (0,esm_extends/* default */.Z)({
    defaultTheme: defaultTheme/* default */.Z
  }, options));
}

/* harmony default export */ var styles_makeStyles = (makeStyles_makeStyles);
// EXTERNAL MODULE: ./node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js
var formatMuiErrorMessage = __webpack_require__(60288);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/cssUtils.js

function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return function (length, toUnit) {
    var fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    var pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
        return length;
      }
    } // Convert length in pixels to the output unit


    var outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty(_ref) {
  var size = _ref.size,
      grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight,
      pixels = _ref2.pixels,
      htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$unit = _ref3.unit,
      unit = _ref3$unit === void 0 ? 'rem' : _ref3$unit,
      _ref3$breakpoints = _ref3.breakpoints,
      breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints,
      _ref3$transform = _ref3.transform,
      transform = _ref3$transform === void 0 ? null : _ref3$transform;

  var output = (0,defineProperty/* default */.Z)({}, cssProperty, "".concat(min).concat(unit));

  var factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function (breakpoint) {
    var value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output["@media (min-width:".concat(breakpoint, "px)")] = (0,defineProperty/* default */.Z)({}, cssProperty, "".concat(Math.round(value * 10000) / 10000).concat(unit));
  });
  return output;
}
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js



function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints,
      breakpoints = _options$breakpoints === void 0 ? ['sm', 'md', 'lg'] : _options$breakpoints,
      _options$disableAlign = options.disableAlign,
      disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign,
      _options$factor = options.factor,
      factor = _options$factor === void 0 ? 2 : _options$factor,
      _options$variants = options.variants,
      variants = _options$variants === void 0 ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'] : _options$variants;

  var theme = (0,esm_extends/* default */.Z)({}, themeInput);

  theme.typography = (0,esm_extends/* default */.Z)({}, theme.typography);
  var typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  var convert = convertLength(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function (x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function (variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;

    if (!isUnitless(lineHeight) && !disableAlign) {
      throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.Z)(6));
    }

    if (!isUnitless(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    var transform = null;

    if (!disableAlign) {
      transform = function transform(value) {
        return alignProperty({
          size: value,
          grid: fontGrid({
            pixels: 4,
            lineHeight: lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }

    typography[variant] = (0,esm_extends/* default */.Z)({}, style, responsiveProperty({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform: transform
    }));
  });
  return theme;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/styled.js + 1 modules
var styled = __webpack_require__(34266);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/transitions.js
var transitions = __webpack_require__(43366);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__(1591);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8679);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/useTheme/useTheme.js
var useTheme_useTheme = __webpack_require__(159);
;// CONCATENATED MODULE: ./node_modules/@material-ui/styles/esm/withTheme/withTheme.js







function withThemeCreator() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultTheme = options.defaultTheme;

  var withTheme = function withTheme(Component) {
    if (false) {}

    var WithTheme = /*#__PURE__*/react.forwardRef(function WithTheme(props, ref) {
      var innerRef = props.innerRef,
          other = (0,objectWithoutProperties/* default */.Z)(props, ["innerRef"]);

      var theme = (0,useTheme_useTheme/* default */.Z)() || defaultTheme;
      return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
        theme: theme,
        ref: innerRef || ref
      }, other));
    });
     false ? 0 : void 0;

    if (false) {}

    hoist_non_react_statics_cjs_default()(WithTheme, Component);

    if (false) {}

    return WithTheme;
  };

  return withTheme;
} // Provide the theme object as a prop to the input component.
// It's an alternative API to useTheme().
// We encourage the usage of useTheme() where possible.

var withTheme = withThemeCreator();
/* harmony default export */ var withTheme_withTheme = ((/* unused pure expression or super */ null && (withTheme)));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/withTheme.js


var styles_withTheme_withTheme = withThemeCreator({
  defaultTheme: defaultTheme/* default */.Z
});
/* harmony default export */ var styles_withTheme = (styles_withTheme_withTheme);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/jss/dist/jss.esm.js
var jss_esm = __webpack_require__(54013);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js
var StylesProvider = __webpack_require__(26975);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js
var createGenerateClassName = __webpack_require__(5034);
;// CONCATENATED MODULE: ./node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js








var ServerStyleSheets = /*#__PURE__*/function () {
  function ServerStyleSheets() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,classCallCheck/* default */.Z)(this, ServerStyleSheets);

    this.options = options;
  }

  (0,createClass/* default */.Z)(ServerStyleSheets, [{
    key: "collect",
    value: function collect(children) {
      // This is needed in order to deduplicate the injection of CSS in the page.
      var sheetsManager = new Map(); // This is needed in order to inject the critical CSS.

      this.sheetsRegistry = new jss_esm/* SheetsRegistry */.xE(); // A new class name generator

      var generateClassName = (0,createGenerateClassName/* default */.Z)();
      return /*#__PURE__*/react.createElement(StylesProvider/* default */.ZP, (0,esm_extends/* default */.Z)({
        sheetsManager: sheetsManager,
        serverGenerateClassName: generateClassName,
        sheetsRegistry: this.sheetsRegistry
      }, this.options), children);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.sheetsRegistry ? this.sheetsRegistry.toString() : '';
    }
  }, {
    key: "getStyleElement",
    value: function getStyleElement(props) {
      return /*#__PURE__*/react.createElement('style', (0,esm_extends/* default */.Z)({
        id: 'jss-server-side',
        key: 'jss-server-side',
        dangerouslySetInnerHTML: {
          __html: this.toString()
        }
      }, props));
    }
  }]);

  return ServerStyleSheets;
}();


// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js
var ThemeContext = __webpack_require__(83800);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/ThemeProvider/nested.js
var nested = __webpack_require__(17076);
;// CONCATENATED MODULE: ./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js






 // To support composition of theme.

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    var mergedTheme = localTheme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  return (0,esm_extends/* default */.Z)({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  var children = props.children,
      localTheme = props.theme;
  var outerTheme = (0,useTheme_useTheme/* default */.Z)();

  if (false) {}

  var theme = react.useMemo(function () {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested/* default */.Z] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/react.createElement(ThemeContext/* default.Provider */.Z.Provider, {
    value: theme
  }, children);
}

 false ? 0 : void 0;

if (false) {}

/* harmony default export */ var ThemeProvider_ThemeProvider = (ThemeProvider);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js + 9 modules
var jssPreset = __webpack_require__(94237);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/index.js

 // eslint-disable-next-line camelcase












/***/ }),

/***/ 93837:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(64836);

var _interopRequireWildcard = __webpack_require__(75263);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(2108));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord');

exports["default"] = _default;

/***/ }),

/***/ 18042:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(64836);

var _interopRequireWildcard = __webpack_require__(75263);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(2108));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'NavigateBefore');

exports["default"] = _default;

/***/ }),

/***/ 98121:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(64836);

var _interopRequireWildcard = __webpack_require__(75263);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(2108));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'NavigateNext');

exports["default"] = _default;

/***/ }),

/***/ 81042:
/***/ (function(module) {

"use strict";


// Gets all non-builtin properties up the prototype chain
const getAllProperties = object => {
	const props = new Set();

	do {
		for (const key of Reflect.ownKeys(object)) {
			props.add([object, key]);
		}
	} while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);

	return props;
};

module.exports = (self, options) => {
	options = Object.assign({}, options);

	const filter = key => {
		const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);

		if (options.include) {
			return options.include.some(match);
		}

		if (options.exclude) {
			return !options.exclude.some(match);
		}

		return true;
	};

	for (const [object, key] of getAllProperties(self.constructor.prototype)) {
		if (key === 'constructor' || !filter(key)) {
			continue;
		}

		const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
		if (descriptor && typeof descriptor.value === 'function') {
			self[key] = self[key].bind(self);
		}
	}

	return self;
};

const excludedReactMethods = [
	'componentWillMount',
	'UNSAFE_componentWillMount',
	'render',
	'getSnapshotBeforeUpdate',
	'componentDidMount',
	'componentWillReceiveProps',
	'UNSAFE_componentWillReceiveProps',
	'shouldComponentUpdate',
	'componentWillUpdate',
	'UNSAFE_componentWillUpdate',
	'componentDidUpdate',
	'componentWillUnmount',
	'componentDidCatch',
	'setState',
	'forceUpdate'
];

module.exports.react = (self, options) => {
	options = Object.assign({}, options);
	options.exclude = (options.exclude || []).concat(excludedReactMethods);
	return module.exports(self, options);
};


/***/ }),

/***/ 58222:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _Fade = __webpack_require__(79825);

var _Fade2 = _interopRequireDefault(_Fade);

var _Slide = __webpack_require__(69769);

var _Slide2 = _interopRequireDefault(_Slide);

var _IconButton = __webpack_require__(1890);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _styles = __webpack_require__(24214);

var _autoBind = __webpack_require__(81042);

var _autoBind2 = _interopRequireDefault(_autoBind);

var _FiberManualRecord = __webpack_require__(93837);

var _FiberManualRecord2 = _interopRequireDefault(_FiberManualRecord);

var _NavigateBefore = __webpack_require__(18042);

var _NavigateBefore2 = _interopRequireDefault(_NavigateBefore);

var _NavigateNext = __webpack_require__(98121);

var _NavigateNext2 = _interopRequireDefault(_NavigateNext);

var _reactSwipeable = __webpack_require__(86037);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = {
    root: {
        position: "relative",
        overflow: "hidden"
    },
    indicators: {
        width: "100%",
        marginTop: "10px",
        textAlign: "center"
    },
    indicator: {
        cursor: "pointer",
        transition: "200ms",
        padding: 0,
        color: "#afafaf",
        '&:hover': {
            color: "#1f1f1f"
        },
        '&:active': {
            color: "#1f1f1f"
        }
    },
    indicatorIcon: {
        fontSize: "15px"
    },
    active: {
        color: "#494949"
    },
    buttonWrapper: {
        position: "absolute",
        height: "100px",
        backgroundColor: "transparent",
        top: "calc(50% - 70px)",
        '&:hover': {
            '& $button': {
                backgroundColor: "black",
                filter: "brightness(120%)",
                opacity: "0.4"
            }
        }
    },
    fullHeightHoverWrapper: {
        height: "100%", // This is 100% - indicator height - indicator margin
        top: "0"
    },
    fullHeightHoverButton: {},
    buttonVisible: {
        opacity: "1"
    },
    buttonHidden: {
        opacity: "0"
    },
    button: {
        margin: "0 10px",
        position: "relative",
        backgroundColor: "#494949",
        top: "calc(50% - 20px) !important",
        color: "white",
        fontSize: "30px",
        transition: "200ms",
        cursor: "pointer",
        '&:hover': {
            opacity: "0.6 !important"
        }
    },
    next: {
        right: 0
    },
    prev: {
        left: 0
    }
};

var sanitizeNavProps = function sanitizeNavProps(props) {
    var _ref = props || {},
        className = _ref.className,
        style = _ref.style,
        rest = _objectWithoutProperties(_ref, ['className', 'style']);

    return props !== undefined ? _extends({
        style: props.style !== undefined ? props.style : {},
        className: props.className !== undefined ? props.className : ""
    }, rest) : _extends({ style: {}, className: "" }, rest);
};

var sanitizeProps = function sanitizeProps(props) {
    var animation = props.animation !== undefined ? props.animation : "fade";
    var timeout = props.timeout !== undefined ? props.timeout : animation === "fade" ? 500 : 200;

    return {
        className: props.className !== undefined ? props.className : "",
        children: props.children ? props.children : [],

        index: props.index !== undefined ? props.index : 0,
        strictIndexing: props.strictIndexing !== undefined ? props.strictIndexing : true,

        autoPlay: props.autoPlay !== undefined ? props.autoPlay : true,
        stopAutoPlayOnHover: props.stopAutoPlayOnHover !== undefined ? props.stopAutoPlayOnHover : true,
        interval: props.interval !== undefined ? props.interval : 4000,

        animation: animation,
        reverseEdgeAnimationDirection: props.reverseEdgeAnimationDirection !== undefined ? props.reverseEdgeAnimationDirection : true,
        timeout: timeout,

        swipe: props.swipe !== undefined ? props.swipe : true,

        navButtonsAlwaysInvisible: props.navButtonsAlwaysInvisible !== undefined ? props.navButtonsAlwaysInvisible : false,
        navButtonsAlwaysVisible: props.navButtonsAlwaysVisible !== undefined ? props.navButtonsAlwaysVisible : false,
        cycleNavigation: props.cycleNavigation !== undefined ? props.cycleNavigation : true,
        fullHeightHover: props.fullHeightHover !== undefined ? props.fullHeightHover : true,
        navButtonsWrapperProps: sanitizeNavProps(props.navButtonsWrapperProps),
        navButtonsProps: sanitizeNavProps(props.navButtonsProps),
        NavButton: props.NavButton,

        NextIcon: props.NextIcon !== undefined ? props.NextIcon : _react2.default.createElement(_NavigateNext2.default, null),
        PrevIcon: props.PrevIcon !== undefined ? props.PrevIcon : _react2.default.createElement(_NavigateBefore2.default, null),

        indicators: props.indicators !== undefined ? props.indicators : true,
        indicatorContainerProps: sanitizeNavProps(props.indicatorContainerProps),
        indicatorIconButtonProps: sanitizeNavProps(props.indicatorIconButtonProps),
        activeIndicatorIconButtonProps: sanitizeNavProps(props.activeIndicatorIconButtonProps),
        IndicatorIcon: props.IndicatorIcon,

        onChange: props.onChange !== undefined ? props.onChange : function () {},
        changeOnFirstRender: props.changeOnFirstRender !== undefined ? props.changeOnFirstRender : false,
        next: props.next !== undefined ? props.next : function () {},
        prev: props.prev !== undefined ? props.prev : function () {}

    };
};

var Carousel = function (_Component) {
    _inherits(Carousel, _Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        (0, _autoBind2.default)(_this);

        _this.state = {
            active: 0,
            prevActive: 0,
            displayed: 0
        };

        _this.timer = null;
        return _this;
    }

    _createClass(Carousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _sanitizeProps = sanitizeProps(this.props),
                index = _sanitizeProps.index,
                changeOnFirstRender = _sanitizeProps.changeOnFirstRender;

            this.setActive(index, undefined, changeOnFirstRender);

            this.start();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.stop();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            prevProps = sanitizeProps(prevProps);

            var _sanitizeProps2 = sanitizeProps(this.props),
                autoPlay = _sanitizeProps2.autoPlay,
                interval = _sanitizeProps2.interval,
                children = _sanitizeProps2.children,
                index = _sanitizeProps2.index;

            if (autoPlay !== prevProps.autoPlay || interval !== prevProps.interval) {
                this.reset();
            }

            if (children.length !== prevProps.children.length) {
                this.setActive(index);
            }

            if (prevProps.index !== index) {
                this.setActive(index);
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }
    }, {
        key: 'start',
        value: function start() {
            var _sanitizeProps3 = sanitizeProps(this.props),
                autoPlay = _sanitizeProps3.autoPlay,
                interval = _sanitizeProps3.interval;

            if (autoPlay) {
                this.timer = setInterval(this.next, interval);
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            var _sanitizeProps4 = sanitizeProps(this.props),
                autoPlay = _sanitizeProps4.autoPlay;

            this.stop();

            if (autoPlay) {
                this.start();
            }
        }
    }, {
        key: 'setActive',
        value: function setActive(index) {
            var _this2 = this;

            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
            var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var _sanitizeProps5 = sanitizeProps(this.props),
                onChange = _sanitizeProps5.onChange,
                timeout = _sanitizeProps5.timeout,
                children = _sanitizeProps5.children,
                strictIndexing = _sanitizeProps5.strictIndexing;

            // if index is bigger than the children length, set it to be the last child (if strictIndexing)


            if (Array.isArray(children)) {
                if (strictIndexing && index > children.length - 1) index = children.length - 1;
                if (strictIndexing && index < 0) index = 0;
            } else {
                index = 0;
            }

            var prevActive = this.state.active;

            this.setState({
                active: index,
                prevActive: prevActive,
                displayed: prevActive
            }, this.reset);

            setTimeout(function () {
                _this2.setState({
                    displayed: index
                }, function () {
                    if (runCallbacks) {
                        // Call user defined callbacks
                        callback(index, prevActive);
                        onChange(index, prevActive);
                    }
                });
            }, timeout.exit ? timeout.exit : timeout);
        }
    }, {
        key: 'next',
        value: function next(event) {
            var _sanitizeProps6 = sanitizeProps(this.props),
                children = _sanitizeProps6.children,
                next = _sanitizeProps6.next,
                cycleNavigation = _sanitizeProps6.cycleNavigation;

            var nextActive = this.state.active + 1 > children.length - 1 ? cycleNavigation ? 0 : this.state.active : this.state.active + 1;

            this.setActive(nextActive, next);

            if (event) event.stopPropagation();
        }
    }, {
        key: 'prev',
        value: function prev(event) {
            var _sanitizeProps7 = sanitizeProps(this.props),
                children = _sanitizeProps7.children,
                prev = _sanitizeProps7.prev,
                cycleNavigation = _sanitizeProps7.cycleNavigation;

            var nextActive = this.state.active - 1 < 0 ? cycleNavigation ? children.length - 1 : this.state.active : this.state.active - 1;

            this.setActive(nextActive, prev);

            if (event) event.stopPropagation();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _sanitizeProps8 = sanitizeProps(this.props),
                children = _sanitizeProps8.children,
                className = _sanitizeProps8.className,
                stopAutoPlayOnHover = _sanitizeProps8.stopAutoPlayOnHover,
                animation = _sanitizeProps8.animation,
                reverseEdgeAnimationDirection = _sanitizeProps8.reverseEdgeAnimationDirection,
                timeout = _sanitizeProps8.timeout,
                swipe = _sanitizeProps8.swipe,
                navButtonsAlwaysInvisible = _sanitizeProps8.navButtonsAlwaysInvisible,
                navButtonsAlwaysVisible = _sanitizeProps8.navButtonsAlwaysVisible,
                cycleNavigation = _sanitizeProps8.cycleNavigation,
                fullHeightHover = _sanitizeProps8.fullHeightHover,
                navButtonsProps = _sanitizeProps8.navButtonsProps,
                navButtonsWrapperProps = _sanitizeProps8.navButtonsWrapperProps,
                NavButton = _sanitizeProps8.NavButton,
                NextIcon = _sanitizeProps8.NextIcon,
                PrevIcon = _sanitizeProps8.PrevIcon,
                indicators = _sanitizeProps8.indicators,
                indicatorContainerProps = _sanitizeProps8.indicatorContainerProps,
                indicatorIconButtonProps = _sanitizeProps8.indicatorIconButtonProps,
                activeIndicatorIconButtonProps = _sanitizeProps8.activeIndicatorIconButtonProps,
                IndicatorIcon = _sanitizeProps8.IndicatorIcon;

            var classes = this.props.classes;

            var buttonsClass = navButtonsProps.className,
                buttonsStyle = navButtonsProps.style,
                buttonsProps = _objectWithoutProperties(navButtonsProps, ['className', 'style']);

            var buttonsWrapperClass = navButtonsWrapperProps.className,
                buttonsWrapperStyle = navButtonsWrapperProps.style,
                buttonsWrapperProps = _objectWithoutProperties(navButtonsWrapperProps, ['className', 'style']);

            var buttonVisibilityClassValue = '' + (navButtonsAlwaysVisible ? classes.buttonVisible : classes.buttonHidden);
            var buttonCssClassValue = classes.button + ' ' + buttonVisibilityClassValue + ' ' + (fullHeightHover ? classes.fullHeightHoverButton : "") + ' ' + buttonsClass;
            var buttonWrapperCssClassValue = classes.buttonWrapper + ' ' + (fullHeightHover ? classes.fullHeightHoverWrapper : "") + ' ' + buttonsWrapperClass;

            var compareActiveDisplayed = function compareActiveDisplayed() {
                if (_this3.state.active === 0 && _this3.state.prevActive === children.length - 1) {
                    return reverseEdgeAnimationDirection; // ? false : true;
                }

                if (_this3.state.active === children.length - 1 && _this3.state.prevActive === 0) {
                    return reverseEdgeAnimationDirection; // ? true : false;
                }

                if (_this3.state.active > _this3.state.prevActive) {
                    return true;
                }

                return false;
            };

            var showButton = function showButton() {
                var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                if (cycleNavigation) return true;

                if (next && _this3.state.active + 1 > children.length - 1) return false;
                if (!next && _this3.state.active - 1 < 0) return false;

                return true;
            };

            return _react2.default.createElement(
                'div',
                {
                    className: classes.root + ' ' + (className ? className : ""),
                    onMouseOver: function onMouseOver() {
                        stopAutoPlayOnHover && _this3.stop();
                    },
                    onMouseOut: function onMouseOut() {
                        stopAutoPlayOnHover && _this3.reset();
                    },
                    onFocus: function onFocus() {
                        stopAutoPlayOnHover && _this3.stop();
                    },
                    onBlur: function onBlur() {
                        stopAutoPlayOnHover && _this3.reset();
                    }
                },
                Array.isArray(children) ? children.map(function (child, index) {
                    return _react2.default.createElement(CarouselItem, {
                        key: 'carousel-item' + index,
                        display: index === _this3.state.displayed // ? true : false
                        , active: index === _this3.state.active // ? true : false
                        , isNext: compareActiveDisplayed(),
                        child: child,
                        animation: animation,
                        timeout: timeout,
                        swipe: swipe,
                        next: _this3.next,
                        prev: _this3.prev
                    });
                }) : _react2.default.createElement(CarouselItem, {
                    key: 'carousel-item0',
                    display: true,
                    active: true,
                    child: children,
                    animation: animation,
                    timeout: timeout
                }),
                !navButtonsAlwaysInvisible && showButton(true) && _react2.default.createElement(
                    'div',
                    _extends({ className: buttonWrapperCssClassValue + ' ' + classes.next, style: buttonsWrapperStyle }, buttonsWrapperProps),
                    NavButton !== undefined ? NavButton(_extends({ onClick: this.next, className: buttonCssClassValue, style: buttonsStyle, next: true, prev: false }, buttonsProps)) : _react2.default.createElement(
                        _IconButton2.default,
                        _extends({ className: '' + buttonCssClassValue, onClick: this.next, 'aria-label': 'Next', style: buttonsStyle }, buttonsProps),
                        NextIcon
                    )
                ),
                !navButtonsAlwaysInvisible && showButton(false) && _react2.default.createElement(
                    'div',
                    _extends({ className: buttonWrapperCssClassValue + ' ' + classes.prev, style: buttonsWrapperStyle }, buttonsWrapperProps),
                    NavButton !== undefined ? NavButton.apply(undefined, [{ onClick: this.prev, className: buttonCssClassValue, style: navButtonsProps.style, next: false, prev: true }].concat(_toConsumableArray(buttonsProps))) : _react2.default.createElement(
                        _IconButton2.default,
                        _extends({ className: '' + buttonCssClassValue, onClick: this.prev, 'aria-label': 'Previous', style: navButtonsProps.style }, buttonsProps),
                        PrevIcon
                    )
                ),
                indicators ? _react2.default.createElement(Indicators, {
                    classes: classes,
                    length: children.length,
                    active: this.state.active,
                    press: this.setActive,
                    indicatorContainerProps: indicatorContainerProps,
                    indicatorIconButtonProps: indicatorIconButtonProps,
                    activeIndicatorIconButtonProps: activeIndicatorIconButtonProps,
                    IndicatorIcon: IndicatorIcon
                }) : null
            );
        }
    }]);

    return Carousel;
}(_react.Component);

function CarouselItem(props) {
    var swipeHandlers = (0, _reactSwipeable.useSwipeable)({
        onSwipedLeft: function onSwipedLeft() {
            return props.next();
        },
        onSwipedRight: function onSwipedRight() {
            return props.prev();
        }
    });

    swipeHandlers = props.swipe ? swipeHandlers : {};

    return props.display ? _react2.default.createElement(
        'div',
        _extends({}, swipeHandlers, { className: 'CarouselItem' }),
        props.animation === "slide" ? _react2.default.createElement(
            _Slide2.default,
            { direction: props.active ? props.isNext ? "left" : "right" : props.isNext ? "right" : "left", 'in': props.active, timeout: props.timeout },
            _react2.default.createElement(
                'div',
                null,
                props.child
            )
        ) : _react2.default.createElement(
            _Fade2.default,
            { 'in': props.active, timeout: props.timeout },
            _react2.default.createElement(
                'div',
                null,
                props.child
            )
        )
    ) : null;
}

function Indicators(props) {
    var classes = props.classes;
    var IndicatorIcon = props.IndicatorIcon !== undefined ? props.IndicatorIcon : _react2.default.createElement(_FiberManualRecord2.default, {
        size: 'small',
        className: classes.indicatorIcon
    });

    var _props$indicatorIconB = props.indicatorIconButtonProps,
        indicatorIconButtonClass = _props$indicatorIconB.className,
        indicatorIconButtonStyle = _props$indicatorIconB.style,
        indicatorIconButtonProps = _objectWithoutProperties(_props$indicatorIconB, ['className', 'style']);

    var _props$activeIndicato = props.activeIndicatorIconButtonProps,
        activeIndicatorIconButtonClass = _props$activeIndicato.className,
        activeIndicatorIconButtonStyle = _props$activeIndicato.style,
        activeIndicatorIconButtonProps = _objectWithoutProperties(_props$activeIndicato, ['className', 'style']);

    var indicators = [];

    var _loop = function _loop(i) {
        var className = i === props.active ? classes.indicator + ' ' + indicatorIconButtonClass + ' ' + classes.active + ' ' + activeIndicatorIconButtonClass : classes.indicator + ' ' + indicatorIconButtonClass;

        var style = i === props.active ? Object.assign({}, indicatorIconButtonStyle, activeIndicatorIconButtonStyle) : indicatorIconButtonStyle;

        var restProps = i === props.active ? Object.assign({}, indicatorIconButtonProps, activeIndicatorIconButtonProps) : indicatorIconButtonProps;

        if (restProps['aria-label'] === undefined) restProps['aria-label'] = 'carousel indicator';

        var item = _react2.default.createElement(
            _IconButton2.default,
            _extends({
                key: i,
                className: className,
                style: style,
                onClick: function onClick() {
                    props.press(i);
                },
                size: 'small'
            }, restProps, {
                // Always add the index to any given aria label
                'aria-label': restProps['aria-label'] + ' ' + (i + 1)
            }),
            IndicatorIcon
        );

        indicators.push(item);
    };

    for (var i = 0; i < props.length; i++) {
        _loop(i);
    }

    var _props$indicatorConta = props.indicatorContainerProps,
        indicatorContainerClass = _props$indicatorConta.className,
        indicatorContainerStyle = _props$indicatorConta.style,
        indicatorContainerProps = _objectWithoutProperties(_props$indicatorConta, ['className', 'style']);

    return _react2.default.createElement(
        'div',
        _extends({ className: classes.indicators + ' ' + indicatorContainerClass, style: indicatorContainerStyle }, indicatorContainerProps),
        indicators
    );
}

exports["default"] = (0, _styles.withStyles)(styles)(Carousel);

/***/ }),

/***/ 13056:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _Carousel = __webpack_require__(58222);

var _Carousel2 = _interopRequireDefault(_Carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Z = _Carousel2.default;

/***/ }),

/***/ 41113:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function webpackUniversalModuleDefinition(e,t){ true?module.exports=t(__webpack_require__(67294)):0}("undefined"!=typeof self?self:this,(function(e){return function(e){var t={};function __nested_webpack_require_387__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__nested_webpack_require_387__),r.l=!0,r.exports}return __nested_webpack_require_387__.m=e,__nested_webpack_require_387__.c=t,__nested_webpack_require_387__.d=function(e,t,n){__nested_webpack_require_387__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__nested_webpack_require_387__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__nested_webpack_require_387__.t=function(e,t){if(1&t&&(e=__nested_webpack_require_387__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__nested_webpack_require_387__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__nested_webpack_require_387__.d(n,r,function(t){return e[t]}.bind(null,r));return n},__nested_webpack_require_387__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __nested_webpack_require_387__.d(t,"a",t),t},__nested_webpack_require_387__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__nested_webpack_require_387__.p="",__nested_webpack_require_387__(__nested_webpack_require_387__.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var o=r(n(0)),i=function(e){_inherits(Parallax,e);var t=_createSuper(Parallax);function Parallax(){return _classCallCheck(this,Parallax),t.apply(this,arguments)}return Parallax}(o.default.Component);t.Parallax=i;var a=function(e){_inherits(Background,e);var t=_createSuper(Background);function Background(){return _classCallCheck(this,Background),t.apply(this,arguments)}return Background}(o.default.Component);t.Background=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.getNodeHeight=t.isScrolledIntoView=t.getWindowHeight=void 0,t.getWindowHeight=function(e){if(!e)return 0;var t=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0];return t.innerHeight||r.clientHeight||o.clientHeight},t.isScrolledIntoView=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;if(!r)return!1;var o=e.getBoundingClientRect().top-n,i=e.getBoundingClientRect().bottom+n;return o<=t.getWindowHeight(r)&&i>=0},t.getNodeHeight=function(e,n){return e?n&&"clientHeight"in n?n.clientHeight:t.getWindowHeight(e):0},t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var o=r(n(4));t.Parallax=o.default;var i=r(n(7));t.Background=i.default},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=n(1),a=n(5),c=n(2),u=r(n(6)),s={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},l=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Parallax,e);var t=_createSuper(Parallax);function Parallax(e){var n;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Parallax),(n=t.call(this,e)).onWindowResize=function(){n.parentHeight=c.getNodeHeight(n.canUseDOM,n.parent),n.updatePosition()},n.onWindowLoad=function(){n.updatePosition()},n.onScroll=function(){if(n.canUseDOM){var e=Date.now();e-n.timestamp>=10&&c.isScrolledIntoView(n.node,100,n.canUseDOM)&&(window.requestAnimationFrame(n.updatePosition),n.timestamp=e)}},n.onContentMount=function(e){n.content=e},n.updatePosition=function(){if(n.content){var e=!1;n.contentHeight=n.content.getBoundingClientRect().height,n.contentWidth=n.node.getBoundingClientRect().width,n.img&&n.img.naturalWidth/n.img.naturalHeight<n.contentWidth/n.getImageHeight()&&(e=!0);var t=a.getRelativePosition(n.node,n.canUseDOM),r=!!n.img,o=n.bg&&n.state.splitChildren.bgChildren.length>0;r&&n.setImagePosition(t,e),o&&n.setBackgroundPosition(t),r||o||n.setState({percentage:t})}},n.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:s,bgStyle:Object.assign(Object.assign({},s),e.bgStyle),percentage:0,splitChildren:a.getSplitChildren(e)},n.canUseDOM=c.canUseDOM(),n.node=null,n.content=null,n.bgImageLoaded=!1,n.bgImageRef=void 0,n.parent=e.parent,n.parentHeight=c.getNodeHeight(n.canUseDOM,n.parent),n.timestamp=Date.now(),n.isDynamicBlur=a.getHasDynamicBlur(e.blur),n}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Parallax,[{key:"componentDidMount",value:function componentDidMount(){var e=this.props.parent,t=this.state,n=t.bgImage,r=t.bgImageSrcSet,o=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,r,o):this.updatePosition()}},{key:"componentDidUpdate",value:function componentDidUpdate(e){var t=this.props,n=t.parent,r=t.bgImage,o=t.bgImageSrcSet,i=t.bgImageSizes,a=this.state.bgImage;e.parent!==n&&(this.removeListeners(this.parent),this.parent=n,n&&this.addListeners()),this.parentHeight=c.getNodeHeight(this.canUseDOM,this.parent),a!==r&&this.loadImage(r,o,i)}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function setBackgroundPosition(e){var t=this.props,n=t.disabled,r=t.strength,o=Object.assign({},this.state.bgStyle);if(!n){var i="translate3d(-50%, ".concat((r<0?r:0)-r*e,"px, 0)");o.WebkitTransform=i,o.transform=i}this.setState({bgStyle:o,percentage:e})}},{key:"setImagePosition",value:function setImagePosition(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.disabled,o=n.strength,i=n.blur,c=t?"auto":"".concat(this.getImageHeight(),"px"),u=t?"".concat(this.contentWidth,"px"):"auto",s=Object.assign(Object.assign({},this.state.imgStyle),{height:c,width:u});if(!r){var l=o<0,f=(l?o:0)-o*e,p="translate3d(-50%, ".concat(f,"px, 0)"),d="none";i&&(d="blur(".concat(a.getBlurValue(this.isDynamicBlur,i,e),"px)")),s.WebkitTransform=p,s.transform=p,s.WebkitFilter=d,s.filter=d}this.setState({imgStyle:s,percentage:e})}},{key:"getImageHeight",value:function getImageHeight(){var e=this.props.strength,t=(e<0?2.5:1)*Math.abs(e);return Math.floor(this.contentHeight+t)}},{key:"loadImage",value:function loadImage(e,t,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(o){r.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},(function(){return r.updatePosition()})),r.props.onLoad&&r.props.onLoad(o)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function releaseImage(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function addListeners(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function removeListeners(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function render(){var e=this,t=this.props,n=t.className,r=t.style,i=t.bgClassName,a=t.contentClassName,c=t.bgImageAlt,s=t.renderLayer,l=t.bgImageStyle,f=t.lazy,p=this.state,d=p.bgImage,g=p.bgImageSrcSet,_=p.bgImageSizes,y=p.percentage,h=p.imgStyle,b=p.bgStyle,m=p.splitChildren;return o.default.createElement("div",{className:"react-parallax ".concat(n),style:Object.assign({position:"relative",overflow:"hidden"},r),ref:function ref(t){e.node=t}},d?o.default.createElement("img",{className:i,src:d,srcSet:g,sizes:_,ref:function ref(t){e.img=t},alt:c,style:Object.assign(Object.assign({},h),l),loading:f?"lazy":"eager"}):null,s?s(-(y-1)):null,m.bgChildren.length>0?o.default.createElement("div",{className:"react-parallax-background-children",ref:function ref(t){e.bg=t},style:b},m.bgChildren):null,o.default.createElement(u.default,{onMount:this.onContentMount,className:a},m.children))}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(e){return{splitChildren:a.getSplitChildren(e)}}}]),Parallax}(i.Parallax);l.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},t.default=l},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setBlur=t.getBlurValue=t.getHasDynamicBlur=t.getSplitChildren=t.getRelativePosition=t.getPercentage=void 0;var r=n(0),o=n(2);t.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},t.getRelativePosition=function(e,n){if(!n)return 0;var r=e.getBoundingClientRect(),i=r.top,a=r.height,c=o.getNodeHeight(n),u=a>c?a:c,s=Math.round(i>u?u:i);return t.getPercentage(0,u,s)},t.getSplitChildren=function(e){var t=[],n=r.Children.toArray(e.children);return n.forEach((function(e,r){var o=e;o.type&&o.type.isParallaxBackground&&(t=t.concat(n.splice(r,1)))})),{bgChildren:t,children:n}},t.getHasDynamicBlur=function(e){return"object"===_typeof(e)&&void 0!==e.min&&void 0!==e.max},t.getBlurValue=function(e,t,n){return e?t.min+(1-n)*t.max:t},t.setBlur=function(e,t){e.style.webkitFilter="blur(".concat(t,"px)"),e.style.filter="blur(".concat(t,"px)")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0));t.default=function ParallaxChildren(e){var t=e.children,n=e.onMount,r=e.className;return o.default.createElement("div",{ref:function ref(e){return n(e)},className:r||"react-parallax-content",style:{position:"relative"}},t)}},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Background,e);var t=_createSuper(Background);function Background(){return _classCallCheck(this,Background),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Background,[{key:"render",value:function render(){var e=this.props,t=e.className,n=e.children;return o.default.createElement("div",{className:"react-parallax-background ".concat(t)},n)}}]),Background}(n(1).Background);i.defaultProps={className:""},i.isParallaxBackground=!0,t.default=i}])}));

/***/ }),

/***/ 86037:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(67294)) :
  0;
}(this, (function (exports, React) {
  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return n;
  }

  var React__namespace = /*#__PURE__*/_interopNamespace(React);

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var LEFT = "Left";
  var RIGHT = "Right";
  var UP = "Up";
  var DOWN = "Down";

  var defaultProps = {
    delta: 10,
    preventDefaultTouchmoveEvent: false,
    rotationAngle: 0,
    trackMouse: false,
    trackTouch: true
  };
  var initialState = {
    first: true,
    initial: [0, 0],
    start: 0,
    swiping: false,
    xy: [0, 0]
  };
  var mouseMove = "mousemove";
  var mouseUp = "mouseup";
  var touchEnd = "touchend";
  var touchMove = "touchmove";
  var touchStart = "touchstart";

  function getDirection(absX, absY, deltaX, deltaY) {
    if (absX > absY) {
      if (deltaX > 0) {
        return RIGHT;
      }

      return LEFT;
    } else if (deltaY > 0) {
      return DOWN;
    }

    return UP;
  }

  function rotateXYByAngle(pos, angle) {
    if (angle === 0) return pos;
    var angleInRadians = Math.PI / 180 * angle;
    var x = pos[0] * Math.cos(angleInRadians) + pos[1] * Math.sin(angleInRadians);
    var y = pos[1] * Math.cos(angleInRadians) - pos[0] * Math.sin(angleInRadians);
    return [x, y];
  }

  function getHandlers(set, handlerProps) {
    var onStart = function onStart(event) {
      if (event && "touches" in event && event.touches.length > 1) return;
      set(function (state, props) {
        if (props.trackMouse) {
          document.addEventListener(mouseMove, onMove);
          document.addEventListener(mouseUp, onUp);
        }

        var _ref = "touches" in event ? event.touches[0] : event,
            clientX = _ref.clientX,
            clientY = _ref.clientY;

        var xy = rotateXYByAngle([clientX, clientY], props.rotationAngle);
        return _extends({}, state, initialState, {
          initial: [].concat(xy),
          xy: xy,
          start: event.timeStamp || 0
        });
      });
    };

    var onMove = function onMove(event) {
      set(function (state, props) {
        if ("touches" in event && event.touches.length > 1) {
          return state;
        }

        var _ref2 = "touches" in event ? event.touches[0] : event,
            clientX = _ref2.clientX,
            clientY = _ref2.clientY;

        var _rotateXYByAngle = rotateXYByAngle([clientX, clientY], props.rotationAngle),
            x = _rotateXYByAngle[0],
            y = _rotateXYByAngle[1];

        var deltaX = x - state.xy[0];
        var deltaY = y - state.xy[1];
        var absX = Math.abs(deltaX);
        var absY = Math.abs(deltaY);
        var time = (event.timeStamp || 0) - state.start;
        var velocity = Math.sqrt(absX * absX + absY * absY) / (time || 1);
        var vxvy = [deltaX / (time || 1), deltaY / (time || 1)];
        var dir = getDirection(absX, absY, deltaX, deltaY);
        var delta = typeof props.delta === "number" ? props.delta : props.delta[dir.toLowerCase()] || defaultProps.delta;
        if (absX < delta && absY < delta && !state.swiping) return state;
        var eventData = {
          absX: absX,
          absY: absY,
          deltaX: deltaX,
          deltaY: deltaY,
          dir: dir,
          event: event,
          first: state.first,
          initial: state.initial,
          velocity: velocity,
          vxvy: vxvy
        };
        eventData.first && props.onSwipeStart && props.onSwipeStart(eventData);
        props.onSwiping && props.onSwiping(eventData);
        var cancelablePageSwipe = false;

        if (props.onSwiping || props.onSwiped || "onSwiped" + dir in props) {
          cancelablePageSwipe = true;
        }

        if (cancelablePageSwipe && props.preventDefaultTouchmoveEvent && props.trackTouch && event.cancelable) event.preventDefault();
        return _extends({}, state, {
          first: false,
          eventData: eventData,
          swiping: true
        });
      });
    };

    var onEnd = function onEnd(event) {
      set(function (state, props) {
        var eventData;

        if (state.swiping && state.eventData) {
          eventData = _extends({}, state.eventData, {
            event: event
          });
          props.onSwiped && props.onSwiped(eventData);
          var onSwipedDir = props["onSwiped" + eventData.dir];
          onSwipedDir && onSwipedDir(eventData);
        } else {
          props.onTap && props.onTap({
            event: event
          });
        }

        return _extends({}, state, initialState, {
          eventData: eventData
        });
      });
    };

    var cleanUpMouse = function cleanUpMouse() {
      document.removeEventListener(mouseMove, onMove);
      document.removeEventListener(mouseUp, onUp);
    };

    var onUp = function onUp(e) {
      cleanUpMouse();
      onEnd(e);
    };

    var attachTouch = function attachTouch(el, passive) {
      var cleanup = function cleanup() {};

      if (el && el.addEventListener) {
        var tls = [[touchStart, onStart], [touchMove, onMove], [touchEnd, onEnd]];
        tls.forEach(function (_ref3) {
          var e = _ref3[0],
              h = _ref3[1];
          return el.addEventListener(e, h, {
            passive: passive
          });
        });

        cleanup = function cleanup() {
          return tls.forEach(function (_ref4) {
            var e = _ref4[0],
                h = _ref4[1];
            return el.removeEventListener(e, h);
          });
        };
      }

      return cleanup;
    };

    var onRef = function onRef(el) {
      if (el === null) return;
      set(function (state, props) {
        if (state.el === el) return state;
        var addState = {};

        if (state.el && state.el !== el && state.cleanUpTouch) {
          state.cleanUpTouch();
          addState.cleanUpTouch = void 0;
        }

        if (props.trackTouch && el) {
          addState.cleanUpTouch = attachTouch(el, !props.preventDefaultTouchmoveEvent);
        }

        return _extends({}, state, {
          el: el
        }, addState);
      });
    };

    var output = {
      ref: onRef
    };

    if (handlerProps.trackMouse) {
      output.onMouseDown = onStart;
    }

    return [output, attachTouch];
  }

  function updateTransientState(state, props, attachTouch) {
    var addState = {};

    if (!props.trackTouch && state.cleanUpTouch) {
      state.cleanUpTouch();
      addState.cleanUpTouch = void 0;
    } else if (props.trackTouch && !state.cleanUpTouch) {
      if (state.el) {
        addState.cleanUpTouch = attachTouch(state.el, !props.preventDefaultTouchmoveEvent);
      }
    }

    return _extends({}, state, addState);
  }

  function useSwipeable(options) {
    var trackMouse = options.trackMouse;
    var transientState = React__namespace.useRef(_extends({}, initialState));
    var transientProps = React__namespace.useRef(_extends({}, defaultProps));
    transientProps.current = _extends({}, defaultProps, options, {
      delta: options.delta === void 0 ? defaultProps.delta : options.delta,
      rotationAngle: options.rotationAngle === void 0 ? defaultProps.rotationAngle : options.rotationAngle,
      trackTouch: options.trackTouch === void 0 ? defaultProps.trackTouch : options.trackTouch
    });

    var _React$useMemo = React__namespace.useMemo(function () {
      return getHandlers(function (stateSetter) {
        return transientState.current = stateSetter(transientState.current, transientProps.current);
      }, {
        trackMouse: trackMouse
      });
    }, [trackMouse]),
        handlers = _React$useMemo[0],
        attachTouch = _React$useMemo[1];

    transientState.current = updateTransientState(transientState.current, transientProps.current, attachTouch);
    return handlers;
  }

  exports.DOWN = DOWN;
  exports.LEFT = LEFT;
  exports.RIGHT = RIGHT;
  exports.UP = UP;
  exports.useSwipeable = useSwipeable;

})));
//# sourceMappingURL=react-swipeable.umd.js.map


/***/ })

}]);