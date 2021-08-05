(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(26);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js + 4 modules
var makeStyles = __webpack_require__(802);

// CONCATENATED MODULE: ./node_modules/@material-ui/styles/esm/styled/styled.js









function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
} // styled-components's API removes the mapping between components and styles.
// Using components as a low-level styling construct can be simpler.


function styled_styled(Component) {
  var componentCreator = function componentCreator(style) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var name = options.name,
        stylesOptions = Object(objectWithoutProperties["a" /* default */])(options, ["name"]);

    if (false) {}

    var classNamePrefix = name;

    if (false) { var displayName; }

    var stylesOrCreator = typeof style === 'function' ? function (theme) {
      return {
        root: function root(props) {
          return style(Object(esm_extends["a" /* default */])({
            theme: theme
          }, props));
        }
      };
    } : {
      root: style
    };
    var useStyles = Object(makeStyles["a" /* default */])(stylesOrCreator, Object(esm_extends["a" /* default */])({
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var filterProps;
    var propTypes = {};

    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }
    /* eslint-disable react/forbid-foreign-prop-types */


    if (style.propTypes) {
      propTypes = style.propTypes;
      delete style.propTypes;
    }
    /* eslint-enable react/forbid-foreign-prop-types */


    var StyledComponent = /*#__PURE__*/react_default.a.forwardRef(function StyledComponent(props, ref) {
      var children = props.children,
          classNameProp = props.className,
          clone = props.clone,
          ComponentProp = props.component,
          other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "className", "clone", "component"]);

      var classes = useStyles(props);
      var className = Object(clsx_m["a" /* default */])(classes.root, classNameProp);
      var spread = other;

      if (filterProps) {
        spread = omit(spread, filterProps);
      }

      if (clone) {
        return /*#__PURE__*/react_default.a.cloneElement(children, Object(esm_extends["a" /* default */])({
          className: Object(clsx_m["a" /* default */])(children.props.className, className)
        }, spread));
      }

      if (typeof children === 'function') {
        return children(Object(esm_extends["a" /* default */])({
          className: className
        }, spread));
      }

      var FinalComponent = ComponentProp || Component;
      return /*#__PURE__*/react_default.a.createElement(FinalComponent, Object(esm_extends["a" /* default */])({
        ref: ref,
        className: className
      }, spread), children);
    });
     false ? undefined : void 0;

    if (false) {}

    hoist_non_react_statics_cjs_default()(StyledComponent, Component);
    return StyledComponent;
  };

  return componentCreator;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/defaultTheme.js
var defaultTheme = __webpack_require__(257);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/styled.js




var styles_styled_styled = function styled(Component) {
  var componentCreator = styled_styled(Component);
  return function (style, options) {
    return componentCreator(style, Object(esm_extends["a" /* default */])({
      defaultTheme: defaultTheme["a" /* default */]
    }, options));
  };
};

