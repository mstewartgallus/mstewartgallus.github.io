"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[230],{7311:function(e,n,r){var t=r(7294),s=r(5893);n.Z=e=>{let{srcdoc:n}=e;const r=(0,t.useMemo)((()=>JSON.stringify(n)),[n]);return(0,s.jsx)("script",{type:"application/ld+json",children:r})}},2980:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(3274),s=r(9622),c=r(7294);var i=e=>{let{description:n,url:r,title:t}=e;const i=(0,s.Z)();return(0,c.useMemo)((()=>({og:{site_name:i.title,title:t,description:null!=n?n:i.description,url:r}})),[i,n,r,t])},l=r(5893);const o=e=>{const n=i(e);return Array.from(function*(){for(const[e,r,s]of(0,t.Z)(n))yield(0,l.jsx)("meta",{property:r,content:s},e)}())};var a=e=>{const{description:n,url:r}=e,t=(0,s.Z)();return(0,l.jsxs)(l.Fragment,{children:[r&&(0,l.jsx)("link",{rel:"canonical",href:r}),(0,l.jsx)("meta",{name:"description",content:null!=n?n:t.description}),(0,l.jsx)(o,{...e})]})}},7585:function(e,n,r){r.d(n,{ZQ:function(){return i}});var t=r(7294),s=r(1883),c=r(2164);r(5893);const i=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=(0,s.K2)("3159585216");return(0,t.useMemo)((()=>{const{title:e}=i.site.siteMetadata;return[].concat(n,[e]).join(c.k)}),[i,n])}},5929:function(e,n,r){r.d(n,{o:function(){return i}});var t=r(7294),s=r(5893);const c=(e,n)=>{let{children:r,...t}=e;return(0,s.jsx)("search",{ref:n,role:"search",...t,children:r})},i=(0,t.forwardRef)(c)},285:function(e,n,r){r.d(n,{I:function(){return o}});var t=r(5785),s=r(7294),c=r(1883);const i="/search",l=function(e,n){return void 0===n&&(n=[]),n.map((n=>[e,n]))},o=e=>{const{s:n,category:r,tag:o,place:a,person:d}=null!=e?e:{};return(0,s.useMemo)((()=>{const e=[].concat((0,t.Z)(n?["s",n]:[]),(0,t.Z)(l("category",r)),(0,t.Z)(l("tag",o)),(0,t.Z)(l("place",a)),(0,t.Z)(l("person",d))),s=String(new URLSearchParams(e)),u=""===s?i:i+"?"+s;return(0,c.dq)(u)}),[n,r,o,a,d])}},9750:function(e,n,r){r.d(n,{g:function(){return c},J:function(){return s}});var t=r(5893);const s=e=>{let{children:n,...r}=e;return(0,t.jsx)("ol",{className:"breadcrumb-list-module--breadcrumblist--d89e2",...r,children:n})},c=e=>{let{children:n,...r}=e;return(0,t.jsx)("li",{className:"breadcrumb-list-module--breadcrumb--64b46",...r,children:n})}},4457:function(e,n,r){r.d(n,{z:function(){return l}});var t=r(7294),s=r(5064),c=r(5893);const i=(e,n)=>{let{children:r,id:t,className:i="",...l}=e;return(0,s.ae)()&&(t=null),(0,c.jsx)("button",{id:t,className:"button-module--button--355dd "+i,ref:n,...l,children:r})},l=(0,t.forwardRef)(i)},1111:function(e,n,r){r.d(n,{I:function(){return i}});var t=r(7294),s=r(5893);const c=(e,n)=>{let{children:r,...t}=e;return(0,s.jsx)("input",{className:"input-module--input--4ad14",ref:n,...t,children:r})},i=(0,t.forwardRef)(c)},6262:function(e,n,r){var t=r(1883),s=r(7294);n.Z=e=>{const n=(0,t.K2)("1271460761");return s.useMemo((()=>{const r=n.site.siteMetadata;return new URL(e,r.siteUrl).toString()}),[n,e])}},9622:function(e,n,r){var t=r(1883);n.Z=()=>(0,t.K2)("3000541721").site.siteMetadata},4194:function(e,n,r){r.d(n,{q:function(){return c}});var t=r(7294),s=r(1883);const c=()=>t.useCallback((async e=>{var n,r,t,c;const i=e.nativeEvent,l=e.target,o=i.submitter;let a=o.getAttribute("formaction"),d=o.getAttribute("formenctype"),u=o.getAttribute("formmethod"),h=o.getAttribute("formtarget");if(null!==(n=a)&&void 0!==n||(a=l.getAttribute("action")),null!==(r=d)&&void 0!==r||(d=l.getAttribute("enctype")),null!==(t=u)&&void 0!==t||(u=l.method),null!==(c=h)&&void 0!==c||(h=l.getAttribute("target")),null!==d)return;if("get"!==u)return;if(null!==h)return;e.preventDefault();const x=a+"?"+new URLSearchParams(new FormData(l));await(0,s.c4)(x)}),[]);n.Z=c},380:function(e,n,r){r.r(n),r.d(n,{Head:function(){return $},default:function(){return ee}});var t=r(7896),s=r(7294),c=r(8232),i=r(6077),l=r(4457),o=r(7042),a=r(5893);const d=e=>{let{children:n}=e;return(0,a.jsx)("span",{className:"closed-icon-module--closed--1f1dc",children:n})};const u=e=>{let{children:n}=e;return(0,a.jsx)("span",{className:"open-icon-module--open--0c35d",children:n})};const h=e=>{let{icon:n,children:r}=e;return(0,a.jsxs)("span",{className:"panel-module--details--6705b",children:[(0,a.jsx)("span",{"aria-hidden":"true",children:n}),(0,a.jsx)("span",{children:r})]})},x=e=>{let{open:n}=e;return(0,a.jsx)(h,{icon:n?(0,a.jsx)(u,{}):(0,a.jsx)(d,{}),children:n?"Close":"Open"})},j=(0,s.createContext)(null);j.displayName="Accordion";const p=e=>{let{children:n,value:r}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(j.Provider,{value:r,children:n})})},f=e=>{let{children:n,id:r,buttonId:t,open:s,...c}=e;return(0,a.jsxs)(i.H2,{id:r,className:"panel-module--insideHeading--b34e6",children:[(0,a.jsx)(l.z,{id:t,className:"panel-module--button--113be","aria-expanded":String(s),...c,children:(0,a.jsx)(x,{open:s})}),(0,a.jsx)("label",{htmlFor:t,children:n})]})},m=e=>{let{children:n,id:r,open:t,...i}=e;t=(0,s.useDeferredValue)(t);const l=!(0,c.m)();return l&&(t=!0),(0,a.jsx)("div",{className:"panel-module--wrapper--a1c1d "+(t?"":"panel-module--wrapperInert--a838b"),inert:t?null:"inert",children:(0,a.jsx)("nav",{id:r,className:"panel-module--content--25eb0 "+(t?"":"panel-module--contentHidden--16470")+" "+(l?"panel-module--contentServer--bf7c7":""),...i,children:n})})},b=e=>{let{children:n,heading:r,value:t,onClick:c}=e;const{0:i,1:l}=(0,s.useTransition)(),d=(0,s.useCallback)((e=>{e.preventDefault(),l((()=>c(e)))}),[c]),u=(0,s.useContext)(j),h=(0,s.useId)(),x=(0,s.useId)(),p=u===t;return(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(f,{id:x,buttonId:r,"aria-controls":h,open:p,onClick:d,children:r}),(0,a.jsx)(m,{id:h,"aria-labelledby":x,open:p,children:n})]})};var g=r(1250),v=r(9842);const y=e=>{let{href:n,children:r}=e;return(0,a.jsx)(g.Li,{children:(0,a.jsx)(v.A,{href:n,children:r})})},A=e=>{let{children:n}=e;return(0,a.jsx)(g.Ol,{reversed:"reversed",children:n})},k=e=>{let{posts:n}=e;return n.map((e=>{let{slug:n,title:r}=e;return(0,a.jsx)(y,{href:n,children:r},n)}))},Z=e=>{let{posts:n}=e;return n&&n.length>0&&(0,a.jsx)(A,{children:(0,a.jsx)(k,{posts:n})})};var C=r(6262),S=r(9622);const w=()=>{const e=(0,S.Z)(),n=(0,C.Z)("/search"),r=(0,C.Z)("/");return(0,s.useMemo)((()=>({"@context":"https://schema.org","@type":"WebSite",name:e.title,description:e.description,url:r,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:n+"?s={s}"},"query-input":"required name=s"}})),[e,n,r])};var L=r(1883);const N=()=>{const e=(0,L.K2)("2796747441");return(0,s.useMemo)((()=>e.allLink.nodes.map((e=>e.post))),[e])};const M=()=>{const e=(0,L.K2)("2477755614");return(0,s.useMemo)((()=>Object.fromEntries(e.allLink.group.map((e=>{let{category:n,nodes:r}=e;return[n,r.map((e=>e.post))]})))),[e])};var I=r(2729),_=r(5929),R=r(5725);const F=e=>{let{children:n,search:r}=e;return(0,a.jsxs)(a.Fragment,{children:[n,(0,a.jsx)(o.Z,{children:(0,a.jsxs)(_.o,{"aria-describedby":"search",children:[(0,a.jsx)(I.f,{children:(0,a.jsx)("header",{children:(0,a.jsx)(R.h,{children:(0,a.jsx)(i.H2,{id:"search",children:"Search"})})})}),r]})})]})};const O=()=>(0,a.jsxs)(g.Ul,{children:[(0,a.jsx)(g.Li,{children:(0,a.jsx)(v.A,{rel:"alternate",href:"/feed.xml",children:"Subscribe (RSS)"})}),(0,a.jsx)(g.Li,{children:(0,a.jsx)(v.A,{rel:"author",href:"/about",children:"About the Author"})}),(0,a.jsx)(g.Li,{children:(0,a.jsx)(v.A,{href:"/README",children:"About this Blog"})}),(0,a.jsx)(g.Li,{children:(0,a.jsx)(v.A,{rel:"nofollow",href:"/404",children:"Test 404 Page"})})]});var q=r(285),H=r(1111);const P=e=>{let{action:n,onSubmit:r}=e;const t=(0,s.useId)();return(0,a.jsx)("form",{rel:"search",action:n,onSubmit:r,children:(0,a.jsxs)("fieldset",{className:"search-form-module--query--910f7",children:[(0,a.jsx)("label",{htmlFor:t,children:"Query"}),(0,a.jsx)(H.I,{id:t,name:"s",type:"search",required:!0}),(0,a.jsx)(l.z,{type:"submit",children:"Search"})]})})};const U=e=>{let{children:n,heading:r,...t}=e;const c=(0,s.useId)();return(0,a.jsxs)("header",{"aria-describedby":c,...t,children:[(0,a.jsx)(R.h,{id:c,children:r}),n]})};var D=r(9750),E=r(7798),K=r(1091),T=r(7311),z=r(2980),B=r(7585),J=r(4194);const Q=(e,n)=>{const{type:r}=n;if("toggle"===r){const{category:r}=n;return e===r?null:r}return e},G=e=>{let{posts:n,onClick:r}=e;return(0,s.useMemo)((()=>Object.entries(n).map((e=>{let[n,t]=e;return[n,{posts:t,onClick(e){r(n,e)}}]}))),[n,r]).map((e=>{let[n,{posts:r,onClick:t}]=e;return(0,a.jsx)(b,{value:n,heading:n,onClick:t,children:(0,a.jsx)(Z,{posts:r})},n)}))},V=e=>{let{posts:n}=e;const{0:r,1:t}=(0,s.useReducer)(Q,null),c=(0,s.useCallback)(((e,n)=>{t({type:"toggle",category:e})}),[]);return(0,a.jsx)(p,{value:r,children:(0,a.jsx)(G,{posts:n,onClick:c})})},W="Table of Contents",X=()=>{const{pathname:e}=(0,t.useLocation)(),n=(0,C.Z)(e);return(0,a.jsx)(z.Z,{title:W,url:n})},Y=e=>{let{posts:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(E.G,{"aria-describedby":"content",href:"#content",children:"Posts"}),(0,a.jsxs)(g.Ul,{children:[n.map((e=>(0,a.jsx)(g.Li,{children:(0,a.jsx)(v.A,{href:"#"+e,children:e})},e))),(0,a.jsx)(g.Li,{children:(0,a.jsx)(v.A,{href:"#banner","aria-describedby":"banner",children:"Common"})}),(0,a.jsx)(g.Li,{children:(0,a.jsx)(v.A,{href:"#search",children:"Search"})}),(0,a.jsx)(g.Li,{children:(0,a.jsx)(v.A,{href:"#breadcrumbs",children:"Breadcrumbs"})})]})]})},$=()=>{const e=w(),n=(0,B.ZQ)(W);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:n}),(0,a.jsx)("link",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"}),(0,a.jsx)(X,{}),(0,a.jsx)(T.Z,{srcdoc:e})]})};var ee=()=>{const e=N(),{title:n,description:r}=(0,S.Z)(),t=(0,J.q)(),s=(0,q.I)(),c=M();return(0,a.jsx)(K.v,{tableOfContents:(0,a.jsx)(Y,{posts:Object.keys(c)}),sidebar:(0,a.jsx)(F,{search:(0,a.jsx)(P,{action:s,onSubmit:t}),children:(0,a.jsx)(o.Z,{children:(0,a.jsx)(U,{heading:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.H2,{id:"banner",children:n}),(0,a.jsx)("p",{style:{marginBlock:0},children:r})]}),children:(0,a.jsx)(O,{})})})}),breadcrumbs:(0,a.jsx)(D.J,{children:(0,a.jsx)(D.g,{children:(0,a.jsx)("span",{"aria-current":"page",children:"Home"})})}),mainbar:(0,a.jsx)(V,{posts:c}),heading:"Posts",children:(0,a.jsx)(Z,{posts:e})})}},3274:function(e,n,r){const t=function*e(n,r,t){if("string"!=typeof t)if(Array.isArray(t)){let s=0;for(const c of t){for(const t of e(""+n+s,r,c))yield t;++s}}else for(const[s,c]of Object.entries(t)){const t=r?r+":"+s:s,i=r?n+":"+s:s;for(const n of e(i,t,c))yield n}else yield[n,r,t]};n.Z=function*(e){for(const n of t(null,null,e))yield n}},2164:function(e,n,r){r.d(n,{k:function(){return t}});const t=" — "}}]);
//# sourceMappingURL=component---src-pages-index-jsx-a544c593839b9303a614.js.map