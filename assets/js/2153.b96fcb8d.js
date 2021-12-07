(self["webpackChunkeoscostarica_io"] = self["webpackChunkeoscostarica_io"] || []).push([[2153],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 39960:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ exports_Link; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(52263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(13919);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(10412);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/LinksCollector.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var createStatefulLinksCollector=function createStatefulLinksCollector(){// Set to dedup, as it's not useful to collect multiple times the same link
var allLinks=new Set();return{collectLink:function collectLink(link){allLinks.add(link);},getCollectedLinks:function getCollectedLinks(){return[].concat(allLinks);}};};var Context=/*#__PURE__*/(0,react.createContext)({collectLink:function collectLink(){// noop by default for client
// we only use the broken links checker server-side
}});var useLinksCollector=function useLinksCollector(){return (0,react.useContext)(Context);};var ProvideLinksCollector=function ProvideLinksCollector(_ref){var children=_ref.children,linksCollector=_ref.linksCollector;return/*#__PURE__*/React.createElement(Context.Provider,{value:linksCollector},children);};
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(44996);
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(18780);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var _excluded=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix
var shouldAddBaseUrlAutomatically=function shouldAddBaseUrlAutomatically(to){return to.startsWith('/');};function Link(_ref){var isNavLink=_ref.isNavLink,to=_ref.to,href=_ref.href,activeClassName=_ref.activeClassName,isActive=_ref.isActive,noBrokenLinkCheck=_ref['data-noBrokenLinkCheck'],_ref$autoAddBaseUrl=_ref.autoAddBaseUrl,autoAddBaseUrl=_ref$autoAddBaseUrl===void 0?true:_ref$autoAddBaseUrl,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);var _a;var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig,trailingSlash=_useDocusaurusContext2.trailingSlash,baseUrl=_useDocusaurusContext2.baseUrl;var _useBaseUrlUtils=(0,useBaseUrl/* useBaseUrlUtils */.C)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var linksCollector=useLinksCollector();// IMPORTANT: using to or href should not change anything
// For example, MDX links will ALWAYS give us the href props
// Using one prop or the other should not be used to distinguish
// internal links (/docs/myDoc) from external links (https://github.com)
var targetLinkUnprefixed=to||href;function maybeAddBaseUrl(str){return autoAddBaseUrl&&shouldAddBaseUrlAutomatically(str)?withBaseUrl(str):str;}var isInternal=(0,isInternalUrl/* default */.Z)(targetLinkUnprefixed);// pathname:// is a special "protocol" we use to tell Docusaurus link
// that a link is not "internal" and that we shouldn't use history.push()
// this is not ideal but a good enough escape hatch for now
// see https://github.com/facebook/docusaurus/issues/3309
// note: we want baseUrl to be appended (see issue for details)
// TODO read routes and automatically detect internal/external links?
var targetLinkWithoutPathnameProtocol=targetLinkUnprefixed===null||targetLinkUnprefixed===void 0?void 0:targetLinkUnprefixed.replace('pathname://','');// TODO we should use ReactRouter basename feature instead!
// Automatically apply base url in links that start with /
var targetLink=typeof targetLinkWithoutPathnameProtocol!=='undefined'?maybeAddBaseUrl(targetLinkWithoutPathnameProtocol):undefined;if(targetLink&&isInternal){targetLink=(0,lib.applyTrailingSlash)(targetLink,{trailingSlash:trailingSlash,baseUrl:baseUrl});}var preloaded=(0,react.useRef)(false);var LinkComponent=isNavLink?react_router_dom/* NavLink */.OL:react_router_dom/* Link */.rU;var IOSupported=ExecutionEnvironment["default"].canUseIntersectionObserver;var ioRef=(0,react.useRef)();var handleIntersection=function handleIntersection(el,cb){ioRef.current=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(el===entry.target){// If element is in viewport, stop listening/observing and run callback.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
if(entry.isIntersecting||entry.intersectionRatio>0){ioRef.current.unobserve(el);ioRef.current.disconnect();cb();}}});});// Add element to the observer.
ioRef.current.observe(el);};var handleRef=function handleRef(ref){if(IOSupported&&ref&&isInternal){// If IO supported and element reference found, setup Observer functionality.
handleIntersection(ref,function(){if(targetLink!=null){window.docusaurus.prefetch(targetLink);}});}};var onMouseEnter=function onMouseEnter(){if(!preloaded.current&&targetLink!=null){window.docusaurus.preload(targetLink);preloaded.current=true;}};(0,react.useEffect)(function(){// If IO is not supported. We prefetch by default (only once).
if(!IOSupported&&isInternal){if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}// When unmounting, stop intersection observer from watching.
return function(){if(IOSupported&&ioRef.current){ioRef.current.disconnect();}};},[ioRef,targetLink,IOSupported,isInternal]);var isAnchorLink=(_a=targetLink===null||targetLink===void 0?void 0:targetLink.startsWith('#'))!==null&&_a!==void 0?_a:false;var isRegularHtmlLink=!targetLink||!isInternal||isAnchorLink;if(targetLink&&isInternal&&!isAnchorLink&&!noBrokenLinkCheck){linksCollector.collectLink(targetLink);}return isRegularHtmlLink?/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
react.createElement("a",Object.assign({href:targetLink},targetLinkUnprefixed&&!isInternal&&{target:'_blank',rel:'noopener noreferrer'},props)):/*#__PURE__*/react.createElement(LinkComponent,Object.assign({},props,{onMouseEnter:onMouseEnter,innerRef:handleRef,to:targetLink||''},isNavLink&&{isActive:isActive,activeClassName:activeClassName}));}/* harmony default export */ var exports_Link = (Link);

/***/ }),

