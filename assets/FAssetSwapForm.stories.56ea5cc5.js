var l=Object.defineProperty;var p=(o,t)=>l(o,"name",{value:t,configurable:!0});import{A,a as e,e as c,r}from"./vue.esm-bundler.60beb779.js";import{F as d}from"./FButton.7fb5afc5.js";import{V as F}from"./loader.3ab44f13.js";import{V as f}from"./VForm.e274806a.js";import{V as g}from"./VIcon.ccd22ecd.js";import{F as w}from"./FAssetAmountInput.1ce83b7a.js";import{F as I}from"./FAssetInputTools.865e7954.js";import{a as v,c as S}from"./assets.e02cf137.js";import"./VBtn.76288723.js";import"./border.84bdbe82.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./density.3ab93966.js";import"./elevation.6146b715.js";import"./rounded.08843391.js";import"./color.7f161142.js";import"./variant.f60f637f.js";import"./proxiedModel.c4bc26c4.js";import"./index.d3586bd0.js";import"./dimensions.71f8bcb1.js";import"./location.3f71a5c2.js";import"./locale.656e3084.js";import"./anchor.46190ad2.js";import"./position.31a6f1c1.js";import"./router.9cc51735.js";import"./VProgressCircular.1a876490.js";import"./VInput.9d434e05.js";import"./VMessages.e9237a13.js";import"./index.2f1043ab.js";import"./transition.d5d90e7e.js";import"./forwardRefs.c003b6b8.js";import"./FInput.47c266c5.js";import"./number.ea2b3954.js";import"./VTextField.8e117680.js";import"./VCounter.602ed76e.js";import"./easing.36b781ab.js";import"./index.41c719a2.js";import"./FAssetSelectField.d9190ffa.js";import"./FAssetLogo.a76723bd.js";import"./VImg.79a3bf78.js";import"./VSpacer.15b61edb.js";import"./createSimpleFunctional.057254cd.js";import"./FModal.e9ae3117.js";import"./VDialog.74ee3f5c.js";import"./VOverlay.6564e1f3.js";import"./display.49866675.js";import"./VAvatar.709f16cb.js";import"./FListItem.69cc58eb.js";import"./VListItem.e48c8813.js";import"./VLazy.dfd7813b.js";import"./VList.3d3d7549.js";import"./VDivider.7d468152.js";import"./FSearchInput.a6aa5690.js";const i=A({name:"FAssetSwapForm",props:{loading:Boolean},emits:{switch:()=>!0},setup(o,{slots:t,emit:a}){return()=>e(f,{class:"f-asset-swap-form"},{default:()=>{var s,n;return[(s=t.input)==null?void 0:s.call(t),e("div",{class:"f-asset-swap-form__divider"},[e(d,{icon:!0,size:"32",class:"f-asset-swap-form__swap",onClick:()=>a("switch")},{default:()=>[e(g,null,{default:()=>[c("$swap")]})]})]),(n=t.output)==null?void 0:n.call(t),o.loading&&e(F,{color:"primary",height:2,indeterminate:!0},null)]}})}}),Tt={parameters:{storySource:{source:`import { ref } from "vue";
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
`,locationsMap:{default:{startLoc:{col:49,line:14},endLoc:{col:2,line:50},startBody:{col:49,line:14},endBody:{col:2,line:50}},"with-error":{startLoc:{col:49,line:14},endLoc:{col:2,line:50},startBody:{col:49,line:14},endBody:{col:2,line:50}},loading:{startLoc:{col:49,line:14},endLoc:{col:2,line:50},startBody:{col:49,line:14},endBody:{col:2,line:50}}}}},title:"Components/FAssetSwapForm",component:i},m=p(o=>({components:{FAssetSwapForm:i,FAssetAmountInput:w,FAssetInputTools:I},setup(){const t=r(""),a=r(""),s=r(null),n=r(null);return{args:o,inputAmount:t,outputAmount:a,inputAsset:s,outputAsset:n,assets:v.map(u=>S(u))}},template:`
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
//# sourceMappingURL=FAssetSwapForm.stories.56ea5cc5.js.map
