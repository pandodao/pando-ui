import { defineComponent } from "vue";

export const FRender = defineComponent({
  name: "FRender",
  props: { content: { type: [Object, String], default: "" } },
  render() {
    return this.content;
  },
});