/***/ 36642:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ theme_DocPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/renderRoutes.js
var renderRoutes = __webpack_require__(46291);
// EXTERNAL MODULE: ./src/theme/Layout/index.js + 3 modules
var Layout = __webpack_require__(92599);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 27 modules
var lib = __webpack_require__(60370);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(93783);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(72389);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemeContext.js
var ThemeContext = __webpack_require__(82924);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useThemeContext(){var context=(0,react.useContext)(ThemeContext/* default */.Z);if(context==null){throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');}return context;}/* harmony default export */ var hooks_useThemeContext = (useThemeContext);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"themedImage":"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/index.js
var _excluded=["sources","className","alt"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ThemedImage=function ThemedImage(props){var isBrowser=(0,useIsBrowser/* default */.Z)();var _useThemeContext=hooks_useThemeContext(),isDarkTheme=_useThemeContext.isDarkTheme;var sources=props.sources,className=props.className,_props$alt=props.alt,alt=_props$alt===void 0?'':_props$alt,propsRest=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);var clientThemes=isDarkTheme?['dark']:['light'];var renderedSourceNames=isBrowser?clientThemes// We need to render both images on the server to avoid flash
:// See https://github.com/facebook/docusaurus/pull/3730
['light','dark'];return/*#__PURE__*/react.createElement(react.Fragment,null,renderedSourceNames.map(function(sourceName){return/*#__PURE__*/react.createElement("img",(0,esm_extends/* default */.Z)({key:sourceName,src:sources[sourceName],alt:alt,className:(0,clsx_m/* default */.Z)(styles_module.themedImage,styles_module["themedImage--"+sourceName],className)},propsRest));}));};/* harmony default export */ var theme_ThemedImage = (ThemedImage);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(44996);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(52263);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Logo/index.js
var Logo_excluded=["imageClassName","titleClassName"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Logo=function Logo(props){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),title=_useDocusaurusContext.siteConfig.title;var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),_useThemeConfig$navba=_useThemeConfig.navbar,navbarTitle=_useThemeConfig$navba.title,_useThemeConfig$navba2=_useThemeConfig$navba.logo,logo=_useThemeConfig$navba2===void 0?{src:''}:_useThemeConfig$navba2;var imageClassName=props.imageClassName,titleClassName=props.titleClassName,propsRest=(0,objectWithoutPropertiesLoose/* default */.Z)(props,Logo_excluded);var logoLink=(0,useBaseUrl/* default */.Z)(logo.href||'/');var sources={light:(0,useBaseUrl/* default */.Z)(logo.src),dark:(0,useBaseUrl/* default */.Z)(logo.srcDark||logo.src)};var themedImage=/*#__PURE__*/react.createElement(theme_ThemedImage,{sources:sources,height:logo.height,width:logo.width,alt:logo.alt||navbarTitle||title});return/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({to:logoLink},propsRest,logo.target&&{target:logo.target}),logo.src&&(imageClassName?/*#__PURE__*/react.createElement("div",{className:imageClassName},themedImage):/*#__PURE__*/react.createElement(react.Fragment,null,themedImage)),navbarTitle!=null&&/*#__PURE__*/react.createElement("b",{className:titleClassName},navbarTitle));};/* harmony default export */ var theme_Logo = (Logo);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconArrow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconArrow=function IconArrow(props){return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({width:"20",height:"20","aria-hidden":"true"},props),/*#__PURE__*/react.createElement("g",{fill:"#7a7a7a"},/*#__PURE__*/react.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),/*#__PURE__*/react.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));};/* harmony default export */ var theme_IconArrow = (IconArrow);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(13919);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var IconExternalLink_styles_module = ({"iconExternalLink":"iconExternalLink_wgqa"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconExternalLink=function IconExternalLink(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?13.5:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?13.5:_ref$height;return/*#__PURE__*/react.createElement("svg",{width:width,height:height,"aria-hidden":"true",viewBox:"0 0 24 24",className:IconExternalLink_styles_module.iconExternalLink},/*#__PURE__*/react.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}));};/* harmony default export */ var theme_IconExternalLink = (IconExternalLink);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebarItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocSidebarItem_styles_module = ({"menuLinkText":"menuLinkText_OKON"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebarItem/index.js
var DocSidebarItem_excluded=["items"],_excluded2=["item"],_excluded3=["item","onItemClick","activePath","level"],_excluded4=["item","onItemClick","activePath","level"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var isActiveSidebarItem=function isActiveSidebarItem(item,activePath){if(item.type==='link'){return (0,lib/* isSamePath */.Mg)(item.href,activePath);}if(item.type==='category'){return item.items.some(function(subItem){return isActiveSidebarItem(subItem,activePath);});}return false;};// Optimize sidebar at each "level"
// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
var DocSidebarItems=/*#__PURE__*/(0,react.memo)(function DocSidebarItems(_ref){var items=_ref.items,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,DocSidebarItem_excluded);return/*#__PURE__*/react.createElement(react.Fragment,null,items.map(function(item,index){return/*#__PURE__*/react.createElement(DocSidebarItem,(0,esm_extends/* default */.Z)({key:index// sidebar is static, the index does not change
,item:item},props));}));});function DocSidebarItem(_ref2){var item=_ref2.item,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref2,_excluded2);switch(item.type){case'category':if(item.items.length===0){return null;}return/*#__PURE__*/react.createElement(DocSidebarItemCategory,(0,esm_extends/* default */.Z)({item:item},props));case'link':default:return/*#__PURE__*/react.createElement(DocSidebarItemLink,(0,esm_extends/* default */.Z)({item:item},props));}}// If we navigate to a category and it becomes active, it should automatically expand itself
function useAutoExpandActiveCategory(_ref3){var isActive=_ref3.isActive,collapsed=_ref3.collapsed,setCollapsed=_ref3.setCollapsed;var wasActive=(0,lib/* usePrevious */.D9)(isActive);(0,react.useEffect)(function(){var justBecameActive=isActive&&!wasActive;if(justBecameActive&&collapsed){setCollapsed(false);}},[isActive,wasActive,collapsed,setCollapsed]);}function DocSidebarItemCategory(_ref4){var _clsx;var item=_ref4.item,onItemClick=_ref4.onItemClick,activePath=_ref4.activePath,level=_ref4.level,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref4,_excluded3);var items=item.items,label=item.label,collapsible=item.collapsible,className=item.className;var isActive=isActiveSidebarItem(item,activePath);var _useCollapsible=(0,lib/* useCollapsible */.uR)({// active categories are always initialized as expanded
// the default (item.collapsed) is only used for non-active categories
initialState:function initialState(){if(!collapsible){return false;}return isActive?false:item.collapsed;}}),collapsed=_useCollapsible.collapsed,setCollapsed=_useCollapsible.setCollapsed,toggleCollapsed=_useCollapsible.toggleCollapsed;useAutoExpandActiveCategory({isActive:isActive,collapsed:collapsed,setCollapsed:setCollapsed});return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarItemCategory */.kM.docs.docSidebarItemCategory,lib/* ThemeClassNames.docs.docSidebarItemCategoryLevel */.kM.docs.docSidebarItemCategoryLevel(level),'menu__list-item',{'menu__list-item--collapsed':collapsed},className)},/*#__PURE__*/react.createElement("a",(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',(_clsx={'menu__link--sublist':collapsible,'menu__link--active':collapsible&&isActive},_clsx[DocSidebarItem_styles_module.menuLinkText]=!collapsible,_clsx)),onClick:collapsible?function(e){e.preventDefault();toggleCollapsed();}:undefined,href:collapsible?'#':undefined},props),label),/*#__PURE__*/react.createElement(lib/* Collapsible */.zF,{lazy:true,as:"ul",className:"menu__list",collapsed:collapsed},/*#__PURE__*/react.createElement(DocSidebarItems,{items:items,tabIndex:collapsed?-1:0,onItemClick:onItemClick,activePath:activePath,level:level+1})));}function DocSidebarItemLink(_ref5){var item=_ref5.item,onItemClick=_ref5.onItemClick,activePath=_ref5.activePath,level=_ref5.level,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref5,_excluded4);var href=item.href,label=item.label,className=item.className;var isActive=isActiveSidebarItem(item,activePath);return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarItemLink */.kM.docs.docSidebarItemLink,lib/* ThemeClassNames.docs.docSidebarItemLinkLevel */.kM.docs.docSidebarItemLinkLevel(level),'menu__list-item',className),key:label},/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',{'menu__link--active':isActive}),"aria-current":isActive?'page':undefined,to:href},(0,isInternalUrl/* default */.Z)(href)&&{onClick:onItemClick},props),(0,isInternalUrl/* default */.Z)(href)?label:/*#__PURE__*/react.createElement("span",null,label,/*#__PURE__*/react.createElement(theme_IconExternalLink,null))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocSidebar_styles_module = ({"sidebar":"sidebar_a3j0","sidebarWithHideableNavbar":"sidebarWithHideableNavbar_VlPv","sidebarHidden":"sidebarHidden_OqfG","sidebarLogo":"sidebarLogo_hmkv","menu":"menu_cyFh","menuWithAnnouncementBar":"menuWithAnnouncementBar_+O1J","collapseSidebarButton":"collapseSidebarButton_eoK2","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_e+kA","sidebarMenuIcon":"sidebarMenuIcon_iZzd","sidebarMenuCloseIcon":"sidebarMenuCloseIcon_6kU2"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useShowAnnouncementBar(){var _useAnnouncementBar=(0,lib/* useAnnouncementBar */.nT)(),isActive=_useAnnouncementBar.isActive;var _useState=(0,react.useState)(isActive),showAnnouncementBar=_useState[0],setShowAnnouncementBar=_useState[1];(0,lib/* useScrollPosition */.RF)(function(_ref){var scrollY=_ref.scrollY;if(isActive){setShowAnnouncementBar(scrollY===0);}},[isActive]);return isActive&&showAnnouncementBar;}function HideableSidebarButton(_ref2){var onClick=_ref2.onClick;return/*#__PURE__*/react.createElement("button",{type:"button",title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.collapseButtonTitle',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.collapseButtonAriaLabel',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),className:(0,clsx_m/* default */.Z)('button button--secondary button--outline',DocSidebar_styles_module.collapseSidebarButton),onClick:onClick},/*#__PURE__*/react.createElement(theme_IconArrow,{className:DocSidebar_styles_module.collapseSidebarButtonIcon}));}function DocSidebarDesktop(_ref3){var _clsx,_clsx2;var path=_ref3.path,sidebar=_ref3.sidebar,onCollapse=_ref3.onCollapse,isHidden=_ref3.isHidden;var showAnnouncementBar=useShowAnnouncementBar();var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll,hideableSidebar=_useThemeConfig.hideableSidebar;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(DocSidebar_styles_module.sidebar,(_clsx={},_clsx[DocSidebar_styles_module.sidebarWithHideableNavbar]=hideOnScroll,_clsx[DocSidebar_styles_module.sidebarHidden]=isHidden,_clsx))},hideOnScroll&&/*#__PURE__*/react.createElement(theme_Logo,{tabIndex:-1,className:DocSidebar_styles_module.sidebarLogo}),/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.Z)('menu thin-scrollbar',DocSidebar_styles_module.menu,(_clsx2={},_clsx2[DocSidebar_styles_module.menuWithAnnouncementBar]=showAnnouncementBar,_clsx2))},/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarMenu */.kM.docs.docSidebarMenu,'menu__list')},/*#__PURE__*/react.createElement(DocSidebarItems,{items:sidebar,activePath:path,level:1}))),hideableSidebar&&/*#__PURE__*/react.createElement(HideableSidebarButton,{onClick:onCollapse}));}var DocSidebarMobileSecondaryMenu=function DocSidebarMobileSecondaryMenu(_ref4){var toggleSidebar=_ref4.toggleSidebar,sidebar=_ref4.sidebar,path=_ref4.path;return/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarMenu */.kM.docs.docSidebarMenu,'menu__list')},/*#__PURE__*/react.createElement(DocSidebarItems,{items:sidebar,activePath:path,onItemClick:function onItemClick(){return toggleSidebar();},level:1}));};function DocSidebarMobile(props){return/*#__PURE__*/react.createElement(lib/* MobileSecondaryMenuFiller */.Cv,{component:DocSidebarMobileSecondaryMenu,props:props});}var DocSidebarDesktopMemo=/*#__PURE__*/react.memo(DocSidebarDesktop);var DocSidebarMobileMemo=/*#__PURE__*/react.memo(DocSidebarMobile);function DocSidebar(props){var windowSize=(0,useWindowSize/* default */.Z)();// Desktop sidebar visible on hydration: need SSR rendering
var shouldRenderSidebarDesktop=windowSize==='desktop'||windowSize==='ssr';// Mobile sidebar not visible on hydration: can avoid SSR rendering
var shouldRenderSidebarMobile=windowSize==='mobile';return/*#__PURE__*/react.createElement(react.Fragment,null,shouldRenderSidebarDesktop&&/*#__PURE__*/react.createElement(DocSidebarDesktopMemo,props),shouldRenderSidebarMobile&&/*#__PURE__*/react.createElement(DocSidebarMobileMemo,props));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js + 1 modules
var Head = __webpack_require__(12859);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(87410);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ var duotoneDark = (theme);

;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism["default"],
  theme: duotoneDark
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ var dist = (Highlight);


;// CONCATENATED MODULE: ./node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(input,_temp){var _ref=_temp===void 0?{}:_temp,_ref$target=_ref.target,target=_ref$target===void 0?document.body:_ref$target;var element=document.createElement('textarea');var previouslyFocusedElement=document.activeElement;element.value=input;// Prevent keyboard from showing on mobile
element.setAttribute('readonly','');element.style.contain='strict';element.style.position='absolute';element.style.left='-9999px';element.style.fontSize='12pt';// Prevent zooming on iOS
var selection=document.getSelection();var originalRange=false;if(selection.rangeCount>0){originalRange=selection.getRangeAt(0);}target.append(element);element.select();// Explicit selection workaround for iOS
element.selectionStart=0;element.selectionEnd=input.length;var isSuccess=false;try{isSuccess=document.execCommand('copy');}catch(_unused){}element.remove();if(originalRange){selection.removeAllRanges();selection.addRange(originalRange);}// Get the focus back on the previously focused element, if any
if(previouslyFocusedElement){previouslyFocusedElement.focus();}return isSuccess;}
// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(87594);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/palenight/index.js
// Converted automatically using ./tools/themeFromVsCode
var palenight_theme = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(105, 112, 152)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "inserted"],
    style: {
      color: "rgb(195, 232, 141)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(247, 140, 108)"
    }
  }, {
    types: ["builtin", "char", "constant", "function"],
    style: {
      color: "rgb(130, 170, 255)"
    }
  }, {
    types: ["punctuation", "selector"],
    style: {
      color: "rgb(199, 146, 234)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(191, 199, 213)"
    }
  }, {
    types: ["class-name", "attr-name"],
    style: {
      color: "rgb(255, 203, 107)"
    }
  }, {
    types: ["tag", "deleted"],
    style: {
      color: "rgb(255, 85, 114)"
    }
  }, {
    types: ["operator"],
    style: {
      color: "rgb(137, 221, 255)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(255, 88, 116)"
    }
  }, {
    types: ["keyword"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["doctype"],
    style: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)"
    }
  }, {
    types: ["url"],
    style: {
      color: "rgb(221, 221, 221)"
    }
  }]
};

