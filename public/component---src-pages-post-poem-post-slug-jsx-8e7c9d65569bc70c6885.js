"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[201],{3293:function(e,t,r){var n=r(4149),s=r(5893);t.Z=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("html",{lang:"en"}),(0,s.jsx)("link",{rel:"icon",href:n.Z}),(0,s.jsx)("meta",{name:"color-scheme",content:"dark light"}),(0,s.jsx)("meta",{name:"theme-color",content:"#6000A0"})]})},7311:function(e,t,r){var n=r(1883),s=r(5893);t.Z=e=>{let{srcdoc:t}=e;const r=JSON.stringify(t);return(0,s.jsx)(n.Xf,{type:"application/ld+json",children:r})}},2980:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(3274),s=r(9622),i=r(7294),c=r(4149);var l=e=>{let{description:t,url:r,title:n}=e;const l=(0,s.Z)();return i.useMemo((()=>({og:{site_name:l.title,title:n,image:c.Z,description:null!=t?t:l.description,url:r}})),[l,t,r,n])},o=r(5893);const a=e=>{const t=l(e);return Array.from(function*(){for(const[e,r,s]of(0,n.Z)(t))yield(0,o.jsx)("meta",{property:r,content:s},e)}())};var d=e=>{const{description:t,url:r}=e,n=(0,s.Z)();return(0,o.jsxs)(o.Fragment,{children:[r&&(0,o.jsx)("link",{rel:"canonical",href:r}),(0,o.jsx)("meta",{name:"description",content:null!=t?t:n.description}),(0,o.jsx)(a,{...e})]})}},7585:function(e,t,r){var n=r(7294),s=r(9622),i=r(2164),c=r(5893);t.Z=e=>{let{children:t}=e;const r=(0,s.Z)(),l=n.Children.toArray(t);l.push(r.title);const o=l.join(i.Z);return(0,c.jsx)("title",{children:o})}},9487:function(e,t,r){r.d(t,{RV:function(){return a},TO:function(){return j},YE:function(){return M},es:function(){return S}});var n=r(7294),s=r(5893);const i=n.createContext(null),c=e=>{let{desc:t,children:r}=e;const c=n.useId();return(0,s.jsxs)("dl",{className:"desc-list-module--dl--57fd7",children:[(0,s.jsx)("dt",{className:"desc-list-module--dt--00456",id:c,children:t}),(0,s.jsx)(i.Provider,{value:c,children:r})]})},l=e=>{let{children:t}=e;const r=n.useContext(i);return(0,s.jsx)("dd",{className:"desc-list-module--dd--9c6de","aria-describedby":r,children:t})};const o=e=>{let{notice:t}=e;return t.map((e=>(0,s.jsx)(l,{children:e},e)))},a=e=>{let{notice:t}=e;return(0,s.jsx)(c,{desc:"Notice",children:(0,s.jsx)(o,{notice:t})})};var d=r(3274),u=r(5785);var h=e=>{let{author:t,date:r,description:n,url:s,title:i,category:c,people:l,tags:o,places:a}=e;return{og:{type:"article",article:{author:t.name,published_time:r,section:c,tag:[].concat((0,u.Z)(l),(0,u.Z)(o),(0,u.Z)(a))},profile:[t.name,{username:t.name}]}}};const x=e=>{const t=h(e);return Array.from(function*(){for(const[e,r,n]of(0,d.Z)(t))yield(0,s.jsx)("meta",{property:r,content:n},e)}())},j=e=>{const{author:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("link",{rel:"author",href:t.url}),(0,s.jsx)("meta",{name:"author",content:t.name}),(0,s.jsx)(x,{...e})]})};var g=r(5265);const p=(e,t)=>{let{children:r,desc:i,...c}=e;const l=(0,n.useId)();return(0,s.jsxs)(g.A,{...c,"aria-describedby":l,ref:t,children:[r," ",(0,s.jsx)("span",{id:l,"aria-hidden":"true",children:i})]})};var m=(0,n.forwardRef)(p),f=r(8472);var y=e=>{let{person:t}=e;const r=(0,f.y)(["person",t]);return(0,s.jsx)(g.A,{href:r,rel:"tag","data-pagefind-filter":"person",children:t})};var v=e=>{let{place:t}=e;const r=(0,f.y)(["place",t]);return(0,s.jsx)(g.A,{href:r,rel:"tag","data-pagefind-filter":"place",children:t})};var I=e=>{let{tag:t}=e;const r=(0,f.y)(["tag",t]);return(0,s.jsx)(g.A,{href:r,rel:"tag","data-pagefind-filter":"tag",children:t})};const Z=e=>{let{places:t}=e;return t.map((e=>(0,s.jsx)(l,{children:(0,s.jsx)(v,{place:e})},e)))},b=e=>{let{tags:t}=e;return t.map((e=>(0,s.jsx)(l,{children:(0,s.jsx)(I,{tag:e})},e)))},A=e=>{let{people:t}=e;return t.map((e=>(0,s.jsx)(l,{children:(0,s.jsx)(y,{person:e})},e)))},w=e=>{let{places:t}=e;return(0,s.jsx)(c,{desc:"Place",children:(0,s.jsx)(Z,{places:t})})},N=e=>{let{tags:t}=e;return(0,s.jsx)(c,{desc:"Tag",children:(0,s.jsx)(b,{tags:t})})},k=e=>{let{people:t}=e;return(0,s.jsx)(c,{desc:"People",children:(0,s.jsx)(A,{people:t})})};var P=e=>{let{dateDisplay:t,date:r,author:n,places:i,tags:c,people:l}=e;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{children:["Post Date ",(0,s.jsx)("time",{"data-pagefind-filter":"date[datetime]","data-pagefind-sort":"date[datetime]",dateTime:r,children:t})]}),(0,s.jsx)(m,{rel:"author",href:n.url,desc:n.name,children:"Author"}),i&&i.length>0&&(0,s.jsx)(w,{places:i}),c&&c.length>0&&(0,s.jsx)(N,{tags:c}),l&&l.length>0&&(0,s.jsx)(k,{people:l})]})};var C=e=>{let{category:t}=e;const r=(0,f.y)(["category",t]);return(0,s.jsx)(g.A,{href:r,rel:"tag","data-pagefind-filter":"category",children:t})};var L=e=>{let{category:t,title:r}=e;return(0,s.jsxs)(g.Jb,{children:[(0,s.jsx)(g.gN,{children:(0,s.jsx)(g.A,{href:"/",children:"Home"})}),(0,s.jsx)(g.gN,{children:(0,s.jsx)(C,{rel:"tag",category:t})}),(0,s.jsx)(g.gN,{children:(0,s.jsx)(g.A,{role:"link","aria-disabled":"true","aria-current":"page",children:(0,s.jsx)("cite",{children:r})})})]})};var B=e=>{let{previous:t,next:r}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:t&&(0,s.jsx)(m,{rel:"prev",href:t.slug,desc:(0,s.jsx)("cite",{children:t.title}),children:"Previous"})}),(0,s.jsx)("div",{children:r&&(0,s.jsx)(m,{rel:"next",href:r.slug,desc:(0,s.jsx)("cite",{children:r.title}),children:"Next"})})]})};const F=e=>{let{category:t,previous:r,next:n}=e;return[t,{previous:null==r?void 0:r.post,next:null==n?void 0:n.post}]};var J=e=>{let{childrenLink:t}=e;const r=(e=>new Map(e.map(F)))(t);return(0,s.jsx)(B,{...r.get("")})};const M=e=>{const{category:t,title:r,childrenLink:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.JL,{heading:(0,s.jsx)("h2",{children:"Paging"}),children:(0,s.jsx)(J,{childrenLink:n})}),(0,s.jsx)(g.$_,{heading:(0,s.jsx)("h2",{children:"Metadata"}),children:(0,s.jsx)(P,{...e})}),(0,s.jsx)(g.JL,{heading:(0,s.jsx)("h2",{children:"Breadcrumbs"}),children:(0,s.jsx)(L,{category:t,title:r})})]})};const S=e=>{let{title:t,date:r,author:n,category:s,tags:i,people:c,places:l}=e;return{"@context":"https://schema.org","@type":"BlogPosting",headline:t,datePublished:r,author:[{"@type":"Person",name:n.name,url:n.url}],articleSection:s,keywords:i,character:c,contentLocation:l}}},6262:function(e,t,r){var n=r(1883),s=r(7294);t.Z=e=>{const t=(0,n.K2)("1271460761");return s.useMemo((()=>{const r=t.site.siteMetadata;return new URL(e,r.siteUrl).toString()}),[t,e])}},9265:function(e,t,r){var n=r(7294),s=r(8472);t.Z=e=>{let{title:t,category:r,slug:i}=e;return n.useMemo((()=>({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"/"},{"@type":"ListItem",position:2,name:r,item:(0,s.Z)(["category",r])},{"@type":"ListItem",position:3,name:t,item:i}]})),[t,i,r])}},9622:function(e,t,r){var n=r(1883);t.Z=()=>(0,n.K2)("3000541721").site.siteMetadata},3848:function(e,t,r){r.r(t),r.d(t,{Head:function(){return p}});var n=r(5265),s=r(6612),i=r(9487),c=r(3293),l=r(7311),o=r(2980),a=r(7585),d=r(6262),u=r(9265),h=r(5893);const x=e=>{let{title:t,subtitle:r}=e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h1",{children:t}),(0,h.jsx)("p",{children:r})]})},j=e=>{let{notice:t}=e;return t&&t.length>0&&(0,h.jsx)(i.RV,{notice:t})},g=e=>{const t=(0,u.Z)(e),r=(0,i.es)(e);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.Z,{srcdoc:t}),(0,h.jsx)(l.Z,{srcdoc:r})]})},p=e=>{let{data:{postPoem:{post:t}}}=e;const{description:r,title:n,slug:s}=t,l=(0,d.Z)(s);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.Z,{}),(0,h.jsx)(a.Z,{children:n}),(0,h.jsx)(o.Z,{description:r,title:n,url:l}),(0,h.jsx)(i.TO,{...t})]})};t.default=e=>{let{data:{postPoem:{post:t,poem:r}}}=e;const c=r.content;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.T3,{sidebar:(0,h.jsx)(i.YE,{...t}),children:(0,h.jsx)(n.or,{heading:(0,h.jsx)(x,{...t}),notice:(0,h.jsx)(j,{notice:t.notice}),children:(0,h.jsx)(s.Jq,{poem:c})})}),(0,h.jsx)(g,{...t})]})}},3274:function(e,t,r){const n=function*e(t,r,n){if("string"!=typeof n)if(Array.isArray(n)){let s=0;for(const i of n){for(const n of e(""+t+s,r,i))yield n;++s}}else for(const[s,i]of Object.entries(n)){const n=r?r+":"+s:s,c=r?t+":"+s:s;for(const t of e(c,n,i))yield t}else yield[t,r,n]};t.Z=function*(e){for(const t of n(null,null,e))yield t}},8472:function(e,t,r){r.d(t,{y:function(){return n}});const n=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return"/search?"+new URLSearchParams(t)};t.Z=n},2164:function(e,t,r){r.d(t,{k:function(){return n}});const n=" — ";t.Z=n},4149:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-post-poem-post-slug-jsx-8e7c9d65569bc70c6885.js.map