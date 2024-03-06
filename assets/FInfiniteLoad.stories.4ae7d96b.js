var l=Object.defineProperty;var r=(n,t)=>l(n,"name",{value:t,configurable:!0});import{D as p,a as e,r as d}from"./vue.esm-bundler.80cafc0b.js";import{K as f}from"./v3-infinite-loading.46851eaf.js";import{F as c}from"./FFullscreenLoading.a267953c.js";import{a as u}from"./locale.68d0262d.js";import{F as L}from"./FListItem.b2ca06e9.js";import"./VProgressCircular.fec55325.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./intersectionObserver.addd26f6.js";import"./VIcon.ac9f05d6.js";import"./VOverlay.a7e28035.js";import"./proxiedModel.dbd4de1d.js";import"./easing.da2e9236.js";import"./anchor.5ba72fdd.js";import"./router.9241c2dd.js";import"./display.1ed39e23.js";import"./transition.b6a16e6c.js";import"./VListItem.da04c970.js";import"./createSimpleFunctional.19425ddc.js";import"./border.b14058ef.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./rounded.b42653ce.js";import"./variant.1e842247.js";import"./index.d4fa9fd4.js";import"./VAvatar.7760fc0a.js";import"./VImg.78b97665.js";import"./index.f2b6c1e4.js";import"./VDefaultsProvider.522cf1e0.js";const s=p({name:"FInfiniteLoad",props:{completeText:{type:String,default:""},errorText:{type:String,default:""}},setup(n,{slots:t}){const{t:i}=u();return()=>e(f,null,{spinner:()=>e(c,{size:"16"},null),complete:()=>e("div",{class:"f-infinited-load__hint"},[e("span",null,[n.completeText||i("$vuetify.uikit.infinite_complete")])]),error:({retry:o})=>e("div",{class:"f-infinited-load__hint"},[e("span",null,[n.errorText||i("$vuetify.uikit.infinite_error")]),e("span",{onClick:o,class:"f-infinited-load__retry"},[i("$vuetify.uikit.retry")])]),...t})}}),R={parameters:{storySource:{source:`import { ref } from "vue";
import { FInfiniteLoad } from "./FInfiniteLoad";
import { FListItem } from "../FListItem";
import { StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FInfiniteLoad",
  component: FInfiniteLoad,
};

const Template: StoryFn<typeof FInfiniteLoad> = (args) => ({
  components: { FInfiniteLoad, FListItem },
  setup() {
    const items = ref<string[]>([]);

    async function loadData(state) {
      console.log("Load Data...");
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (items.value.length > 20) {
            state.complete();
            reject();
          } else if (Math.random() < 0.1) {
            state.error();
            reject();
          } else {
            items.value = [...items.value, ...["A", "B", "C", "D", "E"]];
            state.loaded();
            resolve();
          }
        }, 3000);
      });
    }

    return { args, items, loadData };
  },
  template: \`
    <div class="list">
      <FListItem v-for="(item, index) in items" :key="index" :title="item">
      </FListItem>
    </div>
    <FInfiniteLoad @infinite="(state) => loadData(state)" />
  \`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:48,line:11},endLoc:{col:2,line:44},startBody:{col:48,line:11},endBody:{col:2,line:44}}}}},title:"Components/FInfiniteLoad",component:s},F=r(n=>({components:{FInfiniteLoad:s,FListItem:L},setup(){const t=d([]);async function i(o){return console.log("Load Data..."),new Promise((m,a)=>{setTimeout(()=>{t.value.length>20?(o.complete(),a()):Math.random()<.1?(o.error(),a()):(t.value=[...t.value,"A","B","C","D","E"],o.loaded(),m())},3e3)})}return r(i,"loadData"),{args:n,items:t,loadData:i}},template:`
    <div class="list">
      <FListItem v-for="(item, index) in items" :key="index" :title="item">
      </FListItem>
    </div>
    <FInfiniteLoad @infinite="(state) => loadData(state)" />
  `}),"Template"),v=F.bind({});v.args={};const U=["Default"];export{v as Default,U as __namedExportsOrder,R as default};
//# sourceMappingURL=FInfiniteLoad.stories.4ae7d96b.js.map
