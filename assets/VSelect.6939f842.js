var ie=Object.defineProperty;var d=(e,p)=>ie(e,"name",{value:p,configurable:!0});import{b as g,a as n,m as w,t as $,f as j,g as se,v as ue,r as N,F as ce,e as re}from"./vue.esm-bundler.57aa1454.js";import{m as de,f as ve,V as me}from"./VTextField.5738fd9a.js";import{f as fe}from"./forwardRefs.c003b6b8.js";import{I as T,m as J,a as pe,u as he,V as E}from"./VIcon.b7876f5b.js";import{m as ke,u as Ve,V as Ce}from"./VList.8d2887de.js";import{m as ye}from"./transition.7787ec60.js";import{a as be}from"./VInput.a59f36d0.js";import{a as Q}from"./locale.ce33eacd.js";import{u as _}from"./proxiedModel.aff93369.js";import{h as Ie,V as ge}from"./VDialog.789dc96e.js";import{V as H}from"./VListItem.f12d2f11.js";import{m as xe,V as Pe}from"./VSelectionControl.d88669b3.js";import{b as W,g as O,u as U,p as Se}from"./useRender.0f3b6188.js";import{p as Be,d as Y,E as q,o as De,w as we}from"./helpers.ff98b59e.js";import{m as Z,u as Ae,g as Te,V as A}from"./variant.58edd759.js";import{b as _e,u as Fe,m as Re,a as $e}from"./VBtn.ab71924f.js";import{m as ee,p as ae}from"./color.5e70182f.js";import{n as Ee}from"./index.5cb25ca4.js";import{m as Oe,u as Le}from"./border.72c41e60.js";import{m as Ge,u as Me}from"./density.5fc65f23.js";import{m as Ne,u as Ue}from"./elevation.08bb2882.js";import{m as ze,u as Ke}from"./rounded.638bf334.js";import{m as je,u as He}from"./router.359f3c68.js";import{R as qe}from"./index.17c04f25.js";import{V as X}from"./VAvatar.01c8c686.js";const Xe=W({indeterminate:Boolean,indeterminateIcon:{type:T,default:"$checkboxIndeterminate"},...xe({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),le=O()({name:"VCheckboxBtn",props:Xe(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,p){let{slots:t}=p;const h=_(e,"indeterminate"),i=_(e,"modelValue");function C(v){h.value&&(h.value=!1)}d(C,"onChange");const k=g(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),u=g(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return U(()=>n(Pe,w(e,{modelValue:i.value,"onUpdate:modelValue":[v=>i.value=v,C],class:"v-checkbox-btn",type:"checkbox",inline:!0,falseIcon:k.value,trueIcon:u.value,"aria-checked":e.indeterminate?"mixed":void 0}),t)),{}}});function ga(e){return Be(e,Object.keys(le.props))}d(ga,"filterCheckboxBtnProps");const te=Symbol.for("vuetify:v-chip-group"),xa=O()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Y},..._e({selectedClass:"v-chip--selected"}),...J(),...ee(),...Z({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:t}=p;const{themeClasses:h}=ae(e),{isSelected:i,select:C,next:k,prev:u,selected:v}=Fe(e,te);return Se({VChip:{color:$(e,"color"),disabled:$(e,"disabled"),filter:$(e,"filter"),variant:$(e,"variant")}}),U(()=>n(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},h.value]},{default:()=>{var P;return[(P=t.default)==null?void 0:P.call(t,{isSelected:i,select:C,next:k,prev:u,selected:v.value})]}})),{}}}),Je=O()({name:"VChip",directives:{Ripple:qe},props:{activeClass:String,appendAvatar:String,appendIcon:T,closable:Boolean,closeIcon:{type:T,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:T,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:q,onClickOnce:q,...Oe(),...Ge(),...Ne(),...Re(),...ze(),...je(),...pe(),...J({tag:"span"}),...ee(),...Z({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,p){let{attrs:t,emit:h,slots:i}=p;const{t:C}=Q(),{borderClasses:k}=Le(e),{colorClasses:u,colorStyles:v,variantClasses:P}=Ae(e),{densityClasses:L}=Me(e),{elevationClasses:r}=Ue(e),{roundedClasses:y}=Ke(e),{sizeClasses:S}=he(e),{themeClasses:F}=ae(e),B=_(e,"modelValue"),l=$e(e,te,!1),V=He(e,t),G=g(()=>e.link!==!1&&V.isLink.value),b=g(()=>!e.disabled&&e.link!==!1&&(!!l||e.link||V.isClickable.value));function D(a){B.value=!1,h("click:close",a)}d(D,"onCloseClick");function R(a){var o;h("click",a),b.value&&((o=V.navigate)==null||o.call(V,a),l==null||l.toggle())}d(R,"onClick");function M(a){(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),R(a))}return d(M,"onKeyDown"),()=>{const a=V.isLink.value?"a":e.tag,o=!!(i.append||e.appendIcon||e.appendAvatar),c=!!(i.close||e.closable),s=!!(i.filter||e.filter)&&l,m=!!(i.prepend||e.prependIcon||e.prependAvatar),x=!l||l.isSelected.value;return B.value&&j(n(a,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":b.value,"v-chip--filter":s,"v-chip--pill":e.pill},F.value,k.value,x?u.value:void 0,L.value,r.value,y.value,S.value,P.value,l==null?void 0:l.selectedClass.value],style:[x?v.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:V.href.value,tabindex:b.value?0:void 0,onClick:R,onKeydown:b.value&&!G.value&&M},{default:()=>{var I,f;return[Te(b.value,"v-chip"),s&&n(A,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[n(Ee,null,{default:()=>[j(n("div",{class:"v-chip__filter"},[i.filter?i.filter():n(E,null,null)]),[[ue,l.isSelected.value]])]})]}),m&&n(A,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[i.prepend?n("div",{class:"v-chip__prepend"},[i.prepend()]):e.prependAvatar?n(X,{start:!0},null):e.prependIcon?n(E,{start:!0},null):void 0]}),(f=(I=i.default)==null?void 0:I.call(i,{isSelected:l==null?void 0:l.isSelected.value,selectedClass:l==null?void 0:l.selectedClass.value,select:l==null?void 0:l.select,toggle:l==null?void 0:l.toggle,value:l==null?void 0:l.value.value,disabled:e.disabled}))!=null?f:e.text,o&&n(A,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[i.append?n("div",{class:"v-chip__append"},[i.append()]):e.appendAvatar?n(X,{end:!0},null):e.appendIcon?n(E,{end:!0},null):void 0]}),c&&n(A,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[n("div",{class:"v-chip__close","aria-label":C(e.closeLabel),onClick:D},[i.close?i.close():n(E,null,null)])]})]}}),[[se("ripple"),b.value&&e.ripple,null]])}}}),Qe=W({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:T,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:Y},...ke({itemChildren:!1})},"v-select"),Pa=O()({name:"VSelect",props:{...Qe(),...De(de({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...ye({transition:{component:Ie}})},emits:{"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,p){let{slots:t}=p;const{t:h}=Q(),i=N(),C=N(),k=_(e,"menu"),u=g({get:()=>k.value,set:a=>{var o;k.value&&!a&&((o=C.value)==null?void 0:o.\u03A8openChildren)||(k.value=a)}}),{items:v,transformIn:P,transformOut:L}=Ve(e),r=_(e,"modelValue",[],a=>P(we(a)),a=>{var c;const o=L(a);return e.multiple?o:(c=o[0])!=null?c:null}),y=be(),S=g(()=>r.value.map(a=>v.value.find(o=>e.valueComparator(o.value,a.value))||a)),F=g(()=>S.value.map(a=>a.props.value)),B=g(()=>e.hideSelected?v.value.filter(a=>!S.value.some(o=>o===a)):v.value),l=N();function V(a){e.openOnClear&&(u.value=!0)}d(V,"onClear");function G(){e.hideNoData&&!v.value.length||e.readonly||(y==null?void 0:y.isReadonly.value)||(u.value=!u.value)}d(G,"onMousedownControl");function b(a){var o,c,s,m;e.readonly||(y==null?void 0:y.isReadonly.value)||(["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(a.key)&&a.preventDefault(),["Enter","ArrowDown"," "].includes(a.key)&&(u.value=!0),["Escape","Tab"].includes(a.key)&&(u.value=!1),a.key==="ArrowDown"?(o=l.value)==null||o.focus("next"):a.key==="ArrowUp"?(c=l.value)==null||c.focus("prev"):a.key==="Home"?(s=l.value)==null||s.focus("first"):a.key==="End"&&((m=l.value)==null||m.focus("last")))}d(b,"onKeydown");function D(a){if(e.multiple){const o=F.value.findIndex(c=>e.valueComparator(c,a.value));if(o===-1)r.value=[...r.value,a];else{const c=[...r.value];c.splice(o,1),r.value=c}}else r.value=[a],u.value=!1}d(D,"select");function R(a){var o;(o=l.value)!=null&&o.$el.contains(a.relatedTarget)||(u.value=!1)}d(R,"onBlur");function M(a){var o;a.relatedTarget==null&&((o=i.value)==null||o.focus())}return d(M,"onFocusout"),U(()=>{const a=!!(e.chips||t.chip),o=!!(!e.hideNoData||B.value.length||t.prepend||t.append||t["no-data"]),[c]=ve(e);return n(me,w({ref:i},c,{modelValue:r.value.map(s=>s.props.value).join(", "),"onUpdate:modelValue":s=>{s==null&&(r.value=[])},validationValue:r.externalValue,dirty:r.value.length>0,class:["v-select",{"v-select--active-menu":u.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":r.value.length}],appendInnerIcon:e.menuIcon,readonly:!0,"onClick:clear":V,"onMousedown:control":G,onBlur:R,onKeydown:b}),{...t,default:()=>n(ce,null,[n(ge,w({ref:C,modelValue:u.value,"onUpdate:modelValue":s=>u.value=s,activator:"parent",contentClass:"v-select__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[o&&n(Ce,{ref:l,selected:F.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:s=>s.preventDefault(),onFocusout:M},{default:()=>{var s,m,x,I;return[!B.value.length&&!e.hideNoData&&((m=(s=t["no-data"])==null?void 0:s.call(t))!=null?m:n(H,{title:h(e.noDataText)},null)),(x=t["prepend-item"])==null?void 0:x.call(t),B.value.map((f,z)=>{var K;return t.item?(K=t.item)==null?void 0:K.call(t,{item:f,index:z,props:w(f.props,{onClick:()=>D(f)})}):n(H,w({key:z},f.props,{onClick:()=>D(f)}),{prepend:ne=>{let{isSelected:oe}=ne;return e.multiple&&!e.hideSelected?n(le,{modelValue:oe,ripple:!1},null):void 0}})}),(I=t["append-item"])==null?void 0:I.call(t)]}})]}),S.value.map((s,m)=>{function x(f){f.stopPropagation(),f.preventDefault(),D(s)}d(x,"onChipClose");const I={"onClick:close":x,modelValue:!0,"onUpdate:modelValue":void 0};return n("div",{key:s.value,class:"v-select__selection"},[a?n(A,{defaults:{VChip:{closable:e.closableChips,size:"small",text:s.title}}},{default:()=>[t.chip?t.chip({item:s,index:m,props:I}):n(Je,I,null)]}):t.selection?t.selection({item:s,index:m}):n("span",{class:"v-select__selection-text"},[s.title,e.multiple&&m<S.value.length-1&&n("span",{class:"v-select__selection-comma"},[re(",")])])])})])})}),fe({menu:u,select:D},i)}});export{le as V,Qe as a,Je as b,xa as c,Pa as d,ga as f,Xe as m};
//# sourceMappingURL=VSelect.6939f842.js.map
