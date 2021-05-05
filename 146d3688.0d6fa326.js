(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/What-Is-Blockchain-68a39ca15ba886b32d20db714722d3bf.jpg");

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/How-blockchain-works-a213813abccd5d69b44e1df4b2f4ffeb.jpeg");

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/how-does-blockchain-work-9e360596a15e44b0f7d8c19ed5289905.png");

/***/ }),

/***/ 80:
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
var frontMatter={slug:'what-is-blockchain',title:'What Is Blockchain? A Quick Guide',image:'/img/blog/what-is-blockchain/What-Is-Blockchain.jpg',author:'Luis Diego Rojas',author_title:'Content Strategist',author_url:'https://twitter.com/ldrojas',author_image_url:'https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4',tags:['eosio','blockchain','enterprise blockchain','technology'],metaTitle:'EOS Costa Rica Blog: What Is Blockchain? A Quick Guide',metaDescription:'Learn what is blockchain and how to implement it to your organization. Blockchain may offer improved security, traceability, and efficiency to your company.',langPost:'https://es.eoscostarica.io/blog/que-es-blockchain'};var metadata={"permalink":"/blog/what-is-blockchain","editUrl":"https://github.com/eoscostarica/eoscostarica.io/edit/master/website/blog/blog/2020-04-15-what-is-blockchain.md","source":"@site/blog/2020-04-15-what-is-blockchain.md","description":"What Is Blockchain","date":"2020-04-15T00:00:00.000Z","tags":[{"label":"eosio","permalink":"/blog/tags/eosio"},{"label":"blockchain","permalink":"/blog/tags/blockchain"},{"label":"enterprise blockchain","permalink":"/blog/tags/enterprise-blockchain"},{"label":"technology","permalink":"/blog/tags/technology"}],"title":"What Is Blockchain? A Quick Guide","readingTime":5.56,"truncated":true,"prevItem":{"title":"A Rating System for EOS","permalink":"/blog/eos-rate"},"nextItem":{"title":"Blockchain in Logistics - Transforming an Industry","permalink":"/blog/blockchain-logistics"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'<strong>What is Blockchain?</strong>',id:'what-is-blockchain',children:[]},{value:'<strong>How a Blockchain Works?</strong>',id:'how-a-blockchain-works',children:[]},{value:'Beyond Blockchain',id:'beyond-blockchain',children:[]},{value:'<strong>Contact Us to Learn More About Blockchain.</strong>',id:'contact-us-to-learn-more-about-blockchain',children:[]},{value:'TL;DR',id:'tldr',children:[]}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"What Is Blockchain",src:__webpack_require__(511).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"what-is-blockchain"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"What is Blockchain?")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"Blockchain technology is becoming a game-changer for many industries"),", in part, for its security and transparency features. But first\u2026 what is blockchain?\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"A blockchain is a registry of data that acts as a decentralized ledger shared among various computers or \u201Cnodes\u201D to reliably and securely record transactions. So, the information of the transactions will register into a blockchain as \u201Cblocks\u201D of data. Then, these blocks will connect chronologically, forming some kind of \u201Cchain.\u201D\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"The security and trustworthiness of this technology lean mostly on its decentralization attributes. Each one of the nodes in a network contains a copy of this ledger. The nodes must verify and validate each transaction before it appends to the chain.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Also, a user can\u2019t erase or alter any record in a blockchain. In other words, a blockchain will only grow in size. So, to amend a record, a new transaction must be validated and added to the chain."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Each block must include the following information:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Information about the transactions. For example, date, time, and an amount."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Information about who is participating in the transaction. For instance, users or digital identities.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Distinctive information about the block, known as \u201Chash,\u201D which cannot be altered. A \u201Chash\u201D is a code created by a mathematical function that transforms data with variable lengths into a line of code with a specific length.\xA0")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"(TL;DR at the end of the article).")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"how-a-blockchain-works"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"How a Blockchain Works?")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"To better understand how a blockchain works, we can compare these decentralized ledgers to a domino game where the players are the nodes. This means that all the players have visibility on what happens on the board. Also, the nodes are aware that there is a set of rules for the game. For instance, a person cannot skip a turn or play a domino tile where it doesn\u2019t match, because the other players in charge of validation will eventually draw it back. In fact, that\u2019s the responsibility of the nodes in a network."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"How does blockchain work",src:__webpack_require__(753).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Likewise, blockchain technology allows decentralized registries of data. In particular, blockchain may enable the automatic and autonomous execution of transactions, meaning that now the users can manage their transactions directly and securely, cutting the middleman. How? The nodes must verify that everyone around the board (either anonymously or with know identities) plays by the rules. This is known as \u201Cconsensus.\u201D\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"For example, a logistics company may choose to assign the computer nodes to organizations across the supply chain, including tax authorities, ports, suppliers, and wholesalers. So, this will most likely increase trust among the parties because now all of them can validate each transaction and have visibility throughout the logistics process."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Additionally, when deploying blockchain, users can be anonymous or use a pseudonym. If so, the registries (the blocks) will remain cyphered to protect their privacy and security. Therefore, any transaction request that they make, be it, for example, sending cryptocurrencies, logging an accounting entry, or adding information to a medical record, must be verified and validated by the nodes.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"How does blockchain work",src:__webpack_require__(754).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Back to the domino example, let\u2019s say someone adds a new tile (a Block Producer) and, at the same time, the rest of the players close their eyes to not see who\u2019s playing. At the end of the turn, all the players open their eyes to validate the new tile."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Subsequently, after the majority of the players agree the transaction was valid, the block appends to the chain. At this point, the block will remain immutable and can no longer be changed or removed from the chain. Thus, the block is irreversible, evading any fraud or unauthorized changes."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"In summation, being a decentralized network adds layers of security to a blockchain. Additionally, each block is linked to its predecessor by a unique code known as a \u201Chash.\u201D This hash code represents the data in the block. The hash is fundamental for traceability purposes and for preventing cyberattacks. Accordingly, a hacker who\u2019s trying to modify data in a blockchain must try to hack all the hash codes in a chain, making it nearly impossible."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"In other words, back to the domino example, this might be a way to verify that the number in the tiles in a chain match following a logic order."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"beyond-blockchain"},"Beyond Blockchain"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Moreover, blockchain is well known for cryptocurrencies. However, blockchain is disrupting many industries worldwide. Blockchain platforms such as EOSIO, known for its flexibility and scalability, are using smart contracts to leverage the use of blockchain for enterprise solutions."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"In particular, smart contracts are codes programmed to execute automatically and autonomously when the requirements are met. For example, let\u2019s imagine two people are playing coin toss. They agree that if it lands heads, person A must pay person B $100","."," But, if it lands tails, person B must pay person A the same amount. There are no questions asked, as there are only two possible outcomes and they both have visibility of the truth. Hence, the same happens with a smart contract in a blockchain."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Some use cases of blockchain are:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Enterprise data solutions:")," Chile\u2019s ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://energiaabierta.cl/blockchain/que-es-blockchain/"},"Comisi\xF3n Nacional de Energ\xEDa"),"\xA0(National Energy Commission) launched a blockchain-based platform to keep registries of costs and price data."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Food traceability:")," Walmart started using blockchain to track perishable goods across the supply chain. ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://eoscostarica.io/blog/blockchain-logistics/"},"Read more about blockchain in logistics here"),".\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Government and open data:")," Dubai aims to become the first government in the world ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.forbes.com/sites/suparnadutt/2017/12/18/dubai-sets-sights-on-becoming-the-worlds-first-blockchain-powered-government/#4e4ad0d5454b"},"to run entirely on blockchain"),".\xA0")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"contact-us-to-learn-more-about-blockchain"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"Contact Us to Learn More About Blockchain.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/"},"EOS Costa Rica")," operates since 2018","."," Our team develops blockchain-based solutions with great attention to detail in creating user-centered dapps for enterprise use. We also provide resources to the EOSIO infrastructure and promote the local EOSIO ecosystem. Let\u2019s talk about how you can implement this technology into the operations of your organization.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/contact-us"},"Contact Us")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"\xA0Follow us on social media:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://eoscostarica.io"},"Website")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://twitter.com/eoscostarica"},"Twitter")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://t.me/eoscr"},"Telegram")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.facebook.com/costaricaeos/"},"Facebook")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.linkedin.com/company/eoscostarica/"},"LinkedIn")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://medium.com/@eoscostarica"},"Medium"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"tldr"},"TL;DR"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Blockchain technology offers improved security, transparency, privacy, traceability, and efficiency to companies and organizations.\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"A blockchain acts as a distributed ledger of information shared by a network of trusted computers that validate each new transaction before adding it to the registry. This \u201Cchain\u201D of data can only grow in size, meaning that to amend a record, a user must request a new transaction. This makes data in a blockchain practically unalterable and avoids human error when recording transactions."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Some use cases of this technology are:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ol",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ol"},"Securely and privately registering enterprise data. ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://medium.com/@eoscostarica/how-to-choose-an-enterprise-blockchain-platform-7c3665994ad6?source=your_stories_page---------------------------"},"Check this out here"),".\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ol"},"Improving traceability across supply chains. ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://eoscostarica.io/blog/blockchain-logistics/"},"Read more here.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ol"},"Increasing transparency and efficiency in governments and displaying open data.")));};MDXContent.isMDXComponent=true;

/***/ })

}]);