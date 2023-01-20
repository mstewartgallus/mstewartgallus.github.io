"use strict";
(self["webpackChunkwords_to_kick_your_teeth_out"] = self["webpackChunkwords_to_kick_your_teeth_out"] || []).push([[400],{

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

/***/ 7122:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ Caesura; }
/* harmony export */ });
const Caesura=()=>'\u2009\u2014\u2009';/* harmony default export */ __webpack_exports__["Z"] = (Caesura);

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

/***/ 8749:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H1": function() { return /* binding */ H1; },
/* harmony export */   "H2": function() { return /* binding */ H2; },
/* harmony export */   "H3": function() { return /* binding */ H3; },
/* harmony export */   "H4": function() { return /* binding */ H4; },
/* harmony export */   "H5": function() { return /* binding */ H5; },
/* harmony export */   "H6": function() { return /* binding */ H6; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1883);
const Hn=props=>{const level=props.level;switch(level){case 1:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",props,props.children);case 2:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",props,props.children);case 3:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",props,props.children);case 4:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",props,props.children);case 5:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5",props,props.children);case 6:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6",props,props.children);default:throw new Error("level > 6 "+level);};};const HnAutolink=props=>{const textId=react__WEBPACK_IMPORTED_MODULE_0__.useId();const{id,children}=props;if(!id){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Hn,props,children);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Hn,props,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{role:"presentation",id:textId},children),"\u2003",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU,{to:"#"+id,"aria-describedby":textId},"#"));};const H1=props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HnAutolink,Object.assign({},props,{level:1}),props.children);const H2=props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HnAutolink,Object.assign({},props,{level:2}),props.children);const H3=props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HnAutolink,Object.assign({},props,{level:3}),props.children);const H4=props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HnAutolink,Object.assign({},props,{level:4}),props.children);const H5=props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HnAutolink,Object.assign({},props,{level:5}),props.children);const H6=props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HnAutolink,Object.assign({},props,{level:6}),props.children);

/***/ }),

/***/ 7311:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export JsonLd */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1883);
const JsonLd=_ref=>{let{srcdoc}=_ref;const json=JSON.stringify(srcdoc);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__/* .Script */ .Xf,{type:"application/ld+json"},json);};/* harmony default export */ __webpack_exports__["Z"] = (JsonLd);

/***/ }),

/***/ 4472:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_l; }
});

// UNUSED EXPORTS: L

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/l.module.css
// extracted by mini-css-extract-plugin
var l = "l-module--l--9f372";
;// CONCATENATED MODULE: ./src/components/l.jsx
// FIXME rm last break
const L=_ref=>{let{children}=_ref;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("span",{role:"presentation",className:l},children),/*#__PURE__*/react.createElement("br",null));};/* harmony default export */ var components_l = (L);

/***/ }),

/***/ 1045:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_lg; }
});

// UNUSED EXPORTS: Lg

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/lg.module.css
// extracted by mini-css-extract-plugin
var lg = "lg-module--lg--87b8f";
;// CONCATENATED MODULE: ./src/components/lg.jsx
const Lg=_ref=>{let{children}=_ref;return/*#__PURE__*/react.createElement("p",{className:lg},children);};/* harmony default export */ var components_lg = (Lg);

/***/ }),

/***/ 8691:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_metadata; }
});

