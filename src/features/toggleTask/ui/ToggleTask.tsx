import Check from "@/shared/assets/svg/Check.svg";
import { IconBtn } from "@/shared/ui/IconBtn";
import { toggleTask } from "../model/toggleTask";

export const ToggleTask = ({ id }: { id: number }) => {
  return <IconBtn Icon={Check} onClick={() => toggleTask(id)} />;
};
