var c=Object.defineProperty;var t=(n,o)=>c(n,"name",{value:o,configurable:!0});import{A as i,a as e,m as d,r as m}from"./vue.esm-bundler.60beb779.js";import{V as u}from"./VProgressCircular.1a876490.js";import{V as g}from"./VOverlay.6564e1f3.js";import{F as l}from"./FButton.7fb5afc5.js";import"./VIcon.ccd22ecd.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./color.7f161142.js";import"./loader.3ab44f13.js";import"./rounded.08843391.js";import"./location.3f71a5c2.js";import"./locale.656e3084.js";import"./proxiedModel.c4bc26c4.js";import"./anchor.46190ad2.js";import"./dimensions.71f8bcb1.js";import"./easing.36b781ab.js";import"./transition.d5d90e7e.js";import"./router.9cc51735.js";import"./display.49866675.js";import"./VBtn.76288723.js";import"./border.84bdbe82.js";import"./density.3ab93966.js";import"./elevation.6146b715.js";import"./variant.f60f637f.js";import"./index.d3586bd0.js";import"./position.31a6f1c1.js";const s=i({name:"FLoading",props:{text:String,processProps:{type:Object,default:()=>({})}},setup(n,{slots:o}){return()=>{var r,a;return e("div",{class:"f-loading__content"},[e(u,d({width:3,indeterminate:!0},n.processProps),null),e("span",{class:"f-loading__text"},[(a=(r=o.text)==null?void 0:r.call(o))!=null?a:n.text])])}}}),F=i({name:"FFullscreenLoading",setup(n,{attrs:o}){return()=>e(g,{persistent:!0,class:"f-fullscreen-loading"},{default:()=>[e(s,o,null)]})}}),K={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FLoading.stories.c50164be.js.map
