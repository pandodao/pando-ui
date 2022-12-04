import { FAuthMethodModal } from "./FAuthMethodModal";
import { FButton } from "../FButton";
import { ref } from "vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { useAuth } from "../../plugins/auth";

import { usePassport } from "../../../../passport/src/index"

export default {
  name: "FAuthMethodModal",
  component: { FAuthMethodModal },
} as Meta<typeof FAuthMethodModal>;

const Template: StoryFn<typeof FAuthMethodModal> = (args) => ({
  components: { FAuthMethodModal, FButton },
  setup() {
    const authModal = ref(null);

    const open = () => {
      authModal.value.show();
    };

    return { args, open, authModal };
  },
  template: `
    <FButton color="primary" @click="open">Auth</FButton>

    <FAuthMethodModal ref="authModal" v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  wallets: ["fennec", "mixin", "metamask", "walletconnect"],
  scope: "PROFILE:READ",
  clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
  pkce: true,
};

const Template2: StoryFn<typeof FAuthMethodModal> = (args) => ({
  setup() {
    const auth = useAuth();

    const open = () => {
      auth.show({
        wallets: ["fennec", "mixin", "metamask", "walletconnect"],
        scope: "PROFILE:READ",
        clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
        pkce: true,
        ...args,
      });
    };

    return { open, args };
  },

  template: `
    <FButton color="primary" @click="open">Auth</FButton>
  `,
});

export const Functional = Template2.bind({});
Functional.args = {};

const Template3: StoryFn = () => ({
  setup() {
    const passport = usePassport();

    const openAuth = async () => {
      try {
        const { channel, token } = await passport.auth();
        alert(channel + token)
      } catch (error: any) {
        alert(error);
      }
    }

    return { openAuth }
  },

  template: `
    <FButton color="primary" @click="openAuth">Auth</FButton>
  `
})

export const Passport = Template3.bind({});
Passport.args = {};