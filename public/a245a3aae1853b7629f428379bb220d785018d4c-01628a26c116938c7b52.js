"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[357],{3897:function(e,n,r){r.d(n,{Zo:function(){return i},ah:function(){return l}});var t=r(7294);const s=t.createContext({});function l(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i(e){let n,{components:r,children:i,disableParentContext:a}=e;return n=a?"function"==typeof r?r({}):r||c:l(r),t.createElement(s.Provider,{value:n},i)}},2872:function(e,n,r){r.d(n,{A:function(){return h}});var t=r(3476),s=r(3897),l=r(7018),c=r(7158),i=r(5339),a=r(2394),d=r(3805),o=r(5893);const u=e=>{let{heading:n}=e;return(0,o.jsxs)(i.b,{children:[(0,o.jsx)(i.A,{href:"#content",children:n}),(0,o.jsx)(i.A,{href:"#breadcrumbs",children:"Breadcrumbs"})]})},f=()=>(0,t.useLocation)().pathname,h=e=>{var n,r;let{children:t,pageContext:i}=e;const h=null!==(n=null==i||null===(r=i.frontmatter)||void 0===r?void 0:r.title)&&void 0!==n?n:(0,o.jsx)(f,{});return(0,o.jsx)(a.v,{tableOfContents:(0,o.jsx)(u,{heading:h}),breadcrumbs:(0,o.jsxs)(l.J,{children:[(0,o.jsx)(l.g,{children:(0,o.jsx)(c.A,{href:"/",children:"Home"})}),(0,o.jsx)(l.g,{children:(0,o.jsx)("span",{"aria-current":"page",children:h})})]}),heading:h,children:(0,o.jsx)(s.Zo,{components:d.r,children:t})})}},3805:function(e,n,r){r.d(n,{r:function(){return y}});var t=r(637),s=r(359),l=r(7158),c=r(5893);const i=e=>(0,c.jsx)("blockquote",{className:"blockquote-module--blockquote--714d2",...e});const a=e=>(0,c.jsx)("code",{className:"code-module--code--44ad3",...e});const d=e=>(0,c.jsx)("hr",{className:"hr-module--hr--793bf",...e});var o=r(6205),u=r(7831);const f=e=>{const n=e.displayName||e.name||"Component",r=n=>{let{id:r,children:t,tabIndex:s="-1",...i}=n;const a=r&&`#${r}`;return(0,c.jsxs)("header",{className:"heading-module--heading--888aa",children:[(0,c.jsx)(o.h,{children:(0,c.jsx)(e,{...i,id:r,tabIndex:s,children:t})}),a&&(0,c.jsx)(l.A,{className:"heading-module--autolink--16bd8",href:a,"aria-describedby":r,children:"#"})]})};return r.displayName=`createAutoLink(${n})`,r},h=u.H1,m=f(u.H2),x=f(u.H3),j=f(u.H4),b=f(u.H5),v=f(u.H6);var p=r(7294),N="pre-module--pre--1612a";const g=e=>{var n;const r=[N,null!==(n=e.className)&&void 0!==n?n:""].join(" ");return(0,c.jsx)("pre",{...e,className:r})};const k=e=>{let{children:n,id:r,title:t}=e;const s=(0,p.useRef)(),i=(0,p.useId)(),a=`${i}-caption`,d=`${i}-focus`;return(0,c.jsxs)("figure",{id:r,ref:s,className:"pre-module--figure--43fd3",children:[(0,c.jsx)("figcaption",{id:a,className:"pre-module--figcaption--b1a13",children:(0,c.jsx)("span",{className:"pre-module--title--46c65",children:t})}),(0,c.jsx)(l.A,{id:d,className:"pre-module--autolink--08ec9",href:`#${r}`,"aria-describedby":a,children:"Focus"}),(0,c.jsx)(g,{children:n})]})};const y={...{h1:h,h2:m,h3:x,h4:j,h5:b,h6:v},...{ul:t.Ul,ol:t.Ol,menu:t.v,li:t.Li,p:s.P,a:l.A,blockquote:i,code:a,pre:k,hr:d}}},5460:function(e,n,r){r.d(n,{H1:function(){return i}});var t=r(7294),s=r(7831),l=r(5893);const c=(e,n)=>{var r,t;return(0,l.jsx)(s.H1,{...e,id:null!==(r=e.id)&&void 0!==r?r:"content",tabIndex:null!==(t=e.tabIndex)&&void 0!==t?t:"-1",ref:n})},i=(0,t.forwardRef)(c)},5339:function(e,n,r){r.d(n,{b:function(){return h},A:function(){return f}});var t=r(7294),s=r(6960),l=r(2044),c=r(7158),i=r(5893);const a=(e,n)=>{switch(n){case"escape":return"escaped";case"blur":return"closed";case"toggle":switch(e){case"escaped":case"closed":return"open";default:return"escaped"}default:return e}},d=(0,t.createContext)();d.displayName="Item";const o=(0,t.createContext)();o.displayName="Selected";const u=(0,t.forwardRef)((function(e,n){let{id:r,children:s,label:c}=e;const u=(0,t.useRef)(),{0:f,1:h}=(0,t.useReducer)(a,"closed"),m=(0,t.useDeferredValue)(f),x=(0,t.useCallback)((e=>{"Escape"===e.key&&(e.preventDefault(),h("escape"))}),[]);(0,t.useEffect)((()=>{"escaped"===m&&u.current.focus({preventScroll:!0,focusVisible:!0})}),[m]);const j=(0,t.useCallback)((e=>{const{relatedTarget:n,currentTarget:r}=e;r.contains(n)||h("blur")}),[]),b=(0,t.useRef)(),v=(0,t.useCallback)((e=>{h("toggle")}),[]),p=(0,t.useId)(),N="open"===f;return(0,i.jsxs)("div",{className:"outline-module--outline--ceb1e",onBlur:N?j:null,onKeyDown:N?x:null,children:[(0,i.jsx)("button",{ref:e=>{u.current=e,n&&(n.current=e)},className:"outline-module--menubutton--935d0",id:r,onClick:v,"aria-controls":p,"aria-expanded":String(N),children:c}),(0,i.jsx)(l.X,{open:N,children:(0,i.jsx)("nav",{id:p,"aria-labelledby":r,children:(0,i.jsx)("menu",{role:"list",className:"outline-module--menulist--4d9b0",ref:b,children:(0,i.jsx)(o.Provider,{value:N?0:-1,children:t.Children.map(s,((e,n)=>(0,i.jsx)(d.Provider,{value:n,children:e})))})})})})]})})),f=e=>{const n=(0,t.useContext)(d)===(0,t.useContext)(o),r=(0,t.useRef)(),s=(0,t.useDeferredValue)(n);return(0,t.useEffect)((()=>{if(!s)return;const{current:e}=r;e.focus({preventScroll:!0,focusVisible:!0})}),[s]),(0,i.jsx)("li",{role:"listitem",className:"outline-module--menuitem--4303b",children:(0,i.jsx)(c.A,{className:"outline-module--menulink--9e9ef",...e,ref:r})})},h=e=>{let{children:n,content:r}=e;const l=(0,t.useRef)();return(0,t.useImperativeHandle)(s.rp,(()=>({focus(e){l.current.click()}})),[]),(0,i.jsx)(u,{id:"outline",ref:l,label:"Outline",children:n})}},2394:function(e,n,r){r.d(n,{v:function(){return m}});var t=r(4218),s=r(9422),l=r(7831),c=r(7158),i=r(8088),a=r(5893);const d=e=>{let{children:n,sidebar:r}=e;return(0,a.jsxs)("div",{className:"sidebar-layout-module--page--78026",children:[(0,a.jsx)("div",{className:"sidebar-layout-module--mainbar--3fedd",children:n}),(0,a.jsx)("div",{className:"sidebar-layout-module--sidebar--13a2a",children:r})]})};var o=r(6205),u=r(5460);const f=e=>{let{children:n}=e;return(0,a.jsx)("div",{className:"page-module--layout--995d4",children:n})},h=e=>{let{children:n,breadcrumbs:r}=e;return(0,a.jsxs)(a.Fragment,{children:[n,(0,a.jsx)(t.Z,{children:(0,a.jsx)(s.J,{heading:(0,a.jsx)(l.H2,{tabIndex:"-1",id:"breadcrumbs",children:"Breadcrumbs"}),children:r})}),(0,a.jsx)(t.Z,{children:(0,a.jsx)(c.A,{href:"#outline",children:"Outline"})})]})},m=e=>{let{children:n,heading:r,tableOfContents:s,subheading:l,notice:c,mainbar:m,sidebar:x,breadcrumbs:j}=e;return(0,a.jsxs)(i.Q,{children:[s,(0,a.jsx)(f,{children:(0,a.jsxs)(d,{sidebar:(0,a.jsx)(h,{breadcrumbs:j,children:x}),children:[(0,a.jsx)(t.Z,{children:(0,a.jsxs)("main",{"data-pagefind-body":"","aria-describedby":"content",children:[(0,a.jsxs)("header",{children:[(0,a.jsxs)(o.h,{children:[(0,a.jsx)(u.H1,{children:r}),l]}),c]}),n]})}),m]})})]})}},7158:function(e,n,r){r.d(n,{A:function(){return o}});var t=r(7294),s=r(1883),l="a-module--a--8fe65",c=r(5893);const i=(0,t.lazy)((()=>r.e(547).then(r.bind(r,7995)))),a=(0,t.forwardRef)((function(e,n){return(0,c.jsx)(t.Suspense,{fallback:(0,c.jsx)("a",{...e,ref:n}),children:(0,c.jsx)(i,{...e,ref:n})})})),d=(0,t.forwardRef)((function(e,n){const r=(0,s.K2)("1271460761").site.siteMetadata.siteUrl,{href:t,target:l,download:i}=e,{origin:d,hash:o}=new URL(null!=t?t:"",r);return!t||d!==r||o||l||i?(0,c.jsx)("a",{...e,ref:n}):(0,c.jsx)(a,{...e,ref:n})})),o=(0,t.forwardRef)((function(e,n){var r;const t=[l,null!==(r=e.className)&&void 0!==r?r:""].join(" ");return(0,c.jsx)(d,{...e,className:t,ref:n})}))},7018:function(e,n,r){r.d(n,{g:function(){return l},J:function(){return s}});var t=r(5893);const s=e=>(0,t.jsx)("ol",{className:"breadcrumb-list-module--breadcrumblist--d89e2",...e}),l=e=>(0,t.jsx)("li",{className:"breadcrumb-list-module--breadcrumb--64b46",...e})},4218:function(e,n,r){r.d(n,{Z:function(){return l}});var t="card-module--card--729a6",s=r(5893);const l=e=>{var n;const r=[t,null!==(n=e.className)&&void 0!==n?n:""].join(" ");return(0,s.jsx)("div",{...e,className:r})}},7831:function(e,n,r){r.d(n,{H1:function(){return i},H2:function(){return a},H3:function(){return d},H4:function(){return o},H5:function(){return u},H6:function(){return f}});var t=r(7294),s="heading-module--heading--5dd10",l=r(5893);const c=e=>{const n=String(e),r=(n,r)=>{var t;const c=[s,null!==(t=n.className)&&void 0!==t?t:""].join(" ");return(0,l.jsx)(e,{...n,className:c,ref:r})};return r.displayName=`createHeading(${n})`,(0,t.forwardRef)(r)},i=c("h1"),a=c("h2"),d=c("h3"),o=c("h4"),u=c("h5"),f=c("h6")},6205:function(e,n,r){r.d(n,{h:function(){return s}});var t=r(5893);const s=e=>(0,t.jsx)("hgroup",{className:"hgroup-module--hgroup--65970",...e})},637:function(e,n,r){r.d(n,{Li:function(){return o},v:function(){return d},Ol:function(){return i},Ul:function(){return a}});var t=r(7294),s="list-module--unorderedList--1a29f",l=r(5893);const c=(0,t.createContext)(null),i=(0,t.forwardRef)((function(e,n){let{children:r,...t}=e;return(0,l.jsx)("ol",{role:"list",className:"list-module--orderedList--d8f82",...t,ref:n,children:(0,l.jsx)(c.Provider,{value:t.reversed?"rol":"ol",children:r})})})),a=(0,t.forwardRef)((function(e,n){let{children:r,...t}=e;return(0,l.jsx)("ul",{role:"list",className:s,...t,ref:n,children:(0,l.jsx)(c.Provider,{value:"ul",children:r})})})),d=(0,t.forwardRef)((function(e,n){let{children:r,...t}=e;return(0,l.jsx)("menu",{role:"list",className:s,...t,ref:n,children:(0,l.jsx)(c.Provider,{value:"ul",children:r})})})),o=e=>{let{children:n,...r}=e;const s={ul:"list-module--uitem--63afd",ol:"list-module--oitem--9c6ac",rol:"list-module--roitem--a048a"}[(0,t.useContext)(c)];return(0,l.jsx)("li",{role:"listitem",className:s,...r,children:(0,l.jsx)("div",{className:"list-module--content--5f318",children:n})})}},9422:function(e,n,r){r.d(n,{J:function(){return i}});var t=r(7294),s=r(9046),l=r(6205),c=r(5893);const i=e=>{let{children:n,heading:r,...i}=e;const a=(0,t.useId)();return(0,c.jsxs)("nav",{"aria-labelledby":a,...i,children:[(0,c.jsx)(s.f,{children:(0,c.jsx)("header",{id:a,children:(0,c.jsx)(l.h,{children:r})})}),n]})}},359:function(e,n,r){r.d(n,{P:function(){return s}});var t=r(5893);const s=e=>(0,t.jsx)("p",{className:"p-module--p--1f3a4",...e})},2044:function(e,n,r){r.d(n,{X:function(){return i}});var t=r(7294),s=r(5893);const l=(0,t.lazy)((()=>r.e(894).then(r.bind(r,7894)))),c=e=>{let{open:n,...r}=e;return(0,s.jsx)("div",{...r})},i=e=>(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)(c,{...e}),children:(0,s.jsx)(l,{...e})})},8088:function(e,n,r){r.d(n,{Q:function(){return s}});var t=r(5893);const s=e=>{let{children:n}=e;return(0,t.jsx)("div",{className:"theme-module--theme--d14f8",children:n})}},9046:function(e,n,r){r.d(n,{f:function(){return s}});var t=r(5893);const s=e=>{let{children:n}=e;return(0,t.jsx)("div",{className:"assistive-module--sr--66d89",children:n})}}}]);
//# sourceMappingURL=a245a3aae1853b7629f428379bb220d785018d4c-01628a26c116938c7b52.js.map