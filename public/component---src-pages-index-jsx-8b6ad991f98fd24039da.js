"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[230],{7311:function(e,r,t){var n=t(7294),s=t(5893);r.Z=e=>{let{srcdoc:r}=e;const t=(0,n.useMemo)((()=>JSON.stringify(r)),[r]);return(0,s.jsx)("script",{type:"application/ld+json",children:t})}},2980:function(e,r,t){t.d(r,{Z:function(){return a}});var n=t(3274),s=t(9622),i=t(7294);var c=e=>{let{description:r,url:t,title:n}=e;const c=(0,s.Z)();return(0,i.useMemo)((()=>({og:{site_name:c.title,title:n,description:null!=r?r:c.description,url:t}})),[c,r,t,n])},o=t(5893);const l=e=>{const r=c(e);return Array.from(function*(){for(const[e,t,s]of(0,n.Z)(r))yield(0,o.jsx)("meta",{property:t,content:s},e)}())};var a=e=>{const{description:r,url:t}=e,n=(0,s.Z)();return(0,o.jsxs)(o.Fragment,{children:[t&&(0,o.jsx)("link",{rel:"canonical",href:t}),(0,o.jsx)("meta",{name:"description",content:null!=r?r:n.description}),(0,o.jsx)(l,{...e})]})}},7585:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(7294),s=t(4160),i=t(2164);const c=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];const c=(0,s.K2)("3159585216");return(0,n.useMemo)((()=>{const{title:e}=c.site.siteMetadata;return[...r,e].join(i.k)}),[c,r])}},5929:function(e,r,t){t.d(r,{o:function(){return c}});var n=t(7294),s=t(5893);const i=(e,r)=>{let{children:t,...n}=e;return(0,s.jsx)("search",{ref:r,role:"search",...n,children:t})},c=(0,n.forwardRef)(i)},285:function(e,r,t){t.d(r,{I:function(){return o}});var n=t(7294),s=t(4160);const i="/search",c=function(e,r){return void 0===r&&(r=[]),r.map((r=>[e,r]))},o=e=>{const{s:r,category:t,tag:o,place:l,person:a}=null!=e?e:{};return(0,n.useMemo)((()=>{const e=[...r?["s",r]:[],...c("category",t),...c("tag",o),...c("place",l),...c("person",a)],n=String(new URLSearchParams(e)),d=""===n?i:i+"?"+n;return(0,s.dq)(d)}),[r,t,o,l,a])}},9750:function(e,r,t){t.d(r,{g:function(){return i},J:function(){return s}});var n=t(5893);const s=e=>{let{children:r,...t}=e;return(0,n.jsx)("ol",{className:"breadcrumb-list-module--breadcrumblist--d89e2",...t,children:r})},i=e=>{let{children:r,...t}=e;return(0,n.jsx)("li",{className:"breadcrumb-list-module--breadcrumb--64b46",...t,children:r})}},4457:function(e,r,t){t.d(r,{z:function(){return o}});var n=t(7294),s=t(5064),i=t(5893);const c=(e,r)=>{let{children:t,id:n,className:c="",...o}=e;return(0,s.ae)()&&(n=null),(0,i.jsx)("button",{id:n,className:"button-module--button--355dd "+c,ref:r,...o,children:t})},o=(0,n.forwardRef)(c)},1111:function(e,r,t){t.d(r,{I:function(){return c}});var n=t(7294),s=t(5893);const i=(e,r)=>{let{children:t,...n}=e;return(0,s.jsx)("input",{className:"input-module--input--4ad14",ref:r,...n,children:t})},c=(0,n.forwardRef)(i)},6262:function(e,r,t){var n=t(4160),s=t(7294);r.Z=e=>{const r=(0,n.K2)("1271460761");return(0,s.useMemo)((()=>{const t=r.site.siteMetadata;return String(new URL(e,t.siteUrl))}),[r,e])}},9622:function(e,r,t){var n=t(4160);r.Z=()=>(0,n.K2)("3000541721").site.siteMetadata},4194:function(e,r,t){t.d(r,{q:function(){return c}});var n=t(7294),s=t(4160),i=t(48);const c=()=>(0,n.useCallback)((async e=>{var r,t,n,c;if((0,i.XK)())return;const o=e.nativeEvent,l=e.target,a=o.submitter;let d=a.getAttribute("formaction"),u=a.getAttribute("formenctype"),h=a.getAttribute("formmethod"),f=a.getAttribute("formtarget");if(null!==(r=d)&&void 0!==r||(d=l.getAttribute("action")),null!==(t=u)&&void 0!==t||(u=l.getAttribute("enctype")),null!==(n=h)&&void 0!==n||(h=l.method),null!==(c=f)&&void 0!==c||(f=l.getAttribute("target")),null!==u)return;if("get"!==h)return;if(null!==f)return;e.preventDefault();const x=d+"?"+new URLSearchParams(new FormData(l));await(0,s.c4)(x)}),[]);r.Z=c},1393:function(e,r,t){t.r(r),t.d(r,{Head:function(){return V},default:function(){return Y}});var n=t(7896),s=t(7294);const i=()=>{const{1:e}=(0,s.useTransition)(),{0:r,1:t}=(0,s.useState)(!1);return(0,s.useEffect)((()=>e((()=>t(!0)))),[]),r};var c=t(7042),o=t(6077),l=t(5893);const a=e=>{let{id:r,children:t,heading:n}=e;return(0,l.jsxs)("nav",{"aria-labelledby":r,children:[(0,l.jsx)("header",{children:(0,l.jsx)("hgroup",{children:(0,l.jsx)(o.H2,{id:r,children:n})})}),t]})};const d=(0,s.lazy)((()=>Promise.all([t.e(532),t.e(23)]).then(t.bind(t,9023)))),u=(0,s.createContext)(null);u.displayName="Accordion";const h=(0,s.memo)(u.Provider),f=e=>{let{children:r,value:t}=e;return(0,l.jsx)("div",{children:(0,l.jsx)(h,{value:t,children:r})})},x=e=>{let{id:r,children:t,heading:n,open:s,onClick:c}=e;return i()?(0,l.jsx)(d,{id:r,heading:n,open:s,onClick:c,children:t}):(0,l.jsx)(a,{id:r,heading:n,children:t})},j=e=>{let{id:r,children:t,heading:n,value:i,onClick:o}=e;const a=(0,s.useContext)(u)===i;return(0,l.jsx)(c.Z,{children:(0,l.jsx)(x,{id:r,heading:n,open:a,onClick:o,children:t})})};var m=t(1250),p=t(7410);const b=e=>{let{href:r,children:t}=e;return(0,l.jsx)(m.Li,{children:(0,l.jsx)(p.A,{href:r,children:t})})},g=e=>{let{children:r}=e;return(0,l.jsx)(m.Ol,{reversed:"reversed",children:r})},y=e=>{let{posts:r}=e;return r.map((e=>{let{slug:r,title:t}=e;return(0,l.jsx)(b,{href:r,children:t},r)}))},v=e=>{let{posts:r}=e;return r&&r.length>0&&(0,l.jsx)(g,{children:(0,l.jsx)(y,{posts:r})})};var k=t(6262),A=t(9622);const Z=()=>{const e=(0,A.Z)(),r=(0,k.Z)("/search"),t=(0,k.Z)("/");return(0,s.useMemo)((()=>({"@context":"https://schema.org","@type":"WebSite",name:e.title,description:e.description,url:t,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:r+"?s={s}"},"query-input":"required name=s"}})),[e,r,t])};var C=t(4160);const S=()=>{const e=(0,C.K2)("2796747441");return(0,s.useMemo)((()=>e.allLink.nodes.map((e=>e.post))),[e])};const w=()=>{const e=(0,C.K2)("2477755614");return(0,s.useMemo)((()=>Object.fromEntries(e.allLink.group.map((e=>{let{category:r,nodes:t}=e;return[r,t.map((e=>e.post))]})))),[e])};var L=t(2729),M=t(5929),_=t(5725);const R=e=>{let{children:r,search:t}=e;return(0,l.jsxs)(l.Fragment,{children:[r,(0,l.jsx)(c.Z,{children:(0,l.jsxs)(M.o,{"aria-describedby":"search",children:[(0,l.jsx)(L.f,{children:(0,l.jsx)("header",{children:(0,l.jsx)(_.h,{children:(0,l.jsx)(o.H2,{id:"search",children:"Search"})})})}),t]})})]})};const N=()=>(0,l.jsxs)(m.Ul,{children:[(0,l.jsx)(m.Li,{children:(0,l.jsx)(p.A,{download:"feed.xml",rel:"alternate",href:"/feed.xml",children:"Subscribe (RSS)"})}),(0,l.jsx)(m.Li,{children:(0,l.jsx)(p.A,{rel:"author",href:"/about",children:"About the Author"})}),(0,l.jsx)(m.Li,{children:(0,l.jsx)(p.A,{href:"/README",children:"About this Blog"})}),(0,l.jsx)(m.Li,{children:(0,l.jsx)(p.A,{rel:"nofollow",href:"/404",children:"Test 404 Page"})})]});var P=t(285),q=t(1111),F=t(4457);const O=e=>{let{action:r,onSubmit:t}=e;const n=(0,s.useId)();return(0,l.jsx)("form",{rel:"search",action:r,onSubmit:t,children:(0,l.jsxs)("fieldset",{className:"search-form-module--query--910f7",children:[(0,l.jsx)("label",{htmlFor:n,children:"Query"}),(0,l.jsx)(q.I,{id:n,name:"s",type:"search",required:!0}),(0,l.jsx)(F.z,{type:"submit",children:"Search"})]})})};const E=e=>{let{children:r,heading:t,...n}=e;const i=(0,s.useId)();return(0,l.jsxs)("header",{"aria-describedby":i,...n,children:[(0,l.jsx)(_.h,{id:i,children:t}),r]})};var I=t(9750),K=t(7798),U=t(1091),H=t(7311),T=t(2980),z=t(7585),B=t(4194);const D=(e,r)=>{const{type:t}=r;if("toggle"===t){const{category:t}=r;return e===t?null:t}return e},J=e=>{let{posts:r,onClick:t}=e;return(0,s.useMemo)((()=>Object.entries(r).map((e=>{let[r,n]=e;return[r,{posts:n,onClick(e){t(r,e)}}]}))),[r,t]).map((e=>{let[r,{posts:t,onClick:n}]=e;return(0,l.jsx)(j,{value:r,id:r,heading:r,onClick:n,children:(0,l.jsx)(v,{posts:t})},r)}))},G=e=>{let{posts:r}=e;const{0:t,1:n}=(0,s.useReducer)(D,null),i=(0,s.useCallback)(((e,r)=>{n({type:"toggle",category:e})}),[]);return(0,l.jsx)(f,{value:t,children:(0,l.jsx)(J,{posts:r,onClick:i})})},Q="Table of Contents",W=()=>{const{pathname:e}=(0,n.useLocation)(),r=(0,k.Z)(e);return(0,l.jsx)(T.Z,{title:Q,url:r})},X=e=>{let{posts:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(K.G,{"aria-describedby":"content",href:"#content",children:"Posts"}),(0,l.jsxs)(m.Ul,{children:[r.map((e=>(0,l.jsx)(m.Li,{children:(0,l.jsx)(p.A,{href:"#"+e,children:e})},e))),(0,l.jsx)(m.Li,{children:(0,l.jsx)(p.A,{href:"#banner","aria-describedby":"banner",children:"Common"})}),(0,l.jsx)(m.Li,{children:(0,l.jsx)(p.A,{href:"#search",children:"Search"})}),(0,l.jsx)(m.Li,{children:(0,l.jsx)(p.A,{href:"#breadcrumbs",children:"Breadcrumbs"})})]})]})},V=()=>{const e=Z(),r=(0,z.Z)(Q);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("title",{children:r}),(0,l.jsx)("link",{type:"application/atom+xml",rel:"alternate",href:"/feed.xml"}),(0,l.jsx)(W,{}),(0,l.jsx)(H.Z,{srcdoc:e})]})};var Y=()=>{const e=S(),{title:r,description:t}=(0,A.Z)(),n=(0,B.q)(),s=(0,P.I)(),i=w();return(0,l.jsx)(U.v,{tableOfContents:(0,l.jsx)(X,{posts:Object.keys(i)}),sidebar:(0,l.jsx)(R,{search:(0,l.jsx)(O,{action:s,onSubmit:n}),children:(0,l.jsx)(c.Z,{children:(0,l.jsx)(E,{heading:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.H2,{id:"banner",children:r}),(0,l.jsx)("p",{style:{marginBlock:0},children:t})]}),children:(0,l.jsx)(N,{})})})}),breadcrumbs:(0,l.jsx)(I.J,{children:(0,l.jsx)(I.g,{children:(0,l.jsx)("span",{"aria-current":"page",children:"Home"})})}),mainbar:(0,l.jsx)(G,{posts:i}),heading:"Posts",children:(0,l.jsx)(v,{posts:e})})}},3274:function(e,r,t){const n=function*e(r,t,n){if("string"!=typeof n)if(Array.isArray(n)){let s=0;for(const i of n){for(const n of e(""+r+s,t,i))yield n;++s}}else for(const[s,i]of Object.entries(n)){const n=t?t+":"+s:s,c=t?r+":"+s:s;for(const r of e(c,n,i))yield r}else yield[r,t,n]};r.Z=function*(e){for(const r of n(null,null,e))yield r}},2164:function(e,r,t){t.d(r,{k:function(){return n}});const n=" — "}}]);
//# sourceMappingURL=component---src-pages-index-jsx-8b6ad991f98fd24039da.js.map