/* harmony default export */ var palenight = (palenight_theme);

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var usePrismTheme=function usePrismTheme(){var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),prism=_useThemeConfig.prism;var _useThemeContext=hooks_useThemeContext(),isDarkTheme=_useThemeContext.isDarkTheme;var lightModeTheme=prism.theme||palenight;var darkModeTheme=prism.darkTheme||lightModeTheme;var prismTheme=isDarkTheme?darkModeTheme:lightModeTheme;return prismTheme;};/* harmony default export */ var hooks_usePrismTheme = (usePrismTheme);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var CodeBlock_styles_module = ({"codeBlockContainer":"codeBlockContainer_J+bg","codeBlockContent":"codeBlockContent_csEI","codeBlockTitle":"codeBlockTitle_oQzk","codeBlock":"codeBlock_rtdJ","copyButton":"copyButton_M3SB","codeBlockLines":"codeBlockLines_1zSZ"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HighlightLinesRangeRegex=/{([\d,-]+)}/;var HighlightLanguages=['js','jsBlock','jsx','python','html'];// Supported types of highlight comments
var HighlightComments={js:{start:'\\/\\/',end:''},jsBlock:{start:'\\/\\*',end:'\\*\\/'},jsx:{start:'\\{\\s*\\/\\*',end:'\\*\\/\\s*\\}'},python:{start:'#',end:''},html:{start:'<!--',end:'-->'}};// Supported highlight directives
var HighlightDirectives=['highlight-next-line','highlight-start','highlight-end'];var getHighlightDirectiveRegex=function getHighlightDirectiveRegex(languages){if(languages===void 0){languages=HighlightLanguages;}// to be more reliable, the opening and closing comment must match
var commentPattern=languages.map(function(lang){var _HighlightComments$la=HighlightComments[lang],start=_HighlightComments$la.start,end=_HighlightComments$la.end;return"(?:"+start+"\\s*("+HighlightDirectives.join('|')+")\\s*"+end+")";}).join('|');// white space is allowed, but otherwise it should be on it's own line
return new RegExp("^\\s*(?:"+commentPattern+")\\s*$");};// select comment styles based on language
var highlightDirectiveRegex=function highlightDirectiveRegex(lang){switch(lang){case'js':case'javascript':case'ts':case'typescript':return getHighlightDirectiveRegex(['js','jsBlock']);case'jsx':case'tsx':return getHighlightDirectiveRegex(['js','jsBlock','jsx']);case'html':return getHighlightDirectiveRegex(['js','jsBlock','html']);case'python':case'py':return getHighlightDirectiveRegex(['python']);default:// all comment types
return getHighlightDirectiveRegex();}};function CodeBlock(_ref){var children=_ref.children,blockClassName=_ref.className,metastring=_ref.metastring,title=_ref.title;var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),prism=_useThemeConfig.prism;var _useState=(0,react.useState)(false),showCopied=_useState[0],setShowCopied=_useState[1];var _useState2=(0,react.useState)(false),mounted=_useState2[0],setMounted=_useState2[1];// The Prism theme on SSR is always the default theme but the site theme
// can be in a different mode. React hydration doesn't update DOM styles
// that come from SSR. Hence force a re-render after mounting to apply the
// current relevant styles. There will be a flash seen of the original
// styles seen using this current approach but that's probably ok. Fixing
// the flash will require changing the theming approach and is not worth it
// at this point.
(0,react.useEffect)(function(){setMounted(true);},[]);// TODO: the title is provided by MDX as props automatically
// so we probably don't need to parse the metastring
// (note: title="xyz" => title prop still has the quotes)
var codeBlockTitle=(0,lib/* parseCodeBlockTitle */.bc)(metastring)||title;var button=(0,react.useRef)(null);var highlightLines=[];var prismTheme=hooks_usePrismTheme();// In case interleaved Markdown (e.g. when using CodeBlock as standalone component).
var content=Array.isArray(children)?children.join(''):children;if(metastring&&HighlightLinesRangeRegex.test(metastring)){// Tested above
var highlightLinesRange=metastring.match(HighlightLinesRangeRegex)[1];highlightLines=parse_numeric_range_default()(highlightLinesRange).filter(function(n){return n>0;});}var languageClassName=blockClassName==null?void 0:blockClassName.split(' ').find(function(str){return str.startsWith('language-');});var language=languageClassName==null?void 0:languageClassName.replace(/language-/,'');if(!language&&prism.defaultLanguage){language=prism.defaultLanguage;}// only declaration OR directive highlight can be used for a block
var code=content.replace(/\n$/,'');if(highlightLines.length===0&&language!==undefined){var range='';var directiveRegex=highlightDirectiveRegex(language);// go through line by line
var lines=content.replace(/\n$/,'').split('\n');var blockStart;// loop through lines
for(var index=0;index<lines.length;){var line=lines[index];// adjust for 0-index
var lineNumber=index+1;var match=line.match(directiveRegex);if(match!==null){var directive=match.slice(1).reduce(function(final,item){return final||item;},undefined);switch(directive){case'highlight-next-line':range+=lineNumber+",";break;case'highlight-start':blockStart=lineNumber;break;case'highlight-end':range+=blockStart+"-"+(lineNumber-1)+",";break;default:break;}lines.splice(index,1);}else{// lines without directives are unchanged
index+=1;}}highlightLines=parse_numeric_range_default()(range);code=lines.join('\n');}var handleCopyCode=function handleCopyCode(){copyTextToClipboard(code);setShowCopied(true);setTimeout(function(){return setShowCopied(false);},2000);};return/*#__PURE__*/react.createElement(dist,(0,esm_extends/* default */.Z)({},defaultProps,{key:String(mounted),theme:prismTheme,code:code,language:language}),function(_ref2){var className=_ref2.className,style=_ref2.style,tokens=_ref2.tokens,getLineProps=_ref2.getLineProps,getTokenProps=_ref2.getTokenProps;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(CodeBlock_styles_module.codeBlockContainer,blockClassName==null?void 0:blockClassName.replace(/language-[^ ]+/,''))},codeBlockTitle&&/*#__PURE__*/react.createElement("div",{style:style,className:CodeBlock_styles_module.codeBlockTitle},codeBlockTitle),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(CodeBlock_styles_module.codeBlockContent,language)},/*#__PURE__*/react.createElement("pre",{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */tabIndex:0,className:(0,clsx_m/* default */.Z)(className,CodeBlock_styles_module.codeBlock,'thin-scrollbar'),style:style},/*#__PURE__*/react.createElement("code",{className:CodeBlock_styles_module.codeBlockLines},tokens.map(function(line,i){if(line.length===1&&line[0].content==='\n'){line[0].content='';}var lineProps=getLineProps({line:line,key:i});if(highlightLines.includes(i+1)){lineProps.className+=' docusaurus-highlight-code-line';}return/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.Z)({key:i},lineProps),line.map(function(token,key){return/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.Z)({key:key},getTokenProps({token:token,key:key})));}),/*#__PURE__*/react.createElement("br",null));}))),/*#__PURE__*/react.createElement("button",{ref:button,type:"button","aria-label":(0,Translate/* translate */.I)({id:'theme.CodeBlock.copyButtonAriaLabel',message:'Copy code to clipboard',description:'The ARIA label for copy code blocks button'}),className:(0,clsx_m/* default */.Z)(CodeBlock_styles_module.copyButton,'clean-btn'),onClick:handleCopyCode},showCopied?/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))));});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(39649);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Details_styles_module = ({"details":"details_h+cY"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing alert classes?
var InfimaClasses='alert alert--info';function Details(_ref){var props=Object.assign({},_ref);return/*#__PURE__*/react.createElement(lib/* Details */.PO,(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)(InfimaClasses,Details_styles_module.details,props.className)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/index.js
var MDXComponents_excluded=["mdxType","originalType"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// MDX elements are wrapped through the MDX pragma
// In some cases (notably usage with Head/Helmet) we need to unwrap those elements.
function unwrapMDXElement(element){var _element$props,_element$props2;if(element!=null&&(_element$props=element.props)!=null&&_element$props.mdxType&&element!=null&&(_element$props2=element.props)!=null&&_element$props2.originalType){var _element$props3=element.props,mdxType=_element$props3.mdxType,originalType=_element$props3.originalType,newProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_element$props3,MDXComponents_excluded);return/*#__PURE__*/react.createElement(element.props.originalType,newProps);}return element;}var MDXComponents={head:function head(props){var unwrappedChildren=react.Children.map(props.children,function(child){return unwrapMDXElement(child);});return/*#__PURE__*/react.createElement(Head/* default */.Z,props,unwrappedChildren);},code:function code(props){var children=props.children;// For retrocompatibility purposes (pretty rare use case)
// See https://github.com/facebook/docusaurus/pull/1584
if(/*#__PURE__*/(0,react.isValidElement)(children)){return children;}return!children.includes('\n')?/*#__PURE__*/react.createElement("code",props):/*#__PURE__*/react.createElement(CodeBlock,props);},a:function a(props){return/*#__PURE__*/react.createElement(Link/* default */.Z,props);},pre:function pre(props){var _children$props;var children=props.children;// See comment for `code` above
if(/*#__PURE__*/(0,react.isValidElement)(children)&&/*#__PURE__*/(0,react.isValidElement)(children==null?void 0:(_children$props=children.props)==null?void 0:_children$props.children)){return children.props.children;}return/*#__PURE__*/react.createElement(CodeBlock,/*#__PURE__*/(0,react.isValidElement)(children)?children==null?void 0:children.props:Object.assign({},props));},details:function details(props){var items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the Detais theme component
var summary=items.find(function(item){var _item$props;return(item==null?void 0:(_item$props=item.props)==null?void 0:_item$props.mdxType)==='summary';});var children=/*#__PURE__*/react.createElement(react.Fragment,null,items.filter(function(item){return item!==summary;}));return/*#__PURE__*/react.createElement(Details,(0,esm_extends/* default */.Z)({},props,{summary:summary}),children);},h1:(0,Heading/* default */.Z)('h1'),h2:(0,Heading/* default */.Z)('h2'),h3:(0,Heading/* default */.Z)('h3'),h4:(0,Heading/* default */.Z)('h4'),h5:(0,Heading/* default */.Z)('h5'),h6:(0,Heading/* default */.Z)('h6')};/* harmony default export */ var theme_MDXComponents = (MDXComponents);
// EXTERNAL MODULE: ./src/theme/NotFound.js
var NotFound = __webpack_require__(84204);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BackToTopButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var BackToTopButton_styles_module = ({"backToTopButton":"backToTopButton_i9tI","backToTopButtonShow":"backToTopButtonShow_wCmF"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BackToTopButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var threshold=300;// Not all have support for smooth scrolling (particularly Safari mobile iOS)
// TODO proper detection is currently unreliable!
// see https://github.com/wessberg/scroll-behavior-polyfill/issues/16
var SupportsNativeSmoothScrolling=false;// const SupportsNativeSmoothScrolling = ExecutionEnvironment.canUseDOM && 'scrollBehavior' in document.documentElement.style;
function smoothScrollTopNative(){window.scrollTo({top:0,behavior:'smooth'});return function(){// Nothing to cancel, it's natively cancelled if user tries to scroll down
};}function smoothScrollTopPolyfill(){var raf=null;function rafRecursion(){var currentScroll=document.documentElement.scrollTop;if(currentScroll>0){raf=requestAnimationFrame(rafRecursion);window.scrollTo(0,Math.floor(currentScroll*0.85));}}rafRecursion();// Break the recursion
// Prevents the user from "fighting" against that recursion producing a weird UX
return function(){return raf&&cancelAnimationFrame(raf);};}function useSmoothScrollToTop(){var lastCancelRef=(0,react.useRef)(null);function smoothScrollTop(){lastCancelRef.current=SupportsNativeSmoothScrolling?smoothScrollTopNative():smoothScrollTopPolyfill();}return{smoothScrollTop:smoothScrollTop,cancelScrollToTop:function cancelScrollToTop(){return lastCancelRef.current==null?void 0:lastCancelRef.current();}};}function BackToTopButton(){var _clsx;var _useState=(0,react.useState)(false),show=_useState[0],setShow=_useState[1];var isFocusedAnchor=(0,react.useRef)(false);var _useSmoothScrollToTop=useSmoothScrollToTop(),smoothScrollTop=_useSmoothScrollToTop.smoothScrollTop,cancelScrollToTop=_useSmoothScrollToTop.cancelScrollToTop;(0,lib/* useScrollPosition */.RF)(function(_ref,lastPosition){var scrollTop=_ref.scrollY;var lastScrollTop=lastPosition==null?void 0:lastPosition.scrollY;// No lastScrollTop means component is just being mounted.
// Not really a scroll event from the user, so we ignore it
if(!lastScrollTop){return;}if(isFocusedAnchor.current){isFocusedAnchor.current=false;return;}var isScrollingUp=scrollTop<lastScrollTop;if(!isScrollingUp){cancelScrollToTop();}if(scrollTop<threshold){setShow(false);return;}if(isScrollingUp){var documentHeight=document.documentElement.scrollHeight;var windowHeight=window.innerHeight;if(scrollTop+windowHeight<documentHeight){setShow(true);}}else{setShow(false);}});(0,lib/* useLocationChange */.SL)(function(locationChangeEvent){if(locationChangeEvent.location.hash){isFocusedAnchor.current=true;setShow(false);}});return/*#__PURE__*/react.createElement("button",{"aria-label":(0,Translate/* translate */.I)({id:'theme.BackToTopButton.buttonAriaLabel',message:'Scroll back to top',description:'The ARIA label for the back to top button'}),className:(0,clsx_m/* default */.Z)('clean-btn',lib/* ThemeClassNames.common.backToTopButton */.kM.common.backToTopButton,BackToTopButton_styles_module.backToTopButton,(_clsx={},_clsx[BackToTopButton_styles_module.backToTopButtonShow]=show,_clsx)),type:"button",onClick:function onClick(){return smoothScrollTop();}});}/* harmony default export */ var theme_BackToTopButton = (BackToTopButton);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(76775);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocPage_styles_module = ({"docPage":"docPage_lDyR","docMainContainer":"docMainContainer_r8cw","docSidebarContainer":"docSidebarContainer_0YBq","docMainContainerEnhanced":"docMainContainerEnhanced_SOUu","docSidebarContainerHidden":"docSidebarContainerHidden_Qlt2","collapsedDocSidebar":"collapsedDocSidebar_zZpm","expandSidebarButtonIcon":"expandSidebarButtonIcon_cxi8","docItemWrapperEnhanced":"docItemWrapperEnhanced_aT5H"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageContent(_ref){var _clsx,_clsx2,_clsx3;var currentDocRoute=_ref.currentDocRoute,versionMetadata=_ref.versionMetadata,children=_ref.children;var pluginId=versionMetadata.pluginId,version=versionMetadata.version;var sidebarName=currentDocRoute.sidebar;var sidebar=sidebarName?versionMetadata.docsSidebars[sidebarName]:undefined;var _useState=(0,react.useState)(false),hiddenSidebarContainer=_useState[0],setHiddenSidebarContainer=_useState[1];var _useState2=(0,react.useState)(false),hiddenSidebar=_useState2[0],setHiddenSidebar=_useState2[1];var toggleSidebar=(0,react.useCallback)(function(){if(hiddenSidebar){setHiddenSidebar(false);}setHiddenSidebarContainer(function(value){return!value;});},[hiddenSidebar]);return/*#__PURE__*/react.createElement(Layout/* default */.Z,{wrapperClassName:lib/* ThemeClassNames.wrapper.docsPages */.kM.wrapper.docsPages,pageClassName:lib/* ThemeClassNames.page.docsDocPage */.kM.page.docsDocPage,searchMetadatas:{version:version,tag:(0,lib/* docVersionSearchTag */.os)(pluginId,version)}},/*#__PURE__*/react.createElement("div",{className:DocPage_styles_module.docPage},/*#__PURE__*/react.createElement(theme_BackToTopButton,null),sidebar&&/*#__PURE__*/react.createElement("aside",{className:(0,clsx_m/* default */.Z)(DocPage_styles_module.docSidebarContainer,(_clsx={},_clsx[DocPage_styles_module.docSidebarContainerHidden]=hiddenSidebarContainer,_clsx)),onTransitionEnd:function onTransitionEnd(e){if(!e.currentTarget.classList.contains(DocPage_styles_module.docSidebarContainer)){return;}if(hiddenSidebarContainer){setHiddenSidebar(true);}}},/*#__PURE__*/react.createElement(DocSidebar,{key:// Reset sidebar state on sidebar changes
// See https://github.com/facebook/docusaurus/issues/3414
sidebarName,sidebar:sidebar,path:currentDocRoute.path,onCollapse:toggleSidebar,isHidden:hiddenSidebar}),hiddenSidebar&&/*#__PURE__*/react.createElement("div",{className:DocPage_styles_module.collapsedDocSidebar,title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonTitle',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonAriaLabel',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),tabIndex:0,role:"button",onKeyDown:toggleSidebar,onClick:toggleSidebar},/*#__PURE__*/react.createElement(theme_IconArrow,{className:DocPage_styles_module.expandSidebarButtonIcon}))),/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.Z)(DocPage_styles_module.docMainContainer,(_clsx2={},_clsx2[DocPage_styles_module.docMainContainerEnhanced]=hiddenSidebarContainer||!sidebar,_clsx2))},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('container padding-top--md padding-bottom--lg',DocPage_styles_module.docItemWrapper,(_clsx3={},_clsx3[DocPage_styles_module.docItemWrapperEnhanced]=hiddenSidebarContainer,_clsx3))},/*#__PURE__*/react.createElement(esm/* MDXProvider */.Zo,{components:theme_MDXComponents},children)))));}function DocPage(props){var docRoutes=props.route.routes,versionMetadata=props.versionMetadata,location=props.location;var currentDocRoute=docRoutes.find(function(docRoute){return (0,react_router/* matchPath */.LX)(location.pathname,docRoute);});if(!currentDocRoute){return/*#__PURE__*/react.createElement(NotFound["default"],null);}return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("html",{className:versionMetadata.className})),/*#__PURE__*/react.createElement(DocPageContent,{currentDocRoute:currentDocRoute,versionMetadata:versionMetadata},(0,renderRoutes/* default */.Z)(docRoutes,{versionMetadata:versionMetadata})));}/* harmony default export */ var theme_DocPage = (DocPage);

