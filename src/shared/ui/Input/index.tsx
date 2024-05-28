import { UseFormRegisterReturn } from "react-hook-form";

import * as classes from "./Input.module.scss";
export const Input = ({
  register,
  placeholder,
}: {
  register: UseFormRegisterReturn<string>;
  placeholder?: string;
}) => {
  return (
    <input className={classes.input} {...register} placeholder={placeholder} />
  );
};
