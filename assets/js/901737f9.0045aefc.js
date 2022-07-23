"use strict";
(self["webpackChunkeoscostarica_io"] = self["webpackChunkeoscostarica_io"] || []).push([[1089],{

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

/***/ 97464:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": function() { return /* binding */ assets; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; },
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87462);
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
var _excluded=["components"];var frontMatter={slug:'gaming-blockchain',title:'Leveling Up the Gaming Industry with Blockchain',image:'/img/blog/gaming/gaming-cover.jpg',author:'Luis Diego Rojas',author_title:'Content Strategist',author_url:'https://twitter.com/ldrojas',author_image_url:'https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4',tags:['eosio','blockchain','gaming'],metaTitle:'EOS Costa Rica Blog: Leveling Up the Gaming Industry with Blockchain',metaDescription:'The video games industry has been evolving with new technologies. In this article, we explore how blockchain technology impacts the gaming industry.'};var contentTitle=undefined;var metadata={"permalink":"/blog/gaming-blockchain","editUrl":"https://github.com/eoscostarica/eoscostarica.io/edit/master/website/blog/blog/2020-12-09-blockchain-gaming.md","source":"@site/blog/2020-12-09-blockchain-gaming.md","title":"Leveling Up the Gaming Industry with Blockchain","description":"Leveling Up the Gaming Industry with Blockchain","date":"2020-12-09T00:00:00.000Z","formattedDate":"December 9, 2020","tags":[{"label":"eosio","permalink":"/blog/tags/eosio"},{"label":"blockchain","permalink":"/blog/tags/blockchain"},{"label":"gaming","permalink":"/blog/tags/gaming"}],"readingTime":7.695,"truncated":true,"authors":[{"name":"Luis Diego Rojas","title":"Content Strategist","url":"https://twitter.com/ldrojas","imageURL":"https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4"}],"prevItem":{"title":"How to Tell if Your Organization Needs Blockchain","permalink":"/blog/do-you-need-blockchain"},"nextItem":{"title":"A Rating System for EOS","permalink":"/blog/eos-rate"}};var assets={"authorsImageUrls":[undefined]};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Intro to the Gaming Industry',id:'intro-to-the-gaming-industry',children:[],level:2},{value:'What Is Blockchain?',id:'what-is-blockchain',children:[],level:2},{value:'How Blockchain Impacts Video Games?',id:'how-blockchain-impacts-video-games',children:[{value:'1. A Fairer Industry and Ecosystem',id:'1-a-fairer-industry-and-ecosystem',children:[],level:3},{value:'2. Better Digital Assets and Collectibles Management',id:'2-better-digital-assets-and-collectibles-management',children:[],level:3},{value:'3. Improved Security for Gamers',id:'3-improved-security-for-gamers',children:[],level:3},{value:'4. Faster Transaction Processing',id:'4-faster-transaction-processing',children:[],level:3}],level:2},{value:'Conclusion',id:'conclusion',children:[],level:2},{value:'<strong>Contact Us for More Information About Open-Source Blockchain</strong>',id:'contact-us-for-more-information-about-open-source-blockchain',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Leveling Up the Gaming Industry with Blockchain",src:(__webpack_require__(2138)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"intro-to-the-gaming-industry"},"Intro to the Gaming Industry"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Do you remember what was the first video game you played in your life? Was it Space Invaders, Super Mario Bros. on a NES, or The Sims? Either way, most likely you\u2019ve played video games more than once, be it on a console, PC, or a mobile phone between meetings or while queueing at the bank. Video games have kept us busy during leisure times and, most importantly, they\u2019ve become part of our lives. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"According to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.businessinsider.com/video-game-industry-120-billion-future-innovation-2019-9"},"Business Insider"),", \u201Cvideo games are more than just a booming entertainment business \u2014 they're reshaping the way we interact with the world.\u201D Experts forecast that by 2022, the gaming industry will produce $196 billion in revenue. Currently, there are ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.globenewswire.com/news-release/2020/07/16/2063071/0/en/3-5-Billion-Gamers-Globally-by-2024-but-Cloud-Gaming-Must-Evaluate-Business-Models-in-Order-to-Survive.html"},"2.5 billion gamers in the world"),", which suggests that 1 in 3 people play video games, and it might reach 3.5 million by 2024\u2013more than half of the total population."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"One of the cornerstones of the gaming industry is how revolutionary it has become, welcoming the most advanced technologies and innovations that include virtual reality (VR), augmented reality (AR), artificial intelligence (AI), and now, blockchain. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"what-is-blockchain"},"What Is Blockchain?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Blockchain is one of the new technologies part of the industry 4.0 and a foundational technology that can integrate into countless use cases. A blockchain is a decentralized ledger shared among a network of computers or \u201Cnodes\u201D to securely and immutably register data. The data is cryptographically stored and since there is no single point of failure, a blockchain is resistant to cyber attacks or hacking attempts. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Additionally, blockchain adds new layers of transparency, offering complete traceability of transactions that cannot be altered. Blockchain also enables the deployment of smart contracts, which are computer codes that can execute autonomously and automatically when meeting the contract\u2019s requirements, allowing more efficient transactions and cutting expenses related to transaction processing. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"To read more about blockchain technology, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/blog/what-is-blockchain"},"go here"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Leveling Up the Gaming Industry with Blockchain",src:(__webpack_require__(43879)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"how-blockchain-impacts-video-games"},"How Blockchain Impacts Video Games?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"1-a-fairer-industry-and-ecosystem"},"1. A Fairer Industry and Ecosystem"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The gaming industry involves many stakeholders. From game developers, to game publishers that oversee how a game reaches gamers. However, across this value chain, there are big opportunities for technologies like blockchain. Blockchain\u2019s capabilities have shown that it can improve trust and transparency when registering sensitive information and transactions."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"For instance, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.ey.com/en_gl/advisory/how-blockchain-helped-a-gaming-platform-become-a-game-changer"},"Microsoft XBox is reducing the operational costs")," of processing payments for creators by deploying smart contracts. Smart contracts enable Microsoft Xbox to encode game creators\u2019 IP rights, calculate royalties efficiently and transparently, and automate payment processing. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Another cool example is what ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://pixeos.io/"},"pixEOS")," is doing. The project deploys EOSIO technology and features an art gallery, a hub to experiment with user interfaces, and an avatar creator. It encourages gamification and uses blockchain-based tokens to interact with the platform. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Moreover, blockchain allows users to interact with decentralized, open-source gaming servers and claim ownership on their content. With this technology, there are countless possibilities to grow fair ecosystems in which content creators and gamers can lead their experience."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"2-better-digital-assets-and-collectibles-management"},"2. Better Digital Assets and Collectibles Management"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Blockchain technology allows the creation, management, and verification of digital assets. It enables ownership of these assets by anchoring it to a verified account. The owner can then either collect, trade, or sell the asset by deploying the same technology. What\u2019s interesting about digital assets in games is that gamers need these scarce items to complete missions or stand out. Either owning a better gun at any shooter, a special-edition skin to look fly in Fortnite, or just collecting art pieces in Animal Crossing: New Horizons, in-game items play a big part in the gaming experience."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"However, blockchain comes to solve issues such as the lack of accountability and transparency when managing digital assets. Let\u2019s remember these are virtual goods, so it\u2019s easy for game creators to just mass-produce these items and the player has no way to know if theirs are unique or not. So, are these collectibles actually as \u201Cspecial\u201D as we want to think they are?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Such is the use of ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://cointelegraph.com/magazine/nonfungible-tokens/#what-can-a-nft-represent"},"non-fungible tokens (NFTs)"),". NFTs are unique, rare, and indivisible cryptographic tokens representing crypto-collectibles, digital artwork, tickets to an event, or in-game items, among others. Perhaps the most known example of NFTs in gaming is ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.cryptokitties.co/"},"CryptoKitties"),", a game in which you can collect and breed digital cats. The platform deploys NFTs where each token has distinctive \u201Ccattributes,\u201D thus making each token special. When breeding cats with different features, the offspring would be rare and hence more exclusive than others. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Another great use case of blockchain is trading or selling these in-game assets outside of a game ecosystem. Game creators often work on enclosed ecosystems where trading outside of their virtual world is hard or impossible. This limitation has led to the creation of grey markets outside of their game environments. For example, blockchain can enable game developers and publishers to embed rules into their digital assets and try to build a profitable market that is better organized and safer for gamers. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"On the other hand, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://mythical.games/"},"Mythical Games")," is a games developer that deploys EOSIO blockchain technology. They recently released a private beta for ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://blankos.com/"},"Blankos"),", a game that leverages a social MMO-based gaming experience where the player owns their digital toys. The player can then create minigames, hang out with friends, and participate in challenges. Blankos uses NFTs to guarantee ownership of the characters and virtual objects, and even encourages an in-game market. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Additionally, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://immutable.com/"},"Immutable")," offers a platform that allows game developers to deploy blockchain technology into their games. Games such as ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://godsunchained.com/"},"Gods Unchained"),", a digital trading card game, are currently using this platform. Also, leading video games company ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.ubisoft.com/en-us/"},"Ubisoft")," is ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.ledgerinsights.com/ubisoft-launches-blockchain-collectibles-based-on-rabbids-franchise/"},"deploying NFTs"),". The company launched ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://rabbidstoken.ubisoft.com/"},"Rabbids Tokens")," to raise money for UNICEF through Rabbids tokens that can be traded like cards. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Moreover, blockchain technology can enhance the gamers\u2019 experience. ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://cointelegraph.com/news/what-attracts-investors-to-blockchain-gaming"},"Anatol Hooper from CoinTelegraph")," states that \u201CNFT\u2019s can be used to increase player engagement and improve the ARPPU (average revenue per paying user). Game publishers have been noticing that blockchain-enabled games produce much higher ARPPU metrics due to the greater perceived value by the user.\u201D "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"3-improved-security-for-gamers"},"3. Improved Security for Gamers"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"One of the core features of blockchain technology is enabling an environment where two strangers on the internet can interact with each and make transactions in a safe and trusty way. Blockchain is practically unhackable, becoming the safest way to store value, since there is no single point of failure."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"For example, IBM has been working on a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.coindesk.com/ibm-patent-blockchain-transaction-consensus-games"},"blockchain protocol for the gaming industry"),". This protocol can be implemented in games with a large user base such as Call of Duty, Warzone, and Fortnite. This blockchain is set to facilitate smart contracts and move it to the gaming server if the gamers have enough computing power. Moreover, it will facilitate transactions between unknown players verified by the peers connected to the network."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"4-faster-transaction-processing"},"4. Faster Transaction Processing"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"As previously mentioned, blockchain can help create a haven for transacting collectibles, tokens, and other digital assets among players. However, game developers must also ensure that the experience of exchanging these assets is as streamlined as possible. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Blockchain has ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.euromoney.com/learning/blockchain-explained/how-transactions-get-into-the-blockchain"},"demonstrated its ability")," to manage fast, secure transactions in trusty environments. The technology is capable of enabling authentication and automatization of transactions. These features can be replicated in the gaming industry and allow instant, cross-border payments without traditional methods restrictions. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"On this line, a notable example is what ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://cointelegraph.com/news/ubisoft-might-be-the-first-major-games-company-to-geek-out-over-blockchain"},"Ubisoft is doing along with Ultra"),", a gaming platform that deploys EOSIO blockchain technology that can be described as Steam on a blockchain. This innovative application of blockchain for gaming can enable users new groundbreaking features such as earning digital currency, buying games online and then reselling them among their peers. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Moreover, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.upland.me/"},"Upland")," offers an in-game economy that maps the real world and deploys blockchain and NFTs. Recently, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.globenewswire.com/news-release/2020/11/10/2124104/0/en/Upland-Launches-First-Virtual-Asset-Trading-of-NFTs-for-Fiat-in-Partnership-with-Second-Life-s-Payment-Network-Tilia-Pay.html"},"Upland launched")," the first virtual asset trading platform of NFTs for fiat money where players can put their digital properties on sale and withdraw USD directly to their personal account."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"conclusion"},"Conclusion"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"We\u2019re currently living a transformational time for the video games. It is shaping the future and innovating day by day. To no surprise, they are naturally implementing new technologies and blockchain is added to the equation. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"There currently is an initiative called the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://blockchaingamealliance.org/"},"Blockchain Game Alliance")," committed to promoting blockchain within the game industry with dozens of members worldwide. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Blockchain in video games is an exciting endeavor that is only getting started. From creating a fairer industry in which multiple stakeholders can interact in a safe environment to enhancing the overall gaming experience with NFTs and collectibles; blockchain is changing the rules of the game for the industry, and will continue to do so in the upcoming years!"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"contact-us-for-more-information-about-open-source-blockchain"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},"Contact Us for More Information About Open-Source Blockchain")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/"},"EOS Costa Rica")," operates since 2018. Our team develops blockchain-based solutions with great attention to detail in creating user-centered dapps for enterprise use. We also provide resources to the EOSIO infrastructure and promote the local EOSIO ecosystem. Let\u2019s talk about how you can implement this technology into your organization.\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/contact-us"},"Contact Us")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\xA0Follow us on social media:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://eoscostarica.io"},"Website")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://twitter.com/eoscostarica"},"Twitter")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://t.me/eoscr"},"Telegram")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.facebook.com/costaricaeos/"},"Facebook")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.linkedin.com/company/eoscostarica/"},"LinkedIn")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://medium.com/@eoscostarica"},"Medium"))));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 2138:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/gaming-cover-c82ff7a729821e5e376fa61ff4055905.jpg");

/***/ }),

/***/ 43879:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/gaming-photo-e84ed74f5eee00bb24d69edb87a923a4.jpg");

/***/ })

}]);