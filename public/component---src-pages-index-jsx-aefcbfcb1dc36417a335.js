"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[230],{3293:function(e,t,n){var r=n(7294),l=n(6138);const a=r.memo((()=>r.createElement(r.Fragment,null,r.createElement("link",{rel:"icon",href:l.Z}),r.createElement("meta",{name:"color-scheme",content:"light dark"}),r.createElement("meta",{name:"theme-color",content:"#6000A0"}))));t.Z=a},7311:function(e,t,n){var r=n(7294),l=n(1883);t.Z=e=>{let{srcdoc:t}=e;const n=JSON.stringify(t);return r.createElement(l.Xf,{type:"application/ld+json"},n)}},116:function(e,t,n){var r=n(7294),l=n(9622),a=n(6138);const c="Molly Stewart-Gallus",o="/about";t.Z=e=>{let{url:t,title:n}=e;const i=(0,l.$)();return r.createElement(r.Fragment,null,r.createElement("link",{rel:"canonical",href:t}),r.createElement("meta",{name:"description",content:i.description}),r.createElement("meta",{name:"og:site_name",content:i.title}),r.createElement("meta",{property:"og:title",content:n}),r.createElement("meta",{property:"og:image",content:a.Z}),r.createElement("meta",{property:"og:url",content:t}),r.createElement("meta",{property:"og:description",content:i.description}),r.createElement("link",{rel:"author",href:o}),r.createElement("meta",{name:"author",content:c}),r.createElement("meta",{property:"og:profile",content:c}),r.createElement("meta",{property:"og:profile:username",content:c}))}},7585:function(e,t,n){var r=n(7294),l=n(9622);t.Z=e=>{let{title:t}=e;const n=(e=>{const t=(0,l.$)().title;return null===e||""===e?t:e+" — "+t})(t);return r.createElement("title",null,n)}},6262:function(e,t,n){n.d(t,{L:function(){return l}});var r=n(1883);const l=e=>{const t=(0,r.K2)("1271460761").site.siteMetadata;return new URL(e,t.siteUrl).toString()}},9622:function(e,t,n){n.d(t,{$:function(){return l}});var r=n(1883);const l=()=>(0,r.K2)("3000541721").site.siteMetadata},4194:function(e,t,n){n.d(t,{q:function(){return a}});var r=n(7294),l=n(1883);const a=()=>r.useCallback((async e=>{var t,n,r,a;const c=e.nativeEvent,o=e.target,i=c.submitter;let m=i.getAttribute("formaction"),u=i.getAttribute("formenctype"),s=i.getAttribute("formmethod"),d=i.getAttribute("formtarget");if(null!==(t=m)&&void 0!==t||(m=o.getAttribute("action")),null!==(n=u)&&void 0!==n||(u=o.getAttribute("enctype")),null!==(r=s)&&void 0!==r||(s=o.method),null!==(a=d)&&void 0!==a||(d=o.getAttribute("target")),null!==u)return;if("get"!==s)return;if(null!==d)return;e.preventDefault();const p=m+"?"+new URLSearchParams(new FormData(o));await(0,l.c4)(p)}),[])},6819:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return v}});var r=n(7294),l=n(1883),a=n(9622);var c=()=>{const e=r.useId(),{title:t,description:n}=(0,a.$)();return r.createElement("header",{className:"banner-module--banner--89e9b","aria-describedby":e},r.createElement("hgroup",null,r.createElement("h2",{id:e},t),r.createElement("p",null,n)),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"},"Subscribe")),r.createElement("li",null,r.createElement(l.rU,{to:"/about"},"About the Author"))))},o=n(5238),i=n(3293),m=n(7311),u=n(8642),s=n(8660);var d=()=>{const e=(0,l.K2)("3841108931").allPost.nodes.map((e=>e.metadata));return e&&e.length>0&&r.createElement("ol",{reversed:!0},e.map((e=>{let{slug:t,title:n}=e;return r.createElement("li",{key:t},r.createElement(l.rU,{to:t},n))})))},p=n(4194);var E=()=>{const e=r.useId(),t=(0,p.q)(),n=e+"-title",l=e+"-input";return r.createElement("form",{className:"search-module--search--ed73a","aria-describedby":n,role:"search",rel:"search",action:"/search",onSubmit:t},r.createElement("header",{className:"sr-only"},r.createElement("hgroup",null,r.createElement("h2",{id:n},"Search"))),r.createElement("div",{className:"search-module--query--42c00"},r.createElement("label",{htmlFor:l},"Query"),r.createElement("input",{id:l,name:"s",type:"search",required:!0}),r.createElement("button",{type:"submit"},"Search")))},g=n(116),h=n(3615),b=n(7585),I=n(6262);const f="Table of Contents",y=e=>{let{location:{pathname:t}}=e;const n=(0,I.L)(t);return r.createElement(r.Fragment,null,r.createElement(i.Z,null),r.createElement(b.Z,{title:f}),r.createElement("link",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"}),r.createElement(g.Z,{title:f,url:n}))};var v=e=>{const t=(()=>{const e=(0,a.$)(),t=(0,I.L)("/search"),n=(0,I.L)("/");return{"@context":"https://schema.org","@type":"WebSite",name:e.title,description:e.description,url:n,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:t+"?s={s}"},"query-input":"required name=s"}}})();return r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement(u.Z,{title:"Posts"},r.createElement(d,null)),r.createElement(h.Z,null,r.createElement(c,null),r.createElement(E,null),r.createElement(o.Z,null,r.createElement("li",{"aria-current":"page"},"Home")))),r.createElement(m.Z,{srcdoc:t}))}},6138:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-aefcbfcb1dc36417a335.js.map