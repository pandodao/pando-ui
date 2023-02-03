var c=Object.defineProperty;var t=(n,o)=>c(n,"name",{value:o,configurable:!0});import{A as i,a as e,m as d,r as m}from"./vue.esm-bundler.330b8bcd.js";import{V as u}from"./VProgressCircular.27e195cb.js";import{V as g}from"./VOverlay.d681ab18.js";import{F as l}from"./FButton.d034f6f2.js";import"./VIcon.c758310f.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./color.66c7a00f.js";import"./loader.c202c022.js";import"./rounded.257cff90.js";import"./location.2cb2469d.js";import"./locale.0eda84ca.js";import"./proxiedModel.815b9064.js";import"./anchor.7cdf4a4d.js";import"./dimensions.6590eaa4.js";import"./easing.36b781ab.js";import"./transition.d91c432b.js";import"./router.a6c113d7.js";import"./display.b3319b10.js";import"./VBtn.e55e9e37.js";import"./border.8a30a617.js";import"./density.38f0f124.js";import"./elevation.b2f27a68.js";import"./variant.b259332f.js";import"./index.b967f916.js";import"./position.03fcbfb6.js";const s=i({name:"FLoading",props:{text:String,processProps:{type:Object,default:()=>({})}},setup(n,{slots:o}){return()=>{var r,a;return e("div",{class:"f-loading__content"},[e(u,d({width:3,indeterminate:!0},n.processProps),null),e("span",{class:"f-loading__text"},[(a=(r=o.text)==null?void 0:r.call(o))!=null?a:n.text])])}}}),F=i({name:"FFullscreenLoading",setup(n,{attrs:o}){return()=>e(g,{persistent:!0,class:"f-fullscreen-loading"},{default:()=>[e(s,o,null)]})}}),K={parameters:{storySource:{source:`import { ref } from "vue";
import { FLoading } from "./FLoading";
import { FFullscreenLoading } from "./FFullscreenLoading";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FLoading",
  component: FLoading,
} as Meta<typeof FLoading>;

const Template: StoryFn<typeof FLoading> = (args) => ({
  components: { FLoading, FButton },
  setup() {
    return { args };
  },
  template: \`
    <div style="padding: 60px;">
      <FLoading v-bind="args" />
    </div>
  \`,
});

export const Default = Template.bind({});
Default.args = { text: "Please Wait" };

export const ProcessProps = Template.bind({});
ProcessProps.args = {
  text: "loading",
  processProps: { size: 40, color: "success" },
};

const Template2: StoryFn<typeof FLoading> = (args) => ({
  components: { FFullscreenLoading, FButton },
  setup() {
    const loading = ref(false);
    const show = () => {
      loading.value = true;

      setTimeout(() => (loading.value = false), 3000);
    };

    return { args, loading, show };
  },
  template: \`
    <div>
      <FFullscreenLoading v-model="loading" v-bind="args" />

      <FButton color="primary" @click="show">Show</FButton>
    </div>
  \`,
});

export const Fullscreen = Template2.bind({});
Fullscreen.args = {
  text: "Please wait",
};
`,locationsMap:{default:{startLoc:{col:43,line:12},endLoc:{col:2,line:22},startBody:{col:43,line:12},endBody:{col:2,line:22}},"process-props":{startLoc:{col:43,line:12},endLoc:{col:2,line:22},startBody:{col:43,line:12},endBody:{col:2,line:22}},fullscreen:{startLoc:{col:44,line:33},endLoc:{col:2,line:52},startBody:{col:44,line:33},endBody:{col:2,line:52}}}}},title:"Components/FLoading",component:s},p=t(n=>({components:{FLoading:s,FButton:l},setup(){return{args:n}},template:`
    <div style="padding: 60px;">
      <FLoading v-bind="args" />
    </div>
  `}),"Template"),f=p.bind({});f.args={text:"Please Wait"};const L=p.bind({});L.args={text:"loading",processProps:{size:40,color:"success"}};const v=t(n=>({components:{FFullscreenLoading:F,FButton:l},setup(){const o=m(!1);return{args:n,loading:o,show:t(()=>{o.value=!0,setTimeout(()=>o.value=!1,3e3)},"show")}},template:`
    <div>
      <FFullscreenLoading v-model="loading" v-bind="args" />

      <FButton color="primary" @click="show">Show</FButton>
    </div>
  `}),"Template2"),y=v.bind({});y.args={text:"Please wait"};const Q=["Default","ProcessProps","Fullscreen"];export{f as Default,y as Fullscreen,L as ProcessProps,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=FLoading.stories.63fdc7cc.js.map
