import { ref } from "vue";

import { FPaymentModal } from "./FPaymentModal";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FPaymentModal",
  component: FPaymentModal,
} as Meta<typeof FPaymentModal>;

const Template: StoryFn<typeof FPaymentModal> = (args) => ({
  components: { FPaymentModal, FButton },

  setup({ emit }) {
    const dialog = ref(false);

    const open = () => {
      console.log('open')
      dialog.value = true;
    };
    const close = () => {
      dialog.value = false;
    };

    return { args, dialog, open, close };
  },

  template: `
    <div>
      <FButton block color="primary" @click="open">
        Payment
      </FButton>

      <FPaymentModal v-model="dialog" v-bind="args" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
