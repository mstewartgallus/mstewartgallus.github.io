"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[984],{984:function(e,r,n){n.r(r),n.d(r,{ALocal:function(){return w},default:function(){return w}});var t=n(7294),u=n(1883);const o={threshold:1},s=new Map,c=e=>{const{target:r}=e,n=s.get(r);if(!n)return;const{isIntersecting:t,intersectionRatio:u}=e;n(t||u>0)},l=e=>{for(const r of e)c(r)};let a=null;const f=(e,r,n)=>{let{signal:t}=n;const u=(()=>{if(a)return a;if(!window)return null;const{IntersectionObserver:e}=window;return e?(a=new e(l,o),a):null})();if(!u)return;let c=!1;t.addEventListener("abort",(()=>{c=!0,u.unobserve(e),s.delete(e)}),{passive:!0}),s.set(e,(e=>{c||r(e)})),u.observe(e)};var i=n(5893);const v={mouseover:!1,focus:!1,near:!1},b=(e,r)=>{switch(r){case"near":return{...e,near:!0};case"far":return{...e,near:!1};case"mouseover":return{...e,mouseover:!0};case"mouseout":return{...e,mouseover:!1};case"focus":return{...e,focus:!0};case"blur":return{...e,focus:!1};default:return e}},d=(e,r)=>{const{onClick:n,onFocus:o,onBlur:s,onMouseOver:c,onMouseOut:l}=e,a=(0,t.useRef)(),{href:d}=e,{1:w}=(0,t.useTransition)(),{0:{mouseover:k,focus:_,near:h},1:C}=(0,t.useReducer)(b,v),m=(0,t.useCallback)((async e=>{null==n||n(e);const{defaultPrevented:r,altKey:t,metaKey:o,shiftKey:s,ctrlKey:c,button:l}=e;r||0===l&&(t||o||s||c||(e.preventDefault(),await(0,u.c4)(d)))}),[n,d]),g=(0,t.useCallback)((e=>{w((()=>C("mouseover"))),null==c||c(e)}),[c]),y=(0,t.useCallback)((e=>{w((()=>C("mouseout"))),null==l||l(e)}),[l]),p=(0,t.useCallback)((e=>{w((()=>C("focus"))),null==o||o(e)}),[o]),M=(0,t.useCallback)((e=>{w((()=>C("blur"))),null==s||s(e)}),[s]);(0,t.useEffect)((()=>{const{current:e}=a;if(!e)return;const r=new AbortController,{signal:n}=r;return f(e,(e=>{w((()=>{C(e?"near":"far")}))}),{signal:n}),()=>r.abort()}),[]);const O=k||_;var E;return E=O?d:null,(0,t.useEffect)((()=>{E&&window.___loader.hovering(E)}),[E]),(e=>{(0,t.useEffect)((()=>{if(!e)return;const r=(0,u.Cw)(e);return()=>r.abort()}),[e])})(h||O?d:null),(0,i.jsx)("a",{...e,onClick:m,onMouseOver:g,onMouseOut:y,onFocus:p,onBlur:M,ref:e=>{a.current=e,r&&(r.current=e)}})},w=(0,t.forwardRef)(d)}}]);
//# sourceMappingURL=984-24cddb05e91e29fdd652.js.map