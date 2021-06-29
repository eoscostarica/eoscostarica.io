(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(26);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js + 4 modules
var makeStyles = __webpack_require__(789);

// CONCATENATED MODULE: ./node_modules/@material-ui/styles/esm/styled/styled.js









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
        stylesOptions = Object(objectWithoutProperties["a" /* default */])(options, ["name"]);

    if (false) {}

    var classNamePrefix = name;

    if (false) { var displayName; }

    var stylesOrCreator = typeof style === 'function' ? function (theme) {
      return {
        root: function root(props) {
          return style(Object(esm_extends["a" /* default */])({
            theme: theme
          }, props));
        }
      };
    } : {
      root: style
    };
    var useStyles = Object(makeStyles["a" /* default */])(stylesOrCreator, Object(esm_extends["a" /* default */])({
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


    var StyledComponent = /*#__PURE__*/react_default.a.forwardRef(function StyledComponent(props, ref) {
      var children = props.children,
          classNameProp = props.className,
          clone = props.clone,
          ComponentProp = props.component,
          other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "className", "clone", "component"]);

      var classes = useStyles(props);
      var className = Object(clsx_m["a" /* default */])(classes.root, classNameProp);
      var spread = other;

      if (filterProps) {
        spread = omit(spread, filterProps);
      }

      if (clone) {
        return /*#__PURE__*/react_default.a.cloneElement(children, Object(esm_extends["a" /* default */])({
          className: Object(clsx_m["a" /* default */])(children.props.className, className)
        }, spread));
      }

      if (typeof children === 'function') {
        return children(Object(esm_extends["a" /* default */])({
          className: className
        }, spread));
      }

      var FinalComponent = ComponentProp || Component;
      return /*#__PURE__*/react_default.a.createElement(FinalComponent, Object(esm_extends["a" /* default */])({
        ref: ref,
        className: className
      }, spread), children);
    });
     false ? undefined : void 0;

    if (false) {}

    hoist_non_react_statics_cjs_default()(StyledComponent, Component);
    return StyledComponent;
  };

  return componentCreator;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/defaultTheme.js
var defaultTheme = __webpack_require__(243);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/styled.js




var styles_styled_styled = function styled(Component) {
  var componentCreator = styled_styled(Component);
  return function (style, options) {
    return componentCreator(style, Object(esm_extends["a" /* default */])({
      defaultTheme: defaultTheme["a" /* default */]
    }, options));
  };
};

/* harmony default export */ var styles_styled = __webpack_exports__["a"] = (styles_styled_styled);

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: styleFunction

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(251);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/merge.js
var merge = __webpack_require__(316);

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/css.js





function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

function css(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var output = styleFunction(props);

    if (props.css) {
      return Object(esm_extends["a" /* default */])({}, Object(merge["a" /* default */])(output, styleFunction(Object(esm_extends["a" /* default */])({
        theme: props.theme
      }, props.css))), omit(props.css, [styleFunction.filterProps]));
    }

    return output;
  };

  newStyleFunction.propTypes =  false ? undefined : {};
  newStyleFunction.filterProps = ['css'].concat(Object(toConsumableArray["a" /* default */])(styleFunction.filterProps));
  return newStyleFunction;
}

/* harmony default export */ var esm_css = (css);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/compose.js



