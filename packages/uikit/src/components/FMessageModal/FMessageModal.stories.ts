import { FMessageModal } from "./FMessageModal";
import { FButton } from "../FButton";
import { ref } from "vue";
import { Meta, StoryFn } from "@storybook/vue3";

import { useModal } from "../../plugins/modal";

export default {
  title: "Components/FMessageModal",
  component: { FMessageModal },
} as Meta<typeof FMessageModal>;

const Template: StoryFn<typeof FMessageModal> = (args) => ({
  components: { FMessageModal, FButton },
  setup() {
    const modal = ref();

    const open = () => {
      modal.value.show();
    };

    return { args, modal, open };
  },
  template: `
    <FButton color="primary" @click="open">Open</FButton>

    <FMessageModal ref="modal" v-bind="args"></FMessageModal>
  `,
});

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  text: "Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",
  confirm: {
    props: { color: "error" },
    text: "confirm",
  },
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  type: "warning",
};

const Template2: StoryFn<typeof FMessageModal> = (args) => ({
  setup() {
    const modal = useModal();

    const open = () => {
      modal.show({
        type: "warning",
        title: "Warning",
        text: "Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",
        confirm: {
          props: { color: "error" },
          text: "confirm",
        },
        ...args,
      });
    };

    return { open, args };
  },

  template: `
    <FButton color="primary" @click="open">Open</FButton>
  `,
});

export const Functional = Template2.bind({});
Functional.args = {};
