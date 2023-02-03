# Talkee

Here is description

## Usage

### Use in Vue project

Talkee is build with Vue3, Vuetify, @foxone/uikit, @foxone/mixin-passport, if you use these freamwork by coincidence, you can use Talkee easily.

#### install

```shell
yarn add @foxone/talkee
```

#### import

```ts
import { createApp } from "vue";
// import other dependcies
import { createVuetify } from "vuetify";
import UIKit from "@foxone/uikit";
import { usePresets } from "@foxone/uikit/presets";
import Passport from "@foxone/mixin-passport";
import Talkee from "@foxone";

const vuetify = createVuetify(
  usePresets({
    // overwrite vuetify options
  })
);

// use dependcies
app.use(vuetify);
app.use(UIKit);
app.use(Passport);
app.use(Talkee);
```

#### Usage

```
// .vue
<template>
  <Talkee v-bind='args' />
</template>

<script lang="ts" setup>
const args = {
  apiBase: "",
  slug: "",
  siteId: "",
  clientId: "",
}
</script>
```

### Use via scripts

#### Demo

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- insert styles -->
    <link
      href="https://cdn.jsdelivr.net/npm/talkee@1.0.1/dist/dist/style.css"
      rel="stylesheet"
    />
    <title>Talkee UMD Demo</title>
  </head>
  <body>
    <!-- insert scripts -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3.2.45/dist/vue.global.prod.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/talkee@1.0.1/dist/index.umd.js"></script>

    <script>
      /**
       * options: {
       *  showLink?: boolean // show hash link or not
       *  apiBase?: string;
       *  slug?: string;
       *  siteId?: string;
       *  clientId?: string; // Mixin OAuth ClientID
       *  vuetifyOptions?: VuetifyOptions; // options to covert vuetify default options
       *  container?: string; // Selector that Talkee append to
       *  locale?: string; // en, ja, zhHans, zhHant
       *  passport?: PassportOptions;
       *  auth?: AuthMethodGlobalOptions;
       *  toast?: ToastGlobalOptions;
       * }
       */
      Talkee.show({
        apiBase: "https://talkee-api.mixin.fan/api",
        slug: "7000103488-course-2367",
        siteId: "2",
        clientId: "61504be8-a9da-477d-9e18-448ac3780919",
      });
    </script>
  </body>
</html>
```
