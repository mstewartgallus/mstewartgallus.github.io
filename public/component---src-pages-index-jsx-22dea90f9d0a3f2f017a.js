"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[230],{3293:function(e,t,n){var r=n(4149),s=n(5893);t.Z=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("html",{lang:"en"}),(0,s.jsx)("link",{rel:"icon",href:r.Z}),(0,s.jsx)("meta",{name:"color-scheme",content:"dark light"}),(0,s.jsx)("meta",{name:"theme-color",content:"#6000A0"})]})},7311:function(e,t,n){var r=n(1883),s=n(5893);t.Z=e=>{let{srcdoc:t}=e;const n=JSON.stringify(t);return(0,s.jsx)(r.Xf,{type:"application/ld+json",children:n})}},2980:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(3274),s=n(9622),i=n(7294),l=n(4149);var c=e=>{let{description:t,url:n,title:r}=e;const c=(0,s.Z)();return i.useMemo((()=>({og:{site_name:c.title,title:r,image:l.Z,description:null!=t?t:c.description,url:n}})),[c,t,n,r])},o=n(5893);const a=e=>{const t=c(e);return Array.from(function*(){for(const[e,n,s]of(0,r.Z)(t))yield(0,o.jsx)("meta",{property:n,content:s},e)}())};var u=e=>{const{description:t,url:n}=e,r=(0,s.Z)();return(0,o.jsxs)(o.Fragment,{children:[n&&(0,o.jsx)("link",{rel:"canonical",href:n}),(0,o.jsx)("meta",{name:"description",content:null!=t?t:r.description}),(0,o.jsx)(a,{...e})]})}},7585:function(e,t,n){var r=n(7294),s=n(9622),i=n(2164),l=n(5893);t.Z=e=>{let{children:t}=e;const n=(0,s.Z)(),c=r.Children.toArray(t);c.push(n.title);const o=c.join(i.Z);return(0,l.jsx)("title",{children:o})}},3078:function(e,t,n){n.d(t,{Wx:function(){return g},ol:function(){return u},UI:function(){return h},Ph:function(){return m},Bi:function(){return s},Rx:function(){return o}});var r=n(1883);const s=()=>(0,r.K2)("3144730248").allPost;var i=n(7294);const l=Function("return x => import(x);")(),c=async(e,t)=>{const n=await(async e=>{try{return await e}catch(t){return void console.warn(t)}})(l("/static/pagefind/pagefind.js"));if(n)return await n.search(e,t)},o=(e,t,n,r)=>{i.useEffect((()=>{if(!e)return;let{s:s,category:i,tag:l,place:o,person:a}=(e=>{const t=new URLSearchParams(e);let n=t.get("s");return""===n&&(n=null),{s:n,category:new Set(t.getAll("category")),tag:new Set(t.getAll("tag")),place:new Set(t.getAll("place")),person:new Set(t.getAll("person"))}})(e);const u={...i.size>0?{category:Array.from(i)}:null,...l.size>0?{tag:Array.from(l)}:null,...o.size>0?{place:Array.from(o)}:null,...a.size>0?{person:Array.from(a)}:null};let d=!1;return(async()=>{const e=await c(s,{filters:u});if(d)return;const i=e.results.slice(0,t);n(i.map((e=>e.id))),await Promise.all(i.map((async(e,t)=>{const n=await e.data();if(d)return;const{url:s,meta:{title:i}}=n;r(t,s,i)})))})(),()=>d=!0}),[e,t,n,r])};var a=n(5893);const u=e=>{let{heading:t,children:n,...r}=e;const s=(0,i.useId)();return(0,a.jsxs)("section",{"aria-describedby":s,role:"search",...r,children:[(0,a.jsx)("header",{className:"sr-only",children:(0,a.jsx)("hgroup",{id:s,children:t})}),n]})};var d=n(4194);const h=()=>{const e=(0,i.useId)(),t=(0,d.q)();return(0,a.jsx)("form",{rel:"search",action:"/search",onSubmit:t,children:(0,a.jsxs)("div",{className:"search-form-module--query--94c26",children:[(0,a.jsx)("label",{htmlFor:e,children:"Query"}),(0,a.jsx)("input",{id:e,name:"s",type:"search",required:!0}),(0,a.jsx)("button",{type:"submit",children:"Search"})]})})};const x=i.createContext(null),m=e=>{let{name:t,children:n,onChange:r}=e;return(0,a.jsx)("fieldset",{className:"select-module--select--e325b",onChange:r,children:(0,a.jsx)(x.Provider,{value:t,children:n})})},g=e=>{let{children:t,onChange:n,selected:r,value:s}=e;const l=i.useId(),c=i.useContext(x);return(0,a.jsxs)("div",{className:"select-module--option--26192",children:[(0,a.jsx)("input",{id:l,type:"checkbox",name:c,value:s,onChange:n,checked:r}),(0,a.jsx)("label",{htmlFor:l,children:t})]})}},6262:function(e,t,n){var r=n(1883),s=n(7294);t.Z=e=>{const t=(0,r.K2)("1271460761");return s.useMemo((()=>{const n=t.site.siteMetadata;return new URL(e,n.siteUrl).toString()}),[t,e])}},9622:function(e,t,n){var r=n(1883);t.Z=()=>(0,r.K2)("3000541721").site.siteMetadata},4194:function(e,t,n){n.d(t,{q:function(){return i}});var r=n(7294),s=n(1883);const i=()=>r.useCallback((async e=>{var t,n,r,i;const l=e.nativeEvent,c=e.target,o=l.submitter;let a=o.getAttribute("formaction"),u=o.getAttribute("formenctype"),d=o.getAttribute("formmethod"),h=o.getAttribute("formtarget");if(null!==(t=a)&&void 0!==t||(a=c.getAttribute("action")),null!==(n=u)&&void 0!==n||(u=c.getAttribute("enctype")),null!==(r=d)&&void 0!==r||(d=c.method),null!==(i=h)&&void 0!==i||(h=c.getAttribute("target")),null!==u)return;if("get"!==d)return;if(null!==h)return;e.preventDefault();const x=a+"?"+new URLSearchParams(new FormData(c));await(0,s.c4)(x)}),[]);t.Z=i},1314:function(e,t,n){n.r(t),n.d(t,{Head:function(){return Z},default:function(){return v}});var r=n(5706),s=n(5893);const i=()=>(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml",children:"Subscribe"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.A,{rel:"author",href:"/about",children:"About the Author"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.A,{href:"/README",children:"About this Blog"})})]});const l=e=>{let{posts:t}=e;return t.map((e=>{let{slug:t,title:n}=e;return(0,s.jsx)("li",{children:(0,s.jsx)(r.A,{href:t,children:n})},t)}))},c=e=>{let{posts:t}=e;return t&&t.length>0&&(0,s.jsx)("ol",{reversed:!0,children:(0,s.jsx)(l,{posts:t})})};var o=n(1883),a=n(7294);const u=()=>{const e=(0,o.K2)("408287894");return a.useMemo((()=>new Map(e.allLink.group.map((e=>{let{category:t,nodes:n}=e;return[t,n.map((e=>e.post))]})))),[e])};var d=n(6262),h=n(9622);const x=()=>{const e=(0,h.Z)(),t=(0,d.Z)("/search"),n=(0,d.Z)("/");return(0,a.useMemo)((()=>({"@context":"https://schema.org","@type":"WebSite",name:e.title,description:e.description,url:n,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:t+"?s={s}"},"query-input":"required name=s"}})),[e,t,n])};var m=n(3078),g=n(3293),j=n(7311),f=n(2980),p=n(7585);const y="Table of Contents",b=()=>{const{title:e,description:t}=(0,h.Z)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Zb,{children:(0,s.jsx)(r.h4,{heading:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:e}),(0,s.jsx)("p",{style:{marginBlock:0},children:t})]}),children:(0,s.jsx)(i,{})})}),(0,s.jsx)(r.Zb,{children:(0,s.jsx)(m.ol,{heading:(0,s.jsx)("h2",{children:"Search"}),children:(0,s.jsx)(m.UI,{})})}),(0,s.jsx)(r.Zb,{children:(0,s.jsx)(r.JL,{heading:(0,s.jsx)("h2",{children:"Breadcrumbs"}),children:(0,s.jsx)(r.Jb,{children:(0,s.jsx)(r.gN,{children:(0,s.jsx)(r.A,{role:"link","aria-disabled":"true","aria-current":"page",children:"Home"})})})})})]})},I=()=>{const e=x();return(0,s.jsx)(j.Z,{srcdoc:e})},Z=e=>{let{location:{pathname:t}}=e;const n=(0,d.Z)(t);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.Z,{}),(0,s.jsx)(p.Z,{children:y}),(0,s.jsx)("link",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"}),(0,s.jsx)(f.Z,{title:y,url:n})]})};var v=()=>{const e=u();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.T3,{sidebar:(0,s.jsx)(b,{}),children:Array.from(e.entries()).map((e=>{let[t,n]=e;return(0,s.jsx)(r.Zb,{children:t?(0,s.jsx)(r.$0,{heading:(0,s.jsx)("h2",{children:t}),children:(0,s.jsx)(c,{posts:n})}):(0,s.jsx)(r.or,{heading:(0,s.jsx)("h1",{children:"Posts"}),children:(0,s.jsx)(c,{posts:n})})},null!=t?t:"main")}))}),(0,s.jsx)(I,{})]})}},3274:function(e,t,n){const r=function*e(t,n,r){if("string"!=typeof r)if(Array.isArray(r)){let s=0;for(const i of r){for(const r of e(""+t+s,n,i))yield r;++s}}else for(const[s,i]of Object.entries(r)){const r=n?n+":"+s:s,l=n?t+":"+s:s;for(const t of e(l,r,i))yield t}else yield[t,n,r]};t.Z=function*(e){for(const t of r(null,null,e))yield t}},2164:function(e,t,n){n.d(t,{k:function(){return r}});const r=" — ";t.Z=r},4149:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-22dea90f9d0a3f2f017a.js.map