(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ 205:
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

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/blockchain-logistics-82986d4cc7314104bab824dcd6a99f1d.jpg");

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/how-blockhain-works-b004f224ad05787954914e758e8c6fac.png");

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/Supply-chain-infographic-40b5c95a96fe9bbccea93e51884b5544.png");

/***/ }),

/***/ 94:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(205);
var frontMatter={slug:'blockchain-logistics',title:'Blockchain in Logistics - Transforming an Industry',image:'/img/blog/logistics/blockchain-logistics.jpg',author:'Luis Diego Rojas',author_title:'Content Strategist',author_url:'https://www.linkedin.com/in/ldrojas/',author_image_url:'https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4',tags:['eosio','blockchain','logistics','supply chain'],metaTitle:'EOS Costa Rica Blog: Blockchain in Logistics',metaDescription:'The logistics and supply chain industries are very demanding and complex. Blockchain in logistics can improve efficiency, traceability and transparency.'};var metadata={"permalink":"/blog/blockchain-logistics","editUrl":"https://github.com/eoscostarica/eoscostarica.io/edit/master/website/blog/blog/2020-04-7-blockchain-logistics.md","source":"@site/blog/2020-04-7-blockchain-logistics.md","description":"Blockchain in Logistics","date":"2020-04-07T00:00:00.000Z","tags":[{"label":"eosio","permalink":"/blog/tags/eosio"},{"label":"blockchain","permalink":"/blog/tags/blockchain"},{"label":"logistics","permalink":"/blog/tags/logistics"},{"label":"supply chain","permalink":"/blog/tags/supply-chain"}],"title":"Blockchain in Logistics - Transforming an Industry","readingTime":6.56,"truncated":true,"prevItem":{"title":"What Is Blockchain? A Quick Guide","permalink":"/blog/what-is-blockchain"},"nextItem":{"title":"Why Get Involved in an Open-Source Project?","permalink":"/blog/open-source"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'<strong>Understanding Blockchain in Logistics</strong>',id:'understanding-blockchain-in-logistics',children:[]},{value:'<strong>What Is Blockchain?</strong>',id:'what-is-blockchain',children:[]},{value:'<strong>How a Blockchain Works?</strong>',id:'how-a-blockchain-works',children:[]},{value:'<strong>Blockchain in Logistics: What Can This Technology Offer?</strong>',id:'blockchain-in-logistics-what-can-this-technology-offer',children:[{value:'<strong>1. Increasing Transparency and Traceability:</strong>',id:'1-increasing-transparency-and-traceability',children:[]},{value:'<strong>2. Leaner and More Optimized Logistics Process:</strong>',id:'2-leaner-and-more-optimized-logistics-process',children:[]},{value:'<strong>3. Improved Efficiency and Cost Savings</strong>',id:'3-improved-efficiency-and-cost-savings',children:[]}]},{value:'<strong>Contact Us for More Information About Blockchain in Logistics.</strong>',id:'contact-us-for-more-information-about-blockchain-in-logistics',children:[]},{value:'TL;DR',id:'tldr',children:[]}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"Blockchain in Logistics",src:__webpack_require__(512).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"understanding-blockchain-in-logistics"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"Understanding Blockchain in Logistics")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"Blockchain in logistics:")," Right now, blockchain is changing the rules of the game for logistics and supply chain. By its nature, companies that produce or sell goods must manage large networks of individuals and organizations to supply their operations and run logistics processes. Blockchain \u2013 a technology part of industry 4.0 \u2013 may transform these daily activities. So, before going more in-depth on how to deploy blockchain in logistics, let\u2019s take a look at this industry."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Logistics is the management of the flow of material things such as inventory or finished goods from one point to another. It involves a very complex operation that requires multiple people and entities to play a part in its handling, production, packaging, transportation, tax management, warehousing, insurance, security, and delivery to customers.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Overall, the complexity of logistics represents a very fertile ground of opportunities for blockchain. Blockchain is a technology with a list of capabilities that could solve many issues along the process. These include traceability and automatization of transactions. But, what exactly is blockchain?"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"(TL;DR at the end of the article).")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"what-is-blockchain"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"What Is Blockchain?")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"A ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/blog/what-is-blockchain"},"blockchain consists of an immutable record of data")," that acts as a decentralized ledger shared by a cluster of computers or \u201Cnodes,\u201D which securely registers transactions in \u201Cblocks\u201D of data. The nodes that participate in the network will validate the transaction through a consensus mechanism. Once they approve the transaction, the block appends to the blockchain.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"To sum up, the immutability features of blockchain guarantee that no person can manipulate the data. This data is stored as an encrypted sequence of transactions that can be tracked nearly in real-time. Blockchain allows a user to track all these transactions, meaning it becomes a valuable feature to trace things across a logistics chain.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Moreover, blockchain offers other useful functionalities to the logistics industry, such as the ability to create and execute smart contracts. Using smart contracts may help, for instance, easily display in near real-time the exact location of a parcel and the identity of who authorized its freight. A smart contract is a code that can be executed automatically and autonomously when the agreed terms are met. For example, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.computerworld.com/article/3454336/walmart-launches-world-s-largest-blockchain-based-freight-and-payment-network.html?utm_source=hs_email&utm_medium=email&utm_content=79697372&_hsenc=p2ANqtz--W52pX5g6pP-QMxqrb4PPzAPPdkQcN06hNhlcps8fx1Jk6AXz3i137XT1S8az4NDl0ntkiSyPn7Wn7lo8nF5LScW3_Yw&_hsmi=79697372"},"Walmart Canada"),"\xA0recently launched a blockchain-based platform with freight tracking and payment processing to improve the supply chain to its more than 400 retail stores."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"how-a-blockchain-works"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"How a Blockchain Works?")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"To start a transaction (of data), a user must request the validation of the nodes in the network. The nodes will then validate and approve a transaction depending on values such as available funds or permissions to execute a transaction, for instance. Then, the transaction data is stored in a block of data."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Once the nodes approve the transaction, this block of data appends to the blockchain and generates a \u201Chash\u201D code, which is a unique ID. A hash is calculated by an algorithm that transforms information of variable lengths into a code of specific length.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Consequently, the block of data and, therefore, the transaction will remain immutably registered in the blockchain; hence the blocks of data cannot be deleted or altered. This means that to change any record, a user must request a new transaction. The chain cannot be reduced in size; it can only grow by adding new blocks of data to amend past transactions.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"How Blockchain Works ",src:__webpack_require__(759).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"blockchain-in-logistics-what-can-this-technology-offer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"Blockchain in Logistics: What Can This Technology Offer?")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"By deploying blockchain technology, companies may solve many of the challenges and hurdles across supply chains. Managing one of these chains is very complex and involves many stakeholders throughout the flow of goods. Consequently, this might create data silos and insufficient transparency, hence lower levels of trust among organizations."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"In short, how can blockchain technology significantly change the logistics industry?"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"1-increasing-transparency-and-traceability"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h3"},"1","."," Increasing Transparency and Traceability:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"As mentioned previously, logistics processes often involve a large number of stakeholders. From factories, customs personnel, and carriers, to banks and insurance companies. Unstandardized procedures and low levels of transparency might undoubtedly result in a lack of trust and hence causing friction among parties.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Alternatively, blockchain technology can help increase transparency by authorizing key users of the stakeholders so they can have visibility throughout the whole process. This means that a blockchain-based application may allow anyone involved and authorized to view where a package is, in near real-time, from leaving the factory and until reaching its destination.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Additionally, the technology offers traceability across the value chain. This visibility can also be aimed at final customers who can reliably view the process of the goods they buy. For example, the mining and gemstones trading company ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.debeersgroup.com/media/company-news"},"De Beers"),"\xA0announced that it would start using blockchain for tracking stones along the value chain. This will likely impact a market where consumers are turning their heads towards ethical purchasing and are becoming more aware of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.forbes.com/sites/bernardmarr/2018/03/14/how-blockchain-could-end-the-trade-in-blood-diamonds-an-incredible-use-case-everyone-should-read/#22a75fce387d"},"issues such as Blood Diamonds"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"Supply-chain-infographic",src:__webpack_require__(760).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"2-leaner-and-more-optimized-logistics-process"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h3"},"2","."," Leaner and More Optimized Logistics Process:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"One of the main problems in logistics is precisely the fact that the process depends on several \u2013 if not dozens \u2013 different stakeholders. It\u2019s highly probable that all these organizations and entities have their platforms and systems, meaning that technology adoption will most likely be disparate among them.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"To improve the flow of goods, the value chain must be unfragmented and optimized. Blockchain technology may solve this by offering a decentralized solution. By using a distributed ledger, all these stakeholders can better trust the system and therefore increase lean communication and processing of packages. In an industry where people still use pen and paper, deploying this technology may certainly go a long way.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"For example, logistics corporation Maersk and IBM formed a joint venture to develop ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.tradelens.com/"},"TradeLens"),", a global supply blockchain-based solution to track containers. To date, the platform has ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://cointelegraph.com/news/standard-chartered-joins-ibm-and-maersks-blockchain-shipping-platform"},"processed millions of containers worldwide"),"\xA0and captures thousands of documents weekly."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"3-improved-efficiency-and-cost-savings"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h3"},"3","."," Improved Efficiency and Cost Savings")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Furthermore, blockchain\u2019s ability to deploy smart contracts can enhance logistics and help cut costs. For instance, smart contracts can automate processes such as customs duties, payment processing, or executing insurance. Consequently, companies may lower costs related to paper filing or interacting with middlemen.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"For example, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.gocloudlogistics.com/"},"Cloud Logistics"),"\xA0is a company that provides blockchain supply chain solutions. This platform offers the possibility to automate the freight auditing process and to leverage data to create future savings.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Overall, there is currently a blue ocean of opportunities for blockchain technology to set sail."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"contact-us-for-more-information-about-blockchain-in-logistics"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"Contact Us for More Information About Blockchain in Logistics.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/"},"EOS Costa Rica")," operates since 2018","."," Our team develops blockchain-based solutions with great attention to detail in creating user-centered dapps for enterprise use. We also provide resources to the EOSIO infrastructure and promote the local EOSIO ecosystem. Let\u2019s talk about how you can implement this technology into logistics and supply chain for your organization.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/contact-us"},"Contact Us")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"\xA0Follow us on social media:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://eoscostarica.io"},"Website")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://twitter.com/eoscostarica"},"Twitter")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://t.me/eoscr"},"Telegram")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.facebook.com/costaricaeos/"},"Facebook")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.linkedin.com/company/eoscostarica/"},"LinkedIn")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://medium.com/@eoscostarica"},"Medium"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"tldr"},"TL;DR"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"The logistics industry involves a very complex operation that needs to manage multiple people and entities. ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/blog/what-is-blockchain"},"Blockchain is an immutable and decentralized record of data")," that offers traceability and automatization of transactions. Specifically, blockchain can leverage logistics and supply chain by:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ol",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ol"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Increasing transparency and traceability:")," Involving a large number of stakeholders with unstandardized procedures and low levels of transparency can lead to a lack of trust and friction among parties. Blockchain allows users to grant authorizations to have complete visibility across the process, facilitating traceability of goods (from the factory to its destination)."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ol"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Leaner and more optimized logistics process:")," When the process relies on multiple stakeholders, technology adoption will most likely be disparate. Blockchain can provide an unfragmented and streamlined platform that replaces pen and paper and increase lean communication and processing of packages."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ol"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Improved efficiency and cost savings:")," By deploying smart contracts, blockchain can help cut costs automating processes related to paper filing and interacting with middlemen.")));};MDXContent.isMDXComponent=true;

/***/ })

}]);