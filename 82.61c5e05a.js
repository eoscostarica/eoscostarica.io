(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(344);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){var metadata=props.metadata;return/*#__PURE__*/react_default.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__item"},metadata.previous&&/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],{className:"pagination-nav__link",to:metadata.previous.permalink},/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__label"},"\xAB ",metadata.previous.title))),/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},metadata.next&&/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],{className:"pagination-nav__link",to:metadata.next.permalink},/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__label"},metadata.next.title," \xBB"))));}/* harmony default export */ var theme_DocPaginator = (DocPaginator);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useDocs.js
var useDocs = __webpack_require__(171);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionSuggestions/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var getVersionMainDoc=function getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});};function DocVersionSuggestions(){var _useDocusaurusContext=Object(useDocusaurusContext["default"])(),siteTitle=_useDocusaurusContext.siteConfig.title;var _useActivePlugin=Object(useDocs["useActivePlugin"])({failfast:true}),pluginId=_useActivePlugin.pluginId;var _useDocsPreferredVers=Object(lib["useDocsPreferredVersion"])(pluginId),savePreferredVersionName=_useDocsPreferredVers.savePreferredVersionName;var activeVersion=Object(useDocs["useActiveVersion"])(pluginId);var _useDocVersionSuggest=Object(useDocs["useDocVersionSuggestions"])(pluginId),latestDocSuggestion=_useDocVersionSuggest.latestDocSuggestion,latestVersionSuggestion=_useDocVersionSuggest.latestVersionSuggestion;// No suggestion to be made
if(!latestVersionSuggestion){return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null);}// try to link to same doc in latest version (not always possible)
// fallback to main doc of latest version
var latestVersionSuggestedDoc=latestDocSuggestion!==null&&latestDocSuggestion!==void 0?latestDocSuggestion:getVersionMainDoc(latestVersionSuggestion);return/*#__PURE__*/react_default.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},// TODO need refactoring
activeVersion.name==='current'?/*#__PURE__*/react_default.a.createElement("div",null,"This is unreleased documentation for ",siteTitle,' ',/*#__PURE__*/react_default.a.createElement("strong",null,activeVersion.label)," version."):/*#__PURE__*/react_default.a.createElement("div",null,"This is documentation for ",siteTitle,' ',/*#__PURE__*/react_default.a.createElement("strong",null,activeVersion.label),", which is no longer actively maintained."),/*#__PURE__*/react_default.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the",' ',/*#__PURE__*/react_default.a.createElement("strong",null,/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],{to:latestVersionSuggestedDoc.path,onClick:function onClick(){return savePreferredVersionName(latestVersionSuggestion.name);}},"latest version")),' ',"(",latestVersionSuggestion.label,")."));}/* harmony default export */ var theme_DocVersionSuggestions = (DocVersionSuggestions);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(730);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/index.js
var IconEdit = __webpack_require__(513);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/styles.module.css
var styles_module = __webpack_require__(82);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItem(props){var _clsx;var _useDocusaurusContext=Object(useDocusaurusContext["default"])(),siteConfig=_useDocusaurusContext.siteConfig;var siteUrl=siteConfig.url;var DocContent=props.content;var metadata=DocContent.metadata,_DocContent$frontMatt=DocContent.frontMatter,metaImage=_DocContent$frontMatt.image,keywords=_DocContent$frontMatt.keywords,hideTitle=_DocContent$frontMatt.hide_title,hideTableOfContents=_DocContent$frontMatt.hide_table_of_contents;var description=metadata.description,title=metadata.title,permalink=metadata.permalink,editUrl=metadata.editUrl,lastUpdatedAt=metadata.lastUpdatedAt,lastUpdatedBy=metadata.lastUpdatedBy;var _useActivePlugin=Object(useDocs["useActivePlugin"])({failfast:true}),pluginId=_useActivePlugin.pluginId;var versions=Object(useDocs["useVersions"])(pluginId);var version=Object(useDocs["useActiveVersion"])(pluginId);// If site is not versioned or only one version is included
// we don't show the version badge
// See https://github.com/facebook/docusaurus/issues/3362
var showVersionBadge=versions.length>1;var metaTitle=Object(lib["useTitleFormatter"])(title);var metaImageUrl=Object(useBaseUrl["a" /* default */])(metaImage,{absolute:true});return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(Head["a" /* default */],null,/*#__PURE__*/react_default.a.createElement("title",null,metaTitle),/*#__PURE__*/react_default.a.createElement("meta",{property:"og:title",content:metaTitle}),description&&/*#__PURE__*/react_default.a.createElement("meta",{name:"description",content:description}),description&&/*#__PURE__*/react_default.a.createElement("meta",{property:"og:description",content:description}),keywords&&keywords.length&&/*#__PURE__*/react_default.a.createElement("meta",{name:"keywords",content:keywords.join(',')}),metaImage&&/*#__PURE__*/react_default.a.createElement("meta",{property:"og:image",content:metaImageUrl}),metaImage&&/*#__PURE__*/react_default.a.createElement("meta",{name:"twitter:image",content:metaImageUrl}),metaImage&&/*#__PURE__*/react_default.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+title}),permalink&&/*#__PURE__*/react_default.a.createElement("meta",{property:"og:url",content:siteUrl+permalink}),permalink&&/*#__PURE__*/react_default.a.createElement("link",{rel:"canonical",href:siteUrl+permalink})),/*#__PURE__*/react_default.a.createElement("div",{className:"row"},/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])('col',(_clsx={},_clsx[styles_module_default.a.docItemCol]=!hideTableOfContents,_clsx))},/*#__PURE__*/react_default.a.createElement(theme_DocVersionSuggestions,null),/*#__PURE__*/react_default.a.createElement("div",{className:styles_module_default.a.docItemContainer},/*#__PURE__*/react_default.a.createElement("article",null,showVersionBadge&&/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement("span",{className:"badge badge--secondary"},"Version: ",version.label)),!hideTitle&&/*#__PURE__*/react_default.a.createElement("header",null,/*#__PURE__*/react_default.a.createElement("h1",{className:styles_module_default.a.docTitle},title)),/*#__PURE__*/react_default.a.createElement("div",{className:"markdown"},/*#__PURE__*/react_default.a.createElement(DocContent,null))),(editUrl||lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/react_default.a.createElement("div",{className:"margin-vert--xl"},/*#__PURE__*/react_default.a.createElement("div",{className:"row"},/*#__PURE__*/react_default.a.createElement("div",{className:"col"},editUrl&&/*#__PURE__*/react_default.a.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener"},/*#__PURE__*/react_default.a.createElement(IconEdit["a" /* default */],null),"Edit this page")),(lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/react_default.a.createElement("div",{className:"col text--right"},/*#__PURE__*/react_default.a.createElement("em",null,/*#__PURE__*/react_default.a.createElement("small",null,"Last updated",' ',lastUpdatedAt&&/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,"on",' ',/*#__PURE__*/react_default.a.createElement("time",{dateTime:new Date(lastUpdatedAt*1000).toISOString(),className:styles_module_default.a.docLastUpdatedAt},new Date(lastUpdatedAt*1000).toLocaleDateString()),lastUpdatedBy&&' '),lastUpdatedBy&&/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,"by ",/*#__PURE__*/react_default.a.createElement("strong",null,lastUpdatedBy)), false&&/*#__PURE__*/false))))),/*#__PURE__*/react_default.a.createElement("div",{className:"margin-vert--lg"},/*#__PURE__*/react_default.a.createElement(theme_DocPaginator,{metadata:metadata})))),!hideTableOfContents&&DocContent.toc&&/*#__PURE__*/react_default.a.createElement("div",{className:"col col--3"},/*#__PURE__*/react_default.a.createElement(TOC["a" /* default */],{toc:DocContent.toc}))));}/* harmony default export */ var theme_DocItem = __webpack_exports__["default"] = (DocItem);

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useBaseUrlUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useBaseUrl; });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(190);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function addBaseUrl(siteUrl,baseUrl,url,_temp){var _ref=_temp===void 0?{}:_temp,_ref$forcePrependBase=_ref.forcePrependBaseUrl,forcePrependBaseUrl=_ref$forcePrependBase===void 0?false:_ref$forcePrependBase,_ref$absolute=_ref.absolute,absolute=_ref$absolute===void 0?false:_ref$absolute;if(!url){return url;}// it never makes sense to add a base url to a local anchor url
if(url.startsWith('#')){return url;}// it never makes sense to add a base url to an url with a protocol
if(Object(_isInternalUrl__WEBPACK_IMPORTED_MODULE_1__[/* hasProtocol */ "b"])(url)){return url;}if(forcePrependBaseUrl){return baseUrl+url;}// We should avoid adding the baseurl twice if it's already there
var shouldAddBaseUrl=!url.startsWith(baseUrl);var basePath=shouldAddBaseUrl?baseUrl+url.replace(/^\//,''):url;return absolute?siteUrl+basePath:basePath;}function useBaseUrlUtils(){var _useDocusaurusContext=Object(_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__["default"])(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig;_useDocusaurusContext2=_useDocusaurusContext2===void 0?{}:_useDocusaurusContext2;var _useDocusaurusContext3=_useDocusaurusContext2.baseUrl,baseUrl=_useDocusaurusContext3===void 0?'/':_useDocusaurusContext3,siteUrl=_useDocusaurusContext2.url;return{withBaseUrl:function withBaseUrl(url,options){return addBaseUrl(siteUrl,baseUrl,url,options);}};}function useBaseUrl(url,options){if(options===void 0){options={};}var _useBaseUrlUtils=useBaseUrlUtils(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;return withBaseUrl(url,options);}

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});var useThemeConfig_1=__webpack_require__(184);Object.defineProperty(exports,"useThemeConfig",{enumerable:true,get:function get(){return useThemeConfig_1.useThemeConfig;}});var searchUtils_1=__webpack_require__(206);Object.defineProperty(exports,"docVersionSearchTag",{enumerable:true,get:function get(){return searchUtils_1.docVersionSearchTag;}});Object.defineProperty(exports,"DEFAULT_SEARCH_TAG",{enumerable:true,get:function get(){return searchUtils_1.DEFAULT_SEARCH_TAG;}});var docsUtils_1=__webpack_require__(185);Object.defineProperty(exports,"isDocsPluginEnabled",{enumerable:true,get:function get(){return docsUtils_1.isDocsPluginEnabled;}});var pathUtils_1=__webpack_require__(210);Object.defineProperty(exports,"isSamePath",{enumerable:true,get:function get(){return pathUtils_1.isSamePath;}});var generalUtils_1=__webpack_require__(211);Object.defineProperty(exports,"useTitleFormatter",{enumerable:true,get:function get(){return generalUtils_1.useTitleFormatter;}});var useDocsPreferredVersion_1=__webpack_require__(212);Object.defineProperty(exports,"useDocsPreferredVersion",{enumerable:true,get:function get(){return useDocsPreferredVersion_1.useDocsPreferredVersion;}});Object.defineProperty(exports,"useDocsPreferredVersionByPluginId",{enumerable:true,get:function get(){return useDocsPreferredVersion_1.useDocsPreferredVersionByPluginId;}});var DocsPreferredVersionProvider_1=__webpack_require__(186);Object.defineProperty(exports,"DocsPreferredVersionContextProvider",{enumerable:true,get:function get(){return DocsPreferredVersionProvider_1.DocsPreferredVersionContextProvider;}});

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // See https://github.com/facebook/docusaurus/issues/3360
// TODO find a better solution, this shouldn't be needed
// TODO this is not ideal and produce a warning!
// see https://github.com/webpack/webpack/issues/7713#issuecomment-467888437
// note: warning can be filtered: https://github.com/facebook/docusaurus/pull/3382#issuecomment-684966924
try{module.exports=__webpack_require__(207);}catch(e){module.exports={};}/*
throw new Error(
  "The docs plugin is not used, so you can't require the useDocs hooks. ",
);
 */

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});exports.useThemeConfig=void 0;/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var useDocusaurusContext_1=__importDefault(__webpack_require__(23));function useThemeConfig(){return useDocusaurusContext_1.default().siteConfig.themeConfig;}exports.useThemeConfig=useThemeConfig;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});exports.isDocsPluginEnabled=void 0;var useDocs_1=__webpack_require__(171);// TODO not ideal, see also "useDocs"
exports.isDocsPluginEnabled=!!useDocs_1.useAllDocsData;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function get(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(k!=="default"&&Object.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);}__setModuleDefault(result,mod);return result;};var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});exports.useDocsPreferredVersionContext=exports.DocsPreferredVersionContextProvider=void 0;/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var react_1=__importStar(__webpack_require__(0));var useThemeConfig_1=__webpack_require__(184);var docsUtils_1=__webpack_require__(185);var useDocs_1=__webpack_require__(171);var DocsPreferredVersionStorage_1=__importDefault(__webpack_require__(213));// Initial state is always null as we can't read localstorage from node SSR
function getInitialState(pluginIds){var initialState={};pluginIds.forEach(function(pluginId){initialState[pluginId]={preferredVersionName:null};});return initialState;}// Read storage for all docs plugins
// Assign to each doc plugin a preferred version (if found)
function readStorageState(_ref){var pluginIds=_ref.pluginIds,versionPersistence=_ref.versionPersistence,allDocsData=_ref.allDocsData;// The storage value we read might be stale,
// and belong to a version that does not exist in the site anymore
// In such case, we remove the storage value to avoid downstream errors
function restorePluginState(pluginId){var preferredVersionNameUnsafe=DocsPreferredVersionStorage_1.default.read(pluginId,versionPersistence);var pluginData=allDocsData[pluginId];var versionExists=pluginData.versions.some(function(version){return version.name===preferredVersionNameUnsafe;});if(versionExists){return{preferredVersionName:preferredVersionNameUnsafe};}else{DocsPreferredVersionStorage_1.default.clear(pluginId,versionPersistence);return{preferredVersionName:null};}}var initialState={};pluginIds.forEach(function(pluginId){initialState[pluginId]=restorePluginState(pluginId);});return initialState;}function useVersionPersistence(){return useThemeConfig_1.useThemeConfig().docs.versionPersistence;}// Value that  will be accessible through context: [state,api]
function useContextValue(){var allDocsData=useDocs_1.useAllDocsData();var versionPersistence=useVersionPersistence();var pluginIds=react_1.useMemo(function(){return Object.keys(allDocsData);},[allDocsData]);// Initial state is empty, as  we can't read browser storage in node/SSR
var _react_1$useState=react_1.useState(function(){return getInitialState(pluginIds);}),state=_react_1$useState[0],setState=_react_1$useState[1];// On mount, we set the state read from browser storage
react_1.useEffect(function(){setState(readStorageState({allDocsData:allDocsData,versionPersistence:versionPersistence,pluginIds:pluginIds}));},[allDocsData,versionPersistence,pluginIds]);// The API that we expose to consumer hooks (memo for constant object)
var api=react_1.useMemo(function(){function savePreferredVersion(pluginId,versionName){DocsPreferredVersionStorage_1.default.save(pluginId,versionPersistence,versionName);setState(function(s){var _Object$assign;return Object.assign(Object.assign({},s),(_Object$assign={},_Object$assign[pluginId]={preferredVersionName:versionName},_Object$assign));});}return{savePreferredVersion:savePreferredVersion};},[setState]);return[state,api];}var Context=react_1.createContext(null);function DocsPreferredVersionContextProvider(_ref2){var children=_ref2.children;if(docsUtils_1.isDocsPluginEnabled){return react_1.default.createElement(DocsPreferredVersionContextProviderUnsafe,null,children);}else{return react_1.default.createElement(react_1.default.Fragment,null,children);}}exports.DocsPreferredVersionContextProvider=DocsPreferredVersionContextProvider;function DocsPreferredVersionContextProviderUnsafe(_ref3){var children=_ref3.children;var contextValue=useContextValue();return react_1.default.createElement(Context.Provider,{value:contextValue},children);}function useDocsPreferredVersionContext(){var value=react_1.useContext(Context);if(!value){throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");}return value;}exports.useDocsPreferredVersionContext=useDocsPreferredVersionContext;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isInternalUrl; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function hasProtocol(url){return /^(\w*:|\/\/)/.test(url)===true;}function isInternalUrl(url){return typeof url!=='undefined'&&!hasProtocol(url);}

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});exports.docVersionSearchTag=exports.DEFAULT_SEARCH_TAG=void 0;exports.DEFAULT_SEARCH_TAG='default';function docVersionSearchTag(pluginId,versionName){return"docs-"+pluginId+"-"+versionName;}exports.docVersionSearchTag=docVersionSearchTag;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});exports.useDocVersionSuggestions=exports.useActiveDocContext=exports.useActiveVersion=exports.useLatestVersion=exports.useVersions=exports.useActivePluginAndVersion=exports.useActivePlugin=exports.useDocsData=exports.useAllDocsData=void 0;var router_1=__webpack_require__(183);var useGlobalData_1=__webpack_require__(208);var docsClientUtils_1=__webpack_require__(209);exports.useAllDocsData=function(){return useGlobalData_1.useAllPluginInstancesData('docusaurus-plugin-content-docs');};exports.useDocsData=function(pluginId){return useGlobalData_1.usePluginData('docusaurus-plugin-content-docs',pluginId);};exports.useActivePlugin=function(options){if(options===void 0){options={};}var data=exports.useAllDocsData();var _router_1$useLocation=router_1.useLocation(),pathname=_router_1$useLocation.pathname;return docsClientUtils_1.getActivePlugin(data,pathname,options);};exports.useActivePluginAndVersion=function(options){if(options===void 0){options={};}var activePlugin=exports.useActivePlugin(options);var _router_1$useLocation2=router_1.useLocation(),pathname=_router_1$useLocation2.pathname;if(activePlugin){var activeVersion=docsClientUtils_1.getActiveVersion(activePlugin.pluginData,pathname);return{activePlugin:activePlugin,activeVersion:activeVersion};}return undefined;};// versions are returned ordered (most recent first)
exports.useVersions=function(pluginId){var data=exports.useDocsData(pluginId);return data.versions;};exports.useLatestVersion=function(pluginId){var data=exports.useDocsData(pluginId);return docsClientUtils_1.getLatestVersion(data);};// Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active
exports.useActiveVersion=function(pluginId){var data=exports.useDocsData(pluginId);var _router_1$useLocation3=router_1.useLocation(),pathname=_router_1$useLocation3.pathname;return docsClientUtils_1.getActiveVersion(data,pathname);};exports.useActiveDocContext=function(pluginId){var data=exports.useDocsData(pluginId);var _router_1$useLocation4=router_1.useLocation(),pathname=_router_1$useLocation4.pathname;return docsClientUtils_1.getActiveDocContext(data,pathname);};// Useful to say "hey, you are not on the latest docs version, please switch"
exports.useDocVersionSuggestions=function(pluginId){var data=exports.useDocsData(pluginId);var _router_1$useLocation5=router_1.useLocation(),pathname=_router_1$useLocation5.pathname;return docsClientUtils_1.getDocVersionSuggestions(data,pathname);};

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGlobalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllPluginInstancesData", function() { return useAllPluginInstancesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePluginData", function() { return usePluginData; });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO annoying constant duplication
// if we import something from outside the /client folder,
// the tsc directory structure is affected
// import {DEFAULT_PLUGIN_ID} from '../../constants';
var DEFAULT_PLUGIN_ID='default';function useGlobalData(){var _useDocusaurusContext=Object(_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__["default"])(),globalData=_useDocusaurusContext.globalData;if(!globalData){throw new Error('Docusaurus global data not found');}return globalData;}function useAllPluginInstancesData(pluginName){var globalData=useGlobalData();var pluginGlobalData=globalData[pluginName];if(!pluginGlobalData){throw new Error("Docusaurus plugin global data not found for pluginName="+pluginName);}return pluginGlobalData;}function usePluginData(pluginName,pluginId){if(pluginId===void 0){pluginId=DEFAULT_PLUGIN_ID;}var pluginGlobalData=useAllPluginInstancesData(pluginName);var pluginInstanceGlobalData=pluginGlobalData[pluginId];if(!pluginInstanceGlobalData){throw new Error("Docusaurus plugin global data not found for pluginName="+pluginName+" and pluginId="+pluginId);}return pluginInstanceGlobalData;}

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});exports.getDocVersionSuggestions=exports.getActiveDocContext=exports.getActiveVersion=exports.getLatestVersion=exports.getActivePlugin=void 0;var router_1=__webpack_require__(183);function getActivePlugin(allPluginDatas,pathname,options){if(options===void 0){options={};}var activeEntry=Object.entries(allPluginDatas).find(function(_ref){var _id=_ref[0],pluginData=_ref[1];return!!router_1.matchPath(pathname,{path:pluginData.path,exact:false,strict:false});});var activePlugin=activeEntry?{pluginId:activeEntry[0],pluginData:activeEntry[1]}:undefined;if(!activePlugin&&options.failfast){throw new Error("Can't find active docs plugin for pathname="+pathname+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(allPluginDatas).map(function(plugin){return plugin.path;}).join(', '));}return activePlugin;}exports.getActivePlugin=getActivePlugin;exports.getLatestVersion=function(data){return data.versions.find(function(version){return version.isLast;});};// Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active
exports.getActiveVersion=function(data,pathname){var lastVersion=exports.getLatestVersion(data);// Last version is a route like /docs/*,
// we need to try to match it last or it would match /docs/version-1.0/* as well
var orderedVersionsMetadata=[].concat(data.versions.filter(function(version){return version!==lastVersion;}),[lastVersion]);return orderedVersionsMetadata.find(function(version){return!!router_1.matchPath(pathname,{path:version.path,exact:false,strict:false});});};exports.getActiveDocContext=function(data,pathname){var activeVersion=exports.getActiveVersion(data,pathname);var activeDoc=activeVersion===null||activeVersion===void 0?void 0:activeVersion.docs.find(function(doc){return!!router_1.matchPath(pathname,{path:doc.path,exact:true,strict:false});});function getAlternateVersionDocs(docId){var result={};data.versions.forEach(function(version){version.docs.forEach(function(doc){if(doc.id===docId){result[version.name]=doc;}});});return result;}var alternateVersionDocs=activeDoc?getAlternateVersionDocs(activeDoc.id):{};return{activeVersion:activeVersion,activeDoc:activeDoc,alternateDocVersions:alternateVersionDocs};};exports.getDocVersionSuggestions=function(data,pathname){var latestVersion=exports.getLatestVersion(data);var activeDocContext=exports.getActiveDocContext(data,pathname);// We only suggest another doc/version if user is not using the latest version
var isNotOnLatestVersion=activeDocContext.activeVersion!==latestVersion;var latestDocSuggestion=isNotOnLatestVersion?activeDocContext===null||activeDocContext===void 0?void 0:activeDocContext.alternateDocVersions[latestVersion.name]:undefined;var latestVersionSuggestion=isNotOnLatestVersion?latestVersion:undefined;return{latestDocSuggestion:latestDocSuggestion,latestVersionSuggestion:latestVersionSuggestion};};

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});exports.isSamePath=void 0;// Compare the 2 paths, ignoring trailing /
exports.isSamePath=function(path1,path2){var normalize=function normalize(pathname){return!pathname||(pathname===null||pathname===void 0?void 0:pathname.endsWith('/'))?pathname:pathname+"/";};return normalize(path1)===normalize(path2);};

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});exports.useTitleFormatter=void 0;/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var useDocusaurusContext_1=__importDefault(__webpack_require__(23));exports.useTitleFormatter=function(title){var _useDocusaurusContext=useDocusaurusContext_1.default(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig,siteConfig=_useDocusaurusContext2===void 0?{}:_useDocusaurusContext2;var siteTitle=siteConfig.title,_siteConfig$titleDeli=siteConfig.titleDelimiter,titleDelimiter=_siteConfig$titleDeli===void 0?'|':_siteConfig$titleDeli;return title&&title.trim().length?title.trim()+" "+titleDelimiter+" "+siteTitle:siteTitle;};

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.useDocsPreferredVersionByPluginId=exports.useDocsPreferredVersion=void 0;/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var react_1=__webpack_require__(0);var DocsPreferredVersionProvider_1=__webpack_require__(186);var useDocs_1=__webpack_require__(171);var constants_1=__webpack_require__(214);// TODO improve typing
// Note, the preferredVersion attribute will always be null before mount
function useDocsPreferredVersion(pluginId){if(pluginId===void 0){pluginId=constants_1.DEFAULT_PLUGIN_ID;}var docsData=useDocs_1.useDocsData(pluginId);var _DocsPreferredVersion=DocsPreferredVersionProvider_1.useDocsPreferredVersionContext(),state=_DocsPreferredVersion[0],api=_DocsPreferredVersion[1];var preferredVersionName=state[pluginId].preferredVersionName;var preferredVersion=preferredVersionName?docsData.versions.find(function(version){return version.name===preferredVersionName;}):null;var savePreferredVersionName=react_1.useCallback(function(versionName){api.savePreferredVersion(pluginId,versionName);},[api]);return{preferredVersion:preferredVersion,savePreferredVersionName:savePreferredVersionName};}exports.useDocsPreferredVersion=useDocsPreferredVersion;function useDocsPreferredVersionByPluginId(){var allDocsData=useDocs_1.useAllDocsData();var _DocsPreferredVersion2=DocsPreferredVersionProvider_1.useDocsPreferredVersionContext(),state=_DocsPreferredVersion2[0];function getPluginIdPreferredVersion(pluginId){var docsData=allDocsData[pluginId];var preferredVersionName=state[pluginId].preferredVersionName;return preferredVersionName?docsData.versions.find(function(version){return version.name===preferredVersionName;}):null;}var pluginIds=Object.keys(allDocsData);var result={};pluginIds.forEach(function(pluginId){result[pluginId]=getPluginIdPreferredVersion(pluginId);});return result;}exports.useDocsPreferredVersionByPluginId=useDocsPreferredVersionByPluginId;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});var storageKey=function storageKey(pluginId){return"docs-preferred-version-"+pluginId;};var DocsPreferredVersionStorage={save:function save(pluginId,persistence,versionName){if(persistence==='none'){// noop
}else{window.localStorage.setItem(storageKey(pluginId),versionName);}},read:function read(pluginId,persistence){if(persistence==='none'){return null;}else{return window.localStorage.getItem(storageKey(pluginId));}},clear:function clear(pluginId,persistence){if(persistence==='none'){// noop
}else{window.localStorage.removeItem(storageKey(pluginId));}}};exports.default=DocsPreferredVersionStorage;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PLUGIN_ID", function() { return DEFAULT_PLUGIN_ID; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*
// eslint-disable-next-line no-restricted-imports
export {
  // constants were only available on node
  // this makes some useful constants available to frontend/themes too
  // import {DEFAULT_PLUGIN_ID} '@docusaurus/constants'
  DEFAULT_PLUGIN_ID,
} from '../../constants';
 */ // Not duplicating the constants seems to produce
