import * as classes from "./Input.module.scss";
export const Input = ({ placeholder }: { placeholder: string }) => {
  return <input placeholder={placeholder} className={classes.input} />;
};
