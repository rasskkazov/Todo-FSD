import Plus from "@/shared/assets/svg/Plus.svg";

import * as classes from "./AddTask.module.scss";

export const AddTask = () => {
  return (
    <button type="submit" className={classes.button}>
      <Plus className={classes.button__icon} />
    </button>
  );
};
