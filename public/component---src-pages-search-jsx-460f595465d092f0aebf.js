"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[995],{3293:function(e,t,n){var r=n(4149),s=n(5893);t.Z=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("html",{lang:"en"}),(0,s.jsx)("link",{rel:"icon",href:r.Z}),(0,s.jsx)("meta",{name:"color-scheme",content:"dark light"}),(0,s.jsx)("meta",{name:"theme-color",content:"#6000A0"})]})},7585:function(e,t,n){var r=n(7294),s=n(9622),l=n(2164),a=n(5893);t.Z=e=>{let{children:t}=e;const n=(0,s.Z)(),c=r.Children.toArray(t);c.push(n.title);const i=c.join(l.Z);return(0,a.jsx)("title",{children:i})}},7788:function(e,t,n){n.d(t,{E4:function(){return b},ol:function(){return A},UI:function(){return S},vw:function(){return k},Bi:function(){return s},Rx:function(){return i}});var r=n(1883);const s=()=>(0,r.K2)("3144730248").allPost;var l=n(7294);const a=Function("return x => import(x);")(),c=async(e,t)=>{const n=await(async e=>{try{return await e}catch(t){return void console.warn(t)}})(a("/static/pagefind/pagefind.js"));if(n)return await n.search(e,t)},i=(e,t,n,r)=>{(0,l.useEffect)((()=>{if(!e)return;let{s:s,category:l,tag:a,place:i,person:o}=(e=>{const t=new URLSearchParams(e);let n=t.get("s");return""===n&&(n=null),{s:n,category:new Set(t.getAll("category")),tag:new Set(t.getAll("tag")),place:new Set(t.getAll("place")),person:new Set(t.getAll("person"))}})(e);const u={...l.size>0?{category:Array.from(l)}:null,...a.size>0?{tag:Array.from(a)}:null,...i.size>0?{place:Array.from(i)}:null,...o.size>0?{person:Array.from(o)}:null};let d=!1;return(async()=>{const e=await c(s,{filters:u});if(d)return;if(!e)return;const l=e.results.slice(0,t);n(l.map((e=>e.id))),await Promise.all(l.map((async(e,t)=>{const n=await e.data();if(d)return;const{url:s,meta:{title:l}}=n;r(t,s,l)})))})(),()=>d=!0}),[e,t,n,r])};const o=new Promise((()=>{})),u=(0,l.lazy)((()=>o));var d=n(3466),h=n(5893);const g=(0,l.createContext)(),x=()=>{const e=(0,l.useContext)(g);return(0,h.jsx)(d.Li,{children:e})},m=e=>{let{children:t}=e;return(0,h.jsx)(l.Suspense,{fallback:(0,h.jsx)(x,{}),children:(0,h.jsx)(d.Li,{children:t})})},j=e=>{let{children:t,fallback:n}=e;return(0,h.jsx)(d.Ul,{children:(0,h.jsx)(g.Provider,{value:n,children:t})})},p=e=>{let{loaded:t,url:n,title:r}=e;return t?(0,h.jsx)(d.A,{href:n,children:r}):(0,h.jsx)(u,{})},f=()=>(0,h.jsx)(d.A,{role:"link","aria-disabled":"true",children:"Loading..."}),b=e=>{let{links:t}=e;return(0,h.jsx)(j,{fallback:(0,h.jsx)(f,{}),children:t.map((e=>(0,h.jsx)(m,{children:(0,h.jsx)(p,{...e})},e.id)))})};const y=l.createContext(null),I=e=>{let{name:t,children:n,onChange:r}=e;return(0,h.jsx)("fieldset",{className:"select-module--select--e325b",onChange:r,children:(0,h.jsx)(y.Provider,{value:t,children:n})})},v=e=>{let{children:t,onChange:n,selected:r,value:s}=e;const a=l.useId(),c=l.useContext(y);return(0,h.jsxs)("div",{className:"select-module--option--26192",children:[(0,h.jsx)("input",{id:a,type:"checkbox",name:c,value:s,onChange:n,checked:r}),(0,h.jsx)("label",{className:"select-module--optionLabel--3140a",htmlFor:a,children:t})]})};const w=e=>{let{value:t,onChange:n}=e;const r=(0,l.useId)();return(0,h.jsxs)("div",{className:"search-form-module--query--94c26",children:[(0,h.jsx)("label",{htmlFor:r,children:"Query"}),(0,h.jsx)(d.II,{id:r,name:"s",type:"search",value:t,onChange:n}),(0,h.jsx)(d.zx,{type:"submit",children:"Search"})]})},C=e=>{let{options:t,onChange:n,selected:r}=e;return t.map((e=>(0,h.jsx)(v,{onChange:n,selected:null==r?void 0:r.has(e),value:e,children:e},e)))},S=e=>{let{action:t,onSubmit:n,tags:r,state:s,set:a}=e;const c=(0,l.useCallback)((e=>a("s",e.target.value)),[a]),i=(0,l.useCallback)((e=>{const{target:{checked:t,name:n,value:r}}=e,l=new Set(s[n]);t?l.add(r):l.delete(r),a(n,l)}),[a,s]);return(0,h.jsxs)("form",{rel:"search",action:t,onSubmit:n,children:[(0,h.jsx)(w,{value:s.s,onChange:c}),(0,h.jsxs)(I,{name:"category",children:[(0,h.jsx)("legend",{children:"Category"}),(0,h.jsx)(C,{options:r.category,selected:s.category,onChange:i})]}),(0,h.jsxs)(I,{name:"place",children:[(0,h.jsx)("legend",{children:"Place"}),(0,h.jsx)(C,{options:r.place,selected:s.place,onChange:i})]}),(0,h.jsxs)(I,{name:"person",children:[(0,h.jsx)("legend",{children:"People"}),(0,h.jsx)(C,{options:r.people,selected:s.person,onChange:i})]}),(0,h.jsxs)(I,{name:"tag",children:[(0,h.jsx)("legend",{children:"Tags"}),(0,h.jsx)(C,{options:r.tags,selected:s.tag,onChange:i})]})]})};const k=e=>{let{action:t,onSubmit:n}=e;const r=(0,l.useId)();return(0,h.jsx)("form",{rel:"search",action:t,onSubmit:n,children:(0,h.jsxs)("div",{className:"search-form-module--query--910f7",children:[(0,h.jsx)("label",{htmlFor:r,children:"Query"}),(0,h.jsx)(d.II,{id:r,name:"s",type:"search",required:!0}),(0,h.jsx)(d.zx,{type:"submit",children:"Search"})]})})};const A=e=>{let{heading:t,children:n,...r}=e;const s=(0,l.useId)();return(0,h.jsxs)("section",{"aria-describedby":s,role:"search",...r,children:[(0,h.jsx)("header",{className:"sr-only",children:(0,h.jsx)("hgroup",{id:s,children:t})}),n]})}},9622:function(e,t,n){var r=n(1883);t.Z=()=>(0,r.K2)("3000541721").site.siteMetadata},4194:function(e,t,n){n.d(t,{q:function(){return l}});var r=n(7294),s=n(1883);const l=()=>r.useCallback((async e=>{var t,n,r,l;const a=e.nativeEvent,c=e.target,i=a.submitter;let o=i.getAttribute("formaction"),u=i.getAttribute("formenctype"),d=i.getAttribute("formmethod"),h=i.getAttribute("formtarget");if(null!==(t=o)&&void 0!==t||(o=c.getAttribute("action")),null!==(n=u)&&void 0!==n||(u=c.getAttribute("enctype")),null!==(r=d)&&void 0!==r||(d=c.method),null!==(l=h)&&void 0!==l||(h=c.getAttribute("target")),null!==u)return;if("get"!==d)return;if(null!==h)return;e.preventDefault();const g=o+"?"+new URLSearchParams(new FormData(c));await(0,s.c4)(g)}),[]);t.Z=l},6093:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p}});var r=n(7294),s=n(7788),l=n(3466),a=n(3293),c=n(7585),i=n(4194),o=n(2164),u=n(5893);const d={links:[],s:"",category:new Set,tag:new Set,place:new Set,person:new Set},h=(e,t)=>{const{type:n}=t;switch(n){case"init":{const{linkIds:n}=t;return{...e,links:n.map((e=>({id:e,loaded:!1})))}}case"load":{let{links:n}=e;const{index:r,url:s,title:l}=t,{id:a}=n[r];return n=Array.from(n),n[r]={id:a,loaded:!0,url:s,title:l},{...e,links:n}}case"set":{const{name:n,value:r}=t;return{...e,[n]:r}}default:return e}},g=(e,t)=>({type:"set",name:e,value:t}),x=e=>{var t;if(!e)return null;const n=new URLSearchParams(e);return{s:null!==(t=n.get("s"))&&void 0!==t?t:"",category:new Set(n.getAll("category")),tag:new Set(n.getAll("tag")),place:new Set(n.getAll("place")),person:new Set(n.getAll("person"))}},m=e=>{let{query:t}=e;return""!==t&&t?(0,u.jsxs)(u.Fragment,{children:[t,o.k,"Search"]}):"Search"},j=e=>{let{state:t,set:n,tags:r,action:a,onSubmit:c}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Zb,{children:(0,u.jsx)(s.ol,{heading:(0,u.jsx)(l.H2,{children:"Search"}),children:(0,u.jsx)(s.UI,{action:a,onSubmit:c,tags:r,set:n,state:t})})}),(0,u.jsx)(l.Zb,{children:(0,u.jsx)(l.JL,{heading:(0,u.jsx)(l.H2,{children:"Breadcrumbs"}),children:(0,u.jsxs)(l.Jb,{children:[(0,u.jsx)(l.gN,{children:(0,u.jsx)(l.A,{href:"/",children:"Home"})}),(0,u.jsx)(l.gN,{children:(0,u.jsx)(l.A,{"aria-current":"page",children:"Search"})})]})})})]})},p=e=>{let{location:t}=e;const{0:n,1:s}=(0,r.useState)(null);(0,r.useEffect)((()=>{s(t.search)}),[t]);const l=(0,r.useMemo)((()=>{var e;const t=null===(e=x(n))||void 0===e?void 0:e.s;return""!==t&&t?[t,"Search"]:"Search"}),[n]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{}),(0,u.jsx)(c.Z,{children:l}),(0,u.jsx)("link",{rel:"modulepreload",href:"/static/pagefind/pagefind.js"}),(0,u.jsx)("link",{rel:"preload",href:"/static/pagefind/wasm.en.pagefind",as:"fetch",crossOrigin:"crossOrigin",type:"application/octet-stream"})]})};t.default=e=>{let{location:t}=e;const{0:n,1:a}=(0,r.useReducer)(h,d),{0:c,1:o}=(0,r.useTransition)(),p=(0,i.Z)(),f=(0,s.Bi)();(0,r.useEffect)((()=>{o((()=>a(g("search",t.search))))}),[t]);const b=(0,r.useCallback)((e=>o((()=>a({type:"init",linkIds:e})))),[]),y=(0,r.useCallback)(((e,t,n)=>o((()=>a(((e,t,n)=>({type:"load",index:e,url:t,title:n}))(e,t,n))))),[]),I=(0,r.useCallback)(((e,t)=>a(g(e,t))),[]),v=(0,r.useMemo)((()=>x(n.search)),[n.search]);(0,s.Rx)(n.search,10,b,y);const w=null==v?void 0:v.s;return(0,u.jsx)(l.T3,{sidebar:(0,u.jsx)(j,{state:n,set:I,tags:f,action:"/search",onSubmit:p}),children:(0,u.jsx)(l.Zb,{children:(0,u.jsx)(l.or,{heading:(0,u.jsx)(l.H1,{children:(0,u.jsx)(m,{query:w})}),children:(0,u.jsx)(s.E4,{links:n.links})})})})}},2164:function(e,t,n){n.d(t,{k:function(){return r}});const r=" — ";t.Z=r},4149:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-search-jsx-460f595465d092f0aebf.js.map