/* harmony default export */ var styles_styled = __webpack_exports__["a"] = (styles_styled_styled);

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(208);
/* harmony import */ var _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(733);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(568);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(569);
var styles=_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* StyleSheet */ "e"].create({page:{backgroundColor:'white',padding:50},header:{height:'80px',marginBottom:'30px',flexDirection:'row'},headerLeft:{flexDirection:'column',width:"30%"},headerRight:{width:"70%",flexDirection:'column'},headerText:{width:'100%',fontFamily:'Helvetica',fontWeight:'normal',textAlign:'right',fontSize:13},headerTextBold:{width:'100%',fontFamily:'Helvetica-Bold',fontWeight:'bold',textAlign:'right',fontSize:13},image:{width:'100%'},subHeader:{marginBottom:'30px'},pointBox:{borderWidth:2,borderColor:'black',padding:10,marginBottom:'30px'},textPointsBold:{fontFamily:'Helvetica-Bold',fontWeight:'bold',textAlign:'left',fontSize:13},h1:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:25,marginBottom:'10px'},p:{fontFamily:'Helvetica',fontWeight:'normal',textAlign:'justify',fontSize:12,lineHeight:1.5},linkText:{color:'#0091FF',textDecoration:'none'},paragraphSection:{marginBottom:'10px'},actionButtons:{display:'flex',flexDirection:'row',alignItems:'flex-start',marginBottom:'30px'},mainButton:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:15,backgroundColor:'#5484b3',width:'150px',color:'white',textDecoration:'none',padding:'20px'},socialButtonsBox:{marginTop:'10px',marginBottom:'25px',width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center'},socialButtonsBoxRigth:{marginTop:'10px',marginBottom:'25px',width:'100%',flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end'},socialButton:{flexDirection:'column',width:'23px',height:'23px',marginRight:'15px'},h2:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:18,marginBottom:'15px'},h3:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:12,marginBottom:'10px'},section:{marginBottom:' 20px'},titleSection:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:13,marginBottom:'10px'},spacingBox:{marginBottom:'15px'},footer:{position:'absolute',bottom:50,left:50}});var FormPDF=function FormPDF(_ref){var isMobile=_ref.isMobile,formQuestions=_ref.formQuestions,blockchainPoints=_ref.blockchainPoints,companyName=_ref.companyName,companyIndustry=_ref.companyIndustry,companyEmail=_ref.companyEmail,twitterImage=_ref.twitterImage,linkedinImage=_ref.linkedinImage,MediumImage=_ref.MediumImage,GitHubImage=_ref.GitHubImage,InstramImage=_ref.InstramImage,YoutubeImage=_ref.YoutubeImage;var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),between81and100=_useState[0],setBetween81and100=_useState[1];var _useState2=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),between51and80=_useState2[0],setBetween50and80=_useState2[1];var _useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),lessThan50=_useState3[0],setLessThan50=_useState3[1];var _useState4=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),date=_useState4[0],setDate=_useState4[1];Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(blockchainPoints<50)setLessThan50(true);else if(blockchainPoints>=50&&blockchainPoints<=80)setBetween50and80(true);else setBetween81and100(true);},[blockchainPoints]);Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(!date){var _date=new Date();var options={year:'numeric',month:'long',day:'numeric'};setDate(_date.toLocaleDateString('en-US',options));}},[date]);var interpretPunctuation=function interpretPunctuation(points){if(points===1)return"Not an issue at all";else if(points===2)return"Not a priority";else if(points===3)return"Neutral";else if(points===4)return"It may be a priority";else if(points===5)return"Definitely a priority";else return"Undefined";};var MyDoc=function MyDoc(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Document */ "a"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Page */ "d"],{style:styles.page},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.header},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.headerLeft},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"],{src:"https://eoscostarica.io/img/logos/eoscr-logo.png",style:styles.image})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.headerRight},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.headerTextBold},companyName),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.headerText},date),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.headerText},companyEmail))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.subHeader},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.h1},"Do you Need Blockchain?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:[styles.p,{marginBottom:"10px"}]},"Thank you for completing the form. We designed this tool to help innovation leaders or IT professionals to analyze if their organizations will benefit from implementing blockchain technology."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},"The tool is a reference and the responses provided do not mean any kind of representation of any warranty regarding the accuracy or validity of the information and your decision's completeness. Our team built this template in good faith, and we expect you to make good use of it. If you have any questions, ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},"contact us")," directly or join our ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{src:"https://t.me/eoscr",style:styles.linkText},"Telegram channel")," ")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.h2},"Final Results"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},"You completed the form and obtained ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.textPointsBold}," ",blockchainPoints," /120 points"),".")),between81and100&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.pointBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:[styles.h3,{marginBottom:"10px"}]},"Blockchain is for you!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},"Your organization must consider implementing blockchain technology. Your team should benefit from having an efficient, secure, and trustworthy registry of data. The stakeholders and users will probably notice the improvements, which will benefit the organization in the long term. If you\u2019re considering this, contact us, and we can help you get started.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.textPointsBold},"Drop us a line!"))),between51and80&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.pointBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:[styles.h3,{marginBottom:"10px"}]},"Blockchain might be on the horizon for you!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},"It seems like your organization is very close to benefiting from blockchain technology, but there are still some minor details to take into consideration. We advise you to continue doing your research and weigh pain points vs. possible solutions for deploying blockchain. If you have questions about this, we would happily answer your inquires \u2013 no strings attached!")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.textPointsBold},"Let\u2019s schedule a call"))),lessThan50&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.pointBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:[styles.h3,{marginBottom:"10px"}]},"Blockchain is not the right fit for you at the moment but we can make it work. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},"Don\u2019t lose hope! Your organization can probably stick to centralized databases in the meantime, but you should consider switching to a decentralized blockchain later. We suggest you keep an eye on new advancements regarding blockchain technology, and hopefully, soon, you can benefit from implementing a BaaS (blockchain-as-a-service) platform. Follow us to keep up to date on news about blockchain and ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},"contact us")," if you have any questions..")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.footer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},"Follow us on social media for more updates and resources about blockchain. Also, ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{style:styles.linkText,src:"https://eoscostarica.io/blog/"},"read our blog")," and find more content about blockchain and EOSIO, use cases, and success stories.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.socialButtonsBoxRigth},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{src:"https://github.com/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"],{src:GitHubImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{src:"https://twitter.com/EOSCostaRica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"],{src:twitterImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{src:"https://www.linkedin.com/company/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"],{src:linkedinImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{src:"https://medium.com/@eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"],{src:MediumImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{src:"https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"],{src:YoutubeImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{src:"https://www.instagram.com/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"],{src:InstramImage}))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Page */ "d"],{style:styles.page},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:[styles.paragraphSection,{marginBottom:"20px"}]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.h2},"Your answers"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},"To find the questions corresponding to your answers, visit the ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{style:styles.linkText,src:"http://eoscostarica.io/do-you-need-blockchain"},"form page"),".")),formQuestions.map(function(section){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{key:section.title,style:styles.section},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.titleSection},section.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:[styles.p,{marginBottom:10}]},section.description),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],null,section.questions.map(function(item,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},section.index+1,".",i+1," - ",interpretPunctuation(item.value)));})));})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Page */ "d"],{style:styles.page},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:[styles.paragraphSection,{marginBottom:"20px"}]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.h2},"Final Words"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},"Thank you for using our tool! We hope it will come in handy when analyzing whether your organization can benefit from implementing blockchain technology. We\u2019re continuously looking for feedback. So, if you wish to share it with us, please ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},"contact us")," directly or join our ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{style:styles.linkText,src:"https://t.me/eoscr"},"Telegram channel"),".")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},"Please, visit these links for additional resources or information about our company:")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{style:styles.linkText,src:"https://eoscostarica.io/blog/what-is-blockchain"},"- What is blockchain?")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{style:styles.linkText,src:"https://eoscostarica.io/the-company/"},"- Read more about EOS Costa Rica.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{style:styles.linkText,src:"https://eoscostarica.io/press/"},"- What the media says about us.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{style:styles.linkText,src:"https://guide.eoscostarica.io/"},"- Developers guides.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{style:styles.linkText,src:"https://github.com/eoscostarica"},"- Our GitHub profile."))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:[styles.footer,{width:"100%"}]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "f"],{style:[styles.p,{position:'absolute',left:0,top:25}]},"Created by EOS Costa Rica, v.1, 2021")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* View */ "g"],{style:styles.socialButtonsBoxRigth},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{src:"https://github.com/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"],{src:GitHubImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{src:"https://twitter.com/EOSCostaRica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"],{src:twitterImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{src:"https://www.linkedin.com/company/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"],{src:linkedinImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{src:"https://medium.com/@eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"],{src:MediumImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{src:"https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"],{src:YoutubeImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "c"],{src:"https://www.instagram.com/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "b"],{src:InstramImage}))))));};var generatePdfDocument=/*#__PURE__*/function(){var _ref2=Object(_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(/*#__PURE__*/_home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(documentData){var blob;return _home_runner_work_eoscostarica_io_eoscostarica_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__[/* pdf */ "h"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MyDoc,null)).toBlob();case 2:blob=_context.sent;Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(blob,companyName+"_do_you_need_blockchain?");case 4:case"end":return _context.stop();}}},_callee);}));return function generatePdfDocument(_x){return _ref2.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{className:isMobile?"centerBox":""},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{className:"buttonPrimary",onClick:generatePdfDocument},"Download file"));};FormPDF.propTypes={formQuestions:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,blockchainPoints:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,companyName:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,companyIndustry:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,companyEmail:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,twitterImage:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,linkedinImage:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string};FormPDF.defaultProps={formQuestions:[]};/* harmony default export */ __webpack_exports__["default"] = (FormPDF);

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: styleFunction

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(264);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/merge.js
var merge = __webpack_require__(341);

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/styleFunctionSx.js






