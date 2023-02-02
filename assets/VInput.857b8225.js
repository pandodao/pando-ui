var W=Object.defineProperty;var c=(e,s)=>W(e,"name",{value:s,configurable:!0});import{a as g,b as v,r as _,d as D,p as G,t as H,j as J,u as Q,q as X,l as Y,o as Z}from"./vue.esm-bundler.1ba604f9.js";import{m as ee}from"./color.b891a321.js";import{d as ae,u as j,a as S,h as z,e as ne,g as N,k as w,b as le}from"./useRender.965bd6aa.js";import{V as te,I as R}from"./VIcon.518cdeb6.js";import{m as se,u as ue}from"./density.8ac56fa2.js";import{u as A}from"./proxiedModel.23143766.js";import{w as F,E as L,v as ie,p as oe}from"./helpers.bd7a8d83.js";import{a as re}from"./locale.fb27b96c.js";import{V as de}from"./VMessages.11ef5b61.js";function ce(e){const{t:s}=re();function i(n){var m;let{name:o}=n;const a={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[o],r=e[`onClick:${o}`],p=r&&a?s(`$vuetify.input.${a}`,(m=e.label)!=null?m:""):void 0;return g(te,{icon:e[`${o}Icon`],"aria-label":p,onClick:r},null)}return c(i,"InputIcon"),{InputIcon:i}}c(ce,"useInputIcon");const Pe=ae({name:"VLabel",props:{text:String,clickable:Boolean,...ee()},setup(e,s){let{slots:i}=s;return j(()=>{var n;return g("label",{class:["v-label",{"v-label--clickable":e.clickable}]},[e.text,(n=i.default)==null?void 0:n.call(i)])}),{}}}),ve=S({focused:Boolean},"focus");function Se(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();const i=A(e,"focused"),n=v(()=>({[`${s}--focused`]:i.value}));function o(){i.value=!0}c(o,"focus");function a(){i.value=!1}return c(a,"blur"),{focusClasses:n,isFocused:i,focus:o,blur:a}}c(Se,"useFocus");const K=Symbol.for("vuetify:form"),Ce=S({disabled:Boolean,fastFail:Boolean,lazyValidation:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function Fe(e){const s=A(e,"modelValue"),i=v(()=>e.disabled),n=v(()=>e.readonly),o=_(!1),a=_([]),r=_([]);async function p(){const l=[];let t=!0;r.value=[],o.value=!0;for(const d of a.value){const u=await d.validate();if(u.length>0&&(t=!1,l.push({id:d.id,errorMessages:u})),!t&&e.fastFail)break}return r.value=l,o.value=!1,{valid:t,errors:r.value}}c(p,"validate");function m(){a.value.forEach(l=>l.reset()),s.value=null}c(m,"reset");function b(){a.value.forEach(l=>l.resetValidation()),r.value=[],s.value=null}return c(b,"resetValidation"),D(a,()=>{let l=0,t=0;const d=[];for(const u of a.value)u.isValid===!1?(t++,d.push({id:u.id,errorMessages:u.errorMessages})):u.isValid===!0&&l++;r.value=d,s.value=t>0?!1:l===a.value.length?!0:null},{deep:!0}),G(K,{register:l=>{let{id:t,validate:d,reset:u,resetValidation:I}=l;a.value.some(V=>V.id===t)&&ne(`Duplicate input name "${t}"`),a.value.push({id:t,validate:d,reset:u,resetValidation:I,isValid:null,errorMessages:[]})},unregister:l=>{a.value=a.value.filter(t=>t.id!==l)},update:(l,t,d)=>{const u=a.value.find(I=>I.id===l);!u||(u.isValid=t,u.errorMessages=d)},isDisabled:i,isReadonly:n,isValidating:o,items:a,validateOn:H(e,"validateOn")}),{errors:r,isDisabled:i,isReadonly:n,isValidating:o,items:a,validate:p,reset:m,resetValidation:b}}c(Fe,"createForm");function fe(){return J(K,null)}c(fe,"useForm");const me=S({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...ve()},"validation");function pe(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z(),i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:N();const n=A(e,"modelValue"),o=v(()=>e.validationValue===void 0?n.value:e.validationValue),a=fe(),r=_([]),p=_(!0),m=v(()=>!!(F(n.value===""?null:n.value).length||F(o.value===""?null:o.value).length)),b=v(()=>!!(e.disabled||a!=null&&a.isDisabled.value)),l=v(()=>!!(e.readonly||a!=null&&a.isReadonly.value)),t=v(()=>e.errorMessages.length?F(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):r.value),d=v(()=>e.error||t.value.length?!1:e.rules.length&&p.value?null:!0),u=_(!1),I=v(()=>({[`${s}--error`]:d.value===!1,[`${s}--dirty`]:m.value,[`${s}--disabled`]:b.value,[`${s}--readonly`]:l.value})),V=v(()=>{var f;return(f=e.name)!=null?f:Q(i)});X(()=>{a==null||a.register({id:V.value,validate:h,reset:B,resetValidation:$})}),Y(()=>{a==null||a.unregister(V.value)});const P=v(()=>e.validateOn||(a==null?void 0:a.validateOn.value)||"input");Z(()=>a==null?void 0:a.update(V.value,d.value,t.value)),w(()=>P.value==="input",()=>{D(o,()=>{if(o.value!=null)h();else if(e.focused){const f=D(()=>e.focused,y=>{y||h(),f()})}})}),w(()=>P.value==="blur",()=>{D(()=>e.focused,f=>{f||h()})}),D(d,()=>{a==null||a.update(V.value,d.value,t.value)});function B(){$(),n.value=null}c(B,"reset");function $(){p.value=!0,r.value=[]}c($,"resetValidation");async function h(){var y;const f=[];u.value=!0;for(const M of e.rules){if(f.length>=((y=e.maxErrors)!=null?y:1))break;const k=await(typeof M=="function"?M:()=>M)(o.value);if(k!==!0){if(typeof k!="string"){console.warn(`${k} is not a valid value. Rule functions must return boolean true or a string.`);continue}f.push(k)}}return r.value=f,u.value=!1,p.value=!1,r.value}return c(h,"validate"),{errorMessages:t,isDirty:m,isDisabled:b,isReadonly:l,isPristine:p,isValid:d,isValidating:u,reset:B,resetValidation:$,validate:h,validationClasses:I}}c(pe,"useValidation");const ge=S({id:String,appendIcon:R,prependIcon:R,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":L,"onClick:append":L,...se(),...me()},"v-input"),ye=le()({name:"VInput",props:{...ge()},emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:i,slots:n,emit:o}=s;const{densityClasses:a}=ue(e),{InputIcon:r}=ce(e),p=N(),m=v(()=>e.id||`input-${p}`),b=v(()=>`${m.value}-messages`),{errorMessages:l,isDirty:t,isDisabled:d,isReadonly:u,isPristine:I,isValid:V,isValidating:P,reset:B,resetValidation:$,validate:h,validationClasses:f}=pe(e,"v-input",m),y=v(()=>({id:m,messagesId:b,isDirty:t,isDisabled:d,isReadonly:u,isPristine:I,isValid:V,isValidating:P,reset:B,resetValidation:$,validate:h}));return j(()=>{var M,C,k,E,O;const T=!!(n.prepend||e.prependIcon),U=!!(n.append||e.appendIcon),x=!!((M=e.messages)!=null&&M.length||l.value.length),q=!e.hideDetails||e.hideDetails==="auto"&&(x||!!n.details);return g("div",{class:["v-input",`v-input--${e.direction}`,a.value,f.value]},[T&&g("div",{key:"prepend",class:"v-input__prepend"},[(C=n.prepend)==null?void 0:C.call(n,y.value),e.prependIcon&&g(r,{key:"prepend-icon",name:"prepend"},null)]),n.default&&g("div",{class:"v-input__control"},[(k=n.default)==null?void 0:k.call(n,y.value)]),U&&g("div",{key:"append",class:"v-input__append"},[e.appendIcon&&g(r,{key:"append-icon",name:"append"},null),(E=n.append)==null?void 0:E.call(n,y.value)]),q&&g("div",{class:"v-input__details"},[g(de,{id:b.value,active:x,messages:l.value.length>0?l.value:e.messages},{message:n.message}),(O=n.details)==null?void 0:O.call(n,y.value)])])}),{reset:B,resetValidation:$,validate:h}}});function Ae(e){const s=Object.keys(ye.props).filter(i=>!ie(i));return oe(e,s)}c(Ae,"filterInputProps");export{ye as V,fe as a,Pe as b,ve as c,me as d,pe as e,Ae as f,ce as g,Ce as h,Fe as i,ge as m,Se as u};
//# sourceMappingURL=VInput.857b8225.js.map
