import { ref } from "vue";
import { FToast } from "./FToast";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";
import { useToast } from "../../plugins/toast";

export default {
  name: "FToast",
  component: FToast,
} as Meta<typeof FToast>;

const Template: StoryFn<typeof FToast> = (args) => ({
  components: { FToast, FButton },
  setup() {
    const toast = ref(false);
    const open = () => (toast.value = true);

    return { args, toast, open };
  },
  template: `
    <div>
      <FButton color="primary" @click="open">Open</FButton>
      <FToast v-model="toast" v-bind="args">This is a toast</FToast>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = { type: "success", action: { text: "Detail" } };

const Template2: StoryFn<typeof FToast> = (args) => ({
  setup() {
    const toast = useToast();
    const show = () =>
      toast.show({
        message: "This is a toast",
        type: ["success", "error", "warning"][
          Math.floor(Math.random() * 3)
        ] as any,
        ...args,
      });

    return { show, args };
  },
  template: `
    <FButton color="primary" @click="show">Show</FButton>
  `,
});

export const Functional = Template2.bind({});
Functional.args = {};
