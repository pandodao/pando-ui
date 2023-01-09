var l=Object.defineProperty;var p=(o,t)=>l(o,"name",{value:t,configurable:!0});import{A,a as s,d as c,r}from"./vue.esm-bundler.a5c4e1bf.js";import{F as d}from"./FButton.f3fc7c21.js";import{V as F}from"./loader.7d1fab10.js";import{V as f}from"./VForm.b1ded583.js";import{V as g}from"./VIcon.5ca83e1b.js";import{F as w}from"./FAssetAmountInput.f1130245.js";import{F as I}from"./FAssetInputTools.884eeec7.js";import{a as v,c as S}from"./assets.b0200c3c.js";import"./VBtn.b5444450.js";import"./proxiedModel.9639363f.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./border.0d2c7ad0.js";import"./density.b3e2de9a.js";import"./elevation.52b4704c.js";import"./rounded.a0c73c18.js";import"./color.43314d1d.js";import"./variant.b9606795.js";import"./index.1b40d9d7.js";import"./dimensions.b6fbc401.js";import"./position.d49ff30e.js";import"./locale.76e208ea.js";import"./anchor.e4a88562.js";import"./router.3d9f142b.js";import"./VProgressCircular.ad6cc829.js";import"./VInput.34db0c3a.js";import"./VMessages.90062972.js";import"./index.628b3df7.js";import"./transition.c93b8895.js";import"./forwardRefs.c003b6b8.js";import"./FInput.4a7d7292.js";import"./number.ea2b3954.js";import"./VTextField.cc6d2074.js";import"./VCounter.536d06c5.js";import"./easing.36b781ab.js";import"./index.549b0914.js";import"./FAssetSelectField.2424bebb.js";import"./FAssetLogo.5a526eb7.js";import"./VImg.19441548.js";import"./VSpacer.3c3f34f8.js";import"./createSimpleFunctional.f00f4b71.js";import"./FModal.4fd09b84.js";import"./VDialog.8e3a7441.js";import"./scopeId.782553fc.js";import"./VOverlay.74b7cee1.js";import"./VAvatar.da185431.js";import"./display.1bd9c9dd.js";import"./FListItem.cae78cf5.js";import"./VListItem.c102cb0b.js";import"./VLazy.ecac20e0.js";import"./VList.f6b5b9eb.js";import"./VDivider.c33525c0.js";import"./FSearchInput.81c5249a.js";const i=A({name:"FAssetSwapForm",props:{loading:Boolean},emits:{switch:()=>!0},setup(o,{slots:t,emit:a}){return()=>s(f,{class:"f-asset-swap-form"},{default:()=>{var e,n;return[(e=t.input)==null?void 0:e.call(t),s("div",{class:"f-asset-swap-form__divider"},[s(d,{icon:!0,size:"32",class:"f-asset-swap-form__swap",onClick:()=>a("switch")},{default:()=>[s(g,null,{default:()=>[c("$swap")]})]})]),(n=t.output)==null?void 0:n.call(t),o.loading&&s(F,{color:"primary",height:2,indeterminate:!0},null)]}})}}),Tt={parameters:{storySource:{source:`import { ref } from "vue";
import { FAssetSwapForm } from "./FAssetSwapForm";
import { FAssetAmountInput } from "../FAssetAmountInput";
import { FAssetInputTools } from "../FAssetInputTools";
import { StoryFn, Meta } from "@storybook/vue3";
import assets from "../../data/assets.json";
import { convertMixinAsset } from "../../utils";

export default {
  title: "Components/FAssetSwapForm",
  component: FAssetSwapForm,
} as Meta<typeof FAssetSwapForm>;

const Template: StoryFn<typeof FAssetSwapForm> = (args) => ({
  components: { FAssetSwapForm, FAssetAmountInput, FAssetInputTools },
  setup() {
    const inputAmount = ref("");
    const outputAmount = ref("");
    const inputAsset = ref(null);
    const outputAsset = ref(null);

    return {
      args,
      inputAmount,
      outputAmount,
      inputAsset,
      outputAsset,
      assets: assets.map((asset) => convertMixinAsset(asset)),
    };
  },
  template: \`
    <FAssetSwapForm :loading="args.formLoading">
      <template #input>
        <FAssetAmountInput v-model:asset="inputAsset" v-model:amount="inputAmount" :assets="assets" fullfilled v-bind="args">
          <template #tools>
            <FAssetInputTools :connected="true" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
          </template>
        </FAssetAmountInput>
      </template>

      <template #output>
        <FAssetAmountInput v-model:asset="outputAsset" v-model:amount="outputAmount" :assets="assets" fullfilled v-bind="args">
          <template #tools>
            <FAssetInputTools :connected="true" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
          </template>
        </FAssetAmountInput>
      </template>
    </FAssetSwapForm>
  \`,
});

export const Default = Template.bind({});
Default.args = {};

export const WithError = Template.bind({});
WithError.args = {
  hideDefaultMessages: true,
  errorMessages: ["Amount is require"],
};

export const Loading = Template.bind({});
Loading.args = { formLoading: true };
`,locationsMap:{default:{startLoc:{col:49,line:14},endLoc:{col:2,line:50},startBody:{col:49,line:14},endBody:{col:2,line:50}},"with-error":{startLoc:{col:49,line:14},endLoc:{col:2,line:50},startBody:{col:49,line:14},endBody:{col:2,line:50}},loading:{startLoc:{col:49,line:14},endLoc:{col:2,line:50},startBody:{col:49,line:14},endBody:{col:2,line:50}}}}},title:"Components/FAssetSwapForm",component:i},m=p(o=>({components:{FAssetSwapForm:i,FAssetAmountInput:w,FAssetInputTools:I},setup(){const t=r(""),a=r(""),e=r(null),n=r(null);return{args:o,inputAmount:t,outputAmount:a,inputAsset:e,outputAsset:n,assets:v.map(u=>S(u))}},template:`
    <FAssetSwapForm :loading="args.formLoading">
      <template #input>
        <FAssetAmountInput v-model:asset="inputAsset" v-model:amount="inputAmount" :assets="assets" fullfilled v-bind="args">
          <template #tools>
            <FAssetInputTools :connected="true" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
          </template>
        </FAssetAmountInput>
      </template>

      <template #output>
        <FAssetAmountInput v-model:asset="outputAsset" v-model:amount="outputAmount" :assets="assets" fullfilled v-bind="args">
          <template #tools>
            <FAssetInputTools :connected="true" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
          </template>
        </FAssetAmountInput>
      </template>
    </FAssetSwapForm>
  `}),"Template"),b=m.bind({});b.args={};const L=m.bind({});L.args={hideDefaultMessages:!0,errorMessages:["Amount is require"]};const M=m.bind({});M.args={formLoading:!0};const yt=["Default","WithError","Loading"];export{b as Default,M as Loading,L as WithError,yt as __namedExportsOrder,Tt as default};
//# sourceMappingURL=FAssetSwapForm.stories.c798ee2e.js.map
