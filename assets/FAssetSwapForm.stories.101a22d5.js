var l=Object.defineProperty;var p=(o,t)=>l(o,"name",{value:t,configurable:!0});import{A,a as e,e as c,r}from"./vue.esm-bundler.1ba604f9.js";import{F as d}from"./FButton.da03e124.js";import{V as F}from"./loader.c9437e89.js";import{V as f}from"./VForm.70dc7f85.js";import{V as g}from"./VIcon.518cdeb6.js";import{F as w}from"./FAssetAmountInput.f974b11c.js";import{F as I}from"./FAssetInputTools.61dcf04e.js";import{a as v,c as S}from"./assets.e4531b9f.js";import"./VBtn.156ed533.js";import"./proxiedModel.23143766.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./border.c2063388.js";import"./density.8ac56fa2.js";import"./elevation.7428fb70.js";import"./rounded.cb32523b.js";import"./color.b891a321.js";import"./variant.22bbbe86.js";import"./index.27517d48.js";import"./dimensions.721a2e0b.js";import"./location.f6b6fb7b.js";import"./locale.fb27b96c.js";import"./anchor.1637b665.js";import"./position.747eb4b6.js";import"./router.ba883828.js";import"./VProgressCircular.6a9473f8.js";import"./VInput.857b8225.js";import"./VMessages.11ef5b61.js";import"./index.a7472254.js";import"./transition.ef0cc300.js";import"./forwardRefs.c003b6b8.js";import"./FInput.9dd39b60.js";import"./number.ea2b3954.js";import"./VTextField.44316fe6.js";import"./VCounter.5f12ac31.js";import"./easing.36b781ab.js";import"./index.c125b6ad.js";import"./FAssetSelectField.b9914cfa.js";import"./FAssetLogo.f27a6fba.js";import"./VImg.2750fab4.js";import"./VSpacer.41a02cf9.js";import"./createSimpleFunctional.b271bf7a.js";import"./FModal.3e0c2496.js";import"./VDialog.0f487f73.js";import"./VOverlay.16609424.js";import"./display.de7ed398.js";import"./VAvatar.d7e1c088.js";import"./FListItem.bc4f8297.js";import"./VListItem.d10786fb.js";import"./VLazy.87923590.js";import"./VList.7218b974.js";import"./VDivider.7223c023.js";import"./FSearchInput.66fa1d18.js";const i=A({name:"FAssetSwapForm",props:{loading:Boolean},emits:{switch:()=>!0},setup(o,{slots:t,emit:a}){return()=>e(f,{class:"f-asset-swap-form"},{default:()=>{var s,n;return[(s=t.input)==null?void 0:s.call(t),e("div",{class:"f-asset-swap-form__divider"},[e(d,{icon:!0,size:"32",class:"f-asset-swap-form__swap",onClick:()=>a("switch")},{default:()=>[e(g,null,{default:()=>[c("$swap")]})]})]),(n=t.output)==null?void 0:n.call(t),o.loading&&e(F,{color:"primary",height:2,indeterminate:!0},null)]}})}}),Tt={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FAssetSwapForm.stories.101a22d5.js.map