/***/ }),

/***/ 39649:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": function() { return /* binding */ MainHeading; },
  "Z": function() { return /* binding */ theme_Heading; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 27 modules
var lib = __webpack_require__(60370);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_y2LR","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_3ly5"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js
var _excluded=["id"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MainHeading=function MainHeading(_ref){var props=Object.assign({},_ref);return/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement("h1",(0,esm_extends/* default */.Z)({},props,{id:undefined// h1 headings do not need an id because they don't appear in the TOC
}),props.children));};var createAnchorHeading=function createAnchorHeading(Tag){return function TargetComponent(_ref2){var _clsx;var id=_ref2.id,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref2,_excluded);var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;if(!id){return/*#__PURE__*/react.createElement(Tag,props);}return/*#__PURE__*/react.createElement(Tag,(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)('anchor',(_clsx={},_clsx[styles_module.anchorWithHideOnScrollNavbar]=hideOnScroll,_clsx[styles_module.anchorWithStickyNavbar]=!hideOnScroll,_clsx)),id:id}),props.children,/*#__PURE__*/react.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+id,title:(0,Translate/* translate */.I)({id:'theme.common.headingLinkTitle',message:'Direct link to heading',description:'Title for link to heading'})},"\u200B"));};};var Heading=function Heading(headingType){return headingType==='h1'?MainHeading:createAnchorHeading(headingType);};/* harmony default export */ var theme_Heading = (Heading);

