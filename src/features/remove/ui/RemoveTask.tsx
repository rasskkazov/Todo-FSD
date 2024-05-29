import Trash from "@/shared/assets/svg/TrashSimple.svg";
import { IconBtn } from "@/shared/ui/IconBtn";

import { removeTask } from "../model/removeTask";

export const RemoveTask = ({ id }: { id: number }) => {
  return <IconBtn Icon={Trash} onClick={() => removeTask(id)} />;
};
