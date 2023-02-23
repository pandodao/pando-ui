var l=Object.defineProperty;var p=(o,t)=>l(o,"name",{value:t,configurable:!0});import{z as A,a as e,e as c,r}from"./vue.esm-bundler.57aa1454.js";import{F as d}from"./FButton.95509114.js";import{V as F}from"./loader.538ed1c8.js";import{V as f}from"./VForm.de873814.js";import{V as g}from"./VIcon.b7876f5b.js";import{F as w}from"./FAssetAmountInput.4dc41c79.js";import{F as I}from"./FAssetInputTools.1e5c74ce.js";import{a as v,c as S}from"./assets.0a35c71b.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./color.5e70182f.js";import"./variant.58edd759.js";import"./proxiedModel.aff93369.js";import"./index.17c04f25.js";import"./dimensions.2a6ee421.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./router.359f3c68.js";import"./VProgressCircular.ce5720de.js";import"./VInput.a59f36d0.js";import"./VMessages.7f48a74b.js";import"./index.5cb25ca4.js";import"./transition.7787ec60.js";import"./forwardRefs.c003b6b8.js";import"./FInput.be24e9fb.js";import"./number.ea2b3954.js";import"./VTextField.5738fd9a.js";import"./VCounter.03254f21.js";import"./easing.36b781ab.js";import"./index.168f645e.js";import"./FAssetSelectField.905e4907.js";import"./FAssetLogo.a8055510.js";import"./VImg.040b2a14.js";import"./VSpacer.da6438ea.js";import"./createSimpleFunctional.3ee3a08b.js";import"./FModal.b075f7f6.js";import"./VDialog.789dc96e.js";import"./VOverlay.2998aec7.js";import"./display.8ac49ecd.js";import"./VAvatar.01c8c686.js";import"./FListItem.39459486.js";import"./VListItem.f12d2f11.js";import"./VLazy.e8b6f832.js";import"./VList.8d2887de.js";import"./VDivider.186db6a0.js";import"./FSearchInput.de430b11.js";const i=A({name:"FAssetSwapForm",props:{loading:Boolean},emits:{switch:()=>!0},setup(o,{slots:t,emit:a}){return()=>e(f,{class:"f-asset-swap-form"},{default:()=>{var s,n;return[(s=t.input)==null?void 0:s.call(t),e("div",{class:"f-asset-swap-form__divider"},[e(d,{icon:!0,size:"32",class:"f-asset-swap-form__swap",onClick:()=>a("switch")},{default:()=>[e(g,null,{default:()=>[c("$swap")]})]})]),(n=t.output)==null?void 0:n.call(t),o.loading&&e(F,{color:"primary",height:2,indeterminate:!0},null)]}})}}),Tt={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FAssetSwapForm.stories.b1278482.js.map