// UNUSED EXPORTS: Metadata

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 10 modules
var gatsby_browser_entry = __webpack_require__(1883);
// EXTERNAL MODULE: ./src/utils/search.js
var search = __webpack_require__(8472);
;// CONCATENATED MODULE: ./src/components/metadata.module.css
// extracted by mini-css-extract-plugin
var metadata = "metadata-module--metadata--eee65";
;// CONCATENATED MODULE: ./src/components/metadata.jsx
const Place=_ref=>{let{place}=_ref;const to=(0,search.search)(['place',place]);return/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:to,rel:"tag","data-pagefind-filter":"place"},place);};const PlaceList=_ref2=>{let{places}=_ref2;return places&&places.length>0&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,"Place"),places.map(p=>/*#__PURE__*/react.createElement("dd",{key:p},/*#__PURE__*/react.createElement(Place,{place:p}))));};const Tag=_ref3=>{let{tag}=_ref3;const to=(0,search.search)(['tag',tag]);return/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:to,rel:"tag","data-pagefind-filter":"tag"},tag);};const TagList=_ref4=>{let{tags}=_ref4;return tags&&tags.length>0&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,"Tag"),tags.map(t=>/*#__PURE__*/react.createElement("dd",{key:t},/*#__PURE__*/react.createElement(Tag,{tag:t}))));};const Person=_ref5=>{let{person}=_ref5;const to=(0,search.search)(['person',person]);return/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:to,rel:"tag","data-pagefind-filter":"person"},person);};const PeopleList=_ref6=>{let{people}=_ref6;return people&&people.length>0&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,"People"),people.map(p=>/*#__PURE__*/react.createElement("dd",{key:p},/*#__PURE__*/react.createElement(Person,{person:p}))));};const Metadata=_ref7=>{let{dateDisplay,dateXml,author,places,tags,people}=_ref7;const id=react.useId();return/*#__PURE__*/react.createElement("footer",{className:metadata,"aria-describedby":id},/*#__PURE__*/react.createElement("hgroup",{className:"sr-only"},/*#__PURE__*/react.createElement("h2",{id:id},"Metadata")),/*#__PURE__*/react.createElement("dl",null,/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,"Post Date"),/*#__PURE__*/react.createElement("dd",null,/*#__PURE__*/react.createElement("time",{"data-pagefind-filter":"date[datetime]","data-pagefind-sort":"date[datetime]",dateTime:dateXml},dateDisplay))),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{rel:"author",to:author.url},"Author")),/*#__PURE__*/react.createElement("dd",null,author.name)),/*#__PURE__*/react.createElement(PlaceList,{places:places}),/*#__PURE__*/react.createElement(TagList,{tags:tags}),/*#__PURE__*/react.createElement(PeopleList,{people:people})));};/* harmony default export */ var components_metadata = (Metadata);

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

/***/ 8306:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_paging; }
});

// UNUSED EXPORTS: Paging

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 10 modules
var gatsby_browser_entry = __webpack_require__(1883);
;// CONCATENATED MODULE: ./src/components/paging.module.css
// extracted by mini-css-extract-plugin
var paging = "paging-module--paging--da478";
;// CONCATENATED MODULE: ./src/components/paging.jsx
const Prev=_ref=>{let{children,href}=_ref;return href&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:href},"Previous")),/*#__PURE__*/react.createElement("dd",null,children));};const Next=_ref2=>{let{children,href}=_ref2;return href&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("dt",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:href},"Next")),/*#__PURE__*/react.createElement("dd",null,children));};const Paging=_ref3=>{let{previous,next,phref,nhref}=_ref3;const id=react.useId();return/*#__PURE__*/react.createElement("nav",{className:paging,"aria-labelledby":id},/*#__PURE__*/react.createElement("header",{className:"sr-only"},/*#__PURE__*/react.createElement("hgroup",null,/*#__PURE__*/react.createElement("h2",{id:id},"Paging"))),/*#__PURE__*/react.createElement("dl",null,/*#__PURE__*/react.createElement(Prev,{href:phref},/*#__PURE__*/react.createElement("cite",null,previous)),/*#__PURE__*/react.createElement(Next,{href:nhref},/*#__PURE__*/react.createElement("cite",null,next))));};/* harmony default export */ var components_paging = (Paging);

/***/ }),

