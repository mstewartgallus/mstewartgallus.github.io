"use strict";
(self["webpackChunkwords_to_kick_your_teeth_out"] = self["webpackChunkwords_to_kick_your_teeth_out"] || []).push([[256],{

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

/***/ 7291:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": function() { return /* binding */ Head; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _components_head_basic_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4222);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1883);
/* harmony import */ var _components_page_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8660);
/* harmony import */ var _components_sidebar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3615);
/* harmony import */ var _components_title_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7585);
const Head=_ref=>{let{location:{pathname}}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_head_basic_jsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{pathname:pathname}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_title_jsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,null,"Not found"));};const NotFoundPage=()=>{const id=react__WEBPACK_IMPORTED_MODULE_0__.useId();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_page_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{"aria-describedby":id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hgroup",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{id:id},"Page not found"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Sorry we couldn\u2019t find what you were looking for.",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"/"},"Go home"),".")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sidebar_jsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,null));};/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-404-jsx-94109d79bf682e62f669.js.map