/***/ }),

/***/ 93783:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10412);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var windowSizes={desktop:'desktop',mobile:'mobile',// This "ssr" value is very important to handle hydration FOUC / layout shifts
// You have to handle server-rendering explicitly on the call-site
// On the server, you may need to render BOTH the mobile/desktop elements (and hide one of them with mediaquery)
// We don't return "undefined" on purpose, to make it more explicit
ssr:'ssr'};var DesktopThresholdWidth=996;function getWindowSize(){if(!_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__["default"].canUseDOM){return windowSizes.ssr;}return window.innerWidth>DesktopThresholdWidth?windowSizes.desktop:windowSizes.mobile;}// Simulate the SSR window size in dev, so that potential hydration FOUC/layout shift problems can be seen in dev too!
var DevSimulateSSR= false&&0;// This hook returns an enum value on purpose!
// We don't want it to return the actual width value, for resize perf reasons
// We only want to re-render once a breakpoint is crossed
function useWindowSize(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){if(DevSimulateSSR){return'ssr';}return getWindowSize();}),windowSize=_useState[0],setWindowSize=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){function updateWindowSize(){setWindowSize(getWindowSize());}var timeout=DevSimulateSSR?window.setTimeout(updateWindowSize,1000):undefined;window.addEventListener('resize',updateWindowSize);return function(){window.removeEventListener('resize',updateWindowSize);clearTimeout(timeout);};},[]);return windowSize;}/* harmony default export */ __webpack_exports__["Z"] = (useWindowSize);

