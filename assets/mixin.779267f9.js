var Q=Object.defineProperty;var a=(o,p)=>Q(o,"name",{value:p,configurable:!0});function J(o,p,c,u,h,l,y){try{var g=o[l](y),m=g.value}catch(A){c(A);return}g.done?p(m):Promise.resolve(m).then(u,h)}a(J,"asyncGeneratorStep");function V(o){return function(){var p=this,c=arguments;return new Promise(function(u,h){var l=o.apply(p,c);function y(m){J(l,u,h,y,g,"next",m)}a(y,"_next");function g(m){J(l,u,h,y,g,"throw",m)}a(g,"_throw"),y(void 0)})}}a(V,"_asyncToGenerator");var W={exports:{}},q={exports:{}};(function(o){function p(c){return o.exports=p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},o.exports.__esModule=!0,o.exports.default=o.exports,p(c)}a(p,"_typeof"),o.exports=p,o.exports.__esModule=!0,o.exports.default=o.exports})(q);(function(o){var p=q.exports.default;function c(){o.exports=c=a(function(){return u},"_regeneratorRuntime"),o.exports.__esModule=!0,o.exports.default=o.exports;var u={},h=Object.prototype,l=h.hasOwnProperty,y=Object.defineProperty||function(r,t,e){r[t]=e.value},g=typeof Symbol=="function"?Symbol:{},m=g.iterator||"@@iterator",A=g.asyncIterator||"@@asyncIterator",G=g.toStringTag||"@@toStringTag";function w(r,t,e){return Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),r[t]}a(w,"define");try{w({},"")}catch{w=a(function(e,n,s){return e[n]=s},"define")}function U(r,t,e,n){var s=t&&t.prototype instanceof P?t:P,i=Object.create(s.prototype),f=new $(n||[]);return y(i,"_invoke",{value:z(r,e,f)}),i}a(U,"wrap");function I(r,t,e){try{return{type:"normal",arg:r.call(t,e)}}catch(n){return{type:"throw",arg:n}}}a(I,"tryCatch"),u.wrap=U;var b={};function P(){}a(P,"Generator");function M(){}a(M,"GeneratorFunction");function _(){}a(_,"GeneratorFunctionPrototype");var N={};w(N,m,function(){return this});var T=Object.getPrototypeOf,C=T&&T(T(j([])));C&&C!==h&&l.call(C,m)&&(N=C);var k=_.prototype=P.prototype=Object.create(N);function B(r){["next","throw","return"].forEach(function(t){w(r,t,function(e){return this._invoke(t,e)})})}a(B,"defineIteratorMethods");function O(r,t){function e(s,i,f,d){var v=I(r[s],r,i);if(v.type!=="throw"){var L=v.arg,x=L.value;return x&&p(x)=="object"&&l.call(x,"__await")?t.resolve(x.__await).then(function(S){e("next",S,f,d)},function(S){e("throw",S,f,d)}):t.resolve(x).then(function(S){L.value=S,f(L)},function(S){return e("throw",S,f,d)})}d(v.arg)}a(e,"invoke");var n;y(this,"_invoke",{value:a(function(i,f){function d(){return new t(function(v,L){e(i,f,v,L)})}return a(d,"callInvokeWithMethodAndArg"),n=n?n.then(d,d):d()},"value")})}a(O,"AsyncIterator");function z(r,t,e){var n="suspendedStart";return function(s,i){if(n==="executing")throw new Error("Generator is already running");if(n==="completed"){if(s==="throw")throw i;return F()}for(e.method=s,e.arg=i;;){var f=e.delegate;if(f){var d=Y(f,e);if(d){if(d===b)continue;return d}}if(e.method==="next")e.sent=e._sent=e.arg;else if(e.method==="throw"){if(n==="suspendedStart")throw n="completed",e.arg;e.dispatchException(e.arg)}else e.method==="return"&&e.abrupt("return",e.arg);n="executing";var v=I(r,t,e);if(v.type==="normal"){if(n=e.done?"completed":"suspendedYield",v.arg===b)continue;return{value:v.arg,done:e.done}}v.type==="throw"&&(n="completed",e.method="throw",e.arg=v.arg)}}}a(z,"makeInvokeMethod");function Y(r,t){var e=t.method,n=r.iterator[e];if(n===void 0)return t.delegate=null,e==="throw"&&r.iterator.return&&(t.method="return",t.arg=void 0,Y(r,t),t.method==="throw")||e!=="return"&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),b;var s=I(n,r.iterator,t.arg);if(s.type==="throw")return t.method="throw",t.arg=s.arg,t.delegate=null,b;var i=s.arg;return i?i.done?(t[r.resultName]=i.value,t.next=r.nextLoc,t.method!=="return"&&(t.method="next",t.arg=void 0),t.delegate=null,b):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,b)}a(Y,"maybeInvokeDelegate");function K(r){var t={tryLoc:r[0]};1 in r&&(t.catchLoc=r[1]),2 in r&&(t.finallyLoc=r[2],t.afterLoc=r[3]),this.tryEntries.push(t)}a(K,"pushTryEntry");function R(r){var t=r.completion||{};t.type="normal",delete t.arg,r.completion=t}a(R,"resetTryEntry");function $(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(K,this),this.reset(!0)}a($,"Context");function j(r){if(r){var t=r[m];if(t)return t.call(r);if(typeof r.next=="function")return r;if(!isNaN(r.length)){var e=-1,n=a(function s(){for(;++e<r.length;)if(l.call(r,e))return s.value=r[e],s.done=!1,s;return s.value=void 0,s.done=!0,s},"next");return n.next=n}}return{next:F}}a(j,"values");function F(){return{value:void 0,done:!0}}return a(F,"doneResult"),M.prototype=_,y(k,"constructor",{value:_,configurable:!0}),y(_,"constructor",{value:M,configurable:!0}),M.displayName=w(_,G,"GeneratorFunction"),u.isGeneratorFunction=function(r){var t=typeof r=="function"&&r.constructor;return!!t&&(t===M||(t.displayName||t.name)==="GeneratorFunction")},u.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,_):(r.__proto__=_,w(r,G,"GeneratorFunction")),r.prototype=Object.create(k),r},u.awrap=function(r){return{__await:r}},B(O.prototype),w(O.prototype,A,function(){return this}),u.AsyncIterator=O,u.async=function(r,t,e,n,s){s===void 0&&(s=Promise);var i=new O(U(r,t,e,n),s);return u.isGeneratorFunction(t)?i:i.next().then(function(f){return f.done?f.value:i.next()})},B(k),w(k,G,"Generator"),w(k,m,function(){return this}),w(k,"toString",function(){return"[object Generator]"}),u.keys=function(r){var t=Object(r),e=[];for(var n in t)e.push(n);return e.reverse(),a(function s(){for(;e.length;){var i=e.pop();if(i in t)return s.value=i,s.done=!1,s}return s.done=!0,s},"next")},u.values=j,$.prototype={constructor:$,reset:a(function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!t)for(var e in this)e.charAt(0)==="t"&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},"reset"),stop:a(function(){this.done=!0;var t=this.tryEntries[0].completion;if(t.type==="throw")throw t.arg;return this.rval},"stop"),dispatchException:a(function(t){if(this.done)throw t;var e=this;function n(L,x){return f.type="throw",f.arg=t,e.next=L,x&&(e.method="next",e.arg=void 0),!!x}a(n,"handle");for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],f=i.completion;if(i.tryLoc==="root")return n("end");if(i.tryLoc<=this.prev){var d=l.call(i,"catchLoc"),v=l.call(i,"finallyLoc");if(d&&v){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(d){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!v)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},"dispatchException"),abrupt:a(function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.tryLoc<=this.prev&&l.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var i=s;break}}i&&(t==="break"||t==="continue")&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var f=i?i.completion:{};return f.type=t,f.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(f)},"abrupt"),complete:a(function(t,e){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&e&&(this.next=e),b},"complete"),finish:a(function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),b}},"finish"),catch:a(function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var s=n.completion;if(s.type==="throw"){var i=s.arg;R(n)}return i}}throw new Error("illegal catch attempt")},"_catch"),delegateYield:a(function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},this.method==="next"&&(this.arg=void 0),b},"delegateYield")},u}a(c,"_regeneratorRuntime"),o.exports=c,o.exports.__esModule=!0,o.exports.default=o.exports})(W);var E=W.exports(),D=E;try{regeneratorRuntime=E}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=E:Function("r","regeneratorRuntime = r")(E)}function X(){var o,p,c,u={},h=window;return(o=h.webkit)!==null&&o!==void 0&&(p=o.messageHandlers)!==null&&p!==void 0&&p.MixinContext?(u=JSON.parse(prompt("MixinContext.getContext()")),u.platform=u.platform||"iOS"):typeof((c=h.MixinContext)===null||c===void 0?void 0:c.getContext)=="function"&&(u=JSON.parse(h.MixinContext.getContext()),u.platform=u.platform||"Android"),u}a(X,"getMixinContext");function tt(){var o=X().platform;return o==="iOS"||o==="Android"}a(tt,"isMixin");function et(o){return H.apply(this,arguments)}a(et,"getAssets");function H(){return H=V(D.mark(a(function o(p){var c;return D.wrap(a(function(h){for(;;)switch(h.prev=h.next){case 0:return c=window,h.abrupt("return",new Promise(function(l,y){window.MixinBridgeAssetsCallbackFunction=function(g){l(g)},c.webkit&&c.webkit.messageHandlers&&c.webkit.messageHandlers.MixinContext&&c.webkit.messageHandlers.getAssets?c.webkit.messageHandlers.getAssets.postMessage([p,"MixinBridgeAssetsCallbackFunction"]):c.MixinContext&&typeof c.MixinContext.getAssets=="function"?c.MixinContext.getAssets(p,"MixinBridgeAssetsCallbackFunction"):y(new Error("no support getAssets"))}));case 2:case"end":return h.stop()}},"_callee$"),o)},"_callee"))),H.apply(this,arguments)}a(H,"_getAssets");function rt(o){return"https://mixin.one/pay/".concat(o.recipient,"?asset=").concat(o.assetId,"&amount=").concat(o.amount,"&memo=").concat(encodeURIComponent(o.memo),"&trace=").concat(o.traceId)}a(rt,"genSafePaymentUrl");function nt(o){var p=o.amount,c=o.assetId,u=o.memo,h=o.recipient,l=o.traceId;return"mixin://pay?recipient=".concat(h,"&asset=").concat(c,"&amount=").concat(p,"&trace=").concat(l,"&memo=").concat(encodeURIComponent(u))}a(nt,"genPaymentUrl");export{V as _,rt as a,et as b,nt as g,tt as i,D as r};
//# sourceMappingURL=mixin.779267f9.js.map
