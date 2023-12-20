import { StoryFn } from "@storybook/vue3";
import { useAuth } from "./auth";
import { useToast } from "./toast";

export default {
  title: "Plugin/Auth",
};

const Template: StoryFn = (args) => ({
  setup() {
    const toast = useToast();
    const auth = useAuth();
    const open = () => {
      auth.show({
        authMethods: ["fennec", "mixin", "metamask", "walletconnect", "onekey"],
        scope: "PROFILE:READ",
        clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
        handleAuth: (data) => {
          toast.show({ message: JSON.stringify(data) });
        },
      });
    };

    return { open };
  },
  template: `
    <FButton color="primary" @click="open">Show Auth Modal</FButton>
  `,
});

export const Default = Template.bind({});
Default.args = {};

const Template2: StoryFn = (args) => ({
  setup() {
    const toast = useToast();
    const auth = useAuth();
    const open = () => {
      auth.show({
        authMethods: ["mixin"],
        scope: "PROFILE:READ",
        pkce: true,
        useEd25519KeyStore: true,
        privateKey:
          "7nCu4fwxbTqYH5ymhEvincz8BbiMll8gnw6cSvfgp9OZo6pabLgeGhsTf3umWtj8jk-qSupIUsO4hulL6pVRTA",
        publicKey: "maOqWmy4HhobE397plrY_I5PqkrqSFLDuIbpS-qVUUw",
        clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
        handleAuth: (data) => {
          toast.show({ message: JSON.stringify(data) });
        },
      });
    };

    return { open };
  },
  template: `
    <FButton color="primary" @click="open">Show Auth Modal</FButton>
  `,
});

export const Ed25519 = Template2.bind({});
Ed25519.args = {};
