"use strict";
(self["webpackChunkwords_to_kick_your_teeth_out"] = self["webpackChunkwords_to_kick_your_teeth_out"] || []).push([[230],{

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

/***/ 7311:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export JsonLd */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1883);
const JsonLd=_ref=>{let{srcdoc}=_ref;const json=JSON.stringify(srcdoc);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__/* .Script */ .Xf,{type:"application/ld+json"},json);};/* harmony default export */ __webpack_exports__["Z"] = (JsonLd);

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

/***/ 6819:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Head": function() { return /* binding */ Head; },
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 10 modules
var gatsby_browser_entry = __webpack_require__(1883);
// EXTERNAL MODULE: ./src/hooks/use-site-metadata.js
var use_site_metadata = __webpack_require__(9622);
;// CONCATENATED MODULE: ./src/components/banner.module.css
// extracted by mini-css-extract-plugin
var banner = "banner-module--banner--89e9b";
;// CONCATENATED MODULE: ./src/components/banner.jsx
const Banner=()=>{const id=react.useId();const{title,description}=(0,use_site_metadata/* useSiteMetadata */.$)();return/*#__PURE__*/react.createElement("header",{className:banner,"aria-describedby":id},/*#__PURE__*/react.createElement("hgroup",null,/*#__PURE__*/react.createElement("h2",{id:id},title),/*#__PURE__*/react.createElement("p",null,description)),/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{type:"application/atom+xml",rel:"alternate",to:"/feed.xml"},"Subscribe")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/about"},"About the Author"))));};/* harmony default export */ var components_banner = (Banner);
// EXTERNAL MODULE: ./src/components/breadcrumbs.jsx + 1 modules
var breadcrumbs = __webpack_require__(5238);
// EXTERNAL MODULE: ./src/components/head-basic.jsx + 2 modules
var head_basic = __webpack_require__(4222);
// EXTERNAL MODULE: ./src/components/json-ld.jsx
var json_ld = __webpack_require__(7311);
// EXTERNAL MODULE: ./src/components/page.jsx + 1 modules
var page = __webpack_require__(8660);
;// CONCATENATED MODULE: ./src/hooks/use-post-list.js
const usePostList=()=>(0,gatsby_browser_entry/* useStaticQuery */.K2)("3841108931").allPost.nodes.map(n=>n.metadata);
;// CONCATENATED MODULE: ./src/components/post-list.jsx
const PostList=()=>{const posts=usePostList();return posts&&posts.length>0&&/*#__PURE__*/react.createElement("ol",{reversed:true},posts.map(_ref=>{let{slug,title}=_ref;return/*#__PURE__*/react.createElement("li",{key:slug},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:slug},title));}));};/* harmony default export */ var post_list = (PostList);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(5785);
// EXTERNAL MODULE: ./src/utils/search.js
var search = __webpack_require__(8472);
;// CONCATENATED MODULE: ./src/components/search.module.css
// extracted by mini-css-extract-plugin
var query = "search-module--query--42c00";
var search_module_search = "search-module--search--ed73a";
;// CONCATENATED MODULE: ./src/components/search.jsx
const Search=()=>{const id=react.useId();const titleId=id+"-title";const inputId=id+"-input";const onSubmit=event=>{event.preventDefault();(0,gatsby_browser_entry/* navigate */.c4)(search.search.apply(search,(0,toConsumableArray/* default */.Z)(new FormData(event.target))));};return/*#__PURE__*/react.createElement("form",{className:search_module_search,"aria-describedby":titleId,role:"search",rel:"search",action:"/search",onSubmit:onSubmit},/*#__PURE__*/react.createElement("header",{className:"sr-only"},/*#__PURE__*/react.createElement("hgroup",null,/*#__PURE__*/react.createElement("h2",{id:titleId},"Search"))),/*#__PURE__*/react.createElement("div",{className:query},/*#__PURE__*/react.createElement("label",{htmlFor:inputId},"Query"),/*#__PURE__*/react.createElement("input",{id:inputId,name:"s",type:"search",required:true}),/*#__PURE__*/react.createElement("button",{type:"submit"},"Search")));};/* harmony default export */ var components_search = (Search);
// EXTERNAL MODULE: ./src/components/sidebar.jsx + 1 modules
var sidebar = __webpack_require__(3615);
// EXTERNAL MODULE: ./src/components/title.jsx
var title = __webpack_require__(7585);
// EXTERNAL MODULE: ./src/hooks/use-absolute.js
var use_absolute = __webpack_require__(6262);
;// CONCATENATED MODULE: ./src/pages/index.jsx
const useJSON=()=>{const site=(0,use_site_metadata/* useSiteMetadata */.$)();const search=(0,use_absolute/* useAbsolute */.L)('/search');const index=(0,use_absolute/* useAbsolute */.L)('/');return{"@context":"https://schema.org","@type":"WebSite","name":site.title,"description":site.description,"url":index,"potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":search+"?s={s}"},"query-input":"required name=s"}};};const Head=_ref=>{let{location:{pathname}}=_ref;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(head_basic/* default */.Z,{pathname:pathname}),/*#__PURE__*/react.createElement(title/* default */.Z,null,"Table of Contents"),/*#__PURE__*/react.createElement("link",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"}));};const IndexPage=()=>{const id=react.useId();return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(page/* default */.Z,null,/*#__PURE__*/react.createElement("main",{"aria-describedby":id},/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement("hgroup",null,/*#__PURE__*/react.createElement("h1",{id:id},"Posts"))),/*#__PURE__*/react.createElement(post_list,null)),/*#__PURE__*/react.createElement(sidebar/* default */.Z,null,/*#__PURE__*/react.createElement(components_banner,null),/*#__PURE__*/react.createElement(components_search,null),/*#__PURE__*/react.createElement(breadcrumbs/* default */.Z,null,/*#__PURE__*/react.createElement("li",{"aria-current":"page"},"Home")))),/*#__PURE__*/react.createElement(json_ld/* default */.Z,{srcdoc:useJSON()}));};/* harmony default export */ var pages = (IndexPage);

/***/ }),

/***/ 8472:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": function() { return /* binding */ search; }
/* harmony export */ });
const search=function(){for(var _len=arguments.length,xs=new Array(_len),_key=0;_key<_len;_key++){xs[_key]=arguments[_key];}const p=new URLSearchParams(xs);return"/search?"+p;};

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-jsx-fc2fd7da17ed8f437a00.js.map