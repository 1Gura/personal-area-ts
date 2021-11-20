import {AxiosRequestConfig} from "axios";

export interface BaseInterface {
  id?: number | string,
  config?: AxiosRequestConfig<any>,
}