// weird TS compilation side-effects
var DEFAULT_PLUGIN_ID='default';

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/LinksCollector.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var createStatefulLinksCollector=function createStatefulLinksCollector(){// Set to dedup, as it's not useful to collect multiple times the same link
var allLinks=new Set();return{collectLink:function collectLink(link){allLinks.add(link);},getCollectedLinks:function getCollectedLinks(){return[].concat(allLinks);}};};var Context=/*#__PURE__*/Object(react["createContext"])({collectLink:function collectLink(){// noop by default for client
// we only use the broken links checker server-side
}});var LinksCollector_useLinksCollector=function useLinksCollector(){return Object(react["useContext"])(Context);};var LinksCollector_ProvideLinksCollector=function ProvideLinksCollector(_ref){var children=_ref.children,linksCollector=_ref.linksCollector;return/*#__PURE__*/react_default.a.createElement(Context.Provider,{value:linksCollector},children);};
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(160);

// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __rest=undefined&&undefined.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};// TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix
var shouldAddBaseUrlAutomatically=function shouldAddBaseUrlAutomatically(to){return to.startsWith('/');};function Link(_a){var _b;var isNavLink=_a.isNavLink,to=_a.to,href=_a.href,activeClassName=_a.activeClassName,isActive=_a.isActive,noBrokenLinkCheck=_a['data-noBrokenLinkCheck'],_a$autoAddBaseUrl=_a.autoAddBaseUrl,autoAddBaseUrl=_a$autoAddBaseUrl===void 0?true:_a$autoAddBaseUrl,props=__rest(_a,["isNavLink","to","href","activeClassName","isActive",'data-noBrokenLinkCheck',"autoAddBaseUrl"]);var _useBaseUrlUtils=Object(useBaseUrl["b" /* useBaseUrlUtils */])(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var linksCollector=LinksCollector_useLinksCollector();// IMPORTANT: using to or href should not change anything
// For example, MDX links will ALWAYS give us the href props
// Using one prop or the other should not be used to distinguish
// internal links (/docs/myDoc) from external links (https://github.com)
var targetLinkUnprefixed=to||href;function maybeAddBaseUrl(str){return autoAddBaseUrl&&shouldAddBaseUrlAutomatically(str)?withBaseUrl(str):str;}var isInternal=Object(isInternalUrl["a" /* default */])(targetLinkUnprefixed);// pathname:// is a special "protocol" we use to tell Docusaurus link
// that a link is not "internal" and that we shouldn't use history.push()
// this is not ideal but a good enough escape hatch for now
// see https://github.com/facebook/docusaurus/issues/3309
// note: we want baseUrl to be appended (see issue for details)
// TODO read routes and automatically detect internal/external links?
var targetLinkWithoutPathnameProtocol=targetLinkUnprefixed===null||targetLinkUnprefixed===void 0?void 0:targetLinkUnprefixed.replace('pathname://','');// TODO we should use ReactRouter basename feature instead!
// Automatically apply base url in links that start with /
var targetLink=typeof targetLinkWithoutPathnameProtocol!=='undefined'?maybeAddBaseUrl(targetLinkWithoutPathnameProtocol):undefined;var preloaded=Object(react["useRef"])(false);var LinkComponent=isNavLink?react_router_dom["e" /* NavLink */]:react_router_dom["c" /* Link */];var IOSupported=ExecutionEnvironment["a" /* default */].canUseIntersectionObserver;var io;var handleIntersection=function handleIntersection(el,cb){io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(el===entry.target){// If element is in viewport, stop listening/observing and run callback.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(el);io.disconnect();cb();}}});});// Add element to the observer.
io.observe(el);};var handleRef=function handleRef(ref){if(IOSupported&&ref&&isInternal){// If IO supported and element reference found, setup Observer functionality.
handleIntersection(ref,function(){window.docusaurus.prefetch(targetLink);});}};var onMouseEnter=function onMouseEnter(){if(!preloaded.current){window.docusaurus.preload(targetLink);preloaded.current=true;}};Object(react["useEffect"])(function(){// If IO is not supported. We prefetch by default (only once).
if(!IOSupported&&isInternal){window.docusaurus.prefetch(targetLink);}// When unmounting, stop intersection observer from watching.
return function(){if(IOSupported&&io){io.disconnect();}};},[targetLink,IOSupported,isInternal]);var isAnchorLink=(_b=targetLink===null||targetLink===void 0?void 0:targetLink.startsWith('#'))!==null&&_b!==void 0?_b:false;var isRegularHtmlLink=!targetLink||!isInternal||isAnchorLink;if(targetLink&&isInternal&&!isAnchorLink&&!noBrokenLinkCheck){linksCollector.collectLink(targetLink);}return isRegularHtmlLink?/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
react_default.a.createElement("a",Object.assign({href:targetLink},targetLinkUnprefixed&&!isInternal&&{target:'_blank',rel:'noopener noreferrer'},props)):/*#__PURE__*/react_default.a.createElement(LinkComponent,Object.assign({},props,{onMouseEnter:onMouseEnter,innerRef:handleRef,to:targetLink||''},isNavLink&&{isActive:isActive,activeClassName:activeClassName}));}/* harmony default export */ var exports_Link = __webpack_exports__["a"] = (Link);

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(147);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconEdit=function IconEdit(_ref){var className=_ref.className,restProps=Object(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["className"]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg",Object(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.iconEdit,className)},restProps),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));};/* harmony default export */ __webpack_exports__["a"] = (IconEdit);

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(147);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useTOCHighlight(linkClassName,linkActiveClassName,topOffset){var _useState=Object(react["useState"])(undefined),lastActiveLink=_useState[0],setLastActiveLink=_useState[1];Object(react["useEffect"])(function(){function setActiveLink(){function getActiveHeaderAnchor(){var headersAnchors=Array.from(document.getElementsByClassName('anchor'));var firstAnchorUnderViewportTop=headersAnchors.find(function(anchor){var _anchor$getBoundingCl=anchor.getBoundingClientRect(),top=_anchor$getBoundingCl.top;return top>=topOffset;});if(firstAnchorUnderViewportTop){// If first anchor in viewport is under a certain threshold, we consider it's not the active anchor.
// In such case, the active anchor is the previous one (if it exists), that may be above the viewport
if(firstAnchorUnderViewportTop.getBoundingClientRect().top>=topOffset){var previousAnchor=headersAnchors[headersAnchors.indexOf(firstAnchorUnderViewportTop)-1];return previousAnchor!==null&&previousAnchor!==void 0?previousAnchor:firstAnchorUnderViewportTop;}// If the anchor is at the top of the viewport, we consider it's the first anchor
else{return firstAnchorUnderViewportTop;}}// no anchor under viewport top? (ie we are at the bottom of the page)
else{// highlight the last anchor found
return headersAnchors[headersAnchors.length-1];}}var activeHeaderAnchor=getActiveHeaderAnchor();if(activeHeaderAnchor){var index=0;var itemHighlighted=false;// @ts-expect-error: Must be <a> tags.
var links=document.getElementsByClassName(linkClassName);while(index<links.length&&!itemHighlighted){var link=links[index];var href=link.href;var anchorValue=decodeURIComponent(href.substring(href.indexOf('#')+1));if(activeHeaderAnchor.id===anchorValue){if(lastActiveLink){lastActiveLink.classList.remove(linkActiveClassName);}link.classList.add(linkActiveClassName);setLastActiveLink(link);itemHighlighted=true;}index+=1;}}}document.addEventListener('scroll',setActiveLink);document.addEventListener('resize',setActiveLink);setActiveLink();return function(){document.removeEventListener('scroll',setActiveLink);document.removeEventListener('resize',setActiveLink);};});}/* harmony default export */ var hooks_useTOCHighlight = (useTOCHighlight);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/styles.module.css
var styles_module = __webpack_require__(75);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LINK_CLASS_NAME='table-of-contents__link';var ACTIVE_LINK_CLASS_NAME='table-of-contents__link--active';var TOP_OFFSET=100;/* eslint-disable jsx-a11y/control-has-associated-label */function Headings(_ref){var toc=_ref.toc,isChild=_ref.isChild;if(!toc.length){return null;}return/*#__PURE__*/react_default.a.createElement("ul",{className:isChild?'':'table-of-contents table-of-contents__left-border'},toc.map(function(heading){return/*#__PURE__*/react_default.a.createElement("li",{key:heading.id},/*#__PURE__*/react_default.a.createElement("a",{href:"#"+heading.id,className:LINK_CLASS_NAME// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/react_default.a.createElement(Headings,{isChild:true,toc:heading.children}));}));}function TOC(_ref2){var toc=_ref2.toc;hooks_useTOCHighlight(LINK_CLASS_NAME,ACTIVE_LINK_CLASS_NAME,TOP_OFFSET);return/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])(styles_module_default.a.tableOfContents,'thin-scrollbar')},/*#__PURE__*/react_default.a.createElement(Headings,{toc:toc}));}/* harmony default export */ var theme_TOC = __webpack_exports__["a"] = (TOC);

/***/ })

}]);