"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[982],{3493:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h},default:function(){return I}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({ul:"ul",li:"li",p:"p"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"A lamp hanging over head"),"\n",l.createElement(t.li,null,"The overcast sky outside"),"\n",l.createElement(t.li,null,"The felt cap across the desk"),"\n",l.createElement(t.li,null,"A man in the seat aside across from me"),"\n",l.createElement(t.li,null,"The clock 9:19 an hour behind"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Paper scrunching, crackling"),"\n",l.createElement(t.li,null,"Fans, the AC? humming"),"\n",l.createElement(t.li,null,"Keypresses tapping"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"The textured chiclet keyboard"),"\n",l.createElement(t.li,null,"On my wrist, smooth greenwood beads"),"\n",l.createElement(t.li,null,"Soft dry socks warm my feet"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Coffee stale on my tongue"),"\n"),"\n",l.createElement(t.p,null,"*[AC]: Air Conditioner"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},o=n(3293),m=n(4588),i=n(116),u=n(7561),s=n(8766),p=n(7585),g=n(6262);const d=e=>{let{content:t,children:n,previous:a,next:r,metadata:c}=e;const o=t.__typename;switch(o){case"MdxContent":return n;case"PoemContent":return l.createElement(m.Z,{previous:a,next:r,metadata:c,poem:t.body});default:throw new Error("unknown type: "+o)}},E={name:"Molossus Spondee",url:"/about/"},h=e=>{let{location:{pathname:t},data:{post:{metadata:n}}}=e;const{description:a,title:r,dateXml:c,category:m,tags:u,places:d,people:h}=n,y=(0,g.L)(t);return[l.createElement(o.Z),l.createElement(p.Z,null,r),l.createElement(i.Z,{description:a,title:r,url:y}),l.createElement(s.Z,{title:r,date:c,author:E,category:m,tags:u,people:h,places:d})]},y=e=>{let{children:t,data:{post:n}}=e;const{previous:a,next:r,content:c,metadata:o}=n,{category:m,dateXml:i,title:s,tags:p,places:g,people:h}=o;return l.createElement(l.Fragment,null,l.createElement(d,{content:c,previous:null==a?void 0:a.metadata,next:null==r?void 0:r.metadata,metadata:o},t),l.createElement(u.Z,{title:s,date:i,author:E,category:m,tags:p,people:h,places:g}))};function I(e){return l.createElement(y,e,l.createElement(c,e))}},3293:function(e,t,n){var a=n(7294),l=n(6138);t.Z=()=>a.createElement(a.Fragment,null,a.createElement("link",{rel:"icon",href:l.Z}),a.createElement("meta",{name:"color-scheme",content:"light dark"}),a.createElement("meta",{name:"theme-color",content:"#6000A0"}))},7311:function(e,t,n){var a=n(7294),l=n(1883);t.Z=e=>{let{srcdoc:t}=e;const n=JSON.stringify(t);return a.createElement(l.Xf,{type:"application/ld+json"},n)}},4588:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(7294),l=n(7020),r=n(7122),c=n(4472),o=n(1045);var m=e=>{let{children:t}=e;return a.createElement(a.Fragment,null,t)};const i=e=>a.Children.map(e,(e=>e)),u=e=>{let{line:t}=e;return i(t.map(((e,t)=>a.createElement(a.Fragment,null,t>0&&a.createElement(r.Z,null),a.createElement(m,null,e)))))},s=e=>{let{stanza:t}=e;return i(t.map((e=>a.createElement(c.Z,null,a.createElement(u,{line:e})))))};var p=e=>{let{poem:t}=e;return i(t.map((e=>a.createElement(o.Z,null,a.createElement(s,{stanza:e})))))};var g=e=>{let{poem:t,next:n,previous:r,metadata:c}=e;return a.createElement(l.Z,{previous:r,next:n,metadata:c},a.createElement(p,{poem:t}))}},116:function(e,t,n){var a=n(7294),l=n(9622),r=n(6138);t.Z=e=>{var t;let{description:n,url:c,title:o}=e;const m=(0,l.$)();return null!==(t=n)&&void 0!==t||(n=m.description),a.createElement(a.Fragment,null,a.createElement("link",{rel:"canonical",href:c}),a.createElement("meta",{name:"description",content:n}),a.createElement("meta",{name:"og:site_name",content:m.title}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:image",content:r.Z}),a.createElement("meta",{property:"og:url",content:c}),a.createElement("meta",{property:"og:description",content:n}))}},7561:function(e,t,n){var a=n(7294),l=n(7311),r=n(8472);const c=e=>{let{title:t,date:n,author:a,category:l,tags:r,people:c,places:o}=e;return{"@context":"https://schema.org","@type":"BlogPosting",headline:t,datePublished:n,author:[{"@type":"Person",name:a.name,url:a.url}],articleSection:l,keywords:r,character:c,contentLocation:o}},o=e=>{let{title:t,category:n,slug:a}=e;return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"/"},{"@type":"ListItem",position:2,name:n,item:(0,r.y)(["category",n])},{"@type":"ListItem",position:3,name:t,item:a}]}};t.Z=e=>a.createElement(a.Fragment,null,a.createElement(l.Z,{srcdoc:o(e)}),a.createElement(l.Z,{srcdoc:c(e)}))},8766:function(e,t,n){var a=n(7294);const l=e=>{let{tags:t}=e;return t.map((e=>a.createElement("meta",{key:e,property:"og:article:tag",content:e})))};t.Z=e=>{let{author:t,date:n,category:r,tags:c,people:o,places:m}=e;return a.createElement(a.Fragment,null,a.createElement("link",{rel:"author",href:t.url}),a.createElement("meta",{name:"author",content:t.name}),a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"og:article:author",content:t.name}),a.createElement("meta",{property:"og:article:published_time",content:n}),a.createElement("meta",{property:"og:article:section",content:r}),a.createElement("meta",{property:"og:profile",content:t.name}),a.createElement("meta",{property:"og:profile:username",content:t.name}),a.createElement(l,{tags:o}),a.createElement(l,{tags:c}),a.createElement(l,{tags:m}))}},7585:function(e,t,n){var a=n(7294),l=n(9622),r=n(2164);t.Z=e=>{let{children:t}=e;const n=(0,l.$)(),c=a.Children.toArray(t);c.push(n.title);const o=c.join(r.Z);return a.createElement("title",null,o)}},6262:function(e,t,n){n.d(t,{L:function(){return l}});var a=n(1883);const l=e=>{const t=(0,a.K2)("1271460761").site.siteMetadata;return new URL(e,t.siteUrl).toString()}},9622:function(e,t,n){n.d(t,{$:function(){return l}});var a=n(1883);const l=()=>(0,a.K2)("3000541721").site.siteMetadata},2164:function(e,t,n){n.d(t,{k:function(){return a}});const a=" — ";t.Z=a},6138:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-templates-post-jsx-content-file-path-home-molly-documents-repos-mstewartgallus-github-io-blog-poem-2022-11-11-grounding-md-e49690aee5cdde8ab7ef.js.map