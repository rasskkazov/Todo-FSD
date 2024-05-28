import { CompleteTask } from "@/features";
import { RemoveTask } from "@/features/remove/ui/removeTask";

export const TaskCard = ({ content, id }: { content: string; id: number }) => {
  return (
    <div className="card">
      <div className="content">{content}</div>
      <div className="actions">
        <CompleteTask id={id} />
        <RemoveTask id={id} />
      </div>
    </div>
  );
};