/***/ }),

/***/ 8802:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));// Trailing slash handling depends in some site configuration options
function applyTrailingSlash(path,options){var trailingSlash=options.trailingSlash,baseUrl=options.baseUrl;if(path.startsWith('#')){// Never apply trailing slash to an anchor link
return path;}// TODO deduplicate: also present in @docusaurus/utils
function addTrailingSlash(str){return str.endsWith('/')?str:str+"/";}function removeTrailingSlash(str){return str.endsWith('/')?str.slice(0,-1):str;}function handleTrailingSlash(str,trailing){return trailing?addTrailingSlash(str):removeTrailingSlash(str);}// undefined = legacy retrocompatible behavior
if(typeof trailingSlash==='undefined'){return path;}// The trailing slash should be handled before the ?search#hash !
var _path$split=path.split(/[#?]/),pathname=_path$split[0];// Never transform '/' to ''
// Never remove the baseUrl trailing slash!
// If baseUrl = /myBase/, we want to emit /myBase/index.html and not /myBase.html !
// See https://github.com/facebook/docusaurus/issues/5077
var shouldNotApply=pathname==='/'||pathname===baseUrl;var newPathname=shouldNotApply?pathname:handleTrailingSlash(pathname,trailingSlash);return path.replace(pathname,newPathname);}exports["default"]=applyTrailingSlash;

/***/ }),

