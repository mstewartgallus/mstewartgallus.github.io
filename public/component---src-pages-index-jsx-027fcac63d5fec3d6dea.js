"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[230],{3293:function(e,n,t){var r=t(4149),s=t(5893);n.Z=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("html",{lang:"en"}),(0,s.jsx)("link",{rel:"icon",href:r.Z}),(0,s.jsx)("meta",{name:"color-scheme",content:"dark light"}),(0,s.jsx)("meta",{name:"theme-color",content:"#6000A0"})]})},7311:function(e,n,t){var r=t(1883),s=t(5893);n.Z=e=>{let{srcdoc:n}=e;const t=JSON.stringify(n);return(0,s.jsx)(r.Xf,{type:"application/ld+json",children:t})}},2980:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(3274),s=t(9622),l=t(7294),c=t(4149);var i=e=>{let{description:n,url:t,title:r}=e;const i=(0,s.Z)();return l.useMemo((()=>({og:{site_name:i.title,title:r,image:c.Z,description:null!=n?n:i.description,url:t}})),[i,n,t,r])},a=t(5893);const o=e=>{const n=i(e);return Array.from(function*(){for(const[e,t,s]of(0,r.Z)(n))yield(0,a.jsx)("meta",{property:t,content:s},e)}())};var d=e=>{const{description:n,url:t}=e,r=(0,s.Z)();return(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsx)("link",{rel:"canonical",href:t}),(0,a.jsx)("meta",{name:"description",content:null!=n?n:r.description}),(0,a.jsx)(o,{...e})]})}},7585:function(e,n,t){var r=t(5785),s=t(7294),l=t(1883),c=t(2164),i=t(5893);const a=e=>{const n=(0,l.K2)("3159585216");return(0,s.useMemo)((()=>{const{title:t}=n.site.siteMetadata;return[].concat((0,r.Z)(e),[t]).join(c.k)}),[n,e])};n.Z=e=>{let{children:n}=e;const t=a(s.Children.toArray(n));return(0,i.jsx)("title",{children:t})}},4883:function(e,n,t){t.d(n,{I:function(){return a}});var r=t(5785),s=t(7294),l=t(1883);const c="/search",i=function(e,n){return void 0===n&&(n=[]),n.map((n=>[e,n]))},a=e=>{const{s:n,category:t,tag:a,place:o,person:d}=null!=e?e:{};return(0,s.useMemo)((()=>{const e=[].concat((0,r.Z)(n?["s",n]:[]),(0,r.Z)(i("category",t)),(0,r.Z)(i("tag",a)),(0,r.Z)(i("place",o)),(0,r.Z)(i("person",d))),s=String(new URLSearchParams(e)),u=""===s?c:c+"?"+s;return(0,l.dq)(u)}),[n,t,a,o,d])}},9542:function(e,n,t){t.d(n,{E4:function(){return f},ol:function(){return P},UI:function(){return S},vw:function(){return N},Bi:function(){return s},Rx:function(){return a}});var r=t(1883);const s=()=>(0,r.K2)("614531932").allPost;var l=t(7294);const c=Function("return x => import(x);")(),i=async(e,n)=>{const t=await(async e=>{try{return await e}catch(n){return void console.warn(n)}})(c("/static/pagefind/pagefind.js"));if(t)return await t.search(e,n)},a=(e,n,t,r)=>{(0,l.useEffect)((()=>{if(!e)return;let{s:s,category:l,tag:c,place:a,person:o}=(e=>{const n=new URLSearchParams(e);let t=n.get("s");return""===t&&(t=null),{s:t,category:new Set(n.getAll("category")),tag:new Set(n.getAll("tag")),place:new Set(n.getAll("place")),person:new Set(n.getAll("person"))}})(e);const d={...l.size>0?{category:Array.from(l)}:null,...c.size>0?{tag:Array.from(c)}:null,...a.size>0?{place:Array.from(a)}:null,...o.size>0?{person:Array.from(o)}:null};let u=!1;return(async()=>{const e=await i(s,{filters:d});if(u)return;if(!e)return;const l=e.results.slice(0,n);t(l.map((e=>e.id))),await Promise.all(l.map((async(e,n)=>{const t=await e.data();if(u)return;const{url:s,meta:{title:l}}=t;r(n,s,l)})))})(),()=>u=!0}),[e,n,t,r])};var o=t(5282),d=t(4254),u=t(5893);const h=(0,l.createContext)(),m=()=>{const e=(0,l.useContext)(h);return(0,u.jsx)(d.Li,{children:e})},x=e=>{let{children:n}=e;return(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(m,{}),children:(0,u.jsx)(d.Li,{children:n})})},j=e=>{let{children:n,fallback:t}=e;return(0,u.jsx)(d.Ul,{children:(0,u.jsx)(h.Provider,{value:t,children:n})})},p=e=>{let{loaded:n,url:t,title:r}=e;return n?(0,u.jsx)(d.A,{href:t,children:r}):(0,u.jsx)(o.UX,{})},g=()=>(0,u.jsx)(d.A,{role:"link","aria-disabled":"true",children:"Loading..."}),f=e=>{let{links:n}=e;return(0,u.jsx)(j,{fallback:(0,u.jsx)(g,{}),children:n.map((e=>(0,u.jsx)(x,{children:(0,u.jsx)(p,{...e})},e.id)))})};const b=(e,n)=>(0,u.jsx)("input",{className:"checkbox-module--checkbox--64bf5",ref:n,type:"checkbox",...e}),v=(0,l.forwardRef)(b);const y=(0,l.createContext)(null),C=e=>{let{name:n,children:t,onChange:r}=e;return(0,u.jsx)("fieldset",{className:"select-module--select--e325b",onChange:r,children:(0,u.jsx)(y.Provider,{value:n,children:t})})},I=e=>{let{children:n,onChange:t,selected:r,value:s}=e;const c=(0,l.useId)(),i=(0,l.useContext)(y);return(0,u.jsxs)("div",{className:"select-module--option--26192",children:[(0,u.jsx)(v,{id:c,name:i,value:s,onChange:t,checked:r}),(0,u.jsx)("label",{className:"select-module--optionLabel--3140a",htmlFor:c,children:n})]})};const Z=e=>{let{value:n,onChange:t}=e;const r=(0,l.useId)();return(0,u.jsxs)("div",{className:"search-form-module--query--94c26",children:[(0,u.jsx)("label",{htmlFor:r,children:"Query"}),(0,u.jsx)(d.II,{id:r,name:"s",type:"search",value:n,onChange:t}),(0,u.jsx)(d.zx,{type:"submit",children:"Search"})]})},A=e=>{let{options:n,onChange:t,selected:r}=e;return(0,l.useMemo)((()=>n.map((e=>{const n=null==r?void 0:r.has(e);return{option:e,selected:n,onChange(r){t(r,e,n)}}}))),[n,r,t]).map((e=>{let{option:n,selected:t,onChange:r}=e;return(0,u.jsx)(I,{onChange:r,selected:t,value:n,children:n},n)}))},k=e=>{let{state:n,onChange:t}=e;return(0,l.useMemo)((()=>n.map((e=>{let{selected:n,options:r,legend:s,name:l}=e;return{options:r,name:l,legend:s,selected:n,onChange(e,n,r){t(e,n,r,l)}}}))),[n,t]).map((e=>{let{name:n,options:t,legend:r,selected:s,onChange:l}=e;return(0,u.jsxs)(C,{name:n,children:[(0,u.jsx)("legend",{className:"search-form-module--legend--21e3f",children:r}),(0,u.jsx)(A,{options:t,selected:s,onChange:l})]},n)}))},w={category:"Category",place:"Place",person:"Person",tag:"Tag"},S=e=>{let{action:n,onSubmit:t,tags:r,state:s,set:c}=e;const i=(0,l.useCallback)((e=>c("s",e.target.value)),[c]),a=(0,l.useCallback)(((e,n,t,r)=>{const l=s[r],i=new Set(l);t?i.delete(n):i.add(n),c(r,i)}),[c,s]),o=(e=>{let{category:n,place:t,tag:r,person:s}=e;return{category:n,place:t,person:s,tag:r}})(s),d=Object.entries(o).map((e=>{let[n,t]=e;return{name:n,selected:t,legend:w[n],options:r[n]}}));return(0,u.jsxs)("form",{rel:"search",action:n,onSubmit:t,children:[(0,u.jsx)(Z,{value:s.s,onChange:i}),(0,u.jsx)(k,{state:d,onChange:a})]})};const N=e=>{let{action:n,onSubmit:t}=e;const r=(0,l.useId)();return(0,u.jsx)("form",{rel:"search",action:n,onSubmit:t,children:(0,u.jsxs)("div",{className:"search-form-module--query--910f7",children:[(0,u.jsx)("label",{htmlFor:r,children:"Query"}),(0,u.jsx)(d.II,{id:r,name:"s",type:"search",required:!0}),(0,u.jsx)(d.zx,{type:"submit",children:"Search"})]})})};const P=e=>{let{heading:n,children:t,...r}=e;const s=(0,l.useId)();return(0,u.jsxs)("section",{"aria-describedby":s,role:"search",...r,children:[(0,u.jsx)(o.fX,{children:(0,u.jsx)("header",{children:(0,u.jsx)("hgroup",{id:s,children:n})})}),t]})}},6262:function(e,n,t){var r=t(1883),s=t(7294);n.Z=e=>{const n=(0,r.K2)("1271460761");return s.useMemo((()=>{const t=n.site.siteMetadata;return new URL(e,t.siteUrl).toString()}),[n,e])}},9622:function(e,n,t){var r=t(1883);n.Z=()=>(0,r.K2)("3000541721").site.siteMetadata},4194:function(e,n,t){t.d(n,{q:function(){return l}});var r=t(7294),s=t(1883);const l=()=>r.useCallback((async e=>{var n,t,r,l;const c=e.nativeEvent,i=e.target,a=c.submitter;let o=a.getAttribute("formaction"),d=a.getAttribute("formenctype"),u=a.getAttribute("formmethod"),h=a.getAttribute("formtarget");if(null!==(n=o)&&void 0!==n||(o=i.getAttribute("action")),null!==(t=d)&&void 0!==t||(d=i.getAttribute("enctype")),null!==(r=u)&&void 0!==r||(u=i.method),null!==(l=h)&&void 0!==l||(h=i.getAttribute("target")),null!==d)return;if("get"!==u)return;if(null!==h)return;e.preventDefault();const m=o+"?"+new URLSearchParams(new FormData(i));await(0,s.c4)(m)}),[]);n.Z=l},1677:function(e,n,t){t.r(n),t.d(n,{Head:function(){return z},default:function(){return D}});var r=t(7294),s=t(4254),l=t(5893);const c=()=>(0,l.jsxs)(s.Ul,{children:[(0,l.jsx)(s.Li,{children:(0,l.jsx)(s.A,{rel:"alternate",href:"/feed.xml",children:"Subscribe (RSS)"})}),(0,l.jsx)(s.Li,{children:(0,l.jsx)(s.A,{rel:"author",href:"/about",children:"About the Author"})}),(0,l.jsx)(s.Li,{children:(0,l.jsx)(s.A,{href:"/README",children:"About this Blog"})})]});var i=t(5282);const a=e=>{let{children:n}=e;return(0,l.jsx)("span",{className:"closed-icon-module--closed--1f1dc",children:n})};const o=e=>{let{children:n}=e;return(0,l.jsx)("span",{className:"open-icon-module--open--0c35d",children:n})};const d=e=>{let{icon:n,children:t}=e;return(0,l.jsxs)("span",{className:"panel-module--details--32bb4",children:[(0,l.jsx)("span",{"aria-hidden":"true",children:n}),(0,l.jsx)("span",{children:t})]})},u=e=>{let{open:n}=e;return(0,l.jsx)(d,{icon:n?(0,l.jsx)(o,{}):(0,l.jsx)(a,{}),children:n?"Close":"Open"})},h=(0,r.createContext)(null),m=e=>{let{children:n,value:t}=e;return(0,l.jsx)("div",{children:(0,l.jsx)(h.Provider,{value:t,children:n})})},x=e=>{let{children:n,heading:t,value:c,onClick:a}=e;const{0:o,1:d}=(0,r.useTransition)(),m=(0,r.useCallback)((e=>{e.preventDefault(),d((()=>a(e)))}),[a]),x=(0,r.useId)(),j=(0,r.useContext)(h),p=!(0,i.m8)(),g=x+"-content",f=x+"-title",b=x+"-button",v=j===c,y=p||v;return(0,l.jsxs)(s.Zb,{children:[(0,l.jsx)(s.H2,{children:(0,l.jsxs)("div",{className:"panel-module--insideHeading--afeef",children:[(0,l.jsx)("div",{className:"panel-module--button--1a518",children:(0,l.jsx)(s.zx,{id:b,"aria-controls":g,"aria-expanded":String(v),onClick:m,children:(0,l.jsx)(u,{open:v})})}),(0,l.jsx)("label",{id:f,htmlFor:b,children:t})]})}),(0,l.jsx)("div",{className:"panel-module--wrapper--d176c","aria-hidden":y?null:"true",inert:y?null:"inert",children:(0,l.jsx)("nav",{id:g,"aria-labelledby":f,hidden:y?null:"hidden","data-server":p?"server":null,className:"panel-module--content--7fee6",children:n})})]})},j=e=>{let{href:n,children:t}=e;return(0,l.jsx)(s.Li,{children:(0,l.jsx)(s.A,{href:n,children:t})})},p=e=>{let{children:n}=e;return(0,l.jsx)(s.Ol,{reversed:"reversed",children:n})},g=e=>{let{posts:n}=e;return n.map((e=>{let{slug:n,title:t}=e;return(0,l.jsx)(j,{href:n,children:t},n)}))},f=e=>{let{posts:n}=e;return n&&n.length>0&&(0,l.jsx)(p,{children:(0,l.jsx)(g,{posts:n})})};var b=t(9542);const v=e=>{let{children:n,search:t}=e;return(0,l.jsxs)(l.Fragment,{children:[n,(0,l.jsx)(s.Zb,{children:(0,l.jsx)(b.ol,{heading:(0,l.jsx)(s.H2,{children:"Search"}),children:t})})]})};var y=t(1883);const C=()=>{const e=(0,y.K2)("2796747441");return(0,r.useMemo)((()=>e.allLink.nodes.map((e=>e.post))),[e])};const I=()=>{const e=(0,y.K2)("2477755614");return(0,r.useMemo)((()=>Object.fromEntries(e.allLink.group.map((e=>{let{category:n,nodes:t}=e;return[n,t.map((e=>e.post))]})))),[e])};var Z=t(6262),A=t(9622);const k=()=>{const e=(0,A.Z)(),n=(0,Z.Z)("/search"),t=(0,Z.Z)("/");return(0,r.useMemo)((()=>({"@context":"https://schema.org","@type":"WebSite",name:e.title,description:e.description,url:t,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:n+"?s={s}"},"query-input":"required name=s"}})),[e,n,t])};var w=t(4883),S=t(3293),N=t(7311),P=t(2980),L=t(7585),M=t(4194);const F=(e,n)=>{const{type:t}=n;if("toggle"===t){const{category:t}=n;return e===t?null:t}return e},H=e=>{let{posts:n,onClick:t}=e;return(0,r.useMemo)((()=>Object.entries(n).map((e=>{let[n,r]=e;return[n,{posts:r,onClick(e){t(n,e)}}]}))),[n,t]).map((e=>{let[n,{posts:t,onClick:r}]=e;return(0,l.jsx)(x,{value:n,heading:n,onClick:r,children:(0,l.jsx)(f,{posts:t})},n)}))},B=()=>{const e=I(),{0:n,1:t}=(0,r.useReducer)(F,null),s=(0,r.useCallback)(((e,n)=>{t({type:"toggle",category:e})}),[]);return(0,l.jsx)(m,{value:n,children:(0,l.jsx)(H,{posts:e,onClick:s})})},R=(0,r.memo)(B),U="Table of Contents",z=e=>{let{location:{pathname:n}}=e;const t=(0,Z.Z)(n);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(S.Z,{}),(0,l.jsx)(L.Z,{children:U}),(0,l.jsx)("link",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"}),(0,l.jsx)(P.Z,{title:U,url:t})]})};var D=()=>{const e=C(),{title:n,description:t}=(0,A.Z)(),r=k(),i=(0,M.q)(),a=(0,w.I)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.l_,{children:(0,l.jsx)(s.T3,{sidebar:(0,l.jsx)(v,{search:(0,l.jsx)(b.vw,{action:a,onSubmit:i}),children:(0,l.jsx)(s.Zb,{children:(0,l.jsx)(s.h4,{heading:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.H2,{children:n}),(0,l.jsx)("p",{style:{marginBlock:0},children:t})]}),children:(0,l.jsx)(c,{})})})}),breadcrumbs:(0,l.jsx)(s.Jb,{children:(0,l.jsx)(s.gN,{children:(0,l.jsx)(s.A,{"aria-current":"page",children:"Home"})})}),mainbar:(0,l.jsx)(R,{}),heading:(0,l.jsx)(s.H1,{children:"Posts"}),children:(0,l.jsx)(f,{posts:e})})}),(0,l.jsx)(N.Z,{srcdoc:r})]})}},3274:function(e,n,t){const r=function*e(n,t,r){if("string"!=typeof r)if(Array.isArray(r)){let s=0;for(const l of r){for(const r of e(""+n+s,t,l))yield r;++s}}else for(const[s,l]of Object.entries(r)){const r=t?t+":"+s:s,c=t?n+":"+s:s;for(const n of e(c,r,l))yield n}else yield[n,t,r]};n.Z=function*(e){for(const n of r(null,null,e))yield n}},2164:function(e,n,t){t.d(n,{k:function(){return r}});const r=" — "},4149:function(e,n){n.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-027fcac63d5fec3d6dea.js.map