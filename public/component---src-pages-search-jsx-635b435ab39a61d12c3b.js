"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[995],{3293:function(e,t,n){var r=n(4149),l=n(5893);t.Z=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("html",{lang:"en"}),(0,l.jsx)("link",{rel:"icon",href:r.Z}),(0,l.jsx)("meta",{name:"color-scheme",content:"dark light"}),(0,l.jsx)("meta",{name:"theme-color",content:"#6000A0"})]})},7585:function(e,t,n){var r=n(5785),l=n(7294),s=n(1883),a=n(2164),c=n(5893);const i=e=>{const t=(0,s.K2)("3159585216");return(0,l.useMemo)((()=>{const{title:n}=t.site.siteMetadata;return[].concat((0,r.Z)(e),[n]).join(a.k)}),[t,e])};t.Z=e=>{let{children:t}=e;const n=i(l.Children.toArray(t));return(0,c.jsx)("title",{children:n})}},9009:function(e,t,n){n.d(t,{E4:function(){return f},UI:function(){return Z},vw:function(){return N},Bi:function(){return l},Rx:function(){return i}});var r=n(1883);const l=()=>(0,r.K2)("614531932").allPost;var s=n(7294);const a=Function("return x => import(x);")(),c=async(e,t)=>{const n=await(async e=>{try{return await e}catch(t){return void console.warn(t)}})(a("/static/pagefind/pagefind.js"));if(n)return await n.search(e,t)},i=(e,t,n,r)=>{(0,s.useEffect)((()=>{if(!e)return;let{s:l,category:s,tag:a,place:i,person:o}=(e=>{const t=new URLSearchParams(e);let n=t.get("s");return""===n&&(n=null),{s:n,category:new Set(t.getAll("category")),tag:new Set(t.getAll("tag")),place:new Set(t.getAll("place")),person:new Set(t.getAll("person"))}})(e);const u={...s.size>0?{category:Array.from(s)}:null,...a.size>0?{tag:Array.from(a)}:null,...i.size>0?{place:Array.from(i)}:null,...o.size>0?{person:Array.from(o)}:null};let d=!1;return(async()=>{const e=await c(l,{filters:u});if(d)return;if(!e)return;const s=e.results.slice(0,t);n(s.map((e=>e.id))),await Promise.all(s.map((async(e,t)=>{const n=await e.data();if(d)return;const{url:l,meta:{title:s}}=n;r(t,l,s)})))})(),()=>d=!0}),[e,t,n,r])};var o=n(5282),u=n(333),d=n(5893);const h=(0,s.createContext)(),g=()=>{const e=(0,s.useContext)(h);return(0,d.jsx)(u.Li,{children:e})},m=e=>{let{children:t}=e;return(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(g,{}),children:(0,d.jsx)(u.Li,{children:t})})},x=e=>{let{children:t,fallback:n}=e;return(0,d.jsx)(u.Ul,{children:(0,d.jsx)(h.Provider,{value:n,children:t})})},j=e=>{let{loaded:t,url:n,title:r}=e;return t?(0,d.jsx)(u.A,{href:n,children:r}):(0,d.jsx)(o.UX,{})},p=()=>(0,d.jsx)(u.A,{role:"link","aria-disabled":"true",children:"Loading..."}),f=e=>{let{links:t}=e;return(0,d.jsx)(x,{fallback:(0,d.jsx)(p,{}),children:t.map((e=>(0,d.jsx)(m,{children:(0,d.jsx)(j,{...e})},e.id)))})};const b=(e,t)=>(0,d.jsx)("input",{className:"checkbox-module--checkbox--64bf5",ref:t,type:"checkbox",...e}),I=(0,s.forwardRef)(b);const v=(0,s.createContext)(null),y=e=>{let{name:t,children:n,onChange:r}=e;return(0,d.jsx)("fieldset",{className:"select-module--select--e325b",onChange:r,children:(0,d.jsx)(v.Provider,{value:t,children:n})})},w=e=>{let{children:t,onChange:n,selected:r,value:l}=e;const a=(0,s.useId)(),c=(0,s.useContext)(v);return(0,d.jsxs)("div",{className:"select-module--option--26192",children:[(0,d.jsx)(I,{id:a,name:c,value:l,onChange:n,checked:r}),(0,d.jsx)("label",{className:"select-module--optionLabel--3140a",htmlFor:a,children:t})]})};const C=e=>{let{value:t,onChange:n}=e;const r=(0,s.useId)();return(0,d.jsxs)("div",{className:"search-form-module--query--94c26",children:[(0,d.jsx)("label",{htmlFor:r,children:"Query"}),(0,d.jsx)(u.II,{id:r,name:"s",type:"search",value:t,onChange:n}),(0,d.jsx)(u.zx,{type:"submit",children:"Search"})]})},k=e=>{let{options:t,onChange:n,selected:r}=e;return(0,s.useMemo)((()=>t.map((e=>{const t=null==r?void 0:r.has(e);return{option:e,selected:t,onChange(r){n(r,e,t)}}}))),[t,r,n]).map((e=>{let{option:t,selected:n,onChange:r}=e;return(0,d.jsx)(w,{onChange:r,selected:n,value:t,children:t},t)}))},S=e=>{let{state:t,onChange:n}=e;return(0,s.useMemo)((()=>t.map((e=>{let{selected:t,options:r,legend:l,name:s}=e;return{options:r,name:s,legend:l,selected:t,onChange(e,t,r){n(e,t,r,s)}}}))),[t,n]).map((e=>{let{name:t,options:n,legend:r,selected:l,onChange:s}=e;return(0,d.jsxs)(y,{name:t,children:[(0,d.jsx)("legend",{className:"search-form-module--legend--21e3f",children:r}),(0,d.jsx)(k,{options:n,selected:l,onChange:s})]},t)}))},A={category:"Category",place:"Place",person:"Person",tag:"Tag"},Z=e=>{let{action:t,onSubmit:n,tags:r,state:l,set:a}=e;const c=(0,s.useCallback)((e=>a("s",e.target.value)),[a]),i=(0,s.useCallback)(((e,t,n,r)=>{const s=l[r],c=new Set(s);n?c.delete(t):c.add(t),a(r,c)}),[a,l]),o=(e=>{let{category:t,place:n,tag:r,person:l}=e;return{category:t,place:n,person:l,tag:r}})(l),u=Object.entries(o).map((e=>{let[t,n]=e;return{name:t,selected:n,legend:A[t],options:r[t]}}));return(0,d.jsxs)("form",{rel:"search",action:t,onSubmit:n,children:[(0,d.jsx)(C,{value:l.s,onChange:c}),(0,d.jsx)(S,{state:u,onChange:i})]})};const N=e=>{let{action:t,onSubmit:n}=e;const r=(0,s.useId)();return(0,d.jsx)("form",{rel:"search",action:t,onSubmit:n,children:(0,d.jsxs)("div",{className:"search-form-module--query--910f7",children:[(0,d.jsx)("label",{htmlFor:r,children:"Query"}),(0,d.jsx)(u.II,{id:r,name:"s",type:"search",required:!0}),(0,d.jsx)(u.zx,{type:"submit",children:"Search"})]})})}},4194:function(e,t,n){n.d(t,{q:function(){return s}});var r=n(7294),l=n(1883);const s=()=>r.useCallback((async e=>{var t,n,r,s;const a=e.nativeEvent,c=e.target,i=a.submitter;let o=i.getAttribute("formaction"),u=i.getAttribute("formenctype"),d=i.getAttribute("formmethod"),h=i.getAttribute("formtarget");if(null!==(t=o)&&void 0!==t||(o=c.getAttribute("action")),null!==(n=u)&&void 0!==n||(u=c.getAttribute("enctype")),null!==(r=d)&&void 0!==r||(d=c.method),null!==(s=h)&&void 0!==s||(h=c.getAttribute("target")),null!==u)return;if("get"!==d)return;if(null!==h)return;e.preventDefault();const g=o+"?"+new URLSearchParams(new FormData(c));await(0,l.c4)(g)}),[]);t.Z=s},6093:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p}});var r=n(7294),l=n(9009),s=n(333),a=n(7851),c=n(3293),i=n(7585),o=n(4194),u=n(2164),d=n(5893);const h={links:[],s:"",category:new Set,tag:new Set,place:new Set,person:new Set},g=(e,t)=>{const{type:n}=t;switch(n){case"init":{const{linkIds:n}=t;return{...e,links:n.map((e=>({id:e,loaded:!1})))}}case"load":{let{links:n}=e;const{index:r,url:l,title:s}=t,{id:a}=n[r];return n=Array.from(n),n[r]={id:a,loaded:!0,url:l,title:s},{...e,links:n}}case"set":{const{name:n,value:r}=t;return{...e,[n]:r}}default:return e}},m=(e,t)=>({type:"set",name:e,value:t}),x=e=>{var t;if(!e)return null;const n=new URLSearchParams(e);return{s:null!==(t=n.get("s"))&&void 0!==t?t:"",category:new Set(n.getAll("category")),tag:new Set(n.getAll("tag")),place:new Set(n.getAll("place")),person:new Set(n.getAll("person"))}},j=e=>{let{query:t}=e;return""!==t&&t?(0,d.jsxs)(d.Fragment,{children:[t,u.k,"Search"]}):"Search"},p=e=>{let{location:t}=e;const{0:n,1:l}=(0,r.useState)(null);(0,r.useEffect)((()=>{l(t.search)}),[t]);const s=(0,r.useMemo)((()=>{var e;const t=null===(e=x(n))||void 0===e?void 0:e.s;return""!==t&&t?[t,"Search"]:"Search"}),[n]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.Z,{}),(0,d.jsx)(i.Z,{children:s}),(0,d.jsx)("link",{rel:"modulepreload",href:"/static/pagefind/pagefind.js"}),(0,d.jsx)("link",{rel:"preload",href:"/static/pagefind/wasm.en.pagefind",as:"fetch",crossOrigin:"crossOrigin",type:"application/octet-stream"})]})};t.default=e=>{let{location:t}=e;const{0:n,1:c}=(0,r.useReducer)(g,h),{0:i,1:u}=(0,r.useTransition)(),p=(0,o.Z)(),f=(0,l.Bi)();(0,r.useEffect)((()=>{u((()=>c(m("search",t.search))))}),[t]);const b=(0,r.useCallback)((e=>u((()=>c({type:"init",linkIds:e})))),[]),I=(0,r.useCallback)(((e,t,n)=>u((()=>c(((e,t,n)=>({type:"load",index:e,url:t,title:n}))(e,t,n))))),[]),v=(0,r.useCallback)(((e,t)=>c(m(e,t))),[]),y=(0,r.useMemo)((()=>x(n.search)),[n.search]);(0,l.Rx)(n.search,10,b,I);const w=null==y?void 0:y.s;return(0,d.jsx)(s.l_,{children:(0,d.jsx)(a.T,{sidebar:(0,d.jsx)(s.Zb,{children:(0,d.jsx)(s.ol,{heading:(0,d.jsx)(s.H2,{children:"Search"}),children:(0,d.jsx)(l.UI,{action:"/search",onSubmit:p,tags:f,set:v,state:n})})}),breadcrumbs:(0,d.jsxs)(s.Jb,{children:[(0,d.jsx)(s.gN,{children:(0,d.jsx)(s.A,{href:"/",children:"Home"})}),(0,d.jsx)(s.gN,{children:(0,d.jsx)(s.A,{"aria-current":"page",children:"Search"})})]}),heading:(0,d.jsx)(s.H1,{children:(0,d.jsx)(j,{query:w})}),children:(0,d.jsx)(l.E4,{links:n.links})})})}},2164:function(e,t,n){n.d(t,{k:function(){return r}});const r=" — "},4149:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-search-jsx-635b435ab39a61d12c3b.js.map