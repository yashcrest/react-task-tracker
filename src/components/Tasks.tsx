import Task from "./Task";
import { ITask } from "./types";

type TasksProps = {
  tasks: ITask[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const Tasks = ({ tasks, onDelete, onToggle }: TasksProps) => {
  return (
    <>
      {tasks.map((task: ITask, index: number) => {
        return (
          <Task
            key={index}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </>
  );
};

export default Tasks;
