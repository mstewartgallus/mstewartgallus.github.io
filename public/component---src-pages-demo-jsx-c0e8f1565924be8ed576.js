"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[690],{3293:function(e,n,t){var r=t(4149),s=t(5893);n.Z=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("html",{lang:"en"}),(0,s.jsx)("link",{rel:"icon",href:r.Z}),(0,s.jsx)("meta",{name:"color-scheme",content:"dark light"}),(0,s.jsx)("meta",{name:"theme-color",content:"#6000A0"})]})},7311:function(e,n,t){var r=t(1883),s=t(5893);n.Z=e=>{let{srcdoc:n}=e;const t=JSON.stringify(n);return(0,s.jsx)(r.Xf,{type:"application/ld+json",children:t})}},2980:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(3274),s=t(9622),l=t(7294),i=t(4149);var a=e=>{let{description:n,url:t,title:r}=e;const a=(0,s.Z)();return l.useMemo((()=>({og:{site_name:a.title,title:r,image:i.Z,description:null!=n?n:a.description,url:t}})),[a,n,t,r])},c=t(5893);const o=e=>{const n=a(e);return Array.from(function*(){for(const[e,t,s]of(0,r.Z)(n))yield(0,c.jsx)("meta",{property:t,content:s},e)}())};var d=e=>{const{description:n,url:t}=e,r=(0,s.Z)();return(0,c.jsxs)(c.Fragment,{children:[t&&(0,c.jsx)("link",{rel:"canonical",href:t}),(0,c.jsx)("meta",{name:"description",content:null!=n?n:r.description}),(0,c.jsx)(o,{...e})]})}},7585:function(e,n,t){var r=t(7294),s=t(9622),l=t(2164),i=t(5893);n.Z=e=>{let{children:n}=e;const t=(0,s.Z)(),a=r.Children.toArray(n);a.push(t.title);const c=a.join(l.Z);return(0,i.jsx)("title",{children:c})}},1943:function(e,n,t){t.d(n,{jL:function(){return l},p_:function(){return a},NO:function(){return d},jG:function(){return x}});var r=t(3466),s=t(5893);const l=()=>(0,s.jsxs)(r.Ul,{children:[(0,s.jsx)(r.Li,{children:(0,s.jsx)(r.A,{rel:"alternate",href:"/feed.xml",children:"Subscribe (RSS)"})}),(0,s.jsx)(r.Li,{children:(0,s.jsx)(r.A,{rel:"author",href:"/about",children:"About the Author"})}),(0,s.jsx)(r.Li,{children:(0,s.jsx)(r.A,{href:"/README",children:"About this Blog"})})]});const i=e=>{let{posts:n}=e;return n.map((e=>{let{slug:n,title:t}=e;return(0,s.jsx)(r.Li,{children:(0,s.jsx)(r.A,{href:n,children:t})},n)}))},a=e=>{let{posts:n}=e;return n&&n.length>0&&(0,s.jsx)(r.Ol,{reversed:"reversed",children:(0,s.jsx)(i,{posts:n})})};var c=t(1883),o=t(7294);const d=()=>{const e=(0,c.K2)("408287894");return o.useMemo((()=>new Map(e.allLink.group.map((e=>{let{category:n,nodes:t}=e;return[n,t.map((e=>e.post))]})))),[e])};var u=t(6262),h=t(9622);const x=()=>{const e=(0,h.Z)(),n=(0,u.Z)("/search"),t=(0,u.Z)("/");return(0,o.useMemo)((()=>({"@context":"https://schema.org","@type":"WebSite",name:e.title,description:e.description,url:t,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:n+"?s={s}"},"query-input":"required name=s"}})),[e,n,t])}},4883:function(e,n,t){t.d(n,{I:function(){return c}});var r=t(5785),s=t(7294),l=t(1883);const i="/search",a=function(e,n){return void 0===n&&(n=[]),n.map((n=>[e,n]))},c=e=>{const{s:n,category:t,tag:c,place:o,person:d}=null!=e?e:{};return(0,s.useMemo)((()=>{const e=[].concat((0,r.Z)(n?["s",n]:[]),(0,r.Z)(a("category",t)),(0,r.Z)(a("tag",c)),(0,r.Z)(a("place",o)),(0,r.Z)(a("person",d))),s=String(new URLSearchParams(e)),u=""===s?i:i+"?"+s;return(0,l.dq)(u)}),[n,t,c,o,d])}},7788:function(e,n,t){t.d(n,{E4:function(){return b},ol:function(){return S},UI:function(){return w},vw:function(){return C},Bi:function(){return s},Rx:function(){return c}});var r=t(1883);const s=()=>(0,r.K2)("3144730248").allPost;var l=t(7294);const i=Function("return x => import(x);")(),a=async(e,n)=>{const t=await(async e=>{try{return await e}catch(n){return void console.warn(n)}})(i("/static/pagefind/pagefind.js"));if(t)return await t.search(e,n)},c=(e,n,t,r)=>{(0,l.useEffect)((()=>{if(!e)return;let{s:s,category:l,tag:i,place:c,person:o}=(e=>{const n=new URLSearchParams(e);let t=n.get("s");return""===t&&(t=null),{s:t,category:new Set(n.getAll("category")),tag:new Set(n.getAll("tag")),place:new Set(n.getAll("place")),person:new Set(n.getAll("person"))}})(e);const d={...l.size>0?{category:Array.from(l)}:null,...i.size>0?{tag:Array.from(i)}:null,...c.size>0?{place:Array.from(c)}:null,...o.size>0?{person:Array.from(o)}:null};let u=!1;return(async()=>{const e=await a(s,{filters:d});if(u)return;if(!e)return;const l=e.results.slice(0,n);t(l.map((e=>e.id))),await Promise.all(l.map((async(e,n)=>{const t=await e.data();if(u)return;const{url:s,meta:{title:l}}=t;r(n,s,l)})))})(),()=>u=!0}),[e,n,t,r])};const o=new Promise((()=>{})),d=(0,l.lazy)((()=>o));var u=t(3466),h=t(5893);const x=(0,l.createContext)(),j=()=>{const e=(0,l.useContext)(x);return(0,h.jsx)(u.Li,{children:e})},g=e=>{let{children:n}=e;return(0,h.jsx)(l.Suspense,{fallback:(0,h.jsx)(j,{}),children:(0,h.jsx)(u.Li,{children:n})})},p=e=>{let{children:n,fallback:t}=e;return(0,h.jsx)(u.Ul,{children:(0,h.jsx)(x.Provider,{value:t,children:n})})},m=e=>{let{loaded:n,url:t,title:r}=e;return n?(0,h.jsx)(u.A,{href:t,children:r}):(0,h.jsx)(d,{})},f=()=>(0,h.jsx)(u.A,{role:"link","aria-disabled":"true",children:"Loading..."}),b=e=>{let{links:n}=e;return(0,h.jsx)(p,{fallback:(0,h.jsx)(f,{}),children:n.map((e=>(0,h.jsx)(g,{children:(0,h.jsx)(m,{...e})},e.id)))})};const y=l.createContext(null),v=e=>{let{name:n,children:t,onChange:r}=e;return(0,h.jsx)("fieldset",{className:"select-module--select--e325b",onChange:r,children:(0,h.jsx)(y.Provider,{value:n,children:t})})},I=e=>{let{children:n,onChange:t,selected:r,value:s}=e;const i=l.useId(),a=l.useContext(y);return(0,h.jsxs)("div",{className:"select-module--option--26192",children:[(0,h.jsx)("input",{id:i,type:"checkbox",name:a,value:s,onChange:t,checked:r}),(0,h.jsx)("label",{htmlFor:i,children:n})]})};const Z=e=>{let{value:n,onChange:t}=e;const r=(0,l.useId)();return(0,h.jsxs)("div",{className:"search-form-module--query--94c26",children:[(0,h.jsx)("label",{htmlFor:r,children:"Query"}),(0,h.jsx)(u.II,{id:r,name:"s",type:"search",value:n,onChange:t}),(0,h.jsx)(u.zx,{type:"submit",children:"Search"})]})},A=e=>{let{options:n,onChange:t,selected:r}=e;return n.map((e=>(0,h.jsx)(I,{onChange:t,selected:null==r?void 0:r.has(e),value:e,children:e},e)))},w=e=>{let{action:n,onSubmit:t,tags:r,state:s,set:i}=e;const a=(0,l.useCallback)((e=>i("s",e.target.value)),[i]),c=(0,l.useCallback)((e=>{const{target:{checked:n,name:t,value:r}}=e,l=new Set(s[t]);n?l.add(r):l.delete(r),i(t,l)}),[i,s]);return(0,h.jsxs)("form",{rel:"search",action:n,onSubmit:t,children:[(0,h.jsx)(Z,{value:s.s,onChange:a}),(0,h.jsxs)(v,{name:"category",children:[(0,h.jsx)("legend",{children:"Category"}),(0,h.jsx)(A,{options:r.category,selected:s.category,onChange:c})]}),(0,h.jsxs)(v,{name:"place",children:[(0,h.jsx)("legend",{children:"Place"}),(0,h.jsx)(A,{options:r.place,selected:s.place,onChange:c})]}),(0,h.jsxs)(v,{name:"person",children:[(0,h.jsx)("legend",{children:"People"}),(0,h.jsx)(A,{options:r.people,selected:s.person,onChange:c})]}),(0,h.jsxs)(v,{name:"tag",children:[(0,h.jsx)("legend",{children:"Tags"}),(0,h.jsx)(A,{options:r.tags,selected:s.tag,onChange:c})]})]})};const C=e=>{let{action:n,onSubmit:t}=e;const r=(0,l.useId)();return(0,h.jsx)("form",{rel:"search",action:n,onSubmit:t,children:(0,h.jsxs)("div",{className:"search-form-module--query--910f7",children:[(0,h.jsx)("label",{htmlFor:r,children:"Query"}),(0,h.jsx)(u.II,{id:r,name:"s",type:"search",required:!0}),(0,h.jsx)(u.zx,{type:"submit",children:"Search"})]})})};const S=e=>{let{heading:n,children:t,...r}=e;const s=(0,l.useId)();return(0,h.jsxs)("section",{"aria-describedby":s,role:"search",...r,children:[(0,h.jsx)("header",{className:"sr-only",children:(0,h.jsx)("hgroup",{id:s,children:n})}),t]})}},6262:function(e,n,t){var r=t(1883),s=t(7294);n.Z=e=>{const n=(0,r.K2)("1271460761");return s.useMemo((()=>{const t=n.site.siteMetadata;return new URL(e,t.siteUrl).toString()}),[n,e])}},9622:function(e,n,t){var r=t(1883);n.Z=()=>(0,r.K2)("3000541721").site.siteMetadata},4194:function(e,n,t){t.d(n,{q:function(){return l}});var r=t(7294),s=t(1883);const l=()=>r.useCallback((async e=>{var n,t,r,l;const i=e.nativeEvent,a=e.target,c=i.submitter;let o=c.getAttribute("formaction"),d=c.getAttribute("formenctype"),u=c.getAttribute("formmethod"),h=c.getAttribute("formtarget");if(null!==(n=o)&&void 0!==n||(o=a.getAttribute("action")),null!==(t=d)&&void 0!==t||(d=a.getAttribute("enctype")),null!==(r=u)&&void 0!==r||(u=a.method),null!==(l=h)&&void 0!==l||(h=a.getAttribute("target")),null!==d)return;if("get"!==u)return;if(null!==h)return;e.preventDefault();const x=o+"?"+new URLSearchParams(new FormData(a));await(0,s.c4)(x)}),[]);n.Z=l},3799:function(e,n,t){t.r(n),t.d(n,{Head:function(){return b}});var r=t(7294),s=t(1943),l=t(4883),i=t(7788),a=t(3466),c=t(3293),o=t(7311),d=t(2980),u=t(7585),h=t(6262),x=t(9622),j=t(4194),g=t(5893);const p=e=>{let{title:n,description:t,action:r,onSubmit:l}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.Zb,{children:(0,g.jsx)(a.h4,{heading:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{children:n}),(0,g.jsx)("p",{style:{marginBlock:0},children:t})]}),children:(0,g.jsx)(s.jL,{})})}),(0,g.jsx)(a.Zb,{children:(0,g.jsx)(i.ol,{heading:(0,g.jsx)("h2",{children:"Search"}),children:(0,g.jsx)(i.vw,{action:r,onSubmit:l})})}),(0,g.jsx)(a.Zb,{children:(0,g.jsx)(a.JL,{heading:(0,g.jsx)("h2",{children:"Breadcrumbs"}),children:(0,g.jsx)(a.Jb,{children:(0,g.jsx)(a.gN,{children:(0,g.jsx)(a.A,{role:"link","aria-disabled":"true","aria-current":"page",children:"Home"})})})})})]})},m=e=>{let{children:n,heading:t}=e;const s=(0,r.useId)(),l=(0,r.useId)(),i=(0,r.useId)(),a=(0,r.useId)(),{0:c,1:o}=(0,r.useState)(!1),d=(0,r.useCallback)((e=>{e.preventDefault(),o((e=>!e))}),[]);return(0,g.jsxs)("article",{"aria-labelledby":i,children:[(0,g.jsx)("span",{role:"presentation","aria-owns":i}),(0,g.jsx)("span",{role:"presentation","aria-owns":a}),(0,g.jsxs)("details",{id:s,onToggle:d,open:c?"open":null,children:[(0,g.jsxs)("summary",{style:{display:"block"},"aria-labelledby":l,"aria-controls":a,"aria-expanded":String(c),children:[(0,g.jsx)("span",{role:"presentation","aria-owns":l}),(0,g.jsxs)("h2",{id:i,"aria-labelledby":l,children:[(0,g.jsx)("span",{role:"presentation","aria-owns":s}),(0,g.jsx)("span",{role:"presentation",id:l,children:t})]})]}),(0,g.jsx)("div",{role:"presentation",id:a,children:n})]})]})},f="Table of Contents",b=e=>{let{location:{pathname:n}}=e;const t=(0,h.Z)(n);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.Z,{}),(0,g.jsx)(u.Z,{children:f}),(0,g.jsx)("link",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"}),(0,g.jsx)(d.Z,{title:f,url:t})]})};n.default=()=>{const e=(0,s.NO)(),{title:n,description:t}=(0,x.Z)(),r=(0,s.jG)(),i=(0,j.q)(),c=(0,l.I)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.T3,{sidebar:(0,g.jsx)(p,{title:n,description:t,action:c,onSubmit:i}),children:Array.from(e.entries()).map((e=>{let[n,t]=e;return(0,g.jsx)(a.Zb,{children:n?(0,g.jsx)(m,{heading:n,children:(0,g.jsx)(s.p_,{posts:t})}):(0,g.jsx)(a.or,{heading:(0,g.jsx)(a.H1,{children:"Posts"}),children:(0,g.jsx)(s.p_,{posts:t})})},null!=n?n:"main")}))}),(0,g.jsx)(o.Z,{srcdoc:r})]})}},3274:function(e,n,t){const r=function*e(n,t,r){if("string"!=typeof r)if(Array.isArray(r)){let s=0;for(const l of r){for(const r of e(""+n+s,t,l))yield r;++s}}else for(const[s,l]of Object.entries(r)){const r=t?t+":"+s:s,i=t?n+":"+s:s;for(const n of e(i,r,l))yield n}else yield[n,t,r]};n.Z=function*(e){for(const n of r(null,null,e))yield n}},2164:function(e,n,t){t.d(n,{k:function(){return r}});const r=" — ";n.Z=r},4149:function(e,n){n.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-demo-jsx-c0e8f1565924be8ed576.js.map