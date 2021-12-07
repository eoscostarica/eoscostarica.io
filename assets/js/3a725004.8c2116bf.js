"use strict";
(self["webpackChunkeoscostarica_io"] = self["webpackChunkeoscostarica_io"] || []).push([[6733],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 2755:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "assets": function() { return /* binding */ assets; },
/* harmony export */   "toc": function() { return /* binding */ toc; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87462);
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
var _excluded=["components"];var frontMatter={slug:'blockchain-logistics',title:'Blockchain in Logistics - Transforming an Industry',image:'/img/blog/logistics/blockchain-logistics.jpg',author:'Luis Diego Rojas',author_title:'Content Strategist',author_url:'https://www.linkedin.com/in/ldrojas/',author_image_url:'https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4',tags:['eosio','blockchain','logistics','supply chain'],metaTitle:'EOS Costa Rica Blog: Blockchain in Logistics',metaDescription:'The logistics and supply chain industries are very demanding and complex. Blockchain in logistics can improve efficiency, traceability and transparency.'};var contentTitle=undefined;var metadata={"permalink":"/blog/blockchain-logistics","editUrl":"https://github.com/eoscostarica/eoscostarica.io/edit/master/website/blog/blog/2020-04-7-blockchain-logistics.md","source":"@site/blog/2020-04-7-blockchain-logistics.md","title":"Blockchain in Logistics - Transforming an Industry","description":"Blockchain in Logistics","date":"2020-04-07T00:00:00.000Z","formattedDate":"April 7, 2020","tags":[{"label":"eosio","permalink":"/blog/tags/eosio"},{"label":"blockchain","permalink":"/blog/tags/blockchain"},{"label":"logistics","permalink":"/blog/tags/logistics"},{"label":"supply chain","permalink":"/blog/tags/supply-chain"}],"readingTime":6.56,"truncated":true,"authors":[{"name":"Luis Diego Rojas","title":"Content Strategist","url":"https://www.linkedin.com/in/ldrojas/","imageURL":"https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4"}],"prevItem":{"title":"What Is Blockchain? A Quick Guide","permalink":"/blog/what-is-blockchain"},"nextItem":{"title":"Why Get Involved in an Open-Source Project?","permalink":"/blog/open-source"}};var assets={"authorsImageUrls":[undefined]};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'<strong>Understanding Blockchain in Logistics</strong>',id:'understanding-blockchain-in-logistics',children:[],level:2},{value:'<strong>What Is Blockchain?</strong>',id:'what-is-blockchain',children:[],level:2},{value:'<strong>How a Blockchain Works?</strong>',id:'how-a-blockchain-works',children:[],level:2},{value:'<strong>Blockchain in Logistics: What Can This Technology Offer?</strong>',id:'blockchain-in-logistics-what-can-this-technology-offer',children:[{value:'<strong>1. Increasing Transparency and Traceability:</strong>',id:'1-increasing-transparency-and-traceability',children:[],level:3},{value:'<strong>2. Leaner and More Optimized Logistics Process:</strong>',id:'2-leaner-and-more-optimized-logistics-process',children:[],level:3},{value:'<strong>3. Improved Efficiency and Cost Savings</strong>',id:'3-improved-efficiency-and-cost-savings',children:[],level:3}],level:2},{value:'<strong>Contact Us for More Information About Blockchain in Logistics.</strong>',id:'contact-us-for-more-information-about-blockchain-in-logistics',children:[],level:2},{value:'TL;DR',id:'tldr',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Blockchain in Logistics",src:(__webpack_require__(98535)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"understanding-blockchain-in-logistics"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},"Understanding Blockchain in Logistics")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Blockchain in logistics:")," Right now, blockchain is changing the rules of the game for logistics and supply chain. By its nature, companies that produce or sell goods must manage large networks of individuals and organizations to supply their operations and run logistics processes. Blockchain \u2013 a technology part of industry 4.0 \u2013 may transform these daily activities. So, before going more in-depth on how to deploy blockchain in logistics, let\u2019s take a look at this industry."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Logistics is the management of the flow of material things such as inventory or finished goods from one point to another. It involves a very complex operation that requires multiple people and entities to play a part in its handling, production, packaging, transportation, tax management, warehousing, insurance, security, and delivery to customers.\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Overall, the complexity of logistics represents a very fertile ground of opportunities for blockchain. Blockchain is a technology with a list of capabilities that could solve many issues along the process. These include traceability and automatization of transactions. But, what exactly is blockchain?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"(TL;DR at the end of the article).")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"what-is-blockchain"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},"What Is Blockchain?")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/blog/what-is-blockchain"},"blockchain consists of an immutable record of data")," that acts as a decentralized ledger shared by a cluster of computers or \u201Cnodes,\u201D which securely registers transactions in \u201Cblocks\u201D of data. The nodes that participate in the network will validate the transaction through a consensus mechanism. Once they approve the transaction, the block appends to the blockchain.\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"To sum up, the immutability features of blockchain guarantee that no person can manipulate the data. This data is stored as an encrypted sequence of transactions that can be tracked nearly in real-time. Blockchain allows a user to track all these transactions, meaning it becomes a valuable feature to trace things across a logistics chain.\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Moreover, blockchain offers other useful functionalities to the logistics industry, such as the ability to create and execute smart contracts. Using smart contracts may help, for instance, easily display in near real-time the exact location of a parcel and the identity of who authorized its freight. A smart contract is a code that can be executed automatically and autonomously when the agreed terms are met. For example, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.computerworld.com/article/3454336/walmart-launches-world-s-largest-blockchain-based-freight-and-payment-network.html?utm_source=hs_email&utm_medium=email&utm_content=79697372&_hsenc=p2ANqtz--W52pX5g6pP-QMxqrb4PPzAPPdkQcN06hNhlcps8fx1Jk6AXz3i137XT1S8az4NDl0ntkiSyPn7Wn7lo8nF5LScW3_Yw&_hsmi=79697372"},"Walmart Canada"),"\xA0recently launched a blockchain-based platform with freight tracking and payment processing to improve the supply chain to its more than 400 retail stores."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"how-a-blockchain-works"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},"How a Blockchain Works?")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"To start a transaction (of data), a user must request the validation of the nodes in the network. The nodes will then validate and approve a transaction depending on values such as available funds or permissions to execute a transaction, for instance. Then, the transaction data is stored in a block of data."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Once the nodes approve the transaction, this block of data appends to the blockchain and generates a \u201Chash\u201D code, which is a unique ID. A hash is calculated by an algorithm that transforms information of variable lengths into a code of specific length.\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Consequently, the block of data and, therefore, the transaction will remain immutably registered in the blockchain; hence the blocks of data cannot be deleted or altered. This means that to change any record, a user must request a new transaction. The chain cannot be reduced in size; it can only grow by adding new blocks of data to amend past transactions.\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"How Blockchain Works ",src:(__webpack_require__(42179)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"blockchain-in-logistics-what-can-this-technology-offer"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},"Blockchain in Logistics: What Can This Technology Offer?")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"By deploying blockchain technology, companies may solve many of the challenges and hurdles across supply chains. Managing one of these chains is very complex and involves many stakeholders throughout the flow of goods. Consequently, this might create data silos and insufficient transparency, hence lower levels of trust among organizations."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"In short, how can blockchain technology significantly change the logistics industry?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"1-increasing-transparency-and-traceability"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h3"},"1","."," Increasing Transparency and Traceability:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"As mentioned previously, logistics processes often involve a large number of stakeholders. From factories, customs personnel, and carriers, to banks and insurance companies. Unstandardized procedures and low levels of transparency might undoubtedly result in a lack of trust and hence causing friction among parties.\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Alternatively, blockchain technology can help increase transparency by authorizing key users of the stakeholders so they can have visibility throughout the whole process. This means that a blockchain-based application may allow anyone involved and authorized to view where a package is, in near real-time, from leaving the factory and until reaching its destination.\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Additionally, the technology offers traceability across the value chain. This visibility can also be aimed at final customers who can reliably view the process of the goods they buy. For example, the mining and gemstones trading company ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.debeersgroup.com/media/company-news"},"De Beers"),"\xA0announced that it would start using blockchain for tracking stones along the value chain. This will likely impact a market where consumers are turning their heads towards ethical purchasing and are becoming more aware of ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.forbes.com/sites/bernardmarr/2018/03/14/how-blockchain-could-end-the-trade-in-blood-diamonds-an-incredible-use-case-everyone-should-read/#22a75fce387d"},"issues such as Blood Diamonds"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Supply-chain-infographic",src:(__webpack_require__(91375)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"2-leaner-and-more-optimized-logistics-process"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h3"},"2","."," Leaner and More Optimized Logistics Process:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"One of the main problems in logistics is precisely the fact that the process depends on several \u2013 if not dozens \u2013 different stakeholders. It\u2019s highly probable that all these organizations and entities have their platforms and systems, meaning that technology adoption will most likely be disparate among them.\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"To improve the flow of goods, the value chain must be unfragmented and optimized. Blockchain technology may solve this by offering a decentralized solution. By using a distributed ledger, all these stakeholders can better trust the system and therefore increase lean communication and processing of packages. In an industry where people still use pen and paper, deploying this technology may certainly go a long way.\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"For example, logistics corporation Maersk and IBM formed a joint venture to develop ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.tradelens.com/"},"TradeLens"),", a global supply blockchain-based solution to track containers. To date, the platform has ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://cointelegraph.com/news/standard-chartered-joins-ibm-and-maersks-blockchain-shipping-platform"},"processed millions of containers worldwide"),"\xA0and captures thousands of documents weekly."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"3-improved-efficiency-and-cost-savings"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h3"},"3","."," Improved Efficiency and Cost Savings")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Furthermore, blockchain\u2019s ability to deploy smart contracts can enhance logistics and help cut costs. For instance, smart contracts can automate processes such as customs duties, payment processing, or executing insurance. Consequently, companies may lower costs related to paper filing or interacting with middlemen.\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"For example, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.gocloudlogistics.com/"},"Cloud Logistics"),"\xA0is a company that provides blockchain supply chain solutions. This platform offers the possibility to automate the freight auditing process and to leverage data to create future savings.\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Overall, there is currently a blue ocean of opportunities for blockchain technology to set sail."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"contact-us-for-more-information-about-blockchain-in-logistics"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},"Contact Us for More Information About Blockchain in Logistics.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/"},"EOS Costa Rica")," operates since 2018","."," Our team develops blockchain-based solutions with great attention to detail in creating user-centered dapps for enterprise use. We also provide resources to the EOSIO infrastructure and promote the local EOSIO ecosystem. Let\u2019s talk about how you can implement this technology into logistics and supply chain for your organization.\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/contact-us"},"Contact Us")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\xA0Follow us on social media:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://eoscostarica.io"},"Website")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://twitter.com/eoscostarica"},"Twitter")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://t.me/eoscr"},"Telegram")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.facebook.com/costaricaeos/"},"Facebook")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.linkedin.com/company/eoscostarica/"},"LinkedIn")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://medium.com/@eoscostarica"},"Medium"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"tldr"},"TL;DR"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The logistics industry involves a very complex operation that needs to manage multiple people and entities. ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/blog/what-is-blockchain"},"Blockchain is an immutable and decentralized record of data")," that offers traceability and automatization of transactions. Specifically, blockchain can leverage logistics and supply chain by:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Increasing transparency and traceability:")," Involving a large number of stakeholders with unstandardized procedures and low levels of transparency can lead to a lack of trust and friction among parties. Blockchain allows users to grant authorizations to have complete visibility across the process, facilitating traceability of goods (from the factory to its destination)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Leaner and more optimized logistics process:")," When the process relies on multiple stakeholders, technology adoption will most likely be disparate. Blockchain can provide an unfragmented and streamlined platform that replaces pen and paper and increase lean communication and processing of packages."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Improved efficiency and cost savings:")," By deploying smart contracts, blockchain can help cut costs automating processes related to paper filing and interacting with middlemen.")));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 91375:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/Supply-chain-infographic-40b5c95a96fe9bbccea93e51884b5544.png");

/***/ }),

/***/ 98535:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/blockchain-logistics-82986d4cc7314104bab824dcd6a99f1d.jpg");

/***/ }),

/***/ 42179:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/how-blockhain-works-b004f224ad05787954914e758e8c6fac.png");

/***/ })

}]);