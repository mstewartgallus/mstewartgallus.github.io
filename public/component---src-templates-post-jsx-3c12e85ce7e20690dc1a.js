"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[400],{2879:function(e,t,n){var r=n(7294),a=n(1883);t.Z=e=>{let{children:t,...n}=e;return(e=>{let{href:t,download:n,target:r}=e;return(e=>e&&e.startsWith("/"))(t)&&!n&&!r})(n)?r.createElement(a.rU,Object.assign({},n,{to:n.href}),t):r.createElement("a",n,t)}},7122:function(e,t,n){t.Z=()=>" — "},1540:function(e,t,n){var r=n(7294),a=n(2879);t.Z=e=>{let{children:t,desc:n,...l}=e;const c=r.useId();return r.createElement(a.Z,l,r.createElement("span",{"aria-describedby":c},t)," ",r.createElement("span",{id:c,"aria-hidden":"true"},n))}},1616:function(e,t,n){n.d(t,{H9:function(){return c},ye:function(){return l}});var r=n(7294);const a=r.createContext(null),l=e=>{let{desc:t,children:n}=e;const l=r.useId();return r.createElement("dl",{className:"desc-list-module--dl--ede62"},r.createElement("dt",{className:"desc-list-module--dt--7d8bd",id:l,"aria-hidden":"true"},t),r.createElement(a.Provider,{value:l},n))},c=e=>{let{children:t}=e;const n=r.useContext(a);return r.createElement("dd",{className:"desc-list-module--dd--f2644","aria-describedby":n},t)}},9238:function(e,t,n){var r=n(7294);t.Z=e=>{let{children:t,heading:n,...a}=e;const l=r.useId();return r.createElement("footer",Object.assign({},a,{"aria-labelledby":l}),r.createElement("hgroup",{className:"sr-only",id:l},n),t)}},7311:function(e,t,n){var r=n(7294),a=n(1883);t.Z=e=>{let{srcdoc:t}=e;const n=JSON.stringify(t);return r.createElement(a.Xf,{type:"application/ld+json"},n)}},4472:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);var a=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement("span",{role:"presentation",className:"l-module--l--9f372"},t),r.createElement("br",null))}},1045:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);var a=e=>{let{children:t,...n}=e;return r.createElement("p",Object.assign({},n,{className:"lg-module--lg--87b8f"}),t)}},799:function(e,t,n){var r=n(7294),a=n(2879),l=n(8472);t.Z=e=>{let{category:t}=e;const n=(0,l.y)(["category",t]);return r.createElement(a.Z,{href:n,rel:"tag","data-pagefind-filter":"category"},t)}},9378:function(e,t,n){var r=n(7294),a=n(1616);const l=e=>{let{notice:t}=e;return t.map((e=>r.createElement(a.H9,{key:e},e)))};t.Z=e=>{let{notice:t}=e;return r.createElement(a.ye,{desc:"Notice"},r.createElement(l,{notice:t}))}},9330:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),a=n(1540),l=n(1616),c=n(2879),o=n(8472);var u=e=>{let{person:t}=e;const n=(0,o.y)(["person",t]);return r.createElement(c.Z,{href:n,rel:"tag","data-pagefind-filter":"person"},t)};var i=e=>{let{place:t}=e;const n=(0,o.y)(["place",t]);return r.createElement(c.Z,{href:n,rel:"tag","data-pagefind-filter":"place"},t)};var m=e=>{let{tag:t}=e;const n=(0,o.y)(["tag",t]);return r.createElement(c.Z,{href:n,rel:"tag","data-pagefind-filter":"tag"},t)};const s=e=>{let{places:t}=e;return t.map((e=>r.createElement(l.H9,{key:e},r.createElement(i,{place:e}))))},d=e=>{let{tags:t}=e;return t.map((e=>r.createElement(l.H9,{key:e},r.createElement(m,{tag:e}))))},E=e=>{let{people:t}=e;return t.map((e=>r.createElement(l.H9,{key:e},r.createElement(u,{person:e}))))},p=e=>{let{places:t}=e;return r.createElement(l.ye,{desc:"Place"},r.createElement(s,{places:t}))},h=e=>{let{tags:t}=e;return r.createElement(l.ye,{desc:"Tag"},r.createElement(d,{tags:t}))},g=e=>{let{people:t}=e;return r.createElement(l.ye,{desc:"People"},r.createElement(E,{people:t}))};var f=e=>{let{dateDisplay:t,date:n,author:l,places:c,tags:o,people:u}=e;return r.createElement("div",null,r.createElement("div",null,"Post Date ",r.createElement("time",{"data-pagefind-filter":"date[datetime]","data-pagefind-sort":"date[datetime]",dateTime:n},t)),r.createElement(a.Z,{rel:"author",href:l.url,desc:l.name},"Author"),c&&c.length>0&&r.createElement(p,{places:c}),o&&o.length>0&&r.createElement(h,{tags:o}),u&&u.length>0&&r.createElement(g,{people:u}))}},5698:function(e,t,n){var r=n(7294),a=n(1540);t.Z=e=>{let{previous:t,next:n}=e;return r.createElement("div",null,t&&r.createElement("div",null,r.createElement(a.Z,{rel:"prev",href:t.slug,desc:r.createElement("cite",null,t.title)},"Previous")),n&&r.createElement("div",null,r.createElement(a.Z,{rel:"next",href:n.slug,desc:r.createElement("cite",null,n.title)},"Next")))}},4138:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(7122),l=n(4472),c=n(1045);var o=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,t)};const u=e=>r.Children.map(e,(e=>e)),i=e=>{let{line:t}=e;return u(t.map(((e,t)=>r.createElement(r.Fragment,null,t>0&&r.createElement(a.Z,null),r.createElement(o,null,e)))))},m=e=>{let{stanza:t}=e;return u(t.map((e=>r.createElement(l.Z,null,r.createElement(i,{line:e})))))};var s=e=>{let{poem:t}=e;return u(t.map((e=>r.createElement(c.Z,null,r.createElement(m,{stanza:e})))))}},8790:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(3274),l=n(5785);var c=e=>{let{author:t,date:n,description:r,url:a,title:c,category:o,people:u,tags:i,places:m}=e;return{og:{type:"article",article:{author:t.name,published_time:n,section:o,tag:[].concat((0,l.Z)(u),(0,l.Z)(i),(0,l.Z)(m))},profile:[t.name,{username:t.name}]}}};const o=e=>{const t=c(e);return(0,a.Z)(t).map((e=>{let[t,n]=e;return r.createElement("meta",{key:t,property:t,content:n})}))};var u=e=>{const{author:t}=e;return r.createElement(r.Fragment,null,r.createElement("link",{rel:"author",href:t.url}),r.createElement("meta",{name:"author",content:t.name}),r.createElement(o,e))}},8920:function(e,t,n){t.Z=e=>{let{title:t,date:n,author:r,category:a,tags:l,people:c,places:o}=e;return{"@context":"https://schema.org","@type":"BlogPosting",headline:t,datePublished:n,author:[{"@type":"Person",name:r.name,url:r.url}],articleSection:a,keywords:l,character:c,contentLocation:o}}},9265:function(e,t,n){var r=n(7294),a=n(8472);t.Z=e=>{let{title:t,category:n,slug:l}=e;return r.useMemo((()=>({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"/"},{"@type":"ListItem",position:2,name:n,item:(0,a.Z)(["category",n])},{"@type":"ListItem",position:3,name:t,item:l}]})),[t,l,n])}},4504:function(e,t,n){var r=n(1883);t.Z=()=>(0,r.K2)("1467541215").indexAll.index.id},1759:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7122),a=n(7294);var l=e=>{let{children:t}=e;return a.createElement("ul",{className:"green-module--green--895a4"},t)},c=n(1883);const o=e=>{let{to:t,...n}=e;const r="#"+t;return t&&a.createElement(a.Fragment,null," ",a.createElement(c.rU,Object.assign({},n,{to:r}),"#"))},u=e=>function(t){let{id:n,children:r,...l}=t;const c=a.useId();return a.createElement(e,Object.assign({},l,{id:n}),a.createElement("span",{role:"presentation",id:c},r),a.createElement(o,{to:n,"aria-describedby":c},"#"))},i=u("h1"),m=u("h2"),s=u("h3"),d=u("h4"),E=u("h5"),p=u("h6");var h=n(4472),g=n(1045);const f={Green:l,Lg:g.Z,L:h.Z,Caesura:r.Z,H1:i,H2:m,H3:s,H4:d,H5:E,H6:p},Z={ul:g.Z,li:h.Z},y={...f,...{h1:i,h2:m,h3:s,h4:d,h5:E,h6:p}},v={...y,...Z};var b=e=>{switch(e){case"Poem":return v;case"Prose":case"Web":return y;default:throw new Error("Unrecognized category "+e)}}},4373:function(e,t,n){n.r(t),n.d(t,{Head:function(){return I}});var r=n(7294),a=n(1883),l=n(1151),c=n(6111),o=n(9238),u=n(3293),i=n(7311),m=n(799),s=n(9378),d=n(9330),E=n(6985),p=n(5698),h=n(4138),g=n(4038),f=n(2980),Z=n(8790),y=n(7585),v=n(6262),b=n(8920),P=n(9265),k=n(4504),x=n(1759);const H={name:"Molossus Spondee",url:"/about/"},w=e=>{let{index:{id:t},previous:n,next:r}=e;return[t,{previous:null==n?void 0:n.post,next:null==r?void 0:r.post}]},_=e=>Object.fromEntries(e.map(w)),L=e=>{let{children:t,category:n}=e;const a=(0,x.Z)(n);return r.createElement(l.Zo,{components:a},t)},N=e=>{let{title:t,subtitle:n}=e;return r.createElement(r.Fragment,null,r.createElement("h1",null,t),r.createElement("p",null,n))},C=e=>{let{notice:t}=e;return t&&t.length>0&&r.createElement(s.Z,{notice:t})},F=e=>{let{children:t,category:n,childPostPoem:a}=e;return a?r.createElement(h.Z,{poem:a.poem.content}):r.createElement(L,{category:n},t)},j=e=>{const{category:t,title:n,childrenLink:l}=e,u=(0,k.Z)(),i=_(l);return r.createElement(r.Fragment,null,r.createElement(E.Z,{heading:r.createElement("h2",null,"Paging")},r.createElement(p.Z,i[u])),r.createElement(o.Z,{heading:r.createElement("h2",null,"Metadata")},r.createElement(d.Z,e)),r.createElement(E.Z,{heading:r.createElement("h2",null,"Breadcrumbs")},r.createElement(c.Z,null,r.createElement("li",null,r.createElement(a.rU,{to:"/"},"Home")),r.createElement("li",null,r.createElement(m.Z,{rel:"tag",category:t})),r.createElement("li",{"aria-current":"page"},r.createElement("cite",null,n)))))},O=e=>{const t=(0,P.Z)(e),n=(0,b.Z)(e);return r.createElement(r.Fragment,null,r.createElement(i.Z,{srcdoc:t}),r.createElement(i.Z,{srcdoc:n}))},I=e=>{let{data:{post:t}}=e;const{description:n,title:a,slug:l}=t,c=(0,v.Z)(l);return r.createElement(r.Fragment,null,r.createElement(u.Z,null),r.createElement(y.Z,null,a),r.createElement(f.Z,{description:n,title:a,url:c}),r.createElement(Z.Z,Object.assign({author:H},t)))};t.default=e=>{let{children:t,data:{post:n}}=e;return n={author:H,...n},r.createElement(g.ZP,{heading:r.createElement(N,n),notice:r.createElement(C,{notice:n.notice}),sidebar:r.createElement(j,n),foot:r.createElement(O,n)},r.createElement(F,n,t))}},8472:function(e,t,n){n.d(t,{y:function(){return r}});const r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return"/search?"+new URLSearchParams(t)};t.Z=r},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return l}});var r=n(7294);const a=r.createContext({});function l(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o=l(e);return n&&(o=e||c),r.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-post-jsx-3c12e85ce7e20690dc1a.js.map