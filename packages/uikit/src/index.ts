import "./styles/index.scss";
import * as allcomponents from "./components";
import { Toast } from "./plugins";

import type { App } from "vue";
import type { ToastGlobalOptions } from "./plugins/toast";

export interface UIKitOptions {
  components?: Record<string, any>;
  toast?: ToastGlobalOptions;
}

export default function install(app: App, options: UIKitOptions = {}) {
  const components = options.components || allcomponents;

  for (const key in components) {
    app.component(key, components[key]);
  }

  app.use(Toast, options.toast);
}

export * from "./presets";
