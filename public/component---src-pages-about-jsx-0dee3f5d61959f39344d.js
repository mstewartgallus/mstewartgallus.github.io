"use strict";
(self["webpackChunkwords_to_kick_your_teeth_out"] = self["webpackChunkwords_to_kick_your_teeth_out"] || []).push([[354],{

/***/ 5238:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_breadcrumbs; }
});

// UNUSED EXPORTS: Breadcrumbs

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/breadcrumbs.module.css
// extracted by mini-css-extract-plugin
var breadcrumb = "breadcrumbs-module--breadcrumb--6b8cf";
var breadcrumbs = "breadcrumbs-module--breadcrumbs--e2995";
;// CONCATENATED MODULE: ./src/components/breadcrumbs.jsx
const Breadcrumbs=_ref=>{let{children}=_ref;const id=react.useId();return/*#__PURE__*/react.createElement("nav",{className:breadcrumbs,"aria-labelledby":id},/*#__PURE__*/react.createElement("header",{className:"sr-only"},/*#__PURE__*/react.createElement("hgroup",null,/*#__PURE__*/react.createElement("h2",{id:id},"Breadcrumbs"))),/*#__PURE__*/react.createElement("ol",{className:breadcrumb},children));};/* harmony default export */ var components_breadcrumbs = (Breadcrumbs);

/***/ }),

/***/ 4222:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ head_basic; }
});

// UNUSED EXPORTS: HeadBasic

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/hooks/use-site-metadata.js
var use_site_metadata = __webpack_require__(9622);
;// CONCATENATED MODULE: ./src/assets/favicon.svg
/* harmony default export */ var favicon = ("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K");
;// CONCATENATED MODULE: ./src/components/seo-basic.jsx
const author={name:"Molly Stewart-Gallus",url:"/about"};const SeoBasic=_ref=>{let{url}=_ref;const site=(0,use_site_metadata/* useSiteMetadata */.$)();return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("link",{rel:"canonical",href:url}),/*#__PURE__*/react.createElement("meta",{name:"description",content:site.description}),/*#__PURE__*/react.createElement("meta",{name:"og:site_name",content:site.title}),/*#__PURE__*/react.createElement("meta",{property:"og:image",content:favicon}),/*#__PURE__*/react.createElement("meta",{property:"og:url",content:url}),/*#__PURE__*/react.createElement("meta",{property:"og:description",content:site.description}),/*#__PURE__*/react.createElement("link",{rel:"author",href:author.url}),/*#__PURE__*/react.createElement("meta",{name:"author",content:author.name}),/*#__PURE__*/react.createElement("meta",{property:"og:profile",content:author.name}),/*#__PURE__*/react.createElement("meta",{property:"og:profile:username",content:author.name}));};/* harmony default export */ var seo_basic = (SeoBasic);
// EXTERNAL MODULE: ./src/hooks/use-absolute.js
var use_absolute = __webpack_require__(6262);
;// CONCATENATED MODULE: ./src/components/head-basic.jsx
const HeadBasic=_ref=>{let{pathname}=_ref;const url=(0,use_absolute/* useAbsolute */.L)(pathname);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("link",{rel:"icon",href:favicon}),/*#__PURE__*/react.createElement("meta",{name:"color-scheme",content:"light dark"}),/*#__PURE__*/react.createElement("meta",{name:"theme-color",content:"#6000A0"}),/*#__PURE__*/react.createElement(seo_basic,{url:url}));};/* harmony default export */ var head_basic = (HeadBasic);

/***/ }),

/***/ 8660:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_page; }
});

// UNUSED EXPORTS: Page

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/page.module.css
// extracted by mini-css-extract-plugin
var page = "page-module--page--acc67";
;// CONCATENATED MODULE: ./src/components/page.jsx
const Page=_ref=>{let{children}=_ref;return/*#__PURE__*/react.createElement("div",{className:page},children);};/* harmony default export */ var components_page = (Page);

/***/ }),

/***/ 3615:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_sidebar; }
});

// UNUSED EXPORTS: Sidebar

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/sidebar.module.css
// extracted by mini-css-extract-plugin
var sidebar = "sidebar-module--sidebar--ac64c";
;// CONCATENATED MODULE: ./src/components/sidebar.jsx
const Sidebar=_ref=>{let{children}=_ref;return/*#__PURE__*/react.createElement("div",{className:sidebar},children);};/* harmony default export */ var components_sidebar = (Sidebar);

/***/ }),

/***/ 7585:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export Title */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _hooks_use_site_metadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9622);
const Title=_ref=>{let{children}=_ref;let title=(0,_hooks_use_site_metadata_js__WEBPACK_IMPORTED_MODULE_1__/* .useSiteMetadata */ .$)().title;if(children!==null){title=children+"\u2009\u2014\u2009"+title;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:title}));};/* harmony default export */ __webpack_exports__["Z"] = (Title);

/***/ }),

/***/ 6262:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ useAbsolute; }
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1883);
const useMetadata=()=>(0,gatsby__WEBPACK_IMPORTED_MODULE_0__/* .useStaticQuery */ .K2)("1271460761").site.siteMetadata;const useAbsolute=pathname=>{const site=useMetadata();return new URL(pathname,site.siteUrl).toString();};

/***/ }),

/***/ 9622:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ useSiteMetadata; }
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1883);
const useSiteMetadata=()=>(0,gatsby__WEBPACK_IMPORTED_MODULE_0__/* .useStaticQuery */ .K2)("3000541721").site.siteMetadata;

/***/ }),

/***/ 2700:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": function() { return /* binding */ Head; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1883);
/* harmony import */ var _components_breadcrumbs_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5238);
/* harmony import */ var _components_head_basic_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4222);
/* harmony import */ var _components_page_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8660);
/* harmony import */ var _components_sidebar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3615);
/* harmony import */ var _components_title_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7585);
const Head=_ref=>{let{location:{pathname}}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_head_basic_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{pathname:pathname}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_title_jsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,null,"About the Author"));};const Content=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"My pen name is ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{role:"presentation",translate:"no"},"Molossus Spondee"),". This is my personal blog mostly for posting silly poetry. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dl",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt",null,"About the Author"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd",null,"Molossus Spondee")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"mailto:molossusspondee@gmail.com"},"Email")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd",null,"molossusspondee@gmail.com")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{rel:"me",href:"https://mastodon.lol/@MSpondee"},"Mastodon")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd",null,"@MSpondee@mastodon.lol")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://twitter.com/MSpondee"},"Twitter")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd",null,"@MSpondee")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://github.com/mstewartgallus"},"GitHub")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd",null,"mstewartgallus")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://www.linkedin.com/in/mstewartgallus"},"LinkedIn")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd",null,"mstewartgallus"))));const AboutPage=()=>{const id=react__WEBPACK_IMPORTED_MODULE_0__.useId();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_page_jsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{"aria-describedby":id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hgroup",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{id:id},"About the Author"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Content,null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sidebar_jsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_breadcrumbs_jsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU,{to:"/"},"Home")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{"aria-current":"page"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("cite",null,"About the Author")))));};/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-about-jsx-0dee3f5d61959f39344d.js.map