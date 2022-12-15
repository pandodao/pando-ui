export default class MixinAPI {
  token = "";

  baseUrl = "https://api.mixin.one";

  config(options: { baseUrl?: string; token?: string }) {
    options.baseUrl && (this.baseUrl = options.baseUrl);
    options.token && (this.token = options.token);
  }

  request(url: string, method) {
    return fetch(this.baseUrl + url, {
      headers: { Authorization: `Bearer ${this.token}` },
      method,
    });
  }

  getAsset(id: string) {
    return this.request(`/asset?id=${id}`, "get");
  }

  getAssets() {
    return this.request(`/assets`, "get");
  }

  codes(code: string) {
    return this.request(`/codes/${code}`, "get");
  }
}
