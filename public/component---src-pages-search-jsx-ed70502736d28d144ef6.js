(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[995],{9662:function(e,t,r){var n=r(614),o=r(6330),c=TypeError;e.exports=function(e){if(n(e))return e;throw c(o(e)+" is not a function")}},6077:function(e,t,r){var n=r(614),o=String,c=TypeError;e.exports=function(e){if("object"==typeof e||n(e))return e;throw c("Can't set "+o(e)+" as a prototype")}},9670:function(e,t,r){var n=r(111),o=String,c=TypeError;e.exports=function(e){if(n(e))return e;throw c(o(e)+" is not an object")}},1318:function(e,t,r){var n=r(5656),o=r(1400),c=r(6244),a=function(e){return function(t,r,a){var u,i=n(t),l=c(i),s=o(a,l);if(e&&r!=r){for(;l>s;)if((u=i[s++])!=u)return!0}else for(;l>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},4326:function(e,t,r){var n=r(1702),o=n({}.toString),c=n("".slice);e.exports=function(e){return c(o(e),8,-1)}},648:function(e,t,r){var n=r(1694),o=r(614),c=r(4326),a=r(5112)("toStringTag"),u=Object,i="Arguments"==c(function(){return arguments}());e.exports=n?c:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=u(e),a))?r:i?c(t):"Object"==(n=c(t))&&o(t.callee)?"Arguments":n}},9920:function(e,t,r){var n=r(2597),o=r(3887),c=r(1236),a=r(3070);e.exports=function(e,t,r){for(var u=o(t),i=a.f,l=c.f,s=0;s<u.length;s++){var f=u[s];n(e,f)||r&&n(r,f)||i(e,f,l(t,f))}}},8544:function(e,t,r){var n=r(7293);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,r){var n=r(9781),o=r(3070),c=r(9114);e.exports=n?function(e,t,r){return o.f(e,t,c(1,r))}:function(e,t,r){return e[t]=r,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,r){var n=r(614),o=r(3070),c=r(6339),a=r(3072);e.exports=function(e,t,r,u){u||(u={});var i=u.enumerable,l=void 0!==u.name?u.name:t;if(n(r)&&c(r,l,u),u.global)i?e[t]=r:a(t,r);else{try{u.unsafe?e[t]&&(i=!0):delete e[t]}catch(s){}i?e[t]=r:o.f(e,t,{value:r,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return e}},3072:function(e,t,r){var n=r(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}},9781:function(e,t,r){var n=r(7293);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,r=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:r}},317:function(e,t,r){var n=r(7854),o=r(111),c=n.document,a=o(c)&&o(c.createElement);e.exports=function(e){return a?c.createElement(e):{}}},8113:function(e,t,r){var n=r(5005);e.exports=n("navigator","userAgent")||""},7392:function(e,t,r){var n,o,c=r(7854),a=r(8113),u=c.process,i=c.Deno,l=u&&u.versions||i&&i.version,s=l&&l.v8;s&&(o=(n=s.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,r){var n=r(1702),o=Error,c=n("".replace),a=String(o("zxcasd").stack),u=/\n\s*at [^:]*:[^\n]*/,i=u.test(a);e.exports=function(e,t){if(i&&"string"==typeof e&&!o.prepareStackTrace)for(;t--;)e=c(e,u,"");return e}},2914:function(e,t,r){var n=r(7293),o=r(9114);e.exports=!n((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",o(1,7)),7!==e.stack)}))},2109:function(e,t,r){var n=r(7854),o=r(1236).f,c=r(8880),a=r(8052),u=r(3072),i=r(9920),l=r(4705);e.exports=function(e,t){var r,s,f,p,v,m=e.target,g=e.global,d=e.stat;if(r=g?n:d?n[m]||u(m,{}):(n[m]||{}).prototype)for(s in t){if(p=t[s],f=e.dontCallGetSet?(v=o(r,s))&&v.value:r[s],!l(g?s:m+(d?".":"#")+s,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;i(p,f)}(e.sham||f&&f.sham)&&c(p,"sham",!0),a(r,s,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},9974:function(e,t,r){var n=r(1470),o=r(9662),c=r(4374),a=n(n.bind);e.exports=function(e,t){return o(e),void 0===t?e:c?a(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,r){var n=r(7293);e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,r){var n=r(4374),o=Function.prototype.call;e.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,r){var n=r(9781),o=r(2597),c=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,u=o(c,"name"),i=u&&"something"===function(){}.name,l=u&&(!n||n&&a(c,"name").configurable);e.exports={EXISTS:u,PROPER:i,CONFIGURABLE:l}},1470:function(e,t,r){var n=r(4326),o=r(1702);e.exports=function(e){if("Function"===n(e))return o(e)}},1702:function(e,t,r){var n=r(4374),o=Function.prototype,c=o.call,a=n&&o.bind.bind(c,c);e.exports=n?a:function(e){return function(){return c.apply(e,arguments)}}},5005:function(e,t,r){var n=r(7854),o=r(614),c=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?c(n[e]):n[e]&&n[e][t]}},1246:function(e,t,r){var n=r(648),o=r(8173),c=r(8554),a=r(7497),u=r(5112)("iterator");e.exports=function(e){if(!c(e))return o(e,u)||o(e,"@@iterator")||a[n(e)]}},4121:function(e,t,r){var n=r(6916),o=r(9662),c=r(9670),a=r(6330),u=r(1246),i=TypeError;e.exports=function(e,t){var r=arguments.length<2?u(e):t;if(o(r))return c(n(r,e));throw i(a(e)+" is not iterable")}},8173:function(e,t,r){var n=r(9662),o=r(8554);e.exports=function(e,t){var r=e[t];return o(r)?void 0:n(r)}},7854:function(e,t,r){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(e,t,r){var n=r(1702),o=r(7908),c=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return c(o(e),t)}},3501:function(e){e.exports={}},490:function(e,t,r){var n=r(5005);e.exports=n("document","documentElement")},4664:function(e,t,r){var n=r(9781),o=r(7293),c=r(317);e.exports=!n&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,r){var n=r(1702),o=r(7293),c=r(4326),a=Object,u=n("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==c(e)?u(e,""):a(e)}:a},2788:function(e,t,r){var n=r(1702),o=r(614),c=r(5465),a=n(Function.toString);o(c.inspectSource)||(c.inspectSource=function(e){return a(e)}),e.exports=c.inspectSource},8340:function(e,t,r){var n=r(111),o=r(8880);e.exports=function(e,t){n(t)&&"cause"in t&&o(e,"cause",t.cause)}},9909:function(e,t,r){var n,o,c,a=r(4811),u=r(7854),i=r(111),l=r(8880),s=r(2597),f=r(5465),p=r(6200),v=r(3501),m="Object already initialized",g=u.TypeError,d=u.WeakMap;if(a||f.state){var h=f.state||(f.state=new d);h.get=h.get,h.has=h.has,h.set=h.set,n=function(e,t){if(h.has(e))throw g(m);return t.facade=e,h.set(e,t),t},o=function(e){return h.get(e)||{}},c=function(e){return h.has(e)}}else{var y=p("state");v[y]=!0,n=function(e,t){if(s(e,y))throw g(m);return t.facade=e,l(e,y,t),t},o=function(e){return s(e,y)?e[y]:{}},c=function(e){return s(e,y)}}e.exports={set:n,get:o,has:c,enforce:function(e){return c(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!i(t)||(r=o(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return r}}}},7659:function(e,t,r){var n=r(5112),o=r(7497),c=n("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||a[c]===e)}},614:function(e,t,r){var n=r(4154),o=n.all;e.exports=n.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},4705:function(e,t,r){var n=r(7293),o=r(614),c=/#|\.prototype\./,a=function(e,t){var r=i[u(e)];return r==s||r!=l&&(o(t)?n(t):!!t)},u=a.normalize=function(e){return String(e).replace(c,".").toLowerCase()},i=a.data={},l=a.NATIVE="N",s=a.POLYFILL="P";e.exports=a},8554:function(e){e.exports=function(e){return null==e}},111:function(e,t,r){var n=r(614),o=r(4154),c=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:n(e)||e===c}:function(e){return"object"==typeof e?null!==e:n(e)}},1913:function(e){e.exports=!1},2190:function(e,t,r){var n=r(5005),o=r(614),c=r(7976),a=r(3307),u=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=n("Symbol");return o(t)&&c(t.prototype,u(e))}},408:function(e,t,r){var n=r(9974),o=r(6916),c=r(9670),a=r(6330),u=r(7659),i=r(6244),l=r(7976),s=r(4121),f=r(1246),p=r(9212),v=TypeError,m=function(e,t){this.stopped=e,this.result=t},g=m.prototype;e.exports=function(e,t,r){var d,h,y,b,E,x,w,S=r&&r.that,O=!(!r||!r.AS_ENTRIES),j=!(!r||!r.IS_RECORD),I=!(!r||!r.IS_ITERATOR),P=!(!r||!r.INTERRUPTED),C=n(t,S),k=function(e){return d&&p(d,"normal",e),new m(!0,e)},A=function(e){return O?(c(e),P?C(e[0],e[1],k):C(e[0],e[1])):P?C(e,k):C(e)};if(j)d=e.iterator;else if(I)d=e;else{if(!(h=f(e)))throw v(a(e)+" is not iterable");if(u(h)){for(y=0,b=i(e);b>y;y++)if((E=A(e[y]))&&l(g,E))return E;return new m(!1)}d=s(e,h)}for(x=j?e.next:d.next;!(w=o(x,d)).done;){try{E=A(w.value)}catch(T){p(d,"throw",T)}if("object"==typeof E&&E&&l(g,E))return E}return new m(!1)}},9212:function(e,t,r){var n=r(6916),o=r(9670),c=r(8173);e.exports=function(e,t,r){var a,u;o(e);try{if(!(a=c(e,"return"))){if("throw"===t)throw r;return r}a=n(a,e)}catch(i){u=!0,a=i}if("throw"===t)throw r;if(u)throw a;return o(a),r}},7497:function(e){e.exports={}},6244:function(e,t,r){var n=r(7466);e.exports=function(e){return n(e.length)}},6339:function(e,t,r){var n=r(7293),o=r(614),c=r(2597),a=r(9781),u=r(6530).CONFIGURABLE,i=r(2788),l=r(9909),s=l.enforce,f=l.get,p=Object.defineProperty,v=a&&!n((function(){return 8!==p((function(){}),"length",{value:8}).length})),m=String(String).split("String"),g=e.exports=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!c(e,"name")||u&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&r&&c(r,"arity")&&e.length!==r.arity&&p(e,"length",{value:r.arity});try{r&&c(r,"constructor")&&r.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var n=s(e);return c(n,"source")||(n.source=m.join("string"==typeof t?t:"")),e};Function.prototype.toString=g((function(){return o(this)&&f(this).source||i(this)}),"toString")},4758:function(e){var t=Math.ceil,r=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?r:t)(n)}},8523:function(e,t,r){"use strict";var n=r(9662),o=TypeError,c=function(e){var t,r;this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw o("Bad Promise constructor");t=e,r=n})),this.resolve=n(t),this.reject=n(r)};e.exports.f=function(e){return new c(e)}},6277:function(e,t,r){var n=r(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:n(e)}},30:function(e,t,r){var n,o=r(9670),c=r(6048),a=r(748),u=r(3501),i=r(490),l=r(317),s=r(6200),f="prototype",p="script",v=s("IE_PROTO"),m=function(){},g=function(e){return"<"+p+">"+e+"</"+p+">"},d=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},h=function(){try{n=new ActiveXObject("htmlfile")}catch(c){}var e,t,r;h="undefined"!=typeof document?document.domain&&n?d(n):(t=l("iframe"),r="java"+p+":",t.style.display="none",i.appendChild(t),t.src=String(r),(e=t.contentWindow.document).open(),e.write(g("document.F=Object")),e.close(),e.F):d(n);for(var o=a.length;o--;)delete h[f][a[o]];return h()};u[v]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(m[f]=o(e),r=new m,m[f]=null,r[v]=e):r=h(),void 0===t?r:c.f(r,t)}},6048:function(e,t,r){var n=r(9781),o=r(3353),c=r(3070),a=r(9670),u=r(5656),i=r(1956);t.f=n&&!o?Object.defineProperties:function(e,t){a(e);for(var r,n=u(t),o=i(t),l=o.length,s=0;l>s;)c.f(e,r=o[s++],n[r]);return e}},3070:function(e,t,r){var n=r(9781),o=r(4664),c=r(3353),a=r(9670),u=r(4948),i=TypeError,l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",v="writable";t.f=n?c?function(e,t,r){if(a(e),t=u(t),a(r),"function"==typeof e&&"prototype"===t&&"value"in r&&v in r&&!r[v]){var n=s(e,t);n&&n[v]&&(e[t]=r.value,r={configurable:p in r?r[p]:n[p],enumerable:f in r?r[f]:n[f],writable:!1})}return l(e,t,r)}:l:function(e,t,r){if(a(e),t=u(t),a(r),o)try{return l(e,t,r)}catch(n){}if("get"in r||"set"in r)throw i("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},1236:function(e,t,r){var n=r(9781),o=r(6916),c=r(5296),a=r(9114),u=r(5656),i=r(4948),l=r(2597),s=r(4664),f=Object.getOwnPropertyDescriptor;t.f=n?f:function(e,t){if(e=u(e),t=i(t),s)try{return f(e,t)}catch(r){}if(l(e,t))return a(!o(c.f,e,t),e[t])}},8006:function(e,t,r){var n=r(6324),o=r(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,r){var n=r(2597),o=r(614),c=r(7908),a=r(6200),u=r(8544),i=a("IE_PROTO"),l=Object,s=l.prototype;e.exports=u?l.getPrototypeOf:function(e){var t=c(e);if(n(t,i))return t[i];var r=t.constructor;return o(r)&&t instanceof r?r.prototype:t instanceof l?s:null}},7976:function(e,t,r){var n=r(1702);e.exports=n({}.isPrototypeOf)},6324:function(e,t,r){var n=r(1702),o=r(2597),c=r(5656),a=r(1318).indexOf,u=r(3501),i=n([].push);e.exports=function(e,t){var r,n=c(e),l=0,s=[];for(r in n)!o(u,r)&&o(n,r)&&i(s,r);for(;t.length>l;)o(n,r=t[l++])&&(~a(s,r)||i(s,r));return s}},1956:function(e,t,r){var n=r(6324),o=r(748);e.exports=Object.keys||function(e){return n(e,o)}},5296:function(e,t){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);t.f=o?function(e){var t=n(this,e);return!!t&&t.enumerable}:r},7674:function(e,t,r){var n=r(1702),o=r(9670),c=r(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch(a){}return function(r,n){return o(r),c(n),t?e(r,n):r.__proto__=n,r}}():void 0)},2140:function(e,t,r){var n=r(6916),o=r(614),c=r(111),a=TypeError;e.exports=function(e,t){var r,u;if("string"===t&&o(r=e.toString)&&!c(u=n(r,e)))return u;if(o(r=e.valueOf)&&!c(u=n(r,e)))return u;if("string"!==t&&o(r=e.toString)&&!c(u=n(r,e)))return u;throw a("Can't convert object to primitive value")}},3887:function(e,t,r){var n=r(5005),o=r(1702),c=r(8006),a=r(5181),u=r(9670),i=o([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=c.f(u(e)),r=a.f;return r?i(t,r(e)):t}},2534:function(e){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},4488:function(e,t,r){var n=r(8554),o=TypeError;e.exports=function(e){if(n(e))throw o("Can't call method on "+e);return e}},6200:function(e,t,r){var n=r(2309),o=r(9711),c=n("keys");e.exports=function(e){return c[e]||(c[e]=o(e))}},5465:function(e,t,r){var n=r(7854),o=r(3072),c="__core-js_shared__",a=n[c]||o(c,{});e.exports=a},2309:function(e,t,r){var n=r(1913),o=r(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.27.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,r){var n=r(7392),o=r(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},1400:function(e,t,r){var n=r(9303),o=Math.max,c=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):c(r,t)}},5656:function(e,t,r){var n=r(8361),o=r(4488);e.exports=function(e){return n(o(e))}},9303:function(e,t,r){var n=r(4758);e.exports=function(e){var t=+e;return t!=t||0===t?0:n(t)}},7466:function(e,t,r){var n=r(9303),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},7908:function(e,t,r){var n=r(4488),o=Object;e.exports=function(e){return o(n(e))}},7593:function(e,t,r){var n=r(6916),o=r(111),c=r(2190),a=r(8173),u=r(2140),i=r(5112),l=TypeError,s=i("toPrimitive");e.exports=function(e,t){if(!o(e)||c(e))return e;var r,i=a(e,s);if(i){if(void 0===t&&(t="default"),r=n(i,e,t),!o(r)||c(r))return r;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),u(e,t)}},4948:function(e,t,r){var n=r(7593),o=r(2190);e.exports=function(e){var t=n(e,"string");return o(t)?t:t+""}},1694:function(e,t,r){var n={};n[r(5112)("toStringTag")]="z",e.exports="[object z]"===String(n)},1340:function(e,t,r){var n=r(648),o=String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(r){return"Object"}}},9711:function(e,t,r){var n=r(1702),o=0,c=Math.random(),a=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+c,36)}},3307:function(e,t,r){var n=r(6293);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,r){var n=r(9781),o=r(7293);e.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,r){var n=r(7854),o=r(614),c=n.WeakMap;e.exports=o(c)&&/native code/.test(String(c))},5112:function(e,t,r){var n=r(7854),o=r(2309),c=r(2597),a=r(9711),u=r(6293),i=r(3307),l=o("wks"),s=n.Symbol,f=s&&s.for,p=i?s:s&&s.withoutSetter||a;e.exports=function(e){if(!c(l,e)||!u&&"string"!=typeof l[e]){var t="Symbol."+e;u&&c(s,e)?l[e]=s[e]:l[e]=i&&f?f(t):p(t)}return l[e]}},6967:function(e,t,r){"use strict";var n=r(2109),o=r(7976),c=r(9518),a=r(7674),u=r(9920),i=r(30),l=r(8880),s=r(9114),f=r(1060),p=r(8340),v=r(408),m=r(6277),g=r(5112),d=r(2914),h=g("toStringTag"),y=Error,b=[].push,E=function(e,t){var r,n=arguments.length>2?arguments[2]:void 0,u=o(x,this);a?r=a(y(),u?c(this):x):(r=u?this:i(x),l(r,h,"Error")),void 0!==t&&l(r,"message",m(t)),d&&l(r,"stack",f(r.stack,1)),p(r,n);var s=[];return v(e,b,{that:s}),l(r,"errors",s),r};a?a(E,y):u(E,y,{name:!0});var x=E.prototype=i(y.prototype,{constructor:s(1,E),message:s(1,""),name:s(1,"AggregateError")});n({global:!0,constructor:!0,arity:2},{AggregateError:E})},9170:function(e,t,r){r(6967)},4668:function(e,t,r){"use strict";var n=r(2109),o=r(6916),c=r(9662),a=r(5005),u=r(8523),i=r(2534),l=r(408),s="No one promise resolved";n({target:"Promise",stat:!0},{any:function(e){var t=this,r=a("AggregateError"),n=u.f(t),f=n.resolve,p=n.reject,v=i((function(){var n=c(t.resolve),a=[],u=0,i=1,v=!1;l(e,(function(e){var c=u++,l=!1;i++,o(n,t,e).then((function(e){l||v||(v=!0,f(e))}),(function(e){l||v||(l=!0,a[c]=e,--i||p(new r(a,s)))}))})),--i||p(new r(a,s))}));return v.error&&p(v.value),n.promise}})},8628:function(e,t,r){r(9170)},6290:function(e,t,r){r(4668)},5238:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294);var o=e=>{let{children:t}=e;const r=n.useId();return n.createElement("nav",{className:"breadcrumbs-module--breadcrumbs--e2995","aria-labelledby":r},n.createElement("header",{className:"sr-only"},n.createElement("hgroup",null,n.createElement("h2",{id:r},"Breadcrumbs"))),n.createElement("ol",{className:"breadcrumbs-module--breadcrumb--6b8cf"},t))}},3293:function(e,t,r){"use strict";var n=r(7294),o=r(6138);const c=n.memo((()=>n.createElement(n.Fragment,null,n.createElement("link",{rel:"icon",href:o.Z}),n.createElement("meta",{name:"color-scheme",content:"light dark"}),n.createElement("meta",{name:"theme-color",content:"#6000A0"}))));t.Z=c},8660:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294);var o=e=>{let{children:t}=e;return n.createElement("div",{className:"page-module--page--acc67"},t)}},3615:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294);var o=e=>{let{children:t}=e;return n.createElement("div",{className:"sidebar-module--sidebar--ac64c"},t)}},7585:function(e,t,r){"use strict";var n=r(7294),o=r(9622);t.Z=e=>{let{title:t}=e;const r=(e=>{const t=(0,o.$)().title;return null===e||""===e?t:e+" — "+t})(t);return n.createElement("title",null,r)}},9622:function(e,t,r){"use strict";r.d(t,{$:function(){return o}});var n=r(1883);const o=()=>(0,n.K2)("3000541721").site.siteMetadata},4194:function(e,t,r){"use strict";r.d(t,{q:function(){return c}});var n=r(7294),o=r(1883);const c=()=>n.useCallback((async e=>{var t,r,n,c;const a=e.nativeEvent,u=e.target,i=a.submitter;let l=i.getAttribute("formaction"),s=i.getAttribute("formenctype"),f=i.getAttribute("formmethod"),p=i.getAttribute("formtarget");if(null!==(t=l)&&void 0!==t||(l=u.getAttribute("action")),null!==(r=s)&&void 0!==r||(s=u.getAttribute("enctype")),null!==(n=f)&&void 0!==n||(f=u.method),null!==(c=p)&&void 0!==c||(p=u.getAttribute("target")),null!==s)return;if("get"!==f)return;if(null!==p)return;e.preventDefault();const v=l+"?"+new URLSearchParams(new FormData(u));await(0,o.c4)(v)}),[])},8122:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return I},default:function(){return A}});var n=r(7294),o=r(7896),c=r(1883),a=r(5238),u=r(3293),i=r(8660);const l=n.createContext(null),s=e=>{let{name:t,children:r}=e;return n.createElement("fieldset",{className:"select-module--select--8f70a"},n.createElement(l.Provider,{value:t},r))},f=e=>{let{children:t,onChange:r,selected:o,value:c}=e;const a=n.useId(),u=n.useContext(l);return n.createElement("div",{className:"select-module--option--d759a"},n.createElement("input",{id:a,type:"checkbox",name:u,value:c,onChange:r,checked:o}),n.createElement("label",{htmlFor:a},t))};var p=r(3615),v=r(7585),m=r(4194);r(8628),r(6290);const g=Function("return x => import(x);")(),d=async(e,t)=>{const r=await(async e=>{try{return await e}catch(t){return void console.warn(t)}})(g("/static/pagefind/pagefind.js"));if(r)return await r.search(e,t)},h=e=>{let{url:t,meta:{title:r}}=e;return{href:t,value:r}},y=Object.freeze([]),b=()=>{const[e,t]=n.useState(null),[r,o]=n.useState(y);return n.useEffect((()=>{if(null===e)return;const[t,r]=(()=>{let e;return[new Promise(((t,r)=>{e=r})),e]})(),n=e=>Promise.any([e,t]);return(async()=>{const[t,r]=(e=>{let{s:t,category:r,tag:n,place:o,person:c}=e;r=Array.from(r),n=Array.from(n),o=Array.from(o),c=Array.from(c),""===t&&(t=null);let a={};return r.length>0&&(a.category=r),n.length>0&&(a.tag=n),o.length>0&&(a.place=o),c.length>0&&(a.person=c),[t,{filters:a}]})(e),{results:c}=await n(d(t,r)),a=(await n(Promise.all(c.slice(0,10).map((e=>e.data()))))).map(h);o(a)})(),r}),[e]),[r,t]};const E=e=>{let{value:t,onChange:r}=e;const o=n.useId();return n.createElement("div",{className:"search-module--query--d9f7b"},n.createElement("label",{htmlFor:o},"Query"),n.createElement("input",{id:o,name:"s",type:"search",value:t,onChange:r}),n.createElement("button",{type:"submit"},"Search"))},x=e=>{let{all:t,name:r,onChange:o,selected:c,children:a}=e;const u=n.useCallback((e=>{const{target:{checked:t,value:r}}=e,n=new Set(c);t?n.add(r):n.delete(r),o(n)}),[o,c]);return n.createElement(s,{name:r},a,t.map((e=>n.createElement(f,{key:e,onChange:u,selected:null==c?void 0:c.has(e),value:e},e))))},w=n.memo((e=>{let{links:t}=e;return n.createElement("ul",null,t.map((e=>{let{value:t,href:r}=e;return n.createElement("li",{key:r},n.createElement(c.rU,{to:r},t))})))})),S=e=>{var t;const r=new URLSearchParams(e);return{s:null!==(t=r.get("s"))&&void 0!==t?t:"",category:new Set(r.getAll("category")),tag:new Set(r.getAll("tag")),place:new Set(r.getAll("place")),person:new Set(r.getAll("person"))}},O=(e,t)=>{switch(t.type){case"set":return{...e,[t.name]:t.value};case"query":return t.query;default:throw new Error("Unhandled action "+t.type)}},j=()=>{const e=(0,o.useLocation)(),[t,r]=n.useState("Search");return n.useEffect((()=>{var t;const n=null!==(t=new URLSearchParams(e.search).get("s"))&&void 0!==t?t:"";r(""===n?"Search":n+" — Search")}),[e]),t},I=()=>{const e=j();return n.createElement(n.Fragment,null,n.createElement(u.Z,null),n.createElement(v.Z,{title:e}),n.createElement("link",{rel:"modulepreload",href:"/static/pagefind/pagefind.js"}),n.createElement("link",{rel:"preload",href:"/static/pagefind/wasm.en.pagefind",as:"fetch",crossOrigin:"crossorigin",type:"application/octet-stream"}))},P={s:"",category:new Set,tag:new Set,place:new Set,person:new Set},C=()=>{const e=n.useId(),t=(0,c.K2)("2533037439").allPost,[r,a]=n.useReducer(O,P),u=(0,m.q)(),i=(0,o.useLocation)();n.useEffect((()=>{const e=S(i.search);a({type:"query",query:e})}),[i]);const l=n.useCallback(((e,t)=>a({type:"set",name:e,value:t})),[a]),s=n.useCallback((e=>l("s",e.target.value)),[l]),f=n.useCallback((e=>l("category",e)),[l]),p=n.useCallback((e=>l("tag",e)),[l]),v=n.useCallback((e=>l("place",e)),[l]),g=n.useCallback((e=>l("person",e)),[l]);return n.createElement("form",{className:"search-module--search--a9d2d","aria-describedby":e,role:"search",rel:"search",action:"/search",onSubmit:u},n.createElement("header",{className:"sr-only"},n.createElement("hgroup",null,n.createElement("h2",{id:e},"Search"))),n.createElement(E,{value:r.s,onChange:s}),n.createElement(x,{name:"category",all:t.category,selected:r.category,onChange:f},n.createElement("legend",null,"Category")),n.createElement(x,{name:"place",all:t.place,selected:r.place,onChange:v},n.createElement("legend",null,"Place")),n.createElement(x,{name:"person",all:t.people,selected:r.person,onChange:g},n.createElement("legend",null,"People")),n.createElement(x,{name:"tag",all:t.tags,selected:r.tag,onChange:p},n.createElement("legend",null,"Tags")))},k=()=>{const[e,t]=b(),r=(0,o.useLocation)();return n.useEffect((()=>{const e=S(r.search);t(e)}),[r,t]),n.createElement(w,{links:e})};var A=()=>{const e=n.useId(),t=j();return n.createElement(i.Z,null,n.createElement("main",{"aria-describedby":e},n.createElement("header",null,n.createElement("hgroup",null,n.createElement("h1",{id:e},t))),n.createElement(k,null)),n.createElement(p.Z,null,n.createElement(C,null),n.createElement(a.Z,null,n.createElement("li",null,n.createElement(c.rU,{to:"/"},"Home")),n.createElement("li",{"aria-current":"page"},n.createElement("cite",null,"Search")))))}},6138:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-search-jsx-ed70502736d28d144ef6.js.map