"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[111],{3897:function(e,n,t){t.d(n,{Zo:function(){return l},ah:function(){return o}});var r=t(7294);const s=r.createContext({});function o(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l(e){let n,{components:t,children:l,disableParentContext:a}=e;return n=a?"function"==typeof t?t({}):t||c:o(t),r.createElement(s.Provider,{value:n},l)}},575:function(e,n,t){t.r(n),t.d(n,{Head:function(){return u},default:function(){return m}});var r=t(7294),s=t(5893),o=t(3897);function c(e){const n=Object.assign({p:"p"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"I feel a great heaviness about my eyes and tension is jamming needles in my jaw.\nMy arms are all itchy red and swollen up and tension crushes the muscles of my back together.\nThe ground beneath my feet is very heavy and weighs down on me so much.\nMy gut grinds together and my burning parched throat chokes itself."}),"\n",(0,s.jsx)(n.p,{children:"I have a bit of a sinus headache and my face is itchy all over.\nMy legs itch, my arms itch, my body itches, my face itches.\nI feel despondent, glum."}),"\n",(0,s.jsx)(n.p,{children:"I feel very ugly inside and out."}),"\n",(0,s.jsx)(n.p,{children:"I breathe shallowly with a racing heartbeat.\nI don't know when the tiredness will ever leave my eyes."}),"\n",(0,s.jsx)(n.p,{children:"The tendons of my forearms are tense, my shoulders are tense, my whole body is tensed."})]})}var l=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)},a=t(6474),i=t(3398),d=t(2036);const u=e=>{let{data:{postMdx:{post:n}}}=e;return r.createElement(a.Y,{post:n})},h=e=>{let{children:n,data:{postMdx:t}}=e;const{post:s,mdx:o}=t;return r.createElement(i.s,{post:s,headings:o.tableOfContents.items},r.createElement(d.S,t,n))};function m(e){return r.createElement(h,e,r.createElement(l,e))}},3805:function(e,n,t){t.d(n,{r:function(){return N}});var r=t(637),s=t(359),o=t(6054),c=t(5893);const l=e=>(0,c.jsx)("blockquote",{className:"blockquote-module--blockquote--714d2",...e});const a=e=>(0,c.jsx)("code",{className:"code-module--code--44ad3",...e});const i=e=>(0,c.jsx)("hr",{className:"hr-module--hr--793bf",...e});var d=t(6205),u=t(7831);const h=e=>{const n=e.displayName||e.name||"Component",t=n=>{let{id:t,children:r,tabIndex:s="-1",...l}=n;const a=t&&`#${t}`;return(0,c.jsxs)("header",{className:"heading-module--heading--888aa",children:[(0,c.jsx)(d.h,{children:(0,c.jsx)(e,{...l,id:t,tabIndex:s,children:r})}),a&&(0,c.jsx)(o.A,{className:"heading-module--autolink--16bd8",href:a,"aria-describedby":t,children:"#"})]})};return t.displayName=`createAutoLink(${n})`,t},m=u.H1,f=h(u.H2),p=h(u.H3),x=h(u.H4),j=h(u.H5),y=h(u.H6);var v=t(7294),b="pre-module--pre--1612a";const g=e=>{var n;const t=[b,null!==(n=e.className)&&void 0!==n?n:""].join(" ");return(0,c.jsx)("pre",{...e,className:t})};const w=e=>{let{children:n,id:t,title:r}=e;const s=(0,v.useRef)(),l=(0,v.useId)(),a=`${l}-caption`,i=`${l}-focus`;return(0,c.jsxs)("figure",{id:t,ref:s,className:"pre-module--figure--43fd3",children:[(0,c.jsx)("figcaption",{id:a,className:"pre-module--figcaption--b1a13",children:(0,c.jsx)("span",{className:"pre-module--title--46c65",children:r})}),(0,c.jsx)(o.A,{id:i,className:"pre-module--autolink--08ec9",href:`#${t}`,"aria-describedby":a,children:"Focus"}),(0,c.jsx)(g,{children:n})]})};const N={...{h1:m,h2:f,h3:p,h4:x,h5:j,h6:y},...{ul:r.Ul,ol:r.Ol,menu:r.v,li:r.Li,p:s.P,a:o.A,blockquote:l,code:a,pre:w,hr:i}}},2036:function(e,n,t){t.d(n,{S:function(){return u}});var r=t(3897),s=t(3805),o=t(4950),c=t(3063),l=t(3370);const a={...s.r,ul:o.Lg,li:c.L,Caesura:l.F},i=e=>{switch(e){case"Poem":return a;case"Prose":case"Web":return s.r;default:throw new Error(`Unrecognized category ${e}`)}};var d=t(5893);const u=e=>{let{children:n,post:{category:t}}=e;const s=i(t);return(0,d.jsx)(r.Zo,{components:s,children:n})}},637:function(e,n,t){t.d(n,{Li:function(){return d},v:function(){return i},Ol:function(){return l},Ul:function(){return a}});var r=t(7294),s="list-module--unorderedList--1a29f",o=t(5893);const c=(0,r.createContext)(null),l=(0,r.forwardRef)((function(e,n){let{children:t,...r}=e;return(0,o.jsx)("ol",{role:"list",className:"list-module--orderedList--d8f82",...r,ref:n,children:(0,o.jsx)(c.Provider,{value:r.reversed?"rol":"ol",children:t})})})),a=(0,r.forwardRef)((function(e,n){let{children:t,...r}=e;return(0,o.jsx)("ul",{role:"list",className:s,...r,ref:n,children:(0,o.jsx)(c.Provider,{value:"ul",children:t})})})),i=(0,r.forwardRef)((function(e,n){let{children:t,...r}=e;return(0,o.jsx)("menu",{role:"list",className:s,...r,ref:n,children:(0,o.jsx)(c.Provider,{value:"ul",children:t})})})),d=e=>{let{children:n,...t}=e;const s={ul:"list-module--uitem--63afd",ol:"list-module--oitem--9c6ac",rol:"list-module--roitem--a048a"}[(0,r.useContext)(c)];return(0,o.jsx)("li",{role:"listitem",className:s,...t,children:(0,o.jsx)("div",{className:"list-module--content--5f318",children:n})})}},359:function(e,n,t){t.d(n,{P:function(){return s}});var r=t(5893);const s=e=>(0,r.jsx)("p",{className:"p-module--p--1f3a4",...e})}}]);
//# sourceMappingURL=component---src-templates-post-mdx-jsx-content-file-path-content-blog-prose-2022-10-19-emotion-exercise-mdx-3d847dd4799645152a3a.js.map