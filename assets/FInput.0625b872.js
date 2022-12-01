var De=Object.defineProperty;var O=(a,g)=>De(a,"name",{value:g,configurable:!0});import{a as E,b as te,d as oe,t as Fe,f as Le,w as Ie,v as ke,F as ge,m as me,r as Re,K as Me,n as $e,A as be}from"./vue.esm-bundler.03d0f9c2.js";import{V as Ue,m as Ge}from"./index.98b5e059.js";import{a as qe,b as He,u as Ae,e as Xe,m as ze,f as We,V as Ye}from"./VLabel.f4f94bb7.js";import{d as Se,u as pe,a as Ke,b as Pe,g as Je}from"./useRender.4b8f74ab.js";import{I as _e}from"./VIcon.48347d4a.js";import{m as Qe,a as Ze,L as je}from"./loader.30593133.js";import{m as en,p as nn,a as tn,u as rn}from"./color.ec9b773d.js";import{E as Ne,c as ln,x as on,p as an,f as sn,e as un}from"./helpers.11996f79.js";import{n as fn,a as cn,s as dn}from"./easing.d7926d43.js";import{I as hn}from"./index.7705c375.js";import{f as vn}from"./forwardRefs.c5465513.js";import{u as gn}from"./proxiedModel.12bae561.js";import{m as mn,M as pn}from"./transition.37736cb0.js";const de=Se({name:"VFieldLabel",props:{floating:Boolean},setup(a,g){let{slots:w}=g;return pe(()=>E(qe,{class:["v-field-label",{"v-field-label--floating":a.floating}],"aria-hidden":a.floating||void 0},w)),{}}}),wn=["underlined","outlined","filled","solo","plain"],Be=Ke({appendInnerIcon:_e,bgColor:String,clearable:Boolean,clearIcon:{type:_e,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:_e,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:a=>wn.includes(a)},"onClick:clear":Ne,"onClick:appendInner":Ne,"onClick:prependInner":Ne,...en(),...Qe()},"v-field"),Ve=Pe()({name:"VField",inheritAttrs:!1,props:{id:String,...He(),...Be()},emits:{"click:control":a=>!0,"update:focused":a=>!0,"update:modelValue":a=>!0},setup(a,g){let{attrs:w,emit:_,slots:d}=g;const{themeClasses:k}=nn(a),{loaderClasses:C}=Ze(a),{focusClasses:y,isFocused:S,focus:D,blur:z}=Ae(a),{InputIcon:$}=Xe(a),G=te(()=>a.dirty||a.active),X=te(()=>!a.singleLine&&!!(a.label||d.label)),b=Je(),W=te(()=>a.id||`input-${b}`),Y=oe(),K=oe(),v=oe(),{backgroundColorClasses:le,backgroundColorStyles:ae}=tn(Fe(a,"bgColor")),{textColorClasses:P,textColorStyles:R}=rn(te(()=>G.value&&S.value&&!a.error&&!a.disabled?a.color:void 0));Le(G,n=>{if(X.value){const t=Y.value.$el,s=K.value.$el,r=fn(t),o=s.getBoundingClientRect(),c=o.x-r.x,i=o.y-r.y-(r.height/2-o.height/2),l=o.width/.75,f=Math.abs(l-r.width)>1?{maxWidth:ln(l)}:void 0,u=getComputedStyle(t),h=getComputedStyle(s),m=parseFloat(u.transitionDuration)*1e3||150,p=parseFloat(h.getPropertyValue("--v-field-label-scale")),N=h.getPropertyValue("color");t.style.visibility="visible",s.style.visibility="hidden",cn(t,{transform:`translate(${c}px, ${i}px) scale(${p})`,color:N,...f},{duration:m,easing:dn,direction:n?"normal":"reverse"}).finished.then(()=>{t.style.removeProperty("visibility"),s.style.removeProperty("visibility")})}},{flush:"post"});const F=te(()=>({isActive:G,isFocused:S,controlRef:v,blur:z,focus:D}));function e(n){n.target!==document.activeElement&&n.preventDefault(),_("click:control",n)}return O(e,"onClick"),pe(()=>{var n,t,s;const r=a.variant==="outlined",o=d["prepend-inner"]||a.prependInnerIcon,c=!!(a.clearable||d.clear),i=!!(d["append-inner"]||a.appendInnerIcon||c),l=d.label?d.label({label:a.label,props:{for:W.value}}):a.label;return E("div",me({class:["v-field",{"v-field--active":G.value,"v-field--appended":i,"v-field--disabled":a.disabled,"v-field--dirty":a.dirty,"v-field--error":a.error,"v-field--has-background":!!a.bgColor,"v-field--persistent-clear":a.persistentClear,"v-field--prepended":o,"v-field--reverse":a.reverse,"v-field--single-line":a.singleLine,"v-field--no-label":!l,[`v-field--variant-${a.variant}`]:!0},k.value,le.value,y.value,C.value],style:[ae.value,R.value],onClick:e},w),[E("div",{class:"v-field__overlay"},null),E(je,{name:"v-field",active:a.loading,color:a.error?"error":a.color},{default:d.loader}),o&&E("div",{key:"prepend",class:"v-field__prepend-inner"},[a.prependInnerIcon&&E($,{key:"prepend-icon",name:"prependInner"},null),(n=d["prepend-inner"])==null?void 0:n.call(d,F.value)]),E("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(a.variant)&&X.value&&E(de,{key:"floating-label",ref:K,class:[P.value],floating:!0,for:W.value},{default:()=>[l]}),E(de,{ref:Y,for:W.value},{default:()=>[l]}),(t=d.default)==null?void 0:t.call(d,{...F.value,props:{id:W.value,class:"v-field__input"},focus:D,blur:z})]),c&&E(Ue,{key:"clear"},{default:()=>[Ie(E("div",{class:"v-field__clearable"},[d.clear?d.clear():E($,{name:"clear"},null)]),[[ke,a.dirty]])]}),i&&E("div",{key:"append",class:"v-field__append-inner"},[(s=d["append-inner"])==null?void 0:s.call(d,F.value),a.appendInnerIcon&&E($,{key:"append-icon",name:"appendInner"},null)]),E("div",{class:["v-field__outline",P.value]},[r&&E(ge,null,[E("div",{class:"v-field__outline__start"},null),X.value&&E("div",{class:"v-field__outline__notch"},[E(de,{ref:K,floating:!0,for:W.value},{default:()=>[l]})]),E("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(a.variant)&&X.value&&E(de,{ref:K,floating:!0,for:W.value},{default:()=>[l]})])])}),{controlRef:v}}});function xn(a){const g=Object.keys(Ve.props).filter(w=>!on(w));return an(a,g)}O(xn,"filterFieldProps");const _n=Se({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...mn({transition:{component:Ge}})},setup(a,g){let{slots:w}=g;const _=te(()=>a.max?`${a.value} / ${a.max}`:String(a.value));return pe(()=>E(pn,{transition:a.transition},{default:()=>[Ie(E("div",{class:"v-counter"},[w.default?w.default({counter:_.value,max:a.max,value:a.value}):_.value]),[[ke,a.active]])]})),{}}}),Nn=["color","file","time","date","datetime-local","week","month"],En=Pe()({name:"VTextField",directives:{Intersect:hn},inheritAttrs:!1,props:{autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...ze(),...Be()},emits:{"click:control":a=>!0,"click:input":a=>!0,"update:focused":a=>!0,"update:modelValue":a=>!0},setup(a,g){let{attrs:w,emit:_,slots:d}=g;const k=gn(a,"modelValue"),{isFocused:C,focus:y,blur:S}=Ae(a),D=te(()=>{var P;return typeof a.counterValue=="function"?a.counterValue(k.value):((P=k.value)!=null?P:"").toString().length}),z=te(()=>{if(w.maxlength)return w.maxlength;if(!(!a.counter||typeof a.counter!="number"&&typeof a.counter!="string"))return a.counter});function $(P,R){var F,e;!a.autofocus||!P||(F=R[0].target)==null||(e=F.focus)==null||e.call(F)}O($,"onIntersect");const G=oe(),X=oe(),b=oe(),W=te(()=>Nn.includes(a.type)||a.persistentPlaceholder||C.value),Y=te(()=>a.messages.length?a.messages:C.value||a.persistentHint?a.hint:"");function K(){if(b.value!==document.activeElement){var P;(P=b.value)==null||P.focus()}C.value||y()}O(K,"onFocus");function v(P){K(),_("click:control",P)}O(v,"onControlClick");function le(P){P.stopPropagation(),K(),$e(()=>{k.value=null,un(a["onClick:clear"],P)})}O(le,"onClear");function ae(P){k.value=P.target.value}return O(ae,"onInput"),pe(()=>{const P=!!(d.counter||a.counter||a.counterValue),R=!!(P||d.details),[F,e]=sn(w),[{modelValue:n,...t}]=We(a),[s]=xn(a);return E(Ye,me({ref:G,modelValue:k.value,"onUpdate:modelValue":r=>k.value=r,class:["v-text-field",{"v-text-field--prefixed":a.prefix,"v-text-field--suffixed":a.suffix,"v-text-field--flush-details":["plain","underlined"].includes(a.variant)}],"onClick:prepend":a["onClick:prepend"],"onClick:append":a["onClick:append"]},F,t,{focused:C.value,messages:Y.value}),{...d,default:r=>{let{id:o,isDisabled:c,isDirty:i,isReadonly:l,isValid:f}=r;return E(Ve,me({ref:X,onMousedown:u=>{u.target!==b.value&&u.preventDefault()},"onClick:control":v,"onClick:clear":le,"onClick:prependInner":a["onClick:prependInner"],"onClick:appendInner":a["onClick:appendInner"],role:"textbox"},s,{id:o.value,active:W.value||i.value,dirty:i.value||a.dirty,focused:C.value,error:f.value===!1}),{...d,default:u=>{let{props:{class:h,...m}}=u;const p=Ie(E("input",me({ref:b,value:k.value,onInput:ae,autofocus:a.autofocus,readonly:l.value,disabled:c.value,name:a.name,placeholder:a.placeholder,size:1,type:a.type,onFocus:K,onBlur:S},m,e),null),[[Re("intersect"),{handler:$},null,{once:!0}]]);return E(ge,null,[a.prefix&&E("span",{class:"v-text-field__prefix"},[a.prefix]),d.default?E("div",{class:h,onClick:N=>_("click:input",N),"data-no-activator":""},[d.default(),p]):Me(p,{class:h}),a.suffix&&E("span",{class:"v-text-field__suffix"},[a.suffix])])}})},details:R?r=>{var o;return E(ge,null,[(o=d.details)==null?void 0:o.call(d,r),P&&E(ge,null,[E("span",null,null),E(_n,{active:a.persistentCounter||C.value,value:D.value,max:z.value},d.counter)])])}:void 0})}),vn({},G,X,b)}});var Cn=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,Ee=Math.ceil,ne=Math.floor,H="[BigNumber Error] ",Oe=H+"Number primitive has more than 15 significant digits: ",j=1e14,x=14,Ce=9007199254740991,ye=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],re=1e7,M=1e9;function Te(a){var g,w,_,d=v.prototype={constructor:v,toString:null,valueOf:null},k=new v(1),C=20,y=4,S=-7,D=21,z=-1e7,$=1e7,G=!1,X=1,b=0,W={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},Y="0123456789abcdefghijklmnopqrstuvwxyz",K=!0;function v(e,n){var t,s,r,o,c,i,l,f,u=this;if(!(u instanceof v))return new v(e,n);if(n==null){if(e&&e._isBigNumber===!0){u.s=e.s,!e.c||e.e>$?u.c=u.e=null:e.e<z?u.c=[u.e=0]:(u.e=e.e,u.c=e.c.slice());return}if((i=typeof e=="number")&&e*0==0){if(u.s=1/e<0?(e=-e,-1):1,e===~~e){for(o=0,c=e;c>=10;c/=10,o++);o>$?u.c=u.e=null:(u.e=o,u.c=[e]);return}f=String(e)}else{if(!Cn.test(f=String(e)))return _(u,f,i);u.s=f.charCodeAt(0)==45?(f=f.slice(1),-1):1}(o=f.indexOf("."))>-1&&(f=f.replace(".","")),(c=f.search(/e/i))>0?(o<0&&(o=c),o+=+f.slice(c+1),f=f.substring(0,c)):o<0&&(o=f.length)}else{if(B(n,2,Y.length,"Base"),n==10&&K)return u=new v(e),R(u,C+u.e+1,y);if(f=String(e),i=typeof e=="number"){if(e*0!=0)return _(u,f,i,n);if(u.s=1/e<0?(f=f.slice(1),-1):1,v.DEBUG&&f.replace(/^0\.0*|\./,"").length>15)throw Error(Oe+e)}else u.s=f.charCodeAt(0)===45?(f=f.slice(1),-1):1;for(t=Y.slice(0,n),o=c=0,l=f.length;c<l;c++)if(t.indexOf(s=f.charAt(c))<0){if(s=="."){if(c>o){o=l;continue}}else if(!r&&(f==f.toUpperCase()&&(f=f.toLowerCase())||f==f.toLowerCase()&&(f=f.toUpperCase()))){r=!0,c=-1,o=0;continue}return _(u,String(e),i,n)}i=!1,f=w(f,n,10,u.s),(o=f.indexOf("."))>-1?f=f.replace(".",""):o=f.length}for(c=0;f.charCodeAt(c)===48;c++);for(l=f.length;f.charCodeAt(--l)===48;);if(f=f.slice(c,++l)){if(l-=c,i&&v.DEBUG&&l>15&&(e>Ce||e!==ne(e)))throw Error(Oe+u.s*e);if((o=o-c-1)>$)u.c=u.e=null;else if(o<z)u.c=[u.e=0];else{if(u.e=o,u.c=[],c=(o+1)%x,o<0&&(c+=x),c<l){for(c&&u.c.push(+f.slice(0,c)),l-=x;c<l;)u.c.push(+f.slice(c,c+=x));c=x-(f=f.slice(c)).length}else c-=l;for(;c--;f+="0");u.c.push(+f)}}else u.c=[u.e=0]}O(v,"BigNumber"),v.clone=Te,v.ROUND_UP=0,v.ROUND_DOWN=1,v.ROUND_CEIL=2,v.ROUND_FLOOR=3,v.ROUND_HALF_UP=4,v.ROUND_HALF_DOWN=5,v.ROUND_HALF_EVEN=6,v.ROUND_HALF_CEIL=7,v.ROUND_HALF_FLOOR=8,v.EUCLID=9,v.config=v.set=function(e){var n,t;if(e!=null)if(typeof e=="object"){if(e.hasOwnProperty(n="DECIMAL_PLACES")&&(t=e[n],B(t,0,M,n),C=t),e.hasOwnProperty(n="ROUNDING_MODE")&&(t=e[n],B(t,0,8,n),y=t),e.hasOwnProperty(n="EXPONENTIAL_AT")&&(t=e[n],t&&t.pop?(B(t[0],-M,0,n),B(t[1],0,M,n),S=t[0],D=t[1]):(B(t,-M,M,n),S=-(D=t<0?-t:t))),e.hasOwnProperty(n="RANGE"))if(t=e[n],t&&t.pop)B(t[0],-M,-1,n),B(t[1],1,M,n),z=t[0],$=t[1];else if(B(t,-M,M,n),t)z=-($=t<0?-t:t);else throw Error(H+n+" cannot be zero: "+t);if(e.hasOwnProperty(n="CRYPTO"))if(t=e[n],t===!!t)if(t)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))G=t;else throw G=!t,Error(H+"crypto unavailable");else G=t;else throw Error(H+n+" not true or false: "+t);if(e.hasOwnProperty(n="MODULO_MODE")&&(t=e[n],B(t,0,9,n),X=t),e.hasOwnProperty(n="POW_PRECISION")&&(t=e[n],B(t,0,M,n),b=t),e.hasOwnProperty(n="FORMAT"))if(t=e[n],typeof t=="object")W=t;else throw Error(H+n+" not an object: "+t);if(e.hasOwnProperty(n="ALPHABET"))if(t=e[n],typeof t=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(t))K=t.slice(0,10)=="0123456789",Y=t;else throw Error(H+n+" invalid: "+t)}else throw Error(H+"Object expected: "+e);return{DECIMAL_PLACES:C,ROUNDING_MODE:y,EXPONENTIAL_AT:[S,D],RANGE:[z,$],CRYPTO:G,MODULO_MODE:X,POW_PRECISION:b,FORMAT:W,ALPHABET:Y}},v.isBigNumber=function(e){if(!e||e._isBigNumber!==!0)return!1;if(!v.DEBUG)return!0;var n,t,s=e.c,r=e.e,o=e.s;e:if({}.toString.call(s)=="[object Array]"){if((o===1||o===-1)&&r>=-M&&r<=M&&r===ne(r)){if(s[0]===0){if(r===0&&s.length===1)return!0;break e}if(n=(r+1)%x,n<1&&(n+=x),String(s[0]).length==n){for(n=0;n<s.length;n++)if(t=s[n],t<0||t>=j||t!==ne(t))break e;if(t!==0)return!0}}}else if(s===null&&r===null&&(o===null||o===1||o===-1))return!0;throw Error(H+"Invalid BigNumber: "+e)},v.maximum=v.max=function(){return ae(arguments,d.lt)},v.minimum=v.min=function(){return ae(arguments,d.gt)},v.random=function(){var e=9007199254740992,n=Math.random()*e&2097151?function(){return ne(Math.random()*e)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(t){var s,r,o,c,i,l=0,f=[],u=new v(k);if(t==null?t=C:B(t,0,M),c=Ee(t/x),G)if(crypto.getRandomValues){for(s=crypto.getRandomValues(new Uint32Array(c*=2));l<c;)i=s[l]*131072+(s[l+1]>>>11),i>=9e15?(r=crypto.getRandomValues(new Uint32Array(2)),s[l]=r[0],s[l+1]=r[1]):(f.push(i%1e14),l+=2);l=c/2}else if(crypto.randomBytes){for(s=crypto.randomBytes(c*=7);l<c;)i=(s[l]&31)*281474976710656+s[l+1]*1099511627776+s[l+2]*4294967296+s[l+3]*16777216+(s[l+4]<<16)+(s[l+5]<<8)+s[l+6],i>=9e15?crypto.randomBytes(7).copy(s,l):(f.push(i%1e14),l+=7);l=c/7}else throw G=!1,Error(H+"crypto unavailable");if(!G)for(;l<c;)i=n(),i<9e15&&(f[l++]=i%1e14);for(c=f[--l],t%=x,c&&t&&(i=ye[x-t],f[l]=ne(c/i)*i);f[l]===0;f.pop(),l--);if(l<0)f=[o=0];else{for(o=-1;f[0]===0;f.splice(0,1),o-=x);for(l=1,i=f[0];i>=10;i/=10,l++);l<x&&(o-=x-l)}return u.e=o,u.c=f,u}}(),v.sum=function(){for(var e=1,n=arguments,t=new v(n[0]);e<n.length;)t=t.plus(n[e++]);return t},w=function(){var e="0123456789";function n(t,s,r,o){for(var c,i=[0],l,f=0,u=t.length;f<u;){for(l=i.length;l--;i[l]*=s);for(i[0]+=o.indexOf(t.charAt(f++)),c=0;c<i.length;c++)i[c]>r-1&&(i[c+1]==null&&(i[c+1]=0),i[c+1]+=i[c]/r|0,i[c]%=r)}return i.reverse()}return O(n,"toBaseOut"),function(t,s,r,o,c){var i,l,f,u,h,m,p,N,V=t.indexOf("."),L=C,I=y;for(V>=0&&(u=b,b=0,t=t.replace(".",""),N=new v(s),m=N.pow(t.length-V),b=u,N.c=n(ie(Q(m.c),m.e,"0"),10,r,e),N.e=N.c.length),p=n(t,s,r,c?(i=Y,e):(i=e,Y)),f=u=p.length;p[--u]==0;p.pop());if(!p[0])return i.charAt(0);if(V<0?--f:(m.c=p,m.e=f,m.s=o,m=g(m,N,L,I,r),p=m.c,h=m.r,f=m.e),l=f+L+1,V=p[l],u=r/2,h=h||l<0||p[l+1]!=null,h=I<4?(V!=null||h)&&(I==0||I==(m.s<0?3:2)):V>u||V==u&&(I==4||h||I==6&&p[l-1]&1||I==(m.s<0?8:7)),l<1||!p[0])t=h?ie(i.charAt(1),-L,i.charAt(0)):i.charAt(0);else{if(p.length=l,h)for(--r;++p[--l]>r;)p[l]=0,l||(++f,p=[1].concat(p));for(u=p.length;!p[--u];);for(V=0,t="";V<=u;t+=i.charAt(p[V++]));t=ie(t,f,i.charAt(0))}return t}}(),g=function(){function e(s,r,o){var c,i,l,f,u=0,h=s.length,m=r%re,p=r/re|0;for(s=s.slice();h--;)l=s[h]%re,f=s[h]/re|0,c=p*l+f*m,i=m*l+c%re*re+u,u=(i/o|0)+(c/re|0)+p*f,s[h]=i%o;return u&&(s=[u].concat(s)),s}O(e,"multiply");function n(s,r,o,c){var i,l;if(o!=c)l=o>c?1:-1;else for(i=l=0;i<o;i++)if(s[i]!=r[i]){l=s[i]>r[i]?1:-1;break}return l}O(n,"compare");function t(s,r,o,c){for(var i=0;o--;)s[o]-=i,i=s[o]<r[o]?1:0,s[o]=i*c+s[o]-r[o];for(;!s[0]&&s.length>1;s.splice(0,1));}return O(t,"subtract"),function(s,r,o,c,i){var l,f,u,h,m,p,N,V,L,I,A,U,ce,we,xe,ee,ue,J=s.s==r.s?1:-1,q=s.c,T=r.c;if(!q||!q[0]||!T||!T[0])return new v(!s.s||!r.s||(q?T&&q[0]==T[0]:!T)?NaN:q&&q[0]==0||!T?J*0:J/0);for(V=new v(J),L=V.c=[],f=s.e-r.e,J=o+f+1,i||(i=j,f=Z(s.e/x)-Z(r.e/x),J=J/x|0),u=0;T[u]==(q[u]||0);u++);if(T[u]>(q[u]||0)&&f--,J<0)L.push(1),h=!0;else{for(we=q.length,ee=T.length,u=0,J+=2,m=ne(i/(T[0]+1)),m>1&&(T=e(T,m,i),q=e(q,m,i),ee=T.length,we=q.length),ce=ee,I=q.slice(0,ee),A=I.length;A<ee;I[A++]=0);ue=T.slice(),ue=[0].concat(ue),xe=T[0],T[1]>=i/2&&xe++;do{if(m=0,l=n(T,I,ee,A),l<0){if(U=I[0],ee!=A&&(U=U*i+(I[1]||0)),m=ne(U/xe),m>1)for(m>=i&&(m=i-1),p=e(T,m,i),N=p.length,A=I.length;n(p,I,N,A)==1;)m--,t(p,ee<N?ue:T,N,i),N=p.length,l=1;else m==0&&(l=m=1),p=T.slice(),N=p.length;if(N<A&&(p=[0].concat(p)),t(I,p,A,i),A=I.length,l==-1)for(;n(T,I,ee,A)<1;)m++,t(I,ee<A?ue:T,A,i),A=I.length}else l===0&&(m++,I=[0]);L[u++]=m,I[0]?I[A++]=q[ce]||0:(I=[q[ce]],A=1)}while((ce++<we||I[0]!=null)&&J--);h=I[0]!=null,L[0]||L.splice(0,1)}if(i==j){for(u=1,J=L[0];J>=10;J/=10,u++);R(V,o+(V.e=u+f*x-1)+1,c,h)}else V.e=f,V.r=+h;return V}}();function le(e,n,t,s){var r,o,c,i,l;if(t==null?t=y:B(t,0,8),!e.c)return e.toString();if(r=e.c[0],c=e.e,n==null)l=Q(e.c),l=s==1||s==2&&(c<=S||c>=D)?ve(l,c):ie(l,c,"0");else if(e=R(new v(e),n,t),o=e.e,l=Q(e.c),i=l.length,s==1||s==2&&(n<=o||o<=S)){for(;i<n;l+="0",i++);l=ve(l,o)}else if(n-=c,l=ie(l,o,"0"),o+1>i){if(--n>0)for(l+=".";n--;l+="0");}else if(n+=o-i,n>0)for(o+1==i&&(l+=".");n--;l+="0");return e.s<0&&r?"-"+l:l}O(le,"format");function ae(e,n){for(var t,s=1,r=new v(e[0]);s<e.length;s++)if(t=new v(e[s]),t.s)n.call(r,t)&&(r=t);else{r=t;break}return r}O(ae,"maxOrMin");function P(e,n,t){for(var s=1,r=n.length;!n[--r];n.pop());for(r=n[0];r>=10;r/=10,s++);return(t=s+t*x-1)>$?e.c=e.e=null:t<z?e.c=[e.e=0]:(e.e=t,e.c=n),e}O(P,"normalise"),_=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,n=/^([^.]+)\.$/,t=/^\.([^.]+)$/,s=/^-?(Infinity|NaN)$/,r=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,c,i,l){var f,u=i?c:c.replace(r,"");if(s.test(u))o.s=isNaN(u)?null:u<0?-1:1;else{if(!i&&(u=u.replace(e,function(h,m,p){return f=(p=p.toLowerCase())=="x"?16:p=="b"?2:8,!l||l==f?m:h}),l&&(f=l,u=u.replace(n,"$1").replace(t,"0.$1")),c!=u))return new v(u,f);if(v.DEBUG)throw Error(H+"Not a"+(l?" base "+l:"")+" number: "+c);o.s=null}o.c=o.e=null}}();function R(e,n,t,s){var r,o,c,i,l,f,u,h=e.c,m=ye;if(h){e:{for(r=1,i=h[0];i>=10;i/=10,r++);if(o=n-r,o<0)o+=x,c=n,l=h[f=0],u=l/m[r-c-1]%10|0;else if(f=Ee((o+1)/x),f>=h.length)if(s){for(;h.length<=f;h.push(0));l=u=0,r=1,o%=x,c=o-x+1}else break e;else{for(l=i=h[f],r=1;i>=10;i/=10,r++);o%=x,c=o-x+r,u=c<0?0:l/m[r-c-1]%10|0}if(s=s||n<0||h[f+1]!=null||(c<0?l:l%m[r-c-1]),s=t<4?(u||s)&&(t==0||t==(e.s<0?3:2)):u>5||u==5&&(t==4||s||t==6&&(o>0?c>0?l/m[r-c]:0:h[f-1])%10&1||t==(e.s<0?8:7)),n<1||!h[0])return h.length=0,s?(n-=e.e+1,h[0]=m[(x-n%x)%x],e.e=-n||0):h[0]=e.e=0,e;if(o==0?(h.length=f,i=1,f--):(h.length=f+1,i=m[x-o],h[f]=c>0?ne(l/m[r-c]%m[c])*i:0),s)for(;;)if(f==0){for(o=1,c=h[0];c>=10;c/=10,o++);for(c=h[0]+=i,i=1;c>=10;c/=10,i++);o!=i&&(e.e++,h[0]==j&&(h[0]=1));break}else{if(h[f]+=i,h[f]!=j)break;h[f--]=0,i=1}for(o=h.length;h[--o]===0;h.pop());}e.e>$?e.c=e.e=null:e.e<z&&(e.c=[e.e=0])}return e}O(R,"round");function F(e){var n,t=e.e;return t===null?e.toString():(n=Q(e.c),n=t<=S||t>=D?ve(n,t):ie(n,t,"0"),e.s<0?"-"+n:n)}return O(F,"valueOf"),d.absoluteValue=d.abs=function(){var e=new v(this);return e.s<0&&(e.s=1),e},d.comparedTo=function(e,n){return se(this,new v(e,n))},d.decimalPlaces=d.dp=function(e,n){var t,s,r,o=this;if(e!=null)return B(e,0,M),n==null?n=y:B(n,0,8),R(new v(o),e+o.e+1,n);if(!(t=o.c))return null;if(s=((r=t.length-1)-Z(this.e/x))*x,r=t[r])for(;r%10==0;r/=10,s--);return s<0&&(s=0),s},d.dividedBy=d.div=function(e,n){return g(this,new v(e,n),C,y)},d.dividedToIntegerBy=d.idiv=function(e,n){return g(this,new v(e,n),0,1)},d.exponentiatedBy=d.pow=function(e,n){var t,s,r,o,c,i,l,f,u,h=this;if(e=new v(e),e.c&&!e.isInteger())throw Error(H+"Exponent not an integer: "+F(e));if(n!=null&&(n=new v(n)),i=e.e>14,!h.c||!h.c[0]||h.c[0]==1&&!h.e&&h.c.length==1||!e.c||!e.c[0])return u=new v(Math.pow(+F(h),i?2-he(e):+F(e))),n?u.mod(n):u;if(l=e.s<0,n){if(n.c?!n.c[0]:!n.s)return new v(NaN);s=!l&&h.isInteger()&&n.isInteger(),s&&(h=h.mod(n))}else{if(e.e>9&&(h.e>0||h.e<-1||(h.e==0?h.c[0]>1||i&&h.c[1]>=24e7:h.c[0]<8e13||i&&h.c[0]<=9999975e7)))return o=h.s<0&&he(e)?-0:0,h.e>-1&&(o=1/o),new v(l?1/o:o);b&&(o=Ee(b/x+2))}for(i?(t=new v(.5),l&&(e.s=1),f=he(e)):(r=Math.abs(+F(e)),f=r%2),u=new v(k);;){if(f){if(u=u.times(h),!u.c)break;o?u.c.length>o&&(u.c.length=o):s&&(u=u.mod(n))}if(r){if(r=ne(r/2),r===0)break;f=r%2}else if(e=e.times(t),R(e,e.e+1,1),e.e>14)f=he(e);else{if(r=+F(e),r===0)break;f=r%2}h=h.times(h),o?h.c&&h.c.length>o&&(h.c.length=o):s&&(h=h.mod(n))}return s?u:(l&&(u=k.div(u)),n?u.mod(n):o?R(u,b,y,c):u)},d.integerValue=function(e){var n=new v(this);return e==null?e=y:B(e,0,8),R(n,n.e+1,e)},d.isEqualTo=d.eq=function(e,n){return se(this,new v(e,n))===0},d.isFinite=function(){return!!this.c},d.isGreaterThan=d.gt=function(e,n){return se(this,new v(e,n))>0},d.isGreaterThanOrEqualTo=d.gte=function(e,n){return(n=se(this,new v(e,n)))===1||n===0},d.isInteger=function(){return!!this.c&&Z(this.e/x)>this.c.length-2},d.isLessThan=d.lt=function(e,n){return se(this,new v(e,n))<0},d.isLessThanOrEqualTo=d.lte=function(e,n){return(n=se(this,new v(e,n)))===-1||n===0},d.isNaN=function(){return!this.s},d.isNegative=function(){return this.s<0},d.isPositive=function(){return this.s>0},d.isZero=function(){return!!this.c&&this.c[0]==0},d.minus=function(e,n){var t,s,r,o,c=this,i=c.s;if(e=new v(e,n),n=e.s,!i||!n)return new v(NaN);if(i!=n)return e.s=-n,c.plus(e);var l=c.e/x,f=e.e/x,u=c.c,h=e.c;if(!l||!f){if(!u||!h)return u?(e.s=-n,e):new v(h?c:NaN);if(!u[0]||!h[0])return h[0]?(e.s=-n,e):new v(u[0]?c:y==3?-0:0)}if(l=Z(l),f=Z(f),u=u.slice(),i=l-f){for((o=i<0)?(i=-i,r=u):(f=l,r=h),r.reverse(),n=i;n--;r.push(0));r.reverse()}else for(s=(o=(i=u.length)<(n=h.length))?i:n,i=n=0;n<s;n++)if(u[n]!=h[n]){o=u[n]<h[n];break}if(o&&(r=u,u=h,h=r,e.s=-e.s),n=(s=h.length)-(t=u.length),n>0)for(;n--;u[t++]=0);for(n=j-1;s>i;){if(u[--s]<h[s]){for(t=s;t&&!u[--t];u[t]=n);--u[t],u[s]+=j}u[s]-=h[s]}for(;u[0]==0;u.splice(0,1),--f);return u[0]?P(e,u,f):(e.s=y==3?-1:1,e.c=[e.e=0],e)},d.modulo=d.mod=function(e,n){var t,s,r=this;return e=new v(e,n),!r.c||!e.s||e.c&&!e.c[0]?new v(NaN):!e.c||r.c&&!r.c[0]?new v(r):(X==9?(s=e.s,e.s=1,t=g(r,e,0,3),e.s=s,t.s*=s):t=g(r,e,0,X),e=r.minus(t.times(e)),!e.c[0]&&X==1&&(e.s=r.s),e)},d.multipliedBy=d.times=function(e,n){var t,s,r,o,c,i,l,f,u,h,m,p,N,V,L,I=this,A=I.c,U=(e=new v(e,n)).c;if(!A||!U||!A[0]||!U[0])return!I.s||!e.s||A&&!A[0]&&!U||U&&!U[0]&&!A?e.c=e.e=e.s=null:(e.s*=I.s,!A||!U?e.c=e.e=null:(e.c=[0],e.e=0)),e;for(s=Z(I.e/x)+Z(e.e/x),e.s*=I.s,l=A.length,h=U.length,l<h&&(N=A,A=U,U=N,r=l,l=h,h=r),r=l+h,N=[];r--;N.push(0));for(V=j,L=re,r=h;--r>=0;){for(t=0,m=U[r]%L,p=U[r]/L|0,c=l,o=r+c;o>r;)f=A[--c]%L,u=A[c]/L|0,i=p*f+u*m,f=m*f+i%L*L+N[o]+t,t=(f/V|0)+(i/L|0)+p*u,N[o--]=f%V;N[o]=t}return t?++s:N.splice(0,1),P(e,N,s)},d.negated=function(){var e=new v(this);return e.s=-e.s||null,e},d.plus=function(e,n){var t,s=this,r=s.s;if(e=new v(e,n),n=e.s,!r||!n)return new v(NaN);if(r!=n)return e.s=-n,s.minus(e);var o=s.e/x,c=e.e/x,i=s.c,l=e.c;if(!o||!c){if(!i||!l)return new v(r/0);if(!i[0]||!l[0])return l[0]?e:new v(i[0]?s:r*0)}if(o=Z(o),c=Z(c),i=i.slice(),r=o-c){for(r>0?(c=o,t=l):(r=-r,t=i),t.reverse();r--;t.push(0));t.reverse()}for(r=i.length,n=l.length,r-n<0&&(t=l,l=i,i=t,n=r),r=0;n;)r=(i[--n]=i[n]+l[n]+r)/j|0,i[n]=j===i[n]?0:i[n]%j;return r&&(i=[r].concat(i),++c),P(e,i,c)},d.precision=d.sd=function(e,n){var t,s,r,o=this;if(e!=null&&e!==!!e)return B(e,1,M),n==null?n=y:B(n,0,8),R(new v(o),e,n);if(!(t=o.c))return null;if(r=t.length-1,s=r*x+1,r=t[r]){for(;r%10==0;r/=10,s--);for(r=t[0];r>=10;r/=10,s++);}return e&&o.e+1>s&&(s=o.e+1),s},d.shiftedBy=function(e){return B(e,-Ce,Ce),this.times("1e"+e)},d.squareRoot=d.sqrt=function(){var e,n,t,s,r,o=this,c=o.c,i=o.s,l=o.e,f=C+4,u=new v("0.5");if(i!==1||!c||!c[0])return new v(!i||i<0&&(!c||c[0])?NaN:c?o:1/0);if(i=Math.sqrt(+F(o)),i==0||i==1/0?(n=Q(c),(n.length+l)%2==0&&(n+="0"),i=Math.sqrt(+n),l=Z((l+1)/2)-(l<0||l%2),i==1/0?n="5e"+l:(n=i.toExponential(),n=n.slice(0,n.indexOf("e")+1)+l),t=new v(n)):t=new v(i+""),t.c[0]){for(l=t.e,i=l+f,i<3&&(i=0);;)if(r=t,t=u.times(r.plus(g(o,r,f,1))),Q(r.c).slice(0,i)===(n=Q(t.c)).slice(0,i))if(t.e<l&&--i,n=n.slice(i-3,i+1),n=="9999"||!s&&n=="4999"){if(!s&&(R(r,r.e+C+2,0),r.times(r).eq(o))){t=r;break}f+=4,i+=4,s=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(R(t,t.e+C+2,1),e=!t.times(t).eq(o));break}}return R(t,t.e+C+1,y,e)},d.toExponential=function(e,n){return e!=null&&(B(e,0,M),e++),le(this,e,n,1)},d.toFixed=function(e,n){return e!=null&&(B(e,0,M),e=e+this.e+1),le(this,e,n)},d.toFormat=function(e,n,t){var s,r=this;if(t==null)e!=null&&n&&typeof n=="object"?(t=n,n=null):e&&typeof e=="object"?(t=e,e=n=null):t=W;else if(typeof t!="object")throw Error(H+"Argument not an object: "+t);if(s=r.toFixed(e,n),r.c){var o,c=s.split("."),i=+t.groupSize,l=+t.secondaryGroupSize,f=t.groupSeparator||"",u=c[0],h=c[1],m=r.s<0,p=m?u.slice(1):u,N=p.length;if(l&&(o=i,i=l,l=o,N-=o),i>0&&N>0){for(o=N%i||i,u=p.substr(0,o);o<N;o+=i)u+=f+p.substr(o,i);l>0&&(u+=f+p.slice(o)),m&&(u="-"+u)}s=h?u+(t.decimalSeparator||"")+((l=+t.fractionGroupSize)?h.replace(new RegExp("\\d{"+l+"}\\B","g"),"$&"+(t.fractionGroupSeparator||"")):h):u}return(t.prefix||"")+s+(t.suffix||"")},d.toFraction=function(e){var n,t,s,r,o,c,i,l,f,u,h,m,p=this,N=p.c;if(e!=null&&(i=new v(e),!i.isInteger()&&(i.c||i.s!==1)||i.lt(k)))throw Error(H+"Argument "+(i.isInteger()?"out of range: ":"not an integer: ")+F(i));if(!N)return new v(p);for(n=new v(k),f=t=new v(k),s=l=new v(k),m=Q(N),o=n.e=m.length-p.e-1,n.c[0]=ye[(c=o%x)<0?x+c:c],e=!e||i.comparedTo(n)>0?o>0?n:f:i,c=$,$=1/0,i=new v(m),l.c[0]=0;u=g(i,n,0,1),r=t.plus(u.times(s)),r.comparedTo(e)!=1;)t=s,s=r,f=l.plus(u.times(r=f)),l=r,n=i.minus(u.times(r=n)),i=r;return r=g(e.minus(t),s,0,1),l=l.plus(r.times(f)),t=t.plus(r.times(s)),l.s=f.s=p.s,o=o*2,h=g(f,s,o,y).minus(p).abs().comparedTo(g(l,t,o,y).minus(p).abs())<1?[f,s]:[l,t],$=c,h},d.toNumber=function(){return+F(this)},d.toPrecision=function(e,n){return e!=null&&B(e,1,M),le(this,e,n,2)},d.toString=function(e){var n,t=this,s=t.s,r=t.e;return r===null?s?(n="Infinity",s<0&&(n="-"+n)):n="NaN":(e==null?n=r<=S||r>=D?ve(Q(t.c),r):ie(Q(t.c),r,"0"):e===10&&K?(t=R(new v(t),C+r+1,y),n=ie(Q(t.c),t.e,"0")):(B(e,2,Y.length,"Base"),n=w(ie(Q(t.c),r,"0"),10,e,s,!0)),s<0&&t.c[0]&&(n="-"+n)),n},d.valueOf=d.toJSON=function(){return F(this)},d._isBigNumber=!0,d[Symbol.toStringTag]="BigNumber",d[Symbol.for("nodejs.util.inspect.custom")]=d.valueOf,a!=null&&v.set(a),v}O(Te,"clone");function Z(a){var g=a|0;return a>0||a===g?g:g-1}O(Z,"bitFloor");function Q(a){for(var g,w,_=1,d=a.length,k=a[0]+"";_<d;){for(g=a[_++]+"",w=x-g.length;w--;g="0"+g);k+=g}for(d=k.length;k.charCodeAt(--d)===48;);return k.slice(0,d+1||1)}O(Q,"coeffToString");function se(a,g){var w,_,d=a.c,k=g.c,C=a.s,y=g.s,S=a.e,D=g.e;if(!C||!y)return null;if(w=d&&!d[0],_=k&&!k[0],w||_)return w?_?0:-y:C;if(C!=y)return C;if(w=C<0,_=S==D,!d||!k)return _?0:!d^w?1:-1;if(!_)return S>D^w?1:-1;for(y=(S=d.length)<(D=k.length)?S:D,C=0;C<y;C++)if(d[C]!=k[C])return d[C]>k[C]^w?1:-1;return S==D?0:S>D^w?1:-1}O(se,"compare");function B(a,g,w,_){if(a<g||a>w||a!==ne(a))throw Error(H+(_||"Argument")+(typeof a=="number"?a<g||a>w?" out of range: ":" not an integer: ":" not a primitive number: ")+String(a))}O(B,"intCheck");function he(a){var g=a.c.length-1;return Z(a.e/x)==g&&a.c[g]%2!=0}O(he,"isOdd");function ve(a,g){return(a.length>1?a.charAt(0)+"."+a.slice(1):a)+(g<0?"e":"e+")+g}O(ve,"toExponential");function ie(a,g,w){var _,d;if(g<0){for(d=w+".";++g;d+=w);a=d+a}else if(_=a.length,++g>_){for(d=w,g-=_;--g;d+=w);a+=d}else g<_&&(a=a.slice(0,g)+"."+a.slice(g));return a}O(ie,"toFixedPoint");var fe=Te();fe.config({EXPONENTIAL_AT:12});function yn(a){var g=new fe(a);return g.gt(1e4)?2:g.gt(1)?4:8}O(yn,"getDefaultDecimalPlace");function In(a){var g,w=a.dp||yn(a.n),_=(g=a.mode)!==null&&g!==void 0?g:fe.ROUND_DOWN,d=new fe(a.n);return d.dp()>w?d.decimalPlaces(w,_).toFixed(w):Number(a.n).toString()}O(In,"toPrecision");function Un(a){return{id:a.asset_id,symbol:a.symbol,logo:a.icon_url,name:a.name}}O(Un,"convertMixinAsset");function On(a,g){const w=new fe(a).decimalPlaces();return w&&w>+g?In({n:a,dp:+g}):a}O(On,"numberInput");function Gn(a,g){return a.filter(w=>{const _=((w==null?void 0:w.name)||"").toLowerCase(),d=((w==null?void 0:w.symbol)||"").toLowerCase();return _.startsWith(g)||d.includes(g)})}O(Gn,"filterAssets");const qn=be({name:"FInput",props:{modelValue:{type:String,default:""},precision:{type:[Number,String]},hideDefaultMessages:Boolean},emits:{"update:modelValue":a=>!0},setup(a,{attrs:g,emit:w,slots:_}){const d=oe(),k=O(y=>{var S;if(g.type==="number"&&a.precision){w("update:modelValue",On(y,a.precision)),(S=d==null?void 0:d.value)==null||S.$forceUpdate();return}w("update:modelValue",y)},"handleChange"),C=O(y=>{g.type==="number"&&["e","+","-"].includes(y.key)&&y.preventDefault()},"handleKeydown");return()=>{var y;return E(En,{ref:d,class:["f-input",{"f-input--hide-default-messages":a.hideDefaultMessages},{"f-input--focused":(y=d==null?void 0:d.value)==null?void 0:y.focused}],modelValue:a.modelValue,"onUpdate:modelValue":k,onKeydown:C},{..._,details:S=>{var D;return _.tools&&E("div",{class:"f-input__tools"},[(D=_.tools)==null?void 0:D.call(_,S)])}})}}});export{qn as F,En as V,Ve as a,_n as b,de as c,Gn as d,Un as e,xn as f,Be as m};
//# sourceMappingURL=FInput.0625b872.js.map
