var i=Object.defineProperty;var r=(t,e)=>i(t,"name",{value:e,configurable:!0});import{F as a,a as m}from"./assets.4a8cf356.js";import{r as s}from"./vue.esm-bundler.b09b7c5a.js";import{c as p}from"./helpers.c6c91249.js";import"./FModal.cc1ac870.js";import"./FButton.7621db81.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./VIcon.bd07cc2b.js";import"./variant.fbd007cc.js";import"./proxiedModel.28fe5444.js";import"./index.eca3ba9a.js";import"./router.b8d53e34.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./locale.88650f04.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./position.faf59b49.js";import"./VProgressCircular.7bee339a.js";import"./VDialog.ac2f44e1.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.7cd76152.js";import"./easing.36b781ab.js";import"./transition.d2bea911.js";import"./display.c2299c89.js";import"./createSimpleFunctional.6499d319.js";import"./VAvatar.95d7d85f.js";import"./VImg.11b5f250.js";import"./index.8137a4d7.js";import"./FListItem.c2eb778d.js";import"./VListItem.f3bec281.js";import"./FAssetLogo.0e70c9a8.js";import"./VLazy.ed808b3a.js";import"./VList.34423262.js";import"./index.5cf6a3e8.js";import"./VDivider.810676cd.js";import"./FAssetSelectField.6f827bc0.js";import"./FSearchInput.c8b3fa61.js";import"./FInput.239100f8.js";import"./number.d5e09512.js";import"./VTextField.a51746b8.js";import"./VCounter.0660ffdc.js";import"./VInput.d8777c43.js";import"./VMessages.d6b13295.js";const it={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";
import assets from "../../data/assets.json";
import { convertMixinAsset } from "../../utils";

export default {
  title: "Components/FAssetSelect",
  component: FAssetSelect,
} as Meta<typeof FAssetSelect>;

const Template: StoryFn<typeof FAssetSelect> = (args) => ({
  components: { FAssetSelect },
  setup() {
    const dialog = ref(false);
    const asset = ref(null);

    return {
      args,
      dialog,
      asset,
      assets: assets.map((asset) => convertMixinAsset(asset)),
    };
  },
  template: \`
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets" v-bind="args"></FAssetSelect>
  \`,
});

export const Default = Template.bind({});

Default.args = {
  showName: false,
  desktop: "menu",
  maxWidth: 400,
};

const Template2: StoryFn<typeof FAssetSelect> = (args) => ({
  components: { FAssetSelect },
  setup() {
    const dialog = ref(false);
    const asset = ref(null);

    return {
      args,
      dialog,
      asset,
      assets: assets.map((asset) => convertMixinAsset(asset)),
    };
  },
  template: \`
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets" v-bind="args">
      <template #activator="{ props }">
        <FButton v-bind="props" color="primary">Select</FButton>
      </template>
    </FAssetSelect>
  \`,
});

export const Slots = Template2.bind({});
`,locationsMap:{default:{startLoc:{col:47,line:12},endLoc:{col:2,line:28},startBody:{col:47,line:12},endBody:{col:2,line:28}},slots:{startLoc:{col:48,line:38},endLoc:{col:2,line:58},startBody:{col:48,line:38},endBody:{col:2,line:58}}}}},title:"Components/FAssetSelect",component:a},l=r(t=>({components:{FAssetSelect:a},setup(){const e=s(!1),o=s(null);return{args:t,dialog:e,asset:o,assets:m.map(n=>p(n))}},template:`
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets" v-bind="args"></FAssetSelect>
  `}),"Template"),c=l.bind({});c.args={showName:!1,desktop:"menu",maxWidth:400};const d=r(t=>({components:{FAssetSelect:a},setup(){const e=s(!1),o=s(null);return{args:t,dialog:e,asset:o,assets:m.map(n=>p(n))}},template:`
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets" v-bind="args">
      <template #activator="{ props }">
        <FButton v-bind="props" color="primary">Select</FButton>
      </template>
    </FAssetSelect>
  `}),"Template2"),lt=d.bind({}),ct=["Default","Slots"];export{c as Default,lt as Slots,ct as __namedExportsOrder,it as default};
//# sourceMappingURL=FAssetSelect.stories.24d7930d.js.map
