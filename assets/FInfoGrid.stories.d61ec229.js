var f=Object.defineProperty;var a=(n,e)=>f(n,"name",{value:e,configurable:!0});import{z as u,b as d,a as t}from"./vue.esm-bundler.62cdaeff.js";import{F as s}from"./FTooltip.e45060f9.js";import"./VTooltip.71b83f94.js";import"./proxiedModel.c2b98033.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./VOverlay.49a3aceb.js";import"./dimensions.c27e6138.js";import"./easing.36b781ab.js";import"./anchor.4b6c6135.js";import"./color.5ac0909d.js";import"./transition.28d05801.js";import"./router.19d79a04.js";import"./display.21f5d2fe.js";import"./locale.b4680344.js";import"./forwardRefs.c003b6b8.js";const m=u({name:"FInfoGrid",props:{reverse:Boolean,list:Boolean},setup(n,{slots:e}){const o=d(()=>["f-info-grid",{"f-info-grid--reverse":n.reverse,"f-info-grid--list":n.list}]);return()=>{var i;return t("div",{class:o.value},[(i=e.default)==null?void 0:i.call(e)])}}});const v=u({name:"FInfoGridItem",props:{title:String,value:String,hint:String,unit:String},setup(n,{slots:e}){return()=>{var o,i,r,l;return t("div",{class:"f-info-grid-item"},[t("div",{class:"f-info-grid-item__title"},[(i=(o=e.title)==null?void 0:o.call(e))!=null?i:n.title,t(s,{hint:n.hint},null)]),t("div",{class:"f-info-grid-item__value"},[t("span",null,[(l=(r=e.value)==null?void 0:r.call(e))!=null?l:n.value]),t("span",null,[n.unit])])])}}}),M={parameters:{storySource:{source:`import { FInfoGrid } from "./FInfoGrid";
import { FInfoGridItem } from "./FInfoGridItem";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FInfoGrid",
  component: FInfoGrid,
} as Meta<typeof FInfoGrid>;

const Template: StoryFn<typeof FInfoGrid> = (args) => ({
  components: { FInfoGrid, FInfoGridItem },
  setup() {
    const items = [
      {
        title: "ETH Position",
        value: "5.27638999",
        valueUnit: "ETH",
      },
      {
        title: "24h changes",
        value: "+34.41",
        valueUnit: "%",
        valueColor: "green",
      },
      {
        title: "7d changes",
        value: "-1.41",
        valueUnit: "%",
        valueColor: "red",
      },
      {
        title: "Profit Margin (USD)",
        value: "-0.121",
        valueUnit: "%",
        valueColor: "red",
        valueCustomColor: "blue",
      },
      {
        title: "Profit (ETH)",
        value: "+0.00235512",
        valueUnit: "ETH",
        valueColor: "",
        hint: "Some description about profit.",
      },
    ];
    return { args, items };
  },
  template: \`
    <FInfoGrid v-bind="args">
      <FInfoGridItem 
        v-for="(item, ix) in items"
        :key="ix"
        :index="ix"
        :title="item.title"
        :value="item.value"
        :unit="item.valueUnit"
        :color="item.valueColor"
        :hint="item.hint"
      />
    </FInfoGrid>
  \`,
});

export const Default = Template.bind({});
Default.args = { reverse: false, list: false };
`,locationsMap:{default:{startLoc:{col:44,line:10},endLoc:{col:2,line:62},startBody:{col:44,line:10},endBody:{col:2,line:62}}}}},title:"Components/FInfoGrid",component:m},p=a(n=>({components:{FInfoGrid:m,FInfoGridItem:v},setup(){return{args:n,items:[{title:"ETH Position",value:"5.27638999",valueUnit:"ETH"},{title:"24h changes",value:"+34.41",valueUnit:"%",valueColor:"green"},{title:"7d changes",value:"-1.41",valueUnit:"%",valueColor:"red"},{title:"Profit Margin (USD)",value:"-0.121",valueUnit:"%",valueColor:"red",valueCustomColor:"blue"},{title:"Profit (ETH)",value:"+0.00235512",valueUnit:"ETH",valueColor:"",hint:"Some description about profit."}]}},template:`
    <FInfoGrid v-bind="args">
      <FInfoGridItem 
        v-for="(item, ix) in items"
        :key="ix"
        :index="ix"
        :title="item.title"
        :value="item.value"
        :unit="item.valueUnit"
        :color="item.valueColor"
        :hint="item.hint"
      />
    </FInfoGrid>
  `}),"Template"),c=p.bind({});c.args={reverse:!1,list:!1};const B=["Default"];export{c as Default,B as __namedExportsOrder,M as default};
//# sourceMappingURL=FInfoGrid.stories.d61ec229.js.map
