"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[995],{3293:function(e,t,n){var r=n(4149),s=n(5893);t.Z=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("html",{lang:"en"}),(0,s.jsx)("link",{rel:"icon",href:r.Z}),(0,s.jsx)("meta",{name:"color-scheme",content:"dark light"}),(0,s.jsx)("meta",{name:"theme-color",content:"#6000A0"})]})},7585:function(e,t,n){var r=n(7294),s=n(9622),l=n(2164),a=n(5893);t.Z=e=>{let{children:t}=e;const n=(0,s.Z)(),c=r.Children.toArray(t);c.push(n.title);const i=c.join(l.Z);return(0,a.jsx)("title",{children:i})}},3078:function(e,t,n){n.d(t,{Wx:function(){return j},ol:function(){return u},UI:function(){return h},Ph:function(){return x},Bi:function(){return s},Rx:function(){return i}});var r=n(1883);const s=()=>(0,r.K2)("3144730248").allPost;var l=n(7294);const a=Function("return x => import(x);")(),c=async(e,t)=>{const n=await(async e=>{try{return await e}catch(t){return void console.warn(t)}})(a("/static/pagefind/pagefind.js"));if(n)return await n.search(e,t)},i=(e,t,n,r)=>{l.useEffect((()=>{if(!e)return;let{s:s,category:l,tag:a,place:i,person:o}=(e=>{const t=new URLSearchParams(e);let n=t.get("s");return""===n&&(n=null),{s:n,category:new Set(t.getAll("category")),tag:new Set(t.getAll("tag")),place:new Set(t.getAll("place")),person:new Set(t.getAll("person"))}})(e);const u={...l.size>0?{category:Array.from(l)}:null,...a.size>0?{tag:Array.from(a)}:null,...i.size>0?{place:Array.from(i)}:null,...o.size>0?{person:Array.from(o)}:null};let d=!1;return(async()=>{const e=await c(s,{filters:u});if(d)return;const l=e.results.slice(0,t);n(l.map((e=>e.id))),await Promise.all(l.map((async(e,t)=>{const n=await e.data();if(d)return;const{url:s,meta:{title:l}}=n;r(t,s,l)})))})(),()=>d=!0}),[e,t,n,r])};var o=n(5893);const u=e=>{let{heading:t,children:n,...r}=e;const s=(0,l.useId)();return(0,o.jsxs)("section",{"aria-describedby":s,role:"search",...r,children:[(0,o.jsx)("header",{className:"sr-only",children:(0,o.jsx)("hgroup",{id:s,children:t})}),n]})};var d=n(4194);const h=()=>{const e=(0,l.useId)(),t=(0,d.q)();return(0,o.jsx)("form",{rel:"search",action:"/search",onSubmit:t,children:(0,o.jsxs)("div",{className:"search-form-module--query--94c26",children:[(0,o.jsx)("label",{htmlFor:e,children:"Query"}),(0,o.jsx)("input",{id:e,name:"s",type:"search",required:!0}),(0,o.jsx)("button",{type:"submit",children:"Search"})]})})};const g=l.createContext(null),x=e=>{let{name:t,children:n,onChange:r}=e;return(0,o.jsx)("fieldset",{className:"select-module--select--e325b",onChange:r,children:(0,o.jsx)(g.Provider,{value:t,children:n})})},j=e=>{let{children:t,onChange:n,selected:r,value:s}=e;const a=l.useId(),c=l.useContext(g);return(0,o.jsxs)("div",{className:"select-module--option--26192",children:[(0,o.jsx)("input",{id:a,type:"checkbox",name:c,value:s,onChange:n,checked:r}),(0,o.jsx)("label",{htmlFor:a,children:t})]})}},9622:function(e,t,n){var r=n(1883);t.Z=()=>(0,r.K2)("3000541721").site.siteMetadata},4194:function(e,t,n){n.d(t,{q:function(){return l}});var r=n(7294),s=n(1883);const l=()=>r.useCallback((async e=>{var t,n,r,l;const a=e.nativeEvent,c=e.target,i=a.submitter;let o=i.getAttribute("formaction"),u=i.getAttribute("formenctype"),d=i.getAttribute("formmethod"),h=i.getAttribute("formtarget");if(null!==(t=o)&&void 0!==t||(o=c.getAttribute("action")),null!==(n=u)&&void 0!==n||(u=c.getAttribute("enctype")),null!==(r=d)&&void 0!==r||(d=c.method),null!==(l=h)&&void 0!==l||(h=c.getAttribute("target")),null!==u)return;if("get"!==d)return;if(null!==h)return;e.preventDefault();const g=o+"?"+new URLSearchParams(new FormData(c));await(0,s.c4)(g)}),[]);t.Z=l},9634:function(e,t,n){n.r(t),n.d(t,{Head:function(){return S},default:function(){return A}});var r=n(7294),s=n(3078),l=n(5706),a=n(3293),c=n(7585),i=n(4194),o=n(2164),u=n(5893);const d={links:null,s:"",category:new Set,tag:new Set,place:new Set,person:new Set},h=(e,t)=>{const{type:n}=t;switch(n){case"init":{const{linkIds:n}=t;return{...e,links:n.map((e=>({id:e})))}}case"load":{let{links:n}=e;const{index:r,url:s,title:l}=t,{id:a}=n[r];return n=Array.from(n),n[r]={id:a,result:{url:s,title:l}},{...e,links:n}}case"set":{const{name:n,value:r}=t;return{...e,[n]:r}}default:return e}},g=(e,t)=>({type:"set",name:e,value:t}),x=e=>{var t;if(!e)return null;const n=new URLSearchParams(e);return{s:null!==(t=n.get("s"))&&void 0!==t?t:"",category:new Set(n.getAll("category")),tag:new Set(n.getAll("tag")),place:new Set(n.getAll("place")),person:new Set(n.getAll("person"))}},j=e=>{let{url:t,title:n}=e;return(0,u.jsx)(l.A,{href:t,children:n})},m=()=>(0,u.jsx)(l.A,{children:"Loading"}),p=e=>{let{results:t}=e;return t.map((e=>{let{id:t,result:n}=e;return(0,u.jsx)("li",{className:"search-module--result--3aca7","aria-hidden":n?null:"true",children:n?(0,u.jsx)(j,{...n}):(0,u.jsx)(m,{})},t)}))},f=e=>{let{results:t}=e;return(0,u.jsx)("ul",{children:(0,u.jsx)(p,{results:t})})},b=e=>{let{links:t}=e;return t?(0,u.jsx)(f,{results:t}):(0,u.jsx)("ul",{"aria-hidden":"true"})},y=e=>{let{value:t,onChange:n}=e;const s=r.useId();return(0,u.jsxs)("div",{className:"search-module--query--d9f7b",children:[(0,u.jsx)("label",{htmlFor:s,children:"Query"}),(0,u.jsx)("input",{id:s,name:"s",type:"search",value:t,onChange:n}),(0,u.jsx)("button",{type:"submit",children:"Search"})]})},v=e=>{let{options:t,onChange:n,selected:r}=e;return t.map((e=>(0,u.jsx)(s.Wx,{onChange:n,selected:null==r?void 0:r.has(e),value:e,children:e},e)))},I=e=>{let{onSubmit:t,tags:n,state:l,set:a}=e;const c=r.useCallback((e=>a("s",e.target.value)),[a]),i=r.useCallback((e=>{const{target:{checked:t,name:n,value:r}}=e,s=new Set(l[n]);t?s.add(r):s.delete(r),a(n,s)}),[a,l]);return(0,u.jsxs)("form",{rel:"search",action:"/search",onSubmit:t,children:[(0,u.jsx)(y,{value:l.s,onChange:c}),(0,u.jsxs)(s.Ph,{name:"category",children:[(0,u.jsx)("legend",{children:"Category"}),(0,u.jsx)(v,{options:n.category,selected:l.category,onChange:i})]}),(0,u.jsxs)(s.Ph,{name:"place",children:[(0,u.jsx)("legend",{children:"Place"}),(0,u.jsx)(v,{options:n.place,selected:l.place,onChange:i})]}),(0,u.jsxs)(s.Ph,{name:"person",children:[(0,u.jsx)("legend",{children:"People"}),(0,u.jsx)(v,{options:n.people,selected:l.person,onChange:i})]}),(0,u.jsxs)(s.Ph,{name:"tag",children:[(0,u.jsx)("legend",{children:"Tags"}),(0,u.jsx)(v,{options:n.tags,selected:l.tag,onChange:i})]})]})},w=e=>{let{query:t}=e;return""!==t&&t?(0,u.jsxs)("h1",{children:[t,o.k,"Search"]}):(0,u.jsx)("h1",{children:"Search"})},C=e=>{let{state:t,set:n}=e;const r=(0,i.Z)(),a=(0,s.Bi)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Zb,{children:(0,u.jsx)(s.ol,{heading:(0,u.jsx)("h2",{children:"Search"}),children:(0,u.jsx)(I,{onSubmit:r,tags:a,set:n,state:t})})}),(0,u.jsx)(l.Zb,{children:(0,u.jsx)(l.JL,{heading:(0,u.jsx)("h2",{children:"Breadcrumbs"}),children:(0,u.jsxs)(l.Jb,{children:[(0,u.jsx)(l.gN,{children:(0,u.jsx)(l.A,{href:"/",children:"Home"})}),(0,u.jsx)(l.gN,{children:(0,u.jsx)(l.A,{role:"link","aria-disabled":"true","aria-current":"page",children:"Search"})})]})})})]})},S=e=>{let{location:t}=e;const[n,s]=r.useState(null);r.useEffect((()=>{s(t.search)}),[t]);const l=r.useMemo((()=>{var e;const t=null===(e=x(n))||void 0===e?void 0:e.s;return""!==t&&t?[t,"Search"]:"Search"}),[n]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{}),(0,u.jsx)(c.Z,{children:l}),(0,u.jsx)("link",{rel:"modulepreload",href:"/static/pagefind/pagefind.js"}),(0,u.jsx)("link",{rel:"preload",href:"/static/pagefind/wasm.en.pagefind",as:"fetch",crossOrigin:"crossOrigin",type:"application/octet-stream"})]})};var A=e=>{let{location:t}=e;const[n,a]=r.useReducer(h,d),[c,i]=r.useTransition();r.useEffect((()=>{a(g("search",t.search))}),[t]);const o=r.useCallback((e=>i((()=>a({type:"init",linkIds:e})))),[]),j=r.useCallback(((e,t,n)=>i((()=>a(((e,t,n)=>({type:"load",index:e,url:t,title:n}))(e,t,n))))),[]),m=r.useCallback(((e,t)=>a(g(e,t))),[]),p=r.useMemo((()=>x(n.search)),[n.search]);(0,s.Rx)(n.search,10,o,j);const f=null==p?void 0:p.s;return(0,u.jsx)(l.T3,{sidebar:(0,u.jsx)(C,{state:n,set:m}),children:(0,u.jsx)(l.Zb,{children:(0,u.jsx)(l.or,{heading:(0,u.jsx)(w,{query:f}),children:(0,u.jsx)(b,{links:n.links})})})})}},2164:function(e,t,n){n.d(t,{k:function(){return r}});const r=" — ";t.Z=r},4149:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-search-jsx-b8fb24456a1264dcb83a.js.map