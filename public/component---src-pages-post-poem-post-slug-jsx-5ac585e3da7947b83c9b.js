"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[201],{3293:function(t,e,n){var i=n(4149),r=n(5893);e.Z=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("html",{lang:"en"}),(0,r.jsx)("link",{rel:"icon",href:i.Z}),(0,r.jsx)("meta",{name:"color-scheme",content:"dark light"}),(0,r.jsx)("meta",{name:"theme-color",content:"#6000A0"})]})},7311:function(t,e,n){var i=n(1883),r=n(5893);e.Z=t=>{let{srcdoc:e}=t;const n=JSON.stringify(e);return(0,r.jsx)(i.Xf,{type:"application/ld+json",children:n})}},9378:function(t,e,n){var i=n(6009),r=n(5893);const o=t=>{let{notice:e}=t;return e.map((t=>(0,r.jsx)(i.H9,{children:t},t)))};e.Z=t=>{let{notice:e}=t;return(0,r.jsx)(i.ye,{desc:"Notice",children:(0,r.jsx)(o,{notice:e})})}},2980:function(t,e,n){n.d(e,{Z:function(){return u}});var i=n(3274),r=n(9622),o=n(7294),s=n(4149);var c=t=>{let{description:e,url:n,title:i}=t;const c=(0,r.Z)();return o.useMemo((()=>({og:{site_name:c.title,title:i,image:s.Z,description:null!=e?e:c.description,url:n}})),[c,e,n,i])},l=n(5893);const a=t=>{const e=c(t);return Array.from(function*(){for(const[t,n,r]of(0,i.Z)(e))yield(0,l.jsx)("meta",{property:n,content:r},t)}())};var u=t=>{const{description:e,url:n}=t,i=(0,r.Z)();return(0,l.jsxs)(l.Fragment,{children:[n&&(0,l.jsx)("link",{rel:"canonical",href:n}),(0,l.jsx)("meta",{name:"description",content:null!=e?e:i.description}),(0,l.jsx)(a,{...t})]})}},7585:function(t,e,n){var i=n(7294),r=n(9622),o=n(2164),s=n(5893);e.Z=t=>{let{children:e}=t;const n=(0,r.Z)(),c=i.Children.toArray(e);c.push(n.title);const l=c.join(o.Z);return(0,s.jsx)("title",{children:l})}},6262:function(t,e,n){var i=n(1883),r=n(7294);e.Z=t=>{const e=(0,i.K2)("1271460761");return r.useMemo((()=>{const n=e.site.siteMetadata;return new URL(t,n.siteUrl).toString()}),[e,t])}},8920:function(t,e,n){e.Z=t=>{let{title:e,date:n,author:i,category:r,tags:o,people:s,places:c}=t;return{"@context":"https://schema.org","@type":"BlogPosting",headline:e,datePublished:n,author:[{"@type":"Person",name:i.name,url:i.url}],articleSection:r,keywords:o,character:s,contentLocation:c}}},9265:function(t,e,n){var i=n(7294),r=n(8472);e.Z=t=>{let{title:e,category:n,slug:o}=t;return i.useMemo((()=>({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"/"},{"@type":"ListItem",position:2,name:n,item:(0,r.Z)(["category",n])},{"@type":"ListItem",position:3,name:e,item:o}]})),[e,o,n])}},9622:function(t,e,n){var i=n(1883);e.Z=()=>(0,i.K2)("3000541721").site.siteMetadata},3848:function(t,e,n){n.r(e),n.d(e,{Head:function(){return I}});var i=n(6612),r=n(9103),o=n(3293),s=n(7311),c=n(9378),l=n(5404),a=n(2980),u=n(7585),d=n(6262),m=n(8920),g=n(9265),h=n(5893);const j=t=>{let{title:e,subtitle:n}=t;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h1",{tabIndex:"-1",children:e}),(0,h.jsx)("p",{children:n})]})},x=t=>{let{notice:e}=t;return e&&e.length>0&&(0,h.jsx)(c.Z,{notice:e})},p=t=>{const e=(0,g.Z)(t),n=(0,m.Z)(t);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.Z,{srcdoc:e}),(0,h.jsx)(s.Z,{srcdoc:n})]})},I=t=>{let{data:{postPoem:{post:e}}}=t;const{description:n,title:i,slug:s}=e,c=(0,d.Z)(s);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.Z,{}),(0,h.jsx)(u.Z,{children:i}),(0,h.jsx)(a.Z,{description:n,title:i,url:c}),(0,h.jsx)(r.TO,{...e})]})};e.default=t=>{let{data:{postPoem:{post:e,poem:n}}}=t;const o=n.content;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.Z,{heading:(0,h.jsx)(j,{...e}),notice:(0,h.jsx)(x,{notice:e.notice}),sidebar:(0,h.jsx)(r.YE,{...e}),children:(0,h.jsx)(i.Jq,{poem:o})}),(0,h.jsx)(p,{...e})]})}},2164:function(t,e,n){n.d(e,{k:function(){return i}});const i=" — ";e.Z=i},4149:function(t,e){e.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-post-poem-post-slug-jsx-5ac585e3da7947b83c9b.js.map