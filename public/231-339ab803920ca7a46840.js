"use strict";(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[231],{8231:function(t,n,e){e.r(n);var a=e(7294),i=e(3476),r=e(3184);n.default=()=>{const{pathname:t}=(0,i.useLocation)();return(0,a.useEffect)((()=>{if(!window.navigation||!document.startViewTransition)return;const n=new AbortController,{signal:e}=n,a={passive:!0,signal:e};return window.navigation.addEventListener("navigate",((t,n)=>{let{signal:e}=n;return n=>{const{destination:a,canIntercept:i,downloadRequest:o}=n;if(!i||o)return;if(new URL(a.url).pathname===t)return;const s=(0,r._e)({signal:e}),u=(0,r.G4)({signal:e});document.startViewTransition((()=>Promise.race([u,s])))}})(t,{signal:e}),a),()=>n.abort()}),[t]),null}}}]);
//# sourceMappingURL=231-339ab803920ca7a46840.js.map