function compose() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var fn = function fn(props) {
    return styles.reduce(function (acc, style) {
      var output = style(props);

      if (output) {
        return Object(merge["a" /* default */])(acc, output);
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


  fn.propTypes =  false ? undefined : {};
  fn.filterProps = styles.reduce(function (acc, style) {
    return acc.concat(style.filterProps);
  }, []);
  return fn;
}

/* harmony default export */ var esm_compose = (compose);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(410);

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/style.js




function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce(function (acc, item) {
    return acc && acc[item] ? acc[item] : null;
  }, obj);
}

function style_style(options) {
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

      return Object(defineProperty["a" /* default */])({}, cssProperty, value);
    };

    return Object(breakpoints["a" /* handleBreakpoints */])(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  false ? undefined : {};
  fn.filterProps = [prop];
  return fn;
}

/* harmony default export */ var esm_style = (style_style);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/borders.js



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
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/display.js


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
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/flexbox.js


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
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/grid.js


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
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/positions.js


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
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/palette.js


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
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/shadows.js

var boxShadow = esm_style({
  prop: 'boxShadow',
  themeKey: 'shadows'
});
/* harmony default export */ var shadows = (boxShadow);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/sizing.js



function sizing_transform(value) {
  return value <= 1 ? "".concat(value * 100, "%") : value;
}

var width = esm_style({
  prop: 'width',
  transform: sizing_transform
});
var maxWidth = esm_style({
  prop: 'maxWidth',
  transform: sizing_transform
});
var minWidth = esm_style({
  prop: 'minWidth',
  transform: sizing_transform
});
var height = esm_style({
  prop: 'height',
  transform: sizing_transform
});
var maxHeight = esm_style({
  prop: 'maxHeight',
  transform: sizing_transform
});
var minHeight = esm_style({
  prop: 'minHeight',
  transform: sizing_transform
});
var sizeWidth = esm_style({
  prop: 'size',
  cssProperty: 'width',
  transform: sizing_transform
});
var sizeHeight = esm_style({
  prop: 'size',
  cssProperty: 'height',
  transform: sizing_transform
});
var boxSizing = esm_style({
  prop: 'boxSizing'
});
var sizing = esm_compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ var esm_sizing = (sizing);
// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/spacing.js + 1 modules
var spacing = __webpack_require__(790);

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/typography.js


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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/styled.js + 1 modules
var styled = __webpack_require__(331);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js


var Box_styleFunction = esm_css(esm_compose(esm_borders, display, esm_flexbox, esm_grid, positions, esm_palette, shadows, esm_sizing, spacing["b" /* default */], esm_typography));
/**
 * @ignore - do not document.
 */

var Box = Object(styled["a" /* default */])('div')(Box_styleFunction, {
  name: 'MuiBox'
});
/* harmony default export */ var Box_Box = __webpack_exports__["a"] = (Box);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(147);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(146);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(495);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(765);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(767);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(752);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(751);
var GenericRadio=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({root:{color:'gray','&$checked':{color:'#5484b3'}},checked:{}})(function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],Object(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({color:"default"},props));});var FormComponent=function FormComponent(_ref){var formQuestions=_ref.formQuestions,isDesktop=_ref.isDesktop,onSubmit=_ref.onSubmit;var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),activeStep=_useState[0],setActiveStep=_useState[1];var _useState2=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),disableButton=_useState2[0],setDisableButton=_useState2[1];var refNextSection=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([]);refNextSection.current=Array(formQuestions.length).fill().map(function(_,i){return/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();});var handleNext=function handleNext(){setActiveStep(function(prevActiveStep){return prevActiveStep+1;});formQuestions[activeStep+1].visible=true;refNextSection.current[activeStep+1].scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});handleDisableButton();};var handleEnableButton=function handleEnableButton(){setDisableButton(false);};var handleDisableButton=function handleDisableButton(){setDisableButton(true);};var setQuestionValue=function setQuestionValue(indexSection,indexQuestion,value){formQuestions[indexSection].questions[indexQuestion].value=value;if(isSectionComplete(indexSection)){handleEnableButton();}};var isSectionComplete=function isSectionComplete(indexSection){var flag=true;formQuestions[indexSection].questions.map(function(item){if(item.value===-1)flag=false;});return flag;};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,formQuestions.map(function(section,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],{key:section.title,className:"formBox",style:{backgroundColor:section.color},ref:function ref(el){return refNextSection.current[i]=el;}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",{style:{margin:0}},section.title),section.visible&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],{className:Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])("topSpacingBox","spacingBox")},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,section.description)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],null,section.questions.map(function(item,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],{className:"spacingBox",key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"itemQuestion"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b",null,section.index+1,".",i+1)," - ",item.question),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],{className:"radioBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{component:"fieldset"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],{row:true,"aria-label":"form",name:"form1"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{value:"1",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GenericRadio,null),label:"1",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,1);}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{value:"2",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GenericRadio,null),label:"2",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,2);}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{value:"3",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GenericRadio,null),label:"3",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,3);}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{value:"4",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GenericRadio,null),label:"4",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,4);}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{value:"5",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GenericRadio,null),label:"5",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,5);}})))));})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],{className:Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])("boxFlexEnd","spacingBox")},activeStep===section.index&&activeStep!==formQuestions.length-1&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"buttonPrimary",style:{marginLeft:'10px'},onClick:handleNext,disabled:disableButton},"Next"),activeStep===section.index&&activeStep===formQuestions.length-1&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"buttonPrimary",style:{marginLeft:'10px'},onClick:onSubmit,disabled:disableButton},"Finish"))));}));};FormComponent.propTypes={formQuestions:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,isDesktop:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,onSubmit:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func};FormComponent.defaultProps={formQuestions:[]};/* harmony default export */ __webpack_exports__["default"] = (FormComponent);

/***/ })

}]);