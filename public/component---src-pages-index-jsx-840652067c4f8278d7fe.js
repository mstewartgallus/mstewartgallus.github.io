"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[230],{7311:function(e,n,r){r.d(n,{h:function(){return o}});var t=r(7294),s=r(5893);const o=e=>{let{srcdoc:n}=e;const r=(0,t.useMemo)((()=>JSON.stringify(n)),[n]);return(0,s.jsx)("script",{type:"application/ld+json",children:r})}},2980:function(e,n,r){r.d(n,{i:function(){return c}});var t=r(3274),s=r(9622),o=r(7294);var l=r(5893);const i=e=>{const n=(e=>{let{description:n,url:r,title:t}=e;const l=(0,s.$)();return(0,o.useMemo)((()=>({og:{site_name:l.title,title:t,description:null!=n?n:l.description,url:r}})),[l,n,r,t])})(e);return Array.from(function*(){for(const[e,r,s]of(0,t.x)(n))yield(0,l.jsx)("meta",{property:r,content:s},e)}())},c=e=>{const{description:n,url:r}=e,t=(0,s.$)();return(0,l.jsxs)(l.Fragment,{children:[r&&(0,l.jsx)("link",{rel:"canonical",href:r}),(0,l.jsx)("meta",{name:"description",content:null!=n?n:t.description}),(0,l.jsx)(i,{...e})]})}},7585:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(7294),s=r(1883),o=r(2164);const l=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const l=(0,s.K2)("3159585216");return(0,t.useMemo)((()=>{const{title:e}=l.site.siteMetadata;return[].concat(n,[e]).join(o.k)}),[l,n])}},5460:function(e,n,r){r.d(n,{H1:function(){return i}});var t=r(7294),s=r(7831),o=r(5893);const l=(e,n)=>{var r,t;return(0,o.jsx)(s.H1,{...e,id:null!==(r=e.id)&&void 0!==r?r:"content",tabIndex:null!==(t=e.tabIndex)&&void 0!==t?t:"-1",ref:n})},i=(0,t.forwardRef)(l)},6342:function(e,n,r){r.d(n,{G:function(){return i}});var t=r(6960),s=r(7020),o=r(5893);const l=e=>{const{target:n,key:r,keyCode:t,isComposing:s}=e;s||229===t||"Escape"!==r&&"Esc"!==r&&27!==t||(e.preventDefault(),n.blur())},i=e=>(0,o.jsx)(s.A,{className:"skip-a-module--content--a0860",id:"skip-link",href:"#content",onKeyDown:l,...e,ref:t.rp})},2394:function(e,n,r){r.d(n,{v:function(){return p}});var t=r(7294),s=r(7256),o=r(5973),l=r(4218),i=r(9422),c=r(7831),u=r(8088),a=r(5893);const d=e=>{let{children:n,sidebar:r}=e;return(0,a.jsxs)("div",{className:"sidebar-layout-module--page--78026",children:[(0,a.jsx)("div",{className:"sidebar-layout-module--mainbar--3fedd",children:n}),(0,a.jsx)("div",{className:"sidebar-layout-module--sidebar--13a2a",children:r})]})};var f=r(6205),h=r(9860),m=r(5460);const x=e=>{let{children:n,breadcrumbs:r}=e;return(0,a.jsxs)(a.Fragment,{children:[n,(0,a.jsx)(s.E,{children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(i.J,{heading:(0,a.jsx)(c.H2,{tabIndex:"-1",id:"breadcrumbs",children:"Breadcrumbs"}),children:r})})})]})},p=e=>{let{children:n,heading:r,skipA:s,subheading:i,notice:c,mainbar:p,sidebar:j,breadcrumbs:b}=e;const v=(0,t.useRef)(),g=(0,t.useCallback)((()=>{v.current.scrollIntoView()}),[]),y=(0,o.m8)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{ref:v}),(0,a.jsx)(u.Q,{children:(0,a.jsxs)("div",{className:"page-module--layout--995d4",children:[(0,a.jsx)("div",{className:"page-module--header--8b54c",children:s}),(0,a.jsxs)(d,{sidebar:(0,a.jsx)(x,{breadcrumbs:b,children:j}),children:[(0,a.jsx)(l.Z,{children:(0,a.jsxs)("main",{"data-pagefind-body":"","aria-describedby":"content",children:[(0,a.jsxs)("header",{children:[(0,a.jsxs)(f.h,{children:[(0,a.jsx)(m.H1,{children:r}),i]}),c]}),n]})}),p]}),(0,a.jsx)("div",{className:y?"page-module--footer--381d6":"page-module--hide--70878",inert:y?null:"inert",children:(0,a.jsx)(h.z,{type:"button",onClick:g,children:"Back to Top"})})]})})]})}},5929:function(e,n,r){r.d(n,{o:function(){return l}});var t=r(7294),s=r(5893);const o=(e,n)=>{let{children:r,...t}=e;return(0,s.jsx)("search",{ref:n,role:"search",...t,children:r})},l=(0,t.forwardRef)(o)},285:function(e,n,r){r.d(n,{I:function(){return c}});var t=r(5785),s=r(7294),o=r(1883);const l="/search",i=function(e,n){return void 0===n&&(n=[]),n.map((n=>[e,n]))},c=e=>{const{s:n,category:r,tag:c,place:u,person:a}=null!=e?e:{};return(0,s.useMemo)((()=>{const e=[].concat((0,t.Z)(n?["s",n]:[]),(0,t.Z)(i("category",r)),(0,t.Z)(i("tag",c)),(0,t.Z)(i("place",u)),(0,t.Z)(i("person",a))),s=String(new URLSearchParams(e)),d=""===s?l:`${l}?${s}`;return(0,o.dq)(d)}),[n,r,c,u,a])}},7020:function(e,n,r){r.d(n,{A:function(){return y}});var t=r(4846),s=r(7294),o=r(1883);const l={mouseover:!1,focus:!1,near:!1},i=(e,n)=>{switch(n){case"near":return{...e,near:!0};case"far":return{...e,near:!1};case"mouseover":return{...e,mouseover:!0};case"mouseout":return{...e,mouseover:!1};case"focus":return{...e,focus:!0};case"blur":return{...e,focus:!1};default:return e}},c={threshold:1},u=new Map,a=new Map,d=e=>{let{target:n,isIntersecting:r,intersectionRatio:t}=e;if(r||t>0){const e=u.get(n);null==e||e()}else{const e=a.get(n);null==e||e()}},f=e=>{for(const n of e)d(n)};let h=null;const m=(e,n,r,t)=>{let{signal:s}=t;const o=(()=>{if(h)return h;if(!window)return null;const{IntersectionObserver:e}=window;return e?(h=new e(f,c),h):null})();if(!o)return;let l=!1;s.addEventListener("abort",(()=>{l=!0,o.unobserve(e),u.delete(e),a.delete(e)}),{passive:!0}),u.set(e,(()=>{l||n()})),a.set(e,(()=>{l||r()})),o.observe(e)};var x=r(5893);const p=(e,n)=>{const{onClick:r,onFocus:t,onBlur:c,onMouseOver:u,onMouseOut:a}=e,d=(0,s.useRef)(),{href:f}=e,[{hover:h,near:p},{focus:j,blur:b,mouseOver:v,mouseOut:g,near:y,far:C}]=(()=>{const{1:e}=(0,s.useTransition)(),{0:{mouseover:n,focus:r,near:t},1:o}=(0,s.useReducer)(i,l);return[{hover:n||r,near:t},{far:(0,s.useCallback)((()=>e((()=>o("far")))),[]),near:(0,s.useCallback)((()=>e((()=>o("near")))),[]),mouseOver:(0,s.useCallback)((()=>e((()=>o("mouseover")))),[]),mouseOut:(0,s.useCallback)((()=>e((()=>o("mouseout")))),[]),focus:(0,s.useCallback)((()=>e((()=>o("focus")))),[]),blur:(0,s.useCallback)((()=>e((()=>o("blur")))),[])}]})(),w=(0,s.useCallback)((async e=>{null==r||r(e);const{defaultPrevented:n,altKey:t,metaKey:s,shiftKey:l,ctrlKey:i,button:c}=e;n||0===c&&(t||s||l||i||(e.preventDefault(),await(0,o.c4)(f)))}),[r,f]),k=(0,s.useCallback)((e=>{v(),null==u||u(e)}),[u,v]),N=(0,s.useCallback)((e=>{g(),null==a||a(e)}),[a,g]),A=(0,s.useCallback)((e=>{j(),null==t||t(e)}),[t,j]),O=(0,s.useCallback)((e=>{b(),null==c||c(e)}),[c,b]);var M;return(0,s.useEffect)((()=>{const{current:e}=d;if(!e)return;const n=new AbortController,{signal:r}=n;return m(e,y,C,{signal:r}),()=>n.abort()}),[y,C]),M=h?f:null,(0,s.useEffect)((()=>{M&&window.___loader.hovering(M)}),[M]),(e=>{(0,s.useEffect)((()=>{if(!e)return;const n=(0,o.Cw)(e);return()=>n.abort()}),[e])})(p||h?f:null),(0,x.jsx)("a",{...e,onClick:w,onMouseOver:k,onMouseOut:N,onFocus:A,onBlur:O,ref:e=>{d.current=e,n&&(n.current=e)}})},j=(0,s.forwardRef)(p),b=e=>{const n=(0,o.K2)("1271460761").site.siteMetadata.siteUrl,{href:r,target:t,download:s}=e,{origin:l,hash:i}=new URL(null!=r?r:"",n);return!r||l!==n||i||t||s},v=(e,n)=>{const r=b(e)?"a":j;return(0,x.jsx)(r,{...e,ref:n})},g=(0,s.forwardRef)(v);const y=(0,t.f)(g,"a-module--a--8fe65")},7018:function(e,n,r){r.d(n,{g:function(){return o},J:function(){return s}});var t=r(4846);const s=(0,t.f)("ol","breadcrumb-list-module--breadcrumblist--d89e2"),o=(0,t.f)("li","breadcrumb-list-module--breadcrumb--64b46")},9860:function(e,n,r){r.d(n,{z:function(){return t}});const t=(0,r(4846).f)("button","button-module--button--355dd")},4218:function(e,n,r){r.d(n,{Z:function(){return t}});const t=(0,r(4846).f)("div","card-module--card--729a6")},7831:function(e,n,r){r.d(n,{H1:function(){return o},H2:function(){return l},H3:function(){return i},H4:function(){return c},H5:function(){return u},H6:function(){return a}});var t=r(4846),s="heading-module--heading--5dd10";const o=(0,t.f)("h1",s),l=(0,t.f)("h2",s),i=(0,t.f)("h3",s),c=(0,t.f)("h4",s),u=(0,t.f)("h5",s),a=(0,t.f)("h6",s)},6205:function(e,n,r){r.d(n,{h:function(){return t}});const t=(0,r(4846).f)("hgroup","hgroup-module--hgroup--65970")},3171:function(e,n,r){r.d(n,{I:function(){return t}});const t=(0,r(4846).f)("input","input-module--input--4ad14")},637:function(e,n,r){r.d(n,{Li:function(){return m},v:function(){return h},Ol:function(){return d},Ul:function(){return f}});var t=r(7294),s="list-module--unorderedList--1a29f",o=r(5893);const l=(0,t.createContext)(null),i=(e,n)=>{let{children:r,...t}=e;return(0,o.jsx)("ol",{role:"list",className:"list-module--orderedList--d8f82",...t,ref:n,children:(0,o.jsx)(l.Provider,{value:t.reversed?"rol":"ol",children:r})})},c=(e,n)=>{let{children:r,...t}=e;return(0,o.jsx)("ul",{role:"list",className:s,...t,ref:n,children:(0,o.jsx)(l.Provider,{value:"ul",children:r})})},u=(e,n)=>{let{children:r,...t}=e;return(0,o.jsx)("menu",{role:"list",className:s,...t,ref:n,children:(0,o.jsx)(l.Provider,{value:"ul",children:r})})},a=(e,n)=>{let{children:r,...s}=e;const i={ul:"list-module--uitem--63afd",ol:"list-module--oitem--9c6ac",rol:"list-module--roitem--a048a"}[(0,t.useContext)(l)];return(0,o.jsx)("li",{role:"listitem",className:i,...s,ref:n,children:(0,o.jsx)("div",{className:"list-module--content--5f318",children:r})})},d=(0,t.forwardRef)(i),f=(0,t.forwardRef)(c),h=(0,t.forwardRef)(u),m=(0,t.forwardRef)(a)},9422:function(e,n,r){r.d(n,{J:function(){return l}});var t=r(7294),s=r(6205),o=r(5893);const l=e=>{let{children:n,heading:r,...l}=e;const i=(0,t.useId)();return(0,o.jsxs)("nav",{"aria-labelledby":i,...l,children:[(0,o.jsx)("header",{id:i,children:(0,o.jsx)(s.h,{children:r})}),n]})}},6332:function(e,n,r){r.d(n,{p:function(){return t}});const t=(0,r(4846).f)("p","subheading-module--p--b5186")},8088:function(e,n,r){r.d(n,{Q:function(){return t}});const t=(0,r(4846).f)("div","theme-module--theme--d14f8")},7256:function(e,n,r){r.d(n,{E:function(){return t}});const t=(0,r(4846).f)("div","screen-only-module--screen--a22bb")},5821:function(e,n,r){r.d(n,{q:function(){return o}});var t=r(7294),s=r(1883);const o=()=>(0,t.useCallback)((async e=>{const n=e.nativeEvent,r=e.target,t=n.submitter;let o=t.getAttribute("formaction"),l=t.getAttribute("formenctype"),i=t.getAttribute("formmethod"),c=t.getAttribute("formtarget");if(o??=r.getAttribute("action"),l??=r.getAttribute("enctype"),i??=r.method,c??=r.getAttribute("target"),null!==l)return;if("get"!==i)return;if(null!==c)return;e.preventDefault();const u=`${o}?${new URLSearchParams(new FormData(r))}`;await(0,s.c4)(u)}),[])},4846:function(e,n,r){r.d(n,{f:function(){return o}});var t=r(7294),s=r(5893);const o=(e,n)=>{const r=((e,n)=>(r,t)=>{var o;const l=`${null!==(o=r.className)&&void 0!==o?o:""} ${n}`;return(0,s.jsx)(e,{...r,className:l,ref:t})})(e,n),o=(e=>{var n;return"string"==typeof e?e:null!==(n=e.displayName)&&void 0!==n?n:e.name})(e);return r.displayName=o?`Class(${o}, ${n})`:`Class(${n})`,(0,t.forwardRef)(r)}},6262:function(e,n,r){r.d(n,{L:function(){return o}});var t=r(1883),s=r(7294);const o=e=>{const n=(0,t.K2)("1271460761");return(0,s.useMemo)((()=>{const r=n.site.siteMetadata;return String(new URL(e,r.siteUrl))}),[n,e])}},9622:function(e,n,r){r.d(n,{$:function(){return s}});var t=r(1883);const s=()=>(0,t.K2)("3000541721").site.siteMetadata},4407:function(e,n,r){r.r(n),r.d(n,{Head:function(){return ce},default:function(){return ue}});var t=r(3476),s=r(7294),o=r(6262),l=r(9622);var i=r(1883);const c=()=>{const e=(0,i.K2)("2796747441");return(0,s.useMemo)((()=>e.allLink.nodes.map((e=>e.post))),[e])},u=()=>{const e=(0,i.K2)("2477755614");return(0,s.useMemo)((()=>Object.fromEntries(e.allLink.group.map((e=>{let{category:n,nodes:r}=e;return[n,r.map((e=>e.post))]})))),[e])};var a=r(5929),d=r(7256),f=r(4218),h=r(6205),m=r(7831),x=r(5893);const p=e=>{let{children:n,search:r}=e;return(0,x.jsxs)(x.Fragment,{children:[n,(0,x.jsx)(d.E,{children:(0,x.jsx)(f.Z,{children:(0,x.jsxs)(a.o,{"aria-describedby":"search",children:[(0,x.jsx)("header",{children:(0,x.jsx)(h.h,{children:(0,x.jsx)(m.H2,{tabIndex:"-1",id:"search",children:"Search"})})}),r]})})})]})};var j=r(3171),b=r(9860);const v=e=>{let{action:n,onSubmit:r}=e;const t=(0,s.useId)();return(0,x.jsx)("form",{rel:"search",action:n,onSubmit:r,children:(0,x.jsxs)("fieldset",{className:"search-form-module--query--650cb",children:[(0,x.jsx)("label",{htmlFor:t,children:"Query"}),(0,x.jsx)(j.I,{id:t,name:"s",type:"search",required:!0}),(0,x.jsx)(b.z,{type:"submit",children:"Search"})]})})};var g=r(637),y=r(7020);const C=()=>(0,x.jsxs)(g.Ul,{children:[(0,x.jsx)(g.Li,{children:(0,x.jsx)(y.A,{download:"feed.xml",rel:"alternate",href:"/feed.xml",children:"Subscribe (RSS)"})}),(0,x.jsx)(g.Li,{children:(0,x.jsx)(y.A,{rel:"author",href:"/about",children:"About the Author"})}),(0,x.jsx)(g.Li,{children:(0,x.jsx)(y.A,{href:"/README",children:"About this Blog"})}),(0,x.jsx)(g.Li,{children:(0,x.jsx)(y.A,{rel:"nofollow",href:"/404",children:"Test 404 Page"})})]}),w={hover:!1,focus:!1},k=(e,n)=>{switch(n){case"mouseover":return{...e,hover:!0};case"mouseout":return{...e,hover:!1};case"focus":return{...e,focus:!0};case"blur":return{...e,focus:!1};default:return e}},N=(e,n)=>e=e===n?null:n;const A=e=>{let{children:n,open:r}=e;return(0,x.jsx)("span",{className:r?"icon-module--open--cef9c":"icon-module--close--f3e52",children:n})};var O=r(5973);const M={prevOpen:null,isTransitioning:!1},R=(e,n)=>{const{type:r,open:t}=n;switch(r){case"start":return{prevOpen:t,isTransitioning:!0};case"end":return{prevOpen:t,isTransitioning:!1};default:return e}};var H="panel-module--content--a6def",$="panel-module--contentClient--fbfc9",L="panel-module--disclosure--e5f8e",S="panel-module--disclosureClient--bf258",I="panel-module--wrapper--8441c";const P=e=>{let{children:n,willChange:r,open:t}=e;const{isTransitioning:o,endTransition:l}=(e=>{const{1:n}=(0,s.useTransition)(),{0:{prevOpen:r,isTransitioning:t},1:o}=(0,s.useReducer)(R,M);return r!==e&&o({type:"start",open:e}),{isTransitioning:t,endTransition:(0,s.useCallback)((()=>{n((()=>o({type:"end",open:e})))}),[e])}})(t),i=(0,O.m8)(),c=(0,s.useDeferredValue)(t),u=(0,s.useDeferredValue)(r),a=!o&&!c,d=[L,i?[S,a?"panel-module--disclosureHiddenSteady--2e9fc":"",u?"panel-module--disclosureWillChange--9c4f0":"",c?"":"panel-module--disclosureHidden--bfab3"].join(" "):""].join(" "),f=[I,i?[a?"panel-module--wrapperHiddenSteady--4e76f":"",c?"":"panel-module--wrapperHidden--c3ac5"].join(" "):""].join(" "),h=[H,i?[$,u?"panel-module--contentWillChange--d48f4":"",c?"":"panel-module--contentHidden--e5e86",c?"panel-module--contentOpen--99ab7":""].join(" "):""].join(" ");return(0,x.jsx)("div",{className:d,"aria-hidden":c?null:"true",children:(0,x.jsx)("div",{className:f,children:(0,x.jsx)("div",{className:h,onTransitionEnd:l,children:n})})})};const E=(0,s.createContext)(!1);E.displayName="Open";const T=(0,s.createContext)(null);T.displayName="AriaControls";const _=e=>{const{children:n,id:r}=e,t=(0,s.useContext)(E),o=(0,s.useContext)(T),l=(0,O.m8)();return(0,x.jsx)(m.H2,{tabIndex:l?null:"-1",id:l?null:r,children:(0,x.jsx)("span",{className:"disclosure-module--insideHeading--0ceaa",children:(0,x.jsxs)(O.KU,{fallback:n,children:[(0,x.jsx)("span",{className:"disclosure-module--details--60ae0",children:(0,x.jsx)(b.z,{"aria-controls":o,"aria-expanded":String(t),...e,children:(0,x.jsx)(A,{open:t,children:(0,x.jsx)("span",{className:"disclosure-module--button--2d86f",children:t?"Close":"Open"})})})}),(0,x.jsx)("label",{htmlFor:r,children:n})]})})})},F=e=>{let{children:n,summary:r,open:t,willChange:o=!1}=e;const l=(0,s.useId)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(T.Provider,{value:l,children:(0,x.jsx)(E.Provider,{value:t,children:r})}),(0,x.jsx)("div",{id:l,children:(0,x.jsx)(P,{open:t,willChange:o,children:n})})]})};const Z=(0,s.createContext)((()=>{}));Z.displayName="Click";const K=(0,s.createContext)();K.displayName="Selection";const U=(0,s.createContext)();U.displayName="Value";const D=(0,s.createContext)();D.displayName="Event";const q=e=>{const n=(0,s.useContext)(U),r=(0,s.useContext)(Z),{mouseOver:t,mouseOut:o,focus:l,blur:i}=(0,s.useContext)(D),c=(0,s.useCallback)((()=>r(n)),[r,n]);return(0,x.jsx)(_,{onClick:c,onMouseOver:t,onMouseOut:o,onFocus:l,onBlur:i,...e})},B=e=>{let{children:n,value:r,summary:t}=e;const[o,l]=(()=>{const{1:e}=(0,s.useTransition)(),{0:{hover:n,focus:r},1:t}=(0,s.useReducer)(k,w);return[n||r,(0,s.useMemo)((()=>({mouseOver:()=>e((()=>t("mouseover"))),mouseOut:()=>e((()=>t("mouseout"))),focus:()=>e((()=>t("focus"))),blur:()=>e((()=>t("blur")))})),[])]})(),i=r===(0,s.useContext)(K);return(0,x.jsx)(F,{open:i,willChange:o,summary:(0,x.jsx)(D.Provider,{value:l,children:(0,x.jsx)(U.Provider,{value:r,children:t})}),children:n})},J=e=>{let{children:n}=e;const[r,t]=(()=>{const{1:e}=(0,s.useTransition)(),{0:n,1:r}=(0,s.useReducer)(N,null);return[n,(0,s.useCallback)((n=>e((()=>r(n)))),[])]})();return(0,x.jsx)("div",{className:"accordion-module--accordion--2e5df",children:(0,x.jsx)(Z.Provider,{value:t,children:(0,x.jsx)(K.Provider,{value:r,children:n})})})},z=e=>{let{href:n,children:r}=e;return(0,x.jsx)(g.Li,{children:(0,x.jsx)(y.A,{href:n,children:r})})},V=e=>{let{posts:n}=e;return n.map((e=>{let{slug:n,title:r}=e;return(0,x.jsx)(z,{href:n,children:r},n)}))},Q=e=>{let{posts:n}=e;return n&&n.length>0&&(0,x.jsx)(g.Ol,{reversed:"reversed",start:n.length,children:(0,x.jsx)(V,{posts:n})})};var W=r(285);const G=e=>{let{children:n,heading:r,...t}=e;const o=(0,s.useId)();return(0,x.jsxs)("header",{"aria-describedby":o,...t,children:[(0,x.jsx)(h.h,{id:o,children:r}),n]})};var X=r(6332),Y=r(7018),ee=r(5821),ne=r(2394),re=r(6342),te=r(7311),se=r(2980),oe=r(7585);const le="Posts",ie=()=>{const{pathname:e}=(0,t.useLocation)(),n=(0,o.L)(e);return(0,x.jsx)(se.i,{title:le,url:n})},ce=()=>{const e=(()=>{const e=(0,l.$)(),n=(0,o.L)("/search"),r=(0,o.L)("/");return(0,s.useMemo)((()=>({"@context":"https://schema.org","@type":"WebSite",name:e.title,description:e.description,url:r,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:`${n}?s={s}`},"query-input":"required name=s"}})),[e,n,r])})(),n=(0,oe.Z)(le);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("title",{children:n}),(0,x.jsx)("link",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"}),(0,x.jsx)(ie,{}),(0,x.jsx)(te.h,{srcdoc:e})]})};var ue=()=>{const e=c(),{title:n,description:r}=(0,l.$)(),t=(0,ee.q)(),s=(0,W.I)(),o=u();return(0,x.jsx)(ne.v,{skipA:(0,x.jsx)(re.G,{children:"Posts"}),sidebar:(0,x.jsx)(p,{search:(0,x.jsx)(v,{action:s,onSubmit:t}),children:(0,x.jsx)(f.Z,{children:(0,x.jsx)(G,{heading:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m.H2,{tabIndex:"-1",id:"banner",children:n}),(0,x.jsx)(X.p,{children:r})]}),children:(0,x.jsx)(C,{})})})}),breadcrumbs:(0,x.jsx)(Y.J,{children:(0,x.jsx)(Y.g,{children:(0,x.jsx)("span",{"aria-current":"page",children:"Home"})})}),mainbar:(0,x.jsx)(J,{children:Object.entries(o).map((e=>{let[n,r]=e;return(0,x.jsx)("nav",{"aria-labelledby":n,children:(0,x.jsx)(B,{value:n,summary:(0,x.jsx)("header",{children:(0,x.jsx)(h.h,{children:(0,x.jsx)(q,{id:n,children:n})})}),children:(0,x.jsx)(f.Z,{children:(0,x.jsx)(Q,{posts:r})})})},n)}))}),heading:"Posts",children:(0,x.jsx)(Q,{posts:e})})}},3274:function(e,n,r){r.d(n,{x:function(){return s}});const t=function*e(n,r,t){if("string"!=typeof t)if(Array.isArray(t)){let s=0;for(const o of t){for(const t of e(`${n}${s}`,r,o))yield t;++s}}else for(const[s,o]of Object.entries(t)){const t=r?`${r}:${s}`:s,l=r?`${n}:${s}`:s;for(const n of e(l,t,o))yield n}else yield[n,r,t]},s=function*(e){for(const n of t(null,null,e))yield n}},2164:function(e,n,r){r.d(n,{k:function(){return t}});const t=" — "}}]);
//# sourceMappingURL=component---src-pages-index-jsx-840652067c4f8278d7fe.js.map