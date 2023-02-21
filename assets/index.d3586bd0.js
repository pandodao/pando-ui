var H=Object.defineProperty;var o=(e,t)=>H(e,"name",{value:t,configurable:!0});import{y as P,z as T}from"./helpers.f4a4e1c6.js";const E=Symbol("rippleStop"),Y=80;function y(e,t){e.style.transform=t,e.style.webkitTransform=t}o(y,"transform");function L(e){return e.constructor.name==="TouchEvent"}o(L,"isTouchEvent");function C(e){return e.constructor.name==="KeyboardEvent"}o(C,"isKeyboardEvent");const X=o(function(e,t){var i;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,r=0;if(!C(e)){const c=t.getBoundingClientRect(),u=L(e)?e.touches[e.touches.length-1]:e;a=u.clientX-c.left,r=u.clientY-c.top}let s=0,l=.3;(i=t._ripple)!=null&&i.circle?(l=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((a-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const v=`${(t.clientWidth-s*2)/2}px`,f=`${(t.clientHeight-s*2)/2}px`,h=n.center?v:`${a-s}px`,w=n.center?f:`${r-s}px`;return{radius:s,scale:l,x:h,y:w,centerX:v,centerY:f}},"calculate"),_={show(e,t){var i;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(t!=null&&(i=t._ripple)!=null&&i.enabled))return;const a=document.createElement("span"),r=document.createElement("span");a.appendChild(r),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:s,scale:l,x:v,y:f,centerX:h,centerY:w}=X(e,t,n),c=`${s*2}px`;r.className="v-ripple__animation",r.style.width=c,r.style.height=c,t.appendChild(a);const u=window.getComputedStyle(t);u&&u.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),y(r,`translate(${v}, ${f}) scale3d(${l},${l},${l})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),y(r,`translate(${h}, ${w}) scale3d(1,1,1)`)},0)},hide(e){var t;if(!(e!=null&&(t=e._ripple)!=null&&t.enabled))return;const i=e.getElementsByClassName("v-ripple__animation");if(i.length===0)return;const n=i[i.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),r=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var s;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((s=n.parentNode)==null?void 0:s.parentNode)===e&&e.removeChild(n.parentNode)},300)},r)}};function $(e){return typeof e>"u"||!!e}o($,"isRippleEnabled");function d(e){const t={},i=e.currentTarget;if(!(!(i!=null&&i._ripple)||i._ripple.touched||e[E])){if(e[E]=!0,L(e))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(t.center=i._ripple.centered||C(e),i._ripple.class&&(t.class=i._ripple.class),L(e)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=()=>{_.show(e,i,t)},i._ripple.showTimer=window.setTimeout(()=>{var n;i!=null&&(n=i._ripple)!=null&&n.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)},Y)}else _.show(e,i,t)}}o(d,"rippleShow");function g(e){e[E]=!0}o(g,"rippleStop");function p(e){const t=e.currentTarget;if(!(!t||!t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{p(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),_.hide(t)}}o(p,"rippleHide");function b(e){const t=e.currentTarget;!t||!t._ripple||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}o(b,"rippleCancelShow");let m=!1;function k(e){!m&&(e.keyCode===T.enter||e.keyCode===T.space)&&(m=!0,d(e))}o(k,"keyboardRippleShow");function R(e){m=!1,p(e)}o(R,"keyboardRippleHide");function N(e){m&&(m=!1,p(e))}o(N,"focusRippleHide");function x(e,t,i){var s;const{value:n,modifiers:a}=t,r=$(n);if(r||_.hide(e),e._ripple=(s=e._ripple)!=null?s:{},e._ripple.enabled=r,e._ripple.centered=a.center,e._ripple.circle=a.circle,P(n)&&n.class&&(e._ripple.class=n.class),r&&!i){if(a.stop){e.addEventListener("touchstart",g,{passive:!0}),e.addEventListener("mousedown",g);return}e.addEventListener("touchstart",d,{passive:!0}),e.addEventListener("touchend",p,{passive:!0}),e.addEventListener("touchmove",b,{passive:!0}),e.addEventListener("touchcancel",p),e.addEventListener("mousedown",d),e.addEventListener("mouseup",p),e.addEventListener("mouseleave",p),e.addEventListener("keydown",k),e.addEventListener("keyup",R),e.addEventListener("blur",N),e.addEventListener("dragstart",p,{passive:!0})}else!r&&i&&S(e)}o(x,"updateRipple");function S(e){e.removeEventListener("mousedown",d),e.removeEventListener("touchstart",d),e.removeEventListener("touchend",p),e.removeEventListener("touchmove",b),e.removeEventListener("touchcancel",p),e.removeEventListener("mouseup",p),e.removeEventListener("mouseleave",p),e.removeEventListener("keydown",k),e.removeEventListener("keyup",R),e.removeEventListener("dragstart",p),e.removeEventListener("blur",N)}o(S,"removeListeners");function B(e,t){x(e,t,!1)}o(B,"mounted");function M(e){delete e._ripple,S(e)}o(M,"unmounted");function V(e,t){if(t.value===t.oldValue)return;const i=$(t.oldValue);x(e,t,i)}o(V,"updated");const z={mounted:B,unmounted:M,updated:V};export{z as R};
//# sourceMappingURL=index.d3586bd0.js.map
