var te=Object.defineProperty;var d=(e,h)=>te(e,"name",{value:h,configurable:!0});import{b as x,a as t,m as T,t as L,f as K,g as ne,v as oe,r as j,F as ue,e as se}from"./vue.esm-bundler.330b8bcd.js";import{m as ie,f as re,V as ce}from"./VTextField.d9025984.js";import{f as de}from"./forwardRefs.c003b6b8.js";import{I as w,m as X,a as ve,u as me,V as G}from"./VIcon.c758310f.js";import{m as fe,u as pe,V as he}from"./VList.318061a0.js";import{m as ke}from"./transition.d91c432b.js";import{a as Ve}from"./VInput.3a20875e.js";import{a as Ce}from"./locale.0eda84ca.js";import{u as $}from"./proxiedModel.815b9064.js";import{h as ge,V as ye}from"./VDialog.a4bfe643.js";import{V as M}from"./VListItem.4533e071.js";import{m as Ie,V as be}from"./VSelectionControl.d22e73c0.js";import{a as J,d as z,u as U,p as xe,b as Pe}from"./useRender.b59b3e39.js";import{p as Se,d as Q,E as H,o as Be,w as De}from"./helpers.6dbb45ef.js";import{m as W,u as Ae,g as Te,V as _}from"./variant.b259332f.js";import{b as _e,u as we,m as $e,a as Fe}from"./VBtn.e55e9e37.js";import{m as Y,p as Z}from"./color.66c7a00f.js";import{n as Oe}from"./index.a5e0d629.js";import{m as Ee,u as Le}from"./border.8a30a617.js";import{m as Ge,u as Re}from"./density.38f0f124.js";import{m as Ne,u as ze}from"./elevation.b2f27a68.js";import{m as Ue,u as Ke}from"./rounded.257cff90.js";import{m as je,u as Me}from"./router.a6c113d7.js";import{R as He}from"./index.b967f916.js";import{V as q}from"./VAvatar.f79052e0.js";const qe=J({indeterminate:Boolean,indeterminateIcon:{type:w,default:"$checkboxIndeterminate"},...Ie({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),ee=z({name:"VCheckboxBtn",props:qe(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,h){let{slots:n}=h;const k=$(e,"indeterminate"),o=$(e,"modelValue");function s(C){k.value&&(k.value=!1)}d(s,"onChange");const p=x(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),y=x(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return U(()=>t(be,T(e,{modelValue:o.value,"onUpdate:modelValue":[C=>o.value=C,s],class:"v-checkbox-btn",type:"checkbox",inline:!0,falseIcon:p.value,trueIcon:y.value,"aria-checked":e.indeterminate?"mixed":void 0}),n)),{}}});function Il(e){return Se(e,Object.keys(ee.props))}d(Il,"filterCheckboxBtnProps");const le=Symbol.for("vuetify:v-chip-group"),bl=z({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Q},..._e({selectedClass:"v-chip--selected"}),...X(),...Y(),...W({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,h){let{slots:n}=h;const{themeClasses:k}=Z(e),{isSelected:o,select:s,next:p,prev:y,selected:C}=we(e,le);return xe({VChip:{color:L(e,"color"),disabled:L(e,"disabled"),filter:L(e,"filter"),variant:L(e,"variant")}}),U(()=>{var i;return t(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},k.value]},{default:()=>[(i=n.default)==null?void 0:i.call(n,{isSelected:o,select:s,next:p,prev:y,selected:C.value})]})}),{}}}),Xe=z({name:"VChip",directives:{Ripple:He},props:{activeClass:String,appendAvatar:String,appendIcon:w,closable:Boolean,closeIcon:{type:w,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:w,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:H,onClickOnce:H,...Ee(),...Ge(),...Ne(),...$e(),...Ue(),...je(),...ve(),...X({tag:"span"}),...Y(),...W({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,h){let{attrs:n,emit:k,slots:o}=h;const{borderClasses:s}=Le(e),{colorClasses:p,colorStyles:y,variantClasses:C}=Ae(e),{densityClasses:i}=Re(e),{elevationClasses:P}=ze(e),{roundedClasses:S}=Ke(e),{sizeClasses:F}=me(e),{themeClasses:B}=Z(e),V=$(e,"modelValue"),u=Fe(e,le,!1),g=Me(e,n),R=x(()=>e.link!==!1&&g.isLink.value),m=x(()=>!e.disabled&&e.link!==!1&&(!!u||e.link||g.isClickable.value));function N(a){V.value=!1,k("click:close",a)}d(N,"onCloseClick");function O(a){var r;k("click",a),m.value&&((r=g.navigate)==null||r.call(g,a),u==null||u.toggle())}d(O,"onClick");function l(a){(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),O(a))}return d(l,"onKeyDown"),()=>{var a;const r=g.isLink.value?"a":e.tag,f=!!(o.append||e.appendIcon||e.appendAvatar),I=!!(o.close||e.closable),D=!!(o.filter||e.filter)&&u,c=!!(o.prepend||e.prependIcon||e.prependAvatar),v=!u||u.isSelected.value;return V.value&&K(t(r,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":m.value,"v-chip--filter":D,"v-chip--pill":e.pill},B.value,s.value,v?p.value:void 0,i.value,P.value,S.value,F.value,C.value,u==null?void 0:u.selectedClass.value],style:[v?y.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:g.href.value,tabindex:m.value?0:void 0,onClick:O,onKeydown:m.value&&!R.value&&l},{default:()=>{var b;return[Te(m.value,"v-chip"),D&&t(_,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[t(Oe,null,{default:()=>[K(t("div",{class:"v-chip__filter"},[o.filter?o.filter():t(G,null,null)]),[[oe,u.isSelected.value]])]})]}),c&&t(_,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[o.prepend?t("div",{class:"v-chip__prepend"},[o.prepend()]):e.prependAvatar?t(q,{start:!0},null):e.prependIcon?t(G,{start:!0},null):void 0]}),(b=(a=o.default)==null?void 0:a.call(o,{isSelected:u==null?void 0:u.isSelected.value,selectedClass:u==null?void 0:u.selectedClass.value,select:u==null?void 0:u.select,toggle:u==null?void 0:u.toggle,value:u==null?void 0:u.value.value,disabled:e.disabled}))!=null?b:e.text,f&&t(_,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[o.append?t("div",{class:"v-chip__append"},[o.append()]):e.appendAvatar?t(q,{end:!0},null):e.appendIcon?t(G,{end:!0},null):void 0]}),I&&t(_,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[t("div",{class:"v-chip__close",onClick:N},[o.close?o.close():t(G,null,null)])]})]}}),[[ne("ripple"),m.value&&e.ripple,null]])}}}),Je=J({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:w,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:Q},...fe({itemChildren:!1})},"v-select"),xl=Pe()({name:"VSelect",props:{...Je(),...Be(ie({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...ke({transition:{component:ge}})},emits:{"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,h){let{slots:n}=h;const{t:k}=Ce(),o=j(),s=$(e,"menu"),{items:p,transformIn:y,transformOut:C}=pe(e),i=$(e,"modelValue",[],l=>y(De(l)),l=>{var r;const a=C(l);return e.multiple?a:(r=a[0])!=null?r:null}),P=Ve(),S=x(()=>i.value.map(l=>p.value.find(a=>e.valueComparator(a.value,l.value))||l)),F=x(()=>S.value.map(l=>l.props.value)),B=x(()=>e.hideSelected?p.value.filter(l=>!S.value.some(a=>a===l)):p.value),V=j();function u(l){i.value=[],e.openOnClear&&(s.value=!0)}d(u,"onClear");function g(){e.hideNoData&&!p.value.length||e.readonly||P!=null&&P.isReadonly.value||(s.value=!s.value)}d(g,"onClickControl");function R(l){if(!(e.readonly||P!=null&&P.isReadonly.value)){if(["Enter","ArrowDown"," "].includes(l.key)&&(l.preventDefault(),s.value=!0),["Escape","Tab"].includes(l.key)&&(s.value=!1),l.key==="ArrowDown"){var a;(a=V.value)==null||a.focus("next")}else if(l.key==="ArrowUp"){var r;l.preventDefault(),(r=V.value)==null||r.focus("prev")}else if(l.key==="Home"){var f;l.preventDefault(),(f=V.value)==null||f.focus("first")}else if(l.key==="End"){var I;l.preventDefault(),(I=V.value)==null||I.focus("last")}}}d(R,"onKeydown");function m(l){if(e.multiple){const a=F.value.findIndex(r=>e.valueComparator(r,l.value));if(a===-1)i.value=[...i.value,l];else{const r=[...i.value];r.splice(a,1),i.value=r}}else i.value=[l],s.value=!1}d(m,"select");function N(l){var a;(a=V.value)!=null&&a.$el.contains(l.relatedTarget)||(s.value=!1)}d(N,"onBlur");function O(l){if(l.relatedTarget==null){var a;(a=o.value)==null||a.focus()}}return d(O,"onFocusout"),U(()=>{const l=!!(e.chips||n.chip),a=!!(!e.hideNoData||B.value.length||n.prepend||n.append||n["no-data"]),[r]=re(e);return t(ce,T({ref:o},r,{modelValue:i.value.map(f=>f.props.value).join(", "),"onUpdate:modelValue":f=>{f==null&&(i.value=[])},validationValue:i.externalValue,dirty:i.value.length>0,class:["v-select",{"v-select--active-menu":s.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":i.value.length}],appendInnerIcon:e.menuIcon,readonly:!0,"onClick:clear":u,"onClick:control":g,onBlur:N,onKeydown:R}),{...n,default:()=>{var f,I,D;return t(ue,null,[t(ye,T({modelValue:s.value,"onUpdate:modelValue":c=>s.value=c,activator:"parent",contentClass:"v-select__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[a&&t(he,{ref:V,selected:F.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:c=>c.preventDefault(),onFocusout:O},{default:()=>{var c;return[!B.value.length&&!e.hideNoData&&((c=(f=n["no-data"])==null?void 0:f.call(n))!=null?c:t(M,{title:k(e.noDataText)},null)),(I=n["prepend-item"])==null?void 0:I.call(n),B.value.map((v,b)=>{if(n.item){var A;return(A=n.item)==null?void 0:A.call(n,{item:v,index:b,props:T(v.props,{onClick:()=>m(v)})})}return t(M,T({key:b},v.props,{onClick:()=>m(v)}),{prepend:E=>{let{isSelected:ae}=E;return e.multiple&&!e.hideSelected?t(ee,{modelValue:ae,ripple:!1},null):void 0}})}),(D=n["append-item"])==null?void 0:D.call(n)]}})]}),S.value.map((c,v)=>{function b(E){E.stopPropagation(),E.preventDefault(),m(c)}d(b,"onChipClose");const A={"onClick:close":b,modelValue:!0,"onUpdate:modelValue":void 0};return t("div",{key:c.value,class:"v-select__selection"},[l?t(_,{defaults:{VChip:{closable:e.closableChips,size:"small",text:c.title}}},{default:()=>[n.chip?n.chip({item:c,index:v,props:A}):t(Xe,A,null)]}):n.selection?n.selection({item:c,index:v}):t("span",{class:"v-select__selection-text"},[c.title,e.multiple&&v<S.value.length-1&&t("span",{class:"v-select__selection-comma"},[se(",")])])])})])}})}),de({menu:s,select:m},o)}});export{ee as V,Je as a,Xe as b,bl as c,xl as d,Il as f,qe as m};
//# sourceMappingURL=VSelect.97b26969.js.map