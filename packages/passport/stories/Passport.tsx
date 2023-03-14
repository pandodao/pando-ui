/* eslint-disable vue/one-component-per-file */
import "./Passport.scss";

import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { VAvatar, VIcon, VImg, VSheet } from "vuetify/components";
import { FButton, FFiatDivision, FListItem } from "@foxone/uikit/components";
import { useToast } from "@foxone/uikit/plugins/toast";
import { usePassport } from "@foxone/mixin-passport/lib/helper";
import { v4 as uuid } from "uuid";

export const Passport = defineComponent({
  name: "Passport",

  props: {
    authOptions: { type: Object },
    paymentOptions: { type: Object },
  },

  setup(props) {
    const token = ref("");
    const channel = ref("");
    const profile = ref<any>(null);
    const assets = ref<any>([]);
    const passport = usePassport();
    const toast = useToast();
    const loading = ref(false);

    const connected = computed(() => Boolean(token.value && channel.value));

    async function handleConnect() {
      try {
        const data = await passport.auth(props.authOptions as any);

        token.value = data.token;
        channel.value = data.channel;

        localStorage.setItem("token", data.token);
        localStorage.setItem("channel", data.channel);
      } catch (error) {
        console.log(error);
      }
    }

    async function handleDisconnect() {
      token.value = "";
      channel.value = "";

      localStorage.setItem("token", "");
      localStorage.setItem("channel", "");
    }

    async function handlePayment() {
      const traceId = uuid();
      const options = {
        ...props.paymentOptions,
        traceId,
        checker: async () => {
          const resp = await fetch(
            "https://api.mixin.one/transfers/trace/" + traceId,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token.value}`,
              },
            }
          );
          const json = await resp.json();

          if (json.data) {
            toast.success({ message: "Payment checked" });

            return true;
          } else {
            return false;
          }
        },
      };

      passport.payment(options);
    }

    watch(
      () => token.value,
      async () => {
        profile.value = await passport.getProfile();
        assets.value = await passport.getAssets();
      }
    );

    onMounted(async () => {
      try {
        loading.value = true;

        const localeToken = localStorage.getItem("token") || "";
        const localeChannel = localStorage.getItem("channel") || "";

        const data = await passport.sync({
          origin: "FoxONE UIKit",
          token: localeToken,
          channel: localeChannel as any,
          refreshToken: true,
        });

        console.log("after sync");

        token.value = data.token;
        channel.value = data.channel;

        loading.value = false;
      } catch (error) {
        console.log(error);
      }
    });

    return () => (
      <div class="passport-overvie-container">
        {loading.value || (
          <div class="passport-overview">
            {connected.value ? (
              <Connected
                profile={profile.value}
                assets={assets.value}
                onDisconnect={() => handleDisconnect()}
                onPayment={() => handlePayment()}
              />
            ) : (
              <Disconnected onConnect={() => handleConnect()} />
            )}
          </div>
        )}
      </div>
    );
  },
});

const Disconnected = defineComponent({
  name: "Disconnected2",

  emits: {
    connect: () => true,
  },

  setup(props, { emit }) {
    return () => (
      <div class="passport-account-disconnected">
        <VIcon>$FIconWalletAFill</VIcon>

        <div class="disconnected--hint">Please connect your wallet first</div>

        <FButton color="primary" onClick={() => emit("connect")}>
          Connect Wallet
        </FButton>
      </div>
    );
  },
});

const Connected = defineComponent({
  name: "Connected",

  props: {
    profile: Object,
    assets: Array,
  },

  emits: {
    disconnect: () => true,
    payment: () => true,
  },

  setup(props, { emit }) {
    const name = computed(() => props.profile?.full_name);
    const avatar = computed(() => props.profile?.avatar_url);
    const balance = computed(() => {
      const amount =
        props.assets?.reduce(
          (total: number, asset: any) =>
            total + asset.balance * asset.price_usd,
          0
        ) ?? 0;

      return new Intl.NumberFormat("en", {
        currency: "USD",
        style: "currency",
      }).formatToParts(amount);
    });

    return () => (
      <div class="passport-account-connected">
        <VAvatar size="48">
          <VImg src={avatar.value} />
        </VAvatar>

        <div class="user-name mt-2">
          <span>{name.value}</span>
        </div>

        <VSheet theme="dark" class="account-balance my-9">
          <div class="account-label mb-4">Wallet Assets</div>

          <FFiatDivision parts={balance.value} />
        </VSheet>

        <FListItem
          height="56"
          title="Disconnect"
          prependIcon="$FIconDisconnect"
          class="text-error px-0"
          onClick={() => emit("disconnect")}
        />
        <FListItem
          height="56"
          title="Payment"
          prependIcon="$FIconBorrow"
          class="px-0"
          onClick={() => emit("payment")}
        />
      </div>
    );
  },
});
