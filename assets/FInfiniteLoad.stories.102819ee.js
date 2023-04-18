var l=Object.defineProperty;var r=(n,t)=>l(n,"name",{value:t,configurable:!0});import{A as p,a as e,r as d}from"./vue.esm-bundler.b09b7c5a.js";import{K as f}from"./v3-infinite-loading.e708b6f4.js";import{F as c}from"./FFullscreenLoading.efb66ac1.js";import{a as u}from"./locale.0dcd1420.js";import{F as L}from"./FListItem.62927a00.js";import"./VProgressCircular.8c9797f0.js";import"./VIcon.81f7ecc0.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./color.1fec8f8e.js";import"./intersectionObserver.8499cdfb.js";import"./VOverlay.4718cec8.js";import"./dimensions.b549aab6.js";import"./easing.36b781ab.js";import"./anchor.b337e11f.js";import"./transition.1a560eae.js";import"./router.524cabd1.js";import"./proxiedModel.f0d8de9f.js";import"./display.fd968d5a.js";import"./VListItem.679e6b02.js";import"./createSimpleFunctional.06ddaa9a.js";import"./index.eca3ba9a.js";import"./variant.eababd72.js";import"./border.6d45fe61.js";import"./density.43b8d8b2.js";import"./elevation.844f69c6.js";import"./rounded.ccd03645.js";import"./VAvatar.84448bc0.js";import"./VImg.be2c1e9b.js";import"./index.21842925.js";const s=p({name:"FInfiniteLoad",props:{completeText:{type:String,default:""},errorText:{type:String,default:""}},setup(n,{slots:t}){const{t:i}=u();return()=>e(f,null,{spinner:()=>e(c,{size:"16"},null),complete:()=>e("div",{class:"f-infinited-load__hint"},[e("span",null,[n.completeText||i("$vuetify.uikit.infinite_complete")])]),error:({retry:o})=>e("div",{class:"f-infinited-load__hint"},[e("span",null,[n.errorText||i("$vuetify.uikit.infinite_error")]),e("span",{onClick:o,class:"f-infinited-load__retry"},[i("$vuetify.uikit.retry")])]),...t})}}),U={parameters:{storySource:{source:`import { ref } from "vue";
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
          } else if (Math.random() < 0.5) {
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
`,locationsMap:{default:{startLoc:{col:48,line:11},endLoc:{col:2,line:44},startBody:{col:48,line:11},endBody:{col:2,line:44}}}}},title:"Components/FInfiniteLoad",component:s},F=r(n=>({components:{FInfiniteLoad:s,FListItem:L},setup(){const t=d([]);async function i(o){return console.log("Load Data..."),new Promise((m,a)=>{setTimeout(()=>{t.value.length>20?(o.complete(),a()):Math.random()<.5?(o.error(),a()):(t.value=[...t.value,"A","B","C","D","E"],o.loaded(),m())},3e3)})}return r(i,"loadData"),{args:n,items:t,loadData:i}},template:`
    <div class="list">
      <FListItem v-for="(item, index) in items" :key="index" :title="item">
      </FListItem>
    </div>
    <FInfiniteLoad @infinite="(state) => loadData(state)" />
  `}),"Template"),v=F.bind({});v.args={};const W=["Default"];export{v as Default,W as __namedExportsOrder,U as default};
//# sourceMappingURL=FInfiniteLoad.stories.102819ee.js.map
