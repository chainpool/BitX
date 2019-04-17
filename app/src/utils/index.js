import store from "store";
import { BigNumber } from "bignumber.js";
import { default as queryString } from "query-string";
import device from "current-device";
export * from "./bitJS";
export * from "./patterns";
export * from "./request";

let ipcRenderer;
if (window.require) {
  ({ ipcRenderer } = window.require("electron"));
}

export const ipc = ipcRenderer;

export const isEmpty = value => {
  return isNaN(value) || value === undefined || value === "" || value === {};
};
export const isNumber = value => typeof value === "number";

export const isFunction = fun => typeof fun === "function";

export const isString = value => typeof value === "string";

export const localSave = {
  get: key => {
    return store.get(key);
  },
  set: (key, value) => {
    store.set(key, value);
  },
  remove: key => {
    store.remove(key);
  },
  clearAll: () => {
    store.clearAll();
  }
};

export const formatNumber = {
  toPrecision: (value, precision = 0, multiplication = false) => {
    precision = Number(precision);
    if (isEmpty(value) || isEmpty(precision) || isNaN(value)) return "";
    if (multiplication)
      return new BigNumber(value)
        .multipliedBy(Math.pow(10, precision))
        .toFixed(0);
    return new BigNumber(value)
      .dividedBy(Math.pow(10, precision))
      .toFixed(precision);
  },
  toBtcPrecision: (value, multiplication = false) => {
    return formatNumber.toPrecision(value, 8, multiplication);
  }
};

export const setBlankSpace = (value, unit) => {
  if (isEmpty(value)) return unit;
  return `${value} ${unit}`;
};

export const parseQueryString = payload => {
  return queryString.parse(payload);
};

export const Device = {
  isMobile: () => device.mobile(),
  isDesktop: () => device.desktop()
};
