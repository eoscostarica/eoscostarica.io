(self["webpackChunkeoscostarica_io"] = self["webpackChunkeoscostarica_io"] || []).push([[6704],{

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

/***/ 79437:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ debounce; }
/* harmony export */ });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
  var timeout;

  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // eslint-disable-next-line consistent-this
    var that = this;

    var later = function later() {
      func.apply(that, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = function () {
    clearTimeout(timeout);
  };

  return debounced;
}

/***/ }),

/***/ 44343:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "capitalize": function() { return /* reexport */ capitalize/* default */.Z; },
  "createChainedFunction": function() { return /* reexport */ createChainedFunction/* default */.Z; },
  "createSvgIcon": function() { return /* reexport */ createSvgIcon/* default */.Z; },
  "debounce": function() { return /* reexport */ debounce/* default */.Z; },
  "deprecatedPropType": function() { return /* reexport */ deprecatedPropType; },
  "isMuiElement": function() { return /* reexport */ isMuiElement/* default */.Z; },
  "ownerDocument": function() { return /* reexport */ ownerDocument/* default */.Z; },
  "ownerWindow": function() { return /* reexport */ ownerWindow/* default */.Z; },
  "requirePropFactory": function() { return /* reexport */ requirePropFactory; },
  "setRef": function() { return /* reexport */ setRef/* default */.Z; },
  "unstable_useId": function() { return /* reexport */ unstable_useId/* default */.Z; },
  "unsupportedProp": function() { return /* reexport */ unsupportedProp; },
  "useControlled": function() { return /* reexport */ useControlled/* default */.Z; },
  "useEventCallback": function() { return /* reexport */ useEventCallback/* default */.Z; },
  "useForkRef": function() { return /* reexport */ useForkRef/* default */.Z; },
  "useIsFocusVisible": function() { return /* reexport */ useIsFocusVisible/* default */.Z; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(93871);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createChainedFunction.js
var createChainedFunction = __webpack_require__(82568);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js + 1 modules
var createSvgIcon = __webpack_require__(594);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/debounce.js
var debounce = __webpack_require__(79437);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js
function deprecatedPropType(validator, reason) {
  if (true) {
    return function () {
      return null;
    };
  }

  return function (props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined') {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }

    return null;
  };
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/isMuiElement.js
var isMuiElement = __webpack_require__(83711);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/ownerDocument.js
var ownerDocument = __webpack_require__(30626);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/ownerWindow.js
var ownerWindow = __webpack_require__(80713);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/utils/requirePropFactory.js
function requirePropFactory(componentNameInError) {
  if (true) {
    return function () {
      return null;
    };
  }

  var requireProp = function requireProp(requiredProp) {
    return function (props, propName, componentName, location, propFullName) {
      var propFullNameSafe = propFullName || propName;

      if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
        return new Error("The prop `".concat(propFullNameSafe, "` of ") + "`".concat(componentNameInError, "` must be used on `").concat(requiredProp, "`."));
      }

      return null;
    };
  };

  return requireProp;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/setRef.js
var setRef = __webpack_require__(34236);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/utils/unsupportedProp.js
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (true) {
    return null;
  }

  var propFullNameSafe = propFullName || propName;

  if (typeof props[propName] !== 'undefined') {
    return new Error("The prop `".concat(propFullNameSafe, "` is not supported. Please remove it."));
  }

  return null;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__(22775);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useEventCallback.js
var useEventCallback = __webpack_require__(55192);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(17294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/unstable_useId.js
var unstable_useId = __webpack_require__(95001);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js
var useIsFocusVisible = __webpack_require__(24896);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/utils/index.js













 // eslint-disable-next-line camelcase




/***/ }),

/***/ 83711:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ isMuiElement; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

/***/ }),

/***/ 80713:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ownerWindow; }
/* harmony export */ });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30626);

function ownerWindow(node) {
  var doc = (0,_ownerDocument__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ 95001:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

/***/ 2108:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _utils.createSvgIcon;
  }
}));

var _utils = __webpack_require__(44343);

/***/ }),

/***/ 58803:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9607);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61201);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50743);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64566);
var AccordionComp=function AccordionComp(_ref){var data=_ref.data,handleChange=_ref.handleChange,expanded=_ref.expanded,bgColor=_ref.bgColor;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,data.map(function(item){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{key:item.target,square:true,expanded:expanded===item.target,style:{backgroundColor:bgColor,boxShadow:'none'},onChange:handleChange(item.target),className:"accordion"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{style:{padding:1},expandIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{style:{color:'#5484B3'}})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",{style:{margin:'2px',padding:0}},item.title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{style:{padding:1,marginTop:'-15px'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{style:{padding:0}},item.content)));}));};AccordionComp.propTypes={data:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),handleChange:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)};AccordionComp.defaultProps={data:[]};/* harmony default export */ __webpack_exports__["default"] = (AccordionComp);

/***/ })

}]);