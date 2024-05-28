import Check from "@/shared/assets/svg/Check.svg";
import { IconBtn } from "@/shared/ui/IconBtn";
import { completeTask } from "../model/completeTask";

export const CompleteTask = ({ id }: { id: number }) => {
  return <IconBtn Icon={Check} onClick={() => completeTask(id)} />;
};
