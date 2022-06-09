import { Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import createClsxProps from "./create-clsx-props";

function jsx(type: any, props: any, key: any) {
  return _jsx(type, createClsxProps(props), key);
}

function jsxs(type: any, props: any, key: any) {
  return _jsxs(type, createClsxProps(props), key);
}

export { Fragment, jsx, jsxs };
