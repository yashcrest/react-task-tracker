import React from "react";
import { IconContext } from "react-icons";
import { AiFillDelete } from "react-icons/ai";
import { ITask } from "./types";

type TaskProps = {
  task: ITask;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const Task = ({ task, onDelete, onToggle }: TaskProps) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h5>
        {task.text}{" "}
        <AiFillDelete
          onClick={() => onDelete(task.id)}
          style={{
            color: "#dc3545",
            cursor: "pointer",
            minWidth: "30px",
            minHeight: "20px",
          }}
        />{" "}
      </h5>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
