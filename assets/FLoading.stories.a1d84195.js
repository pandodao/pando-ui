var c=Object.defineProperty;var t=(n,o)=>c(n,"name",{value:o,configurable:!0});import{z as i,a as e,m as d,r as m}from"./vue.esm-bundler.62cdaeff.js";import{V as u}from"./VProgressCircular.5a613386.js";import{V as g}from"./VOverlay.49a3aceb.js";import{F as l}from"./FButton.7a11c708.js";import"./VIcon.ddcbca9b.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./color.5ac0909d.js";import"./loader.c48359f5.js";import"./rounded.9945cf4e.js";import"./location.8179a009.js";import"./locale.b4680344.js";import"./proxiedModel.c2b98033.js";import"./anchor.4b6c6135.js";import"./dimensions.c27e6138.js";import"./easing.36b781ab.js";import"./transition.28d05801.js";import"./router.19d79a04.js";import"./display.21f5d2fe.js";import"./VBtn.2cacbcac.js";import"./border.744ce806.js";import"./density.a1d89e9f.js";import"./elevation.79ced88b.js";import"./variant.cb074882.js";import"./index.f175e2d9.js";import"./position.daea1c07.js";const s=i({name:"FLoading",props:{text:String,processProps:{type:Object,default:()=>({})}},setup(n,{slots:o}){return()=>{var r,a;return e("div",{class:"f-loading__content"},[e(u,d({width:3,indeterminate:!0},n.processProps),null),e("span",{class:"f-loading__text"},[(a=(r=o.text)==null?void 0:r.call(o))!=null?a:n.text])])}}}),F=i({name:"FFullscreenLoading",setup(n,{attrs:o}){return()=>e(g,{persistent:!0,class:"f-fullscreen-loading"},{default:()=>[e(s,o,null)]})}}),K={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FLoading.stories.a1d84195.js.map
