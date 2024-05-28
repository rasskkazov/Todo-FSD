import Check from "@/shared/assets/svg/Check.svg";
import Undo from "@/shared/assets/svg/Undo.svg";
import { IconBtn } from "@/shared/ui/IconBtn";

import { toggleTask } from "../model/toggleTask";

export const ToggleTask = ({
  id,
  completed = false,
}: {
  id: number;
  completed?: boolean;
}) => {
  return (
    <IconBtn Icon={completed ? Undo : Check} onClick={() => toggleTask(id)} />
  );
};
