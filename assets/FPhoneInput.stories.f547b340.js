var y=Object.defineProperty;var i=(e,o)=>y(e,"name",{value:o,configurable:!0});import{r as c,o as F,b as v,A as u,a as n,e as d,U as h,m as g}from"./vue.esm-bundler.b09b7c5a.js";import{F as I}from"./FInput.22dd0ba0.js";import{F as C}from"./FListItem.c2eb778d.js";import{F as S}from"./FModal.5405affb.js";import{F as _}from"./FSearchInput.29b01738.js";import{a as b}from"./index.fa490cba.js";import{a as P}from"./locale.88650f04.js";import{V as m}from"./VIcon.bd07cc2b.js";import{V}from"./VList.34423262.js";import{V as x}from"./VLazy.ed808b3a.js";import"./bignumber.8dc24abd.js";import"./VTextField.a51746b8.js";import"./VCounter.0660ffdc.js";import"./index.5cf6a3e8.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./VInput.d8777c43.js";import"./density.6083b2d4.js";import"./proxiedModel.28fe5444.js";import"./VMessages.d6b13295.js";import"./transition.d2bea911.js";import"./loader.a0162f6e.js";import"./rounded.28975b1c.js";import"./location.b7cdffb8.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./easing.36b781ab.js";import"./index.8137a4d7.js";import"./forwardRefs.c003b6b8.js";import"./VListItem.f3bec281.js";import"./createSimpleFunctional.6499d319.js";import"./index.eca3ba9a.js";import"./variant.fbd007cc.js";import"./border.6019dc9f.js";import"./router.b8d53e34.js";import"./elevation.12d4edaf.js";import"./VAvatar.95d7d85f.js";import"./VImg.11b5f250.js";import"./FButton.7621db81.js";import"./VBtn.7921a3d1.js";import"./position.faf59b49.js";import"./VProgressCircular.7bee339a.js";import"./VDialog.ac2f44e1.js";import"./VOverlay.7cd76152.js";import"./display.c2299c89.js";import"./iframe.1eef93ff.js";import"./VDivider.810676cd.js";function L(e){const o=c([]);F(async()=>{const a=(await b.get("https://static.fox.one/assets/country-code.json")).data;o.value=Object.keys(a).map(p=>({name:a[p].name,code:String(a[p].dialCode)+""}))});const s=v(()=>o.value.filter(r=>{const a=String(r.name).toLowerCase(),p=String(r.code).toLowerCase();return a.startsWith(e.value)||p.startsWith(e.value)}));return{countries:o,filtered:s}}i(L,"useCountries");function j(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!h(e)}i(j,"_isSlot");const k=u({name:"FCountryCodeSelect",props:{dialog:{type:Boolean,default:!1},code:{type:String,default:""}},emits:{"update:code":e=>!0,"update:dialog":e=>!0},setup(e,{emit:o}){const{t:s}=P(),r=c(""),{filtered:a}=L(r),p=i(t=>{o("update:code",t),o("update:dialog",!1)},"handleSelect");return()=>n(S,{title:s("$vuetify.uikit.select_phone_code"),modelValue:e.dialog,"onUpdate:modelValue":t=>o("update:dialog",t)},{activator:({props:{onClick:t}})=>n("div",{class:"f-country-code-select__field",onClick:t},[e.code?n("span",{class:"f-country-code-select__code"},[e.code||"code"]):n(m,null,{default:()=>[d("$help")]}),n(m,{size:"16"},{default:()=>[d("$expand")]})]),default:()=>{let t;return n("div",{class:"f-country-code-select"},[n("div",{class:"f-country-code-select__search"},[n(_,{modelValue:r.value,"onUpdate:modelValue":l=>r.value=l},null)]),n(V,{class:"f-country-code-select__list"},j(t=a.value.map(l=>n(x,{minHeight:48},{default:()=>[n(C,{title:l.code+" "+l.name,value:l.code,onClick:()=>p(l.code)},null)]})))?t:{default:()=>[t]})])}})}}),f=u({name:"FPhoneInput",props:{code:{type:String,default:""}},emits:{"update:code":e=>!0},setup(e,{slots:o,emit:s}){const r=c(!1),a={type:"number"},p=i(t=>{["e","+","-","."].includes(t.key)&&t.preventDefault()},"handleKeydown");return()=>n(I,g(a,{onKeydown:p}),{...o,"prepend-inner":()=>n(k,{dialog:r.value,"onUpdate:dialog":t=>r.value=t,code:e.code,"onUpdate:code":t=>s("update:code",t)},null)})}}),xe={parameters:{storySource:{source:`import { FPhoneInput } from "./FPhoneInput";
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
`,locationsMap:{default:{startLoc:{col:46,line:10},endLoc:{col:2,line:19},startBody:{col:46,line:10},endBody:{col:2,line:19}}}}},title:"Components/FPhoneInput",component:f},w=i(e=>({components:{FPhoneInput:f},setup(){const o=c("86"),s=c("");return{args:e,code:o,number:s}},template:'<FPhoneInput v-model:code="code" v-model="number" />'}),"Template"),D=w.bind({});D.args={};const Le=["Default"];export{D as Default,Le as __namedExportsOrder,xe as default};
//# sourceMappingURL=FPhoneInput.stories.f547b340.js.map
