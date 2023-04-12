export default class MixinAPI {
  token = "";

  baseUrl = "https://api.mixin.one";

  authIntercept: any = null;

  async request(url: string, method = "GET") {
    let options = {
      method,
      headers: {},
    };

    if (this.authIntercept) {
      options = this.authIntercept(options);
    }

    const resp = await fetch(this.baseUrl + url, options);
    const json = await resp.json();

    return json.data;
  }

  getAsset(id: string) {
    return this.request(`/asset?id=${id}`);
  }

  getAssets() {
    return this.request("/assets");
  }

  codes(code: string) {
    return this.request(`/codes/${code}`);
  }

  getProfile() {
    return this.request("/me");
  }
}
