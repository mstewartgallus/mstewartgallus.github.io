"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[995],{6111:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(7294);var a=e=>{let{children:t,...n}=e;return l.createElement("ol",Object.assign({},n,{className:"breadcrumb-list-module--breadcrumb--69760"}),t)}},3293:function(e,t,n){var l=n(7294),a=n(6138);t.Z=()=>l.createElement(l.Fragment,null,l.createElement("html",{lang:"en"}),l.createElement("link",{rel:"icon",href:a.Z}),l.createElement("meta",{name:"color-scheme",content:"dark light"}),l.createElement("meta",{name:"theme-color",content:"#6000A0"}))},6985:function(e,t,n){var l=n(7294);t.Z=e=>{let{children:t,heading:n}=e;const a=l.useId();return l.createElement("nav",{"aria-labelledby":a},l.createElement("header",{className:"sr-only"},l.createElement("hgroup",{id:a},n)),t)}},7585:function(e,t,n){var l=n(7294),a=n(9622),r=n(2164);t.Z=e=>{let{children:t}=e;const n=(0,a.Z)(),c=l.Children.toArray(t);c.push(n.title);const s=c.join(r.Z);return l.createElement("title",null,s)}},9622:function(e,t,n){var l=n(1883);t.Z=()=>(0,l.K2)("3000541721").site.siteMetadata},4194:function(e,t,n){n.d(t,{q:function(){return r}});var l=n(7294),a=n(1883);const r=()=>l.useCallback((async e=>{var t,n,l,r;const c=e.nativeEvent,s=e.target,o=c.submitter;let u=o.getAttribute("formaction"),i=o.getAttribute("formenctype"),m=o.getAttribute("formmethod"),d=o.getAttribute("formtarget");if(null!==(t=u)&&void 0!==t||(u=s.getAttribute("action")),null!==(n=i)&&void 0!==n||(i=s.getAttribute("enctype")),null!==(l=m)&&void 0!==l||(m=s.method),null!==(r=d)&&void 0!==r||(d=s.getAttribute("target")),null!==i)return;if("get"!==m)return;if(null!==d)return;e.preventDefault();const g=u+"?"+new URLSearchParams(new FormData(s));await(0,a.c4)(g)}),[]);t.Z=r},8122:function(e,t,n){n.r(t),n.d(t,{Head:function(){return j},default:function(){return F}});var l=n(7294),a=n(1883),r=n(6111),c=n(3293),s=n(6985),o=n(4038);const u=l.createContext(null),i=e=>{let{name:t,children:n,onChange:a}=e;return l.createElement("fieldset",{className:"select-module--select--8f70a",onChange:a},l.createElement(u.Provider,{value:t},n))},m=e=>{let{children:t,onChange:n,selected:a,value:r}=e;const c=l.useId(),s=l.useContext(u);return l.createElement("div",{className:"select-module--option--d759a"},l.createElement("input",{id:c,type:"checkbox",name:s,value:r,onChange:n,checked:a}),l.createElement("label",{htmlFor:c},t))};var d=n(2164),g=n(7585),h=n(4194);var E=()=>(0,a.K2)("3144730248").allPost;const p=Function("return x => import(x);")(),f=async(e,t)=>{const n=await(async e=>{try{return await e}catch(t){return void console.warn(t)}})(p("/static/pagefind/pagefind.js"));if(n)return await n.search(e,t)},y=(e,t)=>{switch(t.type){case"init":return t.links;case"load":{const{index:n,url:l,title:a}=t,{id:r}=e[n],c=Array.from(e);return c[n]={id:r,result:{url:l,title:a}},c}default:return e}};var v=(e,t)=>{const[n,a]=l.useReducer(y,null);return l.useEffect((()=>{if(!e)return;let{s:n,category:l,tag:r,place:c,person:s}=(e=>{const t=new URLSearchParams(e);let n=t.get("s");return""===n&&(n=null),{s:n,category:new Set(t.getAll("category")),tag:new Set(t.getAll("tag")),place:new Set(t.getAll("place")),person:new Set(t.getAll("person"))}})(e);const o={...l.size>0?{category:Array.from(l)}:null,...r.size>0?{tag:Array.from(r)}:null,...c.size>0?{place:Array.from(c)}:null,...s.size>0?{person:Array.from(s)}:null};let u=!1;return(async()=>{const e=await f(n,{filters:o});if(u)return;const l=e.results.slice(0,t),r=l.map((e=>{let{id:t}=e;return{id:t}}));a({type:"init",links:r}),await Promise.all(l.map((async(e,t)=>{const n=await e.data();if(u)return;const{url:l,meta:{title:r}}=n;a({type:"load",index:t,url:l,title:r})})))})(),()=>u=!0}),[e,t]),n};const b={s:"",category:new Set,tag:new Set,place:new Set,person:new Set},w=(e,t)=>{if("set"===t.type)return{...e,[t.name]:t.value};throw new Error("Unhandled action "+t.type)},I=e=>{var t;if(!e)return null;const n=new URLSearchParams(e);return{s:null!==(t=n.get("s"))&&void 0!==t?t:"",category:new Set(n.getAll("category")),tag:new Set(n.getAll("tag")),place:new Set(n.getAll("place")),person:new Set(n.getAll("person"))}},C=e=>{let{url:t,title:n}=e;return l.createElement(a.rU,{to:t},n)},S=()=>l.createElement(a.rU,null,"Loading"),A=e=>{let{results:t}=e;return t.map((e=>{let{id:t,result:n}=e;return l.createElement("li",{key:t,className:"search-module--result--3aca7","aria-hidden":n?null:"true"},n?l.createElement(C,n):l.createElement(S,null))}))},Z=e=>{let{results:t}=e;return l.createElement("ul",null,l.createElement(A,{results:t}))},k=e=>{let{search:t}=e;const n=v(t,10);return n?l.createElement(Z,{results:n}):l.createElement("ul",{"aria-hidden":"true"})},N=e=>{let{value:t,onChange:n}=e;const a=l.useId();return l.createElement("div",{className:"search-module--query--d9f7b"},l.createElement("label",{htmlFor:a},"Query"),l.createElement("input",{id:a,name:"s",type:"search",value:t,onChange:n}),l.createElement("button",{type:"submit"},"Search"))},P=e=>{let{options:t,onChange:n,selected:a}=e;return t.map((e=>l.createElement(m,{key:e,onChange:n,selected:null==a?void 0:a.has(e),value:e},e)))},x=e=>{let{onSubmit:t,tags:n,state:a,set:r}=e;const c=l.useId(),s=l.useCallback((e=>r("s",e.target.value)),[r]),o=l.useCallback((e=>{const{target:{checked:t,name:n,value:l}}=e,c=new Set(a[n]);t?c.add(l):c.delete(l),r(n,c)}),[r,a]);return l.createElement("form",{className:"search-module--search--a9d2d","aria-describedby":c,role:"search",rel:"search",action:"/search",onSubmit:t},l.createElement("header",{className:"sr-only"},l.createElement("hgroup",null,l.createElement("h2",{id:c},"Search"))),l.createElement(N,{value:a.s,onChange:s}),l.createElement(i,{name:"category"},l.createElement("legend",null,"Category"),l.createElement(P,{options:n.category,selected:a.category,onChange:o})),l.createElement(i,{name:"place"},l.createElement("legend",null,"Place"),l.createElement(P,{options:n.place,selected:a.place,onChange:o})),l.createElement(i,{name:"person"},l.createElement("legend",null,"People"),l.createElement(P,{options:n.people,selected:a.person,onChange:o})),l.createElement(i,{name:"tag"},l.createElement("legend",null,"Tags"),l.createElement(P,{options:n.tags,selected:a.tag,onChange:o})))},j=e=>{let{location:t}=e;const[n,a]=l.useState(null);l.useEffect((()=>{a(t.search)}),[t]);const r=l.useMemo((()=>{var e;const t=null===(e=I(n))||void 0===e?void 0:e.s;return""!==t&&t?[t,"Search"]:"Search"}),[n]);return l.createElement(l.Fragment,null,l.createElement(c.Z,null),l.createElement(g.Z,null,r),l.createElement("link",{rel:"modulepreload",href:"/static/pagefind/pagefind.js"}),l.createElement("link",{rel:"preload",href:"/static/pagefind/wasm.en.pagefind",as:"fetch",crossOrigin:"crossOrigin",type:"application/octet-stream"}))},B=e=>{let{query:t}=e;return""!==t&&t?l.createElement("h1",null,t,d.k,"Search"):l.createElement("h1",null,"Search")};var F=e=>{let{location:t}=e;const[n,c]=l.useState(null);l.useEffect((()=>{c(t.search)}),[t]);const u=(0,h.Z)(),i=E(),[m,d]=l.useReducer(w,b),g=l.useMemo((()=>I(n)),[n]),p=l.useCallback(((e,t)=>d({type:"set",name:e,value:t})),[d]),f=null==g?void 0:g.s;return l.createElement(o.ZP,{heading:l.createElement(B,{query:f}),sidebar:l.createElement(l.Fragment,null,l.createElement(x,{location:t,onSubmit:u,tags:i,set:p,state:m}),l.createElement(s.Z,{heading:l.createElement("h2",null,"Breadcrumbs")},l.createElement(r.Z,null,l.createElement("li",null,l.createElement(a.rU,{to:"/"},"Home")),l.createElement("li",{"aria-current":"page"},l.createElement("cite",null,"Search")))))},l.createElement(k,{search:n}))}},2164:function(e,t,n){n.d(t,{k:function(){return l}});const l=" — ";t.Z=l},6138:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-search-jsx-70928e7656a50bfb37b1.js.map