/***/ 18780:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports, "__esModule", ({value:true}));exports.uniq=exports.applyTrailingSlash=void 0;var applyTrailingSlash_1=__webpack_require__(8802);Object.defineProperty(exports, "applyTrailingSlash", ({enumerable:true,get:function get(){return __importDefault(applyTrailingSlash_1).default;}}));var uniq_1=__webpack_require__(29964);Object.defineProperty(exports, "uniq", ({enumerable:true,get:function get(){return __importDefault(uniq_1).default;}}));

/***/ }),

/***/ 29964:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));// Remove duplicate array items (similar to _.uniq)
function uniq(array){// Note: had problems with [...new Set()]: https://github.com/facebook/docusaurus/issues/4972#issuecomment-863895061
return Array.from(new Set(array));}exports["default"]=uniq;

/***/ }),

/***/ 87594:
/***/ (function(module, exports) {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


/***/ }),

/***/ 41113:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function webpackUniversalModuleDefinition(e,t){ true?module.exports=t(__webpack_require__(67294)):0}("undefined"!=typeof self?self:this,(function(e){return function(e){var t={};function __nested_webpack_require_387__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__nested_webpack_require_387__),r.l=!0,r.exports}return __nested_webpack_require_387__.m=e,__nested_webpack_require_387__.c=t,__nested_webpack_require_387__.d=function(e,t,n){__nested_webpack_require_387__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__nested_webpack_require_387__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__nested_webpack_require_387__.t=function(e,t){if(1&t&&(e=__nested_webpack_require_387__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__nested_webpack_require_387__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__nested_webpack_require_387__.d(n,r,function(t){return e[t]}.bind(null,r));return n},__nested_webpack_require_387__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __nested_webpack_require_387__.d(t,"a",t),t},__nested_webpack_require_387__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__nested_webpack_require_387__.p="",__nested_webpack_require_387__(__nested_webpack_require_387__.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var o=r(n(0)),i=function(e){_inherits(Parallax,e);var t=_createSuper(Parallax);function Parallax(){return _classCallCheck(this,Parallax),t.apply(this,arguments)}return Parallax}(o.default.Component);t.Parallax=i;var a=function(e){_inherits(Background,e);var t=_createSuper(Background);function Background(){return _classCallCheck(this,Background),t.apply(this,arguments)}return Background}(o.default.Component);t.Background=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.getNodeHeight=t.isScrolledIntoView=t.getWindowHeight=void 0,t.getWindowHeight=function(e){if(!e)return 0;var t=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0];return t.innerHeight||r.clientHeight||o.clientHeight},t.isScrolledIntoView=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;if(!r)return!1;var o=e.getBoundingClientRect().top-n,i=e.getBoundingClientRect().bottom+n;return o<=t.getWindowHeight(r)&&i>=0},t.getNodeHeight=function(e,n){return e?n&&"clientHeight"in n?n.clientHeight:t.getWindowHeight(e):0},t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var o=r(n(4));t.Parallax=o.default;var i=r(n(7));t.Background=i.default},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=n(1),a=n(5),c=n(2),u=r(n(6)),s={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},l=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Parallax,e);var t=_createSuper(Parallax);function Parallax(e){var n;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Parallax),(n=t.call(this,e)).onWindowResize=function(){n.parentHeight=c.getNodeHeight(n.canUseDOM,n.parent),n.updatePosition()},n.onWindowLoad=function(){n.updatePosition()},n.onScroll=function(){if(n.canUseDOM){var e=Date.now();e-n.timestamp>=10&&c.isScrolledIntoView(n.node,100,n.canUseDOM)&&(window.requestAnimationFrame(n.updatePosition),n.timestamp=e)}},n.onContentMount=function(e){n.content=e},n.updatePosition=function(){if(n.content){var e=!1;n.contentHeight=n.content.getBoundingClientRect().height,n.contentWidth=n.node.getBoundingClientRect().width,n.img&&n.img.naturalWidth/n.img.naturalHeight<n.contentWidth/n.getImageHeight()&&(e=!0);var t=a.getRelativePosition(n.node,n.canUseDOM),r=!!n.img,o=n.bg&&n.state.splitChildren.bgChildren.length>0;r&&n.setImagePosition(t,e),o&&n.setBackgroundPosition(t),r||o||n.setState({percentage:t})}},n.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:s,bgStyle:Object.assign(Object.assign({},s),e.bgStyle),percentage:0,splitChildren:a.getSplitChildren(e)},n.canUseDOM=c.canUseDOM(),n.node=null,n.content=null,n.bgImageLoaded=!1,n.bgImageRef=void 0,n.parent=e.parent,n.parentHeight=c.getNodeHeight(n.canUseDOM,n.parent),n.timestamp=Date.now(),n.isDynamicBlur=a.getHasDynamicBlur(e.blur),n}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Parallax,[{key:"componentDidMount",value:function componentDidMount(){var e=this.props.parent,t=this.state,n=t.bgImage,r=t.bgImageSrcSet,o=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,r,o):this.updatePosition()}},{key:"componentDidUpdate",value:function componentDidUpdate(e){var t=this.props,n=t.parent,r=t.bgImage,o=t.bgImageSrcSet,i=t.bgImageSizes,a=this.state.bgImage;e.parent!==n&&(this.removeListeners(this.parent),this.parent=n,n&&this.addListeners()),this.parentHeight=c.getNodeHeight(this.canUseDOM,this.parent),a!==r&&this.loadImage(r,o,i)}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function setBackgroundPosition(e){var t=this.props,n=t.disabled,r=t.strength,o=Object.assign({},this.state.bgStyle);if(!n){var i="translate3d(-50%, ".concat((r<0?r:0)-r*e,"px, 0)");o.WebkitTransform=i,o.transform=i}this.setState({bgStyle:o,percentage:e})}},{key:"setImagePosition",value:function setImagePosition(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.disabled,o=n.strength,i=n.blur,c=t?"auto":"".concat(this.getImageHeight(),"px"),u=t?"".concat(this.contentWidth,"px"):"auto",s=Object.assign(Object.assign({},this.state.imgStyle),{height:c,width:u});if(!r){var l=o<0,f=(l?o:0)-o*e,p="translate3d(-50%, ".concat(f,"px, 0)"),d="none";i&&(d="blur(".concat(a.getBlurValue(this.isDynamicBlur,i,e),"px)")),s.WebkitTransform=p,s.transform=p,s.WebkitFilter=d,s.filter=d}this.setState({imgStyle:s,percentage:e})}},{key:"getImageHeight",value:function getImageHeight(){var e=this.props.strength,t=(e<0?2.5:1)*Math.abs(e);return Math.floor(this.contentHeight+t)}},{key:"loadImage",value:function loadImage(e,t,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(o){r.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},(function(){return r.updatePosition()})),r.props.onLoad&&r.props.onLoad(o)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function releaseImage(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function addListeners(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function removeListeners(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function render(){var e=this,t=this.props,n=t.className,r=t.style,i=t.bgClassName,a=t.contentClassName,c=t.bgImageAlt,s=t.renderLayer,l=t.bgImageStyle,f=this.state,p=f.bgImage,d=f.bgImageSrcSet,g=f.bgImageSizes,_=f.percentage,y=f.imgStyle,h=f.bgStyle,b=f.splitChildren;return o.default.createElement("div",{className:"react-parallax ".concat(n),style:Object.assign({position:"relative",overflow:"hidden"},r),ref:function ref(t){e.node=t}},p?o.default.createElement("img",{className:i,src:p,srcSet:d,sizes:g,ref:function ref(t){e.img=t},alt:c,style:Object.assign(Object.assign({},y),l)}):null,s?s(-(_-1)):null,b.bgChildren.length>0?o.default.createElement("div",{className:"react-parallax-background-children",ref:function ref(t){e.bg=t},style:h},b.bgChildren):null,o.default.createElement(u.default,{onMount:this.onContentMount,className:a},b.children))}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(e){return{splitChildren:a.getSplitChildren(e)}}}]),Parallax}(i.Parallax);l.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},t.default=l},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setBlur=t.getBlurValue=t.getHasDynamicBlur=t.getSplitChildren=t.getRelativePosition=t.getPercentage=void 0;var r=n(0),o=n(2);t.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},t.getRelativePosition=function(e,n){if(!n)return 0;var r=e.getBoundingClientRect(),i=r.top,a=r.height,c=o.getNodeHeight(n),u=a>c?a:c,s=Math.round(i>u?u:i);return t.getPercentage(0,u,s)},t.getSplitChildren=function(e){var t=[],n=r.Children.toArray(e.children);return n.forEach((function(e,r){var o=e;o.type&&o.type.isParallaxBackground&&(t=t.concat(n.splice(r,1)))})),{bgChildren:t,children:n}},t.getHasDynamicBlur=function(e){return"object"===_typeof(e)&&void 0!==e.min&&void 0!==e.max},t.getBlurValue=function(e,t,n){return e?t.min+(1-n)*t.max:t},t.setBlur=function(e,t){e.style.webkitFilter="blur(".concat(t,"px)"),e.style.filter="blur(".concat(t,"px)")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0));t.default=function ParallaxChildren(e){var t=e.children,n=e.onMount,r=e.className;return o.default.createElement("div",{ref:function ref(e){return n(e)},className:r||"react-parallax-content",style:{position:"relative"}},t)}},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Background,e);var t=_createSuper(Background);function Background(){return _classCallCheck(this,Background),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Background,[{key:"render",value:function render(){var e=this.props,t=e.className,n=e.children;return o.default.createElement("div",{className:"react-parallax-background ".concat(t)},n)}}]),Background}(n(1).Background);i.defaultProps={className:""},i.isParallaxBackground=!0,t.default=i}])}));

/***/ })

}]);