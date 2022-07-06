import { Fragment, jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import createClsxProps from "./create-clsx-props";

function jsxDEV(type, props, key, isStaticChildren, source, self) {
  return _jsxDEV(
    type,
    createClsxProps(props),
    key,
    isStaticChildren,
    source,
    self
  );
}

export { Fragment, jsxDEV };
