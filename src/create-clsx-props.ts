import clsx from "clsx";

const hasOwnProperty = Object.prototype.hasOwnProperty;

const createClsxProps = (props: any) => {
  if (!hasOwnProperty.call(props, "className")) {
    return props;
  }

  const { className } = props;
  if (!className || typeof className !== "object") {
    return props;
  }

  const newProps: any = { ...props };
  newProps.className = clsx(className);

  return newProps;
};

export default createClsxProps;
