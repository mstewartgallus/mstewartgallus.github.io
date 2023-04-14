"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[357],{3897:function(e,n,r){r.d(n,{Zo:function(){return c},ah:function(){return l}});var t=r(7294);const s=t.createContext({});function l(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c(e){let n,{components:r,children:c,disableParentContext:d}=e;return n=d?"function"==typeof r?r({}):r||i:l(r),t.createElement(s.Provider,{value:n},c)}},2872:function(e,n,r){r.d(n,{A:function(){return x}});var t=r(3476),s=r(3897),l=r(637),i=r(7158),c=r(7018),d=r(3200),a=r(6342),o=r(2394),u=r(3805),h=r(5893);const f=e=>{let{heading:n}=e;return(0,h.jsx)(d.b,{content:(0,h.jsx)(a.G,{href:"#content",children:n}),children:(0,h.jsx)(l.Ul,{children:(0,h.jsx)(l.Li,{children:(0,h.jsx)(i.A,{href:"#breadcrumbs",children:"Breadcrumbs"})})})})},m=()=>(0,t.useLocation)().pathname,x=e=>{var n,r;let{children:t,pageContext:l}=e;const d=null!==(n=null==l||null===(r=l.frontmatter)||void 0===r?void 0:r.title)&&void 0!==n?n:(0,h.jsx)(m,{});return(0,h.jsx)(o.v,{tableOfContents:(0,h.jsx)(f,{heading:d}),breadcrumbs:(0,h.jsxs)(c.J,{children:[(0,h.jsx)(c.g,{children:(0,h.jsx)(i.A,{href:"/",children:"Home"})}),(0,h.jsx)(c.g,{children:(0,h.jsx)("span",{"aria-current":"page",children:d})})]}),heading:d,children:(0,h.jsx)(s.Zo,{components:u.r,children:t})})}},3805:function(e,n,r){r.d(n,{r:function(){return y}});var t=r(637),s=r(359),l=r(7158),i=r(5893);const c=e=>(0,i.jsx)("blockquote",{className:"blockquote-module--blockquote--714d2",...e});const d=e=>(0,i.jsx)("code",{className:"code-module--code--44ad3",...e});const a=e=>(0,i.jsx)("hr",{className:"hr-module--hr--793bf",...e});var o=r(6205),u=r(7831);const h=e=>{const n=e.displayName||e.name||"Component",r=n=>{let{id:r,children:t,tabIndex:s="-1",...c}=n;const d=r&&`#${r}`;return(0,i.jsxs)("header",{className:"heading-module--heading--888aa",children:[(0,i.jsx)(o.h,{children:(0,i.jsx)(e,{...c,id:r,tabIndex:s,children:t})}),d&&(0,i.jsx)(l.A,{className:"heading-module--autolink--16bd8",href:d,"aria-describedby":r,children:"#"})]})};return r.displayName=`createAutoLink(${n})`,r},f=u.H1,m=h(u.H2),x=h(u.H3),j=h(u.H4),b=h(u.H5),v=h(u.H6);var p=r(7294),N="pre-module--pre--1612a";const g=e=>{var n;const r=[N,null!==(n=e.className)&&void 0!==n?n:""].join(" ");return(0,i.jsx)("pre",{...e,className:r})};const k=e=>{let{children:n,id:r,title:t}=e;const s=(0,p.useRef)(),c=(0,p.useId)(),d=`${c}-caption`,a=`${c}-focus`;return(0,i.jsxs)("figure",{id:r,ref:s,className:"pre-module--figure--43fd3",children:[(0,i.jsx)("figcaption",{id:d,className:"pre-module--figcaption--b1a13",children:(0,i.jsx)("span",{className:"pre-module--title--46c65",children:t})}),(0,i.jsx)(l.A,{id:a,className:"pre-module--autolink--08ec9",href:`#${r}`,"aria-describedby":d,children:"Focus"}),(0,i.jsx)(g,{children:n})]})};const y={...{h1:f,h2:m,h3:x,h4:j,h5:b,h6:v},...{ul:t.Ul,ol:t.Ol,menu:t.v,li:t.Li,p:s.P,a:l.A,blockquote:c,code:d,pre:k,hr:a}}},5460:function(e,n,r){r.d(n,{H1:function(){return c}});var t=r(7294),s=r(7831),l=r(5893);const i=(e,n)=>{var r,t;return(0,l.jsx)(s.H1,{...e,id:null!==(r=e.id)&&void 0!==r?r:"content",tabIndex:null!==(t=e.tabIndex)&&void 0!==t?t:"-1",ref:n})},c=(0,t.forwardRef)(i)},3200:function(e,n,r){r.d(n,{b:function(){return a}});var t={};r.r(t),r.d(t,{K:function(){return i},S:function(){return c}});var s=r(7294),l=r(1995),i="outline-module--outline--07930",c="outline-module--summary--2046f",d=r(5893);const a=e=>{let{children:n,content:r}=e;const{0:a,1:o}=(0,s.useState)(!1),{1:u}=(0,s.useTransition)(),h=(0,s.useCallback)((e=>{e.preventDefault(),u((()=>o((e=>!e))))}),[]),f=(0,s.useCallback)((e=>{"Escape"===e.key&&(e.preventDefault(),u((()=>o(!1))))}),[]),m=(0,s.useCallback)((e=>{const{relatedTarget:n,currentTarget:r}=e;r.contains(n)||u((()=>o(!1)))}),[]),x=(0,s.useId)(),j=`${x}-button`,b=`${x}-nav`;return(0,d.jsxs)("div",{className:i,onBlur:m,onKeyDown:f,children:[(0,d.jsxs)("div",{className:t.header,children:[r,(0,d.jsx)("div",{className:c,children:(0,d.jsx)(l.r,{id:j,onClick:h,open:a,"aria-controls":b,children:"Outline"})})]}),(0,d.jsx)("nav",{id:b,hidden:a?null:"hidden","aria-labelledby":j,children:n})]})}},6342:function(e,n,r){r.d(n,{G:function(){return i}});var t=r(6960),s=r(7158),l=r(5893);const i=e=>(0,l.jsx)(s.A,{id:"skip-link",ref:t.rp,className:"skip-a-module--skipLink--1da34",...e})},2394:function(e,n,r){r.d(n,{v:function(){return m}});var t=r(4218),s=r(9422),l=r(7831),i=r(7158),c=r(8088),d=r(5893);const a=e=>{let{children:n,sidebar:r}=e;return(0,d.jsxs)("div",{className:"sidebar-layout-module--page--78026",children:[(0,d.jsx)("div",{className:"sidebar-layout-module--mainbar--3fedd",children:n}),(0,d.jsx)("div",{className:"sidebar-layout-module--sidebar--13a2a",children:r})]})};var o=r(6205),u=r(5460);const h=e=>{let{children:n}=e;return(0,d.jsx)("div",{className:"page-module--layout--995d4",children:n})},f=e=>{let{children:n,breadcrumbs:r}=e;return(0,d.jsxs)(d.Fragment,{children:[n,(0,d.jsx)(t.Z,{children:(0,d.jsx)(s.J,{heading:(0,d.jsx)(l.H2,{tabIndex:"-1",id:"breadcrumbs",children:"Breadcrumbs"}),children:r})}),(0,d.jsx)(t.Z,{children:(0,d.jsx)(i.A,{href:"#skip-link",children:"Outline"})})]})},m=e=>{let{children:n,heading:r,tableOfContents:s,subheading:l,notice:i,mainbar:m,sidebar:x,breadcrumbs:j}=e;return(0,d.jsxs)(c.Q,{children:[s,(0,d.jsx)(h,{children:(0,d.jsxs)(a,{sidebar:(0,d.jsx)(f,{breadcrumbs:j,children:x}),children:[(0,d.jsx)(t.Z,{children:(0,d.jsxs)("main",{"data-pagefind-body":"","aria-describedby":"content",children:[(0,d.jsxs)("header",{children:[(0,d.jsxs)(o.h,{children:[(0,d.jsx)(u.H1,{children:r}),l]}),i]}),n]})}),m]})})]})}},7158:function(e,n,r){r.d(n,{A:function(){return o}});var t=r(7294),s=r(1883),l="a-module--a--8fe65",i=r(5893);const c=(0,t.lazy)((()=>r.e(547).then(r.bind(r,7995)))),d=(0,t.forwardRef)((function(e,n){return(0,i.jsx)(t.Suspense,{fallback:(0,i.jsx)("a",{...e,ref:n}),children:(0,i.jsx)(c,{...e,ref:n})})})),a=(0,t.forwardRef)((function(e,n){const r=(0,s.K2)("1271460761").site.siteMetadata.siteUrl,{href:t,target:l,download:c}=e,{origin:a,hash:o}=new URL(null!=t?t:"",r);return!t||a!==r||o||l||c?(0,i.jsx)("a",{...e,ref:n}):(0,i.jsx)(d,{...e,ref:n})})),o=(0,t.forwardRef)((function(e,n){var r;const t=[l,null!==(r=e.className)&&void 0!==r?r:""].join(" ");return(0,i.jsx)(a,{...e,className:t,ref:n})}))},7018:function(e,n,r){r.d(n,{g:function(){return l},J:function(){return s}});var t=r(5893);const s=e=>(0,t.jsx)("ol",{className:"breadcrumb-list-module--breadcrumblist--d89e2",...e}),l=e=>(0,t.jsx)("li",{className:"breadcrumb-list-module--breadcrumb--64b46",...e})},9860:function(e,n,r){r.d(n,{z:function(){return c}});var t=r(7294),s="button-module--button--355dd",l=r(5893);const i=(e,n)=>{var r;const t=[s,null!==(r=e.className)&&void 0!==r?r:""].join(" ");return(0,l.jsx)("button",{...e,ref:n,className:t})},c=(0,t.forwardRef)(i)},4218:function(e,n,r){r.d(n,{Z:function(){return l}});var t="card-module--card--729a6",s=r(5893);const l=e=>{var n;const r=[t,null!==(n=e.className)&&void 0!==n?n:""].join(" ");return(0,s.jsx)("div",{...e,className:r})}},7831:function(e,n,r){r.d(n,{H1:function(){return c},H2:function(){return d},H3:function(){return a},H4:function(){return o},H5:function(){return u},H6:function(){return h}});var t=r(7294),s="heading-module--heading--5dd10",l=r(5893);const i=e=>{const n=String(e),r=(n,r)=>{var t;const i=[s,null!==(t=n.className)&&void 0!==t?t:""].join(" ");return(0,l.jsx)(e,{...n,className:i,ref:r})};return r.displayName=`createHeading(${n})`,(0,t.forwardRef)(r)},c=i("h1"),d=i("h2"),a=i("h3"),o=i("h4"),u=i("h5"),h=i("h6")},6205:function(e,n,r){r.d(n,{h:function(){return s}});var t=r(5893);const s=e=>(0,t.jsx)("hgroup",{className:"hgroup-module--hgroup--65970",...e})},637:function(e,n,r){r.d(n,{Li:function(){return o},v:function(){return a},Ol:function(){return c},Ul:function(){return d}});var t=r(7294),s="list-module--unorderedList--1a29f",l=r(5893);const i=(0,t.createContext)(null),c=e=>{let{children:n,reversed:r,...t}=e;return(0,l.jsx)("ol",{role:"list",className:"list-module--orderedList--d8f82",reversed:r,...t,children:(0,l.jsx)(i.Provider,{value:r?"rol":"ol",children:n})})},d=e=>{let{children:n,...r}=e;return(0,l.jsx)("ul",{role:"list",className:s,...r,children:(0,l.jsx)(i.Provider,{value:"ul",children:n})})},a=e=>{let{children:n,...r}=e;return(0,l.jsx)("menu",{role:"list",className:s,...r,children:(0,l.jsx)(i.Provider,{value:"ul",children:n})})},o=e=>{let{children:n,...r}=e;const s={ul:"list-module--uitem--63afd",ol:"list-module--oitem--9c6ac",rol:"list-module--roitem--a048a"}[(0,t.useContext)(i)];return(0,l.jsx)("li",{role:"listitem",className:s,...r,children:(0,l.jsx)("div",{className:"list-module--content--5f318",children:n})})}},9422:function(e,n,r){r.d(n,{J:function(){return c}});var t=r(7294),s=r(9046),l=r(6205),i=r(5893);const c=e=>{let{children:n,heading:r,...c}=e;const d=(0,t.useId)();return(0,i.jsxs)("nav",{"aria-labelledby":d,...c,children:[(0,i.jsx)(s.f,{children:(0,i.jsx)("header",{id:d,children:(0,i.jsx)(l.h,{children:r})})}),n]})}},359:function(e,n,r){r.d(n,{P:function(){return s}});var t=r(5893);const s=e=>(0,t.jsx)("p",{className:"p-module--p--1f3a4",...e})},1995:function(e,n,r){r.d(n,{r:function(){return i}});var t=r(9860),s=r(5893);const l=e=>{let{children:n,open:r}=e;return(0,s.jsx)("span",{className:r?"icon-module--open--cef9c":"icon-module--close--f3e52",children:n})};const i=e=>{let{children:n,open:r,...i}=e;return(0,s.jsx)(t.z,{type:"button","aria-expanded":String(r),...i,children:(0,s.jsx)(l,{open:r,children:n})})}},8088:function(e,n,r){r.d(n,{Q:function(){return s}});var t=r(5893);const s=e=>{let{children:n}=e;return(0,t.jsx)("div",{className:"theme-module--theme--d14f8",children:n})}},9046:function(e,n,r){r.d(n,{f:function(){return s}});var t=r(5893);const s=e=>{let{children:n}=e;return(0,t.jsx)("div",{className:"assistive-module--sr--66d89",children:n})}}}]);
//# sourceMappingURL=a245a3aae1853b7629f428379bb220d785018d4c-fdf5321d50deb51751e0.js.map