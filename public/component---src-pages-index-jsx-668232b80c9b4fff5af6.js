"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[230],{7311:function(e,n,r){r.d(n,{h:function(){return o}});var t=r(7294),s=r(5893);const o=e=>{let{srcdoc:n}=e;const r=(0,t.useMemo)((()=>JSON.stringify(n)),[n]);return(0,s.jsx)("script",{type:"application/ld+json",children:r})}},2980:function(e,n,r){r.d(n,{i:function(){return u}});var t=r(3274),s=r(9622),o=r(7294);var c=r(5893);const i=e=>{const n=(e=>{let{description:n,url:r,title:t}=e;const c=(0,s.$)();return(0,o.useMemo)((()=>({og:{site_name:c.title,title:t,description:null!=n?n:c.description,url:r}})),[c,n,r,t])})(e);return Array.from(function*(){for(const[e,r,s]of(0,t.x)(n))yield(0,c.jsx)("meta",{property:r,content:s},e)}())},u=e=>{const{description:n,url:r}=e,t=(0,s.$)();return(0,c.jsxs)(c.Fragment,{children:[r&&(0,c.jsx)("link",{rel:"canonical",href:r}),(0,c.jsx)("meta",{name:"description",content:null!=n?n:t.description}),(0,c.jsx)(i,{...e})]})}},7585:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(7294),s=r(1883),o=r(2164);const c=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const c=(0,s.K2)("3159585216");return(0,t.useMemo)((()=>{const{title:e}=c.site.siteMetadata;return[].concat(n,[e]).join(o.k)}),[c,n])}},6857:function(e,n,r){r.d(n,{F:function(){return o},TH:function(){return c}});var t=r(7294),s=r(1633);const o=()=>(0,t.useContext)(s.Context),c=()=>o().location},6434:function(e,n,r){r.d(n,{v:function(){return w}});var t=r(8088),s=r(4218),o=r(3189),c=r(6205),i=r(7831),u=r(6659);const l=(0,r(4846).f)("div","page-module--layout--39e85");var a=r(7256),d=r(9422),f=r(8771),h=r(1245),m=r(5893);const x=e=>{let{children:n,sidebar:r}=e;return(0,m.jsxs)("div",{className:"page-module--layout--e2189",children:[(0,m.jsx)("div",{className:"page-module--mainbar--48089",children:n}),(0,m.jsx)("div",{className:"page-module--sidebar--a10f5",children:r})]})},j=e=>{let{children:n,support:r}=e;return(0,m.jsx)(x,{sidebar:(0,m.jsx)(h.s,{children:r}),children:n})},p=e=>{let{children:n,support:r,navigation:t,breadcrumbs:s}=e;return(0,m.jsx)(j,{support:(0,m.jsxs)(m.Fragment,{children:[r,t,(0,m.jsx)(a.E,{children:(0,m.jsx)(d.J,{heading:(0,m.jsx)(i.H2,{children:(0,m.jsx)(f.v,{id:"breadcrumbs",href:"#breadcrumbs",children:"Breadcrumbs"})}),children:s})})]}),children:(0,m.jsx)(h.s,{children:n})})};var b=r(7294),v=r(6857);const g={preventScroll:!0},y=e=>{const n=(()=>{const{location:e,prevLocation:n}=(0,v.F)(),{pathname:r,hash:t}=e,{pathname:s}=n,o=r!==s,c=(0,b.useRef)();return(0,b.useEffect)((()=>{var e;o&&(t||null===(e=c.current)||void 0===e||e.focus(g))}),[t,r,o]),c})();return(0,m.jsx)(f.v,{...e,ref:n})},w=e=>{let{children:n,heading:r,subheading:a,notice:d,mainbar:f,support:h,navigation:x,breadcrumbs:j}=e;return(0,m.jsx)(t.Q,{children:(0,m.jsx)(u.h,{children:(0,m.jsx)(l,{children:(0,m.jsxs)(p,{support:h,navigation:x,breadcrumbs:j,children:[(0,m.jsx)("main",{"data-pagefind-body":"","aria-describedby":"content",children:(0,m.jsxs)(s.Z,{children:[(0,m.jsxs)(o.h,{children:[(0,m.jsxs)(c.h,{children:[(0,m.jsx)(i.H1,{children:(0,m.jsx)(y,{id:"content",href:"#content",children:r})}),a]}),d]}),n]})}),f]})})})})}},5929:function(e,n,r){r.d(n,{o:function(){return o}});var t=r(7294),s=r(5893);const o=(0,t.forwardRef)(((e,n)=>{let{children:r,...t}=e;return(0,s.jsx)("search",{ref:n,role:"search",...t,children:r})}));o.displayName="Search"},6659:function(e,n,r){r.d(n,{h:function(){return i}});var t=r(7294),s=r(6857),o=r(2062),c=r(5893);const i=e=>{let{children:n}=e;const{scroll:[r,i],setScroll:u}=(0,t.useContext)(o.Context),{hash:l}=(0,s.TH)(),a=(0,t.useRef)(null),d=(0,t.useRef)({left:r,top:i,hash:l}),f=(()=>{const e=(0,t.useRef)(!1);return(0,t.useCallback)(((n,r)=>{e.current||(e.current=!0,setTimeout((()=>{r(),e.current=!1}),n))}),[])})(),h=(0,t.useCallback)((()=>{f(100,(()=>{const{current:e}=a;e&&u(e.scrollLeft,e.scrollTop)}))}),[f,u]);return(0,t.useLayoutEffect)((()=>{var e;const{left:n,top:r,hash:t}=d.current;t||null===(e=a.current)||void 0===e||e.scrollTo({left:n,top:r,behaviour:"instant"})}),[]),(0,c.jsx)("div",{className:"scroller-module--scroller--6ed48",onScroll:h,ref:a,children:n})}},285:function(e,n,r){r.d(n,{I:function(){return u}});var t=r(5785),s=r(7294),o=r(1883);const c="/search",i=function(e,n){return void 0===n&&(n=[]),n.map((n=>[e,n]))},u=e=>{const{s:n,category:r,tag:u,place:l,person:a}=null!=e?e:{};return(0,s.useMemo)((()=>{const e=[].concat((0,t.Z)(n?["s",n]:[]),(0,t.Z)(i("category",r)),(0,t.Z)(i("tag",u)),(0,t.Z)(i("place",l)),(0,t.Z)(i("person",a))),s=String(new URLSearchParams(e)),d=""===s?c:`${c}?${s}`;return(0,o.dq)(d)}),[n,r,u,l,a])}},7158:function(e,n,r){r.d(n,{A:function(){return o}});var t=r(4846),s=r(5353);const o=(0,t.f)(s.A,"a-module--a--8fe65")},4383:function(e,n,r){r.d(n,{R:function(){return o}});var t=r(4846),s=r(7158);const o=(0,t.f)(s.A,"a-module--a--08064")},7018:function(e,n,r){r.d(n,{Jx:function(){return l},gN:function(){return u},Jb:function(){return i}});var t=r(4846),s=r(4383),o=r(368),c=r(5893);const i=(0,t.f)("ol","breadcrumb-list-module--breadcrumblist--d89e2"),u=(0,t.f)("li","breadcrumb-list-module--breadcrumb--64b46"),l=e=>(0,c.jsx)(u,{children:(0,c.jsxs)(s.R,{...e,children:[e.children,(0,c.jsx)(o.T,{})]})})},9860:function(e,n,r){r.d(n,{z:function(){return t}});const t=(0,r(4846).f)("button","button-module--button--355dd")},4218:function(e,n,r){r.d(n,{Z:function(){return t}});const t=(0,r(4846).f)("div","card-module--card--729a6")},368:function(e,n,r){r.d(n,{T:function(){return s}});var t=r(5893);const s=()=>(0,t.jsx)("span",{className:"click-trap-module--clickTrap--9e175","aria-hidden":"true"})},1245:function(e,n,r){r.d(n,{s:function(){return t}});const t=(0,r(4846).f)("div","column-module--column--abfac")},3189:function(e,n,r){r.d(n,{h:function(){return t}});const t=(0,r(4846).f)("header","header-module--header--2ed67")},7831:function(e,n,r){r.d(n,{H1:function(){return o},H2:function(){return c},H3:function(){return i},H4:function(){return u},H5:function(){return l},H6:function(){return a}});var t=r(4846),s="heading-module--heading--5dd10";const o=(0,t.f)("h1","heading-module--heading1--30070"),c=(0,t.f)("h2","heading-module--heading2--16827"),i=(0,t.f)("h3",s),u=(0,t.f)("h4",s),l=(0,t.f)("h5",s),a=(0,t.f)("h6",s)},6205:function(e,n,r){r.d(n,{h:function(){return t}});const t=(0,r(4846).f)("hgroup","hgroup-module--hgroup--65970")},3171:function(e,n,r){r.d(n,{I:function(){return t}});const t=(0,r(4846).f)("input","input-module--input--4ad14")},5024:function(e,n,r){r.d(n,{Li:function(){return o}});var t=r(7294),s=r(5893);const o=(0,t.forwardRef)(((e,n)=>(0,s.jsxs)("li",{role:"listitem",className:"li-module--item--43ee1",...e,ref:n,children:[(0,s.jsx)("div",{role:"presentation",className:"li-module--marker--4625a"}),(0,s.jsx)("div",{role:"presentation",className:"li-module--content--6b6c5",children:e.children})]})));o.displayName="Li"},7003:function(e,n,r){r.d(n,{Ol:function(){return c}});var t=r(7294),s=r(4078),o=r(5893);const c=(0,t.forwardRef)(((e,n)=>(0,o.jsx)("ol",{role:"list",className:s.d,...e,ref:n})));c.displayName="Ol"},822:function(e,n,r){r.d(n,{Ul:function(){return c}});var t=r(7294),s=r(4078),o=r(5893);const c=(0,t.forwardRef)(((e,n)=>(0,o.jsx)("ul",{role:"list",className:s.K,...e,ref:n})));c.displayName="Ul"},9422:function(e,n,r){r.d(n,{J:function(){return i}});var t=r(7294),s=r(4218),o=r(6205),c=r(5893);const i=e=>{let{children:n,heading:r,...i}=e;const u=(0,t.useId)();return(0,c.jsx)("nav",{"aria-labelledby":u,...i,children:(0,c.jsxs)(s.Z,{children:[(0,c.jsx)("header",{id:u,children:(0,c.jsx)(o.h,{children:r})}),n]})})}},6332:function(e,n,r){r.d(n,{p:function(){return t}});const t=(0,r(4846).f)("p","subheading-module--p--b5186")},8771:function(e,n,r){r.d(n,{v:function(){return o}});var t=r(4846),s=r(5353);const o=(0,t.f)(s.A,"a-module--a--871de")},8088:function(e,n,r){r.d(n,{Q:function(){return t}});const t=(0,r(4846).f)("div","theme-module--theme--d14f8")},5353:function(e,n,r){r.d(n,{A:function(){return p}});var t=r(7294),s=r(7120),o=r(1883),c=r(5893);const i={threshold:1},u=new Map,l=e=>{let{target:n,isIntersecting:r,intersectionRatio:t}=e;const s=u.get(n);null==s||s(r||t>0)},a=e=>{for(const n of e)l(n)};let d=null;const f=(e,n)=>{const r=(0,t.useRef)(null);return(0,t.useImperativeHandle)(e,(()=>r.current),[r]),(0,t.useEffect)((()=>{const e=(()=>{if(d)return d;if(!window)return null;const{IntersectionObserver:e}=window;return e?(d=new e(a,i),d):null})();if(!e)return;const{current:t}=r;if(!t)return;const s={current:!1},c={current:null},l=e=>{var r;s.current||(e?c.current||(c.current=(0,o.Cw)(n)):(null===(r=c.current)||void 0===r||r.abort(),c.current=null))};return u.set(t,l),e.observe(t),()=>{var n;s.current=!0,null===(n=c.current)||void 0===n||n.abort(),c.current=null,e.unobserve(t),u.delete(l)}}),[n]),r},h=()=>(0,o.K2)("1271460761").site.siteMetadata.siteUrl;var m=r(9071);const x=e=>window.___loader.hovering(e),j=(e=>{const n=(0,t.forwardRef)(((n,r)=>{const s=(e=>{let{href:n,onClick:r}=e;return(0,t.useCallback)((async e=>{null==r||r(e);const{defaultPrevented:t,altKey:s,metaKey:o,shiftKey:c,ctrlKey:i,button:u}=e;t||0===u&&(s||o||c||i||(e.preventDefault(),await(0,m.c)(n)))}),[r,n])})(n);return(0,c.jsx)(e,{...n,onClick:s,ref:r})}));return n.displayName=`Click(${(0,s.f)(e)})`,n})((e=>{const n=(0,t.forwardRef)(((n,r)=>{const{onFocus:s,onMouseEnter:o}=(e=>{let{href:n,onFocus:r,onMouseEnter:s}=e;return{onFocus:(0,t.useCallback)((e=>{x(n),null==r||r(e)}),[r,n]),onMouseEnter:(0,t.useCallback)((e=>{x(n),null==s||s(e)}),[s,n])}})(n);return(0,c.jsx)(e,{...n,onFocus:s,onMouseEnter:o,ref:r})}));return n.displayName=`Hovering(${(0,s.f)(e)})`,n})((e=>{const n=(0,t.forwardRef)(((n,r)=>{const{href:t}=n,s=f(r,t);return(0,c.jsx)(e,{...n,ref:s})}));return n.displayName=`Prefetch(${(0,s.f)(e)})`,n})("a"))),p=(0,t.forwardRef)(((e,n)=>(e=>{let{href:n,target:r,download:t}=e;const s=h();if(!n||r||t)return null;const{origin:o,pathname:c,hash:i,search:u}=new URL(n,s);return o!==s||i?null:`${c}${u}${i}`})(e)?(0,c.jsx)(j,{...e,ref:n}):(0,c.jsx)("a",{...e,ref:n})));p.displayName="A"},7120:function(e,n,r){r.d(n,{f:function(){return t}});const t=e=>{var n;if("string"==typeof e)return e;const r=null!==(n=e.displayName)&&void 0!==n?n:e.name;return r||console.log(e),r}},9071:function(e,n,r){r.d(n,{c:function(){return s}});var t=r(1883);const s=async e=>{if(!document.startViewTransition)return await(0,t.c4)(e);const n={current:null},r=document.startViewTransition((async()=>{const r=n.current,s=(0,t.c4)(e),o=setTimeout((()=>r.skipTransition()),1e4);await s,clearTimeout(o)}));return n.current=r,await r.updateCallbackDone}},7256:function(e,n,r){r.d(n,{E:function(){return t}});const t=(0,r(4846).f)("div","screen-only-module--screen--a22bb")},5821:function(e,n,r){r.d(n,{q:function(){return o}});var t=r(7294),s=r(9071);const o=()=>(0,t.useCallback)((async e=>{const n=e.nativeEvent,r=e.target,t=n.submitter;let o=t.getAttribute("formaction"),c=t.getAttribute("formenctype"),i=t.getAttribute("formmethod"),u=t.getAttribute("formtarget");if(o??=r.getAttribute("action"),c??=r.getAttribute("enctype"),i??=r.method,u??=r.getAttribute("target"),null!==c)return;if("get"!==i)return;if(null!==u)return;e.preventDefault();const l=`${o}?${new URLSearchParams(new FormData(r))}`;await(0,s.c)(l)}),[])},4846:function(e,n,r){r.d(n,{f:function(){return c}});var t=r(7294),s=r(7120),o=r(5893);const c=(e,n)=>{const r=((e,n)=>(0,t.forwardRef)(((r,t)=>{var s;const c=`${null!==(s=r.className)&&void 0!==s?s:""} ${n}`;return(0,o.jsx)(e,{...r,className:c,ref:t})})))(e,n),c=(0,s.f)(e);return r.displayName=`.${n}(${c})`,r}},6262:function(e,n,r){r.d(n,{L:function(){return o}});var t=r(1883),s=r(7294);const o=e=>{const n=(0,t.K2)("1271460761");return(0,s.useMemo)((()=>{const r=n.site.siteMetadata;return String(new URL(e,r.siteUrl))}),[n,e])}},9622:function(e,n,r){r.d(n,{$:function(){return s}});var t=r(1883);const s=()=>(0,t.K2)("3000541721").site.siteMetadata},8462:function(e,n,r){r.r(n),r.d(n,{Head:function(){return O},default:function(){return q}});var t=r(7294),s=r(3476),o=r(6262),c=r(9622);var i=r(1883);const u=()=>{const e=(0,i.K2)("2796747441");return(0,t.useMemo)((()=>e.allLink.nodes.map((e=>e.post))),[e])},l=()=>{const e=(0,i.K2)("2477755614");return(0,t.useMemo)((()=>Object.fromEntries(e.allLink.group.map((e=>{let{category:n,nodes:r}=e;return[n,r.map((e=>e.post))]})))),[e])};var a=r(822),d=r(5024),f=r(7158),h=r(368),m=r(5893);const x=()=>(0,m.jsxs)(a.Ul,{children:[(0,m.jsx)(d.Li,{children:(0,m.jsxs)(f.A,{download:"feed.xml",rel:"alternate",href:"/feed.xml",children:["Subscribe (RSS)",(0,m.jsx)(h.T,{})]})}),(0,m.jsx)(d.Li,{children:(0,m.jsxs)(f.A,{rel:"author",href:"/about/",children:["About the Author",(0,m.jsx)(h.T,{})]})}),(0,m.jsx)(d.Li,{children:(0,m.jsxs)(f.A,{href:"/README",children:["About this Blog",(0,m.jsx)(h.T,{})]})})]});var j=r(3171),p=r(9860);const b=e=>{let{action:n,onSubmit:r}=e;const s=(0,t.useId)();return(0,m.jsx)("form",{rel:"search",action:n,onSubmit:r,children:(0,m.jsxs)("fieldset",{className:"search-form-module--query--650cb",children:[(0,m.jsx)("label",{htmlFor:s,children:"Query"}),(0,m.jsx)(j.I,{id:s,name:"s",type:"search",required:!0}),(0,m.jsx)(p.z,{type:"submit",children:"Search"})]})})};var v=r(4383),g=r(7003);const y=e=>{let{href:n,children:r}=e;return(0,m.jsx)(d.Li,{children:(0,m.jsxs)(v.R,{href:n,children:[r,(0,m.jsx)(h.T,{})]})})},w=e=>{let{posts:n}=e;return n.map((e=>{let{slug:n,title:r}=e;return(0,m.jsx)(y,{href:n,children:r},n)}))},k=e=>{let{posts:n}=e;return n&&n.length>0&&(0,m.jsx)(g.Ol,{reversed:"reversed",start:n.length,children:(0,m.jsx)(w,{posts:n})})};var A=r(285),N=r(4218),$=r(6205),R=r(7831),L=r(8771),S=r(6332),C=r(3189),M=r(7018),T=r(5821),H=r(7256),E=r(6434),_=r(5929),Z=r(7311),K=r(2980),F=r(7585);const I="Posts",U=()=>{const{pathname:e}=(0,s.useLocation)(),n=(0,o.L)(e);return(0,m.jsx)(K.i,{title:I,url:n})},O=()=>{const e=(()=>{const e=(0,c.$)(),n=(0,o.L)("/search"),r=(0,o.L)("/");return(0,t.useMemo)((()=>({"@context":"https://schema.org","@type":"WebSite",name:e.title,description:e.description,url:r,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:`${n}?s={s}`},"query-input":"required name=s"}})),[e,n,r])})(),n=(0,F.Z)(I);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("title",{children:n}),(0,m.jsx)("link",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"}),(0,m.jsx)(U,{}),(0,m.jsx)(Z.h,{srcdoc:e})]})};var q=()=>{const e=u(),{title:n,description:r}=(0,c.$)(),s=(0,T.q)(),o=(0,A.I)(),i=l(),h=(0,t.useId)(),j=(0,t.useId)();return(0,m.jsxs)(E.v,{support:(0,m.jsx)("header",{"aria-describedby":h,children:(0,m.jsxs)(N.Z,{children:[(0,m.jsxs)($.h,{id:h,children:[(0,m.jsx)(R.H2,{children:(0,m.jsx)(L.v,{id:"common",href:"#common",children:n})}),(0,m.jsx)(S.p,{children:r})]}),(0,m.jsx)(x,{})]})}),navigation:(0,m.jsx)(H.E,{children:(0,m.jsx)(_.o,{"aria-describedby":"search",children:(0,m.jsxs)(N.Z,{children:[(0,m.jsx)(C.h,{children:(0,m.jsx)($.h,{children:(0,m.jsx)(R.H2,{children:(0,m.jsx)(L.v,{id:"search",href:"#search",children:"Search"})})})}),(0,m.jsx)(b,{action:o,onSubmit:s})]})})}),breadcrumbs:(0,m.jsx)(M.Jb,{children:(0,m.jsx)(M.gN,{children:(0,m.jsx)("span",{"aria-current":"page",children:"Home"})})}),mainbar:Object.entries(i).map((e=>{let[n,r]=e;return(0,m.jsx)("nav",{"aria-labelledby":n,children:(0,m.jsxs)(N.Z,{children:[(0,m.jsx)("header",{children:(0,m.jsx)($.h,{children:(0,m.jsx)(R.H2,{children:(0,m.jsx)(L.v,{id:n,href:"#"+n,children:n})})})}),(0,m.jsx)(k,{posts:r})]})},n)})),heading:"Posts",children:[(0,m.jsxs)("nav",{"aria-labelledby":j,children:[(0,m.jsx)("span",{id:j,children:"Categories"}),(0,m.jsx)(a.Ul,{children:Object.keys(i).map((e=>(0,m.jsx)(d.Li,{children:(0,m.jsx)(f.A,{href:"#"+e,children:e})},e)))})]}),(0,m.jsx)(k,{posts:e})]})}},3274:function(e,n,r){r.d(n,{x:function(){return s}});const t=function*e(n,r,t){if("string"!=typeof t)if(Array.isArray(t)){let s=0;for(const o of t){for(const t of e(`${n}${s}`,r,o))yield t;++s}}else for(const[s,o]of Object.entries(t)){const t=r?`${r}:${s}`:s,c=r?`${n}:${s}`:s;for(const n of e(c,t,o))yield n}else yield[n,r,t]},s=function*(e){for(const n of t(null,null,e))yield n}},2164:function(e,n,r){r.d(n,{k:function(){return t}});const t=" — "},4078:function(e,n,r){r.d(n,{K:function(){return s},d:function(){return t}});var t="list-module--orderedList--d8f82",s="list-module--unorderedList--1a29f"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-668232b80c9b4fff5af6.js.map