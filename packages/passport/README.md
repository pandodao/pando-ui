# Mixin Account Passport

Vue3 plugin for multi auth channel for mixin account, support Mixin Apps, fennec, and MVM, depend on @foxone/uikit.

**Please be attention: This repo is for @foxone/mixin-passport version 1.x, if you are using @foxone/uikit@3.x Please visit [Version 0.x](https://github.com/fox-one/fe-tools-mixin/tree/main/packages/passport)**

## Use via npm

install from npm

```shell
// create app use vite
// yarn create vite my-vue-app --template vue

// install lastest version passport of 1.x and its dependencies
yarn add @foxone/mixin-passport@1 \
  @foxone/uikit @foxone/icons \
  vuetify \
  uuid \
  @babel/runtime
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
  infuraId?: string;
  chainId?: number;
  customizeToken?: boolean;
}
```

### Auth

use actions of passport in need

```ts
import { usePassport } from "@foxone/mixin-passport/lib/helper";

// must use in setup function
const passport = usePassport();

const authData = await passport.auth({
  // AuthOptions
});
```

```ts
interface AuthOptions {
  origin?: string;
  JWTPayload?: any;
  // if customizeToken = false:
  // mvm and fennec channel will return access token for https://api.mixin.one/me
  // developer can save this token to access Mixin Messenger backend
  // ATTENTION: /me token has a short expire time (about one day)
  // token will be refreshed everytime sync function executed
  // mixin oauth channel will return Mixin OAuth Token

  // if customizeToken = true:
  // developer should provide hooks for exchange token or auth code or signed message to customizeToken token
  // developer should both token and mixin_token for Mixin OAuth in order to access mixin assets
  // token will NOT be refershed in sync function
  customizeToken?: boolean;

  // if signMessage = false
  // mvm will use /me token as auth type

  // if signMessage = true
  // mvm connect will ask user to sign message
  // developer should provider hooks to verfiy signature and distribute custom token
  signMessage?: boolean;
  hooks?: {
    beforeSignMessage?: () => Promise<SignMessageParams>;
    onDistributeToken?: (params: {
      type: "mixin_token" | "signed_message" | "mixin_code";
      code?: string;
      token?: string;
      message?: string;
      signature?: string;
    }) => Promise<{ token: string; mixin_token?: string }>;
    afterDisconnect?: () => void;
  };
  authMethods?: AuthMethod[];
  // Mixin oauth params
  clientId?: string;
  scope?: string;
  isFiresbox?: boolean;
  pkce?: boolean;
  hosts?: string[];
}

export interface AuthData {
  token: string;
  channel: AuthMethod;
  mixin_token: string;
}
```

### Sync

sync locale auth data with passport

```ts
const tokenLocale = "";
const channelLocale = "";
const mixinTokenLocale = "";

const authData = await passport.sync({
  channel: channelLocale,
  token: tokenLocale,
  mixin_token: mixinTokenLocale,
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
export interface PaymentOptions {
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
