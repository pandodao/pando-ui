import "./styles/index.scss";

import * as allcomponents from "./components";
import { Toast, Auth, Modal, Payment } from "./plugins";

import type { App } from "vue";
import type { ToastGlobalOptions } from "./plugins/toast";
import type { AuthMethodGlobalOptions } from "./plugins/auth";
import type { MessageModalProps } from "./plugins/modal";
import type { PaymentOptions } from "./plugins/payment";

export interface UIKitOptions {
  components?: Record<string, any>;
  container?: string;
  toast?: ToastGlobalOptions;
  auth?: AuthMethodGlobalOptions;
  modal?: MessageModalProps;
  payment?: PaymentOptions;
}

export default function install(app: App, options: UIKitOptions = {}) {
  const components = options.components || allcomponents;

  for (const key in components) {
    app.component(key, components[key]);
  }

  app.use(Toast, { container: options.container, ...options.toast });
  app.use(Auth, { container: options.container, ...options.auth });
  app.use(Modal, { container: options.container, ...options.modal });
  app.use(Payment, { container: options.container, ...options.payment });
}
