var l=Object.defineProperty;var p=(o,t)=>l(o,"name",{value:t,configurable:!0});import{z as c,a as e,e as A,r}from"./vue.esm-bundler.3b29098a.js";import{F as d}from"./FButton.72dd92af.js";import{V as f}from"./loader.5b0d5ca4.js";import{V as F}from"./VForm.31a8e481.js";import{V as g}from"./VIcon.c254d683.js";import{F as w}from"./FAssetAmountInput.cc4b22eb.js";import{F as I}from"./FAssetInputTools.0dfb03e9.js";import{a as v}from"./assets.7e46c282.js";import{c as S}from"./helpers.96e9126c.js";import"./VBtn.7f6a0830.js";import"./border.d0444c35.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./density.6dd2b9c7.js";import"./elevation.154beddf.js";import"./rounded.375414e4.js";import"./color.fef4ce02.js";import"./variant.be65e42d.js";import"./proxiedModel.67252d17.js";import"./index.09e65b91.js";import"./dimensions.c2f0e23c.js";import"./location.3a6dce64.js";import"./locale.eccdb440.js";import"./anchor.c52c8661.js";import"./position.6cc3b816.js";import"./router.6cb3b155.js";import"./VProgressCircular.c527f932.js";import"./intersectionObserver.b06f0fb9.js";import"./VInput.f50d7073.js";import"./VMessages.ff964b60.js";import"./index.f8ee2712.js";import"./transition.94342caf.js";import"./forwardRefs.c003b6b8.js";import"./FInput.3756ea4b.js";import"./number.ea2b3954.js";import"./VTextField.4378b041.js";import"./VCounter.66bfd87a.js";import"./easing.36b781ab.js";import"./index.1414bb4a.js";import"./FAssetSelectField.4516f67f.js";import"./FAssetLogo.9456d591.js";import"./VImg.78cc729b.js";import"./VSpacer.805c8e99.js";import"./createSimpleFunctional.b1ebbe28.js";import"./FModal.4db458cf.js";import"./VDialog.8fdf9bea.js";import"./VOverlay.e2cb60a6.js";import"./display.f5b0b65d.js";import"./VAvatar.ab09abd9.js";import"./FListItem.57780b30.js";import"./VListItem.aa6733a2.js";import"./VLazy.ef579524.js";import"./VList.ce24c533.js";import"./VDivider.cb2315f4.js";import"./FSearchInput.0d05f75d.js";const i=c({name:"FAssetSwapForm",props:{loading:Boolean},emits:{switch:()=>!0},setup(o,{slots:t,emit:a}){return()=>e(F,{class:"f-asset-swap-form"},{default:()=>{var s,n;return[(s=t.input)==null?void 0:s.call(t),e("div",{class:"f-asset-swap-form__divider"},[e(d,{icon:!0,size:"32",class:"f-asset-swap-form__swap",onClick:()=>a("switch")},{default:()=>[e(g,{size:"18"},{default:()=>[A("$swap")]})]})]),(n=t.output)==null?void 0:n.call(t),o.loading&&e(f,{color:"primary",height:2,indeterminate:!0},null)]}})}}),ht={parameters:{storySource:{source:`import { ref } from "vue";
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
            <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
          </template>
        </FAssetAmountInput>
      </template>

      <template #output>
        <FAssetAmountInput v-model:asset="outputAsset" v-model:amount="outputAmount" :assets="assets" fullfilled v-bind="args">
          <template #tools>
            <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
          </template>
        </FAssetAmountInput>
      </template>
    </FAssetSwapForm>
  \`,
});

export const Default = Template.bind({});
Default.args = {
  connected: true,
};

export const WithError = Template.bind({});
WithError.args = {
  hideDefaultMessages: true,
  errorMessages: ["Amount is require"],
};

export const Loading = Template.bind({});
Loading.args = { formLoading: true };
`,locationsMap:{default:{startLoc:{col:49,line:14},endLoc:{col:2,line:50},startBody:{col:49,line:14},endBody:{col:2,line:50}},"with-error":{startLoc:{col:49,line:14},endLoc:{col:2,line:50},startBody:{col:49,line:14},endBody:{col:2,line:50}},loading:{startLoc:{col:49,line:14},endLoc:{col:2,line:50},startBody:{col:49,line:14},endBody:{col:2,line:50}}}}},title:"Components/FAssetSwapForm",component:i},m=p(o=>({components:{FAssetSwapForm:i,FAssetAmountInput:w,FAssetInputTools:I},setup(){const t=r(""),a=r(""),s=r(null),n=r(null);return{args:o,inputAmount:t,outputAmount:a,inputAsset:s,outputAsset:n,assets:v.map(u=>S(u))}},template:`
    <FAssetSwapForm :loading="args.formLoading">
      <template #input>
        <FAssetAmountInput v-model:asset="inputAsset" v-model:amount="inputAmount" :assets="assets" fullfilled v-bind="args">
          <template #tools>
            <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
          </template>
        </FAssetAmountInput>
      </template>

      <template #output>
        <FAssetAmountInput v-model:asset="outputAsset" v-model:amount="outputAmount" :assets="assets" fullfilled v-bind="args">
          <template #tools>
            <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
          </template>
        </FAssetAmountInput>
      </template>
    </FAssetSwapForm>
  `}),"Template"),b=m.bind({});b.args={connected:!0};const L=m.bind({});L.args={hideDefaultMessages:!0,errorMessages:["Amount is require"]};const M=m.bind({});M.args={formLoading:!0};const xt=["Default","WithError","Loading"];export{b as Default,M as Loading,L as WithError,xt as __namedExportsOrder,ht as default};
//# sourceMappingURL=FAssetSwapForm.stories.71166432.js.map
