"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[230],{7311:function(e,n,r){var t=r(7294),s=r(5893);n.Z=e=>{let{srcdoc:n}=e;const r=(0,t.useMemo)((()=>JSON.stringify(n)),[n]);return(0,s.jsx)("script",{type:"application/ld+json",children:r})}},2980:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(3274),s=r(9622),c=r(7294);var i=e=>{let{description:n,url:r,title:t}=e;const i=(0,s.Z)();return(0,c.useMemo)((()=>({og:{site_name:i.title,title:t,description:null!=n?n:i.description,url:r}})),[i,n,r,t])},l=r(5893);const o=e=>{const n=i(e);return Array.from(function*(){for(const[e,r,s]of(0,t.Z)(n))yield(0,l.jsx)("meta",{property:r,content:s},e)}())};var a=e=>{const{description:n,url:r}=e,t=(0,s.Z)();return(0,l.jsxs)(l.Fragment,{children:[r&&(0,l.jsx)("link",{rel:"canonical",href:r}),(0,l.jsx)("meta",{name:"description",content:null!=n?n:t.description}),(0,l.jsx)(o,{...e})]})}},7585:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(7294),s=r(1883),c=r(2164);const i=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=(0,s.K2)("3159585216");return(0,t.useMemo)((()=>{const{title:e}=i.site.siteMetadata;return[].concat(n,[e]).join(c.k)}),[i,n])}},5929:function(e,n,r){r.d(n,{o:function(){return i}});var t=r(7294),s=r(5893);const c=(e,n)=>{let{children:r,...t}=e;return(0,s.jsx)("search",{ref:n,role:"search",...t,children:r})},i=(0,t.forwardRef)(c)},285:function(e,n,r){r.d(n,{I:function(){return o}});var t=r(5785),s=r(7294),c=r(1883);const i="/search",l=function(e,n){return void 0===n&&(n=[]),n.map((n=>[e,n]))},o=e=>{const{s:n,category:r,tag:o,place:a,person:d}=null!=e?e:{};return(0,s.useMemo)((()=>{const e=[].concat((0,t.Z)(n?["s",n]:[]),(0,t.Z)(l("category",r)),(0,t.Z)(l("tag",o)),(0,t.Z)(l("place",a)),(0,t.Z)(l("person",d))),s=String(new URLSearchParams(e)),u=""===s?i:i+"?"+s;return(0,c.dq)(u)}),[n,r,o,a,d])}},9750:function(e,n,r){r.d(n,{g:function(){return c},J:function(){return s}});var t=r(5893);const s=e=>{let{children:n,...r}=e;return(0,t.jsx)("ol",{className:"breadcrumb-list-module--breadcrumblist--d89e2",...r,children:n})},c=e=>{let{children:n,...r}=e;return(0,t.jsx)("li",{className:"breadcrumb-list-module--breadcrumb--64b46",...r,children:n})}},4457:function(e,n,r){r.d(n,{z:function(){return l}});var t=r(7294),s=r(5064),c=r(5893);const i=(e,n)=>{let{children:r,id:t,className:i="",...l}=e;return(0,s.ae)()&&(t=null),(0,c.jsx)("button",{id:t,className:"button-module--button--355dd "+i,ref:n,...l,children:r})},l=(0,t.forwardRef)(i)},1111:function(e,n,r){r.d(n,{I:function(){return i}});var t=r(7294),s=r(5893);const c=(e,n)=>{let{children:r,...t}=e;return(0,s.jsx)("input",{className:"input-module--input--4ad14",ref:n,...t,children:r})},i=(0,t.forwardRef)(c)},6262:function(e,n,r){var t=r(1883),s=r(7294);n.Z=e=>{const n=(0,t.K2)("1271460761");return(0,s.useMemo)((()=>{const r=n.site.siteMetadata;return String(new URL(e,r.siteUrl))}),[n,e])}},9622:function(e,n,r){var t=r(1883);n.Z=()=>(0,t.K2)("3000541721").site.siteMetadata},4194:function(e,n,r){r.d(n,{q:function(){return i}});var t=r(7294),s=r(1883),c=r(48);const i=()=>(0,t.useCallback)((async e=>{var n,r,t,i;if((0,c.XK)())return;const l=e.nativeEvent,o=e.target,a=l.submitter;let d=a.getAttribute("formaction"),u=a.getAttribute("formenctype"),h=a.getAttribute("formmethod"),f=a.getAttribute("formtarget");if(null!==(n=d)&&void 0!==n||(d=o.getAttribute("action")),null!==(r=u)&&void 0!==r||(u=o.getAttribute("enctype")),null!==(t=h)&&void 0!==t||(h=o.method),null!==(i=f)&&void 0!==i||(f=o.getAttribute("target")),null!==u)return;if("get"!==h)return;if(null!==f)return;e.preventDefault();const x=d+"?"+new URLSearchParams(new FormData(o));await(0,s.c4)(x)}),[]);n.Z=i},2215:function(e,n,r){r.r(n),r.d(n,{Head:function(){return ee},default:function(){return ne}});var t=r(7896),s=r(7294);const c=()=>{const{1:e}=(0,s.useTransition)(),{0:n,1:r}=(0,s.useState)(!1);return(0,s.useEffect)((()=>e((()=>r(!0)))),[]),n};var i=r(6077),l=r(4457),o=r(7042),a=r(5893);const d=e=>{let{children:n}=e;return(0,a.jsx)("span",{className:"closed-icon-module--closed--1f1dc",children:n})};const u=e=>{let{children:n}=e;return(0,a.jsx)("span",{className:"open-icon-module--open--0c35d",children:n})};const h=e=>{let{icon:n,children:r}=e;return(0,a.jsxs)("span",{className:"panel-module--details--6705b",children:[(0,a.jsx)("span",{"aria-hidden":"true",children:n}),(0,a.jsx)("span",{children:r})]})},f=e=>{let{open:n}=e;return(0,a.jsx)(h,{icon:n?(0,a.jsx)(u,{}):(0,a.jsx)(d,{}),children:n?"Close":"Open"})},x=(0,s.createContext)(null);x.displayName="Accordion";const j=(0,s.memo)(x.Provider),m=e=>{let{children:n,value:r}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(j,{value:r,children:n})})},p=e=>{let{children:n,id:r,buttonId:t,open:s,...c}=e;return(0,a.jsxs)(i.H2,{id:r,className:"panel-module--insideHeading--b34e6",children:[(0,a.jsx)(l.z,{id:t,className:"panel-module--button--113be","aria-expanded":String(s),...c,children:(0,a.jsx)(f,{open:s})}),(0,a.jsx)("label",{htmlFor:t,children:n})]})},b=e=>{let{children:n,id:r,open:t,...i}=e;t=(0,s.useDeferredValue)(t);const l=!c();return l&&(t=!0),(0,a.jsx)("div",{className:"panel-module--wrapper--a1c1d "+(t?"":"panel-module--wrapperInert--a838b"),inert:t?null:"inert",children:(0,a.jsx)("nav",{id:r,className:"panel-module--content--25eb0 "+(t?"":"panel-module--contentHidden--16470")+" "+(l?"panel-module--contentServer--bf7c7":""),...i,children:n})})},g=e=>{let{children:n,heading:r,value:t,onClick:c}=e;const{1:i}=(0,s.useTransition)(),l=(0,s.useCallback)((e=>{e.preventDefault(),i((()=>c(e)))}),[c]),d=(0,s.useContext)(x),u=(0,s.useId)(),h=(0,s.useId)(),f=d===t;return(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(p,{id:h,buttonId:r,"aria-controls":u,open:f,onClick:l,children:r}),(0,a.jsx)(b,{id:u,"aria-labelledby":h,open:f,children:n})]})};var v=r(1250),y=r(7410);const A=e=>{let{href:n,children:r}=e;return(0,a.jsx)(v.Li,{children:(0,a.jsx)(y.A,{href:n,children:r})})},k=e=>{let{children:n}=e;return(0,a.jsx)(v.Ol,{reversed:"reversed",children:n})},Z=e=>{let{posts:n}=e;return n.map((e=>{let{slug:n,title:r}=e;return(0,a.jsx)(A,{href:n,children:r},n)}))},S=e=>{let{posts:n}=e;return n&&n.length>0&&(0,a.jsx)(k,{children:(0,a.jsx)(Z,{posts:n})})};var C=r(6262),w=r(9622);const L=()=>{const e=(0,w.Z)(),n=(0,C.Z)("/search"),r=(0,C.Z)("/");return(0,s.useMemo)((()=>({"@context":"https://schema.org","@type":"WebSite",name:e.title,description:e.description,url:r,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:n+"?s={s}"},"query-input":"required name=s"}})),[e,n,r])};var N=r(1883);const M=()=>{const e=(0,N.K2)("2796747441");return(0,s.useMemo)((()=>e.allLink.nodes.map((e=>e.post))),[e])};const I=()=>{const e=(0,N.K2)("2477755614");return(0,s.useMemo)((()=>Object.fromEntries(e.allLink.group.map((e=>{let{category:n,nodes:r}=e;return[n,r.map((e=>e.post))]})))),[e])};var _=r(2729),R=r(5929),F=r(5725);const O=e=>{let{children:n,search:r}=e;return(0,a.jsxs)(a.Fragment,{children:[n,(0,a.jsx)(o.Z,{children:(0,a.jsxs)(R.o,{"aria-describedby":"search",children:[(0,a.jsx)(_.f,{children:(0,a.jsx)("header",{children:(0,a.jsx)(F.h,{children:(0,a.jsx)(i.H2,{id:"search",children:"Search"})})})}),r]})})]})};const q=()=>(0,a.jsxs)(v.Ul,{children:[(0,a.jsx)(v.Li,{children:(0,a.jsx)(y.A,{download:"feed.xml",rel:"alternate",href:"/feed.xml",children:"Subscribe (RSS)"})}),(0,a.jsx)(v.Li,{children:(0,a.jsx)(y.A,{rel:"author",href:"/about",children:"About the Author"})}),(0,a.jsx)(v.Li,{children:(0,a.jsx)(y.A,{href:"/README",children:"About this Blog"})}),(0,a.jsx)(v.Li,{children:(0,a.jsx)(y.A,{rel:"nofollow",href:"/404",children:"Test 404 Page"})})]});var H=r(285),P=r(1111);const E=e=>{let{action:n,onSubmit:r}=e;const t=(0,s.useId)();return(0,a.jsx)("form",{rel:"search",action:n,onSubmit:r,children:(0,a.jsxs)("fieldset",{className:"search-form-module--query--910f7",children:[(0,a.jsx)("label",{htmlFor:t,children:"Query"}),(0,a.jsx)(P.I,{id:t,name:"s",type:"search",required:!0}),(0,a.jsx)(l.z,{type:"submit",children:"Search"})]})})};const K=e=>{let{children:n,heading:r,...t}=e;const c=(0,s.useId)();return(0,a.jsxs)("header",{"aria-describedby":c,...t,children:[(0,a.jsx)(F.h,{id:c,children:r}),n]})};var U=r(9750),D=r(7798),T=r(1091),z=r(7311),B=r(2980),J=r(7585),G=r(4194);const Q=(e,n)=>{const{type:r}=n;if("toggle"===r){const{category:r}=n;return e===r?null:r}return e},V=e=>{let{posts:n,onClick:r}=e;return(0,s.useMemo)((()=>Object.entries(n).map((e=>{let[n,t]=e;return[n,{posts:t,onClick(e){r(n,e)}}]}))),[n,r]).map((e=>{let[n,{posts:r,onClick:t}]=e;return(0,a.jsx)(g,{value:n,heading:n,onClick:t,children:(0,a.jsx)(S,{posts:r})},n)}))},W=e=>{let{posts:n}=e;const{0:r,1:t}=(0,s.useReducer)(Q,null),c=(0,s.useCallback)(((e,n)=>{t({type:"toggle",category:e})}),[]);return(0,a.jsx)(m,{value:r,children:(0,a.jsx)(V,{posts:n,onClick:c})})},X="Table of Contents",Y=()=>{const{pathname:e}=(0,t.useLocation)(),n=(0,C.Z)(e);return(0,a.jsx)(B.Z,{title:X,url:n})},$=e=>{let{posts:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D.G,{"aria-describedby":"content",href:"#content",children:"Posts"}),(0,a.jsxs)(v.Ul,{children:[n.map((e=>(0,a.jsx)(v.Li,{children:(0,a.jsx)(y.A,{href:"#"+e,children:e})},e))),(0,a.jsx)(v.Li,{children:(0,a.jsx)(y.A,{href:"#banner","aria-describedby":"banner",children:"Common"})}),(0,a.jsx)(v.Li,{children:(0,a.jsx)(y.A,{href:"#search",children:"Search"})}),(0,a.jsx)(v.Li,{children:(0,a.jsx)(y.A,{href:"#breadcrumbs",children:"Breadcrumbs"})})]})]})},ee=()=>{const e=L(),n=(0,J.Z)(X);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:n}),(0,a.jsx)("link",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"}),(0,a.jsx)(Y,{}),(0,a.jsx)(z.Z,{srcdoc:e})]})};var ne=()=>{const e=M(),{title:n,description:r}=(0,w.Z)(),t=(0,G.q)(),s=(0,H.I)(),c=I();return(0,a.jsx)(T.v,{tableOfContents:(0,a.jsx)($,{posts:Object.keys(c)}),sidebar:(0,a.jsx)(O,{search:(0,a.jsx)(E,{action:s,onSubmit:t}),children:(0,a.jsx)(o.Z,{children:(0,a.jsx)(K,{heading:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.H2,{id:"banner",children:n}),(0,a.jsx)("p",{style:{marginBlock:0},children:r})]}),children:(0,a.jsx)(q,{})})})}),breadcrumbs:(0,a.jsx)(U.J,{children:(0,a.jsx)(U.g,{children:(0,a.jsx)("span",{"aria-current":"page",children:"Home"})})}),mainbar:(0,a.jsx)(W,{posts:c}),heading:"Posts",children:(0,a.jsx)(S,{posts:e})})}},3274:function(e,n,r){const t=function*e(n,r,t){if("string"!=typeof t)if(Array.isArray(t)){let s=0;for(const c of t){for(const t of e(""+n+s,r,c))yield t;++s}}else for(const[s,c]of Object.entries(t)){const t=r?r+":"+s:s,i=r?n+":"+s:s;for(const n of e(i,t,c))yield n}else yield[n,r,t]};n.Z=function*(e){for(const n of t(null,null,e))yield n}},2164:function(e,n,r){r.d(n,{k:function(){return t}});const t=" — "}}]);
//# sourceMappingURL=component---src-pages-index-jsx-e050061422d3ad382fb7.js.map