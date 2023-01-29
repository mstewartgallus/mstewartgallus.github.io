"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[400],{3293:function(e,t,n){var a=n(7294),r=n(6138);const l=a.memo((()=>a.createElement(a.Fragment,null,a.createElement("link",{rel:"icon",href:r.Z}),a.createElement("meta",{name:"color-scheme",content:"light dark"}),a.createElement("meta",{name:"theme-color",content:"#6000A0"}))));t.Z=l},7311:function(e,t,n){var a=n(7294),r=n(1883);t.Z=e=>{let{srcdoc:t}=e;const n=JSON.stringify(t);return a.createElement(r.Xf,{type:"application/ld+json"},n)}},4588:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(4150),l=n(7122),o=n(4472),c=n(1045);var m=e=>{let{children:t}=e;return a.createElement(a.Fragment,null,t)};const i=e=>{let{line:t}=e;return a.Children.map(t.map((e=>a.createElement(a.Fragment,null,e))),((e,t)=>[t>0&&a.createElement(l.Z,null),a.createElement(m,null,e)]))},u=e=>{let{stanza:t}=e;return a.Children.map(t.map((e=>a.createElement(i,{line:e}))),(e=>a.createElement(o.Z,null,e)))};var p=e=>{let{poem:t}=e;return a.Children.map(t.map((e=>a.createElement(u,{stanza:e}))),(e=>a.createElement(c.Z,null,e)))};var s=e=>{let{poem:t,next:n,previous:l,metadata:o}=e;return a.createElement(r.Z,{previous:l,next:n,metadata:o},a.createElement(p,{poem:t}))}},116:function(e,t,n){var a=n(7294),r=n(9622),l=n(6138);t.Z=e=>{var t;let{description:n,url:o,title:c}=e;const m=(0,r.$)();return null!==(t=n)&&void 0!==t||(n=m.description),a.createElement(a.Fragment,null,a.createElement("link",{rel:"canonical",href:o}),a.createElement("meta",{name:"description",content:n}),a.createElement("meta",{name:"og:site_name",content:m.title}),a.createElement("meta",{property:"og:title",content:c}),a.createElement("meta",{property:"og:image",content:l.Z}),a.createElement("meta",{property:"og:url",content:o}),a.createElement("meta",{property:"og:description",content:n}))}},7561:function(e,t,n){var a=n(7294),r=n(7311);const l=e=>{let{title:t,date:n,author:a,category:r,tags:l,people:o,places:c}=e;return{"@context":"https://schema.org","@type":"BlogPosting",headline:t,datePublished:n,author:[{"@type":"Person",name:a.name,url:a.url}],articleSection:r,keywords:l,character:o,contentLocation:c}},o=e=>{let{title:t,category:n,slug:a}=e;return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"/"},{"@type":"ListItem",position:2,name:n,item:"/search/?category="+encodeURIComponent(n)},{"@type":"ListItem",position:3,name:t,item:a}]}};t.Z=e=>a.createElement(a.Fragment,null,a.createElement(r.Z,{srcdoc:o(e)}),a.createElement(r.Z,{srcdoc:l(e)}))},8766:function(e,t,n){var a=n(5785),r=n(7294);t.Z=e=>{let{author:t,date:n,category:l,tags:o,people:c,places:m}=e;return r.createElement(r.Fragment,null,r.createElement("link",{rel:"author",href:t.url}),r.createElement("meta",{name:"author",content:t.name}),r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"og:article:author",content:t.name}),r.createElement("meta",{property:"og:article:published_time",content:n}),r.createElement("meta",{property:"og:article:section",content:l}),r.createElement("meta",{property:"og:profile",content:t.name}),r.createElement("meta",{property:"og:profile:username",content:t.name}),[].concat((0,a.Z)(c),(0,a.Z)(o),(0,a.Z)(m)).map((e=>r.createElement("meta",{key:e,property:"og:article:tag",content:e}))))}},7585:function(e,t,n){var a=n(7294),r=n(9622);t.Z=e=>{let{children:t}=e;const n=(e=>{const t=(0,r.$)().title;return null===e||""===e?t:e+" — "+t})(t);return a.createElement("title",null,n)}},6262:function(e,t,n){n.d(t,{L:function(){return r}});var a=n(1883);const r=e=>{const t=(0,a.K2)("1271460761").site.siteMetadata;return new URL(e,t.siteUrl).toString()}},9622:function(e,t,n){n.d(t,{$:function(){return r}});var a=n(1883);const r=()=>(0,a.K2)("3000541721").site.siteMetadata},4373:function(e,t,n){n.r(t),n.d(t,{Head:function(){return d}});var a=n(7294),r=n(3293),l=n(4588),o=n(116),c=n(7561),m=n(8766),i=n(7585),u=n(6262);const p=e=>{let{content:t,children:n,previous:r,next:o,metadata:c}=e;const m=t.__typename;switch(m){case"MdxContent":return n;case"PoemContent":return a.createElement(l.Z,{previous:r,next:o,metadata:c,poem:t.body});default:throw new Error("unknown type: "+m)}},s={name:"Molossus Spondee",url:"/about/"},d=e=>{let{location:{pathname:t},data:{post:{metadata:n}}}=e;const{description:l,title:c,dateXml:p,category:d,tags:g,places:E,people:h}=n,I=(0,u.L)(t);return a.createElement(a.Fragment,null,a.createElement(r.Z,null),a.createElement(i.Z,null,c),a.createElement(o.Z,{description:l,title:c,url:I}),a.createElement(m.Z,{title:c,date:p,author:s,category:d,tags:g,people:h,places:E}))};t.default=e=>{let{children:t,data:{post:n}}=e;const{previous:r,next:l,content:o,metadata:m}=n,{category:i,dateXml:u,title:d,tags:g,places:E,people:h}=m;return a.createElement(a.Fragment,null,a.createElement(p,{content:o,previous:null==r?void 0:r.metadata,next:null==l?void 0:l.metadata,metadata:m},t),a.createElement(c.Z,{title:d,date:u,author:s,category:i,tags:g,people:h,places:E}))}},6138:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-templates-post-jsx-8f343b1d04c2beb52974.js.map