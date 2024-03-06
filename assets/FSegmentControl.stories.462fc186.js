var p=Object.defineProperty;var r=(t,e)=>p(t,"name",{value:e,configurable:!0});import{D as c,b as u,a as l,m as g,R as f,u as d,r as C}from"./vue.esm-bundler.80cafc0b.js";import{z as F}from"./color.7ba4ffe3.js";import{F as s}from"./FButton.5e8d1e13.js";import{e as S}from"./VBtn.ce544012.js";import"./helpers.32675158.js";import"./border.b14058ef.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./rounded.b42653ce.js";import"./VIcon.ac9f05d6.js";import"./variant.1e842247.js";import"./proxiedModel.dbd4de1d.js";import"./router.9241c2dd.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./locale.68d0262d.js";import"./anchor.5ba72fdd.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";import"./VProgressCircular.fec55325.js";function y(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!f(t)}r(y,"_isSlot");const a=c({name:"FSegmentControl",props:{grow:Boolean,bgColor:{type:String,default:"greyscale_6"},items:{type:Array,default:()=>[]}},setup(t){const{colorClasses:e,colorStyles:o}=F(u(()=>({background:d(t.bgColor)}))),i={color:"greyscale_1",mandatory:!0};return()=>{let n;return l(S,g({class:["f-segment-control",e.value,{"f-segment-control--grow":t.grow}],style:[o.value]},i),y(n=t.items.map(m=>l(s,m,{default:()=>[m.text]})))?n:{default:()=>[n]})}}}),G={parameters:{storySource:{source:`import { ref } from "vue";
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
`,locationsMap:{default:{startLoc:{col:50,line:11},endLoc:{col:2,line:28},startBody:{col:50,line:11},endBody:{col:2,line:28}}}}},title:"Components/FSegmentControl",component:a},v=r(t=>({components:{FSegmentControl:a,FButton:s},setup(){const e=[{value:"week",text:"Week"},{value:"month",text:"Month"},{value:"year",text:"Year"}],o=C("month");return{args:t,items:e,current:o}},template:`
    <FSegmentControl v-model="current" :items="items" v-bind="args">
    </FSegmentControl>
    <div>{{current}}</div>
  `}),"Template"),b=v.bind({});b.args={grow:!1};const H=["Default"];export{b as Default,H as __namedExportsOrder,G as default};
//# sourceMappingURL=FSegmentControl.stories.462fc186.js.map
