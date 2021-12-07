"use strict";
(self["webpackChunkeoscostarica_io"] = self["webpackChunkeoscostarica_io"] || []).push([[5749],{

/***/ 95999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Translate; },
  "I": function() { return /* binding */ translate; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Interpolate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//*
Minimal implementation of a React interpolate component.
We don't ship a markdown parser nor a feature-complete i18n library on purpose.
More details here: https://github.com/facebook/docusaurus/pull/4295
*/var ValueRegexp=/{\w+}/g;var ValueFoundMarker='{}';// does not care much
function interpolate(text,values){var elements=[];var processedText=text.replace(ValueRegexp,function(match){// remove {{ and }} around the placeholder
var key=match.substr(1,match.length-2);var value=values===null||values===void 0?void 0:values[key];if(typeof value!=='undefined'){var element=/*#__PURE__*/react.isValidElement(value)?value:// For non-React elements: basic primitive->string conversion
String(value);elements.push(element);return ValueFoundMarker;}else{return match;// no match? add warning?
}});// No interpolation to be done: just return the text
if(elements.length===0){return text;}// Basic string interpolation: returns interpolated string
else if(elements.every(function(el){return typeof el==='string';})){return processedText.split(ValueFoundMarker).reduce(function(str,value,index){var _a;return str.concat(value).concat((_a=elements[index])!==null&&_a!==void 0?_a:'');},'');}// JSX interpolation: returns ReactNode
else{return processedText.split(ValueFoundMarker).reduce(function(array,value,index){return[].concat(array,[/*#__PURE__*/react.createElement(react.Fragment,{key:index},value,elements[index])]);},[]);}}function Interpolate(_ref){var children=_ref.children,values=_ref.values;if(typeof children!=='string'){console.warn('Illegal <Interpolate> children',children);throw new Error('The Docusaurus <Interpolate> component only accept simple string values');}return interpolate(children,values);}
// EXTERNAL MODULE: ./.docusaurus/codeTranslations.json
var codeTranslations = __webpack_require__(57529);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Can't read it from context, due to exposing imperative API
function getLocalizedMessage(_ref){var id=_ref.id,message=_ref.message;var _a,_b;if(typeof id==='undefined'&&typeof message==='undefined'){throw new Error('Docusaurus translation declarations must have at least a translation id or a default translation message');}return(_b=(_a=codeTranslations[id!==null&&id!==void 0?id:message])!==null&&_a!==void 0?_a:message)!==null&&_b!==void 0?_b:id;}// Imperative translation API is useful for some edge-cases:
// - translating page titles (meta)
// - translating string props (input placeholders, image alt, aria labels...)
function translate(_ref2,values){var message=_ref2.message,id=_ref2.id;var localizedMessage=getLocalizedMessage({message:message,id:id});return interpolate(localizedMessage,values);}// Maybe we'll want to improve this component with additional features
// Like toggling a translation mode that adds a little translation button near the text?
function Translate(_ref3){var children=_ref3.children,id=_ref3.id,values=_ref3.values;if(children&&typeof children!=='string'){console.warn('Illegal <Translate> children',children);throw new Error('The Docusaurus <Translate> component only accept simple string values');}var localizedMessage=getLocalizedMessage({message:children,id:id});return interpolate(localizedMessage,values);}

/***/ }),

/***/ 29935:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* binding */ DEFAULT_PLUGIN_ID; }
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Constants used on the client-side: duplicated from server-side code
var DEFAULT_PLUGIN_ID='default';

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

/***/ 28143:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserRouter": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.VK; },
/* harmony export */   "HashRouter": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.UT; },
/* harmony export */   "Link": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.rU; },
/* harmony export */   "MemoryRouter": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.VA; },
/* harmony export */   "NavLink": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.OL; },
/* harmony export */   "Prompt": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.NL; },
/* harmony export */   "Redirect": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.l_; },
/* harmony export */   "Route": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.AW; },
/* harmony export */   "Router": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.F0; },
/* harmony export */   "StaticRouter": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.gx; },
/* harmony export */   "Switch": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.rs; },
/* harmony export */   "generatePath": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Gn; },
/* harmony export */   "matchPath": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.LX; },
/* harmony export */   "useHistory": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.k6; },
/* harmony export */   "useLocation": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.TH; },
/* harmony export */   "useParams": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.UO; },
/* harmony export */   "useRouteMatch": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.$B; },
/* harmony export */   "withRouter": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.EN; }
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73727);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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

/***/ 28084:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useGlobalData; },
/* harmony export */   "useAllPluginInstancesData": function() { return /* binding */ useAllPluginInstancesData; },
/* harmony export */   "usePluginData": function() { return /* binding */ usePluginData; }
/* harmony export */ });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52263);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29935);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useGlobalData(){var _useDocusaurusContext=(0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),globalData=_useDocusaurusContext.globalData;if(!globalData){throw new Error('Docusaurus global data not found.');}return globalData;}function useAllPluginInstancesData(pluginName){var globalData=useGlobalData();var pluginGlobalData=globalData[pluginName];if(!pluginGlobalData){throw new Error("Docusaurus plugin global data not found for \""+pluginName+"\" plugin.");}return pluginGlobalData;}function usePluginData(pluginName,pluginId){if(pluginId===void 0){pluginId=_constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_PLUGIN_ID */ .m;}var pluginGlobalData=useAllPluginInstancesData(pluginName);var pluginInstanceGlobalData=pluginGlobalData[pluginId];if(!pluginInstanceGlobalData){throw new Error("Docusaurus plugin global data not found for \""+pluginName+"\" plugin with id \""+pluginId+"\".");}return pluginInstanceGlobalData;}

/***/ }),

/***/ 72389:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useIsBrowser; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _browserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9913);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useIsBrowser(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_browserContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ ._);}

/***/ }),

