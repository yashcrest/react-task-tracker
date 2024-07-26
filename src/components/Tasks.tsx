import Task from "./Task";
import React from "react";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => {
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onToggle={ontoggle}
        />;
      })}
    </>
  );
};

export default Tasks;
