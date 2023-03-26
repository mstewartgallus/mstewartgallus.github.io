"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[995],{3293:function(e,t,n){var r=n(4149),s=n(5893);t.Z=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("html",{lang:"en"}),(0,s.jsx)("link",{rel:"icon",href:r.Z}),(0,s.jsx)("meta",{name:"color-scheme",content:"dark light"}),(0,s.jsx)("meta",{name:"theme-color",content:"#6000A0"})]})},7585:function(e,t,n){var r=n(5785),s=n(7294),l=n(1883),a=n(2164),c=n(5893);const i=e=>{const t=(0,l.K2)("3159585216");return(0,s.useMemo)((()=>{const{title:n}=t.site.siteMetadata;return[].concat((0,r.Z)(e),[n]).join(a.k)}),[t,e])};t.Z=e=>{let{children:t}=e;const n=i(s.Children.toArray(t));return(0,c.jsx)("title",{children:n})}},6153:function(e,t,n){n.d(t,{E4:function(){return f},ol:function(){return Z},UI:function(){return k},vw:function(){return A},Bi:function(){return s},Rx:function(){return i}});var r=n(1883);const s=()=>(0,r.K2)("614531932").allPost;var l=n(7294);const a=Function("return x => import(x);")(),c=async(e,t)=>{const n=await(async e=>{try{return await e}catch(t){return void console.warn(t)}})(a("/static/pagefind/pagefind.js"));if(n)return await n.search(e,t)},i=(e,t,n,r)=>{(0,l.useEffect)((()=>{if(!e)return;let{s:s,category:l,tag:a,place:i,person:o}=(e=>{const t=new URLSearchParams(e);let n=t.get("s");return""===n&&(n=null),{s:n,category:new Set(t.getAll("category")),tag:new Set(t.getAll("tag")),place:new Set(t.getAll("place")),person:new Set(t.getAll("person"))}})(e);const u={...l.size>0?{category:Array.from(l)}:null,...a.size>0?{tag:Array.from(a)}:null,...i.size>0?{place:Array.from(i)}:null,...o.size>0?{person:Array.from(o)}:null};let d=!1;return(async()=>{const e=await c(s,{filters:u});if(d)return;if(!e)return;const l=e.results.slice(0,t);n(l.map((e=>e.id))),await Promise.all(l.map((async(e,t)=>{const n=await e.data();if(d)return;const{url:s,meta:{title:l}}=n;r(t,s,l)})))})(),()=>d=!0}),[e,t,n,r])};var o=n(4037),u=n(3466),d=n(5893);const h=(0,l.createContext)(),g=()=>{const e=(0,l.useContext)(h);return(0,d.jsx)(u.Li,{children:e})},m=e=>{let{children:t}=e;return(0,d.jsx)(l.Suspense,{fallback:(0,d.jsx)(g,{}),children:(0,d.jsx)(u.Li,{children:t})})},x=e=>{let{children:t,fallback:n}=e;return(0,d.jsx)(u.Ul,{children:(0,d.jsx)(h.Provider,{value:n,children:t})})},j=e=>{let{loaded:t,url:n,title:r}=e;return t?(0,d.jsx)(u.A,{href:n,children:r}):(0,d.jsx)(o.UX,{})},p=()=>(0,d.jsx)(u.A,{role:"link","aria-disabled":"true",children:"Loading..."}),f=e=>{let{links:t}=e;return(0,d.jsx)(x,{fallback:(0,d.jsx)(p,{}),children:t.map((e=>(0,d.jsx)(m,{children:(0,d.jsx)(j,{...e})},e.id)))})};const b=(0,l.createContext)(null),y=e=>{let{name:t,children:n,onChange:r}=e;return(0,d.jsx)("fieldset",{className:"select-module--select--e325b",onChange:r,children:(0,d.jsx)(b.Provider,{value:t,children:n})})},I=e=>{let{children:t,onChange:n,selected:r,value:s}=e;const a=(0,l.useId)(),c=(0,l.useContext)(b);return(0,d.jsxs)("div",{className:"select-module--option--26192",children:[(0,d.jsx)("input",{id:a,type:"checkbox",name:c,value:s,onChange:n,checked:r}),(0,d.jsx)("label",{className:"select-module--optionLabel--3140a",htmlFor:a,children:t})]})};const v=e=>{let{value:t,onChange:n}=e;const r=(0,l.useId)();return(0,d.jsxs)("div",{className:"search-form-module--query--94c26",children:[(0,d.jsx)("label",{htmlFor:r,children:"Query"}),(0,d.jsx)(u.II,{id:r,name:"s",type:"search",value:t,onChange:n}),(0,d.jsx)(u.zx,{type:"submit",children:"Search"})]})},w=e=>{let{options:t,onChange:n,selected:r}=e;return(0,l.useMemo)((()=>t.map((e=>{const t=null==r?void 0:r.has(e);return{option:e,selected:t,onChange(r){n(r,e,t)}}}))),[t,r,n]).map((e=>{let{option:t,selected:n,onChange:r}=e;return(0,d.jsx)(I,{onChange:r,selected:n,value:t,children:t},t)}))},C=e=>{let{state:t,onChange:n}=e;return(0,l.useMemo)((()=>t.map((e=>{let{selected:t,options:r,legend:s,name:l}=e;return{options:r,name:l,legend:s,selected:t,onChange(e,t,r){n(e,t,r,l)}}}))),[t,n]).map((e=>{let{name:t,options:n,legend:r,selected:s,onChange:l}=e;return(0,d.jsxs)(y,{name:t,children:[(0,d.jsx)("legend",{children:r}),(0,d.jsx)(w,{options:n,selected:s,onChange:l})]},t)}))},S={category:"Category",place:"Place",person:"Person",tag:"Tag"},k=e=>{let{action:t,onSubmit:n,tags:r,state:s,set:a}=e;const c=(0,l.useCallback)((e=>a("s",e.target.value)),[a]),i=(0,l.useCallback)(((e,t,n,r)=>{s[r];const l=new Set;n?l.delete(t):l.add(t),a(r,l)}),[a,s]),o=(e=>{let{category:t,place:n,tag:r,person:s}=e;return{category:t,place:n,person:s,tag:r}})(s),u=Object.entries(o).map((e=>{let[t,n]=e;return{name:t,selected:n,legend:S[t],options:r[t]}}));return(0,d.jsxs)("form",{rel:"search",action:t,onSubmit:n,children:[(0,d.jsx)(v,{value:s.s,onChange:c}),(0,d.jsx)(C,{state:u,onChange:i})]})};const A=e=>{let{action:t,onSubmit:n}=e;const r=(0,l.useId)();return(0,d.jsx)("form",{rel:"search",action:t,onSubmit:n,children:(0,d.jsxs)("div",{className:"search-form-module--query--910f7",children:[(0,d.jsx)("label",{htmlFor:r,children:"Query"}),(0,d.jsx)(u.II,{id:r,name:"s",type:"search",required:!0}),(0,d.jsx)(u.zx,{type:"submit",children:"Search"})]})})};const Z=e=>{let{heading:t,children:n,...r}=e;const s=(0,l.useId)();return(0,d.jsxs)("section",{"aria-describedby":s,role:"search",...r,children:[(0,d.jsx)("header",{className:"sr-only",children:(0,d.jsx)("hgroup",{id:s,children:t})}),n]})}},4037:function(e,t,n){n.d(t,{UX:function(){return l},m8:function(){return a}});var r=n(7294);const s=new Promise((()=>{})),l=(0,r.lazy)((()=>s));const a=()=>{const{0:e,1:t}=(0,r.useTransition)(),{0:n,1:s}=(0,r.useState)(!1);return(0,r.useEffect)((()=>t((()=>s(!0)))),[]),n}},4194:function(e,t,n){n.d(t,{q:function(){return l}});var r=n(7294),s=n(1883);const l=()=>r.useCallback((async e=>{var t,n,r,l;const a=e.nativeEvent,c=e.target,i=a.submitter;let o=i.getAttribute("formaction"),u=i.getAttribute("formenctype"),d=i.getAttribute("formmethod"),h=i.getAttribute("formtarget");if(null!==(t=o)&&void 0!==t||(o=c.getAttribute("action")),null!==(n=u)&&void 0!==n||(u=c.getAttribute("enctype")),null!==(r=d)&&void 0!==r||(d=c.method),null!==(l=h)&&void 0!==l||(h=c.getAttribute("target")),null!==u)return;if("get"!==d)return;if(null!==h)return;e.preventDefault();const g=o+"?"+new URLSearchParams(new FormData(c));await(0,s.c4)(g)}),[]);t.Z=l},6093:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p}});var r=n(7294),s=n(6153),l=n(3466),a=n(3293),c=n(7585),i=n(4194),o=n(2164),u=n(5893);const d={links:[],s:"",category:new Set,tag:new Set,place:new Set,person:new Set},h=(e,t)=>{const{type:n}=t;switch(n){case"init":{const{linkIds:n}=t;return{...e,links:n.map((e=>({id:e,loaded:!1})))}}case"load":{let{links:n}=e;const{index:r,url:s,title:l}=t,{id:a}=n[r];return n=Array.from(n),n[r]={id:a,loaded:!0,url:s,title:l},{...e,links:n}}case"set":{const{name:n,value:r}=t;return{...e,[n]:r}}default:return e}},g=(e,t)=>({type:"set",name:e,value:t}),m=e=>{var t;if(!e)return null;const n=new URLSearchParams(e);return{s:null!==(t=n.get("s"))&&void 0!==t?t:"",category:new Set(n.getAll("category")),tag:new Set(n.getAll("tag")),place:new Set(n.getAll("place")),person:new Set(n.getAll("person"))}},x=e=>{let{query:t}=e;return""!==t&&t?(0,u.jsxs)(u.Fragment,{children:[t,o.k,"Search"]}):"Search"},j=e=>{let{state:t,set:n,tags:r,action:a,onSubmit:c}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Zb,{children:(0,u.jsx)(s.ol,{heading:(0,u.jsx)(l.H2,{children:"Search"}),children:(0,u.jsx)(s.UI,{action:a,onSubmit:c,tags:r,set:n,state:t})})}),(0,u.jsx)(l.Zb,{children:(0,u.jsx)(l.JL,{heading:(0,u.jsx)(l.H2,{children:"Breadcrumbs"}),children:(0,u.jsxs)(l.Jb,{children:[(0,u.jsx)(l.gN,{children:(0,u.jsx)(l.A,{href:"/",children:"Home"})}),(0,u.jsx)(l.gN,{children:(0,u.jsx)(l.A,{"aria-current":"page",children:"Search"})})]})})})]})},p=e=>{let{location:t}=e;const{0:n,1:s}=(0,r.useState)(null);(0,r.useEffect)((()=>{s(t.search)}),[t]);const l=(0,r.useMemo)((()=>{var e;const t=null===(e=m(n))||void 0===e?void 0:e.s;return""!==t&&t?[t,"Search"]:"Search"}),[n]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{}),(0,u.jsx)(c.Z,{children:l}),(0,u.jsx)("link",{rel:"modulepreload",href:"/static/pagefind/pagefind.js"}),(0,u.jsx)("link",{rel:"preload",href:"/static/pagefind/wasm.en.pagefind",as:"fetch",crossOrigin:"crossOrigin",type:"application/octet-stream"})]})};t.default=e=>{let{location:t}=e;const{0:n,1:a}=(0,r.useReducer)(h,d),{0:c,1:o}=(0,r.useTransition)(),p=(0,i.Z)(),f=(0,s.Bi)();(0,r.useEffect)((()=>{o((()=>a(g("search",t.search))))}),[t]);const b=(0,r.useCallback)((e=>o((()=>a({type:"init",linkIds:e})))),[]),y=(0,r.useCallback)(((e,t,n)=>o((()=>a(((e,t,n)=>({type:"load",index:e,url:t,title:n}))(e,t,n))))),[]),I=(0,r.useCallback)(((e,t)=>a(g(e,t))),[]),v=(0,r.useMemo)((()=>m(n.search)),[n.search]);(0,s.Rx)(n.search,10,b,y);const w=null==v?void 0:v.s;return(0,u.jsx)(l.T3,{sidebar:(0,u.jsx)(j,{state:n,set:I,tags:f,action:"/search",onSubmit:p}),children:(0,u.jsx)(l.Zb,{children:(0,u.jsx)(l.or,{heading:(0,u.jsx)(l.H1,{children:(0,u.jsx)(x,{query:w})}),children:(0,u.jsx)(s.E4,{links:n.links})})})})}},2164:function(e,t,n){n.d(t,{k:function(){return r}});const r=" — "},4149:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-search-jsx-990f75ca81f67b0ec3cc.js.map