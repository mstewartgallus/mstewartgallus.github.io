"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[256],{2980:function(n,e,r){r.d(e,{i:function(){return s}});var t=r(3274),o=r(9622),c=r(7294);var u=r(5893);const i=n=>{const e=(n=>{let{description:e,url:r,title:t}=n;const u=(0,o.$)();return(0,c.useMemo)((()=>({og:{site_name:u.title,title:t,description:null!=e?e:u.description,url:r}})),[u,e,r,t])})(n);return Array.from(function*(){for(const[n,r,o]of(0,t.x)(e))yield(0,u.jsx)("meta",{property:r,content:o},n)}())},s=n=>{const{description:e,url:r}=n,t=(0,o.$)();return(0,u.jsxs)(u.Fragment,{children:[r&&(0,u.jsx)("link",{rel:"canonical",href:r}),(0,u.jsx)("meta",{name:"description",content:null!=e?e:t.description}),(0,u.jsx)(i,{...n})]})}},7585:function(n,e,r){r.d(e,{Z:function(){return u}});var t=r(7294),o=r(1883),c=r(2164);const u=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];const u=(0,o.K2)("3159585216");return(0,t.useMemo)((()=>{const{title:n}=u.site.siteMetadata;return[].concat(e,[n]).join(c.k)}),[u,e])}},3900:function(n,e,r){r.d(e,{K:function(){return s},m:function(){return u}});var t=r(7294),o=r(9472),c=r(5893);const u=()=>(0,t.useContext)(o.Context),i=n=>{let{children:e,fallback:r}=n;return u()?e:r},s=n=>{let{children:e,fallback:r}=n;return(0,c.jsx)(i,{fallback:r,children:(0,c.jsx)(t.Suspense,{fallback:r,children:e})})}},6857:function(n,e,r){r.d(e,{F:function(){return c},TH:function(){return u}});var t=r(7294),o=r(1633);const c=()=>(0,t.useContext)(o.Context),u=()=>c().location},463:function(n,e,r){r.d(e,{v:function(){return H}});var t=r(7294),o=r(3935),c=r(3900),u=r(2675),i=r(5893);const s=n=>{let{children:e}=n;const r=(0,t.useContext)(u.Context);return(0,i.jsx)(c.K,{children:r&&(0,o.createPortal)(e,r)})};var l=r(8088),a=r(4218),d=r(3189),f=r(6205),h=r(6857),m=r(6659);const v=(0,r(4846).f)("div","page-module--layout--39e85");var x=r(7256),p=r(9422),j=r(7027),b=r(1245);const g=n=>{let{children:e,sidebar:r}=n;return(0,i.jsxs)("div",{className:"sidebar-module--layout--9433a",children:[(0,i.jsx)("div",{className:"sidebar-module--mainbar--67dd7",children:e}),(0,i.jsx)("div",{className:"sidebar-module--sidebar--d1ec2",children:r})]})},y=n=>{let{children:e,support:r}=n;return(0,i.jsx)(g,{sidebar:(0,i.jsx)(b.s,{children:r}),children:e})},w=n=>{let{children:e,support:r,navigation:t,breadcrumbs:o}=n;return(0,i.jsx)(y,{support:(0,i.jsxs)(i.Fragment,{children:[r,(0,i.jsxs)(x.E,{children:[t,(0,i.jsx)(p.J,{heading:(0,i.jsx)(j.vJ,{id:"breadcrumbs",children:"Breadcrumbs"}),children:o})]})]}),children:(0,i.jsx)(b.s,{children:e})})},k={preventScroll:!0},$=n=>{const e=(()=>{const{location:n,prevLocation:e}=(0,h.F)(),{pathname:r,hash:o}=n,{pathname:c}=e,u=r!==c,i=(0,t.useRef)(null);return(0,t.useEffect)((()=>{if(!u||o)return;let n=!1;return window.requestAnimationFrame((()=>{var e;n||null===(e=i.current)||void 0===e||e.focus(k)})),()=>n=!0}),[o,r,u]),i})();return(0,i.jsx)(j.RQ,{...n,ref:e})},C=n=>{let{children:e}=n;const{location:r,prevLocation:t}=(0,h.F)();return r!==t&&(0,i.jsxs)(s,{children:["Navigated to ",e]})},H=n=>{let{children:e,heading:r,subheading:t,notice:o,mainbar:c,support:u,navigation:s,breadcrumbs:h}=n;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C,{children:r}),(0,i.jsx)(l.Q,{children:(0,i.jsx)(m.h,{children:(0,i.jsx)(v,{children:(0,i.jsxs)(w,{support:u,navigation:s,breadcrumbs:h,children:[(0,i.jsx)("main",{"data-pagefind-body":"","aria-describedby":"content",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(d.h,{children:[(0,i.jsxs)(f.h,{children:[(0,i.jsx)($,{id:"content",children:r}),t]}),o]}),e]})}),c]})})})})]})}},6659:function(n,e,r){r.d(e,{h:function(){return i}});var t=r(7294),o=r(2062),c=r(5893);const u=n=>{let{children:e,scrollLeft:r,scrollTop:o,onScroll:u}=n;const i=(0,t.useRef)(null),s=(0,t.useRef)({scrollLeft:r,scrollTop:o});return(0,t.useLayoutEffect)((()=>{const{current:{scrollLeft:n,scrollTop:e}}=s;i.current.scrollTo({left:n,top:e,behaviour:"instant"})}),[]),(0,c.jsx)("div",{className:"scroller-module--scroller--6ed48",onScroll:u,ref:i,children:e})},i=n=>{let{children:e}=n;const{scrollLeft:r,scrollTop:i,onScroll:s}=(0,t.useContext)(o.Context);return(0,c.jsx)(u,{scrollLeft:r,scrollTop:i,onScroll:s,children:e})}},4218:function(n,e,r){r.d(e,{Z:function(){return t}});const t=(0,r(4846).f)("div","card-module--card--729a6")},1245:function(n,e,r){r.d(e,{s:function(){return t}});const t=(0,r(4846).f)("div","column-module--column--abfac")},3189:function(n,e,r){r.d(e,{h:function(){return t}});const t=(0,r(4846).f)("header","header-module--header--2ed67")},7027:function(n,e,r){r.d(e,{I9:function(){return s},MA:function(){return a},RD:function(){return i},RQ:function(){return c},WY:function(){return l},vJ:function(){return u}});var t=r(4095),o=r(7831);const c=(0,t.B)(o.H1),u=(0,t.B)(o.H2),i=(0,t.B)(o.H3),s=(0,t.B)(o.H4),l=(0,t.B)(o.H5),a=(0,t.B)(o.H6)},7831:function(n,e,r){r.d(e,{H1:function(){return c},H2:function(){return u},H3:function(){return i},H4:function(){return s},H5:function(){return l},H6:function(){return a}});var t=r(4846),o="heading-module--heading--5dd10";const c=(0,t.f)("h1","heading-module--heading1--30070"),u=(0,t.f)("h2","heading-module--heading2--16827"),i=(0,t.f)("h3",o),s=(0,t.f)("h4",o),l=(0,t.f)("h5",o),a=(0,t.f)("h6",o)},6205:function(n,e,r){r.d(e,{h:function(){return t}});const t=(0,r(4846).f)("hgroup","hgroup-module--hgroup--65970")},9422:function(n,e,r){r.d(e,{J:function(){return i}});var t=r(7294),o=r(4218),c=r(6205),u=r(5893);const i=n=>{let{children:e,heading:r,...i}=n;const s=(0,t.useId)();return(0,u.jsx)("nav",{"aria-labelledby":s,...i,children:(0,u.jsxs)(o.Z,{children:[(0,u.jsx)("header",{id:s,children:(0,u.jsx)(c.h,{children:r})}),e]})})}},359:function(n,e,r){r.d(e,{P:function(){return t}});const t=(0,r(4846).f)("p","p-module--p--1f3a4")},8088:function(n,e,r){r.d(e,{Q:function(){return t}});const t=(0,r(4846).f)("div","theme-module--theme--d14f8")},4095:function(n,e,r){r.d(e,{B:function(){return l}});var t=r(7294),o=r(7120),c=r(4846),u=r(3318);const i=(0,c.f)(u.A,"a-module--a--871de");var s=r(5893);const l=n=>{const e=(0,o.f)(n),r=(0,t.forwardRef)(((e,r)=>{let{children:t,id:o,...c}=e;const u=o?`#${o}`:null;return(0,s.jsx)(n,{...c,children:(0,s.jsx)(i,{id:o,href:u,ref:r,children:t})})}));return r.displayName=`A(${e})`,r}},3318:function(n,e,r){r.d(e,{A:function(){return p}});var t=r(7294),o=r(7120),c=r(9071);var u=r(5893);const i=n=>window.___loader.hovering(n);var s=r(1883);const l={threshold:1},a=new Map,d=n=>{let{target:e,isIntersecting:r,intersectionRatio:t}=n;const o=a.get(e);null==o||o(r||t>0)},f=n=>{for(const e of n)d(e)};let h=null;const m=(n,e)=>{const r=(0,t.useRef)(null);return(0,t.useImperativeHandle)(n,(()=>r.current),[r]),(0,t.useEffect)((()=>{const n=(()=>{if(h)return h;if(!window)return null;const{IntersectionObserver:n}=window;return n?(h=new n(f,l),h):null})();if(!n)return;const{current:t}=r;if(!t)return;const o={current:!1},c={current:null},u=n=>{var r;o.current||(n?c.current||(c.current=(0,s.Cw)(e)):(null===(r=c.current)||void 0===r||r.abort(),c.current=null))};return a.set(t,u),n.observe(t),()=>{var e;o.current=!0,null===(e=c.current)||void 0===e||e.abort(),c.current=null,n.unobserve(t),a.delete(u)}}),[e]),r},v=()=>(0,s.K2)("1271460761").site.siteMetadata.siteUrl,x=(n=>{const e=(0,t.forwardRef)(((e,r)=>{const o=(n=>{let{href:e,onClick:r}=n;return(0,t.useCallback)((async n=>{null==r||r(n);const{defaultPrevented:t,altKey:o,metaKey:u,shiftKey:i,ctrlKey:s,button:l}=n;t||0===l&&(o||u||i||s||(n.preventDefault(),await(0,c.c)(e)))}),[r,e])})(e);return(0,u.jsx)(n,{...e,onClick:o,ref:r})}));return e.displayName=`Click(${(0,o.f)(n)})`,e})((n=>{const e=(0,t.forwardRef)(((e,r)=>{const{onFocus:o,onMouseEnter:c}=(n=>{let{href:e,onFocus:r,onMouseEnter:o}=n;return{onFocus:(0,t.useCallback)((n=>{i(e),null==r||r(n)}),[r,e]),onMouseEnter:(0,t.useCallback)((n=>{i(e),null==o||o(n)}),[o,e])}})(e);return(0,u.jsx)(n,{...e,onFocus:o,onMouseEnter:c,ref:r})}));return e.displayName=`Hovering(${(0,o.f)(n)})`,e})((n=>{const e=(0,t.forwardRef)(((e,r)=>{const{href:t}=e,o=m(r,t);return(0,u.jsx)(n,{...e,ref:o})}));return e.displayName=`Prefetch(${(0,o.f)(n)})`,e})("a"))),p=(0,t.forwardRef)(((n,e)=>(n=>{let{href:e,target:r,download:t}=n;const o=v();if(!e||r||t)return null;const{origin:c,pathname:u,hash:i,search:s}=new URL(e,o);return c!==o||i?null:`${u}${s}${i}`})(n)?(0,u.jsx)(x,{...n,ref:e}):(0,u.jsx)("a",{...n,ref:e})));p.displayName="A"},7120:function(n,e,r){r.d(e,{f:function(){return t}});const t=n=>{var e;if("string"==typeof n)return n;const r=null!==(e=n.displayName)&&void 0!==e?e:n.name;return r||console.log(n),r}},9071:function(n,e,r){r.d(e,{c:function(){return o}});var t=r(1883);const o=async n=>{if(!document.startViewTransition)return await(0,t.c4)(n);const e={current:null},r=document.startViewTransition((async()=>{const r=e.current,o=(0,t.c4)(n),c=setTimeout((()=>r.skipTransition()),1e4);await o,clearTimeout(c)}));return e.current=r,await r.updateCallbackDone}},7256:function(n,e,r){r.d(e,{E:function(){return t}});const t=(0,r(4846).f)("div","screen-only-module--screen--a22bb")},4846:function(n,e,r){r.d(e,{f:function(){return u}});var t=r(7294),o=r(7120),c=r(5893);const u=(n,e)=>{const r=((n,e)=>(0,t.forwardRef)(((r,t)=>{var o;const u=`${null!==(o=r.className)&&void 0!==o?o:""} ${e}`;return(0,c.jsx)(n,{...r,className:u,ref:t})})))(n,e),u=(0,o.f)(n);return r.displayName=`.${e}(${u})`,r}},6262:function(n,e,r){r.d(e,{L:function(){return c}});var t=r(1883),o=r(7294);const c=n=>{const e=(0,t.K2)("1271460761");return(0,o.useMemo)((()=>{const r=e.site.siteMetadata;return String(new URL(n,r.siteUrl))}),[e,n])}},9622:function(n,e,r){r.d(e,{$:function(){return o}});var t=r(1883);const o=()=>(0,t.K2)("3000541721").site.siteMetadata},8300:function(n,e,r){r.r(e),r.d(e,{Head:function(){return m},default:function(){return v}});var t=r(7294),o=r(3900),c=r(463),u=r(5893);const i=(0,t.lazy)((()=>Promise.all([r.e(532),r.e(642)]).then(r.bind(r,5642)))),s=n=>{let{children:e,heading:r}=n;return(0,u.jsx)(o.K,{fallback:(0,u.jsx)(c.v,{heading:r,children:e}),children:(0,u.jsx)(i,{heading:r,children:e})})};var l=r(359),a=r(2980),d=r(7585),f=r(6262);const h="Page Not Found",m=n=>{let{location:{pathname:e}}=n;const r=(0,f.L)(e),t=(0,d.Z)(h);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("title",{children:t}),(0,u.jsx)(a.i,{title:h,url:r})]})};var v=()=>(0,u.jsx)(s,{heading:"Page Not Found",children:(0,u.jsx)(l.P,{children:"Sorry the page you requested could not be found."})})},3274:function(n,e,r){r.d(e,{x:function(){return o}});const t=function*n(e,r,t){if("string"!=typeof t)if(Array.isArray(t)){let o=0;for(const c of t){for(const t of n(`${e}${o}`,r,c))yield t;++o}}else for(const[o,c]of Object.entries(t)){const t=r?`${r}:${o}`:o,u=r?`${e}:${o}`:o;for(const e of n(u,t,c))yield e}else yield[e,r,t]},o=function*(n){for(const e of t(null,null,n))yield e}},2164:function(n,e,r){r.d(e,{k:function(){return t}});const t=" — "}}]);
//# sourceMappingURL=component---src-pages-404-jsx-0db9b258d2095092a8a2.js.map