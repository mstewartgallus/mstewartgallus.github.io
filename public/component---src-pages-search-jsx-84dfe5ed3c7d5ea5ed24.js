"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[995],{7585:function(e,t,n){n.d(t,{Z:function(){return useTitle}});var r=n(7294),s=n(4160),a=n(2164);const useTitle=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const l=(0,s.K2)("3159585216");return(0,r.useMemo)((()=>{const{title:e}=l.site.siteMetadata;return[...t,e].join(a.k)}),[l,t])}},5929:function(e,t,n){n.d(t,{o:function(){return a}});var r=n(7294),s=n(5893);const Search=(e,t)=>{let{children:n,...r}=e;return(0,s.jsx)("search",{ref:t,role:"search",...r,children:n})},a=(0,r.forwardRef)(Search)},9750:function(e,t,n){n.d(t,{g:function(){return BreadcrumbItem},J:function(){return BreadcrumbList}});var r=n(5893);const BreadcrumbList=e=>{let{children:t,...n}=e;return(0,r.jsx)("ol",{className:"breadcrumb-list-module--breadcrumblist--d89e2",...n,children:t})},BreadcrumbItem=e=>{let{children:t,...n}=e;return(0,r.jsx)("li",{className:"breadcrumb-list-module--breadcrumb--64b46",...n,children:t})}},4457:function(e,t,n){n.d(t,{z:function(){return a}});var r=n(7294),s=n(5893);const Button=(e,t)=>{let{children:n,className:r="",...a}=e;return(0,s.jsx)("button",{className:"button-module--button--355dd "+r,...a,ref:t,children:n})},a=(0,r.forwardRef)(Button)},1111:function(e,t,n){n.d(t,{I:function(){return a}});var r=n(7294),s=n(5893);const Input=(e,t)=>{let{children:n,...r}=e;return(0,s.jsx)("input",{className:"input-module--input--4ad14",...r,ref:t,children:n})},a=(0,r.forwardRef)(Input)},4194:function(e,t,n){n.d(t,{q:function(){return useSubmit}});var r=n(7294),s=n(4160);const useSubmit=()=>(0,r.useCallback)((async e=>{var t,n,r,a;const l=e.nativeEvent,c=e.target,i=l.submitter;let o=i.getAttribute("formaction"),u=i.getAttribute("formenctype"),d=i.getAttribute("formmethod"),h=i.getAttribute("formtarget");if(null!==(t=o)&&void 0!==t||(o=c.getAttribute("action")),null!==(n=u)&&void 0!==n||(u=c.getAttribute("enctype")),null!==(r=d)&&void 0!==r||(d=c.method),null!==(a=h)&&void 0!==a||(h=c.getAttribute("target")),null!==u)return;if("get"!==d)return;if(null!==h)return;e.preventDefault();const m=o+"?"+new URLSearchParams(new FormData(c));await(0,s.c4)(m)}),[]);t.Z=useSubmit},4980:function(e,t,n){n.r(t),n.d(t,{Head:function(){return Head},default:function(){return pages_search}});var r=n(7896),s=n(7294),a=n(4160);const usePostTags=()=>(0,a.K2)("614531932").allPost;const l=Function("return x => import(x);")(),pagefind_search=async(e,t)=>{const n=await(async e=>{try{return await e}catch(t){return void console.warn(t)}})(l("/static/pagefind/pagefind.js"));if(n)return await n.search(e,t)},useSearch=(e,t,n,r)=>{(0,s.useEffect)((()=>{if(!e)return;let{s:s,category:a,tag:l,place:c,person:i}=(e=>{const t=new URLSearchParams(e);let n=t.get("s");return""===n&&(n=null),{s:n,category:new Set(t.getAll("category")),tag:new Set(t.getAll("tag")),place:new Set(t.getAll("place")),person:new Set(t.getAll("person"))}})(e);const o={...a.size>0?{category:Array.from(a)}:null,...l.size>0?{tag:Array.from(l)}:null,...c.size>0?{place:Array.from(c)}:null,...i.size>0?{person:Array.from(i)}:null};let u=!1;return(async()=>{const e=await pagefind_search(s,{filters:o});if(u)return;if(!e)return;const a=e.results.slice(0,t);n(a.map((e=>e.id))),await Promise.all(a.map((async(e,t)=>{const n=await e.data();if(u)return;const{url:s,meta:{title:a}}=n;r(t,s,a)})))})(),()=>u=!0}),[e,t,n,r])};var c=n(1111),i=n(4457),o=n(5893);const Legend=e=>{let{children:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("legend",{className:"legend-module--legend--ed2cb",children:t}),(0,o.jsx)("div",{className:"legend-module--inner--0ab66","aria-hidden":"true",children:t})]})};const Checkbox=(e,t)=>(0,o.jsx)("input",{className:"checkbox-module--checkbox--64bf5",type:"checkbox",...e,ref:t}),u=(0,s.forwardRef)(Checkbox);const d=(0,s.createContext)(null);d.displayName="Select";const Select=e=>{let{name:t,children:n,onChange:r}=e;return(0,o.jsx)("fieldset",{className:"select-module--select--e325b",onChange:r,children:(0,o.jsx)(d.Provider,{value:t,children:n})})},Option=e=>{let{children:t,onChange:n,selected:r,value:a}=e;const l=(0,s.useId)(),c=(0,s.useContext)(d);return(0,o.jsxs)("div",{className:"select-module--option--26192",children:[(0,o.jsx)(u,{id:l,name:c,value:a,onChange:n,checked:r}),(0,o.jsx)("label",{className:"select-module--optionLabel--3140a",htmlFor:l,children:t})]})};const Query=e=>{let{value:t,onChange:n}=e;const r=(0,s.useId)();return(0,o.jsxs)("fieldset",{className:"search-form-module--query--94c26",children:[(0,o.jsx)(Legend,{children:"Basic"}),(0,o.jsxs)("div",{className:"search-form-module--queryContent--86302",children:[(0,o.jsx)("label",{htmlFor:r,children:"Query"}),(0,o.jsx)(c.I,{id:r,name:"s",type:"search",value:t,onChange:n}),(0,o.jsx)(i.z,{type:"submit",children:"Search"})]})]})},Options=e=>{let{options:t,onChange:n,selected:r}=e;return(0,s.useMemo)((()=>t.map((e=>{const t=null==r?void 0:r.has(e);return{option:e,selected:t,onChange(r){n(r,e,t)}}}))),[t,r,n]).map((e=>{let{option:t,selected:n,onChange:r}=e;return(0,o.jsx)(Option,{onChange:r,selected:n,value:t,children:t},t)}))},Selects=e=>{let{state:t,onChange:n}=e;return(0,s.useMemo)((()=>t.map((e=>{let{selected:t,options:r,legend:s,name:a}=e;return{options:r,name:a,legend:s,selected:t,onChange(e,t,r){n(e,t,r,a)}}}))),[t,n]).map((e=>{let{name:t,options:n,legend:r,selected:s,onChange:a}=e;return(0,o.jsxs)(Select,{name:t,children:[(0,o.jsx)(Legend,{children:r}),(0,o.jsx)(Options,{options:n,selected:s,onChange:a})]},t)}))},h={category:"Category",place:"Place",person:"Person",tag:"Tag"},SearchForm=e=>{let{action:t,onSubmit:n,tags:r,state:a,set:l}=e;const c=(0,s.useCallback)((e=>l("s",e.target.value)),[l]),i=(0,s.useCallback)(((e,t,n,r)=>{const s=a[r],c=new Set(s);n?c.delete(t):c.add(t),l(r,c)}),[l,a]),u=(e=>{let{category:t,place:n,tag:r,person:s}=e;return{category:t,place:n,person:s,tag:r}})(a),d=Object.entries(u).map((e=>{let[t,n]=e;return{name:t,selected:n,legend:h[t],options:r[t]}}));return(0,o.jsxs)("form",{rel:"search",action:t,onSubmit:n,children:[(0,o.jsx)(Query,{value:a.s,onChange:c}),(0,o.jsx)(Selects,{state:d,onChange:i})]})};var m=n(7410),g=n(1250);const f=(0,s.createContext)();f.displayName="Fallback";const x=(0,s.memo)(f.Provider),Fallback=()=>(0,s.useContext)(f),p=(0,s.memo)(Fallback),SuspenseItem=e=>{let{children:t}=e;return(0,o.jsx)(g.Li,{children:(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(p,{}),children:t})})},SuspenseList=e=>{let{children:t,fallback:n}=e;return(0,o.jsx)(g.Ul,{children:(0,o.jsx)(x,{value:n,children:t})})},j=(0,s.lazy)((()=>new Promise((e=>{})))),Result=e=>{let{loaded:t,url:n,title:r}=e;return t?(0,o.jsx)(m.A,{href:n,children:r}):(0,o.jsx)(j,{})},Loading=()=>(0,o.jsx)(m.A,{role:"link","aria-disabled":"true",children:"Loading..."}),ResultList=e=>{let{links:t}=e;return(0,o.jsx)(SuspenseList,{fallback:(0,o.jsx)(Loading,{}),children:t.map((e=>(0,o.jsx)(SuspenseItem,{children:(0,o.jsx)(Result,{...e})},e.id)))})};var b=n(7042),v=n(5929);const Search=e=>{let{heading:t,children:n,...r}=e;const a=(0,s.useId)();return(0,o.jsxs)(v.o,{"aria-describedby":a,...r,children:[(0,o.jsx)("header",{children:(0,o.jsx)("hgroup",{id:a,children:t})}),n]})};var y=n(6077),k=n(9750),w=n(7798),C=n(1091),S=n(7585),A=n(4194),N=n(2164);const R={links:[],s:"",category:new Set,tag:new Set,place:new Set,person:new Set},reducer=(e,t)=>{const{type:n}=t;switch(n){case"init":{const{linkIds:n}=t;return{...e,links:n.map((e=>({id:e,loaded:!1})))}}case"load":{let{links:n}=e;const{index:r,url:s,title:a}=t,{id:l}=n[r];return n=Array.from(n),n[r]={id:l,loaded:!0,url:s,title:a},{...e,links:n}}case"set":{const{name:n,value:r}=t;return{...e,[n]:r}}default:return e}},set=(e,t)=>({type:"set",name:e,value:t}),search_parseParams=e=>{var t;if(!e)return null;const n=new URLSearchParams(e);return{s:null!==(t=n.get("s"))&&void 0!==t?t:"",category:new Set(n.getAll("category")),tag:new Set(n.getAll("tag")),place:new Set(n.getAll("place")),person:new Set(n.getAll("person"))}},Heading=e=>{let{query:t}=e;return""!==t&&t?(0,o.jsxs)(o.Fragment,{children:[t,N.k,"Results"]}):"Results"},TableOfContents=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w.G,{"aria-describedby":"content",href:"#content",children:"Results"}),(0,o.jsxs)(g.Ul,{children:[(0,o.jsx)(g.Li,{children:(0,o.jsx)(m.A,{href:"#search",children:"Search"})}),(0,o.jsx)(g.Li,{children:(0,o.jsx)(m.A,{href:"#breadcrumbs",children:"Breadcrumbs"})})]})]}),Head=()=>{const{0:e,1:t}=(0,s.useState)(null),n=(0,r.useLocation)();(0,s.useEffect)((()=>{t(n.search)}),[n]);const a=(0,s.useMemo)((()=>{var t;null===(t=search_parseParams(e))||void 0===t||t.s;return[]}),[e]),l=(0,S.Z)(...a,"Search");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("title",{children:l}),(0,o.jsx)("link",{rel:"modulepreload",href:"/static/pagefind/pagefind.js"}),(0,o.jsx)("link",{rel:"preload",href:"/static/pagefind/wasm.en.pagefind",as:"fetch",crossOrigin:"crossOrigin",type:"application/octet-stream"})]})};var pages_search=()=>{const e=(0,r.useLocation)(),{0:t,1:n}=(0,s.useReducer)(reducer,R),{1:a}=(0,s.useTransition)(),l=(0,A.Z)(),c=usePostTags();(0,s.useEffect)((()=>{a((()=>n(set("search",e.search))))}),[e]);const i=(0,s.useCallback)((e=>a((()=>n({type:"init",linkIds:e})))),[]),u=(0,s.useCallback)(((e,t,r)=>a((()=>n(((e,t,n)=>({type:"load",index:e,url:t,title:n}))(e,t,r))))),[]),d=(0,s.useCallback)(((e,t)=>n(set(e,t))),[]),h=(0,s.useMemo)((()=>search_parseParams(t.search)),[t.search]);useSearch(t.search,10,i,u);const g=null==h?void 0:h.s;return(0,o.jsx)(C.v,{tableOfContents:(0,o.jsx)(TableOfContents,{}),sidebar:(0,o.jsx)(b.Z,{children:(0,o.jsx)(Search,{heading:(0,o.jsx)(y.H2,{id:"search",children:"Search"}),children:(0,o.jsx)(SearchForm,{action:"/search",onSubmit:l,tags:c,set:d,state:t})})}),breadcrumbs:(0,o.jsxs)(k.J,{children:[(0,o.jsx)(k.g,{children:(0,o.jsx)(m.A,{href:"/",children:"Home"})}),(0,o.jsx)(k.g,{children:(0,o.jsx)("span",{"aria-current":"page",children:"Search"})})]}),heading:(0,o.jsx)(Heading,{query:g}),children:(0,o.jsx)(ResultList,{links:t.links})})}},2164:function(e,t,n){n.d(t,{k:function(){return r}});const r=" — "}}]);
//# sourceMappingURL=component---src-pages-search-jsx-84dfe5ed3c7d5ea5ed24.js.map