/***/ 48408:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));exports.getDocVersionSuggestions=exports.getActiveDocContext=exports.getActiveVersion=exports.getLatestVersion=exports.getActivePlugin=void 0;var router_1=__webpack_require__(28143);// get the data of the plugin that is currently "active"
// ie the docs of that plugin are currently browsed
// it is useful to support multiple docs plugin instances
function getActivePlugin(allPluginDatas,pathname,options){if(options===void 0){options={};}var activeEntry=Object.entries(allPluginDatas).find(function(_ref){var _id=_ref[0],pluginData=_ref[1];return!!(0,router_1.matchPath)(pathname,{path:pluginData.path,exact:false,strict:false});});var activePlugin=activeEntry?{pluginId:activeEntry[0],pluginData:activeEntry[1]}:undefined;if(!activePlugin&&options.failfast){throw new Error("Can't find active docs plugin for \""+pathname+"\" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(allPluginDatas).map(function(plugin){return plugin.path;}).join(', '));}return activePlugin;}exports.getActivePlugin=getActivePlugin;var getLatestVersion=function getLatestVersion(data){return data.versions.find(function(version){return version.isLast;});};exports.getLatestVersion=getLatestVersion;// Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active
var getActiveVersion=function getActiveVersion(data,pathname){var lastVersion=(0,exports.getLatestVersion)(data);// Last version is a route like /docs/*,
// we need to try to match it last or it would match /docs/version-1.0/* as well
var orderedVersionsMetadata=[].concat(data.versions.filter(function(version){return version!==lastVersion;}),[lastVersion]);return orderedVersionsMetadata.find(function(version){return!!(0,router_1.matchPath)(pathname,{path:version.path,exact:false,strict:false});});};exports.getActiveVersion=getActiveVersion;var getActiveDocContext=function getActiveDocContext(data,pathname){var activeVersion=(0,exports.getActiveVersion)(data,pathname);var activeDoc=activeVersion===null||activeVersion===void 0?void 0:activeVersion.docs.find(function(doc){return!!(0,router_1.matchPath)(pathname,{path:doc.path,exact:true,strict:false});});function getAlternateVersionDocs(docId){var result={};data.versions.forEach(function(version){version.docs.forEach(function(doc){if(doc.id===docId){result[version.name]=doc;}});});return result;}var alternateVersionDocs=activeDoc?getAlternateVersionDocs(activeDoc.id):{};return{activeVersion:activeVersion,activeDoc:activeDoc,alternateDocVersions:alternateVersionDocs};};exports.getActiveDocContext=getActiveDocContext;var getDocVersionSuggestions=function getDocVersionSuggestions(data,pathname){var latestVersion=(0,exports.getLatestVersion)(data);var activeDocContext=(0,exports.getActiveDocContext)(data,pathname);var latestDocSuggestion=activeDocContext===null||activeDocContext===void 0?void 0:activeDocContext.alternateDocVersions[latestVersion.name];return{latestDocSuggestion:latestDocSuggestion,latestVersionSuggestion:latestVersion};};exports.getDocVersionSuggestions=getDocVersionSuggestions;

/***/ }),

/***/ 96730:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */__webpack_unused_export__ = ({value:true});exports.Jo=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=exports.gA=exports.zh=exports._r=void 0;var tslib_1=__webpack_require__(70655);var router_1=__webpack_require__(28143);var useGlobalData_1=(0,tslib_1.__importStar)(__webpack_require__(28084));var docsClientUtils_1=__webpack_require__(48408);// Important to use a constant object to avoid React useEffect executions etc...,
// see https://github.com/facebook/docusaurus/issues/5089
var StableEmptyObject={};// Not using useAllPluginInstancesData() because in blog-only mode, docs hooks are still used by the theme
// We need a fail-safe fallback when the docs plugin is not in use
var useAllDocsData=function useAllDocsData(){var _a;// useAllPluginInstancesData('docusaurus-plugin-content-docs');
return(_a=(0,useGlobalData_1.default)()['docusaurus-plugin-content-docs'])!==null&&_a!==void 0?_a:StableEmptyObject;};exports._r=useAllDocsData;var useDocsData=function useDocsData(pluginId){return(0,useGlobalData_1.usePluginData)('docusaurus-plugin-content-docs',pluginId);};exports.zh=useDocsData;var useActivePlugin=function useActivePlugin(options){if(options===void 0){options={};}var data=(0,exports._r)();var _ref=(0,router_1.useLocation)(),pathname=_ref.pathname;return(0,docsClientUtils_1.getActivePlugin)(data,pathname,options);};exports.gA=useActivePlugin;var useActivePluginAndVersion=function useActivePluginAndVersion(options){if(options===void 0){options={};}var activePlugin=(0,exports.gA)(options);var _ref2=(0,router_1.useLocation)(),pathname=_ref2.pathname;if(activePlugin){var activeVersion=(0,docsClientUtils_1.getActiveVersion)(activePlugin.pluginData,pathname);return{activePlugin:activePlugin,activeVersion:activeVersion};}return undefined;};__webpack_unused_export__=useActivePluginAndVersion;// versions are returned ordered (most recent first)
var useVersions=function useVersions(pluginId){var data=(0,exports.zh)(pluginId);return data.versions;};__webpack_unused_export__=useVersions;var useLatestVersion=function useLatestVersion(pluginId){var data=(0,exports.zh)(pluginId);return(0,docsClientUtils_1.getLatestVersion)(data);};__webpack_unused_export__=useLatestVersion;// Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active
var useActiveVersion=function useActiveVersion(pluginId){var data=(0,exports.zh)(pluginId);var _ref3=(0,router_1.useLocation)(),pathname=_ref3.pathname;return(0,docsClientUtils_1.getActiveVersion)(data,pathname);};__webpack_unused_export__=useActiveVersion;var useActiveDocContext=function useActiveDocContext(pluginId){var data=(0,exports.zh)(pluginId);var _ref4=(0,router_1.useLocation)(),pathname=_ref4.pathname;return(0,docsClientUtils_1.getActiveDocContext)(data,pathname);};__webpack_unused_export__=useActiveDocContext;// Useful to say "hey, you are not on the latest docs version, please switch"
var useDocVersionSuggestions=function useDocVersionSuggestions(pluginId){var data=(0,exports.zh)(pluginId);var _ref5=(0,router_1.useLocation)(),pathname=_ref5.pathname;return(0,docsClientUtils_1.getDocVersionSuggestions)(data,pathname);};exports.Jo=useDocVersionSuggestions;

/***/ }),

/***/ 80907:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gA": function() { return /* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.gA; },
/* harmony export */   "_r": function() { return /* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__._r; },
/* harmony export */   "Jo": function() { return /* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.Jo; },
/* harmony export */   "zh": function() { return /* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.zh; }
/* harmony export */ });
/* harmony import */ var _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96730);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Re-expose useDocs
// Ensure it's always statically available even if user is not using the docs plugin
// Problem reported for the blog-only mode: https://github.com/facebook/docusaurus/issues/3360


/***/ }),

/***/ 60370:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pl": function() { return /* reexport */ AnnouncementBarProvider; },
  "zF": function() { return /* reexport */ Collapsible; },
  "PO": function() { return /* reexport */ components_Details; },
  "L5": function() { return /* reexport */ DocsPreferredVersionContextProvider; },
  "Cv": function() { return /* reexport */ MobileSecondaryMenuFiller; },
  "Cn": function() { return /* reexport */ MobileSecondaryMenuProvider; },
  "OC": function() { return /* reexport */ ScrollControllerProvider; },
  "kM": function() { return /* reexport */ ThemeClassNames; },
  "WA": function() { return /* reexport */ createStorageSlot; },
  "os": function() { return /* reexport */ docVersionSearchTag; },
  "Mg": function() { return /* reexport */ isSamePath; },
  "_f": function() { return /* reexport */ listStorageKeys; },
  "bc": function() { return /* reexport */ parseCodeBlockTitle; },
  "nT": function() { return /* reexport */ useAnnouncementBar; },
  "uR": function() { return /* reexport */ useCollapsible; },
  "J": function() { return /* reexport */ useDocsPreferredVersion; },
  "SL": function() { return /* reexport */ useLocationChange; },
  "D9": function() { return /* reexport */ usePrevious; },
  "RF": function() { return /* reexport */ useScrollPosition; },
  "DA": function() { return /* reexport */ useTOCFilter; },
  "Si": function() { return /* reexport */ utils_useTOCHighlight; },
  "LU": function() { return /* reexport */ useThemeConfig; },
  "pe": function() { return /* reexport */ useTitleFormatter; }
});

