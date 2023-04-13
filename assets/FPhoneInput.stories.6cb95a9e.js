var y=Object.defineProperty;var l=(e,o)=>y(e,"name",{value:o,configurable:!0});import{r as c,o as F,b as v,z as u,a as n,e as m,U as h,m as g}from"./vue.esm-bundler.3b29098a.js";import{F as I}from"./FInput.3756ea4b.js";import{F as C}from"./FListItem.b41d1377.js";import{F as S}from"./FModal.4db458cf.js";import{F as _}from"./FSearchInput.0d05f75d.js";import{a as b}from"./index.a7b47d1a.js";import{a as P}from"./locale.eccdb440.js";import{V as d}from"./VIcon.c254d683.js";import{V}from"./VList.ce24c533.js";import{V as x}from"./VLazy.ef579524.js";import"./number.ea2b3954.js";import"./VTextField.4378b041.js";import"./VCounter.66bfd87a.js";import"./index.f8ee2712.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./VInput.f50d7073.js";import"./color.fef4ce02.js";import"./density.6dd2b9c7.js";import"./proxiedModel.67252d17.js";import"./VMessages.ff964b60.js";import"./transition.94342caf.js";import"./loader.5b0d5ca4.js";import"./rounded.375414e4.js";import"./location.3a6dce64.js";import"./anchor.c52c8661.js";import"./intersectionObserver.b06f0fb9.js";import"./easing.36b781ab.js";import"./index.1414bb4a.js";import"./forwardRefs.c003b6b8.js";import"./VListItem.aa6733a2.js";import"./createSimpleFunctional.b1ebbe28.js";import"./index.09e65b91.js";import"./variant.be65e42d.js";import"./border.d0444c35.js";import"./dimensions.c2f0e23c.js";import"./elevation.154beddf.js";import"./router.6cb3b155.js";import"./VAvatar.ab09abd9.js";import"./VImg.78cc729b.js";import"./FButton.72dd92af.js";import"./VBtn.7f6a0830.js";import"./position.6cc3b816.js";import"./VProgressCircular.c527f932.js";import"./VDialog.8fdf9bea.js";import"./VOverlay.e2cb60a6.js";import"./display.f5b0b65d.js";import"./iframe.362712bd.js";import"./VDivider.cb2315f4.js";function L(e){const o=c([]);F(async()=>{const a=(await b.get("https://static.fox.one/assets/country-code.json")).data;o.value=Object.keys(a).map(p=>({name:a[p].name,code:String(a[p].dialCode)+""}))});const s=v(()=>o.value.filter(r=>{const a=String(r.name).toLowerCase(),p=String(r.code).toLowerCase();return a.startsWith(e.value)||p.startsWith(e.value)}));return{countries:o,filtered:s}}l(L,"useCountries");function j(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!h(e)}l(j,"_isSlot");const k=u({name:"FCountryCodeSelect",props:{dialog:{type:Boolean,default:!1},code:{type:String,default:""}},emits:{"update:code":e=>!0,"update:dialog":e=>!0},setup(e,{emit:o}){const{t:s}=P(),r=c(""),{filtered:a}=L(r),p=l(t=>{o("update:code",t),o("update:dialog",!1)},"handleSelect");return()=>n(S,{title:s("$vuetify.uikit.select_phone_code"),modelValue:e.dialog,"onUpdate:modelValue":t=>o("update:dialog",t)},{activator:({props:{onClick:t}})=>n("div",{class:"f-country-code-select__field",onClick:t},[e.code?n("span",{class:"f-country-code-select__code"},[e.code||"code"]):n(d,null,{default:()=>[m("$help")]}),n(d,{size:"16"},{default:()=>[m("$expand")]})]),default:()=>{let t;return n("div",{class:"f-country-code-select"},[n("div",{class:"f-country-code-select__search"},[n(_,{modelValue:r.value,"onUpdate:modelValue":i=>r.value=i},null)]),n(V,{class:"f-country-code-select__list"},j(t=a.value.map(i=>n(x,{minHeight:48},{default:()=>[n(C,{title:i.code+" "+i.name,value:i.code,onClick:()=>p(i.code)},null)]})))?t:{default:()=>[t]})])}})}}),f=u({name:"FPhoneInput",props:{code:{type:String,default:""}},emits:{"update:code":e=>!0},setup(e,{slots:o,emit:s}){const r=c(!1),a={type:"number"},p=l(t=>{["e","+","-","."].includes(t.key)&&t.preventDefault()},"handleKeydown");return()=>n(I,g(a,{onKeydown:p}),{...o,"prepend-inner":()=>n(k,{dialog:r.value,"onUpdate:dialog":t=>r.value=t,code:e.code,"onUpdate:code":t=>s("update:code",t)},null)})}}),je={parameters:{storySource:{source:`import { FPhoneInput } from "./FPhoneInput";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "Components/FPhoneInput",
  component: FPhoneInput,
} as Meta<typeof FPhoneInput>;

const Template: StoryFn<typeof FPhoneInput> = (args) => ({
  components: { FPhoneInput },
  setup() {
    const code = ref("86");
    const number = ref("");

    return { args, code, number };
  },
  template: \`<FPhoneInput v-model:code="code" v-model="number" />\`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:46,line:10},endLoc:{col:2,line:19},startBody:{col:46,line:10},endBody:{col:2,line:19}}}}},title:"Components/FPhoneInput",component:f},w=l(e=>({components:{FPhoneInput:f},setup(){const o=c("86"),s=c("");return{args:e,code:o,number:s}},template:'<FPhoneInput v-model:code="code" v-model="number" />'}),"Template"),D=w.bind({});D.args={};const ke=["Default"];export{D as Default,ke as __namedExportsOrder,je as default};
//# sourceMappingURL=FPhoneInput.stories.6cb95a9e.js.map