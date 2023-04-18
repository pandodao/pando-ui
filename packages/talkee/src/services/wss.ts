import { Http } from "@foxone/utils";
import { useGlobals } from "../composables";
import { AxiosRequestConfig, AxiosResponse } from "axios";

function requestInterceptors() {
  const globals = useGlobals();

  return [
    (config: AxiosRequestConfig) => {
      config.baseURL = globals.wsApiBase.value;

      config.headers.Authorization = "Bearer " + globals.token.value;

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

      return resp.data;
    },
  ];
}

export const httpWs = new Http(
  {},
  [requestInterceptors()],
  [responseInterceptors()]
);