function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

var warnedOnce = false;

function styleFunctionSx(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var output = styleFunction(props);

    if (props.css) {
      return Object(esm_extends["a" /* default */])({}, Object(merge["a" /* default */])(output, styleFunction(Object(esm_extends["a" /* default */])({
        theme: props.theme
      }, props.css))), omit(props.css, [styleFunction.filterProps]));
    }

    if (props.sx) {
      return Object(esm_extends["a" /* default */])({}, Object(merge["a" /* default */])(output, styleFunction(Object(esm_extends["a" /* default */])({
        theme: props.theme
      }, props.sx))), omit(props.sx, [styleFunction.filterProps]));
    }

    return output;
  };

  newStyleFunction.propTypes =  false ? undefined : {};
  newStyleFunction.filterProps = ['css', 'sx'].concat(Object(toConsumableArray["a" /* default */])(styleFunction.filterProps));
  return newStyleFunction;
}
/**
 *
 * @deprecated
 * The css style function is deprecated. Use the `styleFunctionSx` instead.
 */


function css(styleFunction) {
  if (false) {}

  return styleFunctionSx(styleFunction);
}
/* harmony default export */ var esm_styleFunctionSx = (styleFunctionSx);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/compose.js



function compose() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var fn = function fn(props) {
    return styles.reduce(function (acc, style) {
      var output = style(props);

      if (output) {
        return Object(merge["a" /* default */])(acc, output);
      }

      return acc;
    }, {});
  }; // Alternative approach that doesn't yield any performance gain.
  // const handlers = styles.reduce((acc, style) => {
  //   style.filterProps.forEach(prop => {
  //     acc[prop] = style;
  //   });
  //   return acc;
  // }, {});
  // const fn = props => {
  //   return Object.keys(props).reduce((acc, prop) => {
  //     if (handlers[prop]) {
  //       return merge(acc, handlers[prop](props));
  //     }
  //     return acc;
  //   }, {});
  // };


  fn.propTypes =  false ? undefined : {};
  fn.filterProps = styles.reduce(function (acc, style) {
    return acc.concat(style.filterProps);
  }, []);
  return fn;
}

