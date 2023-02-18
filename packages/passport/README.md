# Mixin Account Passport

Vue3 plugin for multi auth channel for mixin account, support Mixin Apps, fennec, and MVM, depend on @foxone/uikit.

## Use via npm

install from npm

```shell
yarn add @foxone/mixin-passport
```

install plugins

```ts
import { createApp } from "vue";
import UIKit from "@foxone/uikit";
import { usePresets } from "@foxone/uikit/presets";
import Passport from "@foxone/mixin-passport";

const vuetify = createVuetify(
  usePresets({
    // overwrite vuetify options
  })
);

app.use(vuetify);

Vue.use(UIKit);

Vue.use(Passport, {
  // PassportOptions
});
```

```ts
interface PassportOptions {
  infuraId?: string; // Needed by WalletConnect for MVM connection
  chainId?: number; //
  onDisconnect?: () => void; // callback for wallet disconnect. eg: Metamask chain changed
}
```

### Auth

use actions of passport in need

```ts
import { usePassport } from "@foxone/mixin-passport/lib/helper";

// must use in setup function
const passport = usePassport();

const { token, channel } = await passport.auth({
  // AuthOptions
});
```

```ts
interface AuthOptions {
  origin: string; // used for fennec identify website
  config?: { infuraId?: string };
  JWTPayload?: any;
  getTokenByCode?: (code: string) => Promise<string>; // custom token action while login by Mixin Messenager OAuth
  authMethods?: AuthMethod[]; // support wallets
  clientId?: string;
  scope?: string;
  isFiresbox?: boolean;
  pkce?: boolean;
  hosts?: string[]; // custom mixin oauth API host
}
```

### Sync

sync locale auth data with passport

```ts
const tokenLocale = "";
const channelLocale = "";

const { token, channel } = await passport.sync({
  channel: channelLocale,
  token: tokenLocale,
});
```

### Payment

payment according to auth channel

```ts
//transfer
await passport.payment({
  // PaymentOptions
});
```

```ts
interface PaymentOptions {
  // transfer params
  assetId?: string;
  amount?: string;
  recipient?: string;
  traceId?: string;
  memo?: string;
  // multisig params
  code?: string;
  multisig?: boolean;
  // common params
  hideCheckingModal?: boolean;
  checker?: () => Promise<boolean>;
}
```

### Assets

get wallet asset

```ts
const asset = await passport.getAsset();
```

get wallet assets

```ts
const assets = await passport.getAssets();
```

## Use via scripts

Demo

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- insert styles -->
    <link
      href="https://cdn.jsdelivr.net/npm/@foxone/mixin-passport@1.1.1/dist/style.css"
      rel="stylesheet"
    />
    <title>Passport UMD Demo</title>
    <style>
      button {
        border: 1px solid #ccc;
        padding: 12px;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <button id="authAction" class="f-button">Auth</button>
      <button id="paymentAction">Payment</button>
      <button id="getAssetsAction">Get Assets</button>
    </div>

    <!-- insert scripts -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@foxone/mvm@0.1.27/dist/mvm.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@foxone/mixin-passport@1.1.1/dist/index.umd.min.js"></script>

    <script>
      const passport = MixinPassport.init();

      const authAction = document.getElementById("authAction");
      const paymentAction = document.getElementById("paymentAction");
      const getAssetsAction = document.getElementById("getAssetsAction");

      authAction.onclick = () => {
        passport
          .auth({
            origin: "FoxONE UIKit",
            authMethods: ["mixin", "fennec", "metamask"],
            clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
            scope: "PROFILE:READ ASSETS:READ SNAPSHOTS:READ",
            pkce: true,
          })
          .then((data) => {
            console.log(data);
          });
      };

      paymentAction.onclick = () => {
        passport.payment({
          assetId: "965e5c6e-434c-3fa9-b780-c50f43cd955c",
          amount: "1",
          recipient: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
          memo: "Test",
          checker: () => {
            return new Promise((reslove) => {
              setTimeout(function () {
                reslove(true);
              }, 5000);
            });
          },
        });
      };

      getAssetsAction.onclick = () => {
        passport.getAssets().then((assets) => {
          console.log(assets);
        });
      };
    </script>
  </body>
</html>
```

```ts
// init passport
MixinPassport.init({
  // InitOptions
});

interface InitOptions {
  vuetifyOptions?: VuetifyOptions;
  container?: string;
}
```
