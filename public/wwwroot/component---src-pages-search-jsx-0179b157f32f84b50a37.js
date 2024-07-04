"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[765],{5445:function(e,n,t){t.d(n,{K:function(){return l}});var r=t(6540),s=t(4810),a=t(1517);const l=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];const l=(0,s.GR)("3159585216");return(0,r.useMemo)((()=>{const{title:e}=l.site.siteMetadata;return[].concat(n,[e]).join(a.m)}),[l,n])}},4967:function(e,n,t){t.d(n,{K:function(){return o},t:function(){return l}});var r=t(6540),s=t(6287),a=t(4848);const l=()=>(0,r.useContext)(s.o),c=e=>{let{children:n,fallback:t}=e;return l()?n:t},o=e=>{let{children:n,fallback:t}=e;return(0,a.jsx)(c,{fallback:t,children:(0,a.jsx)(r.Suspense,{fallback:t,children:n})})}},6027:function(e,n,t){t.d(n,{A:function(){return T}});var r=t(6540),s=t(961),a=t(4967),l=t(4119),c=t(4848);const o=e=>{let{children:n}=e;const t=(0,r.useContext)(l.o);return(0,c.jsx)(a.K,{children:t&&(0,s.createPortal)(n,t)})};var i=t(6542);const u=(0,i.L)("div","theme-module--theme--d14f8");var d=t(3422),h=t(8746),f=t(6592),m=t(2743);const p=()=>(0,r.useContext)(m.o);var g=t(5919);const x=e=>{let{children:n,scrollLeft:t,scrollTop:s,onScroll:a}=e;const l=(0,r.useRef)(null),o=(0,r.useRef)({scrollLeft:t,scrollTop:s});return(0,r.useLayoutEffect)((()=>{const{current:{scrollLeft:e,scrollTop:n}}=o;l.current.scrollTo({left:e,top:n,behaviour:"instant"})}),[]),(0,c.jsx)("div",{className:"scroller-module--scroller--6ed48",onScroll:a,ref:l,children:n})},j=e=>{let{children:n}=e;const{scrollLeft:t,scrollTop:s,onScroll:a}=(0,r.useContext)(g.o);return(0,c.jsx)(x,{scrollLeft:t,scrollTop:s,onScroll:a,children:n})};const b=(0,i.L)("div","page-module--layout--39e85");var v=t(6722),y=t(5608),w=t(3822),k=t(2866);const C=e=>{let{children:n,sidebar:t}=e;return(0,c.jsxs)("div",{className:"sidebar-module--layout--9433a",children:[(0,c.jsx)("div",{className:"sidebar-module--mainbar--67dd7",children:n}),(0,c.jsx)("div",{className:"sidebar-module--sidebar--d1ec2",children:t})]})},N=e=>{let{children:n,support:t}=e;return(0,c.jsx)(C,{sidebar:(0,c.jsx)(k.V,{children:t}),children:n})},L=e=>{let{children:n,support:t,navigation:r,breadcrumbs:s}=e;return(0,c.jsx)(N,{support:(0,c.jsxs)(c.Fragment,{children:[t,(0,c.jsxs)(v.j,{children:[r,(0,c.jsx)(y.s,{heading:(0,c.jsx)(w.Ys,{id:"breadcrumbs",children:"Breadcrumbs"}),children:s})]})]}),children:(0,c.jsx)(k.V,{children:n})})},S={preventScroll:!0},A=e=>{const n=(()=>{const{location:e,prevLocation:n}=p(),{pathname:t,hash:s}=e,{pathname:a}=n,l=t!==a,c=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if(!l||s)return;let e=!1;return window.requestAnimationFrame((()=>{var n;e||null===(n=c.current)||void 0===n||n.focus(S)})),()=>e=!0}),[s,t,l]),c})();return(0,c.jsx)(w.n1,{...e,ref:n})},R=e=>{let{children:n}=e;const{location:t,prevLocation:r}=p();return t!==r&&(0,c.jsxs)(o,{children:["Navigated to ",n]})},T=e=>{let{children:n,heading:t,subheading:r,notice:s,mainbar:a,support:l,navigation:o,breadcrumbs:i}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(R,{children:t}),(0,c.jsx)(u,{children:(0,c.jsx)(j,{children:(0,c.jsx)(b,{children:(0,c.jsxs)(L,{support:l,navigation:o,breadcrumbs:i,children:[(0,c.jsx)("main",{"data-pagefind-body":"","aria-describedby":"content",children:(0,c.jsxs)(d.Z,{children:[(0,c.jsxs)(h.Y,{children:[(0,c.jsxs)(f.S,{children:[(0,c.jsx)(A,{id:"content",children:t}),r]}),s]}),n]})}),a]})})})})]})}},4442:function(e,n,t){t.d(n,{v:function(){return a}});var r=t(6540),s=t(4848);const a=(0,r.forwardRef)(((e,n)=>{let{children:t,...r}=e;return(0,s.jsx)("search",{ref:n,role:"search",...r,children:t})}));a.displayName="Search"},6126:function(e,n,t){t.d(n,{A:function(){return a}});var r=t(6542),s=t(8429);const a=(0,r.L)(s.A,"a-module--a--8fe65")},1162:function(e,n,t){t.d(n,{r:function(){return a}});var r=t(6542),s=t(6126);const a=(0,r.L)(s.A,"a-module--a--08064")},7565:function(e,n,t){t.d(n,{J:function(){return a}});var r=t(6540),s=t(4848);const a=(0,r.forwardRef)(((e,n)=>(0,s.jsxs)("li",{role:"listitem",className:"breadcrumb-item-module--item--6f5d0",...e,ref:n,children:[(0,s.jsx)("div",{role:"presentation",className:"breadcrumb-item-module--marker--325b6"}),(0,s.jsx)("div",{role:"presentation",className:"breadcrumb-item-module--content--99a57",children:e.children})]})));a.displayName="BreadcrumbItem"},5845:function(e,n,t){t.d(n,{A:function(){return r}});const r=(0,t(6542).L)("ol","breadcrumb-list-module--breadcrumblist--d89e2")},6554:function(e,n,t){t.d(n,{BF:function(){return c}});var r=t(1162),s=t(8209),a=t(7565),l=t(4848);const c=e=>(0,l.jsx)(a.J,{children:(0,l.jsxs)(r.r,{...e,children:[e.children,(0,l.jsx)(s.s,{})]})})},9964:function(e,n,t){t.d(n,{$:function(){return r}});const r=(0,t(6542).L)("button","button-module--button--355dd")},3422:function(e,n,t){t.d(n,{Z:function(){return r}});const r=(0,t(6542).L)("div","card-module--card--729a6")},8209:function(e,n,t){t.d(n,{s:function(){return s}});var r=t(4848);const s=()=>(0,r.jsx)("span",{className:"click-trap-module--clickTrap--9e175","aria-hidden":"true"})},2866:function(e,n,t){t.d(n,{V:function(){return r}});const r=(0,t(6542).L)("div","column-module--column--abfac")},8746:function(e,n,t){t.d(n,{Y:function(){return r}});const r=(0,t(6542).L)("header","header-module--header--2ed67")},3822:function(e,n,t){t.d(n,{VX:function(){return c},Ys:function(){return l},m5:function(){return u},n1:function(){return a},pG:function(){return i},sb:function(){return o}});var r=t(2607),s=t(8414);const a=(0,r.e)(s.H1),l=(0,r.e)(s.H2),c=(0,r.e)(s.H3),o=(0,r.e)(s.H4),i=(0,r.e)(s.H5),u=(0,r.e)(s.H6)},8414:function(e,n,t){t.d(n,{H1:function(){return a},H2:function(){return l},H3:function(){return c},H4:function(){return o},H5:function(){return i},H6:function(){return u}});var r=t(6542),s="heading-module--heading--5dd10";const a=(0,r.L)("h1","heading-module--heading1--30070"),l=(0,r.L)("h2","heading-module--heading2--16827"),c=(0,r.L)("h3",s),o=(0,r.L)("h4",s),i=(0,r.L)("h5",s),u=(0,r.L)("h6",s)},6592:function(e,n,t){t.d(n,{S:function(){return r}});const r=(0,t(6542).L)("hgroup","hgroup-module--hgroup--65970")},4036:function(e,n,t){t.d(n,{p:function(){return r}});const r=(0,t(6542).L)("input","input-module--input--4ad14")},740:function(e,n,t){t.d(n,{Li:function(){return i},W:function(){return o},Ol:function(){return l},Ul:function(){return c}});var r=t(6540),s="list-module--ul--83a35",a=t(4848);const l=(0,r.forwardRef)(((e,n)=>(0,a.jsx)("ol",{role:"list",className:"list-module--ol--b6ce8",...e,ref:n,children:e.children})));l.displayName="Ol";const c=(0,r.forwardRef)(((e,n)=>(0,a.jsx)("ul",{role:"list",className:s,...e,ref:n,children:e.children})));c.displayName="Ul";const o=(0,r.forwardRef)(((e,n)=>(0,a.jsx)("menu",{role:"list",className:s,...e,ref:n,children:e.children})));o.displayName="Menu";const i=(0,r.forwardRef)(((e,n)=>(0,a.jsxs)("li",{role:"listitem",className:"list-module--li--57a38",...e,ref:n,children:[(0,a.jsx)("div",{role:"presentation",className:"list-module--marker--5dedd"}),(0,a.jsx)("div",{role:"presentation",className:"list-module--content--5f318",children:e.children})]})));i.displayName="Li"},5608:function(e,n,t){t.d(n,{s:function(){return c}});var r=t(6540),s=t(3422),a=t(6592),l=t(4848);const c=e=>{let{children:n,heading:t,...c}=e;const o=(0,r.useId)();return(0,l.jsx)("nav",{"aria-labelledby":o,...c,children:(0,l.jsxs)(s.Z,{children:[(0,l.jsx)("header",{id:o,children:(0,l.jsx)(a.S,{children:t})}),n]})})}},2607:function(e,n,t){t.d(n,{e:function(){return i}});var r=t(6540),s=t(6278),a=t(6542),l=t(8429);const c=(0,a.L)(l.A,"a-module--a--871de");var o=t(4848);const i=e=>{const n=(0,s.T)(e),t=(0,r.forwardRef)(((n,t)=>{let{children:r,id:s,...a}=n;const l=s?`#${s}`:null;return(0,o.jsx)(e,{...a,children:(0,o.jsx)(c,{id:s,href:l,ref:t,children:r})})}));return t.displayName=`A(${n})`,t}},8429:function(e,n,t){t.d(n,{A:function(){return x}});var r=t(6540),s=t(6278),a=t(7048);var l=t(4848);const c=e=>window.___loader.hovering(e);var o=t(4810);const i={threshold:1},u=new Map,d=e=>{let{target:n,isIntersecting:t,intersectionRatio:r}=e;const s=u.get(n);null==s||s(t||r>0)},h=e=>{for(const n of e)d(n)};let f=null;const m=(e,n)=>{const t=(0,r.useRef)(null);return(0,r.useImperativeHandle)(e,(()=>t.current),[t]),(0,r.useEffect)((()=>{const e=(()=>{if(f)return f;if(!window)return null;const{IntersectionObserver:e}=window;return e?(f=new e(h,i),f):null})();if(!e)return;const{current:r}=t;if(!r)return;const s={current:!1},a={current:null},l=e=>{var t;s.current||(e?a.current||(a.current=(0,o.ks)(n)):(null===(t=a.current)||void 0===t||t.abort(),a.current=null))};return u.set(r,l),e.observe(r),()=>{var n;s.current=!0,null===(n=a.current)||void 0===n||n.abort(),a.current=null,e.unobserve(r),u.delete(l)}}),[n]),t},p=()=>(0,o.GR)("1271460761").site.siteMetadata.siteUrl,g=(e=>{const n=(0,r.forwardRef)(((n,t)=>{const s=(e=>{let{href:n,onClick:t}=e;return(0,r.useCallback)((async e=>{null==t||t(e);const{defaultPrevented:r,altKey:s,metaKey:l,shiftKey:c,ctrlKey:o,button:i}=e;r||0===i&&(s||l||c||o||(e.preventDefault(),await(0,a.o)(n)))}),[t,n])})(n);return(0,l.jsx)(e,{...n,onClick:s,ref:t})}));return n.displayName=`Click(${(0,s.T)(e)})`,n})((e=>{const n=(0,r.forwardRef)(((n,t)=>{const{onFocus:s,onMouseEnter:a}=(e=>{let{href:n,onFocus:t,onMouseEnter:s}=e;return{onFocus:(0,r.useCallback)((e=>{c(n),null==t||t(e)}),[t,n]),onMouseEnter:(0,r.useCallback)((e=>{c(n),null==s||s(e)}),[s,n])}})(n);return(0,l.jsx)(e,{...n,onFocus:s,onMouseEnter:a,ref:t})}));return n.displayName=`Hovering(${(0,s.T)(e)})`,n})((e=>{const n=(0,r.forwardRef)(((n,t)=>{const{href:r}=n,s=m(t,r);return(0,l.jsx)(e,{...n,ref:s})}));return n.displayName=`Prefetch(${(0,s.T)(e)})`,n})("a"))),x=(0,r.forwardRef)(((e,n)=>(e=>{let{href:n,target:t,download:r}=e;const s=p();if(!n||t||r)return null;const{origin:a,pathname:l,hash:c,search:o}=new URL(n,s);return a!==s||c?null:`${l}${o}${c}`})(e)?(0,l.jsx)(g,{...e,ref:n}):(0,l.jsx)("a",{...e,ref:n})));x.displayName="A"},6278:function(e,n,t){t.d(n,{T:function(){return r}});const r=e=>{var n;if("string"==typeof e)return e;const t=null!==(n=e.displayName)&&void 0!==n?n:e.name;return t||console.log(e),t}},7048:function(e,n,t){t.d(n,{o:function(){return s}});var r=t(4810);const s=async e=>{if(!document.startViewTransition)return await(0,r.oo)(e);const n={current:null},t=document.startViewTransition((async()=>{const t=n.current,s=(0,r.oo)(e),a=setTimeout((()=>t.skipTransition()),1e4);await s,clearTimeout(a)}));return n.current=t,await t.updateCallbackDone}},6722:function(e,n,t){t.d(n,{j:function(){return r}});const r=(0,t(6542).L)("div","screen-only-module--screen--a22bb")},1661:function(e,n,t){t.d(n,{o:function(){return a}});var r=t(6540),s=t(7048);const a=()=>(0,r.useCallback)((async e=>{const n=e.nativeEvent,t=e.target,r=n.submitter;let a=r.getAttribute("formaction"),l=r.getAttribute("formenctype"),c=r.getAttribute("formmethod"),o=r.getAttribute("formtarget");if(a??=t.getAttribute("action"),l??=t.getAttribute("enctype"),c??=t.method,o??=t.getAttribute("target"),null!==l)return;if("get"!==c)return;if(null!==o)return;e.preventDefault();const i=`${a}?${new URLSearchParams(new FormData(t))}`;await(0,s.o)(i)}),[])},6542:function(e,n,t){t.d(n,{L:function(){return l}});var r=t(6540),s=t(6278),a=t(4848);const l=(e,n)=>{const t=((e,n)=>(0,r.forwardRef)(((t,r)=>{var s;const l=`${null!==(s=t.className)&&void 0!==s?s:""} ${n}`;return(0,a.jsx)(e,{...t,className:l,ref:r})})))(e,n),l=(0,s.T)(e);return t.displayName=`.${n}(${l})`,t}},4551:function(e,n,t){t.r(n),t.d(n,{Head:function(){return ne},default:function(){return re}});var r=t(4506),s=t(6540),a=t(6145),l=t(4810);const c=()=>(0,l.GR)("614531932").allPost,o={s:"",category:new Set,tag:new Set,place:new Set,person:new Set},i=(e,n)=>{const{type:t}=n;if("set"===t){const{name:t,value:r}=n;return{...e,[t]:r}}return e};var u=t(3422),d=t(2866),h=t(6592),f=t(8414),m=t(4442),p=t(4848);const g=(0,s.forwardRef)(((e,n)=>(0,p.jsx)("input",{className:"checkbox-module--checkbox--5b819",type:"checkbox",...e,ref:n})));g.displayName="Checkbox";const x=(0,s.createContext)(null);x.displayName="Select";const j=e=>{let{name:n,label:t,children:r,onChange:s}=e;return(0,p.jsxs)("fieldset",{className:"select-module--select--516ad",onChange:s,children:[(0,p.jsx)("legend",{className:"select-module--label--7c67c",children:t}),(0,p.jsx)(x.Provider,{value:n,children:r})]})},b=e=>{let{children:n,onChange:t,selected:r,value:a}=e;const l=(0,s.useId)(),c=(0,s.useContext)(x);return(0,p.jsxs)("div",{className:"select-module--option--1e551",children:[(0,p.jsx)(g,{id:l,name:c,value:a,onChange:t,checked:r}),(0,p.jsx)("label",{className:"select-module--optionLabel--88466",htmlFor:l,children:n})]})};var v=t(4036),y=t(9964);const w=e=>{let{value:n,onChange:t}=e;const r=(0,s.useId)();return(0,p.jsxs)("fieldset",{className:"search-form-module--query--b601d",children:[(0,p.jsx)("legend",{className:"search-form-module--legend--356f7",children:"Basic"}),(0,p.jsxs)(u.Z,{children:[(0,p.jsx)("span",{children:"Basic"}),(0,p.jsxs)("div",{className:"search-form-module--queryContent--db47b",children:[(0,p.jsx)("label",{htmlFor:r,children:"Query"}),(0,p.jsx)(v.p,{id:r,name:"s",type:"search",value:n,onChange:t}),(0,p.jsx)(y.$,{type:"submit",children:"Search"})]})]})]})},k=e=>{let{options:n,onChange:t,selected:r}=e;return(0,s.useMemo)((()=>n.map((e=>{const n=null==r?void 0:r.has(e);return{option:e,selected:n,onChange(r){t(r,e,n)}}}))),[n,r,t]).map((e=>{let{option:n,selected:t,onChange:r}=e;return(0,p.jsx)(b,{onChange:r,selected:t,value:n,children:n},n)}))},C=e=>{let{state:n,onChange:t}=e;return(0,s.useMemo)((()=>n.map((e=>{let{selected:n,options:r,legend:s,name:a}=e;return{options:r,name:a,legend:s,selected:n,onChange(e,n,r){t(e,n,r,a)}}}))),[n,t]).map((e=>{let{name:n,options:t,legend:r,selected:s,onChange:a}=e;return(0,p.jsx)(j,{name:n,label:r,children:(0,p.jsxs)(u.Z,{children:[(0,p.jsx)("span",{children:r}),(0,p.jsx)(k,{options:t,selected:s,onChange:a})]})},n)}))},N={category:"Category",place:"Place",person:"Person",tag:"Tag"},L=e=>{let{action:n,onSubmit:t,tags:r,s:a,tag:l,category:c,place:o,person:i,set:g}=e;const x=(0,s.useCallback)((e=>g("s",e.target.value)),[g]),j=(0,s.useMemo)((()=>({category:c,place:o,person:i,tag:l})),[c,o,i,l]),b=(0,s.useCallback)(((e,n,t,r)=>{const s=j[r],a=new Set(s);t?a.delete(n):a.add(n),g(r,a)}),[g,j]),v=Object.entries(j).map((e=>{let[n,t]=e;return{name:n,selected:t,legend:N[n],options:r[n]}}));return(0,p.jsx)(m.v,{children:(0,p.jsx)("form",{rel:"search",action:n,onSubmit:t,children:(0,p.jsxs)(d.V,{children:[(0,p.jsx)("header",{children:(0,p.jsx)(u.Z,{children:(0,p.jsx)(h.S,{children:(0,p.jsx)(f.H2,{children:"Search"})})})}),(0,p.jsx)(w,{value:a,onChange:x}),(0,p.jsx)(C,{state:v,onChange:b})]})})})},S=[],A=(e,n)=>{const{type:t}=n;switch(t){case"init":{const{linkIds:e}=n;return e.map((e=>({id:e,loaded:!1})))}case"load":{const{index:t,url:r,title:s}=n,{id:a}=e[t];return(e=Array.from(e))[t]={id:a,loaded:!0,url:r,title:s},e}default:return e}},R=Function("return x => import(x);")(),T=async(e,n)=>{const t=await(async e=>{try{return await e}catch(n){return void console.warn(n)}})(R("/static/pagefind/pagefind.js"));if(t)return await t.search(e,n)},F=(e,n,t,r)=>{(0,s.useEffect)((()=>{if(!e)return;let{s:s,category:a,tag:l,place:c,person:o}=(e=>{const n=new URLSearchParams(e);let t=n.get("s");return""===t&&(t=null),{s:t,category:new Set(n.getAll("category")),tag:new Set(n.getAll("tag")),place:new Set(n.getAll("place")),person:new Set(n.getAll("person"))}})(e);const i={...a.size>0?{category:Array.from(a)}:null,...l.size>0?{tag:Array.from(l)}:null,...c.size>0?{place:Array.from(c)}:null,...o.size>0?{person:Array.from(o)}:null};let u=!1;return(async()=>{const e=await T(s,{filters:i});if(u)return;if(!e)return;const a=e.results.slice(0,n);t(a.map((e=>e.id))),await Promise.all(a.map((async(e,n)=>{const t=await e.data();if(u)return;const{url:s,meta:{title:a}}=t;r(n,s,a)})))})(),()=>u=!0}),[e,n,t,r])};var H=t(6126),$=t(8209),P=t(740);const M=(0,s.createContext)();M.displayName="Fallback";const _=M.Provider,E=()=>(0,s.useContext)(M),I=(0,s.memo)(E),U=e=>{let{children:n}=e;return(0,p.jsx)(P.Li,{children:(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(I,{}),children:n})})},V=e=>{let{children:n,fallback:t}=e;return(0,p.jsx)(P.Ul,{children:(0,p.jsx)(_,{value:t,children:n})})},K=(0,s.lazy)((()=>new Promise((e=>{})))),B=e=>{let{loaded:n,url:t,title:r}=e;return n?(0,p.jsxs)(H.A,{href:t,children:[r,(0,p.jsx)($.s,{})]}):(0,p.jsx)(K,{})},D=()=>(0,p.jsx)(H.A,{role:"link","aria-disabled":"true",children:"Loading..."}),O=e=>{let{links:n}=e;return(0,p.jsx)(V,{fallback:(0,p.jsx)(D,{}),children:n.map((e=>(0,p.jsx)(U,{children:(0,p.jsx)(B,{...e})},e.id)))})};var Z=t(5845),z=t(6554),G=t(7565),Y=t(6027),q=t(4967),J=t(1661),Q=t(5445),W=t(1517);const X=e=>{var n;const t=new URLSearchParams(e);return{s:null!==(n=t.get("s"))&&void 0!==n?n:"",category:new Set(t.getAll("category")),tag:new Set(t.getAll("tag")),place:new Set(t.getAll("place")),person:new Set(t.getAll("person"))}},ee=e=>{let{onSubmit:n,search:t}=e;const r=c(),{s:a,category:l,tag:u,place:d,person:h,setter:f,navigate:m}=(()=>{const{0:{s:e,category:n,tag:t,place:r,person:a},1:l}=(0,s.useReducer)(i,o),{1:c}=(0,s.useTransition)(),u=(0,s.useCallback)(((e,n)=>l({type:"set",name:e,value:n})),[]),d=(0,s.useCallback)((e=>{let{s:n,category:t,tag:r,place:s,person:a}=e;return c((()=>l({type:"navigate",s:n,category:t,tag:r,place:s,person:a})))}),[]);return{s:e,category:n,tag:t,place:r,person:a,setter:u,navigate:d}})();return(0,s.useEffect)((()=>{const{s:e,category:n,tag:r,place:s,person:a}=X(t);m({s:e,category:n,tag:r,place:s,person:a})}),[m,t]),(0,p.jsx)(L,{action:"/search",onSubmit:n,tags:r,set:f,s:a,category:l,tag:u,place:d,person:h})},ne=()=>{let{search:e=""}=(0,a.useLocation)();(0,q.t)()||(e="");const n=(0,s.useMemo)((()=>{const{s:n}=X(e);return""!==n&&n?[n]:[]}),[e]),t=Q.K.apply(void 0,(0,r.A)(n).concat(["Search"]));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("title",{children:t}),(0,p.jsx)("link",{rel:"modulepreload",href:"/static/pagefind/pagefind.js"}),(0,p.jsx)("link",{rel:"preload",href:"/static/pagefind/wasm.en.pagefind",as:"fetch",crossOrigin:"crossOrigin",type:"application/octet-stream"})]})},te=e=>{let{search:n}=e;const t=(0,s.useDeferredValue)(n),{links:r,init:a,load:l}=(()=>{const{0:e,1:n}=(0,s.useReducer)(A,S),{1:t}=(0,s.useTransition)(),r=(0,s.useCallback)((e=>t((()=>n({type:"init",linkIds:e})))),[]);return{links:e,init:r,load:(0,s.useCallback)(((e,r,s)=>t((()=>n({type:"load",index:e,url:r,title:s})))),[])}})();return F(t,10,a,l),(0,p.jsx)(O,{links:r})};var re=()=>{const e=(0,J.o)();let{search:n=""}=(0,a.useLocation)();(0,q.t)()||(n="");const t=(0,s.useDeferredValue)(n),{s:r=""}=new URLSearchParams(t);return(0,p.jsx)(Y.A,{support:(0,p.jsx)(ee,{onSubmit:e,search:t}),breadcrumbs:(0,p.jsxs)(Z.A,{children:[(0,p.jsx)(z.BF,{href:"/",children:"Home"}),(0,p.jsx)(G.J,{children:(0,p.jsx)("span",{"aria-current":"page",children:"Search"})})]}),heading:""===r?(0,p.jsx)(p.Fragment,{children:"Results"}):(0,p.jsxs)(p.Fragment,{children:[r,W.m,"Results"]}),children:(0,p.jsx)(te,{search:t})})}},1517:function(e,n,t){t.d(n,{m:function(){return r}});const r=" — "}}]);
//# sourceMappingURL=component---src-pages-search-jsx-0179b157f32f84b50a37.js.map