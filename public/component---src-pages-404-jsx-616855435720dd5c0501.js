"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[256],{2980:function(n,e,r){r.d(e,{i:function(){return i}});var t=r(3274),o=r(9622),c=r(7294);var u=r(5893);const s=n=>{const e=(n=>{let{description:e,url:r,title:t}=n;const u=(0,o.$)();return(0,c.useMemo)((()=>({og:{site_name:u.title,title:t,description:null!=e?e:u.description,url:r}})),[u,e,r,t])})(n);return Array.from(function*(){for(const[n,r,o]of(0,t.x)(e))yield(0,u.jsx)("meta",{property:r,content:o},n)}())},i=n=>{const{description:e,url:r}=n,t=(0,o.$)();return(0,u.jsxs)(u.Fragment,{children:[r&&(0,u.jsx)("link",{rel:"canonical",href:r}),(0,u.jsx)("meta",{name:"description",content:null!=e?e:t.description}),(0,u.jsx)(s,{...n})]})}},7585:function(n,e,r){r.d(e,{Z:function(){return u}});var t=r(7294),o=r(1883),c=r(2164);const u=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];const u=(0,o.K2)("3159585216");return(0,t.useMemo)((()=>{const{title:n}=u.site.siteMetadata;return[].concat(e,[n]).join(c.k)}),[u,e])}},3900:function(n,e,r){r.d(e,{K:function(){return i},m:function(){return u}});var t=r(7294),o=r(9472),c=r(5893);const u=()=>(0,t.useContext)(o.Context),s=n=>{let{children:e,fallback:r}=n;return u()?e:r},i=n=>{let{children:e,fallback:r}=n;return(0,c.jsx)(s,{fallback:r,children:(0,c.jsx)(t.Suspense,{fallback:r,children:e})})}},6857:function(n,e,r){r.d(e,{F:function(){return c},TH:function(){return u}});var t=r(7294),o=r(1633);const c=()=>(0,t.useContext)(o.Context),u=()=>c().location},463:function(n,e,r){r.d(e,{v:function(){return C}});var t=r(7294),o=r(3935),c=r(3900),u=r(2675),s=r(5893);const i=n=>{let{children:e}=n;const r=(0,t.useContext)(u.Context);return(0,s.jsx)(c.K,{children:r&&(0,o.createPortal)(e,r)})};var l=r(8088),a=r(4218),d=r(3189),f=r(6205),h=r(6659);const m=(0,r(4846).f)("div","page-module--layout--39e85");var v=r(7256),x=r(9422),p=r(7027),j=r(1245);const b=n=>{let{children:e,sidebar:r}=n;return(0,s.jsxs)("div",{className:"sidebar-module--layout--9433a",children:[(0,s.jsx)("div",{className:"sidebar-module--mainbar--67dd7",children:e}),(0,s.jsx)("div",{className:"sidebar-module--sidebar--d1ec2",children:r})]})},g=n=>{let{children:e,support:r}=n;return(0,s.jsx)(b,{sidebar:(0,s.jsx)(j.s,{children:r}),children:e})},y=n=>{let{children:e,support:r,navigation:t,breadcrumbs:o}=n;return(0,s.jsx)(g,{support:(0,s.jsxs)(s.Fragment,{children:[r,(0,s.jsxs)(v.E,{children:[t,(0,s.jsx)(x.J,{heading:(0,s.jsx)(p.vJ,{id:"breadcrumbs",children:"Breadcrumbs"}),children:o})]})]}),children:(0,s.jsx)(j.s,{children:e})})};var w=r(6857);const k={preventScroll:!0},$=n=>{const e=(()=>{const{location:n,prevLocation:e}=(0,w.F)(),{pathname:r,hash:o}=n,{pathname:c}=e,u=r!==c,s=(0,t.useRef)(null);return(0,t.useEffect)((()=>{u&&!o&&queueMicrotask((()=>{var n;return null===(n=s.current)||void 0===n?void 0:n.focus(k)}))}),[o,r,u]),s})();return(0,s.jsx)(p.RQ,{...n,ref:e})},C=n=>{let{children:e,heading:r,subheading:t,notice:o,mainbar:c,support:u,navigation:v,breadcrumbs:x}=n;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i,{children:["Navigated to ",r]}),(0,s.jsx)(l.Q,{children:(0,s.jsx)(h.h,{children:(0,s.jsx)(m,{children:(0,s.jsxs)(y,{support:u,navigation:v,breadcrumbs:x,children:[(0,s.jsx)("main",{"data-pagefind-body":"","aria-describedby":"content",children:(0,s.jsxs)(a.Z,{children:[(0,s.jsxs)(d.h,{children:[(0,s.jsxs)(f.h,{children:[(0,s.jsx)($,{id:"content",children:r}),t]}),o]}),e]})}),c]})})})})]})}},6659:function(n,e,r){r.d(e,{h:function(){return s}});var t=r(7294),o=r(2062),c=r(5893);const u=n=>{let{children:e,scrollLeft:r,scrollTop:o,onScroll:u}=n;const s=(0,t.useRef)(null),i=(0,t.useRef)({scrollLeft:r,scrollTop:o});return(0,t.useLayoutEffect)((()=>{const{current:{scrollLeft:n,scrollTop:e}}=i;queueMicrotask((()=>s.current.scrollTo({left:n,top:e,behaviour:"instant"})))}),[]),(0,c.jsx)("div",{className:"scroller-module--scroller--6ed48",onScroll:u,ref:s,children:e})},s=n=>{let{children:e}=n;const{scrollLeft:r,scrollTop:s,onScroll:i}=(0,t.useContext)(o.Context);return(0,c.jsx)(u,{scrollLeft:r,scrollTop:s,onScroll:i,children:e})}},4218:function(n,e,r){r.d(e,{Z:function(){return t}});const t=(0,r(4846).f)("div","card-module--card--729a6")},1245:function(n,e,r){r.d(e,{s:function(){return t}});const t=(0,r(4846).f)("div","column-module--column--abfac")},3189:function(n,e,r){r.d(e,{h:function(){return t}});const t=(0,r(4846).f)("header","header-module--header--2ed67")},7027:function(n,e,r){r.d(e,{I9:function(){return i},MA:function(){return a},RD:function(){return s},RQ:function(){return c},WY:function(){return l},vJ:function(){return u}});var t=r(4095),o=r(7831);const c=(0,t.B)(o.H1),u=(0,t.B)(o.H2),s=(0,t.B)(o.H3),i=(0,t.B)(o.H4),l=(0,t.B)(o.H5),a=(0,t.B)(o.H6)},7831:function(n,e,r){r.d(e,{H1:function(){return c},H2:function(){return u},H3:function(){return s},H4:function(){return i},H5:function(){return l},H6:function(){return a}});var t=r(4846),o="heading-module--heading--5dd10";const c=(0,t.f)("h1","heading-module--heading1--30070"),u=(0,t.f)("h2","heading-module--heading2--16827"),s=(0,t.f)("h3",o),i=(0,t.f)("h4",o),l=(0,t.f)("h5",o),a=(0,t.f)("h6",o)},6205:function(n,e,r){r.d(e,{h:function(){return t}});const t=(0,r(4846).f)("hgroup","hgroup-module--hgroup--65970")},9422:function(n,e,r){r.d(e,{J:function(){return s}});var t=r(7294),o=r(4218),c=r(6205),u=r(5893);const s=n=>{let{children:e,heading:r,...s}=n;const i=(0,t.useId)();return(0,u.jsx)("nav",{"aria-labelledby":i,...s,children:(0,u.jsxs)(o.Z,{children:[(0,u.jsx)("header",{id:i,children:(0,u.jsx)(c.h,{children:r})}),e]})})}},359:function(n,e,r){r.d(e,{P:function(){return t}});const t=(0,r(4846).f)("p","p-module--p--1f3a4")},8088:function(n,e,r){r.d(e,{Q:function(){return t}});const t=(0,r(4846).f)("div","theme-module--theme--d14f8")},4095:function(n,e,r){r.d(e,{B:function(){return l}});var t=r(7294),o=r(7120),c=r(4846),u=r(3318);const s=(0,c.f)(u.A,"a-module--a--871de");var i=r(5893);const l=n=>{const e=(0,o.f)(n),r=(0,t.forwardRef)(((e,r)=>{let{children:t,id:o,...c}=e;const u=o?`#${o}`:null;return(0,i.jsx)(n,{...c,children:(0,i.jsx)(s,{id:o,href:u,ref:r,children:t})})}));return r.displayName=`A(${e})`,r}},3318:function(n,e,r){r.d(e,{A:function(){return p}});var t=r(7294),o=r(7120),c=r(9071);var u=r(5893);const s=n=>window.___loader.hovering(n);var i=r(1883);const l={threshold:1},a=new Map,d=n=>{let{target:e,isIntersecting:r,intersectionRatio:t}=n;const o=a.get(e);null==o||o(r||t>0)},f=n=>{for(const e of n)d(e)};let h=null;const m=(n,e)=>{const r=(0,t.useRef)(null);return(0,t.useImperativeHandle)(n,(()=>r.current),[r]),(0,t.useEffect)((()=>{const n=(()=>{if(h)return h;if(!window)return null;const{IntersectionObserver:n}=window;return n?(h=new n(f,l),h):null})();if(!n)return;const{current:t}=r;if(!t)return;const o={current:!1},c={current:null},u=n=>{var r;o.current||(n?c.current||(c.current=(0,i.Cw)(e)):(null===(r=c.current)||void 0===r||r.abort(),c.current=null))};return a.set(t,u),n.observe(t),()=>{var e;o.current=!0,null===(e=c.current)||void 0===e||e.abort(),c.current=null,n.unobserve(t),a.delete(u)}}),[e]),r},v=()=>(0,i.K2)("1271460761").site.siteMetadata.siteUrl,x=(n=>{const e=(0,t.forwardRef)(((e,r)=>{const o=(n=>{let{href:e,onClick:r}=n;return(0,t.useCallback)((async n=>{null==r||r(n);const{defaultPrevented:t,altKey:o,metaKey:u,shiftKey:s,ctrlKey:i,button:l}=n;t||0===l&&(o||u||s||i||(n.preventDefault(),await(0,c.c)(e)))}),[r,e])})(e);return(0,u.jsx)(n,{...e,onClick:o,ref:r})}));return e.displayName=`Click(${(0,o.f)(n)})`,e})((n=>{const e=(0,t.forwardRef)(((e,r)=>{const{onFocus:o,onMouseEnter:c}=(n=>{let{href:e,onFocus:r,onMouseEnter:o}=n;return{onFocus:(0,t.useCallback)((n=>{s(e),null==r||r(n)}),[r,e]),onMouseEnter:(0,t.useCallback)((n=>{s(e),null==o||o(n)}),[o,e])}})(e);return(0,u.jsx)(n,{...e,onFocus:o,onMouseEnter:c,ref:r})}));return e.displayName=`Hovering(${(0,o.f)(n)})`,e})((n=>{const e=(0,t.forwardRef)(((e,r)=>{const{href:t}=e,o=m(r,t);return(0,u.jsx)(n,{...e,ref:o})}));return e.displayName=`Prefetch(${(0,o.f)(n)})`,e})("a"))),p=(0,t.forwardRef)(((n,e)=>(n=>{let{href:e,target:r,download:t}=n;const o=v();if(!e||r||t)return null;const{origin:c,pathname:u,hash:s,search:i}=new URL(e,o);return c!==o||s?null:`${u}${i}${s}`})(n)?(0,u.jsx)(x,{...n,ref:e}):(0,u.jsx)("a",{...n,ref:e})));p.displayName="A"},7120:function(n,e,r){r.d(e,{f:function(){return t}});const t=n=>{var e;if("string"==typeof n)return n;const r=null!==(e=n.displayName)&&void 0!==e?e:n.name;return r||console.log(n),r}},9071:function(n,e,r){r.d(e,{c:function(){return o}});var t=r(1883);const o=async n=>{if(!document.startViewTransition)return await(0,t.c4)(n);const e={current:null},r=document.startViewTransition((async()=>{const r=e.current,o=(0,t.c4)(n),c=setTimeout((()=>r.skipTransition()),1e4);await o,clearTimeout(c)}));return e.current=r,await r.updateCallbackDone}},7256:function(n,e,r){r.d(e,{E:function(){return t}});const t=(0,r(4846).f)("div","screen-only-module--screen--a22bb")},4846:function(n,e,r){r.d(e,{f:function(){return u}});var t=r(7294),o=r(7120),c=r(5893);const u=(n,e)=>{const r=((n,e)=>(0,t.forwardRef)(((r,t)=>{var o;const u=`${null!==(o=r.className)&&void 0!==o?o:""} ${e}`;return(0,c.jsx)(n,{...r,className:u,ref:t})})))(n,e),u=(0,o.f)(n);return r.displayName=`.${e}(${u})`,r}},6262:function(n,e,r){r.d(e,{L:function(){return c}});var t=r(1883),o=r(7294);const c=n=>{const e=(0,t.K2)("1271460761");return(0,o.useMemo)((()=>{const r=e.site.siteMetadata;return String(new URL(n,r.siteUrl))}),[e,n])}},9622:function(n,e,r){r.d(e,{$:function(){return o}});var t=r(1883);const o=()=>(0,t.K2)("3000541721").site.siteMetadata},8300:function(n,e,r){r.r(e),r.d(e,{Head:function(){return m},default:function(){return v}});var t=r(7294),o=r(3900),c=r(463),u=r(5893);const s=(0,t.lazy)((()=>Promise.all([r.e(532),r.e(642)]).then(r.bind(r,5642)))),i=n=>{let{children:e,heading:r}=n;return(0,u.jsx)(o.K,{fallback:(0,u.jsx)(c.v,{heading:r,children:e}),children:(0,u.jsx)(s,{heading:r,children:e})})};var l=r(359),a=r(2980),d=r(7585),f=r(6262);const h="Page Not Found",m=n=>{let{location:{pathname:e}}=n;const r=(0,f.L)(e),t=(0,d.Z)(h);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("title",{children:t}),(0,u.jsx)(a.i,{title:h,url:r})]})};var v=()=>(0,u.jsx)(i,{heading:"Page Not Found",children:(0,u.jsx)(l.P,{children:"Sorry the page you requested could not be found."})})},3274:function(n,e,r){r.d(e,{x:function(){return o}});const t=function*n(e,r,t){if("string"!=typeof t)if(Array.isArray(t)){let o=0;for(const c of t){for(const t of n(`${e}${o}`,r,c))yield t;++o}}else for(const[o,c]of Object.entries(t)){const t=r?`${r}:${o}`:o,u=r?`${e}:${o}`:o;for(const e of n(u,t,c))yield e}else yield[e,r,t]},o=function*(n){for(const e of t(null,null,n))yield e}},2164:function(n,e,r){r.d(e,{k:function(){return t}});const t=" — "}}]);
//# sourceMappingURL=component---src-pages-404-jsx-616855435720dd5c0501.js.map