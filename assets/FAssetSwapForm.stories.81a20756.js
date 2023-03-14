var l=Object.defineProperty;var p=(o,t)=>l(o,"name",{value:t,configurable:!0});import{z as A,a as e,e as c,r}from"./vue.esm-bundler.62cdaeff.js";import{F as d}from"./FButton.7a11c708.js";import{V as F}from"./loader.c48359f5.js";import{V as f}from"./VForm.240bdb45.js";import{V as g}from"./VIcon.ddcbca9b.js";import{F as w}from"./FAssetAmountInput.57ef0a9e.js";import{F as I}from"./FAssetInputTools.d5f2e51c.js";import{a as v,c as S}from"./assets.1372edf9.js";import"./VBtn.2cacbcac.js";import"./border.744ce806.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./density.a1d89e9f.js";import"./elevation.79ced88b.js";import"./rounded.9945cf4e.js";import"./color.5ac0909d.js";import"./variant.cb074882.js";import"./proxiedModel.c2b98033.js";import"./index.f175e2d9.js";import"./dimensions.c27e6138.js";import"./location.8179a009.js";import"./locale.b4680344.js";import"./anchor.4b6c6135.js";import"./position.daea1c07.js";import"./router.19d79a04.js";import"./VProgressCircular.5a613386.js";import"./VInput.7941d77b.js";import"./VMessages.c418de83.js";import"./index.31ee38b0.js";import"./transition.28d05801.js";import"./forwardRefs.c003b6b8.js";import"./FInput.33440f61.js";import"./number.ea2b3954.js";import"./VTextField.74d2a0fa.js";import"./VCounter.8bd4f380.js";import"./easing.36b781ab.js";import"./index.68c608a7.js";import"./FAssetSelectField.75c93540.js";import"./FAssetLogo.dc864486.js";import"./VImg.485a2281.js";import"./VSpacer.c706d964.js";import"./createSimpleFunctional.f6324448.js";import"./FModal.e70a199e.js";import"./VDialog.8aa0eb51.js";import"./VOverlay.49a3aceb.js";import"./display.21f5d2fe.js";import"./VAvatar.8eec326e.js";import"./FListItem.2d41da5b.js";import"./VListItem.ad71f0c6.js";import"./VLazy.8ad79713.js";import"./VList.0fe739a2.js";import"./VDivider.1215dc57.js";import"./FSearchInput.762e7f63.js";const i=A({name:"FAssetSwapForm",props:{loading:Boolean},emits:{switch:()=>!0},setup(o,{slots:t,emit:a}){return()=>e(f,{class:"f-asset-swap-form"},{default:()=>{var s,n;return[(s=t.input)==null?void 0:s.call(t),e("div",{class:"f-asset-swap-form__divider"},[e(d,{icon:!0,size:"32",class:"f-asset-swap-form__swap",onClick:()=>a("switch")},{default:()=>[e(g,null,{default:()=>[c("$swap")]})]})]),(n=t.output)==null?void 0:n.call(t),o.loading&&e(F,{color:"primary",height:2,indeterminate:!0},null)]}})}}),Tt={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FAssetSwapForm.stories.81a20756.js.map
