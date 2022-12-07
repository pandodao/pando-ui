import { ref } from "vue";

import { FPayingModal } from "./FPayingModal";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FPayingModal",
  component: FPayingModal,
} as Meta<typeof FPayingModal>;

const Template: StoryFn<typeof FPayingModal> = (args) => ({
  components: { FPayingModal, FButton },

  setup() {
    const dialog = ref(false);

    const open = () => {
      dialog.value = true;
    };
    const close = () => {
      dialog.value = false;
    };

    return { args, dialog, open, close };
  },

  template: `
    <div>
      <FButton variant="outlined" block color="primary" v-bind="args" @click="open">
        Pay
      </FButton>

      <FPayingModal :show="dialog" @cancel="close" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
