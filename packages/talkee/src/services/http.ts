import { Http } from "@foxone/utils";
import { useGlobals } from "../composables";
import { AxiosRequestConfig, AxiosResponse } from "axios";

function requestInterceptors() {
  const globals = useGlobals();

  return [
    (config: AxiosRequestConfig) => {
      const siteId = globals.siteId.value;
      const slug = globals.slug.value;
      const clientId = globals.clientId.value;

      config.baseURL = globals.apiBase.value;

      config.headers.Authorization = "Bearer " + globals.token.value;
      config.headers["X-LINKS-SITE-ID"] = globals.siteId.value;
      config.headers["X-LINKS-SLUG"] = globals.slug.value;

      config.params = {
        ...config.params,
        slug,
        site_id: siteId,
        client_id: clientId,
      };

      return config;
    },
  ];
}

function responseInterceptors() {
  return [
    (resp: AxiosResponse) => {
      if (resp.status == 401) {
        useGlobals().logout();
      }

      return resp.data;
    },
  ];
}

export const http = new Http(
  {},
  [requestInterceptors()],
  [responseInterceptors()]
);
