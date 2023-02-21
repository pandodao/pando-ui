var p=Object.defineProperty;var r=(t,e)=>p(t,"name",{value:e,configurable:!0});import{A as u,b as c,a as l,m as g,S as f,u as d,r as S}from"./vue.esm-bundler.60beb779.js";import{k as C}from"./color.7f161142.js";import{F as s}from"./FButton.7fb5afc5.js";import{d as F}from"./VBtn.76288723.js";import"./helpers.f4a4e1c6.js";import"./useRender.06ad421e.js";import"./border.84bdbe82.js";import"./density.3ab93966.js";import"./elevation.6146b715.js";import"./rounded.08843391.js";import"./VIcon.ccd22ecd.js";import"./variant.f60f637f.js";import"./proxiedModel.c4bc26c4.js";import"./index.d3586bd0.js";import"./dimensions.71f8bcb1.js";import"./loader.3ab44f13.js";import"./location.3f71a5c2.js";import"./locale.656e3084.js";import"./anchor.46190ad2.js";import"./position.31a6f1c1.js";import"./router.9cc51735.js";import"./VProgressCircular.1a876490.js";function v(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!f(t)}r(v,"_isSlot");const a=u({name:"FSegmentControl",props:{grow:Boolean,bgColor:{type:String,default:"greyscale_6"},items:{type:Array,default:()=>[]}},setup(t){const{colorClasses:e,colorStyles:o}=C(c(()=>({background:d(t.bgColor)}))),i={color:"greyscale_1",mandatory:!0};return()=>{let n;return l(F,g({class:["f-segment-control",e.value,{"f-segment-control--grow":t.grow}],style:[o.value]},i),v(n=t.items.map(m=>l(s,{value:m.value},{default:()=>[m.text]})))?n:{default:()=>[n]})}}}),H={parameters:{storySource:{source:`import { ref } from "vue";
import { FSegmentControl } from "./FSegmentControl";
import { FButton } from "../FButton";
import { StoryFn, Meta } from "@storybook/vue3";

export default {
  title: "Components/FSegmentControl",
  component: FSegmentControl,
} as Meta<typeof FSegmentControl>;

const Template: StoryFn<typeof FSegmentControl> = (args) => ({
  components: { FSegmentControl, FButton },
  setup() {
    const items = [
      { value: "week", text: "Week" },
      { value: "month", text: "Month" },
      { value: "year", text: "Year" },
    ];
    const current = ref("month");

    return { args, items, current };
  },
  template: \`
    <FSegmentControl v-model="current" :items="items" v-bind="args">
    </FSegmentControl>
    <div>{{current}}</div>
  \`,
});

export const Default = Template.bind({});
Default.args = { grow: false };
`,locationsMap:{default:{startLoc:{col:50,line:11},endLoc:{col:2,line:28},startBody:{col:50,line:11},endBody:{col:2,line:28}}}}},title:"Components/FSegmentControl",component:a},y=r(t=>({components:{FSegmentControl:a,FButton:s},setup(){const e=[{value:"week",text:"Week"},{value:"month",text:"Month"},{value:"year",text:"Year"}],o=S("month");return{args:t,items:e,current:o}},template:`
    <FSegmentControl v-model="current" :items="items" v-bind="args">
    </FSegmentControl>
    <div>{{current}}</div>
  `}),"Template"),b=y.bind({});b.args={grow:!1};const I=["Default"];export{b as Default,I as __namedExportsOrder,H as default};
//# sourceMappingURL=FSegmentControl.stories.a171f27b.js.map
