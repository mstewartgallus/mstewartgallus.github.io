(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[400],{1223:function(e,t,n){var r=n(5112),l=n(30),a=n(3070).f,c=r("unscopables"),u=Array.prototype;null==u[c]&&a(u,c,{configurable:!0,value:l(null)}),e.exports=function(e){u[c][e]=!0}},9244:function(e,t,n){n(1223)("flatMap")},7122:function(e,t,n){"use strict";t.Z=()=>" — "},9238:function(e,t,n){"use strict";var r=n(7294);t.Z=e=>{let{children:t,heading:n,...l}=e;const a=r.useId();return r.createElement("footer",Object.assign({},l,{"aria-labelledby":a}),r.createElement("hgroup",{className:"sr-only",id:a},n),t)}},7311:function(e,t,n){"use strict";var r=n(7294),l=n(1883);t.Z=e=>{let{srcdoc:t}=e;const n=JSON.stringify(t);return r.createElement(l.Xf,{type:"application/ld+json"},n)}},4472:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294);var l=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement("span",{role:"presentation",className:"l-module--l--9f372"},t),r.createElement("br",null))}},1045:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294);var l=e=>{let{children:t,...n}=e;return r.createElement("p",Object.assign({},n,{className:"lg-module--lg--87b8f"}),t)}},799:function(e,t,n){"use strict";var r=n(7294),l=n(1883),a=n(8472);t.Z=e=>{let{category:t}=e;const n=(0,a.y)(["category",t]);return r.createElement(l.rU,{to:n,rel:"tag","data-pagefind-filter":"category"},t)}},9378:function(e,t,n){"use strict";var r=n(7294);const l=e=>{let{notice:t}=e;return t.map((e=>r.createElement("dd",{key:e},e)))};t.Z=e=>{let{notice:t}=e;return t&&t.length>0&&r.createElement("dl",null,r.createElement("div",null,r.createElement("dt",null,"Notice"),r.createElement(l,{notice:t})))}},9330:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(7294),l=n(1883),a=n(8472);var c=e=>{let{person:t}=e;const n=(0,a.y)(["person",t]);return r.createElement(l.rU,{to:n,rel:"tag","data-pagefind-filter":"person"},t)};var u=e=>{let{place:t}=e;const n=(0,a.y)(["place",t]);return r.createElement(l.rU,{to:n,rel:"tag","data-pagefind-filter":"place"},t)};var o=e=>{let{tag:t}=e;const n=(0,a.y)(["tag",t]);return r.createElement(l.rU,{to:n,rel:"tag","data-pagefind-filter":"tag"},t)};const i=e=>{let{places:t}=e;return t.map((e=>r.createElement("dd",{key:e},r.createElement(u,{place:e}))))},s=e=>{let{tags:t}=e;return t.map((e=>r.createElement("dd",{key:e},r.createElement(o,{tag:e}))))},m=e=>{let{people:t}=e;return t.map((e=>r.createElement("dd",{key:e},r.createElement(c,{person:e}))))},d=e=>{let{places:t}=e;return t&&t.length>0&&r.createElement("div",null,r.createElement("dt",null,"Place"),r.createElement(i,{places:t}))},E=e=>{let{tags:t}=e;return t&&t.length>0&&r.createElement("div",null,r.createElement("dt",null,"Tag"),r.createElement(s,{tags:t}))},p=e=>{let{people:t}=e;return t&&t.length>0&&r.createElement("div",null,r.createElement("dt",null,"People"),r.createElement(m,{people:t}))};var g=e=>{let{dateDisplay:t,date:n,author:a,places:c,tags:u,people:o}=e;return r.createElement("dl",null,r.createElement("div",null,r.createElement("dt",null,"Post Date"),r.createElement("dd",null,r.createElement("time",{"data-pagefind-filter":"date[datetime]","data-pagefind-sort":"date[datetime]",dateTime:n},t))),r.createElement("div",null,r.createElement("dt",null,r.createElement(l.rU,{rel:"author",to:a.url},"Author")),r.createElement("dd",null,a.name)),r.createElement(d,{places:c}),r.createElement(E,{tags:u}),r.createElement(p,{people:o}))}},5698:function(e,t,n){"use strict";var r=n(7294),l=n(1883);const a=e=>{let{children:t,href:n}=e;return n&&r.createElement("div",null,r.createElement("dt",null,r.createElement(l.rU,{rel:"prev",to:n},"Previous")),r.createElement("dd",null,r.createElement("cite",null,t)))},c=e=>{let{children:t,href:n}=e;return n&&r.createElement("div",null,r.createElement("dt",null,r.createElement(l.rU,{rel:"next",to:n},"Next")),r.createElement("dd",null,r.createElement("cite",null,t)))};t.Z=e=>{let{previous:t,next:n}=e;return r.createElement("dl",null,t&&r.createElement(a,{href:t.slug},t.title),n&&r.createElement(c,{href:n.slug},n.title))}},4138:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),l=n(7122),a=n(4472),c=n(1045);var u=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,t)};const o=e=>r.Children.map(e,(e=>e)),i=e=>{let{line:t}=e;return o(t.map(((e,t)=>r.createElement(r.Fragment,null,t>0&&r.createElement(l.Z,null),r.createElement(u,null,e)))))},s=e=>{let{stanza:t}=e;return o(t.map((e=>r.createElement(a.Z,null,r.createElement(i,{line:e})))))};var m=e=>{let{poem:t}=e;return o(t.map((e=>r.createElement(c.Z,null,r.createElement(s,{stanza:e})))))}},2980:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),l=n(3274),a=n(9622),c=n(6138);var u=e=>{let{description:t,url:n,title:l}=e;const u=(0,a.Z)();return r.useMemo((()=>({og:{site_name:u.title,title:l,image:c.Z,description:null!=t?t:u.description,url:n}})),[u,t,n,l])};const o=e=>{const t=u(e);return(0,l.Z)(t).map((e=>{let[t,n]=e;return r.createElement("meta",{key:t,property:t,content:n})}))};var i=e=>{const{description:t,url:n}=e,l=(0,a.Z)();return r.createElement(r.Fragment,null,n&&r.createElement("link",{rel:"canonical",href:n}),r.createElement("meta",{name:"description",content:null!=t?t:l.description}),r.createElement(o,e))}},8790:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),l=n(3274),a=n(5785);var c=e=>{let{author:t,date:n,description:r,url:l,title:c,category:u,people:o,tags:i,places:s}=e;return{og:{type:"article",article:{author:t.name,published_time:n,section:u,tag:[].concat((0,a.Z)(o),(0,a.Z)(i),(0,a.Z)(s))},profile:[t.name,{username:t.name}]}}};const u=e=>{const t=c(e);return(0,l.Z)(t).map((e=>{let[t,n]=e;return r.createElement("meta",{key:t,property:t,content:n})}))};var o=e=>{const{author:t}=e;return r.createElement(r.Fragment,null,r.createElement("link",{rel:"author",href:t.url}),r.createElement("meta",{name:"author",content:t.name}),r.createElement(u,e))}},6262:function(e,t,n){"use strict";n.d(t,{L:function(){return a}});var r=n(1883),l=n(7294);const a=e=>{const t=(0,r.K2)("1271460761");return l.useMemo((()=>{const n=t.site.siteMetadata;return new URL(e,n.siteUrl).toString()}),[t,e])};t.Z=a},8920:function(e,t,n){"use strict";t.Z=e=>{let{title:t,date:n,author:r,category:l,tags:a,people:c,places:u}=e;return{"@context":"https://schema.org","@type":"BlogPosting",headline:t,datePublished:n,author:[{"@type":"Person",name:r.name,url:r.url}],articleSection:l,keywords:a,character:c,contentLocation:u}}},9265:function(e,t,n){"use strict";var r=n(7294),l=n(8472);t.Z=e=>{let{title:t,category:n,slug:a}=e;return r.useMemo((()=>({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"/"},{"@type":"ListItem",position:2,name:n,item:(0,l.Z)(["category",n])},{"@type":"ListItem",position:3,name:t,item:a}]})),[t,a,n])}},4504:function(e,t,n){"use strict";var r=n(1883);t.Z=()=>(0,r.K2)("1467541215").indexAll.index.id},1759:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(7122),l=n(7294);var a=e=>{let{children:t}=e;return l.createElement("ul",{className:"green-module--green--895a4"},t)},c=n(1883);const u=e=>{let{to:t,...n}=e;const r="#"+t;return t&&l.createElement(l.Fragment,null," ",l.createElement(c.rU,Object.assign({},n,{to:r}),"#"))},o=e=>function(t){let{id:n,children:r,...a}=t;const c=l.useId();return l.createElement(e,Object.assign({},a,{id:n}),l.createElement("span",{role:"presentation",id:c},r),l.createElement(u,{to:n,"aria-describedby":c},"#"))},i=o("h1"),s=o("h2"),m=o("h3"),d=o("h4"),E=o("h5"),p=o("h6");var g=n(4472),f=n(1045);const h={Green:a,Lg:f.Z,L:g.Z,Caesura:r.Z,H1:i,H2:s,H3:m,H4:d,H5:E,H6:p},Z={ul:f.Z,li:g.Z},v={...h,...{h1:i,h2:s,h3:m,h4:d,h5:E,h6:p}},y={...v,...Z};var b=e=>{switch(e){case"Poem":return y;case"Prose":case"Web":return v;default:throw new Error("Unrecognized category "+e)}}},4373:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return M}});var r=n(7294),l=n(1883),a=n(1151),c=n(6111),u=n(9238),o=n(3293),i=n(7311),s=n(799),m=n(9378),d=n(9330),E=n(6985),p=n(5698),g=n(4138),f=n(5453),h=n(2980),Z=n(8790),v=n(7585),y=n(6262),b=n(8920),k=n(9265),P=n(4504),x=n(1759);const U={name:"Molossus Spondee",url:"/about/"},L=e=>{let{index:{id:t},previous:n,next:r}=e;return[t,{previous:null==n?void 0:n.post,next:null==r?void 0:r.post}]},_=e=>Object.fromEntries(e.map(L)),w=e=>{let{children:t,category:n}=e;const l=(0,x.Z)(n);return r.createElement(a.Zo,{components:l},t)},M=e=>{let{data:{post:t}}=e;const{description:n,title:l,slug:a}=t,c=(0,y.Z)(a);return r.createElement(r.Fragment,null,r.createElement(o.Z,null),r.createElement(v.Z,null,l),r.createElement(h.Z,{description:n,title:l,url:c}),r.createElement(Z.Z,Object.assign({author:U},t)))};t.default=e=>{let{children:t,data:{post:n}}=e;n={author:U,...n};const a=(0,k.Z)(n),o=(0,b.Z)(n),h=(0,P.Z)(),{category:Z,title:v,subtitle:y,notice:x,childrenLink:L,childPostPoem:M,childPostMdx:F}=n,H=_(L);return r.createElement(r.Fragment,null,r.createElement(f.Z,{heading:r.createElement(r.Fragment,null,r.createElement("h1",null,v),r.createElement("p",null,y)),notice:r.createElement(m.Z,{notice:x}),sidebar:r.createElement(r.Fragment,null,r.createElement(E.Z,{heading:r.createElement("h2",null,"Paging")},r.createElement(p.Z,H[h])),r.createElement(u.Z,{heading:r.createElement("h2",null,"Metadata")},r.createElement(d.Z,n)),r.createElement(E.Z,{heading:r.createElement("h2",null,"Breadcrumbs")},r.createElement(c.Z,null,r.createElement("li",null,r.createElement(l.rU,{to:"/"},"Home")),r.createElement("li",null,r.createElement(s.Z,{rel:"tag",category:Z})),r.createElement("li",{"aria-current":"page"},r.createElement("cite",null,v)))))},M&&r.createElement(g.Z,{poem:M.poem.content}),F&&r.createElement(w,{category:Z},t)),r.createElement(i.Z,{srcdoc:a}),r.createElement(i.Z,{srcdoc:o}))}},3274:function(e,t,n){"use strict";n(9244);function r(e,t){return"string"==typeof t?[[e,t]]:Array.isArray(t)?t.flatMap((t=>r(e,t))):Object.entries(t).flatMap((t=>{let[n,l]=t;return r(e?e+":"+n:n,l)}))}t.Z=e=>r(null,e)},8472:function(e,t,n){"use strict";n.d(t,{y:function(){return r}});const r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return"/search?"+new URLSearchParams(t)};t.Z=r},1151:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},ah:function(){return a}});var r=n(7294);const l=r.createContext({});function a(e){const t=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function u({components:e,children:t,disableParentContext:n}){let u=a(e);return n&&(u=e||c),r.createElement(l.Provider,{value:u},t)}}}]);
//# sourceMappingURL=component---src-templates-post-jsx-7410a6fc29be70e8252f.js.map