import { Dispatch, SetStateAction } from "react";
import * as classes from "./Input.module.scss";
export const Input = ({
  placeholder,
  onChange,
  value,
}: {
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
}) => {
  return (
    <input
      placeholder={placeholder}
      className={classes.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