// UNUSED EXPORTS: DEFAULT_SEARCH_TAG, duplicates, isDocsPluginEnabled, isRegexpStringMatch, listTagsByLetters, translateTagsPageTitle, useAlternatePageUtils, useDocsPreferredVersionByPluginId, useDynamicCallback, useHistoryPopHandler, useIsomorphicLayoutEffect, useLocalPathname, useMobileSecondaryMenuRenderer, usePluralForm, useScrollController, useScrollPositionBlocker

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var exports_useDocusaurusContext = __webpack_require__(52263);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useThemeConfig(){return (0,exports_useDocusaurusContext/* default */.Z)().siteConfig.themeConfig;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var StorageTypes=(/* unused pure expression or super */ null && (['localStorage','sessionStorage','none']));var DefaultStorageType='localStorage';// Will return null browser storage is unavailable (like running Docusaurus in iframe)
// See https://github.com/facebook/docusaurus/pull/4501
function getBrowserStorage(storageType){if(storageType===void 0){storageType=DefaultStorageType;}if(typeof window==='undefined'){throw new Error('Browser storage is not available on Node.js/Docusaurus SSR process.');}if(storageType==='none'){return null;}else{try{return window[storageType];}catch(e){logOnceBrowserStorageNotAvailableWarning(e);return null;}}}/**
 * Poor man's memoization to avoid logging multiple times the same warning
 * Sometimes, localStorage/sessionStorage is unavailable due to browser policies
 */var hasLoggedBrowserStorageNotAvailableWarning=false;function logOnceBrowserStorageNotAvailableWarning(error){if(!hasLoggedBrowserStorageNotAvailableWarning){console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",error);hasLoggedBrowserStorageNotAvailableWarning=true;}}var NoopStorageSlot={get:function get(){return null;},set:function set(){},del:function del(){}};//  Fail-fast, as storage APIs should not be used during the SSR process
function createServerStorageSlot(key){function throwError(){throw new Error("Illegal storage API usage for storage key \""+key+"\".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.");}return{get:throwError,set:throwError,del:throwError};}/**
 * Creates an object for accessing a particular key in localStorage.
 */var createStorageSlot=function createStorageSlot(key,options){if(typeof window==='undefined'){return createServerStorageSlot(key);}var browserStorage=getBrowserStorage(options===null||options===void 0?void 0:options.persistence);if(browserStorage===null){return NoopStorageSlot;}return{get:function get(){return browserStorage.getItem(key);},set:function set(value){return browserStorage.setItem(key,value);},del:function del(){return browserStorage.removeItem(key);}};};/**
 * Returns a list of all the keys currently stored in browser storage
 * or an empty list if browser storage can't be accessed.
 */function listStorageKeys(storageType){if(storageType===void 0){storageType=DefaultStorageType;}var browserStorage=getBrowserStorage(storageType);if(!browserStorage){return[];}var keys=[];for(var i=0;i<browserStorage.length;i+=1){var key=browserStorage.key(i);if(key!==null){keys.push(key);}}return keys;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useAlternatePageUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Permits to obtain the url of the current page in another locale
// Useful to generate hreflang meta headers etc...
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
function useAlternatePageUtils(){var _useDocusaurusContext=useDocusaurusContext(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig,baseUrl=_useDocusaurusContext2.baseUrl,url=_useDocusaurusContext2.url,_useDocusaurusContext3=_useDocusaurusContext.i18n,defaultLocale=_useDocusaurusContext3.defaultLocale,currentLocale=_useDocusaurusContext3.currentLocale;var _useLocation=useLocation(),pathname=_useLocation.pathname;var baseUrlUnlocalized=currentLocale===defaultLocale?baseUrl:baseUrl.replace("/"+currentLocale+"/",'/');var pathnameSuffix=pathname.replace(baseUrl,'');function getLocalizedBaseUrl(locale){return locale===defaultLocale?""+baseUrlUnlocalized:""+baseUrlUnlocalized+locale+"/";}// TODO support correct alternate url when localized site is deployed on another domain
function createUrl(_ref){var locale=_ref.locale,fullyQualified=_ref.fullyQualified;return""+(fullyQualified?url:'')+getLocalizedBaseUrl(locale)+pathnameSuffix;}return{createUrl:createUrl};}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var codeBlockTitleRegex=/title=(["'])(.*?)\1/;function parseCodeBlockTitle(metastring){var _a,_b;return(_b=(_a=metastring===null||metastring===void 0?void 0:metastring.match(codeBlockTitleRegex))===null||_a===void 0?void 0:_a[2])!==null&&_b!==void 0?_b:'';}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/searchUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DEFAULT_SEARCH_TAG='default';function docVersionSearchTag(pluginId,versionName){return"docs-"+pluginId+"-"+versionName;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useDocs.js
var useDocs = __webpack_require__(80907);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO not ideal, see also "useDocs"
var isDocsPluginEnabled=!!useDocs/* useAllDocsData */._r;
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/pathUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Compare the 2 paths, ignoring trailing /
var isSamePath=function isSamePath(path1,path2){var normalize=function normalize(pathname){return!pathname||(pathname===null||pathname===void 0?void 0:pathname.endsWith('/'))?pathname:pathname+"/";};return normalize(path1)===normalize(path2);};
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/generalUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var useTitleFormatter=function useTitleFormatter(title){var _useDocusaurusContext=(0,exports_useDocusaurusContext/* default */.Z)(),siteConfig=_useDocusaurusContext.siteConfig;var siteTitle=siteConfig.title,titleDelimiter=siteConfig.titleDelimiter;return title&&title.trim().length?title.trim()+" "+titleDelimiter+" "+siteTitle:siteTitle;};
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://twitter.com/sebastienlorber/status/1366820663261077510
var OrderedPluralForms=['zero','one','two','few','many','other'];function sortPluralForms(pluralForms){return OrderedPluralForms.filter(function(pf){return pluralForms.includes(pf);});}// Hardcoded english/fallback implementation
var EnglishPluralForms={locale:'en',pluralForms:sortPluralForms(['one','other']),select:function select(count){return count===1?'one':'other';}};function createLocalePluralForms(locale){var pluralRules=new Intl.PluralRules(locale);return{locale:locale,pluralForms:sortPluralForms(pluralRules.resolvedOptions().pluralCategories),select:function select(count){return pluralRules.select(count);}};}// Poor man's PluralSelector implementation, using an english fallback.
// We want a lightweight, future-proof and good-enough solution.
// We don't want a perfect and heavy solution.
//
// Docusaurus classic theme has only 2 deeply nested labels requiring complex plural rules
// We don't want to use Intl + PluralRules polyfills + full ICU syntax (react-intl) just for that.
//
// Notes:
// - 2021: 92+% Browsers support Intl.PluralRules, and support will increase in the future
// - NodeJS >= 13 has full ICU support by default
// - In case of "mismatch" between SSR and Browser ICU support, React keeps working!
function useLocalePluralForms(){var _useDocusaurusContext=useDocusaurusContext(),currentLocale=_useDocusaurusContext.i18n.currentLocale;return useMemo(function(){// @ts-expect-error checking Intl.PluralRules in case browser doesn't have it (e.g Safari 12-)
if(Intl.PluralRules){try{return createLocalePluralForms(currentLocale);}catch(e){console.error("Failed to use Intl.PluralRules for locale \""+currentLocale+"\".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n");return EnglishPluralForms;}}else{console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        ");return EnglishPluralForms;}},[currentLocale]);}function selectPluralMessage(pluralMessages,count,localePluralForms){var separator='|';var parts=pluralMessages.split(separator);if(parts.length===1){return parts[0];}else{if(parts.length>localePluralForms.pluralForms.length){console.error("For locale="+localePluralForms.locale+", a maximum of "+localePluralForms.pluralForms.length+" plural forms are expected ("+localePluralForms.pluralForms+"), but the message contains "+parts.length+" plural forms: "+pluralMessages+" ");}var pluralForm=localePluralForms.select(count);var pluralFormIndex=localePluralForms.pluralForms.indexOf(pluralForm);// In case of not enough plural form messages, we take the last one (other) instead of returning undefined
return parts[Math.min(pluralFormIndex,parts.length-1)];}}function usePluralForm(){var localePluralForm=useLocalePluralForms();return{selectMessage:function selectMessage(count,pluralMessages){return selectPluralMessage(pluralMessages,count,localePluralForm);}};}
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(76775);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// This hook is like useLayoutEffect, but without the SSR warning
// It seems hacky but it's used in many React libs (Redux, Formik...)
// Also mentioned here: https://github.com/facebook/react/issues/16956
// It is useful when you need to update a ref as soon as possible after a React render (before useEffect)
var useIsomorphicLayoutEffect=typeof window!=='undefined'?react.useLayoutEffect:react.useEffect;// Permits to transform an unstable callback (like an arrow function provided as props)
// to a "stable" callback that is safe to use in a useEffect dependency array
// Useful to avoid React stale closure problems + avoid useless effect re-executions
//
// Workaround until the React team recommends a good solution, see https://github.com/facebook/react/issues/16956
// This generally works has some potential drawbacks, such as https://github.com/facebook/react/issues/16956#issuecomment-536636418
function useDynamicCallback(callback){var ref=(0,react.useRef)(callback);useIsomorphicLayoutEffect(function(){ref.current=callback;},[callback]);// @ts-expect-error: TODO, not sure how to fix this TS error
return (0,react.useCallback)(function(){return ref.current.apply(ref,arguments);},[]);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePrevious.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function usePrevious(value){var ref=(0,react.useRef)();useIsomorphicLayoutEffect(function(){ref.current=value;});return ref.current;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useLocationChange(onLocationChange){var location=(0,react_router/* useLocation */.TH)();var previousLocation=usePrevious(location);var onLocationChangeDynamic=useDynamicCallback(onLocationChange);(0,react.useEffect)(function(){onLocationChangeDynamic({location:location,previousLocation:previousLocation});},[onLocationChangeDynamic,location,previousLocation]);}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(10412);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var _excluded=["collapsed"],_excluded2=["lazy"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DefaultAnimationEasing='ease-in-out';// This hook just define the state
function useCollapsible(_ref){var initialState=_ref.initialState;var _useState=(0,react.useState)(initialState!==null&&initialState!==void 0?initialState:false),collapsed=_useState[0],setCollapsed=_useState[1];var toggleCollapsed=(0,react.useCallback)(function(){setCollapsed(function(expanded){return!expanded;});},[]);return{collapsed:collapsed,setCollapsed:setCollapsed,toggleCollapsed:toggleCollapsed};}var CollapsedStyles={display:'none',overflow:'hidden',height:'0px'};var ExpandedStyles={display:'block',overflow:'visible',height:'auto'};function applyCollapsedStyle(el,collapsed){var collapsedStyles=collapsed?CollapsedStyles:ExpandedStyles;el.style.display=collapsedStyles.display;el.style.overflow=collapsedStyles.overflow;el.style.height=collapsedStyles.height;}/*
Lex111: Dynamic transition duration is used in Material design, this technique is good for a large number of items.
https://material.io/archive/guidelines/motion/duration-easing.html#duration-easing-dynamic-durations
https://github.com/mui-org/material-ui/blob/e724d98eba018e55e1a684236a2037e24bcf050c/packages/material-ui/src/styles/createTransitions.js#L40-L43
 */function getAutoHeightDuration(height){var constant=height/36;return Math.round((4+15*Math.pow(constant,0.25)+constant/5)*10);}function useCollapseAnimation(_ref2){var collapsibleRef=_ref2.collapsibleRef,collapsed=_ref2.collapsed,animation=_ref2.animation;var mounted=(0,react.useRef)(false);(0,react.useEffect)(function(){var el=collapsibleRef.current;function getTransitionStyles(){var _a,_b;var height=el.scrollHeight;var duration=(_a=animation===null||animation===void 0?void 0:animation.duration)!==null&&_a!==void 0?_a:getAutoHeightDuration(height);var easing=(_b=animation===null||animation===void 0?void 0:animation.easing)!==null&&_b!==void 0?_b:DefaultAnimationEasing;return{transition:"height "+duration+"ms "+easing,height:height+"px"};}function applyTransitionStyles(){var transitionStyles=getTransitionStyles();el.style.transition=transitionStyles.transition;el.style.height=transitionStyles.height;}// On mount, we just apply styles, no animated transition
if(!mounted.current){applyCollapsedStyle(el,collapsed);mounted.current=true;return undefined;}el.style.willChange='height';function startAnimation(){var animationFrame=requestAnimationFrame(function(){// When collapsing
if(collapsed){applyTransitionStyles();requestAnimationFrame(function(){el.style.height=CollapsedStyles.height;el.style.overflow=CollapsedStyles.overflow;});}// When expanding
else{el.style.display='block';requestAnimationFrame(function(){applyTransitionStyles();});}});return function(){return cancelAnimationFrame(animationFrame);};}return startAnimation();},[collapsibleRef,collapsed,animation]);}// Prevent hydration layout shift before anims are handled imperatively with JS
function getSSRStyle(collapsed){if(ExecutionEnvironment["default"].canUseDOM){return undefined;}return collapsed?CollapsedStyles:ExpandedStyles;}function CollapsibleBase(_ref3){var _ref3$as=_ref3.as,As=_ref3$as===void 0?'div':_ref3$as,collapsed=_ref3.collapsed,children=_ref3.children,animation=_ref3.animation,onCollapseTransitionEnd=_ref3.onCollapseTransitionEnd,className=_ref3.className,disableSSRStyle=_ref3.disableSSRStyle;// any because TS is a pain for HTML element refs, see https://twitter.com/sebastienlorber/status/1412784677795110914
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var collapsibleRef=(0,react.useRef)(null);useCollapseAnimation({collapsibleRef:collapsibleRef,collapsed:collapsed,animation:animation});return/*#__PURE__*/react.createElement(As// @ts-expect-error: the "too complicated type" is produced from "CollapsibleElementType" being a huge union
,{// @ts-expect-error: the "too complicated type" is produced from "CollapsibleElementType" being a huge union
ref:collapsibleRef,style:disableSSRStyle?undefined:getSSRStyle(collapsed),onTransitionEnd:function onTransitionEnd(e){if(e.propertyName!=='height'){return;}applyCollapsedStyle(collapsibleRef.current,collapsed);onCollapseTransitionEnd===null||onCollapseTransitionEnd===void 0?void 0:onCollapseTransitionEnd(collapsed);},className:className},children);}function CollapsibleLazy(_ref4){var collapsed=_ref4.collapsed,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref4,_excluded);var _useState2=(0,react.useState)(!collapsed),mounted=_useState2[0],setMounted=_useState2[1];(0,react.useLayoutEffect)(function(){if(!collapsed){setMounted(true);}},[collapsed]);// lazyCollapsed updated in effect so that the first expansion transition can work
var _useState3=(0,react.useState)(collapsed),lazyCollapsed=_useState3[0],setLazyCollapsed=_useState3[1];(0,react.useLayoutEffect)(function(){if(mounted){setLazyCollapsed(collapsed);}},[mounted,collapsed]);return mounted?/*#__PURE__*/react.createElement(CollapsibleBase,Object.assign({},props,{collapsed:lazyCollapsed})):null;}function Collapsible(_ref5){var lazy=_ref5.lazy,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref5,_excluded2);var Comp=lazy?CollapsibleLazy:CollapsibleBase;return/*#__PURE__*/react.createElement(Comp,Object.assign({},props));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(72389);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"details":"details_Q743","isBrowser":"isBrowser_rWTL","collapsibleContent":"collapsibleContent_K5uX"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
var Details_excluded=["summary","children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}var Details=function Details(_ref){var _clsx;var summary=_ref.summary,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,Details_excluded);var isBrowser=(0,useIsBrowser/* default */.Z)();var detailsRef=(0,react.useRef)(null);var _useCollapsible=useCollapsible({initialState:!props.open}),collapsed=_useCollapsible.collapsed,setCollapsed=_useCollapsible.setCollapsed;// We use a separate prop because it must be set only after animation completes
// Otherwise close anim won't work
var _useState=(0,react.useState)(props.open),open=_useState[0],setOpen=_useState[1];return/*#__PURE__*/react.createElement("details",Object.assign({},props,{ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,clsx_m/* default */.Z)(styles_module.details,(_clsx={},_clsx[styles_module.isBrowser]=isBrowser,_clsx),props.className),onMouseDown:function onMouseDown(e){var target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:function onClick(e){e.stopPropagation();// For isolation of multiple nested details/summary
var target=e.target;var shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// setOpen(false); // Don't do this, it breaks close animation!
}}}),summary,/*#__PURE__*/react.createElement(Collapsible,{lazy:false,collapsed:collapsed,disableSSRStyle// Allows component to work fine even with JS disabled!
:true,onCollapseTransitionEnd:function onCollapseTransitionEnd(newCollapsed){setCollapsed(newCollapsed);setOpen(!newCollapsed);}},/*#__PURE__*/react.createElement("div",{className:styles_module.collapsibleContent},children)));};/* harmony default export */ var components_Details = (Details);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/mobileSecondaryMenu.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useContextValue(){return (0,react.useState)(null);}var Context=/*#__PURE__*/(0,react.createContext)(null);function MobileSecondaryMenuProvider(_ref){var children=_ref.children;return/*#__PURE__*/react.createElement(Context.Provider,{value:useContextValue()},children);}function useMobileSecondaryMenuContext(){var value=(0,react.useContext)(Context);if(value===null){throw new Error('MobileSecondaryMenuProvider was not used correctly, context value is null');}return value;}function useMobileSecondaryMenuRenderer(){var _useMobileSecondaryMe=useMobileSecondaryMenuContext(),state=_useMobileSecondaryMe[0];if(state){var Comp=state.component;return function render(extraProps){return/*#__PURE__*/React.createElement(Comp,Object.assign({},state.props,extraProps));};}return function(){return undefined;};}function useShallowMemoizedObject(obj){return (0,react.useMemo)(function(){return obj;},// Is this safe?
// eslint-disable-next-line react-hooks/exhaustive-deps
[].concat(Object.keys(obj),Object.values(obj)));}// Fill the secondary menu placeholder with some real content
function MobileSecondaryMenuFiller(_ref2){var component=_ref2.component,props=_ref2.props;var _useMobileSecondaryMe2=useMobileSecondaryMenuContext(),setState=_useMobileSecondaryMe2[1];// To avoid useless context re-renders, props are memoized shallowly
var memoizedProps=useShallowMemoizedObject(props);(0,react.useEffect)(function(){// @ts-expect-error: context is not 100% typesafe but it's ok
setState({component:component,props:memoizedProps});},[setState,component,memoizedProps]);(0,react.useEffect)(function(){return function(){return setState(null);};},[setState]);return null;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsPreferredVersion/DocsPreferredVersionStorage.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var storageKey=function storageKey(pluginId){return"docs-preferred-version-"+pluginId;};var DocsPreferredVersionStorage={save:function save(pluginId,persistence,versionName){createStorageSlot(storageKey(pluginId),{persistence:persistence}).set(versionName);},read:function read(pluginId,persistence){return createStorageSlot(storageKey(pluginId),{persistence:persistence}).get();},clear:function clear(pluginId,persistence){createStorageSlot(storageKey(pluginId),{persistence:persistence}).del();}};/* harmony default export */ var docsPreferredVersion_DocsPreferredVersionStorage = (DocsPreferredVersionStorage);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsPreferredVersion/DocsPreferredVersionProvider.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Initial state is always null as we can't read localstorage from node SSR
function getInitialState(pluginIds){var initialState={};pluginIds.forEach(function(pluginId){initialState[pluginId]={preferredVersionName:null};});return initialState;}// Read storage for all docs plugins
// Assign to each doc plugin a preferred version (if found)
function readStorageState(_ref){var pluginIds=_ref.pluginIds,versionPersistence=_ref.versionPersistence,allDocsData=_ref.allDocsData;// The storage value we read might be stale,
// and belong to a version that does not exist in the site anymore
// In such case, we remove the storage value to avoid downstream errors
function restorePluginState(pluginId){var preferredVersionNameUnsafe=docsPreferredVersion_DocsPreferredVersionStorage.read(pluginId,versionPersistence);var pluginData=allDocsData[pluginId];var versionExists=pluginData.versions.some(function(version){return version.name===preferredVersionNameUnsafe;});if(versionExists){return{preferredVersionName:preferredVersionNameUnsafe};}else{docsPreferredVersion_DocsPreferredVersionStorage.clear(pluginId,versionPersistence);return{preferredVersionName:null};}}var initialState={};pluginIds.forEach(function(pluginId){initialState[pluginId]=restorePluginState(pluginId);});return initialState;}function useVersionPersistence(){return useThemeConfig().docs.versionPersistence;}// Value that  will be accessible through context: [state,api]
function DocsPreferredVersionProvider_useContextValue(){var allDocsData=(0,useDocs/* useAllDocsData */._r)();var versionPersistence=useVersionPersistence();var pluginIds=(0,react.useMemo)(function(){return Object.keys(allDocsData);},[allDocsData]);// Initial state is empty, as  we can't read browser storage in node/SSR
var _useState=(0,react.useState)(function(){return getInitialState(pluginIds);}),state=_useState[0],setState=_useState[1];// On mount, we set the state read from browser storage
(0,react.useEffect)(function(){setState(readStorageState({allDocsData:allDocsData,versionPersistence:versionPersistence,pluginIds:pluginIds}));},[allDocsData,versionPersistence,pluginIds]);// The API that we expose to consumer hooks (memo for constant object)
var api=(0,react.useMemo)(function(){function savePreferredVersion(pluginId,versionName){docsPreferredVersion_DocsPreferredVersionStorage.save(pluginId,versionPersistence,versionName);setState(function(s){var _Object$assign;return Object.assign({},s,(_Object$assign={},_Object$assign[pluginId]={preferredVersionName:versionName},_Object$assign));});}return{savePreferredVersion:savePreferredVersion};},[versionPersistence]);return[state,api];}var DocsPreferredVersionProvider_Context=/*#__PURE__*/(0,react.createContext)(null);function DocsPreferredVersionContextProvider(_ref2){var children=_ref2.children;if(isDocsPluginEnabled){return/*#__PURE__*/react.createElement(DocsPreferredVersionContextProviderUnsafe,null,children);}else{return/*#__PURE__*/react.createElement(react.Fragment,null,children);}}function DocsPreferredVersionContextProviderUnsafe(_ref3){var children=_ref3.children;var contextValue=DocsPreferredVersionProvider_useContextValue();return/*#__PURE__*/react.createElement(DocsPreferredVersionProvider_Context.Provider,{value:contextValue},children);}function DocsPreferredVersionProvider_useDocsPreferredVersionContext(){var value=(0,react.useContext)(DocsPreferredVersionProvider_Context);if(!value){throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');}return value;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/constants.js
var constants = __webpack_require__(29935);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsPreferredVersion/useDocsPreferredVersion.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Note, the preferredVersion attribute will always be null before mount
function useDocsPreferredVersion(pluginId){if(pluginId===void 0){pluginId=constants/* DEFAULT_PLUGIN_ID */.m;}var docsData=(0,useDocs/* useDocsData */.zh)(pluginId);var _useDocsPreferredVers=DocsPreferredVersionProvider_useDocsPreferredVersionContext(),state=_useDocsPreferredVers[0],api=_useDocsPreferredVers[1];var preferredVersionName=state[pluginId].preferredVersionName;var preferredVersion=preferredVersionName?docsData.versions.find(function(version){return version.name===preferredVersionName;}):null;var savePreferredVersionName=(0,react.useCallback)(function(versionName){api.savePreferredVersion(pluginId,versionName);},[api,pluginId]);return{preferredVersion:preferredVersion,savePreferredVersionName:savePreferredVersionName};}function useDocsPreferredVersionByPluginId(){var allDocsData=useAllDocsData();var _useDocsPreferredVers2=useDocsPreferredVersionContext(),state=_useDocsPreferredVers2[0];function getPluginIdPreferredVersion(pluginId){var docsData=allDocsData[pluginId];var preferredVersionName=state[pluginId].preferredVersionName;return preferredVersionName?docsData.versions.find(function(version){return version.name===preferredVersionName;}):null;}var pluginIds=Object.keys(allDocsData);var result={};pluginIds.forEach(function(pluginId){result[pluginId]=getPluginIdPreferredVersion(pluginId);});return result;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // These class names are used to style page layouts in Docusaurus
// Those are meant to be targeted by user-provided custom CSS selectors
// /!\ Please do not modify the classnames! This is a breaking change, and annoying for users!
var ThemeClassNames={page:{blogListPage:'blog-list-page',blogPostPage:'blog-post-page',blogTagsListPage:'blog-tags-list-page',blogTagPostListPage:'blog-tags-post-list-page',docsDocPage:'docs-doc-page',docsTagsListPage:'docs-tags-list-page',docsTagDocListPage:'docs-tags-doc-list-page',mdxPage:'mdx-page'},wrapper:{main:'main-wrapper',blogPages:'blog-wrapper',docsPages:'docs-wrapper',mdxPages:'mdx-wrapper'},// /!\ Please keep the naming convention consistent!
// Something like: "theme-{blog,doc,version,page}?-<suffix>"
common:{editThisPage:'theme-edit-this-page',lastUpdated:'theme-last-updated',backToTopButton:'theme-back-to-top-button'},layout:{// TODO add other stable classNames here
},docs:{docVersionBanner:'theme-doc-version-banner',docVersionBadge:'theme-doc-version-badge',docMarkdown:'theme-doc-markdown',docTocMobile:'theme-doc-toc-mobile',docTocDesktop:'theme-doc-toc-desktop',docFooter:'theme-doc-footer',docFooterTagsRow:'theme-doc-footer-tags-row',docFooterEditMetaRow:'theme-doc-footer-edit-meta-row',docSidebarMenu:'theme-doc-sidebar-menu',docSidebarItemCategory:'theme-doc-sidebar-item-category',docSidebarItemLink:'theme-doc-sidebar-item-link',docSidebarItemCategoryLevel:function docSidebarItemCategoryLevel(level){return"theme-doc-sidebar-item-category-level-"+level;},docSidebarItemLinkLevel:function docSidebarItemLinkLevel(level){return"theme-doc-sidebar-item-link-level-"+level;}// TODO add other stable classNames here
},blog:{// TODO add other stable classNames here
}};
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/announcementBarUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AnnouncementBarDismissStorageKey='docusaurus.announcement.dismiss';var AnnouncementBarIdStorageKey='docusaurus.announcement.id';var AnnouncementBarDismissStorage=createStorageSlot(AnnouncementBarDismissStorageKey);var IdStorage=createStorageSlot(AnnouncementBarIdStorageKey);var isDismissedInStorage=function isDismissedInStorage(){return AnnouncementBarDismissStorage.get()==='true';};var setDismissedInStorage=function setDismissedInStorage(bool){return AnnouncementBarDismissStorage.set(String(bool));};var useAnnouncementBarContextValue=function useAnnouncementBarContextValue(){var _useThemeConfig=useThemeConfig(),announcementBar=_useThemeConfig.announcementBar;var isBrowser=(0,useIsBrowser/* default */.Z)();var _useState=(0,react.useState)(function(){return isBrowser?// On client navigation: init with localstorage value
isDismissedInStorage():// On server/hydration: always visible to prevent layout shifts (will be hidden with css if needed)
false;}),isClosed=_useState[0],setClosed=_useState[1];// Update state after hydration
(0,react.useEffect)(function(){setClosed(isDismissedInStorage());},[]);var handleClose=(0,react.useCallback)(function(){setDismissedInStorage(true);setClosed(true);},[]);(0,react.useEffect)(function(){if(!announcementBar){return;}var id=announcementBar.id;var viewedId=IdStorage.get();// retrocompatibility due to spelling mistake of default id
// see https://github.com/facebook/docusaurus/issues/3338
if(viewedId==='annoucement-bar'){viewedId='announcement-bar';}var isNewAnnouncement=id!==viewedId;IdStorage.set(id);if(isNewAnnouncement){setDismissedInStorage(false);}if(isNewAnnouncement||!isDismissedInStorage()){setClosed(false);}},[announcementBar]);return (0,react.useMemo)(function(){return{isActive:!!announcementBar&&!isClosed,close:handleClose};},[announcementBar,isClosed,handleClose]);};var AnnouncementBarContext=/*#__PURE__*/(0,react.createContext)(null);var AnnouncementBarProvider=function AnnouncementBarProvider(_ref){var children=_ref.children;var value=useAnnouncementBarContextValue();return/*#__PURE__*/react.createElement(AnnouncementBarContext.Provider,{value:value},children);};var useAnnouncementBar=function useAnnouncementBar(){var api=(0,react.useContext)(AnnouncementBarContext);if(!api){throw new Error('useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree');}return api;};
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocalPathname.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Get the pathname of current route, without the optional site baseUrl
// - /docs/myDoc => /docs/myDoc
// - /baseUrl/docs/myDoc => /docs/myDoc
function useLocalPathname(){var _useDocusaurusContext=useDocusaurusContext(),baseUrl=_useDocusaurusContext.siteConfig.baseUrl;var _useLocation=useLocation(),pathname=_useLocation.pathname;return pathname.replace(baseUrl,'/');}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tagsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var translateTagsPageTitle=function translateTagsPageTitle(){return translate({id:'theme.tags.tagsPageTitle',message:'Tags',description:'The title of the tag list page'});};function getTagLetter(tag){return tag[0].toUpperCase();}function listTagsByLetters(tags){// Group by letters
var groups={};Object.values(tags).forEach(function(tag){var _a;var letter=getTagLetter(tag.name);groups[letter]=(_a=groups[letter])!==null&&_a!==void 0?_a:[];groups[letter].push(tag);});return Object.entries(groups)// Sort letters
.sort(function(_ref,_ref2){var letter1=_ref[0];var letter2=_ref2[0];return letter1.localeCompare(letter2);}).map(function(_ref3){var letter=_ref3[0],letterTags=_ref3[1];// Sort tags inside a letter
var sortedTags=letterTags.sort(function(tag1,tag2){return tag1.name.localeCompare(tag2.name);});return{letter:letter,tags:sortedTags};});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//*
Permits to register a handler that will be called on history actions (pop,push,replace)
If the handler returns false, the navigation transition will be blocked/cancelled
 */function useHistoryActionHandler(handler){var _useHistory=useHistory(),block=_useHistory.block;// Avoid stale closure issues without triggering useless re-renders
var lastHandlerRef=useRef(handler);useEffect(function(){lastHandlerRef.current=handler;},[handler]);useEffect(function(){// See https://github.com/remix-run/history/blob/main/docs/blocking-transitions.md
return block(function(location,action){return lastHandlerRef.current(location,action);});},[block,lastHandlerRef]);}/*
Permits to register a handler that will be called on history pop navigation (backward/forward)
If the handler returns false, the backward/forward transition will be blocked

Unfortunately there's no good way to detect the "direction" (backward/forward) of the POP event.
 */function useHistoryPopHandler(handler){useHistoryActionHandler(function(location,action){if(action==='POP'){// Eventually block navigation if handler returns false
return handler(location,action);}// Don't block other navigation actions
return undefined;});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//*
TODO make the hardcoded theme-classic classnames configurable
(or add them to ThemeClassNames?)
 */ // If the anchor has no height and is just a "marker" in the dom; we'll use the parent (normally the link text) rect boundaries instead
function getVisibleBoundingClientRect(element){var rect=element.getBoundingClientRect();var hasNoHeight=rect.top===rect.bottom;if(hasNoHeight){return getVisibleBoundingClientRect(element.parentNode);}return rect;}// Considering we divide viewport into 2 zones of each 50vh
// This returns true if an element is in the first zone (ie, appear in viewport, near the top)
function isInViewportTopHalf(boundingRect){return boundingRect.top>0&&boundingRect.bottom<window.innerHeight/2;}function getAnchors(_ref){var minHeadingLevel=_ref.minHeadingLevel,maxHeadingLevel=_ref.maxHeadingLevel;var selectors=[];for(var i=minHeadingLevel;i<=maxHeadingLevel;i+=1){selectors.push("h"+i+".anchor");}return Array.from(document.querySelectorAll(selectors.join()));}function getActiveAnchor(anchors,_ref2){var anchorTopOffset=_ref2.anchorTopOffset;var _a;// Naming is hard
// The "nextVisibleAnchor" is the first anchor that appear under the viewport top boundary
// Note: it does not mean this anchor is visible yet, but if user continues scrolling down, it will be the first to become visible
var nextVisibleAnchor=anchors.find(function(anchor){var boundingRect=getVisibleBoundingClientRect(anchor);return boundingRect.top>=anchorTopOffset;});if(nextVisibleAnchor){var boundingRect=getVisibleBoundingClientRect(nextVisibleAnchor);// If anchor is in the top half of the viewport: it is the one we consider "active"
// (unless it's too close to the top and and soon to be scrolled outside viewport)
if(isInViewportTopHalf(boundingRect)){return nextVisibleAnchor;}// If anchor is in the bottom half of the viewport, or under the viewport, we consider the active anchor is the previous one
// This is because the main text appearing in the user screen mostly belong to the previous anchor
else{// Returns null for the first anchor, see https://github.com/facebook/docusaurus/issues/5318
return(_a=anchors[anchors.indexOf(nextVisibleAnchor)-1])!==null&&_a!==void 0?_a:null;}}// no anchor under viewport top? (ie we are at the bottom of the page)
// => highlight the last anchor found
else{return anchors[anchors.length-1];}}function getLinkAnchorValue(link){return decodeURIComponent(link.href.substring(link.href.indexOf('#')+1));}function getLinks(linkClassName){return Array.from(document.getElementsByClassName(linkClassName));}function getNavbarHeight(){// Not ideal to obtain actual height this way
// Using TS ! (not ?) because otherwise a bad selector would be un-noticed
return document.querySelector('.navbar').clientHeight;}function useAnchorTopOffsetRef(){var anchorTopOffsetRef=(0,react.useRef)(0);var _useThemeConfig=useThemeConfig(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;(0,react.useEffect)(function(){anchorTopOffsetRef.current=hideOnScroll?0:getNavbarHeight();},[hideOnScroll]);return anchorTopOffsetRef;}function useTOCHighlight(config){var lastActiveLinkRef=(0,react.useRef)(undefined);var anchorTopOffsetRef=useAnchorTopOffsetRef();(0,react.useEffect)(function(){if(!config){// no-op, highlighting is disabled
return function(){};}var linkClassName=config.linkClassName,linkActiveClassName=config.linkActiveClassName,minHeadingLevel=config.minHeadingLevel,maxHeadingLevel=config.maxHeadingLevel;function updateLinkActiveClass(link,active){var _a;if(active){if(lastActiveLinkRef.current&&lastActiveLinkRef.current!==link){(_a=lastActiveLinkRef.current)===null||_a===void 0?void 0:_a.classList.remove(linkActiveClassName);}link.classList.add(linkActiveClassName);lastActiveLinkRef.current=link;}else{link.classList.remove(linkActiveClassName);}}function updateActiveLink(){var links=getLinks(linkClassName);var anchors=getAnchors({minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});var activeAnchor=getActiveAnchor(anchors,{anchorTopOffset:anchorTopOffsetRef.current});var activeLink=links.find(function(link){return activeAnchor&&activeAnchor.id===getLinkAnchorValue(link);});links.forEach(function(link){updateLinkActiveClass(link,link===activeLink);});}document.addEventListener('scroll',updateActiveLink);document.addEventListener('resize',updateActiveLink);updateActiveLink();return function(){document.removeEventListener('scroll',updateActiveLink);document.removeEventListener('resize',updateActiveLink);};},[config,anchorTopOffsetRef]);}/* harmony default export */ var utils_useTOCHighlight = (useTOCHighlight);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function filterTOC(_ref){var toc=_ref.toc,minHeadingLevel=_ref.minHeadingLevel,maxHeadingLevel=_ref.maxHeadingLevel;function isValid(item){return item.level>=minHeadingLevel&&item.level<=maxHeadingLevel;}return toc.flatMap(function(item){var filteredChildren=filterTOC({toc:item.children,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});if(isValid(item)){return[Object.assign({},item,{children:filteredChildren})];}else{return filteredChildren;}});}// Memoize potentially expensive filtering logic
function useTOCFilter(_ref2){var toc=_ref2.toc,minHeadingLevel=_ref2.minHeadingLevel,maxHeadingLevel=_ref2.maxHeadingLevel;return (0,react.useMemo)(function(){return filterTOC({toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});},[toc,minHeadingLevel,maxHeadingLevel]);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useScrollControllerContextValue(){var scrollEventsEnabledRef=(0,react.useRef)(true);return (0,react.useMemo)(function(){return{scrollEventsEnabledRef:scrollEventsEnabledRef,enableScrollEvents:function enableScrollEvents(){scrollEventsEnabledRef.current=true;},disableScrollEvents:function disableScrollEvents(){scrollEventsEnabledRef.current=false;}};},[]);}var ScrollMonitorContext=/*#__PURE__*/(0,react.createContext)(undefined);function ScrollControllerProvider(_ref){var children=_ref.children;return/*#__PURE__*/react.createElement(ScrollMonitorContext.Provider,{value:useScrollControllerContextValue()},children);}function useScrollController(){var context=(0,react.useContext)(ScrollMonitorContext);if(context==null){throw new Error('"useScrollController" is used but no context provider was found in the React tree.');}return context;}var getScrollPosition=function getScrollPosition(){return ExecutionEnvironment["default"].canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null;};function useScrollPosition(effect,deps){if(deps===void 0){deps=[];}var _useScrollController=useScrollController(),scrollEventsEnabledRef=_useScrollController.scrollEventsEnabledRef;var lastPositionRef=(0,react.useRef)(getScrollPosition());var dynamicEffect=useDynamicCallback(effect);(0,react.useEffect)(function(){var handleScroll=function handleScroll(){if(!scrollEventsEnabledRef.current){return;}var currentPosition=getScrollPosition();if(dynamicEffect){dynamicEffect(currentPosition,lastPositionRef.current);}lastPositionRef.current=currentPosition;};var opts={passive:true};handleScroll();window.addEventListener('scroll',handleScroll,opts);return function(){return window.removeEventListener('scroll',handleScroll,opts);};},[dynamicEffect,scrollEventsEnabledRef].concat(deps));}function useScrollPositionSaver(){var lastElementRef=useRef({elem:null,top:0});var save=useCallback(function(elem){lastElementRef.current={elem:elem,top:elem.getBoundingClientRect().top};},[]);var restore=useCallback(function(){var _lastElementRef$curre=lastElementRef.current,elem=_lastElementRef$curre.elem,top=_lastElementRef$curre.top;if(!elem){return{restored:false};}var newTop=elem.getBoundingClientRect().top;var heightDiff=newTop-top;if(heightDiff){window.scrollBy({left:0,top:heightDiff});}lastElementRef.current={elem:null,top:0};return{restored:heightDiff!==0};},[]);return useMemo(function(){return{save:save,restore:restore};},[restore,save]);}/**
 * This hook permits to "block" the scroll position of a dom element
 * The idea is that we should be able to update DOM content above this element
 * but the screen position of this element should not change
 *
 * Feature motivated by the Tabs groups:
 * clicking on a tab may affect tabs of the same group upper in the tree
 * Yet to avoid a bad UX, the clicked tab must remain under the user mouse!
 * See GIF here: https://github.com/facebook/docusaurus/pull/5618
 */function useScrollPositionBlocker(){var scrollController=useScrollController();var scrollPositionSaver=useScrollPositionSaver();var nextLayoutEffectCallbackRef=useRef(undefined);var blockElementScrollPositionUntilNextRender=useCallback(function(el){scrollPositionSaver.save(el);scrollController.disableScrollEvents();nextLayoutEffectCallbackRef.current=function(){var _scrollPositionSaver$=scrollPositionSaver.restore(),restored=_scrollPositionSaver$.restored;nextLayoutEffectCallbackRef.current=undefined;// Restoring the former scroll position will trigger a scroll event
// We need to wait for next scroll event to happen
// before enabling again the scrollController events
if(restored){var handleScrollRestoreEvent=function handleScrollRestoreEvent(){scrollController.enableScrollEvents();window.removeEventListener('scroll',handleScrollRestoreEvent);};window.addEventListener('scroll',handleScrollRestoreEvent);}else{scrollController.enableScrollEvents();}};},[scrollController,scrollPositionSaver]);useLayoutEffect(function(){var _a;(_a=nextLayoutEffectCallbackRef.current)===null||_a===void 0?void 0:_a.call(nextLayoutEffectCallbackRef);});return{blockElementScrollPositionUntilNextRender:blockElementScrollPositionUntilNextRender};}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/***/ })

}]);