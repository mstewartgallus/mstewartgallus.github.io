"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[230],{7311:function(e,n,r){r.d(n,{h:function(){return o}});var s=r(7294),t=r(5893);const o=e=>{let{srcdoc:n}=e;const r=(0,s.useMemo)((()=>JSON.stringify(n)),[n]);return(0,t.jsx)("script",{type:"application/ld+json",children:r})}},2980:function(e,n,r){r.d(n,{i:function(){return l}});var s=r(3274),t=r(9622),o=r(7294);var i=r(5893);const c=e=>{const n=(e=>{let{description:n,url:r,title:s}=e;const i=(0,t.$)();return(0,o.useMemo)((()=>({og:{site_name:i.title,title:s,description:null!=n?n:i.description,url:r}})),[i,n,r,s])})(e);return Array.from(function*(){for(const[e,r,t]of(0,s.x)(n))yield(0,i.jsx)("meta",{property:r,content:t},e)}())},l=e=>{const{description:n,url:r}=e,s=(0,t.$)();return(0,i.jsxs)(i.Fragment,{children:[r&&(0,i.jsx)("link",{rel:"canonical",href:r}),(0,i.jsx)("meta",{name:"description",content:null!=n?n:s.description}),(0,i.jsx)(c,{...e})]})}},285:function(e,n,r){r.d(n,{I:function(){return l}});var s=r(5785),t=r(7294),o=r(1883);const i="/search",c=function(e,n){return void 0===n&&(n=[]),n.map((n=>[e,n]))},l=e=>{const{s:n,category:r,tag:l,place:a,person:d}=null!=e?e:{};return(0,t.useMemo)((()=>{const e=[].concat((0,s.Z)(n?["s",n]:[]),(0,s.Z)(c("category",r)),(0,s.Z)(c("tag",l)),(0,s.Z)(c("place",a)),(0,s.Z)(c("person",d))),t=String(new URLSearchParams(e)),u=""===t?i:`${i}?${t}`;return(0,o.dq)(u)}),[n,r,l,a,d])}},7003:function(e,n,r){r.d(n,{Ol:function(){return c}});var s=r(7294),t=r(4078),o=r(5893);const i=(e,n)=>(0,o.jsx)("ol",{role:"list",className:t.d,...e,ref:n}),c=(0,s.forwardRef)(i)},6332:function(e,n,r){r.d(n,{p:function(){return s}});const s=(0,r(4846).f)("p","subheading-module--p--b5186")},6262:function(e,n,r){r.d(n,{L:function(){return o}});var s=r(1883),t=r(7294);const o=e=>{const n=(0,s.K2)("1271460761");return(0,t.useMemo)((()=>{const r=n.site.siteMetadata;return String(new URL(e,r.siteUrl))}),[n,e])}},9622:function(e,n,r){r.d(n,{$:function(){return t}});var s=r(1883);const t=()=>(0,s.K2)("3000541721").site.siteMetadata},5949:function(e,n,r){r.r(n),r.d(n,{Head:function(){return le},default:function(){return ae}});var s=r(3476),t=r(7294),o=r(6262),i=r(9622);var c=r(1883);const l=()=>{const e=(0,c.K2)("2796747441");return(0,t.useMemo)((()=>e.allLink.nodes.map((e=>e.post))),[e])},a=()=>{const e=(0,c.K2)("2477755614");return(0,t.useMemo)((()=>Object.fromEntries(e.allLink.group.map((e=>{let{category:n,nodes:r}=e;return[n,r.map((e=>e.post))]})))),[e])};var d=r(822),u=r(5024),h=r(7158),x=r(368),m=r(5893);const j=()=>(0,m.jsxs)(d.Ul,{children:[(0,m.jsx)(u.Li,{children:(0,m.jsxs)(h.A,{download:"feed.xml",rel:"alternate",href:"/feed.xml",children:["Subscribe (RSS)",(0,m.jsx)(x.T,{})]})}),(0,m.jsx)(u.Li,{children:(0,m.jsxs)(h.A,{rel:"author",href:"/about/",children:["About the Author",(0,m.jsx)(x.T,{})]})}),(0,m.jsx)(u.Li,{children:(0,m.jsxs)(h.A,{href:"/README",children:["About this Blog",(0,m.jsx)(x.T,{})]})})]});var p=r(3171),f=r(9860);const v=e=>{let{action:n,onSubmit:r}=e;const s=(0,t.useId)();return(0,m.jsx)("form",{rel:"search",action:n,onSubmit:r,children:(0,m.jsxs)("fieldset",{className:"search-form-module--query--650cb",children:[(0,m.jsx)("label",{htmlFor:s,children:"Query"}),(0,m.jsx)(p.I,{id:s,name:"s",type:"search",required:!0}),(0,m.jsx)(f.z,{type:"submit",children:"Search"})]})})},b={hover:!1,focus:!1},y=(e,n)=>{switch(n){case"mouseover":return{...e,hover:!0};case"mouseout":return{...e,hover:!1};case"focus":return{...e,focus:!0};case"blur":return{...e,focus:!1};default:return e}},g=(e,n)=>e=e===n?null:n;var C=r(7831),S=r(3900);var k="panel-module--content--a6def",N="panel-module--contentClient--fbfc9",w="panel-module--disclosure--e5f8e",O="panel-module--disclosureClient--bf258",A="panel-module--wrapper--8441c";const $=e=>{let{children:n,willChange:r,open:s}=e;const{isTransitioning:o,endTransition:i}=(e=>{const{1:n}=(0,t.useTransition)(),{0:r,1:s}=(0,t.useState)(e),o=(0,t.useCallback)((()=>{n((()=>s(e)))}),[e]);return{isTransitioning:r!==e,endTransition:o}})(s),c=(0,S.m)(),l=!o&&!s,a=[w,c?[O,l?"panel-module--disclosureHiddenSteady--2e9fc":"",r?"panel-module--disclosureWillChange--9c4f0":"",s?"":"panel-module--disclosureHidden--bfab3"].join(" "):""].join(" "),d=[A,c?[l?"panel-module--wrapperHiddenSteady--4e76f":"",s?"":"panel-module--wrapperHidden--c3ac5"].join(" "):""].join(" "),u=[k,c?[N,r?"panel-module--contentWillChange--d48f4":"",s?"":"panel-module--contentHidden--e5e86",s?"panel-module--contentOpen--99ab7":""].join(" "):""].join(" ");return(0,m.jsx)("div",{className:a,"aria-hidden":c||s?null:"true",children:(0,m.jsx)("div",{className:d,children:(0,m.jsx)("div",{className:u,onTransitionEnd:i,children:n})})})};const L=(0,t.createContext)(!1);L.displayName="Open";const M=(0,t.createContext)(null);M.displayName="AriaControls";const T=e=>{const{children:n,id:r}=e,s=(0,t.useContext)(L),o=(0,t.useContext)(M);return(0,m.jsx)(C.H2,{children:(0,m.jsxs)("span",{className:"disclosure-module--insideHeading--0ceaa",children:[(0,m.jsx)(S.K,{children:(0,m.jsx)("span",{className:"disclosure-module--details--60ae0",children:(0,m.jsx)(f.z,{"aria-controls":o,"aria-expanded":String(s),...e,children:(0,m.jsx)("span",{className:s?"disclosure-module--open--111ae":"disclosure-module--close--a0d63",children:s?"Close":"Open"})})})}),(0,m.jsx)(S.K,{fallback:n,children:(0,m.jsx)("label",{htmlFor:r,children:n})})]})})},H=e=>{let{children:n,summary:r,open:s,willChange:o=!1}=e;const i=(0,t.useId)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(M.Provider,{value:i,children:(0,m.jsx)(L.Provider,{value:s,children:r})}),(0,m.jsx)("div",{id:i,children:(0,m.jsx)($,{open:s,willChange:o,children:n})})]})};const _=(0,t.createContext)((()=>{}));_.displayName="Click";const P=(0,t.createContext)();P.displayName="Selection";const Z=(0,t.createContext)();Z.displayName="Value";const E=(0,t.createContext)();E.displayName="Event";const F=e=>{const n=(0,t.useContext)(Z),r=(0,t.useContext)(_),{mouseOver:s,mouseOut:o,focus:i,blur:c}=(0,t.useContext)(E),l=(0,t.useCallback)((()=>r(n)),[r,n]);return(0,m.jsx)(T,{onClick:l,onMouseOver:s,onMouseOut:o,onFocus:i,onBlur:c,...e})},R=e=>{let{children:n,value:r,summary:s}=e;const[o,i]=(()=>{const{1:e}=(0,t.useTransition)(),{0:{hover:n,focus:r},1:s}=(0,t.useReducer)(y,b);return[n||r,(0,t.useMemo)((()=>({mouseOver:()=>e((()=>s("mouseover"))),mouseOut:()=>e((()=>s("mouseout"))),focus:()=>e((()=>s("focus"))),blur:()=>e((()=>s("blur")))})),[])]})(),c=r===(0,t.useContext)(P);return(0,m.jsx)(H,{open:c,willChange:o,summary:(0,m.jsx)(E.Provider,{value:i,children:(0,m.jsx)(Z.Provider,{value:r,children:s})}),children:n})},q=e=>{let{children:n}=e;const[r,s]=(()=>{const{1:e}=(0,t.useTransition)(),{0:n,1:r}=(0,t.useReducer)(g,null);return[n,(0,t.useCallback)((n=>e((()=>r(n)))),[])]})();return(0,m.jsx)("div",{className:"accordion-module--accordion--2e5df",children:(0,m.jsx)(_.Provider,{value:s,children:(0,m.jsx)(P.Provider,{value:r,children:n})})})};var I=r(7003);const K=e=>{let{href:n,children:r}=e;return(0,m.jsx)(u.Li,{children:(0,m.jsxs)(h.A,{href:n,children:[r,(0,m.jsx)(x.T,{})]})})},U=e=>{let{posts:n}=e;return n.map((e=>{let{slug:n,title:r}=e;return(0,m.jsx)(K,{href:n,children:r},n)}))},W=e=>{let{posts:n}=e;return n&&n.length>0&&(0,m.jsx)(I.Ol,{reversed:"reversed",start:n.length,children:(0,m.jsx)(U,{posts:n})})};var z=r(285),B=r(8088),J=r(4218),Q=r(6205);const D=e=>{let{children:n,heading:r,...s}=e;const o=(0,t.useId)();return(0,m.jsx)("header",{"aria-describedby":o,...s,children:(0,m.jsxs)(J.Z,{children:[(0,m.jsx)(Q.h,{id:o,children:r}),n]})})};var V=r(8771),G=r(6332),X=r(7018),Y=r(5821),ee=r(7256),ne=r(3825),re=r(5929),se=r(7311),te=r(2980),oe=r(7585);const ie="Posts",ce=()=>{const{pathname:e}=(0,s.useLocation)(),n=(0,o.L)(e);return(0,m.jsx)(te.i,{title:ie,url:n})},le=()=>{const e=(()=>{const e=(0,i.$)(),n=(0,o.L)("/search"),r=(0,o.L)("/");return(0,t.useMemo)((()=>({"@context":"https://schema.org","@type":"WebSite",name:e.title,description:e.description,url:r,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:`${n}?s={s}`},"query-input":"required name=s"}})),[e,n,r])})(),n=(0,oe.Z)(ie);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("title",{children:n}),(0,m.jsx)("link",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"}),(0,m.jsx)(ce,{}),(0,m.jsx)(se.h,{srcdoc:e})]})};var ae=()=>{const e=l(),{title:n,description:r}=(0,i.$)(),s=(0,Y.q)(),t=(0,z.I)(),o=a();return(0,m.jsx)(B.Q,{children:(0,m.jsx)(ne.v,{support:(0,m.jsx)(D,{heading:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(C.H2,{children:(0,m.jsx)(V.v,{id:"common",href:"#common",children:n})}),(0,m.jsx)(G.p,{children:r})]}),children:(0,m.jsx)(j,{})}),navigation:(0,m.jsx)(ee.E,{children:(0,m.jsx)(re.o,{"aria-describedby":"search",children:(0,m.jsxs)(J.Z,{children:[(0,m.jsx)("header",{children:(0,m.jsx)(Q.h,{children:(0,m.jsx)(C.H2,{children:(0,m.jsx)(V.v,{id:"search",href:"#search",children:"Search"})})})}),(0,m.jsx)(v,{action:t,onSubmit:s})]})})}),breadcrumbs:(0,m.jsx)(X.Jb,{children:(0,m.jsx)(X.gN,{children:(0,m.jsx)("span",{"aria-current":"page",children:"Home"})})}),mainbar:(0,m.jsx)(q,{children:Object.entries(o).map((e=>{let[n,r]=e;return(0,m.jsx)("nav",{"aria-labelledby":n,children:(0,m.jsx)(R,{value:n,summary:(0,m.jsx)(J.Z,{children:(0,m.jsx)("header",{children:(0,m.jsx)(Q.h,{children:(0,m.jsx)(F,{id:n,children:n})})})}),children:(0,m.jsx)(J.Z,{children:(0,m.jsx)(W,{posts:r})})})},n)}))}),heading:"Posts",children:(0,m.jsx)(W,{posts:e})})})}},3274:function(e,n,r){r.d(n,{x:function(){return t}});const s=function*e(n,r,s){if("string"!=typeof s)if(Array.isArray(s)){let t=0;for(const o of s){for(const s of e(`${n}${t}`,r,o))yield s;++t}}else for(const[t,o]of Object.entries(s)){const s=r?`${r}:${t}`:t,i=r?`${n}:${t}`:t;for(const n of e(i,s,o))yield n}else yield[n,r,s]},t=function*(e){for(const n of s(null,null,e))yield n}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-ccb65197b4c86a4bc9d5.js.map