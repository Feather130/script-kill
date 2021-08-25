import Taro from "@tarojs/taro";
import { baseUrl } from "../config";

type OptionType = {
  url: string;
  data?: object | string;
  method?: any;
  header: object;
  success: any;
  error: any;
  xhrFields: object;
};

export default {
  baseOptions(params, method = "GET") {
    let { url, data } = params;
    let contentType = "application/json";
    contentType = params.contentType || contentType;

    const option: OptionType = {
      url: url.indexOf("http") !== -1 ? url : baseUrl + url,
      data: data,
      method: method,
      header: {
        "content-type": contentType,
      },
      xhrFields: { withCredentials: true },
      success(res) {
        return res.data;
      },
      error() {},
    };
    return Taro.request(option);
  },
  get(url, data?: object) {
    let option = { url, data };
    return this.baseOptions(option);
  },
};
