"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[256],{2980:function(n,t,e){e.d(t,{i:function(){return SeoBasic},Z:function(){return c}});var r=e(3274),o=e(9622),i=e(7294);var use_opengraph=n=>{let{description:t,url:e,title:r}=n;const s=(0,o.Z)();return(0,i.useMemo)((()=>({og:{site_name:s.title,title:r,description:null!=t?t:s.description,url:e}})),[s,t,e,r])},s=e(5893);const Open=n=>{const t=use_opengraph(n);return Array.from(function*(){for(const[n,e,o]of(0,r.Z)(t))yield(0,s.jsx)("meta",{property:e,content:o},n)}())},SeoBasic=n=>{const{description:t,url:e}=n,r=(0,o.Z)();return(0,s.jsxs)(s.Fragment,{children:[e&&(0,s.jsx)("link",{rel:"canonical",href:e}),(0,s.jsx)("meta",{name:"description",content:null!=t?t:r.description}),(0,s.jsx)(Open,{...n})]})};var c=SeoBasic},7585:function(n,t,e){e.d(t,{Z:function(){return useTitle}});var r=e(7294),o=e(4160),i=e(2164);const useTitle=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];const s=(0,o.K2)("3159585216");return(0,r.useMemo)((()=>{const{title:n}=s.site.siteMetadata;return[...t,n].join(i.k)}),[s,t])}},6262:function(n,t,e){e.d(t,{L:function(){return useAbsolute}});var r=e(4160),o=e(7294);const useAbsolute=n=>{const t=(0,r.K2)("1271460761");return(0,o.useMemo)((()=>{const e=t.site.siteMetadata;return String(new URL(n,e.siteUrl))}),[t,n])};t.Z=useAbsolute},9622:function(n,t,e){var r=e(4160);t.Z=()=>(0,r.K2)("3000541721").site.siteMetadata},8300:function(n,t,e){e.r(t),e.d(t,{Head:function(){return Head},default:function(){return _404}});var r=e(7294),o=e(1091),i=e(5893);const s=(0,r.lazy)((()=>Promise.all([e.e(532),e.e(823)]).then(e.bind(e,823)))),AlertPage=n=>{let{children:t,heading:e}=n;return(0,i.jsx)(r.Suspense,{fallback:(0,i.jsx)(o.v,{heading:e,children:t}),children:(0,i.jsx)(s,{heading:e,children:t})})};var c=e(165),u=e(2980),l=e(7585),a=e(6262);const d="Page Not Found",Head=n=>{let{location:{pathname:t}}=n;const e=(0,a.Z)(t),r=(0,l.Z)(d);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("title",{children:r}),(0,i.jsx)(u.Z,{title:d,url:e})]})};var _404=()=>(0,i.jsx)(AlertPage,{heading:"Page Not Found",children:(0,i.jsx)(c.P,{children:"Sorry the page you requested could not be found."})})},3274:function(n,t,e){const r=function*loop(n,t,e){if("string"!=typeof e)if(Array.isArray(e)){let r=0;for(const o of e){for(const e of loop(""+n+r,t,o))yield e;++r}}else for(const[r,o]of Object.entries(e)){const e=t?t+":"+r:r,i=t?n+":"+r:r;for(const n of loop(i,e,o))yield n}else yield[n,t,e]};t.Z=function*(n){for(const t of r(null,null,n))yield t}},2164:function(n,t,e){e.d(t,{k:function(){return r}});const r=" — "}}]);
//# sourceMappingURL=component---src-pages-404-jsx-3ef35465b966f365b2a0.js.map