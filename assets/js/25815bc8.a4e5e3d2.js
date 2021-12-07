(self["webpackChunkeoscostarica_io"] = self["webpackChunkeoscostarica_io"] || []).push([[5818],{

/***/ 95318:
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 20862:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(50008)["default"]);

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 50008:
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 80343:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Box_Box; }
});

// UNUSED EXPORTS: styleFunction

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
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

/***/ 34266:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
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

/***/ 91160:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80343);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93162);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74093);
var styles=_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .StyleSheet.create */ .mM.create({page:{backgroundColor:'white',padding:50},header:{height:'80px',marginBottom:'30px',flexDirection:'row'},headerLeft:{flexDirection:'column',width:"30%"},headerRight:{width:"70%",flexDirection:'column'},headerText:{width:'100%',fontFamily:'Helvetica',fontWeight:'normal',textAlign:'right',fontSize:13},headerTextBold:{width:'100%',fontFamily:'Helvetica-Bold',fontWeight:'bold',textAlign:'right',fontSize:13},image:{width:'100%'},subHeader:{marginBottom:'30px'},pointBox:{borderWidth:2,borderColor:'black',padding:10,marginBottom:'30px'},textPointsBold:{fontFamily:'Helvetica-Bold',fontWeight:'bold',textAlign:'left',fontSize:13},h1:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:25,marginBottom:'10px'},p:{fontFamily:'Helvetica',fontWeight:'normal',textAlign:'justify',fontSize:12,lineHeight:1.5},linkText:{color:'#0091FF',textDecoration:'none'},paragraphSection:{marginBottom:'10px'},actionButtons:{display:'flex',flexDirection:'row',alignItems:'flex-start',marginBottom:'30px'},mainButton:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:15,backgroundColor:'#5484b3',width:'150px',color:'white',textDecoration:'none',padding:'20px'},socialButtonsBox:{marginTop:'10px',marginBottom:'25px',width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center'},socialButtonsBoxRigth:{marginTop:'10px',marginBottom:'25px',width:'100%',flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end'},socialButton:{flexDirection:'column',width:'23px',height:'23px',marginRight:'15px'},h2:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:18,marginBottom:'15px'},h3:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:12,marginBottom:'10px'},section:{marginBottom:' 20px'},titleSection:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:13,marginBottom:'10px'},spacingBox:{marginBottom:'15px'},footer:{position:'absolute',bottom:50,left:50}});var FormPDF=function FormPDF(_ref){var isMobile=_ref.isMobile,formQuestions=_ref.formQuestions,blockchainPoints=_ref.blockchainPoints,companyName=_ref.companyName,companyIndustry=_ref.companyIndustry,companyEmail=_ref.companyEmail,twitterImage=_ref.twitterImage,linkedinImage=_ref.linkedinImage,MediumImage=_ref.MediumImage,GitHubImage=_ref.GitHubImage,InstramImage=_ref.InstramImage,YoutubeImage=_ref.YoutubeImage;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),between81and100=_useState[0],setBetween81and100=_useState[1];var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),between51and80=_useState2[0],setBetween50and80=_useState2[1];var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),lessThan50=_useState3[0],setLessThan50=_useState3[1];var _useState4=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),date=_useState4[0],setDate=_useState4[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){if(blockchainPoints<50)setLessThan50(true);else if(blockchainPoints>=50&&blockchainPoints<=80)setBetween50and80(true);else setBetween81and100(true);},[blockchainPoints]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){if(!date){var _date=new Date();var options={year:'numeric',month:'long',day:'numeric'};setDate(_date.toLocaleDateString('en-US',options));}},[date]);var interpretPunctuation=function interpretPunctuation(points){if(points===1)return"Not an issue at all";else if(points===2)return"Not a priority";else if(points===3)return"Neutral";else if(points===4)return"It may be a priority";else if(points===5)return"Definitely a priority";else return"Undefined";};var MyDoc=function MyDoc(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Document */ .BB,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Page */ .T3,{style:styles.page},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.header},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.headerLeft},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee,{src:"https://eoscostarica.io/img/logos/eoscr-logo.png",style:styles.image})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.headerRight},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.headerTextBold},companyName),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.headerText},date),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.headerText},companyEmail))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.subHeader},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.h1},"Do you Need Blockchain?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:[styles.p,{marginBottom:"10px"}]},"Thank you for completing the form. We designed this tool to help innovation leaders or IT professionals to analyze if their organizations will benefit from implementing blockchain technology."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},"The tool is a reference and the responses provided do not mean any kind of representation of any warranty regarding the accuracy or validity of the information and your decision's completeness. Our team built this template in good faith, and we expect you to make good use of it. If you have any questions, ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},"contact us")," directly or join our ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{src:"https://t.me/eoscr",style:styles.linkText},"Telegram channel")," ")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.h2},"Final Results"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},"You completed the form and obtained ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.textPointsBold}," ",blockchainPoints," /120 points"),".")),between81and100&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.pointBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:[styles.h3,{marginBottom:"10px"}]},"Blockchain is for you!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},"Your organization must consider implementing blockchain technology. Your team should benefit from having an efficient, secure, and trustworthy registry of data. The stakeholders and users will probably notice the improvements, which will benefit the organization in the long term. If you\u2019re considering this, contact us, and we can help you get started.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.textPointsBold},"Drop us a line!"))),between51and80&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.pointBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:[styles.h3,{marginBottom:"10px"}]},"Blockchain might be on the horizon for you!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},"It seems like your organization is very close to benefiting from blockchain technology, but there are still some minor details to take into consideration. We advise you to continue doing your research and weigh pain points vs. possible solutions for deploying blockchain. If you have questions about this, we would happily answer your inquires \u2013 no strings attached!")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.textPointsBold},"Let\u2019s schedule a call"))),lessThan50&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.pointBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:[styles.h3,{marginBottom:"10px"}]},"Blockchain is not the right fit for you at the moment but we can make it work. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},"Don\u2019t lose hope! Your organization can probably stick to centralized databases in the meantime, but you should consider switching to a decentralized blockchain later. We suggest you keep an eye on new advancements regarding blockchain technology, and hopefully, soon, you can benefit from implementing a BaaS (blockchain-as-a-service) platform. Follow us to keep up to date on news about blockchain and ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},"contact us")," if you have any questions..")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.footer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},"Follow us on social media for more updates and resources about blockchain. Also, ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/blog/"},"read our blog")," and find more content about blockchain and EOSIO, use cases, and success stories.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.socialButtonsBoxRigth},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{src:"https://github.com/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee,{src:GitHubImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{src:"https://twitter.com/EOSCostaRica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee,{src:twitterImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{src:"https://www.linkedin.com/company/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee,{src:linkedinImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{src:"https://medium.com/@eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee,{src:MediumImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{src:"https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee,{src:YoutubeImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{src:"https://www.instagram.com/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee,{src:InstramImage}))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Page */ .T3,{style:styles.page},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:[styles.paragraphSection,{marginBottom:"20px"}]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.h2},"Your answers"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},"To find the questions corresponding to your answers, visit the ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{style:styles.linkText,src:"http://eoscostarica.io/do-you-need-blockchain"},"form page"),".")),formQuestions.map(function(section){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{key:section.title,style:styles.section},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.titleSection},section.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:[styles.p,{marginBottom:10}]},section.description),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,null,section.questions.map(function(item,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},section.index+1,".",i+1," - ",interpretPunctuation(item.value)));})));})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Page */ .T3,{style:styles.page},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:[styles.paragraphSection,{marginBottom:"20px"}]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.h2},"Final Words"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},"Thank you for using our tool! We hope it will come in handy when analyzing whether your organization can benefit from implementing blockchain technology. We\u2019re continuously looking for feedback. So, if you wish to share it with us, please ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},"contact us")," directly or join our ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{style:styles.linkText,src:"https://t.me/eoscr"},"Telegram channel"),".")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},"Please, visit these links for additional resources or information about our company:")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/blog/what-is-blockchain"},"- What is blockchain?")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/the-company/"},"- Read more about EOS Costa Rica.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/press/"},"- What the media says about us.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{style:styles.linkText,src:"https://guide.eoscostarica.io/"},"- Developers guides.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{style:styles.linkText,src:"https://github.com/eoscostarica"},"- Our GitHub profile."))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:[styles.footer,{width:"100%"}]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv,{style:[styles.p,{position:'absolute',left:0,top:25}]},"Created by EOS Costa Rica, v.1, 2021")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .View */ .G7,{style:styles.socialButtonsBoxRigth},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{src:"https://github.com/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee,{src:GitHubImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{src:"https://twitter.com/EOSCostaRica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee,{src:twitterImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{src:"https://www.linkedin.com/company/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee,{src:linkedinImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{src:"https://medium.com/@eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee,{src:MediumImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{src:"https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee,{src:YoutubeImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU,{src:"https://www.instagram.com/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee,{src:InstramImage}))))));};var generatePdfDocument=/*#__PURE__*/function(){var _ref2=(0,_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(/*#__PURE__*/_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(documentData){var blob;return _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return (0,_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_4__/* .pdf */ .eA)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(MyDoc,null)).toBlob();case 2:blob=_context.sent;(0,file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs)(blob,companyName+"_do_you_need_blockchain?");case 4:case"end":return _context.stop();}}},_callee);}));return function generatePdfDocument(_x){return _ref2.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{className:isMobile?"centerBox":""},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",{className:"buttonPrimary",onClick:generatePdfDocument},"Download file"));};FormPDF.propTypes={formQuestions:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),blockchainPoints:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),companyName:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),companyIndustry:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),companyEmail:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),twitterImage:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),linkedinImage:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)};FormPDF.defaultProps={formQuestions:[]};/* harmony default export */ __webpack_exports__["default"] = (FormPDF);

/***/ }),

/***/ 42480:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 19527:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 69331:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 52361:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 94616:
/***/ (function() {

/* (ignored) */

/***/ })

}]);