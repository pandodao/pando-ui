import { Http } from "@foxone/utils";
import { useGlobals } from "../composables";
import { AxiosRequestConfig, AxiosResponse } from "axios";

function requestInterceptors() {
  const globals = useGlobals();

  return [
    (config: AxiosRequestConfig) => {
      config.baseURL = globals.apiBase.value;

      config.headers.Authorization = "Bearer " + globals.token.value;
      config.headers["X-TALKEE-SITE-ID"] = globals.siteId.value;
      config.headers["X-TALKEE-SITE-SLUG"] = globals.slug.value;

      return config;
    },
  ];
}

function responseInterceptors() {
  return [
    (resp: AxiosResponse) => {
      if (resp.status == 401 || resp.data?.data?.code === 401) {
        useGlobals().logout();
      }

      return resp.data.data;
    },
  ];
}

export const http = new Http(
  {},
  [requestInterceptors()],
  [responseInterceptors()]
);
