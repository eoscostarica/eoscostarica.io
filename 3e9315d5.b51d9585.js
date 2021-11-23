(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ 206:
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

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/blog_nftsbusiness-03a3d42b136ca0b7fe123d03fcacf404.jpg");

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toc", function() { return toc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(206);
var _excluded=["components"];var frontMatter={slug:'nfts-for-enterprise',title:'The Role of NFTs for Enterprise',image:'/img/blog/nfts-for-enterprise/blog_nftsbusiness.jpg',author:'Luis Diego Rojas',author_title:'Content Strategist',author_url:'https://twitter.com/ldrojas',author_image_url:'https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4',tags:['eosio','blockchain','blockchain technology','enterprise blockchain','nfts'],metaTitle:'EOS Costa Rica Blog: The Role of NFTs for Enterprise',metaDescription:'NFTs are transforming the arts and gaming spaces but can also change how we do businesses. Learn more about how NFTs will impact the enterprise world.'};var metadata={"permalink":"/blog/nfts-for-enterprise","editUrl":"https://github.com/eoscostarica/eoscostarica.io/edit/master/website/blog/blog/2021-04-22-nfts-for-enterprise.md","source":"@site/blog/2021-04-22-nfts-for-enterprise.md","description":"The Role of NFTs for Enterprise","date":"2021-04-22T00:00:00.000Z","tags":[{"label":"eosio","permalink":"/blog/tags/eosio"},{"label":"blockchain","permalink":"/blog/tags/blockchain"},{"label":"blockchain technology","permalink":"/blog/tags/blockchain-technology"},{"label":"enterprise blockchain","permalink":"/blog/tags/enterprise-blockchain"},{"label":"nfts","permalink":"/blog/tags/nfts"}],"title":"The Role of NFTs for Enterprise","readingTime":9.69,"truncated":true,"prevItem":{"title":"Official Launch of EOSIO Dashboard: EOSIO Networks Data Visualization","permalink":"/blog/eosio-dashboard-launch"},"nextItem":{"title":"How to Tell if Your Organization Needs Blockchain","permalink":"/blog/do-you-need-blockchain"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'NFTs Are Shaking the Digital Arts World',id:'nfts-are-shaking-the-digital-arts-world',children:[]},{value:'What Are NFTs?',id:'what-are-nfts',children:[]},{value:'What Is Blockchain?',id:'what-is-blockchain',children:[]},{value:'NFTs for Enterprise',id:'nfts-for-enterprise',children:[{value:'1. NFTs for Real Estate:',id:'1-nfts-for-real-estate',children:[]},{value:'2. NFTs for Patents and Intellectual Property:',id:'2-nfts-for-patents-and-intellectual-property',children:[]},{value:'3. NFTs for Legal and Insurance:',id:'3-nfts-for-legal-and-insurance',children:[]},{value:'4. NFTs for Supply Chain and Inventory Management:',id:'4-nfts-for-supply-chain-and-inventory-management',children:[]},{value:'5. NFTs for Digital Identity:',id:'5-nfts-for-digital-identity',children:[]},{value:'6. NFTs for Finance and Fundraising:',id:'6-nfts-for-finance-and-fundraising',children:[]}]},{value:'Final Takeaways',id:'final-takeaways',children:[]},{value:'Contact Us for More Information About Blockchain',id:'contact-us-for-more-information-about-blockchain',children:[]}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"The Role of NFTs for Enterprise",src:__webpack_require__(730).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"nfts-are-shaking-the-digital-arts-world"},"NFTs Are Shaking the Digital Arts World"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"On March 11th, 2021, a relatively unrecognized artist made history by ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://techcrunch.com/2021/03/11/beeples-69-million-nft-sale-marks-a-potentially-transformative-moment-for-the-art-world/"},"selling a digital art piece at US$69 million"),". This artwork, a digital collage of images called \u201CEveryday \u2013 The First 5000 Days,\u201D became the highest-selling NFT to date. In this digital art piece, Mike Winkelmann (known as the Beeple) chronicles seven years of daily sketches done by the artist, but what\u2019s most remarkable is how it is shaking the art world. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Beeple\u2019s historic achievement leveraged NFTs to certify true ownership of this digital asset. In that sense, Beeple transferred his artwork to the buyer, and even if it\u2019s in digital format, Beeple is no longer the owner of his work. The transfer was registered on the blockchain, immutably to certifying its new ownership. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{parentName:"p","src":"https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/blog/nfts-for-enterprise/How%20blockchain%20works.jpeg","alt":"How to blockchain works"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"What Beeple did is the same as in the physical world. A painter would sell the original artwork to a buyer and have no other means to claim ownership. The painter might keep the jars of paint and brushes, but the piece belongs now to the buyer. It\u2019s complicated thinking of this in the digital world. That\u2019s when NFTs and blockchain technology appeared to solve a very known problem in the digital art world. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"what-are-nfts"},"What Are NFTs?"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"NFTs (or non-fungible tokens) are unique, rare, and indivisible cryptographic tokens representing true ownership of a digital good. An NFT contains unique information from the asset that makes it distinguishable from other tokens. Since no two NFTs are the same, they cannot be exchanged with one another. For example, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.coindesk.com/what-are-nfts"},"NFTs are comparable")," to festival tickets, where each ticket has the purchaser\u2019s information, date of the event, and the venue. Since each token is unique and holds this distinctive data, it\u2019s virtually impossible to be traded with anyone else. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Also, NFTs live on a blockchain, so information such as ownership and the token\u2019s characteristics are easily verifiable, making it extremely difficult for fake or copied collectibles to circulate in the network. For instance, the buyer of Beeple\u2019s \u201CEveryday \u2013 The First 5000 Days\u201D is now registered as the valid owner of the art piece, and this cannot be altered unless the buyer decides to sell or transfer it again. This is similar to collecting physical art. If you buy a sculpture and place it in your living room, it is yours now, and you decide if you wish to send it to someone else. You wouldn\u2019t want to divide or multiply your sculpture. The same happens with NFTs. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"what-is-blockchain"},"What Is Blockchain?"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"The way a blockchain transaction works impacts how these NFTs solve many of the digital arts\u2019 problems. If you\u2019re not familiar with what blockchain is and how it works, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/blog/what-is-blockchain"},"this article we published")," is a great way to start. In a few words, a typical blockchain transaction begins when a user performing a transaction (either of value or registering a new record) asks for validation. The transaction must be validated by a peer-to-peer network and is presented as a block of information. Once the users in the network approve the transaction because it complies with the terms, the new block is added to the chain with a unique hash code identifying it. Once it is registered in the blockchain, it cannot be altered or revoked. If a user wants to make a change, a new transaction must be requested."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"In that sense, blockchain represents an opportunistic way to certify the validity of a transaction. For example, blockchain is slowly doing the job of notarizing documents more straightforward and keeping complete traceability of transactions across the supply chain. In the case of NFTs, it then makes sense that we can register ownership certificates of these art collectibles in a blockchain. That way, we will be able to verify who\u2019s the actual owner of, for instance, Beeple\u2019s \u201CEveryday \u2013 The First 5000 Days.\u201D"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Beeple\u2019s sale is far from being the only use case of NFTs. Besides art, some of the most popular use cases of NFTs include:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Gaming: Games such as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.cryptokitties.co/"},"Cryptokitties"),", which lets a user collect and breed digital cats represented as NFTs with distinctive attributes, are using this technology. When breeding two cats with different features, their offspring would be rare and more exclusive. NFTs for games enable players to collect digital assets and blur the line between the virtual and the real worlds. Another example is ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://axieinfinity.com/"},"Axie Infinity"),", where a user can collect creatures to battle, build, and hunt for in-game treasure."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Collectibles: Similar to use cases in games, NFTs enable collectors to buy, sell, and trade digital collectibles such as tokenized versions of athletes\u2019 and celebrities\u2019 cards. Platforms such as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://nbatopshot.com/"},"NBA TopShot")," or ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://terravirtua.io/"},"Terra Virtua")," leverage the scarcity and uniqueness of NFTs to offer a vibrant marketplace on the blockchain."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Virtual worlds: Platforms such as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.sandbox.game/en/"},"The Sandbox")," or ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.upland.me/"},"Upland")," create a metaverse where players own the digital assets used to create virtual worlds. A user can create, own, and monetize their virtual land and other digital assets within a community of players.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"nfts-for-enterprise"},"NFTs for Enterprise"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Once we understand the reach of NFTs and how they can certify data with a rich user experience, it is possible to imagine other uses. For instance, if we can verify the ownership of an art piece or an athlete\u2019s virtual card, wouldn\u2019t this technology help us manage documentation? The following are some thoughts on use cases that can happen in the enterprise environment with the increasing popularity of NFTs:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"1-nfts-for-real-estate"},"1. NFTs for Real Estate:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Going back to the examples of The Sandbox and Upland, a user can own and monetize parcels of virtual land. Wouldn\u2019t it make sense also to certify ownership of real properties? NFTs can create a seamless system to transfer ownership, and we can translate this to how real estate documentation is processed. ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.forbes.com/sites/nataliakarayaneva/2021/04/08/nfts-work-for-digital-art-they-also-work-perfectly-for-real-estate/?sh=e29f6ac43f33"},"NFTs can transform")," the real estate industry on several touchpoints across a transaction. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"NFTs and blockchain can allow users to register a transaction using a significantly less amount of paperwork. Users can even reduce costs and processing times by cutting the middlemen such as notaries. Owners can tokenize their properties and validate their ownership using a blockchain, where no one can alter or delete their registry. Then, a transaction is executed between two parties (a seller and a buyer and it can be validated truthfully by a network of computers. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"2-nfts-for-patents-and-intellectual-property"},"2. NFTs for Patents and Intellectual Property:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Recently, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.cnbc.com/2021/04/20/its-no-nba-top-shot-or-beeple-but-ibm-is-making-patent-nfts.html"},"IBM said they\u2019ve been working")," on bringing intellectual property and corporate patents to the blockchain. Along with IP specialist firm ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://ipwe.com/"},"IPwe"),", they will start representing patents as NFTs. Through this, they plan to store information on a blockchain network to increase transparency and provide a better way to engage and transact patents. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"On the other hand, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"ttps://bluebox.info/nft/"},"Bluebox")," is a platform that enables artists to monetize their music differently. The platform turns real-world assets such as music rights into NFTs. Owners can then track and withdraw their royalties earnings directly from their accounts. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"3-nfts-for-legal-and-insurance"},"3. NFTs for Legal and Insurance:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"NFTs are a safe and seamless way to register legal information. Imagine that each contract is a digital asset. Instead of printing and signing by hand an agreement, you will digitally sign them and store them on a blockchain as NFTs. The contract is unique and will belong to you. There are hundreds of uses for NFTs in this space. From insurance documents to labor agreements, NFTs can help digitize negotiations. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Moreover, NFTs can serve to certify ownership and origin of products. For example, an NFT can hold information about fashion, technology devices, or medicines to minimize counterfeiters. It can also ensure traceability and accountability of these goods and allow better trust between the seller and end customer. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"4-nfts-for-supply-chain-and-inventory-management"},"4. NFTs for Supply Chain and Inventory Management:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"NFTs can store any kind of information and register it immutably into a blockchain. The logistics and supply chain industries require large amounts of data to be registered and shared with precise transparency and trust among many parties. Blockchain and NFTs can help to create unique identifiers for each parcel or item, making them fully traceable in real-time. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"An Indian company called ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.koinearth.com/"},"KoineArth")," recently released MarketsN, an NFT-as-a-service platform for supply chain management. According to their website, MarketsN \u201Cenables you to create a digital twin of your value chain with just a few clicks creating a cost advantage over competitors who rely on traditional IT.\u201D "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Our company, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/"},"EOS Costa Rica"),", is currently developing a solution for the health industry. It will trace supplies using NFTs and EOSIO blockchain technology by registering identifiers into the network. The solution offers better visibility and trust across its supply chain, keeping track of existing inventory in real-time. It\u2019s currently under development, and we hope to share further details shortly. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"5-nfts-for-digital-identity"},"5. NFTs for Digital Identity:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Blockchain has ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://publications.iadb.org/publications/english/document/Self-Sovereign-Identity-The-Future-of-Identity-Self-Sovereignity-Digital-Wallets-and-Blockchain.pdf"},"demostrated its potential")," as a powerful technology to register and secure digital identities. Now, NFTs can help tokenize identities to expand their use cases. For instance, think of proofs of membership to a club or event. Members can be able to own their digital identity cards and keep their information intact. They may disclose their identity to enter or access a VIP section while maintaining their privacy. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Also, NFTs can become the future of national ID cards. Everyone will own their private information and will be able to manage what data to share and what data to keep confidential while connected to a blockchain ecosystem that can verify its authenticity. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"6-nfts-for-finance-and-fundraising"},"6. NFTs for Finance and Fundraising:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"With the advancements of DeFi (decentralized finance), NFTs can also see new opportunities to reach more users. For example, NFTs can help collateralize tangible assets by tokenizing them into the blockchain. It seems that Uniswap, a well-known DEX (decentralized exchange), will start using NFTs as proof of liquidity. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Moreover, the popularity of NFTs among users buying and collecting them may represent new opportunities for crowdfunding organizations or activities. For instance, our team is working on ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"http://ggoods.io/"},"gGoods"),", a platform that enables non-profits to create their NFTs and making them available on a marketplace to fundraise their operations. Then, the patrons may use their NFTs as in-game assets to play games or on other apps such as AR cameras or geolocation maps. It\u2019s currently under development but will launch officially soon. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"final-takeaways"},"Final Takeaways"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"NFTs have proved their potential to seamlessly register data unique to a digital asset into a blockchain and offer an outstanding user experience. Apart from the prevalent examples in the art world, such as Beeple\u2019s \u201CEveryday \u2013 The First 5000 Days,\u201D there are relevant use cases in games, collectibles, and creating virtual worlds. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"However, there are still many exciting opportunities in the corporate and enterprise space to be explored. For instance, NFTs can transform how we register legal documents, sell and buy real estate, or file patents and intellectual property. Also, NFTs represent a great way to keep track of inventory and supply chain processes in real-time, manage digital identities on the blockchain, and play a role in financial transactions. Only time will tell how NFTs will transform life as we know it."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"contact-us-for-more-information-about-blockchain"},"Contact Us for More Information About Blockchain"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"EOS Costa Rica operates since 2018. Our team develops blockchain-based solutions with great attention to detail in creating user-centered dapps for enterprise use. We also provide resources to the EOSIO infrastructure and promote the local EOSIO ecosystem. Let\u2019s talk about how you can implement this technology into your organization."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/contact-us"},"Contact Us")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"}," Follow us on social media:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://eoscostarica.io"},"Website")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://twitter.com/eoscostarica"},"Twitter")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://t.me/eoscr"},"Telegram")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.facebook.com/costaricaeos/"},"Facebook")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.linkedin.com/company/eoscostarica/"},"LinkedIn")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://medium.com/@eoscostarica"},"Medium"))));};MDXContent.isMDXComponent=true;

/***/ })

}]);