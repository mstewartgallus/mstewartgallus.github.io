"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[235],{3897:function(e,n,t){t.d(n,{Zo:function(){return a},ah:function(){return s}});var r=t(7294);const o=r.createContext({});function s(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a(e){let n,{components:t,children:a,disableParentContext:c}=e;return n=c?"function"==typeof t?t({}):t||i:s(t),r.createElement(o.Provider,{value:n},a)}},4727:function(e,n,t){t.r(n),t.d(n,{Head:function(){return u},default:function(){return h}});var r=t(7294),o=t(5893),s=t(3897);function i(e){const n=Object.assign({p:"p"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Day 8 of no coffee, captains log"}),"\n",(0,o.jsx)(n.p,{children:"My body boils like a bubbling pot of pastrami noodles. The wet red\nmeat mess gravy of my brain congeals over the stove top. I am frying\neggs sunnyside up.  I close my eyes and aeons pass. I open my eyes and\nit is another world.  I remember Tuesday fondly."}),"\n",(0,o.jsx)(n.p,{children:"My head a pounding agony lying trapped beneath the embrace of my\noneitis and enfolded in the choking intoxication of a vape fiend's\naddiction in a closet sized apartment."}),"\n",(0,o.jsx)(n.p,{children:"I sequester protein sequences deep inside my intestine. The warm wet\negg yolk dirtying my fine trimmed facial hair. Breakfast as usual is a\ntense quiet affair.  We are not hopeful today."})]})}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(i,e)})):i(e)},c=t(6474),l=t(792),d=t(2036);const u=e=>{let{data:{postMdx:{post:n}}}=e;return r.createElement(c.Y,{post:n})},f=e=>{let{children:n,data:{postMdx:t}}=e;const{post:o,mdx:s}=t;return r.createElement(l.s,{post:o,headings:s.tableOfContents.items},r.createElement(d.S,t,n))};function h(e){return r.createElement(f,e,r.createElement(a,e))}},8425:function(e,n,t){t.d(n,{r:function(){return k}});var r=t(637),o=t(359),s=t(7158),i=t(4846);const a=(0,i.f)("blockquote","blockquote-module--blockquote--714d2");const c=(0,i.f)("code","code-module--code--44ad3");const l=(0,i.f)("hr","hr-module--hr--793bf");var d=t(6205),u=t(1229);const f=(0,i.f)(u.A,"a-module--a--871de");var h=t(7831),m=t(5893);const p=e=>{const n=e.displayName||e.name||"Component",t=n=>{const{children:t,id:r,tabIndex:o="-1"}=n,s=r?`#${r}`:null;return(0,m.jsx)("header",{className:"heading-module--heading--888aa",children:(0,m.jsx)(d.h,{children:(0,m.jsx)(e,{...n,id:r,tabIndex:o,children:(0,m.jsx)(f,{href:s,children:t})})})})};return t.displayName=`createAutoLink(${n})`,t},x=h.H1,y=p(h.H2),g=p(h.H3),j=p(h.H4),v=p(h.H5),b=p(h.H6);t(7294);const k={...{h1:x,h2:y,h3:g,h4:j,h5:v,h6:b},...{ul:r.Ul,ol:r.Ol,menu:r.v,li:r.Li,p:o.P,a:s.A,blockquote:a,code:c,pre:e=>{let{children:n,id:t,title:r}=e;return(0,m.jsxs)("figure",{id:t,className:"pre-module--figure--43fd3",children:[(0,m.jsx)("figcaption",{className:"pre-module--figcaption--b1a13",children:(0,m.jsx)(f,{href:`#${t}`,children:r})}),(0,m.jsx)("pre",{className:"pre-module--pre--876d5",children:n})]})},hr:l}}},2036:function(e,n,t){t.d(n,{S:function(){return d}});var r=t(3897),o=t(8425),s=t(4950),i=t(3063),a=t(3370);const c={...o.r,ul:s.Lg,li:i.L,Caesura:a.F};var l=t(5893);const d=e=>{let{children:n,post:{category:t}}=e;const s=(e=>{switch(e){case"Poem":return c;case"Prose":case"Web":return o.r;default:throw new Error(`Unrecognized category ${e}`)}})(t);return(0,l.jsx)(r.Zo,{components:s,children:n})}},637:function(e,n,t){t.d(n,{Li:function(){return m},v:function(){return h},Ol:function(){return u},Ul:function(){return f}});var r=t(7294),o="list-module--unorderedList--1a29f",s=t(5893);const i=(0,r.createContext)(null),a=(e,n)=>(0,s.jsx)("ol",{role:"list",className:"list-module--orderedList--d8f82",...e,ref:n,children:(0,s.jsx)(i.Provider,{value:e.reversed?"rol":"ol",children:e.children})}),c=(e,n)=>(0,s.jsx)("ul",{role:"list",className:o,...e,ref:n,children:(0,s.jsx)(i.Provider,{value:"ul",children:e.children})}),l=(e,n)=>(0,s.jsx)("menu",{role:"list",className:o,...e,ref:n,children:(0,s.jsx)(i.Provider,{value:"ul",children:e.children})}),d=(e,n)=>{const t={ul:"list-module--uitem--63afd",ol:"list-module--oitem--9c6ac",rol:"list-module--roitem--a048a"}[(0,r.useContext)(i)];return(0,s.jsx)("li",{role:"listitem",className:t,...e,ref:n,children:(0,s.jsx)("div",{className:"list-module--content--5f318",children:e.children})})},u=(0,r.forwardRef)(a),f=(0,r.forwardRef)(c),h=(0,r.forwardRef)(l),m=(0,r.forwardRef)(d)},359:function(e,n,t){t.d(n,{P:function(){return r}});const r=(0,t(4846).f)("p","p-module--p--1f3a4")}}]);
//# sourceMappingURL=component---src-templates-post-mdx-jsx-content-file-path-content-blog-prose-2022-10-21-coffee-mdx-f0dc1c13712f154ec9e1.js.map