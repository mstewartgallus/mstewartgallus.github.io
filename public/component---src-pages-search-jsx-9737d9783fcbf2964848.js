(self.webpackChunkwords_to_kick_your_teeth_out=self.webpackChunkwords_to_kick_your_teeth_out||[]).push([[995],{9662:function(t,e,r){var n=r(614),o=r(6330),c=TypeError;t.exports=function(t){if(n(t))return t;throw c(o(t)+" is not a function")}},6077:function(t,e,r){var n=r(614),o=String,c=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw c("Can't set "+o(t)+" as a prototype")}},9670:function(t,e,r){var n=r(111),o=String,c=TypeError;t.exports=function(t){if(n(t))return t;throw c(o(t)+" is not an object")}},1318:function(t,e,r){var n=r(5656),o=r(1400),c=r(6244),a=function(t){return function(e,r,a){var i,u=n(e),l=c(u),s=o(a,l);if(t&&r!=r){for(;l>s;)if((i=u[s++])!=i)return!0}else for(;l>s;s++)if((t||s in u)&&u[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},4326:function(t,e,r){var n=r(1702),o=n({}.toString),c=n("".slice);t.exports=function(t){return c(o(t),8,-1)}},648:function(t,e,r){var n=r(1694),o=r(614),c=r(4326),a=r(5112)("toStringTag"),i=Object,u="Arguments"==c(function(){return arguments}());t.exports=n?c:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(r){}}(e=i(t),a))?r:u?c(e):"Object"==(n=c(e))&&o(e.callee)?"Arguments":n}},9920:function(t,e,r){var n=r(2597),o=r(3887),c=r(1236),a=r(3070);t.exports=function(t,e,r){for(var i=o(e),u=a.f,l=c.f,s=0;s<i.length;s++){var f=i[s];n(t,f)||r&&n(r,f)||u(t,f,l(e,f))}}},8544:function(t,e,r){var n=r(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,r){var n=r(9781),o=r(3070),c=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,c(1,r))}:function(t,e,r){return t[e]=r,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,r){var n=r(614),o=r(3070),c=r(6339),a=r(3072);t.exports=function(t,e,r,i){i||(i={});var u=i.enumerable,l=void 0!==i.name?i.name:e;if(n(r)&&c(r,l,i),i.global)u?t[e]=r:a(e,r);else{try{i.unsafe?t[e]&&(u=!0):delete t[e]}catch(s){}u?t[e]=r:o.f(t,e,{value:r,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return t}},3072:function(t,e,r){var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},9781:function(t,e,r){var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,r=void 0===e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:r}},317:function(t,e,r){var n=r(7854),o=r(111),c=n.document,a=o(c)&&o(c.createElement);t.exports=function(t){return a?c.createElement(t):{}}},8113:function(t,e,r){var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:function(t,e,r){var n,o,c=r(7854),a=r(8113),i=c.process,u=c.Deno,l=i&&i.versions||u&&u.version,s=l&&l.v8;s&&(o=(n=s.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,r){var n=r(1702),o=Error,c=n("".replace),a=String(o("zxcasd").stack),i=/\n\s*at [^:]*:[^\n]*/,u=i.test(a);t.exports=function(t,e){if(u&&"string"==typeof t&&!o.prepareStackTrace)for(;e--;)t=c(t,i,"");return t}},2914:function(t,e,r){var n=r(7293),o=r(9114);t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},2109:function(t,e,r){var n=r(7854),o=r(1236).f,c=r(8880),a=r(8052),i=r(3072),u=r(9920),l=r(4705);t.exports=function(t,e){var r,s,f,p,v,m=t.target,g=t.global,d=t.stat;if(r=g?n:d?n[m]||i(m,{}):(n[m]||{}).prototype)for(s in e){if(p=e[s],f=t.dontCallGetSet?(v=o(r,s))&&v.value:r[s],!l(g?s:m+(d?".":"#")+s,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&c(p,"sham",!0),a(r,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},9974:function(t,e,r){var n=r(1470),o=r(9662),c=r(4374),a=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:c?a(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,r){var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,r){var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,r){var n=r(9781),o=r(2597),c=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,i=o(c,"name"),u=i&&"something"===function(){}.name,l=i&&(!n||n&&a(c,"name").configurable);t.exports={EXISTS:i,PROPER:u,CONFIGURABLE:l}},1470:function(t,e,r){var n=r(4326),o=r(1702);t.exports=function(t){if("Function"===n(t))return o(t)}},1702:function(t,e,r){var n=r(4374),o=Function.prototype,c=o.call,a=n&&o.bind.bind(c,c);t.exports=n?a:function(t){return function(){return c.apply(t,arguments)}}},5005:function(t,e,r){var n=r(7854),o=r(614),c=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?c(n[t]):n[t]&&n[t][e]}},1246:function(t,e,r){var n=r(648),o=r(8173),c=r(8554),a=r(7497),i=r(5112)("iterator");t.exports=function(t){if(!c(t))return o(t,i)||o(t,"@@iterator")||a[n(t)]}},4121:function(t,e,r){var n=r(6916),o=r(9662),c=r(9670),a=r(6330),i=r(1246),u=TypeError;t.exports=function(t,e){var r=arguments.length<2?i(t):e;if(o(r))return c(n(r,t));throw u(a(t)+" is not iterable")}},8173:function(t,e,r){var n=r(9662),o=r(8554);t.exports=function(t,e){var r=t[e];return o(r)?void 0:n(r)}},7854:function(t,e,r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(t,e,r){var n=r(1702),o=r(7908),c=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return c(o(t),e)}},3501:function(t){t.exports={}},490:function(t,e,r){var n=r(5005);t.exports=n("document","documentElement")},4664:function(t,e,r){var n=r(9781),o=r(7293),c=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,r){var n=r(1702),o=r(7293),c=r(4326),a=Object,i=n("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==c(t)?i(t,""):a(t)}:a},2788:function(t,e,r){var n=r(1702),o=r(614),c=r(5465),a=n(Function.toString);o(c.inspectSource)||(c.inspectSource=function(t){return a(t)}),t.exports=c.inspectSource},8340:function(t,e,r){var n=r(111),o=r(8880);t.exports=function(t,e){n(e)&&"cause"in e&&o(t,"cause",e.cause)}},9909:function(t,e,r){var n,o,c,a=r(4811),i=r(7854),u=r(111),l=r(8880),s=r(2597),f=r(5465),p=r(6200),v=r(3501),m="Object already initialized",g=i.TypeError,d=i.WeakMap;if(a||f.state){var h=f.state||(f.state=new d);h.get=h.get,h.has=h.has,h.set=h.set,n=function(t,e){if(h.has(t))throw g(m);return e.facade=t,h.set(t,e),e},o=function(t){return h.get(t)||{}},c=function(t){return h.has(t)}}else{var y=p("state");v[y]=!0,n=function(t,e){if(s(t,y))throw g(m);return e.facade=t,l(t,y,e),e},o=function(t){return s(t,y)?t[y]:{}},c=function(t){return s(t,y)}}t.exports={set:n,get:o,has:c,enforce:function(t){return c(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return r}}}},7659:function(t,e,r){var n=r(5112),o=r(7497),c=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[c]===t)}},614:function(t,e,r){var n=r(4154),o=n.all;t.exports=n.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4705:function(t,e,r){var n=r(7293),o=r(614),c=/#|\.prototype\./,a=function(t,e){var r=u[i(t)];return r==s||r!=l&&(o(e)?n(e):!!e)},i=a.normalize=function(t){return String(t).replace(c,".").toLowerCase()},u=a.data={},l=a.NATIVE="N",s=a.POLYFILL="P";t.exports=a},8554:function(t){t.exports=function(t){return null==t}},111:function(t,e,r){var n=r(614),o=r(4154),c=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:n(t)||t===c}:function(t){return"object"==typeof t?null!==t:n(t)}},1913:function(t){t.exports=!1},2190:function(t,e,r){var n=r(5005),o=r(614),c=r(7976),a=r(3307),i=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return o(e)&&c(e.prototype,i(t))}},408:function(t,e,r){var n=r(9974),o=r(6916),c=r(9670),a=r(6330),i=r(7659),u=r(6244),l=r(7976),s=r(4121),f=r(1246),p=r(9212),v=TypeError,m=function(t,e){this.stopped=t,this.result=e},g=m.prototype;t.exports=function(t,e,r){var d,h,y,b,w,x,E,S=r&&r.that,O=!(!r||!r.AS_ENTRIES),j=!(!r||!r.IS_RECORD),I=!(!r||!r.IS_ITERATOR),P=!(!r||!r.INTERRUPTED),A=n(e,S),C=function(t){return d&&p(d,"normal",t),new m(!0,t)},k=function(t){return O?(c(t),P?A(t[0],t[1],C):A(t[0],t[1])):P?A(t,C):A(t)};if(j)d=t.iterator;else if(I)d=t;else{if(!(h=f(t)))throw v(a(t)+" is not iterable");if(i(h)){for(y=0,b=u(t);b>y;y++)if((w=k(t[y]))&&l(g,w))return w;return new m(!1)}d=s(t,h)}for(x=j?t.next:d.next;!(E=o(x,d)).done;){try{w=k(E.value)}catch(T){p(d,"throw",T)}if("object"==typeof w&&w&&l(g,w))return w}return new m(!1)}},9212:function(t,e,r){var n=r(6916),o=r(9670),c=r(8173);t.exports=function(t,e,r){var a,i;o(t);try{if(!(a=c(t,"return"))){if("throw"===e)throw r;return r}a=n(a,t)}catch(u){i=!0,a=u}if("throw"===e)throw r;if(i)throw a;return o(a),r}},7497:function(t){t.exports={}},6244:function(t,e,r){var n=r(7466);t.exports=function(t){return n(t.length)}},6339:function(t,e,r){var n=r(7293),o=r(614),c=r(2597),a=r(9781),i=r(6530).CONFIGURABLE,u=r(2788),l=r(9909),s=l.enforce,f=l.get,p=Object.defineProperty,v=a&&!n((function(){return 8!==p((function(){}),"length",{value:8}).length})),m=String(String).split("String"),g=t.exports=function(t,e,r){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!c(t,"name")||i&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&r&&c(r,"arity")&&t.length!==r.arity&&p(t,"length",{value:r.arity});try{r&&c(r,"constructor")&&r.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var n=s(t);return c(n,"source")||(n.source=m.join("string"==typeof e?e:"")),t};Function.prototype.toString=g((function(){return o(this)&&f(this).source||u(this)}),"toString")},4758:function(t){var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},8523:function(t,e,r){"use strict";var n=r(9662),o=TypeError,c=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw o("Bad Promise constructor");e=t,r=n})),this.resolve=n(e),this.reject=n(r)};t.exports.f=function(t){return new c(t)}},6277:function(t,e,r){var n=r(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},30:function(t,e,r){var n,o=r(9670),c=r(6048),a=r(748),i=r(3501),u=r(490),l=r(317),s=r(6200),f="prototype",p="script",v=s("IE_PROTO"),m=function(){},g=function(t){return"<"+p+">"+t+"</"+p+">"},d=function(t){t.write(g("")),t.close();var e=t.parentWindow.Object;return t=null,e},h=function(){try{n=new ActiveXObject("htmlfile")}catch(c){}var t,e,r;h="undefined"!=typeof document?document.domain&&n?d(n):(e=l("iframe"),r="java"+p+":",e.style.display="none",u.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(g("document.F=Object")),t.close(),t.F):d(n);for(var o=a.length;o--;)delete h[f][a[o]];return h()};i[v]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(m[f]=o(t),r=new m,m[f]=null,r[v]=t):r=h(),void 0===e?r:c.f(r,e)}},6048:function(t,e,r){var n=r(9781),o=r(3353),c=r(3070),a=r(9670),i=r(5656),u=r(1956);e.f=n&&!o?Object.defineProperties:function(t,e){a(t);for(var r,n=i(e),o=u(e),l=o.length,s=0;l>s;)c.f(t,r=o[s++],n[r]);return t}},3070:function(t,e,r){var n=r(9781),o=r(4664),c=r(3353),a=r(9670),i=r(4948),u=TypeError,l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",v="writable";e.f=n?c?function(t,e,r){if(a(t),e=i(e),a(r),"function"==typeof t&&"prototype"===e&&"value"in r&&v in r&&!r[v]){var n=s(t,e);n&&n[v]&&(t[e]=r.value,r={configurable:p in r?r[p]:n[p],enumerable:f in r?r[f]:n[f],writable:!1})}return l(t,e,r)}:l:function(t,e,r){if(a(t),e=i(e),a(r),o)try{return l(t,e,r)}catch(n){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:function(t,e,r){var n=r(9781),o=r(6916),c=r(5296),a=r(9114),i=r(5656),u=r(4948),l=r(2597),s=r(4664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=i(t),e=u(e),s)try{return f(t,e)}catch(r){}if(l(t,e))return a(!o(c.f,t,e),t[e])}},8006:function(t,e,r){var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,r){var n=r(2597),o=r(614),c=r(7908),a=r(6200),i=r(8544),u=a("IE_PROTO"),l=Object,s=l.prototype;t.exports=i?l.getPrototypeOf:function(t){var e=c(t);if(n(e,u))return e[u];var r=e.constructor;return o(r)&&e instanceof r?r.prototype:e instanceof l?s:null}},7976:function(t,e,r){var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:function(t,e,r){var n=r(1702),o=r(2597),c=r(5656),a=r(1318).indexOf,i=r(3501),u=n([].push);t.exports=function(t,e){var r,n=c(t),l=0,s=[];for(r in n)!o(i,r)&&o(n,r)&&u(s,r);for(;e.length>l;)o(n,r=e[l++])&&(~a(s,r)||u(s,r));return s}},1956:function(t,e,r){var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:function(t,e){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7674:function(t,e,r){var n=r(1702),o=r(9670),c=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(a){}return function(r,n){return o(r),c(n),e?t(r,n):r.__proto__=n,r}}():void 0)},2140:function(t,e,r){var n=r(6916),o=r(614),c=r(111),a=TypeError;t.exports=function(t,e){var r,i;if("string"===e&&o(r=t.toString)&&!c(i=n(r,t)))return i;if(o(r=t.valueOf)&&!c(i=n(r,t)))return i;if("string"!==e&&o(r=t.toString)&&!c(i=n(r,t)))return i;throw a("Can't convert object to primitive value")}},3887:function(t,e,r){var n=r(5005),o=r(1702),c=r(8006),a=r(5181),i=r(9670),u=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=c.f(i(t)),r=a.f;return r?u(e,r(t)):e}},2534:function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},4488:function(t,e,r){var n=r(8554),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},6200:function(t,e,r){var n=r(2309),o=r(9711),c=n("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},5465:function(t,e,r){var n=r(7854),o=r(3072),c="__core-js_shared__",a=n[c]||o(c,{});t.exports=a},2309:function(t,e,r){var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.27.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,r){var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},1400:function(t,e,r){var n=r(9303),o=Math.max,c=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):c(r,e)}},5656:function(t,e,r){var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:function(t,e,r){var n=r(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:n(e)}},7466:function(t,e,r){var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:function(t,e,r){var n=r(4488),o=Object;t.exports=function(t){return o(n(t))}},7593:function(t,e,r){var n=r(6916),o=r(111),c=r(2190),a=r(8173),i=r(2140),u=r(5112),l=TypeError,s=u("toPrimitive");t.exports=function(t,e){if(!o(t)||c(t))return t;var r,u=a(t,s);if(u){if(void 0===e&&(e="default"),r=n(u,t,e),!o(r)||c(r))return r;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),i(t,e)}},4948:function(t,e,r){var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:function(t,e,r){var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:function(t,e,r){var n=r(648),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(r){return"Object"}}},9711:function(t,e,r){var n=r(1702),o=0,c=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+c,36)}},3307:function(t,e,r){var n=r(6293);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,r){var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,r){var n=r(7854),o=r(614),c=n.WeakMap;t.exports=o(c)&&/native code/.test(String(c))},5112:function(t,e,r){var n=r(7854),o=r(2309),c=r(2597),a=r(9711),i=r(6293),u=r(3307),l=o("wks"),s=n.Symbol,f=s&&s.for,p=u?s:s&&s.withoutSetter||a;t.exports=function(t){if(!c(l,t)||!i&&"string"!=typeof l[t]){var e="Symbol."+t;i&&c(s,t)?l[t]=s[t]:l[t]=u&&f?f(e):p(e)}return l[t]}},6967:function(t,e,r){"use strict";var n=r(2109),o=r(7976),c=r(9518),a=r(7674),i=r(9920),u=r(30),l=r(8880),s=r(9114),f=r(1060),p=r(8340),v=r(408),m=r(6277),g=r(5112),d=r(2914),h=g("toStringTag"),y=Error,b=[].push,w=function(t,e){var r,n=arguments.length>2?arguments[2]:void 0,i=o(x,this);a?r=a(y(),i?c(this):x):(r=i?this:u(x),l(r,h,"Error")),void 0!==e&&l(r,"message",m(e)),d&&l(r,"stack",f(r.stack,1)),p(r,n);var s=[];return v(t,b,{that:s}),l(r,"errors",s),r};a?a(w,y):i(w,y,{name:!0});var x=w.prototype=u(y.prototype,{constructor:s(1,w),message:s(1,""),name:s(1,"AggregateError")});n({global:!0,constructor:!0,arity:2},{AggregateError:w})},9170:function(t,e,r){r(6967)},4668:function(t,e,r){"use strict";var n=r(2109),o=r(6916),c=r(9662),a=r(5005),i=r(8523),u=r(2534),l=r(408),s="No one promise resolved";n({target:"Promise",stat:!0},{any:function(t){var e=this,r=a("AggregateError"),n=i.f(e),f=n.resolve,p=n.reject,v=u((function(){var n=c(e.resolve),a=[],i=0,u=1,v=!1;l(t,(function(t){var c=i++,l=!1;u++,o(n,e,t).then((function(t){l||v||(v=!0,f(t))}),(function(t){l||v||(l=!0,a[c]=t,--u||p(new r(a,s)))}))})),--u||p(new r(a,s))}));return v.error&&p(v.value),n.promise}})},8628:function(t,e,r){r(9170)},6290:function(t,e,r){r(4668)},5238:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(7294);var o=t=>{let{children:e}=t;const r=n.useId();return n.createElement("nav",{className:"breadcrumbs-module--breadcrumbs--e2995","aria-labelledby":r},n.createElement("header",{className:"sr-only"},n.createElement("hgroup",null,n.createElement("h2",{id:r},"Breadcrumbs"))),n.createElement("ol",{className:"breadcrumbs-module--breadcrumb--6b8cf"},e))}},3293:function(t,e,r){"use strict";var n=r(7294),o=r(6138);e.Z=()=>n.createElement(n.Fragment,null,n.createElement("link",{rel:"icon",href:o.Z}),n.createElement("meta",{name:"color-scheme",content:"light dark"}),n.createElement("meta",{name:"theme-color",content:"#6000A0"}))},8660:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(7294);var o=t=>{let{children:e}=t;return n.createElement("div",{className:"page-module--page--acc67"},e)}},3615:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(7294);var o=t=>{let{children:e}=t;return n.createElement("div",{className:"sidebar-module--sidebar--ac64c"},e)}},7585:function(t,e,r){"use strict";var n=r(7294),o=r(9622);e.Z=t=>{let{title:e}=t;const r=(t=>{const e=(0,o.$)().title;return null===t||""===t?e:t+" — "+e})(e);return n.createElement("title",null,r)}},9622:function(t,e,r){"use strict";r.d(e,{$:function(){return o}});var n=r(1883);const o=()=>(0,n.K2)("3000541721").site.siteMetadata},4194:function(t,e,r){"use strict";r.d(e,{q:function(){return o}});var n=r(1883);const o=()=>async t=>{var e,r,o,c;const a=t.nativeEvent,i=t.target,u=a.submitter;let l=u.getAttribute("formaction"),s=u.getAttribute("formenctype"),f=u.getAttribute("formmethod"),p=u.getAttribute("formtarget");if(null!==(e=l)&&void 0!==e||(l=i.getAttribute("action")),null!==(r=s)&&void 0!==r||(s=i.getAttribute("enctype")),null!==(o=f)&&void 0!==o||(f=i.method),null!==(c=p)&&void 0!==c||(p=i.getAttribute("target")),null!==s)return;if("get"!==f)return;if(null!==p)return;t.preventDefault();const v=l+"?"+new URLSearchParams(new FormData(i));await(0,n.c4)(v)}},8122:function(t,e,r){"use strict";r.r(e),r.d(e,{Head:function(){return P},default:function(){return C}});var n=r(7294),o=r(7896),c=r(1883),a=r(5238),i=r(3293),u=r(8660);const l=n.createContext(null),s=t=>{let{name:e,children:r}=t;return n.createElement("fieldset",{className:"select-module--select--8f70a"},n.createElement(l.Provider,{value:e},r))},f=t=>{let{children:e,onChange:r,selected:o,value:c}=t;const a=n.useId(),i=n.useContext(l);return n.createElement("div",{className:"select-module--option--d759a"},n.createElement("input",{id:a,type:"checkbox",name:i,value:c,onChange:r,checked:o}),n.createElement("label",{htmlFor:a},e))};var p=r(3615),v=r(7585),m=r(4194);r(8628),r(6290);const g=Function("return x => import(x);")(),d=async(t,e)=>{const r=await(async t=>{try{return await t}catch(e){return void console.warn(e)}})(g("/static/pagefind/pagefind.js"));if(r)return await r.search(t,e)},h=t=>{let{url:e,meta:{title:r}}=t;return{href:e,value:r}},y={s:"",category:new Set,tag:new Set,place:new Set,person:new Set},b=Object.freeze([]),w=()=>{const[t,e]=n.useState(y),[r,o]=n.useState(b);return n.useEffect((()=>{const[e,r]=(()=>{let t;return[new Promise(((e,r)=>{t=r})),t]})(),n=t=>Promise.any([t,e]);return(async()=>{const[e,r]=(t=>{let{s:e,category:r,tag:n,place:o,person:c}=t;r=Array.from(r),n=Array.from(n),o=Array.from(o),c=Array.from(c),""===e&&(e=null);let a={};return r.length>0&&(a.category=r),n.length>0&&(a.tag=n),o.length>0&&(a.place=o),c.length>0&&(a.person=c),[e,{filters:a}]})(t),{results:c}=await n(d(e,r)),a=(await n(Promise.all(c.slice(0,10).map((t=>t.data()))))).map(h);o(a)})(),r}),[t]),[r,e]};var x="search-module--search--a9d2d";const E=t=>{let{value:e,onChange:r}=t;const o=n.useId();return n.createElement("div",{className:"search-module--query--d9f7b"},n.createElement("label",{htmlFor:o},"Query"),n.createElement("input",{id:o,name:"s",type:"search",value:e,onChange:r}),n.createElement("button",{type:"submit"},"Search"))},S=t=>{let{all:e,name:r,onChange:o,selected:c,children:a}=t;const i=t=>{const{target:{checked:e,value:r}}=t,n=new Set(c);e?n.add(r):n.delete(r),o(n)};return n.createElement(s,{name:r},a,e.map((t=>n.createElement(f,{key:t,onChange:i,selected:null==c?void 0:c.has(t),value:t},t))))},O=t=>{let{links:e}=t;return n.createElement("ul",null,e.map((t=>{let{value:e,href:r}=t;return n.createElement("li",{key:r},n.createElement(c.rU,{to:r},e))})))},j=(t,e)=>{switch(e.type){case"set":return{...t,[e.name]:e.value};case"query":return e.query;default:throw new Error("Unhandled action "+e.type)}},I=()=>{const t=(0,o.useLocation)(),[e,r]=n.useState("Search");return n.useEffect((()=>{const e=new URLSearchParams(t.search).get("s");r(e+" — Search")}),[t]),e},P=()=>{const t=I();return n.createElement(n.Fragment,null,n.createElement(i.Z,null),n.createElement(v.Z,{title:t}),n.createElement("link",{rel:"modulepreload",href:"/static/pagefind/pagefind.js"}),n.createElement("link",{rel:"preload",href:"/static/pagefind/wasm.unknown.pagefind",as:"fetch",crossOrigin:"crossorigin",type:"application/octet-stream"}))},A={s:"",category:new Set,tag:new Set,place:new Set,person:new Set};var C=()=>{const t=n.useId(),e=(0,c.K2)("2533037439").allPost,[r,i]=n.useReducer(j,A),[l,s]=w(),f=(0,m.q)(),v=I(),g=(0,o.useLocation)();n.useEffect((()=>{const t=(t=>{var e;const r=new URLSearchParams(t);return{s:null!==(e=r.get("s"))&&void 0!==e?e:"",category:new Set(r.getAll("category")),tag:new Set(r.getAll("tag")),place:new Set(r.getAll("place")),person:new Set(r.getAll("person"))}})(g.search);i({type:"query",query:t}),s(t)}),[g,s]);const d=(t,e)=>i({type:"set",name:t,value:e}),h=t+"-title",y=t+"-search";return n.createElement(u.Z,null,n.createElement("main",{"aria-describedby":h},n.createElement("header",null,n.createElement("hgroup",null,n.createElement("h1",{id:h},v))),n.createElement(O,{links:l})),n.createElement(p.Z,null,n.createElement("form",{className:x,"aria-describedby":y,role:"search",rel:"search",action:"/search",onSubmit:f},n.createElement("header",{className:"sr-only"},n.createElement("hgroup",null,n.createElement("h2",{id:y},"Search"))),n.createElement(E,{value:r.s,onChange:t=>d("s",t.target.value)}),n.createElement(S,{name:"category",all:e.category,selected:r.category,onChange:t=>d("category",t)},n.createElement("legend",null,"Category")),n.createElement(S,{name:"place",all:e.place,selected:r.place,onChange:t=>d("place",t)},n.createElement("legend",null,"Place")),n.createElement(S,{name:"person",all:e.people,selected:r.person,onChange:t=>d("person",t)},n.createElement("legend",null,"People")),n.createElement(S,{name:"tag",all:e.tags,selected:r.tag,onChange:t=>d("tag",t)},n.createElement("legend",null,"Tags"))),n.createElement(a.Z,null,n.createElement("li",null,n.createElement(c.rU,{to:"/"},"Home")),n.createElement("li",{"aria-current":"page"},n.createElement("cite",null,"Search")))))}},6138:function(t,e){"use strict";e.Z="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIHRleHQgewogICAgICBmb250OiA0MDAgNDJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgIkFwcGxlIENvbG9yIEVtb2ppIiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIgOwogICAgfQogIDwvc3R5bGU+CgogIDxjaXJjbGUgcj0iNTAiIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjNjBhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjYyIiBmb250LXNpemU9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+bXNnPC90ZXh0Pgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-search-jsx-9737d9783fcbf2964848.js.map