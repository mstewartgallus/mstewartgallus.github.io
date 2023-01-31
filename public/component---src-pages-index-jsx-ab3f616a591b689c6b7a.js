"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[230],{5238:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);var l=e=>{let{children:t}=e;const n=r.useId();return r.createElement("nav",{className:"breadcrumbs-module--breadcrumbs--e2995","aria-labelledby":n},r.createElement("header",{className:"sr-only"},r.createElement("hgroup",null,r.createElement("h2",{id:n},"Breadcrumbs"))),r.createElement("ol",{className:"breadcrumbs-module--breadcrumb--6b8cf"},t))}},3293:function(e,t,n){var r=n(7294),l=n(6138);t.Z=()=>r.createElement(r.Fragment,null,r.createElement("link",{rel:"icon",href:l.Z}),r.createElement("meta",{name:"color-scheme",content:"light dark"}),r.createElement("meta",{name:"theme-color",content:"#6000A0"}))},7311:function(e,t,n){var r=n(7294),l=n(1883);t.Z=e=>{let{srcdoc:t}=e;const n=JSON.stringify(t);return r.createElement(l.Xf,{type:"application/ld+json"},n)}},2843:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294);const l=e=>{let{notice:t}=e;return t.map((e=>r.createElement("dd",{key:e},e)))};var a=e=>{let{notice:t}=e;return t&&t.length>0&&r.createElement("dl",null,r.createElement("div",null,r.createElement("dt",null,"Notice"),r.createElement(l,{notice:t})))};var c=e=>{let{children:t,title:n,subtitle:l,notice:c}=e;const i=r.useId();return r.createElement("main",{"data-pagefind-body":!0,"aria-describedby":i},r.createElement("header",null,r.createElement("hgroup",null,r.createElement("h1",{id:i},n),l&&r.createElement("p",null,l)),r.createElement(a,{notice:c})),t)}},8660:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);var l=e=>{let{children:t}=e;return r.createElement("div",{className:"page-module--page--acc67"},t)}},116:function(e,t,n){var r=n(7294),l=n(9622),a=n(6138);t.Z=e=>{var t;let{description:n,url:c,title:i}=e;const o=(0,l.$)();return null!==(t=n)&&void 0!==t||(n=o.description),r.createElement(r.Fragment,null,r.createElement("link",{rel:"canonical",href:c}),r.createElement("meta",{name:"description",content:n}),r.createElement("meta",{name:"og:site_name",content:o.title}),r.createElement("meta",{property:"og:title",content:i}),r.createElement("meta",{property:"og:image",content:a.Z}),r.createElement("meta",{property:"og:url",content:c}),r.createElement("meta",{property:"og:description",content:n}))}},3615:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);var l=e=>{let{children:t}=e;return r.createElement("div",{className:"sidebar-module--sidebar--ac64c"},t)}},7585:function(e,t,n){var r=n(7294),l=n(9622),a=n(2164);t.Z=e=>{let{children:t}=e;const n=(0,l.$)(),c=r.Children.toArray(t);c.push(n.title);const i=c.join(a.Z);return r.createElement("title",null,i)}},6262:function(e,t,n){n.d(t,{L:function(){return l}});var r=n(1883);const l=e=>{const t=(0,r.K2)("1271460761").site.siteMetadata;return new URL(e,t.siteUrl).toString()}},9622:function(e,t,n){n.d(t,{$:function(){return l}});var r=n(1883);const l=()=>(0,r.K2)("3000541721").site.siteMetadata},4194:function(e,t,n){n.d(t,{q:function(){return a}});var r=n(7294),l=n(1883);const a=()=>r.useCallback((async e=>{var t,n,r,a;const c=e.nativeEvent,i=e.target,o=c.submitter;let u=o.getAttribute("formaction"),m=o.getAttribute("formenctype"),s=o.getAttribute("formmethod"),d=o.getAttribute("formtarget");if(null!==(t=u)&&void 0!==t||(u=i.getAttribute("action")),null!==(n=m)&&void 0!==n||(m=i.getAttribute("enctype")),null!==(r=s)&&void 0!==r||(s=i.method),null!==(a=d)&&void 0!==a||(d=i.getAttribute("target")),null!==m)return;if("get"!==s)return;if(null!==d)return;e.preventDefault();const E=u+"?"+new URLSearchParams(new FormData(i));await(0,l.c4)(E)}),[])},6819:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return Z}});var r=n(7294),l=n(1883),a=n(9622);var c=()=>{const e=r.useId(),{title:t,description:n}=(0,a.$)();return r.createElement("header",{className:"banner-module--banner--89e9b","aria-describedby":e},r.createElement("hgroup",null,r.createElement("h2",{id:e},t),r.createElement("p",null,n)),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"},"Subscribe")),r.createElement("li",null,r.createElement(l.rU,{to:"/about"},"About the Author"))))},i=n(5238),o=n(3293),u=n(7311),m=n(2843),s=n(8660);const d=e=>{let{posts:t}=e;return t.map((e=>{let{slug:t,title:n}=e;return r.createElement("li",{key:t},r.createElement(l.rU,{to:t},n))}))};var E=e=>{let{posts:t}=e;return t&&t.length>0&&r.createElement("ol",{reversed:!0},r.createElement(d,{posts:t}))},p=n(4194);var b=()=>{const e=r.useId(),t=(0,p.q)(),n=e+"-title",l=e+"-input";return r.createElement("form",{className:"search-module--search--ed73a","aria-describedby":n,role:"search",rel:"search",action:"/search",onSubmit:t},r.createElement("header",{className:"sr-only"},r.createElement("hgroup",null,r.createElement("h2",{id:n},"Search"))),r.createElement("div",{className:"search-module--query--42c00"},r.createElement("label",{htmlFor:l},"Query"),r.createElement("input",{id:l,name:"s",type:"search",required:!0}),r.createElement("button",{type:"submit"},"Search")))},g=n(116),h=n(3615),f=n(7585),v=n(6262);const I="Table of Contents",y=e=>{let{location:{pathname:t}}=e;const n=(0,v.L)(t);return r.createElement(r.Fragment,null,r.createElement(o.Z,null),r.createElement(f.Z,null,I),r.createElement("link",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"}),r.createElement(g.Z,{title:I,url:n}))};var Z=e=>{const t=(()=>{const e=(0,a.$)(),t=(0,v.L)("/search"),n=(0,v.L)("/");return{"@context":"https://schema.org","@type":"WebSite",name:e.title,description:e.description,url:n,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:t+"?s={s}"},"query-input":"required name=s"}}})(),n=(()=>{const e=(0,l.K2)("779272823").allLink.group.map((e=>{let{label:t,nodes:n}=e;return[t,n.map((e=>e.post.metadata))]}));return Object.fromEntries(e)})().ALL;return r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement(m.Z,{title:"Posts"},r.createElement(E,{posts:n})),r.createElement(h.Z,null,r.createElement(c,null),r.createElement(b,null),r.createElement(i.Z,null,r.createElement("li",{"aria-current":"page"},"Home")))),r.createElement(u.Z,{srcdoc:t}))}},2164:function(e,t,n){n.d(t,{k:function(){return r}});const r=" — ";t.Z=r},6138:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-ab3f616a591b689c6b7a.js.map