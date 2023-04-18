var l=Object.defineProperty;var p=(o,t)=>l(o,"name",{value:t,configurable:!0});import{A as c,a as e,e as A,r}from"./vue.esm-bundler.9500adb2.js";import{F as d}from"./FButton.d61383cc.js";import{V as f}from"./loader.4d40f77d.js";import{V as F}from"./VForm.34f916b2.js";import{V as g}from"./VIcon.b10ecbaa.js";import{F as w}from"./FAssetAmountInput.cd126122.js";import{F as I}from"./FAssetInputTools.3327d484.js";import{a as v}from"./assets.dfe25f8f.js";import{c as S}from"./helpers.96e9126c.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./color.45246ddd.js";import"./variant.95637a5a.js";import"./proxiedModel.881d858e.js";import"./index.1967ded9.js";import"./dimensions.5f5b1dd8.js";import"./location.c535e823.js";import"./locale.7efc9def.js";import"./anchor.1afb8064.js";import"./position.427d9f74.js";import"./router.6e1740fe.js";import"./VProgressCircular.8b82923d.js";import"./intersectionObserver.10253e57.js";import"./VInput.33e34f4e.js";import"./VMessages.a0bdae17.js";import"./index.c2993bc7.js";import"./transition.10caf698.js";import"./forwardRefs.c003b6b8.js";import"./FInput.1db1a978.js";import"./number.d5e09512.js";import"./VTextField.73cde862.js";import"./VCounter.a1a93cec.js";import"./easing.36b781ab.js";import"./index.91748bc9.js";import"./FAssetSelectField.5d742c74.js";import"./FAssetLogo.27fc628c.js";import"./VImg.6757be35.js";import"./VSpacer.0edf83e3.js";import"./createSimpleFunctional.0b08b174.js";import"./FModal.7ce358cf.js";import"./VDialog.38dab5f5.js";import"./VOverlay.96b5c4e3.js";import"./display.9827c8ac.js";import"./VAvatar.9487a2f3.js";import"./FListItem.7cf292ab.js";import"./VListItem.492edb65.js";import"./VLazy.d4a61acd.js";import"./VList.408dac73.js";import"./VDivider.4dfba538.js";import"./FSearchInput.57fdcded.js";const i=c({name:"FAssetSwapForm",props:{loading:Boolean},emits:{switch:()=>!0},setup(o,{slots:t,emit:a}){return()=>e(F,{class:"f-asset-swap-form"},{default:()=>{var s,n;return[(s=t.input)==null?void 0:s.call(t),e("div",{class:"f-asset-swap-form__divider"},[e(d,{icon:!0,size:"32",class:"f-asset-swap-form__swap",onClick:()=>a("switch")},{default:()=>[e(g,{size:"18"},{default:()=>[A("$swap")]})]})]),(n=t.output)==null?void 0:n.call(t),o.loading&&e(f,{color:"primary",height:2,indeterminate:!0},null)]}})}}),ht={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FAssetSwapForm.stories.11b41b5c.js.map
