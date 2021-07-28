(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toc", function() { return toc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(208);
var _excluded=["components"];var frontMatter={slug:'eos-rate',title:'A Rating System for EOS',image:'/img/blog/eos-rate/eos-rate.jpg',author:'Luis Diego Rojas',author_title:'Content Strategist',author_url:'https://twitter.com/ldrojas',author_image_url:'https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4',tags:['eosio','blockchain','eos','open-source','technology'],metaTitle:'EOS Costa Rica Blog: A Rating System for EOS',metaDescription:'EOS Rate is a blockchain-based open-source dapp that allows EOS token holders to rate Block Producers and Proxies in the EOS Mainnet.'};var metadata={"permalink":"/blog/eos-rate","editUrl":"https://github.com/eoscostarica/eoscostarica.io/edit/master/website/blog/blog/2020-04-23-eos-rate.md","source":"@site/blog/2020-04-23-eos-rate.md","description":"Why Get Involved in Open Source","date":"2020-04-23T00:00:00.000Z","tags":[{"label":"eosio","permalink":"/blog/tags/eosio"},{"label":"blockchain","permalink":"/blog/tags/blockchain"},{"label":"eos","permalink":"/blog/tags/eos"},{"label":"open-source","permalink":"/blog/tags/open-source"},{"label":"technology","permalink":"/blog/tags/technology"}],"title":"A Rating System for EOS","readingTime":5.3,"truncated":true,"prevItem":{"title":"Leveling Up the Gaming Industry with Blockchain","permalink":"/blog/gaming-blockchain"},"nextItem":{"title":"What Is Blockchain? A Quick Guide","permalink":"/blog/what-is-blockchain"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'<strong>What is the EOS Mainnet?</strong>',id:'what-is-the-eos-mainnet',children:[]},{value:'With Great Power Comes Great Responsibility',id:'with-great-power-comes-great-responsibility',children:[]},{value:'What Is EOS Rate?',id:'what-is-eos-rate',children:[]},{value:'Try the Beta Version',id:'try-the-beta-version',children:[]},{value:'Developing an Open-Source App for the EOS Mainnet',id:'developing-an-open-source-app-for-the-eos-mainnet',children:[]},{value:'<strong>Contact Us for More Information About Open-Source Blockchain</strong>',id:'contact-us-for-more-information-about-open-source-blockchain',children:[]}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"Why Get Involved in Open Source ",src:__webpack_require__(726).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"what-is-the-eos-mainnet"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"What is the EOS Mainnet?")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"If you belong to the EOSIO community \u2013 or have read something about the EOSIO blockchain \u2013 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"you might have heard of the EOS Mainnet.")," The EOS Mainnet is the main network of the EOSIO blockchain\u2019s platform where transactions take place. Also, if you\u2019re reading this, it\u2019s highly probable that you know the terminology of blockchain. Otherwise, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/what-is-blockchain"},"check this article out in the first place"),"!"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Further, the EOSIO protocol uses a consensus mechanism known as \u201CDelegated Proof-of-Stake\u201D (DPoS), developed by Daniel Larimer. DPoS in EOSIO uses an election process where EOS token holders vote for the Block Producers (BPs) they think are the most qualified to be the custodians of the network. The EOS Mainnet runs with the twenty-one BPs that obtain the most votes."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"So, the DPoS mechanism requires these twenty-one elected nodes to produce the blocks, and, in exchange, they can receive rewards. One of the underlying opportunities of EOSIO by using DPoS is the ability to scale. Hence, DPoS allows Block Producers to reach consensus faster than traditional PoW (Proof-of-Work) or PoS (Proof-of-Stake) mechanisms. For instance, this enables EOS nodes to validate up to 4,000 transactions per second, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://blockgeeks.com/guides/ethereum-vs-eos-ultimate-comparison-guide"},"in comparison to Ethereum that can reach 15"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"with-great-power-comes-great-responsibility"},"With Great Power Comes Great Responsibility"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Nonetheless, people in the EOS community claim that both DPoS and the EOS Mainnet may be having some drawbacks, including ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://coincentral.com/what-is-an-eos-delegate"},"more centralization in a network that\u2019s supposed to be decentralized"),". For example, in one case, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://cointelegraph.com/news/eos-block-producers-freeze-user-funds-to-prevent-theft-resulting-in-twitter-backlash"},"some accounts were frozen by BPs"),", which raised people\u2019s eyebrows in the community. Also, there have been some disagreements associated with ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://cointelegraph.com/news/eos-network-suffering-from-degraded-performance-says-coinbase"},"performance degradation in the network"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Consequently, token holders who elect the twenty-one nodes can only trust the transparency and democracy of the EOS Mainnet. Thus, these BPs are the ones who must protect and keep the mainnet up and running in the best interests of the voting community."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"As of now, it\u2019s only possible to keep track of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://bloks.io/"},"rankings according to votes by token holders"),". However, the weight of token holders\u2019 votes is determined by the number of EOS tokens they possess, meaning that token holders with more EOS can cast a more weighted vote for the BPs they want to endorse. In other words, those who have fewer EOS tokens may seem underrepresented. So, the importance of maintaining a transparent and trustworthy election process in the EOS Mainnet is what brought to life the idea of the open-source app called ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eosrate.io"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"a"},"EOS Rate")),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"what-is-eos-rate"},"What Is EOS Rate?"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eosrate.io"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"a"},"EOS Rate"))," is an open-source, decentralized app (Dapp) built by a team of developers in Costa Rica. It allows EOS token holders to access a rating system and voting portal for BPs and Proxies, making it easier for the token holders to make an informed decision."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Moreover, EOS Rate intends to gather global ratings to help capture collective opinion, or \u201Cwisdom of the crowd,\u201D and measure if the voting patterns reflect voter sentiment. Then, the Dapp generates profile pages of the BPs, using a radial component called \u201CLEAF\u201D (Liquid EOS Attribute Factors) to help the users visually compare the most relevant qualitative attributes of BPs."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"So, to submit ratings, the token holders must sign in with their EOS wallet, making the voting process more secure and transparent. This means that one account can only represent one rating submission per BP. Then, the ratings are securely stored in the EOS blockchain to guarantee the immutability of the ratings."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"In addition, token holders can submit their rating in EOS Rate using five distinct categories:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Transparency:")," Compliance with disclosure of ownership, complete bp.json, use of rewards, and financial stats."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Infrastructure:")," Stability and reliability of the EOS infrastructure."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Trustiness:")," Collaboration and reputation among the EOS community."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Community:")," Community value creation through education and promoting talks, chats, hackathons, conferences, seminars, developer spaces, and other useful content."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Development:")," Technical know-how and usage of open-source software, scripts, frameworks, wallets, voting portals, metrics, etc.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"In particular, once a token holder submits his or her ratings, the total of the ratings will be displayed as radial graphs. So, the process of EOS Rate would be something like this:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{src:__webpack_require__(767).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"try-the-beta-version"},"Try the Beta Version"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"We are looking for token holders who want to become beta testers! Access the portal through ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eosrate.io"},"this link"),", sign in using your EOS wallet, and start rating BPs and Proxies!"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"EOS Rate beta version is currently running in ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://jungletestnet.io/"},"Jungle Testnet"),"\xA0and ratings are exclusive for the BPs using this testnet."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Moreover, we tried to make the process as straightforward as possible for better usability and findability. So, if you have any questions or observations during your testing, please let us know through our ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://t.me/eoscr"},"Telegram group")," or directly to our email: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"mailto:bp@eosio.cr"},"bp@eosio.cr"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eosrate.io/"},"Try EOS Rate")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"developing-an-open-source-app-for-the-eos-mainnet"},"Developing an Open-Source App for the EOS Mainnet"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"So, what is it like to develop an open-source app? First, an open-source project is an initiative built by the community and for the community. Thus, when participating in an open-source app, there is an implicit agreement to use its source code, design documents, and other original content freely."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Moreover, open-source projects usually need the participation of people from many backgrounds, including software devs, UX and visual designers, communications professionals, among others. As a result, people who cooperate in a project may receive several perks, such as networking opportunities or learning new skills. So, for more information on open-source projects, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/getting-involved-in-an-open-source-project"},"read this blog post"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Xavier Fern\xE1ndez, the tech lead of EOS Rate, says about the experience of developing this open-source dapp: \u201CI\u2019m excited to see new developers work with EOSIO and discover how powerful the technology is.\u201D"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"In conclusion, EOS Rate is an open-source app built on the public Mainnet to encourage token holders to make a more informed vote. The team\u2019s vision is to deploy blockchain technology to increase democracy and transparency within the platform\u2019s network."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"contact-us-for-more-information-about-open-source-blockchain"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"Contact Us for More Information About Open-Source Blockchain")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/"},"EOS Costa Rica")," operates since 2018. Our team develops blockchain-based solutions with great attention to detail in creating user-centered dapps for enterprise use. We also provide resources to the EOSIO infrastructure and promote the local EOSIO ecosystem. Let\u2019s talk about how you can implement this technology into your organization.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/contact-us"},"Contact Us")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"\xA0Follow us on social media:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://eoscostarica.io"},"Website")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://twitter.com/eoscostarica"},"Twitter")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://t.me/eoscr"},"Telegram")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.facebook.com/costaricaeos/"},"Facebook")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.linkedin.com/company/eoscostarica/"},"LinkedIn")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://medium.com/@eoscostarica"},"Medium"))));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDXContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createElement; });
/* unused harmony export useMDXComponents */
/* unused harmony export withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


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

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
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

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/eos-rate-cef024c61827a0ae07b1fbfa1f9842d7.jpg");

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/EOS-Rate-Infographic-e16045fbbe4f846e58915da182aeb83c.jpg");

/***/ })

}]);