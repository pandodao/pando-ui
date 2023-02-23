var ke=Object.defineProperty;var r=(e,n)=>ke(e,"name",{value:n,configurable:!0});import{N as oe,z as m,r as v,b as g,a as t,m as y,e as S,n as Fe,y as ee,t as be,U as B,M as H,F as G,o as K,w as we,d as q,u as Ce}from"./vue.esm-bundler.57aa1454.js";import{V as xe}from"./VSnackbar.3bed6e44.js";import{V as b}from"./VIcon.b7876f5b.js";import{V as ie}from"./VDivider.186db6a0.js";import{m as Se,u as $e}from"./position.6bb498a5.js";import{a as Ae,b as Ve,k as Me}from"./color.5e70182f.js";import{c as Le,V as W,d as Be}from"./VBtn.ab71924f.js";import{u as L}from"./display.8ac49ecd.js";import{a as Ie}from"./VAppBar.3926d01d.js";import{V as j}from"./VImg.040b2a14.js";import{V as ue}from"./VLazy.e8b6f832.js";import{V as re}from"./VList.8d2887de.js";import{a as w}from"./locale.ce33eacd.js";import{V as Te}from"./VSpacer.da6438ea.js";import{V as ze}from"./VMessages.7f48a74b.js";import{V as Oe}from"./loader.538ed1c8.js";import{V as je}from"./VForm.de873814.js";import{i as Z}from"./mixin.87a49014.js";import{i as T,R as De,u as Pe,a as Ue,g as Ee,B as Ne,s as Re,E as He}from"./base64.f167f6b7.js";import{V as ce}from"./VProgressCircular.ce5720de.js";import{V as qe}from"./VBottomNavigation.211552fb.js";import{V as Ge}from"./VTooltip.78003fdc.js";import{V as de}from"./VOverlay.2998aec7.js";import{c as te}from"./helpers.ff98b59e.js";import{Q as Ke}from"./qrious.b826cc59.js";import{B as We,t as Ze}from"./number.ea2b3954.js";import{V as Qe}from"./VTextField.5738fd9a.js";import{V as Je}from"./VListItem.f12d2f11.js";import{V as Xe,g as Ye,f as et,e as tt,a as at}from"./VDialog.789dc96e.js";import{a as st}from"./index.3a5a0c59.js";import{V as nt}from"./VSlider.eb1a9a5a.js";import{V as lt}from"./VSwitch.4b0e23e6.js";import{p as ot}from"./useRender.0f3b6188.js";import{b as it}from"./VTabs.1a404a6a.js";import{V as ut}from"./VTextarea.a70e48eb.js";function ka(e){return e==="metamask"||e==="walletconnect"||e==="onekey"}r(ka,"isMVM");function Fa(e){var n;return(n=e==null?void 0:e._context.config.globalProperties.$uikit)==null?void 0:n.auth}r(Fa,"useAuth");function ba(e){var n;return(n=e==null?void 0:e._context.config.globalProperties.$uikit)==null?void 0:n.payment}r(ba,"usePayment");function wa(e){return e?e==null?void 0:e._context.config.globalProperties.$passport:oe().appContext.config.globalProperties.$passport}r(wa,"usePassport");const rt=["success","warning","error"],ct=m({name:"FToast",props:{action:{type:Object,default:null},type:String,message:String},emits:{destroy:()=>!0},setup(e,n){let{slots:a,expose:s,emit:l}=n;const o=v(!1),i={variant:"flat",location:"center center"},u=g(()=>{var x;return{success:"$check",error:"$alert",warning:"$alert"}[(x=e==null?void 0:e.type)!=null?x:""]}),c=g(()=>["f-toast",{"f-toast--action":e.action},e.type&&`f-toast--${e.type}`]),d=r(()=>{var f;return t("div",{class:"f-toast__message"},[u.value&&t(b,{size:"16",color:e.type,class:"f-toast__icon"},{default:()=>[u.value]}),t("span",null,[((f=a.default)==null?void 0:f.call(a))||e.message])])},"renderMessage"),p=r(()=>e.action&&t("div",{class:"f-toast__action",onClick:()=>{var f,x;return(x=(f=e.action)==null?void 0:f.callback)==null?void 0:x.call(f)}},[t(ie,{vertical:!0,class:"f-toast__action-divider"},null),t("span",null,[e.action.text]),t(b,{size:"14"},{default:()=>[S("$arrow_right")]})]),"renderActions"),h=r(()=>o.value=!0,"show"),C=r(()=>{o.value=!1,l("destroy")},"close"),k=r(f=>f?h():C(),"update");return s({show:h,close:C}),()=>t(xe,y({modelValue:o.value,class:c.value},i,{"onUpdate:modelValue":k}),{default:d,actions:p})}});function Ca(){return oe().appContext.config.globalProperties.$uikit.toast}r(Ca,"useToast");function dt(e,n){let a=null;const s=r(function(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};a&&a.component.exposed.close(),Fe(()=>{const c={...n,...u},d=document.querySelector(c.container||"[data-v-app]"),p=document.createElement("div"),h=t(ct,{...c,attach:p,onDestroy:()=>{ee(null,p),a=null,d==null||d.removeChild(p)}});h.appContext=e._context,ee(h,p),d==null||d.appendChild(p),a=h,a.component.exposed.show()})},"show"),o={show:s,clear:r(()=>{!a||a.component.exposed.close()},"clear")},i=e.config.globalProperties;rt.forEach(u=>{o[u]=c=>s({type:u,...c})}),i.$uikit=i.$uikit||{},i.$uikit.toast=o}r(dt,"install");function ft(){}r(ft,"Toast");ft.install=dt;const xa=m({name:"FActionBar",props:{color:String,...Se()},setup(e,n){let{slots:a}=n;const{positionClasses:s}=$e(e),{backgroundColorClasses:l,backgroundColorStyles:o}=Ae(be(e,"color"));return()=>t(Le,{class:["f-action-bar",s.value,l.value],style:[o.value]},a)}});const Sa=m({name:"FAppBar",props:{back:{type:Boolean,default:!1},center:{type:Boolean,default:!1},immersive:{type:Boolean,default:!1}},setup(e,n){let{attrs:a,slots:s}=n;const{smAndDown:l}=L(),o=g(()=>({"f-app-bar":!0,"f-app-bar--immersive":e.immersive,"f-app-bar--center":e.center})),i=g(()=>({height:l.value?48:64,elevation:0,app:!0})),u=r(()=>t(W,{icon:!0,size:"24",ripple:!1},{default:()=>[t(b,null,{default:()=>[S("$back")]})]}),"back"),c=e.back?u:s.prepend;return()=>t(Ie,y({class:o.value},i.value,a),{...s,prepend:c})}});function mt(e,n){const a=new We(e).decimalPlaces();return a&&a>+n?Ze({n:e,dp:+n}):e}r(mt,"numberInput");const Q=m({name:"FInput",props:{modelValue:{type:String,default:""},precision:{type:[Number,String]},hideDefaultMessages:Boolean},emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:a,emit:s,slots:l}=n;const o=v(),i=v(!1),u=r(d=>{var p;if(a.type==="number"&&e.precision){s("update:modelValue",mt(d,e.precision)),(p=o==null?void 0:o.value)==null||p.$forceUpdate();return}s("update:modelValue",d)},"handleChange"),c=r(d=>{a.type==="number"&&["e","+","-"].includes(d.key)&&d.preventDefault()},"handleKeydown");return()=>t(Qe,{ref:o,focused:i.value,"onUpdate:focused":d=>i.value=d,class:["f-input",{"f-input--hide-default-messages":e.hideDefaultMessages},{"f-input--focused":i.value}],modelValue:e.modelValue,"onUpdate:modelValue":u,onKeydown:c},{...l,details:l.tools?d=>{var p;return t("div",{class:"f-input__tools"},[(p=l.tools)==null?void 0:p.call(l,d)])}:l.details})}});const $=m({name:"FButton",props:{icon:{type:Boolean,default:!1}},setup(e,n){let{slots:a}=n;const s={variant:"flat",rounded:!0,ripple:!1};return e.icon&&(s.variant="text"),()=>t(W,y({class:"f-button"},s,e),{default:()=>{var l;return[(l=a.default)==null?void 0:l.call(a)]}})}});const D=m({name:"FModal",props:{hideClose:Boolean,title:{type:[String,Object],default:""},desktop:{type:String,default:"dialog"}},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a,emit:s,attrs:l}=n;const{smAndDown:o}=L(),i=g(()=>{const d=!o.value&&e.desktop==="menu";return{isMenu:d,hasTitle:!d&&(e.title||a.title),hasClose:e.hideClose||l.persistent||d,wrapper:d?Xe:Ye,presets:o.value?{transition:"dialog-bottom-transition"}:{maxWidth:600}}}),u=g(()=>({"f-modal":!0,"f-modal-menu":i.value.isMenu,"f-bottom-sheet":o.value})),c=r(()=>t(at,{class:"f-modal__content"},{default:()=>[!i.value.hasClose&&t($,{icon:!0,size:"32",class:"f-modal__close",onClick:d=>{s("update:modelValue",!1)}},{default:()=>[t(b,null,{default:()=>[S("$close")]})]}),i.value.hasTitle&&t(et,{class:"f-modal__title"},{default:()=>{var d;return[e.title||((d=a.title)==null?void 0:d.call(a))]}}),t(tt,{class:"f-modal__text"},{default:()=>{var d;return[(d=a.default)==null?void 0:d.call(a)]}})]}),"content");return()=>t(i.value.wrapper,y(i.value.presets,{class:u.value,"onUpdate:modelValue":d=>s("update:modelValue",d)}),{...a,default:()=>c()})}});const fe=m({name:"FListItem",setup(e,n){let{slots:a}=n;return()=>t(Je,{class:"f-list-item"},a)}});const me=m({name:"FAssetLogo",props:{asset:{type:Object,default:null},size:{type:[String,Number],default:64},chainSize:{type:[String,Number],default:18},color:{type:[String],default:"greyscale_7"}},setup(e){return()=>{var n,a,s;return t("div",{class:"f-asset-logo",style:`color: rgb(var(--v-theme-${e.color}))`},[t(j,{width:e.size,src:(n=e.asset)==null?void 0:n.logo},null),((a=e.asset)==null?void 0:a.chainLogo)&&t(j,{class:"f-asset-logo__chain",width:e.chainSize,src:(s=e.asset)==null?void 0:s.chainLogo},null)])}}}),pt=m({name:"FAssetItem",props:{asset:{type:Object,default:null}},setup(e){return()=>t(ue,{"min-height":52},{default:()=>[t(fe,{title:e.asset.symbol,subtitle:e.asset.name,value:e.asset.id,class:"f-asset-item"},{prepend:()=>t(me,{asset:e.asset,size:"28",chainSize:"12",class:"f-asset-item__logo"},null)})]})}});function ht(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!B(e)}r(ht,"_isSlot$7");const vt=m({name:"FAssetList",props:{assets:{type:Array,default:()=>[]}},emits:{select:e=>!0},setup(e,n){let{emit:a}=n;return()=>{let s;return t(re,{class:["f-asset-select__list"]},ht(s=e.assets.map(l=>t(pt,{asset:l,key:l.id,onClick:()=>a("select",l)},null)))?s:{default:()=>[s]})}}});const gt=m({name:"FAssetField",props:{showName:Boolean,disabled:Boolean,outlined:{type:Boolean,default:!0},selectable:{type:Boolean,default:!0},asset:{type:Object,default:null}},setup(e){const{t:n}=w(),a=g(()=>({"f-asset-field":!0,"f-asset-field--selectable":e.selectable,"f-asset-field--outlined":e.outlined}));return()=>{var s,l,o,i,u;return t("div",{class:a.value},[e.asset?t(me,{size:"22",chainSize:"10",asset:e.asset},null):t("span",{class:"f-asset-field__placeholder"},[n("$vuetify.uikit.select_asset")]),t("div",{class:"f-asset-field__right"},[t("div",{class:["f-asset-field__symbol",{"f-asset-field__symbol--sm":((o=(l=(s=e.asset)==null?void 0:s.symbol)==null?void 0:l.length)!=null?o:0)>8}]},[(i=e.asset)==null?void 0:i.symbol]),e.showName&&t("div",{class:"f-asset-field__name text-greyscale_3"},[(u=e.asset)==null?void 0:u.name])]),e.selectable&&t(b,{size:"16",class:"f-asset-field__expend"},{default:()=>[S("$expand")]})])}}});const pe=m({name:"FSearchInput",setup(e,n){let{slots:a}=n;const{t:s}=w();return()=>t(Q,{"hide-details":!0,class:"f-search-input",placeholder:s("$vuetify.uikit.search")},{...a,"prepend-inner":()=>t(b,{size:24},{default:()=>[S("$search")]})})}});function _t(e,n){return e.filter(a=>{const s=((a==null?void 0:a.name)||"").toLowerCase(),l=((a==null?void 0:a.symbol)||"").toLowerCase();return s.startsWith(n)||l.includes(n)})}r(_t,"filterAssets");const yt=m({name:"FAssetSelect",props:{dialog:{type:Boolean,default:!1},asset:{type:Object,default:null},assets:{type:Array,default:()=>[]}},emits:{"update:asset":e=>!0,"update:dialog":e=>!0},setup(e,n){let{emit:a,attrs:s}=n;const{t:l}=w(),o=v(""),i=g(()=>_t(e.assets,o.value)),u=r(c=>{a("update:asset",c),a("update:dialog",!1)},"handleSelect");return()=>t(D,{title:l("$vuetify.uikit.select_asset"),modelValue:e.dialog,desktop:"menu","close-on-content-click":!1,"onUpdate:modelValue":c=>a("update:dialog",c)},{activator:c=>{let{isActive:d,props:{onClick:p}}=c;return t(gt,y({class:[{"f-asset-field--active":d}],asset:e.asset,onClick:H(p,["stop"]),onMousedown:H(()=>{},["stop"])},s),null)},default:()=>t("div",{class:"f-asset-select"},[t("div",{class:"f-asset-select__search"},[t(pe,{modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,variant:"outlined"},null)]),t(vt,{assets:i.value,onSelect:u},null)])})}});const $a=m({name:"FAssetAmountInput",props:{fullfilled:{type:Boolean,default:!1},amount:{type:String,default:""},asset:{type:Object,default:null},assets:{type:Array,default:()=>[]}},emits:{"update:asset":e=>!0,"update:amount":e=>!0},setup(e,n){let{emit:a,slots:s}=n;const l=v(!1),o=g(()=>({reverse:!0,type:"number",precision:8})),i=g(()=>["f-asset-amount-input",{"f-asset-amount-input--filled":e.fullfilled}]);return()=>t(Q,y(o.value,{modelValue:e.amount,class:i.value,"onUpdate:modelValue":u=>a("update:amount",u)}),{...s,"prepend-inner":()=>t(yt,{dialog:l.value,"onUpdate:dialog":u=>l.value=u,outlined:!1,asset:e.asset,assets:e.assets,"onUpdate:asset":u=>a("update:asset",u)},null)})}});const Aa=m({name:"FAssetInputTools",props:{balance:{type:[String,Number],default:""},balanceLabel:{type:String,default:""},fiatAmount:{type:String,default:""},fillable:{type:Boolean,default:!0},messages:{type:Array,default:()=>[]},connected:Boolean,disabled:Boolean},emits:{connect:()=>!0,fill:()=>!0},setup(e,n){let{slots:a,emit:s}=n;const{t:l}=w(),o=r(()=>s("connect"),"handleConnect"),i=r(()=>e.fillable&&s("fill"),"handleFill");return()=>{var u,c,d;return t("div",{class:"f-asset-input-tools"},[((u=a.left)==null?void 0:u.call(a))||t("div",{class:"f-asset-input-tools__left"},[e.connected?t(G,null,[t("div",{class:"f-asset-input-tools__balance"},[t("span",{class:"f-asset-input-tools__balance-label"},[e.balanceLabel||l("$vuetify.uikit.balance_short")]),t("span",{class:"f-asset-input-tools__balance-value",onClick:H(i,["stop"])},[e.balance]),e.fillable&&t(b,{size:"12",onClick:H(i,["stop"])},{default:()=>[S("$fill")]})]),t("span",null,[(c=a["append-left"])==null?void 0:c.call(a)])]):t($,{variant:"text",size:"x-small",onClick:o,class:"f-asset-input-tools__connect-btn"},{default:()=>[t("span",null,[l("$vuetify.uikit.connect_wallet")]),t(b,{size:"12",class:"f-asset-input-tools__connect-icon"},{default:()=>[S("$connect")]})]})]),t(Te,null,null),((d=a.right)==null?void 0:d.call(a))||e.messages.length>0?t(ze,{messages:e.messages,active:!0,color:"error"},null):t("span",{class:"fiat-amount"},[e.fiatAmount])])}}});const Va=m({name:"FAssetSwapForm",props:{loading:Boolean},emits:{switch:()=>!0},setup(e,n){let{slots:a,emit:s}=n;return()=>t(je,{class:"f-asset-swap-form"},{default:()=>{var l,o;return[(l=a.input)==null?void 0:l.call(a),t("div",{class:"f-asset-swap-form__divider"},[t($,{icon:!0,size:"32",class:"f-asset-swap-form__swap",onClick:()=>s("switch")},{default:()=>[t(b,null,{default:()=>[S("$swap")]})]})]),(o=a.output)==null?void 0:o.call(a),e.loading&&t(Oe,{color:"primary",height:2,indeterminate:!0},null)]}})}});const kt=m({name:"FAuthStep1",inheritAttrs:!1,props:{step:{type:Number,default:1},method:{type:String,default:""},authMethods:{type:Array,default:()=>["mixin"]},authMethodState:{type:Object,default:()=>({})}},emits:{close:()=>!0,auth:e=>!0,"update:method":e=>!0,"update:step":e=>!0},setup(e,n){let{emit:a}=n;const{t:s}=w(),{mdAndUp:l}=L(),o=Ve(),i=o.current.value.colors.greyscale_3,u=g(()=>o.name.value==="dark"),c=[{needNextStep:!e.authMethodState.metamask,value:"metamask",title:"MetaMask",bg:u.value?i:"#FFEEDD",logo:"https://static.fox.one/image/logo_metamask@40x40.png"},{needNextStep:!0,value:"mixin",title:"Mixin",bg:u.value?i:"#EBF8FF",logo:"https://static.fox.one/image/logo_mixin@40x40.png"},{needNextStep:!e.authMethodState.fennec,value:"fennec",title:"Fennec",bg:u.value?i:"#E6E7FD",logo:"https://static.fox.one/image/logo_fennec@40x40.png"},{needNextStep:!1,value:"walletconnect",title:"WalletConnect",bg:u.value?i:"#f5f5f5",logo:u.value?"https://static.fox.one/image/logo_walletconnect_dark@40x40.png":"https://static.fox.one/image/logo_walletconnect@40x40.png"},{needNextStep:!e.authMethodState.onekey,value:"onekey",title:"OneKey",bg:u.value?i:"#E9FEE6",logo:"https://static.fox.one/image/logo_onekey@40x40.png"}],d=r(()=>e.authMethods.map(h=>c.find(C=>C.value===h)).filter(h=>!!h),"getAuthMethodsMeta"),p=r(h=>{h.needNextStep?(a("update:method",h.value),a("update:step",2)):(a("close"),a("auth",{type:h.value}))},"handleAuth");return()=>t("div",{class:"f-auth-step1"},[t("div",{class:["f-auth-methods",{"f-auth-methods--mobile":!l.value}]},[d().map(h=>t("div",{key:h.value,style:{backgroundColor:h.bg},class:"f-auth-method",onClick:()=>p(h)},[t("span",{class:"f-auth-method__logo"},[t(j,{width:"40",height:"40",src:h.logo},null)]),t("span",{class:"f-auth-method__label"},[h.title])]))]),t("div",{class:"f-auth-hint"},[t(b,{size:"16",color:"warning",class:"f-auth-hint__horn"},{default:()=>[S("$horn")]}),t("span",{innerHTML:s("$vuetify.uikit.gas_fee_hint")},null)])])}});function Ft(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!B(e)}r(Ft,"_isSlot$6");const bt=m({name:"FAuthFennecInstall",inheritAttrs:!1,setup(){const{smAndDown:e}=L(),{t:n}=w(),a=r(()=>{const s="";window.open(s)},"handleInstall");return()=>{let s;return t("div",{class:["f-auth-fennec","f-auth-step2",{"f-auth-step2--small":e.value}]},[t("div",{class:"f-auth-step2__left"},null),t("div",{class:"f-auth-step2__right"},[t("div",{class:"f-auth-step2__title"},[n("$vuetify.uikit.fennec_not_installed")]),t("div",{class:"f-auth-step2__subtitle"},[n("$vuetify.uikit.fennec_introduction")]),t($,{color:"greyscale_1",onClick:a},Ft(s=n("$vuetify.uikit.install"))?s:{default:()=>[s]})])])}}}),wt=m({name:"FAuthMetamaskInstall",inheritAttrs:!1,setup(){const{smAndDown:e}=L(),{t:n}=w(),a=r(()=>{const s="https://metamask.io/download/";window.open(s)},"handleInstall");return()=>t("div",{class:["f-auth-metamask","f-auth-step2",{"f-auth-step2--small":e.value,"f-auth-metamask--mobile":!T()}]},[t("div",{class:"f-auth-step2__left"},null),t("div",{class:"f-auth-step2__right"},[t("div",{class:"f-auth-step2__title",innerHTML:T()?n("$vuetify.uikit.metamask_not_installed"):n("$vuetify.uikit.metamask_not_installed_2")},null),t("div",{class:"f-auth-step2__subtitle",innerHTML:T()?n("$vuetify.uikit.metamask_introduction"):n("$vuetify.uikit.metamask_introduction_2")},null),t($,{color:"greyscale_1",onClick:a,innerHTML:T()?n("$vuetify.uikit.install"):n("$vuetify.uikit.open_in_mixin")},null)])])}});function he(e,n){this.api=e,this.endpoint=n}r(he,"MixinClient");he.prototype={disconnect(){this.ws.close()},connect(e,n,a,s){const l=this;l.handled=!1,l.callback=e,l.ws=new De(l.endpoint,"Mixin-OAuth-1",{maxReconnectionDelay:5e3,minReconnectionDelay:1e3,reconnectionDelayGrowFactor:1.2,connectionTimeout:8e3,maxRetries:1/0,debug:!1}),l.ws.addEventListener("message",function(o){if(l.handled)return;const i=new FileReader;i.onload=function(){const u=Pe(new Uint8Array(this.result),{to:"string"}),c=JSON.parse(u);if(l.callback(c)){l.handled=!0;return}setTimeout(function(){l.sendRefreshCode(n,a,s,c.data)},1e3)},i.readAsArrayBuffer(o.data)}),l.ws.addEventListener("open",function(o){l.sendRefreshCode(n,a,s)})},sendRefreshCode(e,n,a,s){const l=this;l.handled||l.send({id:Ue.v4().toUpperCase(),action:"REFRESH_OAUTH_CODE",params:{client_id:e,scope:n,code_challenge:a,authorization_id:s?s.authorization_id:""}})},send(e){try{this.ws.send(Ee(JSON.stringify(e)))}catch(n){n instanceof DOMException||console.error(n)}}};function ae(e){return e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}r(ae,"base64URLEncode");function Ct(e){let n="";const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<e;s++)n+=a.charAt(Math.floor(Math.random()*a.length));return n}r(Ct,"generateRandomString");function xt(){const e=Ct(32),n=ae(Ne.encode(e)),a=ae(Re(e).toString(He));return{verifier:n,challenge:a}}r(xt,"generateCodePair");function ve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const[l,o]=n?["https://xuexi-api.firesbox.com","wss://xuexi-blaze.firesbox.com"]:["https://api.mixin.one","wss://blaze.mixin.one"],i=a[0]||l,u=a[1]||o,c=new he(i,u);let d=!1;const{challenge:p="",verifier:h=""}=e.pkce?xt():{},C=r(k=>{var x,I,P,U,E;const f=k.data;if(((x=k==null?void 0:k.error)==null?void 0:x.code)===400||((I=k==null?void 0:k.error)==null?void 0:I.code)===10002)return(P=s.onError)==null||P.call(s,k==null?void 0:k.error),!0;if(!f)return!1;if(f.authorization_code.length>16)return e.pkce?fetch(i+"/oauth/token",{method:"post",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:e.clientId,code_verifier:h,code:f.authorization_code})}).then(A=>A.json()).then(A=>{var R,z,_;const N=(R=A==null?void 0:A.data)==null?void 0:R.access_token;N?(z=s.onSuccess)==null||z.call(s,N):(_=s.onError)==null||_.call(s,{description:"Get PKCE access token error"})}).catch(()=>{var A;(A=s.onError)==null||A.call(s,{description:"Get PKCE access token error"})}):(U=s.onSuccess)==null||U.call(s,f.authorization_code),!0;if(Z()){if(d)return!1;window.location.href="mixin://codes/"+f.code_id,d=!0}else(E=s.onShowUrl)==null||E.call(s,"mixin://codes/"+f.code_id);return!1},"handler");return c.connect(C,e.clientId,e.scope,p),c}r(ve,"authorize");const ge=m({name:"FQRCode",props:{text:{type:String,default:""},size:{type:Number,default:128}},setup(e){const n=v(),a=v(),s=g(()=>({width:te(e.size),height:te(e.size)}));return K(()=>{a.value=new Ke({size:e.size,element:n.value})}),we(()=>{var l;(l=a.value)==null||l.set({value:e.text})}),()=>t("canvas",{ref:n,class:"f-qrcode__canvas",style:s.value},null)}});function se(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!B(e)}r(se,"_isSlot$5");const St=m({name:"FAuthMixinMessenger",inheritAttrs:!1,props:{clientId:{type:String,default:""},scope:{type:String,default:""},pkce:{type:Boolean,default:!1},isFiresbox:{type:Boolean,default:!1},hosts:{type:Array,default:()=>[]}},emits:{auth:e=>!0,error:e=>!0,close:()=>!0},setup(e,n){let{attrs:a,emit:s}=n;const{smAndDown:l}=L(),{t:o}=w(),i=v(""),u=v(null),c=r(()=>{const p="https://mixin.one/mm";window.open(p)},"handleInstall"),d=r(()=>{window.location.href=i.value},"handleOpenInApp");return K(()=>{u.value=ve({clientId:e.clientId,scope:e.scope,pkce:e.pkce},e.isFiresbox,e.hosts,{onShowUrl:p=>i.value=p,onError:p=>s("error",p),onSuccess:p=>{var h;s("close"),(h=u.value)==null||h.disconnect(),e.pkce?s("auth",{type:"mixin",token:p}):s("auth",{type:"mixin",code:p})}})}),()=>{let p,h;return t("div",{class:`f-auth-mixin f-auth-step2 ${l.value&&"f-auth-step2--small"}`},[t("div",{class:"f-auth-step2__left"},[i.value?t("div",{class:"f-auth-step2__qr-wrapper"},[t(ge,{class:"f-auth-step2__qr-code",text:i.value,size:182},null),t(j,{class:"f-auth-step2__qr-logo",height:"32",width:"32",src:"https://static.fox.one/image/icon_mixin@32x32.png"},null)]):t(ce,{width:3,indeterminate:!0,color:"black",class:"d-flex f-auth-step2__loading"},null)]),t("div",{class:"f-auth-step2__right"},[t("div",{class:"f-auth-step2__title"},[o("$vuetify.uikit.scan_to_connect")]),t("div",{class:"f-auth-step2__subtitle"},[t("span",{innerHTML:o("$vuetify.uikit.mixin_connect_detail",["<a class='f-auth-step2__link' href='https://mixin.one/messenger'>Mixin Messenger<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.2068 1.79276C10.2975 -0.116585 7.2018 -0.116585 5.29246 1.79276L4.64288 2.44234C4.25236 2.83286 4.25236 3.46603 4.64288 3.85655C5.03341 4.24707 5.66657 4.24707 6.0571 3.85655L6.70667 3.20698C7.83497 2.07868 9.6643 2.07868 10.7926 3.20698C11.9209 4.33528 11.9209 6.16461 10.7926 7.29291L10.1425 7.94304C9.75195 8.33357 9.75194 8.96673 10.1425 9.35726C10.533 9.74778 11.1662 9.74778 11.5567 9.35726L12.2068 8.70712C14.1162 6.79778 14.1162 3.70211 12.2068 1.79276Z' fill='#076aff'/><path d='M3.85726 6.05638C4.24779 5.66586 4.24779 5.03269 3.85726 4.64217C3.46674 4.25165 2.83357 4.25165 2.44305 4.64217L1.79236 5.29286C-0.116985 7.2022 -0.116985 10.2979 1.79236 12.2072C3.70171 14.1166 6.79738 14.1166 8.70672 12.2072L9.35713 11.5568C9.74765 11.1663 9.74765 10.5331 9.35713 10.1426C8.9666 9.75207 8.33344 9.75207 7.94291 10.1426L7.29251 10.793C6.16421 11.9213 4.33488 11.9213 3.20658 10.793C2.07828 9.6647 2.07828 7.83537 3.20658 6.70707L3.85726 6.05638Z' fill='#076aff'/><path d='M8.20674 7.2071C8.59727 6.81658 8.59727 6.18341 8.20674 5.79289C7.81622 5.40237 7.18305 5.40237 6.79253 5.79289L5.73187 6.85355C5.34134 7.24408 5.34134 7.87724 5.73187 8.26776C6.12239 8.65829 6.75556 8.65829 7.14608 8.26776L8.20674 7.2071Z' fill='#076aff'/></svg></a>"])},null)]),t("div",{class:"f-auth-step2__actions"},[t($,{color:"greyscale_1",onClick:d},se(p=o("$vuetify.uikit.open_in_mixin"))?p:{default:()=>[p]}),t($,{color:"greyscale_6",onClick:c},se(h=o("$vuetify.uikit.install"))?h:{default:()=>[h]})])])])}}});function $t(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!B(e)}r($t,"_isSlot$4");const At=m({name:"FAuthOnekeyInstall",inheritAttrs:!1,setup(){const{smAndDown:e}=L(),{t:n}=w(),a=r(()=>{const s="https://onekey.so/download?client=browserExtension";window.open(s)},"handleInstall");return()=>{let s;return t("div",{class:["f-auth-onekey","f-auth-step2",{"f-auth-step2--small":e.value,"f-auth-onekey--mobile":!T}]},[t("div",{class:"f-auth-step2__left"},null),t("div",{class:"f-auth-step2__right"},[t("div",{class:"f-auth-step2__title",innerHTML:T()?n("$vuetify.uikit.onekey_not_installed"):n("$vuetify.uikit.onekey_not_installed_2")},null),t("div",{class:"f-auth-step2__subtitle",innerHTML:T()?n("$vuetify.uikit.onekey_introduction"):n("$vuetify.uikit.onekey_introduction_2")},null),t($,{color:"greyscale_1",onClick:a},$t(s=n("$vuetify.uikit.install"))?s:{default:()=>[s]})])])}}}),Vt=m({name:"FAuthStep2",inheritAttrs:!1,props:{method:{type:String,default:""},clientId:{type:String,default:""},scope:{type:String,default:""},pkce:{type:Boolean,default:!1},isFiresbox:{type:Boolean,default:!1},hosts:{type:Array,default:()=>[]}},emits:{"update:step":e=>!0,auth:e=>!0,error:e=>!0,close:()=>!0},setup(e,n){let{emit:a,attrs:s}=n;const l=r(()=>{switch(e.method){case"fennec":return bt;case"metamask":return wt;case"onekey":return At;default:return St}},"getComponent"),o=g(()=>({wrapper:l()}));return()=>t("div",{class:"f-auth-step2"},[t(o.value.wrapper,y(e,{onAuth:i=>a("auth",i),onError:i=>a("error",i),onClose:()=>a("close")}),null),t($,{icon:!0,size:"32",class:"f-auth-step2__back",onClick:()=>a("update:step",1)},{default:()=>[t(b,{color:"black"},{default:()=>[S("$back")]})]})])}}),Ma=m({name:"FAuthMethodModal",props:{authMethods:{type:Array,default:()=>["mixin"]},authMethodState:{type:Object,default:()=>({})},clientId:{type:String,default:""},scope:{type:String,default:""},isFiresbox:{type:Boolean,default:!1},hosts:{type:Array,default:()=>[]},pkce:{type:Boolean,default:!1}},emits:{auth:e=>!0,error:e=>!0,destroy:()=>!0},setup(e,n){let{emit:a,expose:s}=n;const{t:l}=w(),o=v(!1),i=v(1),u=v(null),c=v(""),d=r(()=>t("div",{class:"f-auth-methods__wrapper"},[i.value===1?t(kt,y(e,{step:i.value,"onUpdate:step":f=>i.value=f,method:c.value,"onUpdate:method":f=>c.value=f,onClose:p,onAuth:f=>a("auth",f),onError:f=>a("error",f)}),null):t(Vt,y(e,{step:i.value,"onUpdate:step":f=>i.value=f,method:c.value,"onUpdate:method":f=>c.value=f,onClose:p,onAuth:f=>a("auth",f),onError:f=>a("error",f)}),null)]),"content"),p=r(()=>{o.value=!1},"close"),h=r(f=>{var x;f||(i.value=1,c.value="",o.value=!1,p(),a("destroy"),(x=u.value)==null||x.disconnect())},"handleDialogChange"),C=r(f=>{o.value=f,a("error",new Error("Cancelled"))},"handleModalValueChange");return q(()=>o.value,h),s({show:r(()=>{Z()?u.value=ve({clientId:e.clientId,scope:e.scope,pkce:e.pkce},e.isFiresbox,e.hosts,{onError:f=>a("error",f),onSuccess:f=>{e.pkce?a("auth",{type:"mixin",token:f}):a("auth",{type:"mixin",code:f})}}):o.value=!0},"show"),close:p}),()=>t(D,{modelValue:o.value,title:i.value===1?l("$vuetify.uikit.connect_wallet"):"","max-width":"628","onUpdate:modelValue":C},{default:()=>d()})}});const La=m({name:"FBottomNav",props:{items:{type:Array,default:()=>[]}},setup(e){const n={height:66,elevation:0,mandatory:!0},a=r(()=>t(G,null,[e.items.map(s=>t($,{value:s.value,to:s.to,exact:s.exact,class:"f-bottom-nav__item"},{default:()=>[t(b,{class:"f-bottom-nav__icon"},{default:()=>[s.icon]}),s.text&&t("span",{class:"f-bottom-nav__text"},[s.text])]}))]),"content");return()=>t(qe,y({class:"f-bottom-nav"},n),{default:()=>a()})}}),Ba=m({name:"FDivider",setup(){const e={color:"greyscale_6",thickness:1};return()=>t(ie,e,null)}});const Ia=m({name:"FFiatDivision",props:{parts:{type:[Array,String],default:()=>[]}},setup(e){const n=g(()=>typeof e.parts=="string"?e.parts:e.parts.reduce((a,s)=>s.type==="currency"?`${a}<span class="f-fiat-division__symbol">${s.value}</span>`:`${a}${s.value}`,""));return()=>t("div",{innerHTML:n.value,class:"f-fiat-division"},null)}});const _e=m({name:"FTooltip",props:{text:{type:String,default:""}},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a,attrs:s,emit:l}=n;const o=r(()=>{var i;return t("div",{class:"f-tooltip__tip"},[t("span",null,[e.text]),t("span",null,[(i=a.default)==null?void 0:i.call(a)])])},"content");return()=>t(Ge,{location:"top center",class:"f-tooltip","onClick:outside":()=>l("update:modelValue",!1),"onUpdate:modelValue":i=>l("update:modelValue",i)},{...a,default:()=>o()})}}),Mt=m({name:"FHintActivator",setup(){return()=>t(b,{size:"12",color:"red",class:"f-hint__activator"},{default:()=>[S("$info")]})}}),ne=m({name:"FHintLink",props:{href:{type:String,default:""}},setup(e){const{t:n}=w();return()=>t("a",{class:"f-hint__link",href:e.href,target:"_blank"},[n("$vuetify.uikit.learn_more")])}});const Ta=m({name:"FHint",props:{hint:{type:String,default:""},href:{type:String,default:""}},setup(e,n){let{slots:a}=n;const{smAndUp:s}=L(),{t:l}=w(),o=v(!1),i=g(()=>{const c=s.value;return{isTooltip:c,wrapper:c?_e:D,presets:c?{contentClass:"f-hint__content",text:e.hint}:{title:l("$vuetify.uikit.details")}}}),u=r(()=>i.value.isTooltip?e.href&&t(ne,{href:e.href},null):t("div",{class:"f-hint__modal-content"},[e.hint,e.href&&t(ne,{href:e.href},null)]),"content");return()=>t(i.value.wrapper,y({modelValue:o.value,"onUpdate:modelValue":c=>o.value=c},i.value.presets),{activator:a.activator?a.activator:c=>t(Mt,c.props,null),default:()=>u()})}});const za=m({name:"FInfoGrid",props:{reverse:Boolean,list:Boolean},setup(e,n){let{slots:a}=n;const s=g(()=>["f-info-grid",{"f-info-grid--reverse":e.reverse,"f-info-grid--list":e.list}]);return()=>{var l;return t("div",{class:s.value},[(l=a.default)==null?void 0:l.call(a)])}}});const Oa=m({name:"FInfoGridItem",props:{title:String,value:String,hint:String,unit:String},setup(e,n){let{slots:a}=n;return()=>{var s,l,o,i;return t("div",{class:"f-info-grid-item"},[t("div",{class:"f-info-grid-item__title"},[(l=(s=a.title)==null?void 0:s.call(a))!=null?l:e.title,t(_e,{hint:e.hint},null)]),t("div",{class:"f-info-grid-item__value"},[t("span",null,[(i=(o=a.value)==null?void 0:o.call(a))!=null?i:e.value]),t("span",null,[e.unit])])])}}});const Lt=m({name:"FLoading",props:{text:String,processProps:{type:Object,default:()=>({})}},setup(e,n){let{slots:a}=n;return()=>{var s,l;return t("div",{class:"f-loading__content"},[t(ce,y({width:3,indeterminate:!0},e.processProps),null),t("span",{class:"f-loading__text"},[(l=(s=a.text)==null?void 0:s.call(a))!=null?l:e.text])])}}}),ja=m({name:"FFullscreenLoading",setup(e,n){let{attrs:a}=n;return()=>t(de,{persistent:!0,class:"f-fullscreen-loading"},{default:()=>[t(Lt,a,null)]})}});function Bt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!B(e)}r(Bt,"_isSlot$3");const It=m({name:"FPayingModal",props:{modelValue:{type:Boolean,default:!1},text:{type:String,default:""}},emits:{"update:modelValue":e=>!0,cancel:()=>!0},setup(e,n){let{emit:a}=n;const{t:s}=w(),l=v(null),o=v(!1);return q(()=>e.modelValue,r(u=>{o.value=!1,l.value&&clearTimeout(l.value),u&&(l.value=setTimeout(()=>{o.value=!0},3e4))},"handleModalChange")),()=>{let u;return t(de,{modelValue:e.modelValue,class:"f-payment-loading d-flex align-center justify-center",persistent:!0,"onUpdate:modelValue":c=>a("update:modelValue",c)},{default:()=>[t("div",{class:"f-spinner__wrapper"},[Array.from({length:4}).map(()=>t("span",{class:"f-spinner__rect"},null))]),t("div",{class:"f-payment__hint text-center text-subtitle-2"},[o.value?s("$vuetify.uikit.lasting_tip"):e.text||s("$vuetify.uikit.checking_payment")]),t("div",{class:"f-payment__actions"},[t(W,{rounded:"pill",variant:"outlined",color:"greyscale_7",onClick:()=>a("cancel")},Bt(u=s("$vuetify.uikit.cancel"))?u:{default:()=>[u]})])]})}}});function le(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!B(e)}r(le,"_isSlot$2");const Da=m({name:"FPaymentModal",inheritAttrs:!1,emits:{destroy:()=>!0},setup(e,n){let{expose:a,emit:s}=n;const l=v(!1),o=v(null),i=v(!1),u=v(null),c=v(null),d=v(!1),p=v(""),h=v(""),C=v(""),k=v(""),f=v(!1),{mdAndUp:x}=L(),{t:I}=w(),P=r(()=>{i.value=!1},"cancel"),U=r(()=>{i.value=!0},"handlePaid"),E=r(()=>{window.location.href=C.value},"handleOpenInApp"),A=r(_=>{_||(c.value&&typeof c.value=="function"&&c.value(new Error("Cancelled")),u.value&&clearTimeout(u.value),i.value=!1,k.value="",C.value="",d.value=!1,o.value=null,c.value=null),l.value||s("destroy")},"handleModalChange");q(()=>i.value,A),q(()=>l.value,A);const N=r(async _=>{var O,J,X;const{actions:F,checker:V}=_;C.value=_.scheme,k.value=_.channel,p.value=_.assetId,h.value=_.amount,f.value=_.hideCheckingModal||!1;const M=r(()=>i.value=!0,"showChecking");switch(k.value){case"mixin":Z()?((O=F.mixin)==null||O.call(F),M()):(l.value=!0,d.value=!0,R());break;case"fennec":await((J=F.fennec)==null?void 0:J.call(F)),M();break;default:await((X=F.mvm)==null?void 0:X.call(F)),M();break}return new Promise((ye,Y)=>{c.value=Y,z(ye,Y,V)})},"show"),R=r(async()=>{const _=await fetch(`https://api.mixin.one/network/assets/${p.value}`);o.value=(await _.json()).data},"requestAsset"),z=r(async(_,F,V)=>{try{await V()?(l.value=!1,i.value=!1,_()):u.value=setTimeout(()=>{(l.value||i.value)&&z(_,F,V)},3e3)}catch(M){F(M),l.value=!1,i.value=!1}},"polling");return a({show:N}),()=>{let _,F;return t("div",null,[t(D,{modelValue:l.value,"onUpdate:modelValue":V=>l.value=V,maxWidth:"780"},{default:()=>{var V,M,O;return[t("div",{class:`f-payment-modal__content ${!x.value&&"f-payment-modal__content--mobile"}`},[t("div",{class:"f-payment-modal__left"},[C.value&&t(ge,{class:"f-payment-modal__qr",text:C.value,size:182},null)]),t("div",{class:"f-payment-modal__right"},[o.value&&t(G,null,[t("div",{class:"f-payment-modal__logo"},[t(j,{src:(M=(V=o.value)==null?void 0:V.icon_url)!=null?M:"",width:32,height:32},null)]),t("div",{class:"f-payment-modal__amount mt-1"},[t("div",null,[I("$vuetify.uikit.scan_to_pay")]),t("div",null,[h.value+" "+((O=o.value)==null?void 0:O.symbol)])])]),t("div",{class:"f-payment-modal__hint mt-5",innerHTML:I("$vuetify.uikit.mixin_pay_detail",["<a class='f-auth-mixin__link' href='https://mixin.one/messenger'>Mixin Messenger<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.2068 1.79276C10.2975 -0.116585 7.2018 -0.116585 5.29246 1.79276L4.64288 2.44234C4.25236 2.83286 4.25236 3.46603 4.64288 3.85655C5.03341 4.24707 5.66657 4.24707 6.0571 3.85655L6.70667 3.20698C7.83497 2.07868 9.6643 2.07868 10.7926 3.20698C11.9209 4.33528 11.9209 6.16461 10.7926 7.29291L10.1425 7.94304C9.75195 8.33357 9.75194 8.96673 10.1425 9.35726C10.533 9.74778 11.1662 9.74778 11.5567 9.35726L12.2068 8.70712C14.1162 6.79778 14.1162 3.70211 12.2068 1.79276Z' fill='#076aff'/><path d='M3.85726 6.05638C4.24779 5.66586 4.24779 5.03269 3.85726 4.64217C3.46674 4.25165 2.83357 4.25165 2.44305 4.64217L1.79236 5.29286C-0.116985 7.2022 -0.116985 10.2979 1.79236 12.2072C3.70171 14.1166 6.79738 14.1166 8.70672 12.2072L9.35713 11.5568C9.74765 11.1663 9.74765 10.5331 9.35713 10.1426C8.9666 9.75207 8.33344 9.75207 7.94291 10.1426L7.29251 10.793C6.16421 11.9213 4.33488 11.9213 3.20658 10.793C2.07828 9.6647 2.07828 7.83537 3.20658 6.70707L3.85726 6.05638Z' fill='#076aff'/><path d='M8.20674 7.2071C8.59727 6.81658 8.59727 6.18341 8.20674 5.79289C7.81622 5.40237 7.18305 5.40237 6.79253 5.79289L5.73187 6.85355C5.34134 7.24408 5.34134 7.87724 5.73187 8.26776C6.12239 8.65829 6.75556 8.65829 7.14608 8.26776L8.20674 7.2071Z' fill='#076aff'/></svg></a>"])},null),t("div",{class:"f-payment-modal__actions"},[t($,{loading:i.value,color:"greyscale_1",onClick:U},le(_=I("$vuetify.uikit.paid"))?_:{default:()=>[_]}),t($,{color:"greyscale_6",onClick:E},le(F=I("$vuetify.uikit.open_in_mixin"))?F:{default:()=>[F]})])])])]}}),t(It,{modelValue:!d.value&&!f.value&&i.value,onCancel:P},null)])}}});function Tt(e){const n=v([]);K(async()=>{const l=(await st.get("https://static.fox.one/assets/country-code.json")).data;n.value=Object.keys(l).map(o=>({name:l[o].name,code:String(l[o].dialCode)+""}))});const a=g(()=>n.value.filter(s=>{const l=String(s.name).toLowerCase(),o=String(s.code).toLowerCase();return l.startsWith(e.value)||o.startsWith(e.value)}));return{countries:n,filtered:a}}r(Tt,"useCountries");function zt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!B(e)}r(zt,"_isSlot$1");const Ot=m({name:"FCountryCodeSelect",props:{dialog:{type:Boolean,default:!1},code:{type:String,default:""}},emits:{"update:code":e=>!0,"update:dialog":e=>!0},setup(e,n){let{emit:a}=n;const{t:s}=w(),l=v(""),{filtered:o}=Tt(l),i=r(u=>{a("update:code",u),a("update:dialog",!1)},"handleSelect");return()=>t(D,{title:s("$vuetify.uikit.select_phone_code"),modelValue:e.dialog,"onUpdate:modelValue":u=>a("update:dialog",u)},{activator:u=>{let{props:{onClick:c}}=u;return t("div",{class:"f-country-code-select__field",onClick:c},[e.code?t("span",{class:"f-country-code-select__code"},[e.code||"code"]):t(b,null,{default:()=>[S("$question")]}),t(b,{size:"16"},{default:()=>[S("$expand")]})])},default:()=>{let u;return t("div",{class:"f-country-code-select"},[t("div",{class:"f-country-code-select__search"},[t(pe,{modelValue:l.value,"onUpdate:modelValue":c=>l.value=c},null)]),t(re,{class:"f-country-code-select__list"},zt(u=o.value.map(c=>t(ue,{minHeight:48},{default:()=>[t(fe,{title:c.code+" "+c.name,value:c.code,onClick:()=>i(c.code)},null)]})))?u:{default:()=>[u]})])}})}}),Pa=m({name:"FPhoneInput",props:{code:{type:String,default:""}},emits:{"update:code":e=>!0},setup(e,n){let{slots:a,emit:s}=n;const l=v(!1),o={reverse:!0,type:"number"},i=r(u=>{["e","+","-","."].includes(u.key)&&u.preventDefault()},"handleKeydown");return()=>t(Q,y(o,{onKeydown:i}),{...a,"prepend-inner":()=>t(Ot,{dialog:l.value,"onUpdate:dialog":u=>l.value=u,code:e.code,"onUpdate:code":u=>s("update:code",u)},null)})}}),Ua=m({name:"FRender",props:{content:{type:[Object,String],default:""}},render(){return this.content}});function jt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!B(e)}r(jt,"_isSlot");const Ea=m({name:"FSegmentControl",props:{grow:Boolean,bgColor:{type:String,default:"greyscale_6"},items:{type:Array,default:()=>[]}},setup(e){const{colorClasses:n,colorStyles:a}=Me(g(()=>({background:Ce(e.bgColor)}))),s={color:"greyscale_1",mandatory:!0};return()=>{let l;return t(Be,y({class:["f-segment-control",n.value,{"f-segment-control--grow":e.grow}],style:[a.value]},s),jt(l=e.items.map(o=>t($,{value:o.value},{default:()=>[o.text]})))?l:{default:()=>[l]})}}});const Na=m({name:"FSlider",props:{isProcess:Boolean},setup(e){const n=g(()=>({"f-slider--hide-thumb":e.isProcess})),a=e.isProcess?{trackSize:4,tickSize:4,color:"success",trackColor:"greyscale_6",rounded:0,showTicks:"always",readonly:!0}:{trackSize:8,thumbSize:24,elevation:0,color:"greyscale_1",trackColor:"greyscale_5"};return()=>t(nt,y({class:["f-slider",n.value]},a),null)}});const Ra=m({name:"FSwitch",props:{outlined:{type:Boolean,default:!0}},setup(e){const n={inset:!0,ripple:!1,hideDetails:!0},a=g(()=>["f-switch",{"f-switch--outlined":e.outlined}]);return()=>t(lt,y(n,{class:a.value}),null)}});const Ha=m({name:"FTabs",props:{narrow:Boolean},setup(e,n){let{slots:a}=n;ot({VTab:{ripple:!1}});const s={height:52},l=g(()=>["f-tabs",{"f-tabs--narrow":e.narrow}]);return()=>t(it,y(s,{class:l.value}),a)}});const qa=m({name:"FTextarea",setup(){const e={color:"primary"};return()=>t(ut,y({class:"rounded f-textarea"},e),null)}});export{ge as A,Ua as B,pe as C,Ea as D,Na as E,xa as F,Ra as G,Ha as H,qa as I,ct as J,_e as K,Fa as L,ka as M,ba as N,wa as O,Ca as P,ft as T,Sa as a,$a as b,Aa as c,me as d,yt as e,pt as f,vt as g,gt as h,Va as i,Ma as j,La as k,$ as l,Ba as m,Ia as n,Ta as o,za as p,Oa as q,Q as r,fe as s,Lt as t,ja as u,D as v,It as w,Da as x,Pa as y,Ot as z};
//# sourceMappingURL=FTextarea.8eaa01b0.js.map
