var l=Object.defineProperty;var r=(n,t)=>l(n,"name",{value:t,configurable:!0});import{A as p,a as e,r as d}from"./vue.esm-bundler.b09b7c5a.js";import{K as f}from"./v3-infinite-loading.e708b6f4.js";import{F as c}from"./FFullscreenLoading.fc56930d.js";import{a as u}from"./locale.88650f04.js";import{F as L}from"./FListItem.c2eb778d.js";import"./VProgressCircular.7bee339a.js";import"./VIcon.bd07cc2b.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./intersectionObserver.1e3a532e.js";import"./VOverlay.7cd76152.js";import"./router.b8d53e34.js";import"./easing.36b781ab.js";import"./anchor.b337e11f.js";import"./transition.d2bea911.js";import"./proxiedModel.28fe5444.js";import"./display.c2299c89.js";import"./VListItem.f3bec281.js";import"./createSimpleFunctional.6499d319.js";import"./index.eca3ba9a.js";import"./variant.fbd007cc.js";import"./border.6019dc9f.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./VAvatar.95d7d85f.js";import"./VImg.11b5f250.js";import"./index.8137a4d7.js";const s=p({name:"FInfiniteLoad",props:{completeText:{type:String,default:""},errorText:{type:String,default:""}},setup(n,{slots:t}){const{t:i}=u();return()=>e(f,null,{spinner:()=>e(c,{size:"16"},null),complete:()=>e("div",{class:"f-infinited-load__hint"},[e("span",null,[n.completeText||i("$vuetify.uikit.infinite_complete")])]),error:({retry:o})=>e("div",{class:"f-infinited-load__hint"},[e("span",null,[n.errorText||i("$vuetify.uikit.infinite_error")]),e("span",{onClick:o,class:"f-infinited-load__retry"},[i("$vuetify.uikit.retry")])]),...t})}}),Q={parameters:{storySource:{source:`import { ref } from "vue";
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
  `}),"Template"),v=F.bind({});v.args={};const R=["Default"];export{v as Default,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=FInfiniteLoad.stories.9843c4b6.js.map
