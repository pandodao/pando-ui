var l=Object.defineProperty;var p=(o,t)=>l(o,"name",{value:t,configurable:!0});import{D as c,a as e,e as A,r}from"./vue.esm-bundler.80cafc0b.js";import{F as d}from"./FButton.5e8d1e13.js";import{V as f}from"./VProgressLinear.23574e13.js";import{V as F}from"./VForm.a180a23c.js";import{V as g}from"./VIcon.ac9f05d6.js";import{F as w}from"./FAssetAmountInput.d2fcb959.js";import{F as I}from"./FAssetInputTools.81431802.js";import{a as v}from"./assets.52e2b338.js";import{c as S}from"./helpers.c6c91249.js";import"./VBtn.ce544012.js";import"./border.b14058ef.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./rounded.b42653ce.js";import"./variant.1e842247.js";import"./proxiedModel.dbd4de1d.js";import"./router.9241c2dd.js";import"./loader.5e66d0fd.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";import"./VProgressCircular.fec55325.js";import"./intersectionObserver.addd26f6.js";import"./locale.68d0262d.js";import"./anchor.5ba72fdd.js";import"./VInput.44c51e7f.js";import"./VMessages.8e887dfb.js";import"./index.b676db0f.js";import"./transition.b6a16e6c.js";import"./forwardRefs.34034356.js";import"./FInput.ee50ce76.js";import"./bignumber.8dc24abd.js";import"./VTextField.be2090fb.js";import"./VField.59d98d58.js";import"./easing.da2e9236.js";import"./index.f2b6c1e4.js";import"./FAssetSelectField.826cea61.js";import"./FAssetLogo.b5a60381.js";import"./VSpacer.beb84ecc.js";import"./createSimpleFunctional.19425ddc.js";import"./FModal.ac7dde43.js";import"./VCard.a6ed511f.js";import"./VOverlay.a7e28035.js";import"./display.1ed39e23.js";import"./VAvatar.7760fc0a.js";import"./VImg.78b97665.js";import"./FListItem.b2ca06e9.js";import"./VListItem.da04c970.js";import"./VLazy.d1caeda2.js";import"./VList.c8ed43d6.js";import"./ssrBoot.e8acd638.js";import"./VDivider.7c8b3fdb.js";import"./FSearchInput.d7e59333.js";const i=c({name:"FAssetSwapForm",props:{loading:Boolean},emits:{switch:()=>!0},setup(o,{slots:t,emit:a}){return()=>e(F,{class:"f-asset-swap-form"},{default:()=>{var s,n;return[(s=t.input)==null?void 0:s.call(t),e("div",{class:"f-asset-swap-form__divider"},[e(d,{icon:!0,size:"32",class:"f-asset-swap-form__swap",onClick:()=>a("switch")},{default:()=>[e(g,{size:"18"},{default:()=>[A("$swap")]})]})]),(n=t.output)==null?void 0:n.call(t),o.loading&&e(f,{color:"primary",height:2,indeterminate:!0},null)]}})}}),ht={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FAssetSwapForm.stories.8efc5760.js.map