/* harmony default export */ var esm_compose = (compose);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(424);

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/style.js




function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce(function (acc, item) {
    return acc && acc[item] ? acc[item] : null;
  }, obj);
}

function style_style(options) {
  var prop = options.prop,
      _options$cssProperty = options.cssProperty,
      cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty,
      themeKey = options.themeKey,
      transform = options.transform;

  var fn = function fn(props) {
    if (props[prop] == null) {
      return null;
    }

    var propValue = props[prop];
    var theme = props.theme;
    var themeMapping = getPath(theme, themeKey) || {};

    var styleFromPropValue = function styleFromPropValue(propValueFinal) {
      var value;

      if (typeof themeMapping === 'function') {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || propValueFinal;
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;

        if (transform) {
          value = transform(value);
        }
      }

      if (cssProperty === false) {
        return value;
      }

      return Object(defineProperty["a" /* default */])({}, cssProperty, value);
    };

    return Object(breakpoints["a" /* handleBreakpoints */])(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  false ? undefined : {};
  fn.filterProps = [prop];
  return fn;
}

/* harmony default export */ var esm_style = (style_style);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/borders.js



function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return "".concat(value, "px solid");
}

var border = esm_style({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
var borderTop = esm_style({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
var borderRight = esm_style({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
var borderBottom = esm_style({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
var borderLeft = esm_style({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
var borderColor = esm_style({
  prop: 'borderColor',
  themeKey: 'palette'
});
var borderRadius = esm_style({
  prop: 'borderRadius',
  themeKey: 'shape'
});
var borders = esm_compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);
/* harmony default export */ var esm_borders = (borders);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/display.js


var displayPrint = esm_style({
  prop: 'displayPrint',
  cssProperty: false,
  transform: function transform(value) {
    return {
      '@media print': {
        display: value
      }
    };
  }
});
var displayRaw = esm_style({
  prop: 'display'
});
var overflow = esm_style({
  prop: 'overflow'
});
var textOverflow = esm_style({
  prop: 'textOverflow'
});
var visibility = esm_style({
  prop: 'visibility'
});
var whiteSpace = esm_style({
  prop: 'whiteSpace'
});
/* harmony default export */ var display = (esm_compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace));
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/flexbox.js


var flexBasis = esm_style({
  prop: 'flexBasis'
});
var flexDirection = esm_style({
  prop: 'flexDirection'
});
var flexWrap = esm_style({
  prop: 'flexWrap'
});
var justifyContent = esm_style({
  prop: 'justifyContent'
});
var alignItems = esm_style({
  prop: 'alignItems'
});
var alignContent = esm_style({
  prop: 'alignContent'
});
var order = esm_style({
  prop: 'order'
});
var flex = esm_style({
  prop: 'flex'
});
var flexGrow = esm_style({
  prop: 'flexGrow'
});
var flexShrink = esm_style({
  prop: 'flexShrink'
});
var alignSelf = esm_style({
  prop: 'alignSelf'
});
var justifyItems = esm_style({
  prop: 'justifyItems'
});
var justifySelf = esm_style({
  prop: 'justifySelf'
});
var flexbox = esm_compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
/* harmony default export */ var esm_flexbox = (flexbox);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/grid.js


var gridGap = esm_style({
  prop: 'gridGap'
});
var gridColumnGap = esm_style({
  prop: 'gridColumnGap'
});
var gridRowGap = esm_style({
  prop: 'gridRowGap'
});
var gridColumn = esm_style({
  prop: 'gridColumn'
});
var gridRow = esm_style({
  prop: 'gridRow'
});
var gridAutoFlow = esm_style({
  prop: 'gridAutoFlow'
});
var gridAutoColumns = esm_style({
  prop: 'gridAutoColumns'
});
var gridAutoRows = esm_style({
  prop: 'gridAutoRows'
});
var gridTemplateColumns = esm_style({
  prop: 'gridTemplateColumns'
});
var gridTemplateRows = esm_style({
  prop: 'gridTemplateRows'
});
var gridTemplateAreas = esm_style({
  prop: 'gridTemplateAreas'
});
var gridArea = esm_style({
  prop: 'gridArea'
});
var grid = esm_compose(gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
/* harmony default export */ var esm_grid = (grid);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/positions.js


var position = esm_style({
  prop: 'position'
});
var zIndex = esm_style({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
var positions_top = esm_style({
  prop: 'top'
});
var right = esm_style({
  prop: 'right'
});
var bottom = esm_style({
  prop: 'bottom'
});
var left = esm_style({
  prop: 'left'
});
/* harmony default export */ var positions = (esm_compose(position, zIndex, positions_top, right, bottom, left));
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/palette.js


var color = esm_style({
  prop: 'color',
  themeKey: 'palette'
});
var bgcolor = esm_style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
var palette = esm_compose(color, bgcolor);
/* harmony default export */ var esm_palette = (palette);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/shadows.js

var boxShadow = esm_style({
  prop: 'boxShadow',
  themeKey: 'shadows'
});
/* harmony default export */ var shadows = (boxShadow);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/sizing.js



function sizing_transform(value) {
  return value <= 1 ? "".concat(value * 100, "%") : value;
}

var width = esm_style({
  prop: 'width',
  transform: sizing_transform
});
var maxWidth = esm_style({
  prop: 'maxWidth',
  transform: sizing_transform
});
var minWidth = esm_style({
  prop: 'minWidth',
  transform: sizing_transform
});
var height = esm_style({
  prop: 'height',
  transform: sizing_transform
});
var maxHeight = esm_style({
  prop: 'maxHeight',
  transform: sizing_transform
});
var minHeight = esm_style({
  prop: 'minHeight',
  transform: sizing_transform
});
var sizeWidth = esm_style({
  prop: 'size',
  cssProperty: 'width',
  transform: sizing_transform
});
var sizeHeight = esm_style({
  prop: 'size',
  cssProperty: 'height',
  transform: sizing_transform
});
var boxSizing = esm_style({
  prop: 'boxSizing'
});
var sizing = esm_compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ var esm_sizing = (sizing);
// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/spacing.js + 1 modules
var spacing = __webpack_require__(803);

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/typography.js


var fontFamily = esm_style({
  prop: 'fontFamily',
  themeKey: 'typography'
});
var fontSize = esm_style({
  prop: 'fontSize',
  themeKey: 'typography'
});
var fontStyle = esm_style({
  prop: 'fontStyle',
  themeKey: 'typography'
});
var fontWeight = esm_style({
  prop: 'fontWeight',
  themeKey: 'typography'
});
var letterSpacing = esm_style({
  prop: 'letterSpacing'
});
var lineHeight = esm_style({
  prop: 'lineHeight'
});
var textAlign = esm_style({
  prop: 'textAlign'
});
var typography = esm_compose(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
/* harmony default export */ var esm_typography = (typography);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/styled.js + 1 modules
var styled = __webpack_require__(369);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js


var Box_styleFunction = esm_styleFunctionSx(esm_compose(esm_borders, display, esm_flexbox, esm_grid, positions, esm_palette, shadows, esm_sizing, spacing["b" /* default */], esm_typography));
/**
 * @ignore - do not document.
 */

var Box = Object(styled["a" /* default */])('div')(Box_styleFunction, {
  name: 'MuiBox'
});
/* harmony default export */ var Box_Box = __webpack_exports__["a"] = (Box);

/***/ })

}]);