/***/ 6793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export Poem */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _caesura_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7122);
/* harmony import */ var _l_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4472);
/* harmony import */ var _lg_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1045);
// FIXME haz to be a better method of keying
const Poem=_ref=>{let{poem}=_ref;return poem.map((stanza,stanzano)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lg_jsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{key:stanzano},stanza.map((line,lineno)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_l_jsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{key:stanzano+"-"+lineno},line.map((segment,segno)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:stanzano+"-"+lineno+"-"+segno},segno>0&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_caesura_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null),segment))))));};/* harmony default export */ __webpack_exports__["Z"] = (Poem);

/***/ }),

/***/ 1884:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export SeoPost */
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _json_ld_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7311);
const blogPosting=_ref=>{let{title,date,author,category,tags,people,places}=_ref;return{"@context":"https://schema.org","@type":"BlogPosting","headline":title,"datePublished":date,"author":[{"@type":"Person","name":author.name,"url":author.url}],"articleSection":category,"keywords":tags,"character":people,"contentLocation":places};};const breadcrumbs=_ref2=>{let{title,category,slug}=_ref2;const uricat=encodeURIComponent(category);return{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"/"},{"@type":"ListItem","position":2,"name":category,"item":"/search/?category="+uricat},{"@type":"ListItem","position":3,"name":title,"item":slug}]};};const SeoPost=props=>{const{date,category,tags,people,places}=props;// {{ page.date | date: "%Y-%m-%d" }}"
// <meta property="og:article:author" content="{{ author.name | escape }}" />
const allTags=[category].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(people),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(tags),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(places));return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:type",content:"article"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:article:published_time",content:date}),allTags.map(tag=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:article:tag",content:tag})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_json_ld_jsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{srcdoc:breadcrumbs(props)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_json_ld_jsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{srcdoc:blogPosting(props)}));};/* harmony default export */ __webpack_exports__["Z"] = (SeoPost);

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

/***/ 4373:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": function() { return /* binding */ Head; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1151);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1883);
/* harmony import */ var _components_breadcrumbs_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5238);
/* harmony import */ var _components_caesura_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7122);
/* harmony import */ var _components_heading_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8749);
/* harmony import */ var _components_head_basic_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4222);
/* harmony import */ var _components_l_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4472);
/* harmony import */ var _components_lg_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1045);
/* harmony import */ var _components_metadata_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8691);
/* harmony import */ var _components_page_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8660);
/* harmony import */ var _components_paging_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8306);
/* harmony import */ var _components_poem_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6793);
/* harmony import */ var _components_seo_post_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1884);
/* harmony import */ var _components_sidebar_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3615);
/* harmony import */ var _components_title_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7585);
/* harmony import */ var _utils_search_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8472);
const Category=_ref=>{let{category}=_ref;const to=(0,_utils_search_js__WEBPACK_IMPORTED_MODULE_14__.search)(['category',category]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU,{to:to,rel:"tag","data-pagefind-filter":"category"},category);};const Notice=_ref2=>{let{notice}=_ref2;return notice&&notice.length>0&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dl",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt",null,"Notice"),notice.map(n=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd",{key:n},n))));};const shortcodes={Lg: _components_lg_jsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,L: _components_l_jsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,Caesura: _components_caesura_jsx__WEBPACK_IMPORTED_MODULE_15__/* .Caesura */ .F,H1: _components_heading_jsx__WEBPACK_IMPORTED_MODULE_3__.H1,H2: _components_heading_jsx__WEBPACK_IMPORTED_MODULE_3__.H2,H3: _components_heading_jsx__WEBPACK_IMPORTED_MODULE_3__.H3,H4: _components_heading_jsx__WEBPACK_IMPORTED_MODULE_3__.H4,H5: _components_heading_jsx__WEBPACK_IMPORTED_MODULE_3__.H5,H6: _components_heading_jsx__WEBPACK_IMPORTED_MODULE_3__.H6};const poem={ul:_components_lg_jsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,li:_components_l_jsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z};const autolinkHeadings={h1:_components_heading_jsx__WEBPACK_IMPORTED_MODULE_3__.H1,h2:_components_heading_jsx__WEBPACK_IMPORTED_MODULE_3__.H2,h3:_components_heading_jsx__WEBPACK_IMPORTED_MODULE_3__.H3,h4:_components_heading_jsx__WEBPACK_IMPORTED_MODULE_3__.H4,h5:_components_heading_jsx__WEBPACK_IMPORTED_MODULE_3__.H5,h6:_components_heading_jsx__WEBPACK_IMPORTED_MODULE_3__.H6};const defaultComponents={...shortcodes,...autolinkHeadings};const components={"Poem":{...defaultComponents,...poem},"Prose":defaultComponents,"Web":defaultComponents};const Content=_ref3=>{let{category,content,children}=_ref3;const type=content.__typename;switch(type){case'MdxContent':return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__/* .MDXProvider */ .Zo,{components:components[category]},children);case'PoemContent':return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_poem_jsx__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,{poem:content.body});default:throw new Error("unknown type: "+type);}};const author={name:"Molly Stewart-Gallus",url:"/about/"};const Head=_ref4=>{let{location:{pathname},data:{post}}=_ref4;const{title,dateXml,category,tags,places,people}=post.metadata;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_head_basic_jsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{pathname:pathname}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_title_jsx__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo_post_jsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{title:title,date:dateXml,author:author,category:category,tags:tags,people:people,places:places}));};const BlogPost=_ref5=>{var _previous$metadata,_next$metadata,_previous$metadata2,_next$metadata2;let{children,data:{post:{previous,next,content,metadata:{category,dateXml,dateDisplay,title,subtitle,notice,tags,places,people}}}}=_ref5;const id=react__WEBPACK_IMPORTED_MODULE_0__.useId();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_page_jsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{"data-pagefind-body":true,"aria-describedby":id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hgroup",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{id:id},title),subtitle&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,subtitle)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Notice,{notice:notice})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Content,{category:category,content:content},children)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sidebar_jsx__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_paging_jsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{previous:previous===null||previous===void 0?void 0:(_previous$metadata=previous.metadata)===null||_previous$metadata===void 0?void 0:_previous$metadata.title,next:next===null||next===void 0?void 0:(_next$metadata=next.metadata)===null||_next$metadata===void 0?void 0:_next$metadata.title,phref:previous===null||previous===void 0?void 0:(_previous$metadata2=previous.metadata)===null||_previous$metadata2===void 0?void 0:_previous$metadata2.slug,nhref:next===null||next===void 0?void 0:(_next$metadata2=next.metadata)===null||_next$metadata2===void 0?void 0:_next$metadata2.slug}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_metadata_jsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{author:author,dateDisplay:dateDisplay,dateXml:dateXml,tags:tags,places:places,people:people}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_breadcrumbs_jsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU,{to:"/"},"Home")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Category,{category:category})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{"aria-current":"page"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("cite",null,title)))));};/* harmony default export */ __webpack_exports__["default"] = (BlogPost);const pageQuery="3271620454";

/***/ }),

/***/ 8472:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": function() { return /* binding */ search; }
/* harmony export */ });
const search=function(){for(var _len=arguments.length,xs=new Array(_len),_key=0;_key<_len;_key++){xs[_key]=arguments[_key];}const p=new URLSearchParams(xs);return"/search?"+p;};

/***/ }),

/***/ 1151:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "ah": function() { return /* binding */ useMDXComponents; }
/* harmony export */ });
/* unused harmony exports MDXContext, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode} [children]
 *   Children.
 *
 * @callback MergeComponents
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return React.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components|MergeComponents} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)
  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  let allComponents = useMDXComponents(components)

  if (disableParentContext) {
    allComponents = components || emptyObject
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ })

}]);
//# sourceMappingURL=component---src-templates-post-jsx-a01a2aee9bc232e4b582.js.map