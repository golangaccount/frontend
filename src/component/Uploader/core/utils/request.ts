import axios, { AxiosRequestConfig } from "axios";
import { Response } from "../types";

export const { CancelToken } = axios;
export { CancelToken as CancelTokenType, CancelTokenSource } from "axios";

const defaultConfig = {
    baseURL: "/api/v3",
    withCredentials: true,
};

export function requestAPI<T = any>(url: string, config?: AxiosRequestConfig) {
    return axios.request<Response<T>>({ ...defaultConfig, ...config, url });
}