"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[143],{7311:function(e,n,t){t.d(n,{h:function(){return i}});var r=t(7294),s=t(5893);const i=e=>{let{srcdoc:n}=e;const t=(0,r.useMemo)((()=>JSON.stringify(n)),[n]);return(0,s.jsx)("script",{type:"application/ld+json",children:t})};n.Z=i},2980:function(e,n,t){t.d(n,{i:function(){return d},Z:function(){return o}});var r=t(3274),s=t(9622),i=t(7294);var c=e=>{let{description:n,url:t,title:r}=e;const c=(0,s.Z)();return(0,i.useMemo)((()=>({og:{site_name:c.title,title:r,description:null!=n?n:c.description,url:t}})),[c,n,t,r])},l=t(5893);const a=e=>{const n=c(e);return Array.from(function*(){for(const[e,t,s]of(0,r.Z)(n))yield(0,l.jsx)("meta",{property:t,content:s},e)}())},d=e=>{const{description:n,url:t}=e,r=(0,s.Z)();return(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsx)("link",{rel:"canonical",href:t}),(0,l.jsx)("meta",{name:"description",content:null!=n?n:r.description}),(0,l.jsx)(a,{...e})]})};var o=d},7585:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7294),s=t(1883),i=t(2164);const c=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];const c=(0,s.K2)("3159585216");return(0,r.useMemo)((()=>{const{title:e}=c.site.siteMetadata;return[].concat(n,[e]).join(i.k)}),[c,n])}},5460:function(e,n,t){t.d(n,{H1:function(){return l}});var r=t(7294),s=t(7831),i=t(5893);const c=(e,n)=>{var t,r;return(0,i.jsx)(s.H1,{...e,id:null!==(t=e.id)&&void 0!==t?t:"content",tabIndex:null!==(r=e.tabIndex)&&void 0!==r?r:"-1",ref:n})},l=(0,r.forwardRef)(c)},5339:function(e,n,t){t.d(n,{b:function(){return o},A:function(){return d}});var r=t(7294),s=t(6960),i=t(2044),c=t(7158),l=t(5893);const a=(0,r.forwardRef)((function(e,n){let{id:t,children:s,label:c}=e;const a=(0,r.useRef)();n??=a;const{1:d}=(0,r.useTransition)(),{0:o,1:u}=(0,r.useState)(!1),h=(0,r.useCallback)((e=>{"Escape"===e.key&&(e.preventDefault(),d((()=>u(!1))),n.current.focus({preventScroll:!0,focusVisible:!0}))}),[n]),f=(0,r.useCallback)((e=>{const{relatedTarget:n,currentTarget:t}=e;t.contains(n)||d((()=>u(!1)))}),[]),m=(0,r.useRef)(),x=(0,r.useCallback)((e=>{d((()=>u((e=>!e))))}),[]),j=(0,r.useId)();return(0,l.jsxs)("div",{className:"outline-module--outline--ceb1e",onBlur:o?f:null,onKeyDown:o?h:null,children:[(0,l.jsx)("button",{ref:n,className:"outline-module--menubutton--935d0",id:t,onClick:x,"aria-controls":j,"aria-expanded":String(o),children:c}),(0,l.jsx)(i.X,{open:o,children:(0,l.jsx)("nav",{id:j,"aria-labelledby":t,children:(0,l.jsx)("menu",{className:"outline-module--menulist--4d9b0",ref:m,children:s})})})]})})),d=e=>(0,l.jsx)("li",{className:"outline-module--menuitem--4303b",children:(0,l.jsx)(c.A,{className:"outline-module--menulink--9e9ef",...e})}),o=e=>{let{children:n,content:t}=e;const i=(0,r.useRef)();return(0,r.useImperativeHandle)(s.rp,(()=>({focus(e){i.current.click()}})),[]),(0,l.jsx)(a,{id:"outline",ref:i,label:"Outline",children:n})}},2394:function(e,n,t){t.d(n,{v:function(){return m}});var r=t(4218),s=t(9422),i=t(7831),c=t(7158),l=t(8088),a=t(5893);const d=e=>{let{children:n,sidebar:t}=e;return(0,a.jsxs)("div",{className:"sidebar-layout-module--page--78026",children:[(0,a.jsx)("div",{className:"sidebar-layout-module--mainbar--3fedd",children:n}),(0,a.jsx)("div",{className:"sidebar-layout-module--sidebar--13a2a",children:t})]})};var o=t(6205),u=t(5460);const h=e=>{let{children:n}=e;return(0,a.jsx)("div",{className:"page-module--layout--995d4",children:n})},f=e=>{let{children:n,breadcrumbs:t}=e;return(0,a.jsxs)(a.Fragment,{children:[n,(0,a.jsx)(r.Z,{children:(0,a.jsx)(s.J,{heading:(0,a.jsx)(i.H2,{tabIndex:"-1",id:"breadcrumbs",children:"Breadcrumbs"}),children:t})}),(0,a.jsx)(r.Z,{children:(0,a.jsx)(c.A,{href:"#outline",children:"Outline"})})]})},m=e=>{let{children:n,heading:t,tableOfContents:s,subheading:i,notice:c,mainbar:m,sidebar:x,breadcrumbs:j}=e;return(0,a.jsxs)(l.Q,{children:[s,(0,a.jsx)(h,{children:(0,a.jsxs)(d,{sidebar:(0,a.jsx)(f,{breadcrumbs:j,children:x}),children:[(0,a.jsx)(r.Z,{children:(0,a.jsxs)("main",{"data-pagefind-body":"","aria-describedby":"content",children:[(0,a.jsxs)("header",{children:[(0,a.jsxs)(o.h,{children:[(0,a.jsx)(u.H1,{children:t}),i]}),c]}),n]})}),m]})})]})}},3370:function(e,n,t){t.d(n,{F:function(){return r}});const r=()=>" — "},3063:function(e,n,t){t.d(n,{L:function(){return s}});var r=t(5893);const s=e=>{let{children:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{role:"presentation",className:"l-module--l--a3082",children:n}),(0,r.jsx)("br",{})]})}},4950:function(e,n,t){t.d(n,{Lg:function(){return s}});var r=t(5893);const s=e=>{let{children:n,...t}=e;return(0,r.jsx)("p",{...t,className:"lg-module--lg--43936",children:n})}},6474:function(e,n,t){t.d(n,{Y:function(){return b}});var r=t(2980),s=t(7311),i=t(3274),c=t(5785);var l=e=>{let{author:n,date:t,description:r,url:s,title:i,category:l,people:a,tags:d,places:o}=e;return{og:{type:"article",article:{author:n.name,published_time:t,section:l,tag:[].concat((0,c.Z)(a),(0,c.Z)(d),(0,c.Z)(o))},profile:[n.name,{username:n.name}]}}},a=t(5893);const d=e=>{const n=l(e);return Array.from(function*(){for(const[e,t,r]of(0,i.Z)(n))yield(0,a.jsx)("meta",{property:t,content:r},e)}())},o=e=>{const{author:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("link",{rel:"author",href:n.url}),(0,a.jsx)("meta",{name:"author",content:n.name}),(0,a.jsx)(d,{...e})]})};var u=t(7585),h=t(6262),f=t(7294),m=t(285);const x=e=>{let{title:n,category:t,slug:r}=e;const s=(0,m.I)({category:[t]});return(0,f.useMemo)((()=>({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"/"},{"@type":"ListItem",position:2,name:t,item:s},{"@type":"ListItem",position:3,name:n,item:r}]})),[s,n,r,t])};const j=e=>{let{title:n,date:t,author:r,category:s,tags:i,people:c,places:l}=e;return{"@context":"https://schema.org","@type":"BlogPosting",headline:n,datePublished:t,author:[{"@type":"Person",name:r.name,url:r.url}],articleSection:s,keywords:i,character:c,contentLocation:l}};const p=e=>{let{post:n}=e;const{description:t,title:i,slug:c}=n,l=(0,h.L)(c),d=x(n),u=j(n);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.i,{description:t,title:i,url:l}),(0,a.jsx)(o,{...n}),(0,a.jsx)(s.h,{srcdoc:d}),(0,a.jsx)(s.h,{srcdoc:u})]})},g=e=>{let{post:n}=e;const t=(0,u.Z)(n.title);return(0,a.jsx)("title",{children:t})},b=e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g,{...e}),(0,a.jsx)(p,{...e})]})},3398:function(e,n,t){t.d(n,{s:function(){return F}});var r=t(4218),s=t(7294),i=t(5893);const c=e=>{let{children:n,heading:t,...r}=e;const c=(0,s.useId)();return(0,i.jsxs)("section",{"aria-labelledby":c,...r,children:[(0,i.jsx)("header",{id:c,children:(0,i.jsx)("hgroup",{children:t})}),n]})};var l=t(7831),a=t(5339),d=t(2394);const o=(0,s.lazy)((()=>Promise.all([t.e(532),t.e(53)]).then(t.bind(t,8548)))),u=e=>{let{host:n,id:t}=e;return(0,i.jsx)(s.Suspense,{fallback:"",children:(0,i.jsx)(o,{host:n,id:t})})};const h=e=>{let{children:n,...t}=e;return(0,i.jsx)("ul",{role:"list",className:"set-module--set--f6ff0",...t,children:n})},f=e=>{let{children:n,...t}=e;return(0,i.jsx)("li",{role:"listitem",className:"set-module--item--4a71b",...t,children:n})},m=e=>{let{notice:n}=e;const t=(0,s.useId)();return(0,i.jsxs)("div",{role:"presentation",children:[(0,i.jsx)("span",{id:t,children:"Notice"})," ",(0,i.jsx)(h,{"aria-labelledby":t,children:n.map((e=>(0,i.jsx)(f,{"aria-describedby":t,children:e},e)))})]})};var x=t(285),j=t(7158);const p=(e,n)=>{let{children:t,desc:r,href:c,...l}=e;const a=(0,s.useId)();return(0,i.jsxs)("div",{role:"presentation",className:"desc-module--wrapper--cf338",children:[(0,i.jsxs)(j.A,{"aria-describedby":a,href:c,...l,ref:n,children:[t,(0,i.jsx)("span",{className:"desc-module--clickTrap--f4db6","aria-hidden":"true"})]})," ",(0,i.jsx)("span",{className:"desc-module--label--d4f5a",id:a,children:r})]})},g=(0,s.forwardRef)(p);const b=(0,s.createContext)(null);b.displayName="Desc";const v=b.Provider,y=e=>{let{desc:n,children:t}=e;const r=(0,s.useId)();return(0,i.jsxs)("div",{role:"presentation",className:"metadata-module--dl--f3f92",children:[(0,i.jsx)("div",{className:"metadata-module--dt--cb11b",id:r,children:n}),(0,i.jsx)(h,{"aria-labelledby":r,children:(0,i.jsx)(v,{value:r,children:t})})]})},N=e=>{let{children:n,filter:t,item:r,...c}=e;const l=(0,s.useContext)(b),a=(0,x.I)({[t]:[r]});return(0,i.jsx)(f,{children:(0,i.jsx)(j.A,{href:a,"data-pagefind-filter":t,"aria-describedby":l,...c,children:n})})},k=e=>{let{dateDisplay:n,date:t,author:r,places:c,tags:l,people:a}=e;const d=(0,s.useId)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{role:"presentation",children:[(0,i.jsx)("span",{id:d,children:"Post Date"})," ",(0,i.jsx)("time",{className:"metadata-module--time--b02bf","aria-describedby":d,"data-pagefind-filter":"date[datetime]","data-pagefind-sort":"date[datetime]",dateTime:t,children:n})]}),(0,i.jsx)("address",{className:"metadata-module--address--e1f02",children:(0,i.jsx)(g,{rel:"author",href:r.url,desc:r.name,children:"Author"})}),c&&c.length>0&&(0,i.jsx)(y,{desc:"Place",children:c.map((e=>(0,i.jsx)(N,{filter:"place",rel:"tag",item:e,children:e},e)))}),l&&l.length>0&&(0,i.jsx)(y,{desc:"Tag",children:l.map((e=>(0,i.jsx)(N,{filter:"tag",rel:"tag",item:e,children:e},e)))}),a&&a.length>0&&(0,i.jsx)(y,{desc:"Person",children:a.map((e=>(0,i.jsx)(N,{filter:"person",rel:"tag",item:e,children:e},e)))})]})};var Z=t(7018),I=t(1554);const w=e=>{let{category:n,title:t}=e;const r=(0,x.I)({category:[n]});return(0,i.jsxs)(Z.J,{children:[(0,i.jsx)(Z.g,{children:(0,i.jsx)(j.A,{href:"/",children:"Home"})}),(0,i.jsx)(Z.g,{children:(0,i.jsx)(j.A,{rel:"tag",href:r,children:n})}),(0,i.jsx)(Z.g,{children:(0,i.jsx)(I.l,{"aria-current":"page",children:t})})]})};var A=e=>{let{previous:n,next:t}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:n&&(0,i.jsx)(g,{rel:"prev",href:n.slug,desc:(0,i.jsx)(I.l,{children:n.title}),children:"Previous"})}),(0,i.jsx)("div",{children:t&&(0,i.jsx)(g,{rel:"next",href:t.slug,desc:(0,i.jsx)(I.l,{children:t.title}),children:"Next"})})]})};const H=e=>{let{category:n,previous:t,next:r}=e;return[n,{previous:null==t?void 0:t.post,next:null==r?void 0:r.post}]},L=e=>{let{childrenLink:n}=e;const t=(e=>new Map(e.map(H)))(n);return(0,i.jsx)(A,{...t.get("")})};var M=t(9422),R=t(9046);const P=e=>{let{children:n,heading:t,...r}=e;const c=(0,s.useId)();return(0,i.jsxs)("footer",{"aria-labelledby":c,...r,children:[(0,i.jsx)(R.f,{children:(0,i.jsx)("hgroup",{id:c,children:t})}),n]})};const S=e=>{let{children:n,paging:t,metadata:s}=e;return(0,i.jsxs)(i.Fragment,{children:[n,(0,i.jsx)(r.Z,{children:(0,i.jsx)(M.J,{heading:(0,i.jsx)(l.H2,{tabIndex:"-1",id:"paging",children:"Paging"}),children:t})}),(0,i.jsx)(r.Z,{children:(0,i.jsx)(P,{heading:(0,i.jsx)(l.H2,{tabIndex:"-1",id:"metadata",children:"Metadata"}),children:s})})]})};const _=e=>{let{notice:n}=e;return n&&n.length>0&&(0,i.jsx)(m,{notice:n})},C=e=>{let{title:n,headings:t=[]}=e;return(0,i.jsxs)(a.b,{children:[(0,i.jsx)(a.A,{href:"#content",children:n}),t.map((e=>{let{url:n,title:t}=e;return(0,i.jsx)(a.A,{href:n,children:t},n)})),(0,i.jsx)(a.A,{href:"#paging",children:"Paging"}),(0,i.jsx)(a.A,{href:"#metadata",children:"Metadata"}),(0,i.jsx)(a.A,{href:"#breadcrumbs",children:"Breadcrumbs"})]})},F=e=>{let{post:n,headings:t,children:s}=e;const{comments:a,notice:o,category:h,subtitle:f,title:m,childrenLink:x}=n;return(0,i.jsx)(d.v,{heading:m,subheading:(0,i.jsx)("p",{style:{marginBlock:0},children:f}),notice:(0,i.jsx)(_,{notice:o}),tableOfContents:(0,i.jsx)(C,{title:m,headings:t}),breadcrumbs:(0,i.jsx)(w,{category:h,title:m}),sidebar:(0,i.jsx)(S,{paging:(0,i.jsx)(L,{childrenLink:x}),metadata:(0,i.jsx)(k,{...n})}),mainbar:a&&(0,i.jsx)(r.Z,{children:(0,i.jsx)(c,{heading:(0,i.jsx)(l.H2,{tabIndex:"-1",id:"comments",children:"Comments"}),children:(0,i.jsx)(u,{host:a.host,id:a.id})})}),children:s})}},285:function(e,n,t){t.d(n,{I:function(){return a}});var r=t(5785),s=t(7294),i=t(1883);const c="/search",l=function(e,n){return void 0===n&&(n=[]),n.map((n=>[e,n]))},a=e=>{const{s:n,category:t,tag:a,place:d,person:o}=null!=e?e:{};return(0,s.useMemo)((()=>{const e=[].concat((0,r.Z)(n?["s",n]:[]),(0,r.Z)(l("category",t)),(0,r.Z)(l("tag",a)),(0,r.Z)(l("place",d)),(0,r.Z)(l("person",o))),s=String(new URLSearchParams(e)),u=""===s?c:`${c}?${s}`;return(0,i.dq)(u)}),[n,t,a,d,o])}},7158:function(e,n,t){t.d(n,{A:function(){return o}});var r=t(7294),s=t(1883),i="a-module--a--8fe65",c=t(5893);const l=(0,r.lazy)((()=>t.e(547).then(t.bind(t,7995)))),a=(0,r.forwardRef)((function(e,n){return(0,c.jsx)(r.Suspense,{fallback:(0,c.jsx)("a",{...e,ref:n}),children:(0,c.jsx)(l,{...e,ref:n})})})),d=(0,r.forwardRef)((function(e,n){const t=(0,s.K2)("1271460761").site.siteMetadata.siteUrl,{href:r,target:i,download:l}=e,{origin:d,hash:o}=new URL(null!=r?r:"",t);return!r||d!==t||o||i||l?(0,c.jsx)("a",{...e,ref:n}):(0,c.jsx)(a,{...e,ref:n})})),o=(0,r.forwardRef)((function(e,n){var t;const r=[i,null!==(t=e.className)&&void 0!==t?t:""].join(" ");return(0,c.jsx)(d,{...e,className:r,ref:n})}))},7018:function(e,n,t){t.d(n,{g:function(){return i},J:function(){return s}});var r=t(5893);const s=e=>(0,r.jsx)("ol",{className:"breadcrumb-list-module--breadcrumblist--d89e2",...e}),i=e=>(0,r.jsx)("li",{className:"breadcrumb-list-module--breadcrumb--64b46",...e})},4218:function(e,n,t){t.d(n,{Z:function(){return i}});var r="card-module--card--729a6",s=t(5893);const i=e=>{var n;const t=[r,null!==(n=e.className)&&void 0!==n?n:""].join(" ");return(0,s.jsx)("div",{...e,className:t})}},1554:function(e,n,t){t.d(n,{l:function(){return s}});var r=t(5893);const s=e=>(0,r.jsx)("cite",{className:"cite-module--cite--80011",...e})},7831:function(e,n,t){t.d(n,{H1:function(){return l},H2:function(){return a},H3:function(){return d},H4:function(){return o},H5:function(){return u},H6:function(){return h}});var r=t(7294),s="heading-module--heading--5dd10",i=t(5893);const c=e=>{const n=String(e),t=(n,t)=>{var r;const c=[s,null!==(r=n.className)&&void 0!==r?r:""].join(" ");return(0,i.jsx)(e,{...n,className:c,ref:t})};return t.displayName=`createHeading(${n})`,(0,r.forwardRef)(t)},l=c("h1"),a=c("h2"),d=c("h3"),o=c("h4"),u=c("h5"),h=c("h6")},6205:function(e,n,t){t.d(n,{h:function(){return s}});var r=t(5893);const s=e=>(0,r.jsx)("hgroup",{className:"hgroup-module--hgroup--65970",...e})},9422:function(e,n,t){t.d(n,{J:function(){return l}});var r=t(7294),s=t(9046),i=t(6205),c=t(5893);const l=e=>{let{children:n,heading:t,...l}=e;const a=(0,r.useId)();return(0,c.jsxs)("nav",{"aria-labelledby":a,...l,children:[(0,c.jsx)(s.f,{children:(0,c.jsx)("header",{id:a,children:(0,c.jsx)(i.h,{children:t})})}),n]})}},2044:function(e,n,t){t.d(n,{X:function(){return l}});var r=t(7294),s=t(5893);const i=(0,r.lazy)((()=>t.e(894).then(t.bind(t,7894)))),c=e=>{let{open:n,...t}=e;return(0,s.jsx)("div",{...t})},l=e=>(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)(c,{...e}),children:(0,s.jsx)(i,{...e})})},8088:function(e,n,t){t.d(n,{Q:function(){return s}});var r=t(5893);const s=e=>{let{children:n}=e;return(0,r.jsx)("div",{className:"theme-module--theme--d14f8",children:n})}},9046:function(e,n,t){t.d(n,{f:function(){return s}});var r=t(5893);const s=e=>{let{children:n}=e;return(0,r.jsx)("div",{className:"assistive-module--sr--66d89",children:n})}},6262:function(e,n,t){t.d(n,{L:function(){return i}});var r=t(1883),s=t(7294);const i=e=>{const n=(0,r.K2)("1271460761");return(0,s.useMemo)((()=>{const t=n.site.siteMetadata;return String(new URL(e,t.siteUrl))}),[n,e])};n.Z=i},9622:function(e,n,t){var r=t(1883);n.Z=()=>(0,r.K2)("3000541721").site.siteMetadata},3274:function(e,n,t){const r=function*e(n,t,r){if("string"!=typeof r)if(Array.isArray(r)){let s=0;for(const i of r){for(const r of e(`${n}${s}`,t,i))yield r;++s}}else for(const[s,i]of Object.entries(r)){const r=t?`${t}:${s}`:s,c=t?`${n}:${s}`:s;for(const n of e(c,r,i))yield n}else yield[n,t,r]};n.Z=function*(e){for(const n of r(null,null,e))yield n}},2164:function(e,n,t){t.d(n,{k:function(){return r}});const r=" — "}}]);
//# sourceMappingURL=458cfeba326b9b568f21485cebf09745ec7c3e25-e9ca4468d618424999c0.js.map