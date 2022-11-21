import { FAuthMethodModal } from "./FAuthMethodModal";
import { FButton } from "../FButton";
import { ref } from "vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FAuthMethodModal",
  component: { FAuthMethodModal },
} as Meta<typeof FAuthMethodModal>;

const Template: StoryFn<typeof FAuthMethodModal> = (args) => ({
  components: { FAuthMethodModal, FButton },
  setup() {
    const dialog = ref(false);
    const close = () => {
      console.log("close");
      dialog.value = false;
    };

    return { args, dialog, close };
  },
  template: `
    <FAuthMethodModal v-model="dialog" v-bind="args">
      <template #activator="{props}">
        <FButton color="primary" v-bind="props">Connect</FButton>
      </template>
    </FAuthMethodModal>
  `,
});

export const All = Template.bind({});
All.args = { wallets: ["fennec", "mixin", "metamask", "walletconnect"] };
