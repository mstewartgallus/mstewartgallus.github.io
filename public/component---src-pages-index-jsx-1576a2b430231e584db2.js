"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[230],{3293:function(e,n,t){var r=t(4149),s=t(5893);n.Z=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("html",{lang:"en"}),(0,s.jsx)("link",{rel:"icon",href:r.Z}),(0,s.jsx)("meta",{name:"color-scheme",content:"dark light"}),(0,s.jsx)("meta",{name:"theme-color",content:"#6000A0"})]})},7311:function(e,n,t){var r=t(1883),s=t(5893);n.Z=e=>{let{srcdoc:n}=e;const t=JSON.stringify(n);return(0,s.jsx)(r.Xf,{type:"application/ld+json",children:t})}},2980:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(3274),s=t(9622),l=t(7294),i=t(4149);var c=e=>{let{description:n,url:t,title:r}=e;const c=(0,s.Z)();return l.useMemo((()=>({og:{site_name:c.title,title:r,image:i.Z,description:null!=n?n:c.description,url:t}})),[c,n,t,r])},o=t(5893);const a=e=>{const n=c(e);return Array.from(function*(){for(const[e,t,s]of(0,r.Z)(n))yield(0,o.jsx)("meta",{property:t,content:s},e)}())};var u=e=>{const{description:n,url:t}=e,r=(0,s.Z)();return(0,o.jsxs)(o.Fragment,{children:[t&&(0,o.jsx)("link",{rel:"canonical",href:t}),(0,o.jsx)("meta",{name:"description",content:null!=n?n:r.description}),(0,o.jsx)(a,{...e})]})}},7585:function(e,n,t){var r=t(5785),s=t(7294),l=t(1883),i=t(2164),c=t(5893);const o=e=>{const n=(0,l.K2)("3159585216");return(0,s.useMemo)((()=>{const{title:t}=n.site.siteMetadata;return[].concat((0,r.Z)(e),[t]).join(i.k)}),[n,e])};n.Z=e=>{let{children:n}=e;const t=o(s.Children.toArray(n));return(0,c.jsx)("title",{children:t})}},4883:function(e,n,t){t.d(n,{I:function(){return o}});var r=t(5785),s=t(7294),l=t(1883);const i="/search",c=function(e,n){return void 0===n&&(n=[]),n.map((n=>[e,n]))},o=e=>{const{s:n,category:t,tag:o,place:a,person:u}=null!=e?e:{};return(0,s.useMemo)((()=>{const e=[].concat((0,r.Z)(n?["s",n]:[]),(0,r.Z)(c("category",t)),(0,r.Z)(c("tag",o)),(0,r.Z)(c("place",a)),(0,r.Z)(c("person",u))),s=String(new URLSearchParams(e)),d=""===s?i:i+"?"+s;return(0,l.dq)(d)}),[n,t,o,a,u])}},6153:function(e,n,t){t.d(n,{E4:function(){return f},ol:function(){return S},UI:function(){return k},vw:function(){return w},Bi:function(){return s},Rx:function(){return o}});var r=t(1883);const s=()=>(0,r.K2)("614531932").allPost;var l=t(7294);const i=Function("return x => import(x);")(),c=async(e,n)=>{const t=await(async e=>{try{return await e}catch(n){return void console.warn(n)}})(i("/static/pagefind/pagefind.js"));if(t)return await t.search(e,n)},o=(e,n,t,r)=>{(0,l.useEffect)((()=>{if(!e)return;let{s:s,category:l,tag:i,place:o,person:a}=(e=>{const n=new URLSearchParams(e);let t=n.get("s");return""===t&&(t=null),{s:t,category:new Set(n.getAll("category")),tag:new Set(n.getAll("tag")),place:new Set(n.getAll("place")),person:new Set(n.getAll("person"))}})(e);const u={...l.size>0?{category:Array.from(l)}:null,...i.size>0?{tag:Array.from(i)}:null,...o.size>0?{place:Array.from(o)}:null,...a.size>0?{person:Array.from(a)}:null};let d=!1;return(async()=>{const e=await c(s,{filters:u});if(d)return;if(!e)return;const l=e.results.slice(0,n);t(l.map((e=>e.id))),await Promise.all(l.map((async(e,n)=>{const t=await e.data();if(d)return;const{url:s,meta:{title:l}}=t;r(n,s,l)})))})(),()=>d=!0}),[e,n,t,r])};var a=t(4037),u=t(4211),d=t(5893);const h=(0,l.createContext)(),x=()=>{const e=(0,l.useContext)(h);return(0,d.jsx)(u.Li,{children:e})},m=e=>{let{children:n}=e;return(0,d.jsx)(l.Suspense,{fallback:(0,d.jsx)(x,{}),children:(0,d.jsx)(u.Li,{children:n})})},j=e=>{let{children:n,fallback:t}=e;return(0,d.jsx)(u.Ul,{children:(0,d.jsx)(h.Provider,{value:t,children:n})})},p=e=>{let{loaded:n,url:t,title:r}=e;return n?(0,d.jsx)(u.A,{href:t,children:r}):(0,d.jsx)(a.UX,{})},g=()=>(0,d.jsx)(u.A,{role:"link","aria-disabled":"true",children:"Loading..."}),f=e=>{let{links:n}=e;return(0,d.jsx)(j,{fallback:(0,d.jsx)(g,{}),children:n.map((e=>(0,d.jsx)(m,{children:(0,d.jsx)(p,{...e})},e.id)))})};const b=(0,l.createContext)(null),v=e=>{let{name:n,children:t,onChange:r}=e;return(0,d.jsx)("fieldset",{className:"select-module--select--e325b",onChange:r,children:(0,d.jsx)(b.Provider,{value:n,children:t})})},y=e=>{let{children:n,onChange:t,selected:r,value:s}=e;const i=(0,l.useId)(),c=(0,l.useContext)(b);return(0,d.jsxs)("div",{className:"select-module--option--26192",children:[(0,d.jsx)("input",{id:i,type:"checkbox",name:c,value:s,onChange:t,checked:r}),(0,d.jsx)("label",{className:"select-module--optionLabel--3140a",htmlFor:i,children:n})]})};const C=e=>{let{value:n,onChange:t}=e;const r=(0,l.useId)();return(0,d.jsxs)("div",{className:"search-form-module--query--94c26",children:[(0,d.jsx)("label",{htmlFor:r,children:"Query"}),(0,d.jsx)(u.II,{id:r,name:"s",type:"search",value:n,onChange:t}),(0,d.jsx)(u.zx,{type:"submit",children:"Search"})]})},I=e=>{let{options:n,onChange:t,selected:r}=e;return(0,l.useMemo)((()=>n.map((e=>{const n=null==r?void 0:r.has(e);return{option:e,selected:n,onChange(r){t(r,e,n)}}}))),[n,r,t]).map((e=>{let{option:n,selected:t,onChange:r}=e;return(0,d.jsx)(y,{onChange:r,selected:t,value:n,children:n},n)}))},Z=e=>{let{state:n,onChange:t}=e;return(0,l.useMemo)((()=>n.map((e=>{let{selected:n,options:r,legend:s,name:l}=e;return{options:r,name:l,legend:s,selected:n,onChange(e,n,r){t(e,n,r,l)}}}))),[n,t]).map((e=>{let{name:n,options:t,legend:r,selected:s,onChange:l}=e;return(0,d.jsxs)(v,{name:n,children:[(0,d.jsx)("legend",{children:r}),(0,d.jsx)(I,{options:t,selected:s,onChange:l})]},n)}))},A={category:"Category",place:"Place",person:"Person",tag:"Tag"},k=e=>{let{action:n,onSubmit:t,tags:r,state:s,set:i}=e;const c=(0,l.useCallback)((e=>i("s",e.target.value)),[i]),o=(0,l.useCallback)(((e,n,t,r)=>{s[r];const l=new Set;t?l.delete(n):l.add(n),i(r,l)}),[i,s]),a=(e=>{let{category:n,place:t,tag:r,person:s}=e;return{category:n,place:t,person:s,tag:r}})(s),u=Object.entries(a).map((e=>{let[n,t]=e;return{name:n,selected:t,legend:A[n],options:r[n]}}));return(0,d.jsxs)("form",{rel:"search",action:n,onSubmit:t,children:[(0,d.jsx)(C,{value:s.s,onChange:c}),(0,d.jsx)(Z,{state:u,onChange:o})]})};const w=e=>{let{action:n,onSubmit:t}=e;const r=(0,l.useId)();return(0,d.jsx)("form",{rel:"search",action:n,onSubmit:t,children:(0,d.jsxs)("div",{className:"search-form-module--query--910f7",children:[(0,d.jsx)("label",{htmlFor:r,children:"Query"}),(0,d.jsx)(u.II,{id:r,name:"s",type:"search",required:!0}),(0,d.jsx)(u.zx,{type:"submit",children:"Search"})]})})};const S=e=>{let{heading:n,children:t,...r}=e;const s=(0,l.useId)();return(0,d.jsxs)("section",{"aria-describedby":s,role:"search",...r,children:[(0,d.jsx)("header",{className:"sr-only",children:(0,d.jsx)("hgroup",{id:s,children:n})}),t]})}},4037:function(e,n,t){t.d(n,{UX:function(){return l},m8:function(){return i}});var r=t(7294);const s=new Promise((()=>{})),l=(0,r.lazy)((()=>s));const i=()=>{const{0:e,1:n}=(0,r.useTransition)(),{0:t,1:s}=(0,r.useState)(!1);return(0,r.useEffect)((()=>n((()=>s(!0)))),[]),t}},6262:function(e,n,t){var r=t(1883),s=t(7294);n.Z=e=>{const n=(0,r.K2)("1271460761");return s.useMemo((()=>{const t=n.site.siteMetadata;return new URL(e,t.siteUrl).toString()}),[n,e])}},9622:function(e,n,t){var r=t(1883);n.Z=()=>(0,r.K2)("3000541721").site.siteMetadata},4194:function(e,n,t){t.d(n,{q:function(){return l}});var r=t(7294),s=t(1883);const l=()=>r.useCallback((async e=>{var n,t,r,l;const i=e.nativeEvent,c=e.target,o=i.submitter;let a=o.getAttribute("formaction"),u=o.getAttribute("formenctype"),d=o.getAttribute("formmethod"),h=o.getAttribute("formtarget");if(null!==(n=a)&&void 0!==n||(a=c.getAttribute("action")),null!==(t=u)&&void 0!==t||(u=c.getAttribute("enctype")),null!==(r=d)&&void 0!==r||(d=c.method),null!==(l=h)&&void 0!==l||(h=c.getAttribute("target")),null!==u)return;if("get"!==d)return;if(null!==h)return;e.preventDefault();const x=a+"?"+new URLSearchParams(new FormData(c));await(0,s.c4)(x)}),[]);n.Z=l},265:function(e,n,t){t.r(n),t.d(n,{Head:function(){return R},default:function(){return D}});var r=t(7294),s=t(4211),l=t(5893);const i=()=>(0,l.jsxs)(s.Ul,{children:[(0,l.jsx)(s.Li,{children:(0,l.jsx)(s.A,{rel:"alternate",href:"/feed.xml",children:"Subscribe (RSS)"})}),(0,l.jsx)(s.Li,{children:(0,l.jsx)(s.A,{rel:"author",href:"/about",children:"About the Author"})}),(0,l.jsx)(s.Li,{children:(0,l.jsx)(s.A,{href:"/README",children:"About this Blog"})})]});var c=t(4037);const o=e=>{let{children:n}=e;return(0,l.jsx)("span",{className:"closed-icon-module--closed--1f1dc",children:n})};const a=e=>{let{children:n}=e;return(0,l.jsx)("span",{className:"open-icon-module--open--0c35d",children:n})};const u=e=>{let{icon:n,children:t}=e;return(0,l.jsxs)("span",{className:"panel-module--details--32bb4",children:[(0,l.jsx)("span",{"aria-hidden":"true",children:n}),(0,l.jsx)("span",{children:t})]})},d=e=>{let{open:n}=e;return(0,l.jsx)(u,{icon:n?(0,l.jsx)(a,{}):(0,l.jsx)(o,{}),children:n?"Close":"Open"})},h=(0,r.createContext)(null),x=e=>{let{children:n,value:t}=e;return(0,l.jsx)("div",{children:(0,l.jsx)(h.Provider,{value:t,children:n})})},m=e=>{let{children:n,heading:t,value:i,onClick:o}=e;const{0:a,1:u}=(0,r.useTransition)(),x=(0,r.useCallback)((e=>{e.preventDefault(),u((()=>o(e)))}),[o]),m=(0,r.useId)(),j=(0,r.useContext)(h),p=!(0,c.m8)(),g=m+"-content",f=m+"-title",b=m+"-button",v=j===i,y=p||v;return(0,l.jsxs)(s.Zb,{children:[(0,l.jsx)(s.H2,{children:(0,l.jsxs)("div",{className:"panel-module--insideHeading--afeef",children:[(0,l.jsx)("div",{className:"panel-module--button--1a518",children:(0,l.jsx)(s.zx,{id:b,"aria-controls":g,"aria-expanded":String(v),onClick:x,children:(0,l.jsx)(d,{open:v})})}),(0,l.jsx)("label",{id:f,htmlFor:b,children:t})]})}),(0,l.jsx)("div",{className:"panel-module--wrapper--d176c","aria-hidden":y?null:"true",inert:y?null:"inert",children:(0,l.jsx)("nav",{id:g,"aria-labelledby":f,hidden:y?null:"hidden","data-server":p?"server":null,className:"panel-module--content--7fee6",children:n})})]})},j=e=>{let{href:n,children:t}=e;return(0,l.jsx)(s.Li,{children:(0,l.jsx)(s.A,{href:n,children:t})})},p=e=>{let{children:n}=e;return(0,l.jsx)(s.Ol,{reversed:"reversed",children:n})},g=e=>{let{posts:n}=e;return n.map((e=>{let{slug:n,title:t}=e;return(0,l.jsx)(j,{href:n,children:t},n)}))},f=e=>{let{posts:n}=e;return n&&n.length>0&&(0,l.jsx)(p,{children:(0,l.jsx)(g,{posts:n})})};var b=t(1883);const v=()=>{const e=(0,b.K2)("2796747441");return(0,r.useMemo)((()=>e.allLink.nodes.map((e=>e.post))),[e])};const y=()=>{const e=(0,b.K2)("2477755614");return(0,r.useMemo)((()=>Object.fromEntries(e.allLink.group.map((e=>{let{category:n,nodes:t}=e;return[n,t.map((e=>e.post))]})))),[e])};var C=t(6262),I=t(9622);const Z=()=>{const e=(0,I.Z)(),n=(0,C.Z)("/search"),t=(0,C.Z)("/");return(0,r.useMemo)((()=>({"@context":"https://schema.org","@type":"WebSite",name:e.title,description:e.description,url:t,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:n+"?s={s}"},"query-input":"required name=s"}})),[e,n,t])};var A=t(4883),k=t(6153),w=t(3293),S=t(7311),N=t(2980),P=t(7585),L=t(4194);const M=(e,n)=>{const{type:t}=n;if("toggle"===t){const{category:t}=n;return e===t?null:t}return e},F=e=>{let{posts:n,onClick:t}=e;return(0,r.useMemo)((()=>Object.entries(n).map((e=>{let[n,r]=e;return[n,{posts:r,onClick(e){t(n,e)}}]}))),[n,t]).map((e=>{let[n,{posts:t,onClick:r}]=e;return(0,l.jsx)(m,{value:n,heading:n,onClick:r,children:(0,l.jsx)(f,{posts:t})},n)}))},H=()=>{const e=y(),{0:n,1:t}=(0,r.useReducer)(M,null),s=(0,r.useCallback)(((e,n)=>{t({type:"toggle",category:e})}),[]);return(0,l.jsx)(x,{value:n,children:(0,l.jsx)(F,{posts:e,onClick:s})})},B=(0,r.memo)(H),U=e=>{let{title:n,description:t,action:r,onSubmit:c}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Zb,{children:(0,l.jsx)(s.h4,{heading:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.H2,{children:n}),(0,l.jsx)("p",{style:{marginBlock:0},children:t})]}),children:(0,l.jsx)(i,{})})}),(0,l.jsx)(s.Zb,{children:(0,l.jsx)(k.ol,{heading:(0,l.jsx)(s.H2,{children:"Search"}),children:(0,l.jsx)(k.vw,{action:r,onSubmit:c})})}),(0,l.jsx)(s.Zb,{children:(0,l.jsx)(s.JL,{heading:(0,l.jsx)(s.H2,{children:"Breadcrumbs"}),children:(0,l.jsx)(s.Jb,{children:(0,l.jsx)(s.gN,{children:(0,l.jsx)(s.A,{"aria-current":"page",children:"Home"})})})})})]})},z="Table of Contents",R=e=>{let{location:{pathname:n}}=e;const t=(0,C.Z)(n);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.Z,{}),(0,l.jsx)(P.Z,{children:z}),(0,l.jsx)("link",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"}),(0,l.jsx)(N.Z,{title:z,url:t})]})};var D=()=>{const e=v(),{title:n,description:t}=(0,I.Z)(),r=Z(),i=(0,L.q)(),c=(0,A.I)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.T3,{sidebar:(0,l.jsx)(U,{title:n,description:t,action:c,onSubmit:i}),children:[(0,l.jsx)(s.Zb,{children:(0,l.jsx)(s.or,{heading:(0,l.jsx)(s.H1,{children:"Posts"}),children:(0,l.jsx)(f,{posts:e})})}),(0,l.jsx)(B,{})]}),(0,l.jsx)(S.Z,{srcdoc:r})]})}},3274:function(e,n,t){const r=function*e(n,t,r){if("string"!=typeof r)if(Array.isArray(r)){let s=0;for(const l of r){for(const r of e(""+n+s,t,l))yield r;++s}}else for(const[s,l]of Object.entries(r)){const r=t?t+":"+s:s,i=t?n+":"+s:s;for(const n of e(i,r,l))yield n}else yield[n,t,r]};n.Z=function*(e){for(const n of r(null,null,e))yield n}},2164:function(e,n,t){t.d(n,{k:function(){return r}});const r=" — "},4149:function(e,n){n.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-1576a2b430231e584db2.js.map