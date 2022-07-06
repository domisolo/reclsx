import { Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import createClsxProps from "./create-clsx-props";

function jsx(type, props, key) {
  return _jsx(type, createClsxProps(props), key);
}

function jsxs(type, props, key) {
  return _jsxs(type, createClsxProps(props), key);
}

export { Fragment, jsx, jsxs };

// fix 'createElement' is not exported
export { createElement } from "react";
